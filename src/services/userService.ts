import { doc, setDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import { handleError } from "../utils/errorHandler";

export const createUserProfile = async (
  uid: string,
  fullName: string,
  email: string
) => {
  try {
    await setDoc(doc(db, "users", uid), {
      createdAt: new Date(),
      email,
      fullName,
    });
  } catch (error) {
    handleError(error, "Failed to create the user profile in Firestore");
  }
};
