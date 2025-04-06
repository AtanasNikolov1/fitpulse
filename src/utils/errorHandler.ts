import { FirebaseError } from "firebase/app";

export const handleError = (error: unknown, customMessage: string): never => {
  if (error instanceof FirebaseError) {
    console.error(`${customMessage}: ${error.message}`);
    throw new Error(`An error occurred: ${customMessage}`);
  } else {
    console.error(`Unexpected error: ${error}`);
    throw new Error(`An unexpected error occurred: ${error}`);
  }
};

export const createCustomErrorMessage = (
  error: unknown,
  customMessage: string
): string => {
  if (error instanceof FirebaseError) {
    console.error(`${customMessage}: ${error.message}`);
    return `An error occurred: ${customMessage}`;
  } else {
    console.error(`Unexpected error: ${error}`);
    return `An unexpected error occurred: ${error}`;
  }
};
