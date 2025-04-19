import { ObjectId } from 'mongodb';
import { Skill } from './Skill';

export interface Project {
  _id?: ObjectId;
  userId: ObjectId;
  title: string;
  description: string;
  repoUrl: string;
  liveUrl: string;
  skills: Skill[];
}
