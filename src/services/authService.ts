import {
  createUserWithEmailAndPassword,
  deleteUser,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth, db, provider } from "../config/firebase";
import { createUserProfile } from "./userService";
import { handleError } from "../utils/errorHandler";
import { doc, getDoc } from "firebase/firestore";
import { FirebaseError } from "firebase/app";

export const signUpUser = async (
  fullName: string,
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

    await createUserProfile(uid, fullName, email);
    return userCredential.user;
  } catch (error) {
    if (userCredential) {
      try {
        await deleteUser(userCredential.user);
      } catch (deleteError) {
        console.error(
          "Failed to roll back the Firebase Auth user: ",
          deleteError
        );
      }
    }

    if (error instanceof FirebaseError) {
      handleError(error, "Email is already in use. Please try another email.");
    } else {
      handleError(error, "Failed to complete user sign-up or profile creation");
    }
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
    handleError(
      error,
      "The email or password you entered is incorrect. Please try again."
    );
  }
};

export const logOutUser = async () => {
  try {
    await signOut(auth); // Firebase method to sign the user out
    console.log("User logged out successfully.");
  } catch (error) {
    console.error("Error logging out user: ", error);
    throw new Error("An error occurred while logging out. Please try again.");
  }
};

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    if (!user) {
      throw new Error("User sign-in failed, no user data found.");
    }

    const userRef = doc(db, "users", user.uid);
    const userSnap = await getDoc(userRef);

    if (!userSnap.exists()) {
      await createUserProfile(user.uid, user.displayName!, user.email!);
    }
  } catch (error) {
    handleError(error, "Failed to sign in with Google. Please try again.");
  }
};
