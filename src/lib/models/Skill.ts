import { ObjectId } from "mongodb";

export interface Skill {
    _id?: string;
    UserId: string;
    Name: string;
    ExperienceYears: number;
  }
  