import { ObjectId } from "mongodb";

export interface Skill {
    _id?: ObjectId;
    userId: ObjectId;
    name: string;
    experienceYears: number;
  }
  