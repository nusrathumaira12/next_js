"use server";
import dbConnect, { collectionNamesObj } from "@/lib/dbConnect";
import bcrypt from "bcrypt";

export const loginUser = async ({ email, password }) => {
  const userCollection = dbConnect(collectionNamesObj.userCollection);
  const user = await userCollection.findOne({ email });

  if (!user) return null;

  const isPasswordOK = await bcrypt.compare(password, user.password);
  if (!isPasswordOK) return null;

  return {
    id: user._id.toString(),
    name: user.name,
    email: user.email,
  };
};
