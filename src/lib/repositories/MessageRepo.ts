import { Message } from '../models/Message';
import { getCollection } from '../db';
import { ObjectId } from 'mongodb';

const COLLECTION_NAME = 'messages';

export class MessageRepo {
  static async getAll(): Promise<Message[]> {
    const collection = await getCollection(COLLECTION_NAME);
    const docs = await collection.find().toArray();
    return docs.map(doc => new Message(...Object.values(doc)));
  }

  static async create(data: Message): Promise<void> {
    const { _id, ...rest } = data;
    const collection = await getCollection(COLLECTION_NAME);
    await collection.insertOne(rest);
  }

  static async delete(id: string): Promise<void> {
    const collection = await getCollection(COLLECTION_NAME);
    await collection.deleteOne({ _id: new ObjectId(id) });
  }
}