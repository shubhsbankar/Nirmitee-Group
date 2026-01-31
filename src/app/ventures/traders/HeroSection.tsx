"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-60">
      {/* Background Image */}
      <Image
        src="/images/traders/hero-blur..png" // fixed double dot
        alt="Wholesale trading background - Nirmittee Traders"
        fill
        priority
        className="pointer-events-none select-none object-cover -z-10 opacity-50"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-midnight/60 via-midnight/50 to-midnight/80" />

      {/* Content */}
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-4xl text-center">
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight"
          >
            <span className="block">Wholesale Trading</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-400">
              Solutions
            </span>
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="mt-5 text-base sm:text-lg text-white/80"
          >
            Your trusted partner for bulk supply and wholesale trading in Yavatmal and Maharashtra.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <a
              href="#contact"
              className="rounded-xl px-6 py-3 bg-blue-600 hover:bg-blue-500 transition shadow-lg shadow-blue-600/20"
            >
              Get Quote Now
            </a>
            <a
              href="#catalog"
              className="rounded-xl px-6 py-3 bg-white/10 hover:bg-white/20 transition border border-white/15"
            >
              View Catalog
            </a>
          </motion.div>
        </div>
      </div>

      {/* Floating Glow Elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.6 }}
        className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-sky-500/20 blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.8 }}
        className="pointer-events-none absolute -bottom-32 -right-24 h-80 w-80 rounded-full bg-purple-500/20 blur-3xl"
      />
    </section>
  );
}
