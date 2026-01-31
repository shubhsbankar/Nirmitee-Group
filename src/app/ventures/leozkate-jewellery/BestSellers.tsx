"use client";
import Image from "next/image";

const products = [
  { name: "Princess Diamond Ring", price: "₹42,500", img: "/images/leozkate/bestsellers/1.jpeg" },
  { name: "Gold Bracelet", price: "₹38,900", img: "/images/leozkate/bestsellers/2.jpeg" },
  { name: "Classic Band", price: "₹19,500", img: "/images/leozkate/bestsellers/3.jpeg" },
  { name: "Emerald Halo Ring", price: "₹55,000", img: "/images/leozkate/bestsellers/4.jpeg" },
  { name: "Pearl Pendant", price: "₹15,800", img: "/images/leozkate/bestsellers/5.jpeg" },
];

export default function BestSellers() {
  return (
    <section id="bestsellers" className="max-w-7xl mx-auto px-6 pb-20 pt-30">
      <div className="flex items-center justify-between mb-4">
<h2 className="text-3xl md:text-4xl font-extrabold pb-10">
  <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
    Best Sellers
  </span>
</h2>
        <a href="#gallery" className="text-sm text-cyan-300 hover:underline">All Products</a>
      </div>

      <div className="relative">
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2 no-scrollbar"
             data-aos="fade-up">
          {products.map((p) => (
            <div key={p.name} className="snap-start min-w-[220px] max-w-[220px] bg-white/5 border border-white/10 rounded-2xl p-3">
              <div className="relative h-40 rounded-xl overflow-hidden mb-3">
                <Image src={p.img} alt={p.name} fill className="object-cover" />
              </div>
              <p className="font-medium">{p.name}</p>
              <p className="text-white/70 text-sm mt-1">{p.price}</p>
              <button className="mt-3 w-full px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500">View</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
