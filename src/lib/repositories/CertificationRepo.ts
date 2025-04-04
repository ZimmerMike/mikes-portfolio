import { Certification } from '../models/Certification';
import { getCollection } from '../db';
import { ObjectId } from 'mongodb';

const COLLECTION_NAME = 'certifications';

export class CertificationRepo {
  static async getAll(): Promise<Certification[]> {
    const collection = await getCollection(COLLECTION_NAME);
    const docs = await collection.find().toArray();
    return docs.map(doc => new Certification(...Object.values(doc)));
  }

  static async create(data: Certification): Promise<void> {
    const { _id, ...rest } = data;
    const collection = await getCollection(COLLECTION_NAME);
    await collection.insertOne(rest);
  }

  static async delete(id: string): Promise<void> {
    const collection = await getCollection(COLLECTION_NAME);
    await collection.deleteOne({ _id: new ObjectId(id) });
  }
}