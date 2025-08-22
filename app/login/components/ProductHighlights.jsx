import Image from "next/image";
import dbConnect, { collectionNamesObj } from "@/lib/dbConnect";


export default async function ProductHighlights() {
     const productCollection = await dbConnect(collectionNamesObj.productsCollection);
    
      // Fetch all products
      const products = await productCollection.find({}).toArray();
  return (
    <section className="py-20 bg-white">
      <h2 className="text-3xl font-bold text-center mb-10">Product Highlights</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {products.map((product) => (
          <div key={product._id} className="border p-4 rounded-xl shadow-md">
            <div className="relative w-full h-48">
            <Image
  src={product.product_image?.startsWith("/") || product.product_image?.startsWith("http")
       ? product.product_image
       : "/images/default.jpg"} // fallback image
  alt={product.name}
  fill
  className="object-cover rounded-md"
/>

            </div>
            <h3 className="text-xl font-semibold mt-4">{product.name}</h3>
            <p className="text-gray-600">{product.description}</p>
            <p className="text-lg font-bold mt-2">${product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
