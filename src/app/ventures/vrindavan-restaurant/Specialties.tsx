// src/app/ventures/vrindavan-restaurant/Specialties.tsx
"use client";

import {
  Leaf,
  UsersRound,
  Timer,
  CalendarCheck2,
} from "lucide-react";

type Item = {
  title: string;
  desc: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const items: Item[] = [
  {
    title: "Pure Vegetarian",
    desc: "100% vegetarian menu with fresh, hygienic preparation",
    Icon: Leaf,
  },
  {
    title: "Family Dining",
    desc: "Spacious seating for families and group celebrations",
    Icon: UsersRound,
  },
  {
    title: "Quick Service",
    desc: "Fast and efficient service without compromising quality",
    Icon: Timer,
  },
  {
    title: "Special Events",
    desc: "Birthday parties, anniversaries, and corporate events",
    Icon: CalendarCheck2,
  },
];

export default function Specialties() {
  return (
    <section className="bg-[#0B1221] py-40 px-6 md:px-16" // same background & padding as rest
    >
        
      <div className="text-center max-w-2xl mx-auto">
        <h2
          className="text-3xl md:text-4xl font-extrabold"
          data-aos="fade-up"
        >
          Our <span className="bg-gradient-to-r from-sky-700 via-violet-700 to-purple-700 bg-clip-text text-transparent"> Specialties </span>{" "}
        </h2>
        <p
          className="text-gray-300 mt-3"
          data-aos="fade-up"
          data-aos-delay="80"
        >
          Experience the best of vegetarian cuisine in a warm, welcoming atmosphere
        </p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((s, i) => (
          <article
            key={s.title}
            data-aos="zoom-in-up"
            data-aos-delay={i * 70}
            className={[
              "group rounded-2xl p-6",
              "bg-white/5 border border-white/10",
              "hover:bg-white/8 hover:border-white/20",
              "transition-all duration-300",
              "shadow-[0_10px_30px_rgba(0,0,0,0.25)] hover:shadow-[0_18px_50px_rgba(0,0,0,0.35)]",
            ].join(" ")}
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/7 border border-white/10 mb-4">
              <s.Icon className="w-5 h-5 text-sky-300 group-hover:scale-110 transition-transform" />
            </div>
            <h3 className="font-semibold text-lg">{s.title}</h3>
            <p className="text-gray-300 mt-2 leading-relaxed">{s.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
