import { MongoClient, ServerApiVersion } from "mongodb";

export const collectionNamesObj = {
  productsCollection: "next_products",
  userCollection: "users collection",
};

let clientPromise;

if (!process.env.MONGODB_URI) throw new Error("MONGODB_URI not defined");

const client = new MongoClient(process.env.MONGODB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

clientPromise = client.connect();

export default async function dbConnect(collectionName) {
  const client = await clientPromise;
  const db = client.db(process.env.DB_NAME);
  return db.collection(collectionName);
}
