import { AboutMe } from '../models/AboutMe';
import { getCollection } from '../db';
import { ObjectId } from 'mongodb';

const COLLECTION_NAME = 'aboutmes';

export class AboutMeRepo {
  static async getAll(): Promise<AboutMe[]> {
    const collection = await getCollection(COLLECTION_NAME);
    const docs = await collection.find().toArray();
    return docs.map(doc => new AboutMe(...Object.values(doc)));
  }

  static async create(data: AboutMe): Promise<void> {
    const { _id, ...rest } = data;
    const collection = await getCollection(COLLECTION_NAME);
    await collection.insertOne(rest);
  }

  static async delete(id: string): Promise<void> {
    const collection = await getCollection(COLLECTION_NAME);
    await collection.deleteOne({ _id: new ObjectId(id) });
  }
}