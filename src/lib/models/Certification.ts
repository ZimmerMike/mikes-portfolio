import { ObjectId } from "mongodb";

export interface Certification {
  _id?: ObjectId;
  userId: ObjectId;
  title: string;
  issuer: string;
  year: number;
  fileUrl: string;
}
