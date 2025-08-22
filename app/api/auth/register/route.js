import dbConnect, { collectionNamesObj } from "@/lib/dbConnect";
import bcrypt from "bcrypt";

export async function POST(req) {
  try {
    const { name, email, password } = await req.json();

    if (!name || !email || !password) {
      return new Response(JSON.stringify({ message: "Missing fields" }), { status: 400 });
    }

    const userCollection = await dbConnect(collectionNamesObj.userCollection);

    // Check if user exists
    const existingUser = await userCollection.findOne({ email });
    if (existingUser) {
      return new Response(JSON.stringify({ message: "User already exists" }), { status: 400 });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert user
    const result = await userCollection.insertOne({ name, email, password: hashedPassword });

    return new Response(JSON.stringify({ message: "User registered successfully", id: result.insertedId }), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify({ message: "Registration failed", error: error.message }), { status: 500 });
  }
}
