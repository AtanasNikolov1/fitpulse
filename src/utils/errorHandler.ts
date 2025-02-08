import { FirebaseError } from "firebase/app";

export const handleError = (error: unknown, customMessage: string) => {
  if (error instanceof FirebaseError) {
    console.error(`${customMessage}: ${error.message}`);
    throw new Error(`An error occurred: ${error.message}`);
  } else {
    console.error(`Unexpected error: ${error}`);
    throw new Error(`An unexpected error occurred: ${error}`);
  }
};
