"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";


export default function Navbar() {
  const { data: session, status } = useSession();

  return (
    <nav className="bg-amber-50">
      <ul className="flex gap-12 text-center justify-center mx-auto p-4">
        <li><Link href="/">Home</Link></li>

        {!session && status !== "loading" && (
          <li><Link href="/login">Login</Link></li>
        )}

        <li><Link href="/products">Products</Link></li>

        {session && (
          <>
            <li><Link href="/dashboard/add-product">Add Product</Link></li>
            <li>
              <button
                onClick={() => signOut({ callbackUrl: "/" })}
                className="bg-red-500 text-white py-1 px-3 rounded"
              >
                Logout
              </button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
