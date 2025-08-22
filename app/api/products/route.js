import dbConnect, { collectionNamesObj } from "@/lib/dbConnect";

export async function POST(req) {
  try {
    const body = await req.json(); // parse JSON body

    const { name, description, price, product_image, details } = body;

    if (!name || !description || !price) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), {
        status: 400,
      });
    }

    const productCollection = await dbConnect(collectionNamesObj.productsCollection);

    const newProduct = {
      name,
      description,
      price,
      product_image: product_image || "", // optional
      details: details || "",
      createdAt: new Date(),
    };

    const result = await productCollection.insertOne(newProduct);

    return new Response(JSON.stringify({ message: "Product added", id: result.insertedId }), {
      status: 201,
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Server error" }), { status: 500 });
  }
}
