import { ObjectId } from "mongodb";

export interface Message {
  _id?: ObjectId;
  userId: ObjectId;
  name: string;
  email: string;
  content: string;
  date: string;
}
