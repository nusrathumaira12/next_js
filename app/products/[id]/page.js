import React from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import dbConnect, { collectionNamesObj } from '@/lib/dbConnect';
import { ObjectId } from 'mongodb';

export default async function ProductDetailPage({ params }) {
  // Make sure params exists
  if (!params || !params.id) {
    notFound();
  }

  const id = params.id;

  if (!ObjectId.isValid(id)) {
    notFound();
  }

  const productCollection = await dbConnect(collectionNamesObj.productsCollection);
  const product = await productCollection.findOne({ _id: new ObjectId(id) });

  if (!product) {
    notFound();
  }

  const productImage =
    product.product_image && (product.product_image.startsWith('/') || product.product_image.startsWith('http'))
      ? product.product_image
      : '/placeholder.jpg'; // fallback image

  return (
    <div className="bg-[#DCCFC0] max-w-6xl mx-auto mt-20 rounded-xl p-6">
      <h1 className="text-xl font-semibold mb-2">Product Details</h1>
      <p className="mb-2">Product ID: {id}</p>
      <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
      <div className="relative max-w-4xl h-84 mb-20">
        <Image
          src={productImage}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="rounded-md object-cover"
          priority
        />
      </div>
      <p className="mb-2 mt-8">{product.description}</p>
      <p className="font-semibold mb-4">Price: ${product.price}</p>
      <p className="text-gray-700 mb-4">{product.details}</p>
      <Link
        href="/products"
        className="bg-[#FBF3D5] p-2 rounded-xl font-bold text-[#17313E] hover:underline"
      >
        Back to Products
      </Link>
    </div>
  );
}
