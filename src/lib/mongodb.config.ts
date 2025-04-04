import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI!;
const options = {};

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

declare global {
  var _mongoClientPromise: Promise<MongoClient>;
}

client = new MongoClient(uri, options);
clientPromise = client.connect();

export async function getCollection(collectionName: string) {
  const client = await clientPromise;
  const db = client.db('portfolio');

  return db.collection(collectionName);
}
