import { ObjectId } from 'mongodb';
import { Skill } from './Skill';

export interface Project {
  _id?: string;
  UserId: string;
  Title: string;
  Description: string;
  RepoUrl: string;
  LiveUrl?: string;
  Skills: Skill[];
}
