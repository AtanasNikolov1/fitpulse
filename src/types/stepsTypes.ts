import { Records } from "./recordTypes";

export type StepsRecord = {
  createdAt: string;
  steps: number;
};

export type StepsRecordWithId = StepsRecord & {
  id: string;
};

export type StepsMutationVariables = {
  userId: string;
  steps: number;
};

export type StepsRecords = Records<StepsRecord>;
