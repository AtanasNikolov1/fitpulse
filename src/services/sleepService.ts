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

export const getSleep = async (userId: string) => {
  try {
    const sleepRef = collection(db, "users", userId, "sleep");
    const sleepSnap = await getDocs(sleepRef);

    if (sleepSnap.empty) {
      console.log("No sleep records found.");
      return [];
    }

    const sleepData = sleepSnap.docs.map((doc) => doc.data());
    return sleepData;
  } catch (error) {
    handleError(error, "Failed to fetch sleep records");
  }
};

export const getTodaySleep = async (userId: string) => {
  try {
    const today = new Date().toISOString().split("T")[0];
    const sleepRef = collection(db, "users", userId, "sleep");

    const q = query(
      sleepRef,
      where("createdAt", ">=", today),
      where("createdAt", "<", `${today}T23:59:59.999Z`)
    );
    const sleepSnap = await getDocs(q);

    if (sleepSnap.empty) {
      console.log("No sleep record for today.");
      return null;
    }

    const sleepData = sleepSnap.docs[0].data();
    const sleepDocId = sleepSnap.docs[0].id;
    return { ...sleepData, id: sleepDocId };
  } catch (error) {
    handleError(error, "Failed to fetch today's sleep record");
  }
};

export const addSleep = async (userId: string, hours: number) => {
  try {
    const sleepRef = collection(db, "users", userId, "sleep");
    const date = new Date();
    const docRef = await addDoc(sleepRef, {
      hours: hours,
      createdAt: date.toISOString(),
    });

    return docRef.id;
  } catch (error) {
    handleError(error, "Failed to add sleep record");
  }
};

export const editSleep = async (userId: string, newSleep: number) => {
  try {
    const sleepData = await getTodaySleep(userId);

    if (sleepData === null) {
      console.log("No sleep record found for today.");
      return null;
    }

    const sleepDocId = sleepData!.id;

    const sleepRef = doc(db, "users", userId, "sleep", sleepDocId);

    await updateDoc(sleepRef, {
      sleep: newSleep,
    });

    return sleepDocId;
  } catch (error) {
    handleError(error, "Failed to edit sleep record");
  }
};
