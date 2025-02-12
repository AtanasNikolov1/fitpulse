import {
  createUserWithEmailAndPassword,
  deleteUser,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../config/firebase";
import { createUserProfile } from "./userService";
import { handleError } from "../utils/errorHandler";

export const signUpUser = async (
  firstName: string,
  lastName: string,
  email: string,
  password: string
) => {
  let userCredential;

  try {
    userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    const { uid } = userCredential.user;

    await createUserProfile(uid, firstName, lastName, email);
    return userCredential.user;
  } catch (error) {
    if (userCredential) {
      try {
        await deleteUser(userCredential.user);
      } catch (deleteError) {
        console.error("Error rolling back Firebase Auth user:", deleteError);
      }
    }

    handleError(error, "Error during user sign-up or profile creation");
  }
};

export const logInUser = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential.user;
  } catch (error) {
    handleError(error, "Error logging in user");
    throw new Error("Invalid email or password. Please try again.");
  }
};
