import { ObjectId } from "mongodb";

export interface Experience {
  _id?: ObjectId;
  userId: ObjectId;
  jobTitle: string;
  company: string;
  description: string;
  startYear: number;
  endYear?: number;
}
