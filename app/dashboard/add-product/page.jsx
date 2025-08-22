import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import AddProductForm from "./AddProductForm";

export default async function AddProductPage() {
  // Get the session on the server
  const session = await getServerSession(authOptions);

  // If user is not logged in, redirect to login
  if (!session) {
    redirect("/login");
  }

  // User is authenticated, render the page
  return (
    <main className="max-w-4xl mx-auto mt-20 bg-white p-6 rounded-xl shadow-md">
      <h1 className="text-2xl font-bold mb-6">Add New Product</h1>
      <AddProductForm />
    </main>
  );
}
