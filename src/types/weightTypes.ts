import { Records } from "./sharedTypes";

export type WeightRecord = {
  createdAt: string;
  weight: number;
};

export type WeightRecordWithId = WeightRecord & {
  id: string;
};

export type WeightMutationVariables = {
  userId: string;
  weight: number;
};

export type WeightRecords = Records<WeightRecord>;
