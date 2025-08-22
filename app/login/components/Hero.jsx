import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-[#DCE7E7] py-20">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
        
      
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl font-bold mb-4">Welcome to QuickCart</h1>
          <p className="text-lg mb-6">Explore our exclusive products and insights.</p>
        </div>

        
        <div className="md:w-1/2 relative w-full h-64 md:h-80">
          <Image
            src="/images/gadgets.jpg" 
            alt="Hero Image"
            fill
            className="object-cover rounded-xl"
            priority
          />
        </div>

      </div>
    </section>
  );
}
