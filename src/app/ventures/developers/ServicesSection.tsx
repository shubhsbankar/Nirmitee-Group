"use client";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/anim";
import {
  Building2,        // Residential
  MapPinned,        // Commercial
  Medal,            // Quality
  UsersRound,       // Support
} from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      title: "Residential Projects",
      desc: "Premium apartments, villas, and housing complexes",
      Icon: Building2,
      bg: "from-pink-500/80 via-red-500/80 to-orange-500/80",
    },
    {
      title: "Commercial Spaces",
      desc: "Office complexes, retail spaces, and business centers",
      Icon: MapPinned,
      bg: "from-cyan-500/80 via-sky-500/80 to-blue-500/80",
    },
    {
      title: "Quality Construction",
      desc: "ISO certified construction with premium materials",
      Icon: Medal,
      bg: "from-purple-500/80 via-indigo-500/80 to-blue-500/80",
    },
    {
      title: "Customer Support",
      desc: "End-to-end support from booking to possession",
      Icon: UsersRound,
      bg: "from-green-500/80 via-emerald-500/80 to-teal-500/80",
    },
  ];

  return (
    <section id="services" className="relative bg-about px-6 py-20 md:py-24">
      <div className="container mx-auto">
        {/* Title */}
        <motion.h2
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="relative mx-auto w-fit text-center text-3xl md:text-4xl font-extrabold text-white"
        >
          Our <span className="gradient-text">Services</span>
          <motion.span
            aria-hidden="true"
            variants={fadeUp(0.1)}
            className="absolute -bottom-2 left-0 h-[3px] w-full rounded-full bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-500"
          />
        </motion.h2>

        <motion.p
          variants={fadeUp(0.06)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          className="mt-3 text-center text-white/70 max-w-2xl mx-auto"
        >
          Comprehensive real estate solutions from concept to completion
        </motion.p>

        {/* Cards */}
        <motion.div
          variants={stagger(0.12, 0.12)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              variants={fadeUp(i * 0.04)}
              whileHover={{ scale: 1.05, y: -6 }}
              transition={{ type: "spring", stiffness: 220, damping: 18 }}
              className={`relative rounded-2xl p-7 text-center shadow-xl 
                          bg-gradient-to-br ${s.bg} 
                          hover:shadow-[0_10px_35px_rgba(0,0,0,0.5)] transition-all duration-500`}
            >
              {/* Icon */}
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/20">
                <s.Icon aria-hidden className="h-6 w-6 text-white" />
              </div>

              <h3 className="text-lg font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-sm leading-6 text-white/90">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
