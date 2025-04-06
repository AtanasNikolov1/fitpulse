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
import { WeightRecords, WeightRecordWithId } from "../types/weightTypes";
import { createCustomErrorMessage } from "../utils/errorHandler";

export const getWeightRecords = async (
  userId: string
): Promise<WeightRecords | never> => {
  try {
    const weightRef = collection(db, "users", userId, "weight");
    const weightQuery = query(
      weightRef,
      orderBy("createdAt", "desc"),
      limit(7)
    );
    const weightSnap = await getDocs(weightQuery);

    if (weightSnap.empty) {
      console.log("No weight records found.");
      return [];
    }

    const weightData: WeightRecords = weightSnap.docs
      .map((doc) => {
        const data = doc.data() as DocumentData;
        return { createdAt: data.createdAt, weight: data.weight };
      })
      .reverse();
    return weightData;
  } catch (error) {
    const message = createCustomErrorMessage(
      error,
      "Failed to fetch weight records."
    );
    throw new Error(message);
  }
};

export const getTodayWeight = async (
  userId: string
): Promise<WeightRecordWithId | null | never> => {
  try {
    const today = new Date().toISOString().split("T")[0];
    const weightRef = collection(db, "users", userId, "weight");

    const weightQuery = query(
      weightRef,
      where("createdAt", ">=", today),
      where("createdAt", "<", `${today}T23:59:59.999Z`)
    );
    const weightSnap = await getDocs(weightQuery);

    if (weightSnap.empty) {
      console.log("No weight record for today.");
      return null;
    }

    const weightData = weightSnap.docs[0].data() as DocumentData;
    const weightDocId = weightSnap.docs[0].id;

    const record: WeightRecordWithId = {
      createdAt: weightData.createdAt,
      weight: weightData.weight,
      id: weightDocId,
    };
    return record;
  } catch (error) {
    const message = createCustomErrorMessage(
      error,
      "Failed to fetch today's weight record."
    );
    throw new Error(message);
  }
};

export const addTodayWeight = async (
  userId: string,
  weight: number
): Promise<string | never> => {
  try {
    const weightRef = collection(db, "users", userId, "weight");
    const date = new Date();
    const docRef = await addDoc(weightRef, {
      weight: weight,
      createdAt: date.toISOString(),
    });

    return docRef.id;
  } catch (error) {
    const message = createCustomErrorMessage(
      error,
      "Failed to add weight record."
    );
    throw new Error(message);
  }
};

export const editTodayWeight = async (
  userId: string,
  newWeight: number
): Promise<string | never> => {
  try {
    const weightData = await getTodayWeight(userId);

    if (!weightData) {
      throw new Error("No weight record found for today.");
    }

    const weightDocId = weightData.id;

    const weightRef = doc(db, "users", userId, "weight", weightDocId);

    await updateDoc(weightRef, {
      weight: newWeight,
    });

    return weightDocId;
  } catch (error) {
    const message = createCustomErrorMessage(
      error,
      "Failed to edit weight record."
    );
    throw new Error(message);
  }
};
