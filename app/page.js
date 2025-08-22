
import Image from "next/image";
import Hero from "./login/components/Hero";
import ProductHighlights from "./login/components/ProductHighlights";


export default function Home() {
  return (
   <main className="mt-10">
  <Hero />
  <ProductHighlights />
   </main>
  );
}
