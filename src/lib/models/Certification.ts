import { ObjectId } from "mongodb";

export interface Certification {
  _id?: string;
  userId: string;
  title: string;
  issuer: string;
  year: number;
  fileUrl: string;
}
