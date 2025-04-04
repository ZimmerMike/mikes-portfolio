import { ObjectId } from "mongodb";

export class Project {
  constructor(
    public title: string,
    public description: string,
    public repoUrl: string,
    public liveUrl: string,
    public technologies: string[],
    public _id?: ObjectId
  ) {}
}