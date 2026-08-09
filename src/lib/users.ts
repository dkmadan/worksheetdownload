import { randomUUID } from "crypto";
import clientPromise from "./mongodb";

export interface StoredUser {
  id: string;
  name: string;
  email: string;
  password: string; // bcrypt hash
  createdAt: string;
}

async function getCollection() {
  const client = await clientPromise;
  return client.db("worksheetdownload").collection<StoredUser>("users");
}

export async function getUserByEmail(email: string): Promise<StoredUser | null> {
  const col = await getCollection();
  return col.findOne({ email: email.toLowerCase() }) as Promise<StoredUser | null>;
}

export async function createUser(
  name: string,
  email: string,
  hashedPassword: string
): Promise<StoredUser> {
  const col = await getCollection();
  const existing = await col.findOne({ email: email.toLowerCase() });
  if (existing) throw new Error("Email already registered");

  const user: StoredUser = {
    id: randomUUID(),
    name,
    email: email.toLowerCase(),
    password: hashedPassword,
    createdAt: new Date().toISOString(),
  };
  await col.insertOne(user);
  return user;
}
