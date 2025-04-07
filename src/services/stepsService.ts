import { db } from "../config/firebase";
import {
  addDoc,
  collection,
  doc,
  DocumentData,
  getDocs,
  limit,
  orderBy,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { StepsRecords, StepsRecordWithId } from "../types/stepsTypes";
import { createCustomErrorMessage } from "../utils/errorHandler";

export const getStepsRecords = async (
  userId: string
): Promise<StepsRecords> => {
  try {
    const stepsRef = collection(db, "users", userId, "steps");
    const stepsQuery = query(stepsRef, orderBy("createdAt", "desc"), limit(7));
    const stepsSnap = await getDocs(stepsQuery);

    if (stepsSnap.empty) {
      console.log("No steps records found.");
      return [];
    }

    const stepsData: StepsRecords = stepsSnap.docs
      .map((doc) => {
        const data = doc.data() as DocumentData;
        return { createdAt: data.createdAt, steps: data.steps };
      })
      .reverse();
    return stepsData;
  } catch (error) {
    const message = createCustomErrorMessage(
      error,
      "Failed to fetch steps records."
    );
    throw new Error(message);
  }
};

export const getTodaySteps = async (
  userId: string
): Promise<StepsRecordWithId | null> => {
  try {
    const today = new Date().toISOString().split("T")[0];
    const stepsRef = collection(db, "users", userId, "steps");

    const stepsQuery = query(
      stepsRef,
      where("createdAt", ">=", today),
      where("createdAt", "<", `${today}T23:59:59.999Z`)
    );
    const stepsSnap = await getDocs(stepsQuery);

    if (stepsSnap.empty) {
      console.log("No steps record for today.");
      return null;
    }

    const stepsData = stepsSnap.docs[0].data() as DocumentData;
    const stepsDocId = stepsSnap.docs[0].id;
    const record: StepsRecordWithId = {
      createdAt: stepsData.createdAt,
      steps: stepsData.steps,
      id: stepsDocId,
    };
    return record;
  } catch (error) {
    const message = createCustomErrorMessage(
      error,
      "Failed to fetch today's steps record."
    );
    throw new Error(message);
  }
};

export const addTodaySteps = async (
  userId: string,
  steps: number
): Promise<string> => {
  try {
    const stepsRef = collection(db, "users", userId, "steps");
    const date = new Date();
    const docRef = await addDoc(stepsRef, {
      steps: steps,
      createdAt: date.toISOString(),
    });

    return docRef.id;
  } catch (error) {
    const message = createCustomErrorMessage(
      error,
      "Failed to add steps record."
    );
    throw new Error(message);
  }
};

export const editTodaySteps = async (
  userId: string,
  newSteps: number
): Promise<string> => {
  try {
    const stepsData = await getTodaySteps(userId);

    if (stepsData === null) {
      throw new Error("No steps record found for today.");
    }

    const stepsDocId = stepsData.id;

    const stepsRef = doc(db, "users", userId, "steps", stepsDocId);

    await updateDoc(stepsRef, {
      steps: newSteps,
    });

    return stepsDocId;
  } catch (error) {
    const message = createCustomErrorMessage(
      error,
      "Failed to edit steps record."
    );
    throw new Error(message);
  }
};
