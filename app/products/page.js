import React from "react";
import Link from "next/link";
import Image from "next/image";
import dbConnect, { collectionNamesObj } from "@/lib/dbConnect";

export default async function ProductsPage() {

  const productCollection = await dbConnect(collectionNamesObj.productsCollection);

  
  const products = await productCollection.find({}).toArray();

  return (
    <main className="mt-10">
      <div className="max-w-6xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Exclusive Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product) => {
           
            const productImage =
              product.product_image && (product.product_image.startsWith('/') || product.product_image.startsWith('http'))
                ? product.product_image
                : '/placeholder.jpg';

            return (
              <div
                key={product._id.toString()}
                className="border p-4 rounded-xl shadow-sm bg-white"
              >
                <h2 className="text-xl font-semibold">{product.name}</h2>
                <div className="relative w-full h-48">
                  <Image
                    src={productImage}
                    alt={product.name}
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
                <p className="text-gray-600">{product.description}</p>
                <p className="text-lg font-bold mt-2">${product.price}</p>
                <Link
                  href={`/products/${product._id.toString()}`} // Use valid ObjectId here
                  className="bg-[#FBF3D5] p-2 rounded-xl font-bold text-[#17313E] inline-block mt-3 hover:underline"
                >
                  Details
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
