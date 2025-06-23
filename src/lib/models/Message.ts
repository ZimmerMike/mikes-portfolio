import { ObjectId } from "mongodb";

export interface Message {
  _id?: string;
  userId: string;
  name: string;
  email: string;
  content: string;
  date: string;
}
