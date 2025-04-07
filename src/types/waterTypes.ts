import { Records } from "./sharedTypes";

export type WaterRecord = {
  createdAt: string;
  amount: number;
};

export type WaterRecordWithId = WaterRecord & {
  id: string;
};

export type WaterMutationVariables = {
  userId: string;
  amount: number;
};

export type WaterRecords = Records<WaterRecord>;
