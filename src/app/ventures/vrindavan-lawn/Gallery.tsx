// src/app/ventures/vrindavan-lawn/Gallery.tsx
"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  "/images/vrindavan-lawn/image1.png",
  "/images/vrindavan-lawn/image2.png",
  "/images/vrindavan-lawn/image3.png",
  "/images/vrindavan-lawn/image4.png",
  "/images/vrindavan-lawn/image5.png",
  
];

export default function AutoScrollGallery() {
  return (
    <section className="relative overflow-hidden py-16 bg-about">
      {/* Headline */}
      <div className="container mx-auto px-6 mb-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative inline-block text-4xl md:text-5xl font-extrabold leading-tight"
        >
          <span className="gradient-text animate-[shine_3.2s_linear_infinite]">
            Gallery
          </span>
          {/* animated underline */}
          <motion.span
            aria-hidden="true"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "100%", opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute -bottom-2 left-0 h-[3px] rounded-full bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-500"
          />
        </motion.h2>
        <p className="mt-3 text-sm md:text-base text-white/60">
          Highlights from Vrindavan Lawn events
        </p>
      </div>

      {/* luxury edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-40 z-10 bg-gradient-to-r from-[#0A0E1F] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-40 z-10 bg-gradient-to-l from-[#0A0E1F] to-transparent" />

      {/* Marquee */}
      <motion.div
        className="flex gap-6"
        animate={{ x: ["0%", "-100%"] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        style={{ willChange: "transform" }}
      >
        {[...images, ...images].map((src, i) => (
          <div
            key={i}
            className="relative w-[320px] h-[400px] sm:w-[380px] sm:h-[440px] md:w-[420px] md:h-[460px] flex-shrink-0 rounded-2xl overflow-hidden glass-card shadow-glow hover:shadow-hover"
          >
            <Image src={src} alt="Vrindavan Lawn Event" fill className="object-cover transition-transform duration-700 hover:scale-[1.04]" />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/25 to-transparent" />
          </div>
        ))}
      </motion.div>

      {/* Reduced motion: stop the shine + you can also swap marquee for grid if you like */}
      <style jsx global>{`
        @keyframes shine {
          0% { filter: drop-shadow(0 0 0 rgba(0,0,0,0)); }
          50% { filter: drop-shadow(0 0 12px rgba(124,58,237,0.35)); }
          100% { filter: drop-shadow(0 0 0 rgba(0,0,0,0)); }
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-[shine_3.2s_linear_infinite] { animation: none !important; }
        }
      `}</style>
    </section>
  );
}
