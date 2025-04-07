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
import { WaterRecords, WaterRecordWithId } from "../types/waterTypes";
import { createCustomErrorMessage } from "../utils/errorHandler";

export const getWaterRecords = async (
  userId: string
): Promise<WaterRecords> => {
  try {
    const waterRef = collection(db, "users", userId, "water");
    const waterQuery = query(waterRef, orderBy("createdAt", "desc"), limit(7));
    const waterSnap = await getDocs(waterQuery);

    if (waterSnap.empty) {
      console.log("No water records found.");
      return [];
    }

    const waterData: WaterRecords = waterSnap.docs
      .map((doc) => {
        const data = doc.data() as DocumentData;
        return { createdAt: data.createdAt, amount: data.amount };
      })
      .reverse();
    return waterData;
  } catch (error) {
    const message = createCustomErrorMessage(
      error,
      "Failed to fetch water records."
    );
    throw new Error(message);
  }
};

export const getTodayWater = async (
  userId: string
): Promise<WaterRecordWithId | null> => {
  try {
    const today = new Date().toISOString().split("T")[0];
    const waterRef = collection(db, "users", userId, "water");

    const waterQuery = query(
      waterRef,
      where("createdAt", ">=", today),
      where("createdAt", "<", `${today}T23:59:59.999Z`)
    );
    const waterSnap = await getDocs(waterQuery);

    if (waterSnap.empty) {
      console.log("No water record for today.");
      return null;
    }

    const waterData = waterSnap.docs[0].data() as DocumentData;
    const waterDocId = waterSnap.docs[0].id;

    const record: WaterRecordWithId = {
      createdAt: waterData.createdAt,
      amount: waterData.amount,
      id: waterDocId,
    };
    return record;
  } catch (error) {
    const message = createCustomErrorMessage(
      error,
      "Failed to fetch today's water record"
    );
    throw new Error(message);
  }
};

export const addTodayWater = async (
  userId: string,
  amount: number
): Promise<string> => {
  try {
    const waterRef = collection(db, "users", userId, "water");
    const date = new Date();
    const docRef = await addDoc(waterRef, {
      amount: amount,
      createdAt: date.toISOString(),
    });

    return docRef.id;
  } catch (error) {
    const message = createCustomErrorMessage(
      error,
      "Failed to add water amount"
    );
    throw new Error(message);
  }
};

export const editTodayWater = async (
  userId: string,
  newAmount: number
): Promise<string> => {
  try {
    const waterData = await getTodayWater(userId);

    if (waterData === null) {
      throw new Error("No water record found for today.");
    }

    const waterDocId = waterData!.id;

    const waterRef = doc(db, "users", userId, "water", waterDocId);

    await updateDoc(waterRef, {
      amount: newAmount,
    });

    return waterDocId;
  } catch (error) {
    const message = createCustomErrorMessage(
      error,
      "Failed to edit water amount."
    );
    throw new Error(message);
  }
};
