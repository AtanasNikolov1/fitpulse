import { Records } from "./sharedTypes";

export type SleepRecord = {
  createdAt: string;
  sleep: number;
};

export type SleepRecordWithId = SleepRecord & {
  id: string;
};

export type SleepMutationVariables = {
  userId: string;
  sleep: number;
};

export type SleepRecords = Records<SleepRecord>;
