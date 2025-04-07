import { Records } from "./sharedTypes";

export type SleepRecord = {
  createdAt: string;
  hours: number;
};

export type SleepRecordWithId = SleepRecord & {
  id: string;
};

export type SleepMutationVariables = {
  userId: string;
  hours: number;
};

export type SleepRecords = Records<SleepRecord>;
