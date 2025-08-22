"use client";
import React from "react";
import { signIn } from "next-auth/react";

export default function LoginForm() {
  const handleCredentialsLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      await signIn("credentials", {
        email,
        password,
        redirect: true,
        callbackUrl: "/products", // redirects here after login
      });
    } catch (error) {
      console.log(error);
      alert("Authentication failed");
    }
  };

  return (
    <form onSubmit={handleCredentialsLogin} className="space-y-4">
      <input
        type="email"
        name="email"
        placeholder="Email"
        required
        className="w-full border p-2 rounded"
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        required
        className="w-full border p-2 rounded"
      />
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded"
      >
        Login
      </button>
    </form>
  );
}
