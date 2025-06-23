import { MongoClient, Db } from 'mongodb';

const uri = process.env.MONGODB_URI!;
const dbName = process.env.MONGODB_DB_NAME || 'portfolio'; // puedes ajustar esto si el nombre cambia

if (!uri) {
  throw new Error('Por favor define la variable MONGODB_URI en tu archivo .env.local');
}

const options = {};

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

declare global {
  // Para evitar problemas de múltiples instancias en desarrollo con hot reload
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

if (process.env.NODE_ENV === 'development') {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export async function getDb(): Promise<Db> {
  const client = await clientPromise;
  const db = client.db(dbName);

  // 🔍 Logs para asegurarnos de que estamos conectados correctamente
  console.log('[MongoDB] Conectado a la base de datos:', db.databaseName);

  const collections = await db.listCollections().toArray();
  console.log('[MongoDB] Colecciones disponibles:', collections.map(c => c.name));

  return db;
}

export default clientPromise;
