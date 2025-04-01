import {
  addDoc,
  collection,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { handleError } from "../utils/errorHandler";
import { db } from "../config/firebase";

export const getSteps = async (userId: string) => {
  try {
    const stepsRef = collection(db, "users", userId, "steps");
    const stepsSnap = await getDocs(stepsRef);

    if (stepsSnap.empty) {
      console.log("No steps records found.");
      return [];
    }

    const stepsData = stepsSnap.docs.map((doc) => doc.data());
    return stepsData;
  } catch (error) {
    handleError(error, "Failed to fetch steps records");
  }
};

export const getTodaySteps = async (userId: string) => {
  try {
    const today = new Date().toISOString().split("T")[0];
    const stepsRef = collection(db, "users", userId, "steps");

    const q = query(
      stepsRef,
      where("createdAt", ">=", today),
      where("createdAt", "<", `${today}T23:59:59.999Z`)
    );
    const stepsSnap = await getDocs(q);

    if (stepsSnap.empty) {
      console.log("No steps record for today.");
      return null;
    }

    const stepsData = stepsSnap.docs[0].data();
    const stepsDocId = stepsSnap.docs[0].id;
    return { ...stepsData, id: stepsDocId };
  } catch (error) {
    handleError(error, "Failed to fetch today's steps record");
  }
};

export const addSteps = async (userId: string, steps: number) => {
  try {
    const stepsRef = collection(db, "users", userId, "steps");
    const date = new Date();
    const docRef = await addDoc(stepsRef, {
      steps: steps,
      createdAt: date.toISOString(),
    });

    return docRef.id;
  } catch (error) {
    handleError(error, "Failed to add steps record");
  }
};

export const editSteps = async (userId: string, newSteps: number) => {
  try {
    const stepsData = await getTodaySteps(userId);

    if (stepsData === null) {
      console.log("No steps record found for today.");
      return null;
    }

    const stepsDocId = stepsData!.id;

    const stepsRef = doc(db, "users", userId, "steps", stepsDocId);

    await updateDoc(stepsRef, {
      steps: newSteps,
    });
  } catch (error) {
    handleError(error, "Failed to edit steps record");
  }
};
