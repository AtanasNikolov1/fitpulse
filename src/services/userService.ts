import { doc, setDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import { handleError } from "../utils/errorHandler";

export const createUserProfile = async (
  uid: string,
  firstName: string,
  lastName: string,
  email: string
) => {
  try {
    await setDoc(doc(db, "users", uid), {
      createdAt: new Date(),
      email,
      firstName,
      lastName,
    });
  } catch (error) {
    handleError(error, "Error creating the user profile in Firestore");
  }
};
