export default function Hero() {
    return (
      <section className="bg-[#DCE7E7] py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to NextProducts</h1>
        <p className="text-lg mb-6">Explore our exclusive products and insights.</p>
        <div className="flex justify-center gap-4">
          <button className="bg-[#075B5E] text-white py-2 px-6 rounded-xl hover:bg-[#05494A]">
            Explore
          </button>
          <button className="border border-[#075B5E] text-[#075B5E] py-2 px-6 rounded-xl hover:bg-[#075B5E] hover:text-white">
            Ask Me Anything
          </button>
        </div>
      </section>
    );
  }
  