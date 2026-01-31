"use client";
import Image from "next/image";

const spots = [
  { 
    name: "Goa", 
    img: "/images/tours-and-travels/destinations/goa.jpeg" 
  },
 { 
    name: "Kashmir", 
    img: "/images/tours-and-travels/destinations/kashmir.jpeg" 
  },
    { name: "Kerala", img: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1200&q=80" },
  { name: "Rajasthan", img: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80" },
  { name: "Dubai", img: "https://images.unsplash.com/photo-1504805572947-34fad45aed93?auto=format&fit=crop&w=1200&q=80" },
  { name: "Bali", img: "https://images.unsplash.com/photo-1500530855697-3a0f2feac1d2?auto=format&fit=crop&w=1200&q=80" },
];

export default function Destinations() {
  return (
     <section id="destinations" className="max-w-7xl mx-auto px-6 pb-30 py-30">
<h2
        className="text-3xl md:text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"
        data-aos="fade-up"
      >
       Top Destinations
      </h2>      
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {spots.map((s, i) => (
          <div key={s.name} data-aos="fade-up" data-aos-delay={i * 60}
               className="relative h-56 rounded-2xl overflow-hidden border border-white/10 group">
            <Image src={s.img} alt={s.name} fill unoptimized className="object-cover group-hover:scale-105 transition" />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute bottom-3 left-4 text-lg font-semibold">{s.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
