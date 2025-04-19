import { ObjectId } from "mongodb";

export interface Education {
  _id?: ObjectId;
  userId: ObjectId;
  institution: string;
  degree: string;
  fieldOfStudy: string;
  startYear: number;
  endYear: number;
}
