"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, fadeIn } from "@/lib/anim";
import FloatingFX from "@/components/FloatingFX"; // ✅ add this

export default function HeroSection() {
  return (
    <section className="relative min-h-[100vh] overflow-hidden pt-28 pb-16">
      {/* Background image */}
      <motion.div
        variants={fadeIn(0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        aria-hidden
        className="absolute inset-0 -z-10"
      >
        <Image
          src="/images/developers/hero-blur.png"
          alt="Nirmittee Developers Yavatmal premium real estate"
          fill
          priority
          className="object-cover"
        />
        {/* Darken + vignette */}
        <div className="absolute inset-0 bg-[rgba(5,7,28,0.55)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,transparent_55%,rgba(0,0,0,0.45)_100%)]" />
      </motion.div>

      {/* ✨ Floating orbs + sparkles layer (between bg and content) */}
      <div className="absolute inset-0 -z-0">
        <FloatingFX />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6">
        <div className="mx-auto text-center">
          <motion.h1
            variants={fadeUp(0)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="leading-tight font-extrabold text-4xl md:text-6xl lg:text-7xl text-white"
          >
            Premium Real Estate in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-purple-400">
              Yavatmal
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="mt-15 text-lg md:text-xl text-white/80 max-w-3xl mx-auto"
          >
            Building dreams into reality with Yavatmal&apos;s most trusted real
            estate developer since 2015.
          </motion.p>

          <motion.div
            variants={fadeUp(0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="mt-20 flex flex-wrap items-center justify-center gap-3"
          >
            <a
              href="/ventures/developers#projects"
              className="px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium shadow-md shadow-blue-900/30 transition"
            >
              View Properties
            </a>
            <a
              href="/contact"
              className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium ring-1 ring-white/15 transition"
            >
              Book Site Visit
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
