"use client";

import Image from "next/image";

const pkgs = [
  {
    title: "Family Tour",
    price: "₹14,999",
    img: "/images/tours-and-travels/packages/family.jpeg",
    points: ["Flights/Train options", "3★ Hotel", "Breakfast & Transfers"],
  },
  {
    title: "Honeymoon Tour",
    price: "₹27,999",
    img: "/images/tours-and-travels/packages/honeymoon.jpeg",
    points: ["Romantic Itinerary", "Candle-light Dinner", "Hotel + Sightseeing"],
  },
  {
    title: "Adventure Tour",
    price: "₹22,499",
    img: "/images/tours-and-travels/packages/adventure.jpeg",
    points: ["Treks & Safaris", "Guide & Permits", "Transfers Included"],
  },
];

export default function Packages() {
  return (
    <section id="packages" className="w-full px-6 md:px-12 lg:px-20 py-16 pt-20 pb-20 relative bg-gradient-to-br from-blue-950/40 via-slate-900/40 to-purple-950/40">
      <div className="flex items-end justify-between gap-4 flex-wrap">
        <h2
        className="text-3xl md:text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"
        data-aos="fade-up"
      >
       Our Tour Packages
      </h2>
        <p
          className="text-gray-300 max-w-xl"
          data-aos="fade-up"
          data-aos-delay={80}
        >
          Explore our customized domestic and international travel packages for families, couples, groups, and solo travellers.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mt-8">
        {pkgs.map((p, i) => (
          <article
            key={p.title}
            data-aos="zoom-in-up"
            data-aos-delay={i * 80}
            className="group rounded-2xl border border-white/10 bg-white/5 overflow-hidden hover:bg-white/10 transition"
          >
            {/* Image */}
            <div className="relative h-48">
              <Image
                src={p.img}
                alt={`${p.title} package`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                priority={i === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <span className="absolute top-3 left-3 text-xs px-3 py-1 rounded-full bg-white/15 border border-white/10">
                Popular
              </span>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="text-cyan-300 mt-1">{p.price}<span className="text-white/60 text-sm"> / person*</span></p>

              <ul className="mt-4 space-y-2 text-white/85">
                {p.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-400" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex gap-2">
                <a
                  href="#contact"
                  className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 transition"
                >
                  Enquire Now
                </a>
                <a
                  href="#destinations"
                  className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition"
                >
                  View Details
                </a>
              </div>

              <p className="mt-3 text-xs text-white/60">*Prices vary by season & availability.</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
