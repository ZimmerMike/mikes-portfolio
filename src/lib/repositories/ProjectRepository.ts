// lib/repositories/ProjectRepo.ts
import { Project } from '../models/Project';
import { getCollection } from '../mongodb.config';
import { ObjectId } from 'mongodb';

const COLLECTION_NAME = 'projects';

export class ProjectRepo {
  static async getAll(): Promise<Project[]> {
    const collection = await getCollection(COLLECTION_NAME);
    const docs = await collection.find().toArray();
    return docs.map(
      doc =>
        new Project(
          doc.title,
          doc.description,
          doc.repoUrl,
          doc.liveUrl,
          doc.technologies,
          doc._id
        )
    );
  }

  static async create(data: Project): Promise<void> {
    const collection = await getCollection(COLLECTION_NAME);
    await collection.insertOne({
      title: data.title,
      description: data.description,
      repoUrl: data.repoUrl,
      liveUrl: data.liveUrl,
      technologies: data.technologies,
    });
  }

  static async delete(id: string): Promise<void> {
    const collection = await getCollection(COLLECTION_NAME);
    await collection.deleteOne({ _id: new ObjectId(id) });
  }
}
