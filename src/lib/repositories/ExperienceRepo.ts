import { Experience } from '../models/Experience';
import { getCollection } from '../db';
import { ObjectId } from 'mongodb';

const COLLECTION_NAME = 'experiences';

export class ExperienceRepo {
  static async getAll(): Promise<Experience[]> {
    const collection = await getCollection(COLLECTION_NAME);
    const docs = await collection.find().toArray();
    return docs.map(doc => new Experience(...Object.values(doc)));
  }

  static async create(data: Experience): Promise<void> {
    const { _id, ...rest } = data;
    const collection = await getCollection(COLLECTION_NAME);
    await collection.insertOne(rest);
  }

  static async delete(id: string): Promise<void> {
    const collection = await getCollection(COLLECTION_NAME);
    await collection.deleteOne({ _id: new ObjectId(id) });
  }
}