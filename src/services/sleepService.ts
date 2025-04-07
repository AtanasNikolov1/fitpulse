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
import { SleepRecords, SleepRecordWithId } from "../types/sleepTypes";
import { createCustomErrorMessage } from "../utils/errorHandler";

export const getSleepRecords = async (
  userId: string
): Promise<SleepRecords> => {
  try {
    const sleepRef = collection(db, "users", userId, "sleep");
    const weightQuery = query(sleepRef, orderBy("createdAt", "desc"), limit(7));
    const sleepSnap = await getDocs(weightQuery);

    if (sleepSnap.empty) {
      console.log("No sleep records found.");
      return [];
    }

    const sleepData: SleepRecords = sleepSnap.docs
      .map((doc) => {
        const data = doc.data() as DocumentData;
        return { createdAt: data.createdAt, hours: data.hours };
      })
      .reverse();
    return sleepData;
  } catch (error) {
    const message = createCustomErrorMessage(
      error,
      "Failed to fetch sleep records."
    );
    throw new Error(message);
  }
};

export const getTodaySleep = async (
  userId: string
): Promise<SleepRecordWithId | null> => {
  try {
    const today = new Date().toISOString().split("T")[0];
    const sleepRef = collection(db, "users", userId, "sleep");

    const sleepQuery = query(
      sleepRef,
      where("createdAt", ">=", today),
      where("createdAt", "<", `${today}T23:59:59.999Z`)
    );
    const sleepSnap = await getDocs(sleepQuery);

    if (sleepSnap.empty) {
      console.log("No sleep record for today.");
      return null;
    }

    const sleepData = sleepSnap.docs[0].data() as DocumentData;
    const sleepDocId = sleepSnap.docs[0].id;
    const record: SleepRecordWithId = {
      createdAt: sleepData.createdAt,
      hours: sleepData.hours,
      id: sleepDocId,
    };
    return record;
  } catch (error) {
    const message = createCustomErrorMessage(
      error,
      "Failed to fetch today's sleep record"
    );
    throw new Error(message);
  }
};

export const addTodaySleep = async (
  userId: string,
  hours: number
): Promise<string> => {
  try {
    const sleepRef = collection(db, "users", userId, "sleep");
    const date = new Date();
    const docRef = await addDoc(sleepRef, {
      hours: hours,
      createdAt: date.toISOString(),
    });

    return docRef.id;
  } catch (error) {
    const message = createCustomErrorMessage(
      error,
      "Failed to add sleep record."
    );
    throw new Error(message);
  }
};

export const editTodaySleep = async (
  userId: string,
  newHours: number
): Promise<string> => {
  try {
    const sleepData = await getTodaySleep(userId);

    if (sleepData === null) {
      throw new Error("No sleep record found for today.");
    }

    const sleepDocId = sleepData.id;

    const sleepRef = doc(db, "users", userId, "sleep", sleepDocId);

    await updateDoc(sleepRef, {
      hours: newHours,
    });

    return sleepDocId;
  } catch (error) {
    const message = createCustomErrorMessage(
      error,
      "Failed to edit sleep record"
    );
    throw new Error(message);
  }
};
