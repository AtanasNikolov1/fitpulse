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

export const getWater = async (userId: string) => {
  try {
    const waterRef = collection(db, "users", userId, "water");
    const waterSnap = await getDocs(waterRef);

    if (waterSnap.empty) {
      console.log("No water records found.");
      return [];
    }

    const waterData = waterSnap.docs.map((doc) => doc.data());
    return waterData;
  } catch (error) {
    handleError(error, "Failed to fetch water records");
  }
};

export const getTodayWater = async (userId: string) => {
  try {
    const today = new Date().toISOString().split("T")[0];
    const waterRef = collection(db, "users", userId, "water");

    const q = query(
      waterRef,
      where("createdAt", ">=", today),
      where("createdAt", "<", `${today}T23:59:59.999Z`)
    );
    const waterSnap = await getDocs(q);

    if (waterSnap.empty) {
      console.log("No water record for today.");
      return null;
    }

    const waterData = waterSnap.docs[0].data();
    const waterDocId = waterSnap.docs[0].id;
    return { ...waterData, id: waterDocId };
  } catch (error) {
    handleError(error, "Failed to fetch today's water record");
  }
};

export const addWater = async (userId: string, water: number) => {
  try {
    const waterRef = collection(db, "users", userId, "water");
    const date = new Date();
    const docRef = await addDoc(waterRef, {
      water: water,
      createdAt: date.toISOString(),
    });

    return docRef.id;
  } catch (error) {
    handleError(error, "Failed to add water record");
  }
};

export const editWater = async (userId: string, newWater: number) => {
  try {
    const waterData = await getTodayWater(userId);

    if (waterData === null) {
      console.log("No water record found for today.");
      return null;
    }

    const waterDocId = waterData!.id;

    const waterRef = doc(db, "users", userId, "water", waterDocId);

    await updateDoc(waterRef, {
      water: newWater,
    });

    return waterDocId;
  } catch (error) {
    handleError(error, "Failed to edit water record");
  }
};
