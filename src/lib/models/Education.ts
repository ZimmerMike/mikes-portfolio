import { ObjectId } from "mongodb";

export interface Education {
  _id?: string;
  userId: string;
  institution: string;
  degree: string;
  fieldOfStudy: string;
  startYear: number;
  endYear: number;
}
