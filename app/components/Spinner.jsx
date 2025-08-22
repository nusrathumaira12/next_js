"use client";

export default function Spinner() {
  return (
    <div className="flex justify-center items-center h-12">
      <div className="w-12 h-12 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
      <span className="ml-4 text-gray-700 font-medium">Loading...</span>
    </div>
  );
}

