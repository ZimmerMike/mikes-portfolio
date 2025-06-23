import { ObjectId } from "mongodb";

export interface Experience {
  _id?: string;
  userId: string;
  jobTitle: string;
  company: string;
  description: string;
  startYear: number;
  endYear?: number;
}
