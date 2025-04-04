import { Education } from '../models/Education';
import { getCollection } from '../db';
import { ObjectId } from 'mongodb';

const COLLECTION_NAME = 'educations';

export class EducationRepo {
  static async getAll(): Promise<Education[]> {
    const collection = await getCollection(COLLECTION_NAME);
    const docs = await collection.find().toArray();
    return docs.map(doc => new Education(...Object.values(doc)));
  }

  static async create(data: Education): Promise<void> {
    const { _id, ...rest } = data;
    const collection = await getCollection(COLLECTION_NAME);
    await collection.insertOne(rest);
  }

  static async delete(id: string): Promise<void> {
    const collection = await getCollection(COLLECTION_NAME);
    await collection.deleteOne({ _id: new ObjectId(id) });
  }
}