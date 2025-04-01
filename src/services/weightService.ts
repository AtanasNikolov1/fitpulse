import {
  addDoc,
  collection,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../config/firebase";
import { handleError } from "../utils/errorHandler";

export const getWeight = async (userId: string) => {
  try {
    const weightRef = collection(db, "users", userId, "weight");
    const weightSnap = await getDocs(weightRef);

    if (weightSnap.empty) {
      console.log("No weight records found.");
      return [];
    }

    const weightData = weightSnap.docs.map((doc) => doc.data());
    return weightData;
  } catch (error) {
    handleError(error, "Failed to fetch weight records");
  }
};

export const getTodayWeight = async (userId: string) => {
  try {
    const today = new Date().toISOString().split("T")[0];
    const weightRef = collection(db, "users", userId, "weight");

    const q = query(
      weightRef,
      where("createdAt", ">=", today),
      where("createdAt", "<", `${today}T23:59:59.999Z`)
    );
    const weightSnap = await getDocs(q);

    if (weightSnap.empty) {
      console.log("No weight record for today.");
      return null;
    }

    const weightData = weightSnap.docs[0].data();
    const weightDocId = weightSnap.docs[0].id;
    return { ...weightData, id: weightDocId };
  } catch (error) {
    handleError(error, "Failed to fetch today's weight record");
  }
};

export const addWeight = async (userId: string, weight: number) => {
  try {
    const weightRef = collection(db, "users", userId, "weight");
    const date = new Date();
    const docRef = await addDoc(weightRef, {
      weight: weight,
      createdAt: date.toISOString(),
    });

    return docRef.id;
  } catch (error) {
    handleError(error, "Failed to add weight record");
  }
};

export const editWeight = async (userId: string, newWeight: number) => {
  try {
    const weightData = await getTodayWeight(userId);

    if (weightData === null) {
      console.log("No weight record found for today.");
      return null;
    }

    const weightDocId = weightData!.id;

    const weightRef = doc(db, "users", userId, "weight", weightDocId);

    await updateDoc(weightRef, {
      weight: newWeight,
    });

    return weightDocId;
  } catch (error) {
    handleError(error, "Failed to edit weight record");
  }
};
