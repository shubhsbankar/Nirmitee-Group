// src/app/.../Hero.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Building2, Users, IndianRupee } from "lucide-react";
import Navbar from "@/components/Navbar";

/** Observe once: flips to true the first time target enters the viewport */
function useInViewOnce<T extends Element>(options?: IntersectionObserverInit) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current || inView) return;
    const el = ref.current;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { root: null, threshold: 0.25, ...options }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [inView, options]);

  return { ref, inView };
}

/** Count from 0 -> end over durationMs once enabled */
function useCounter(end: number, enabled: boolean, durationMs = 1200) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!enabled) return;
    let raf = 0;
    const start = performance.now();

    const step = (t: number) => {
      const p = Math.min(1, (t - start) / durationMs);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(end * eased));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [end, enabled, durationMs]);
  return val;
}

export default function Hero() {
  // Track when the stats block is visible
  const { ref: statsRef, inView } = useInViewOnce<HTMLDivElement>({ threshold: 0.35 });

  // Counters (targets based on your labels)
  const ventures = useCounter(8, inView);
  const employees = useCounter(500, inView);
  const crore = useCounter(100, inView); // display as ₹{crore}Cr+

  return (
    <section
      className="
        relative min-h-[100svh]
        md:h-screen
        flex flex-col items-center text-center text-white bg-midnight
        overflow-visible md:overflow-hidden
        pt-28 md:pt-32 pb-32 md:pb-0
      "
    >
      {/* ✅ Navbar overlays the hero only */}
      <div className="absolute inset-x-0 top-0 z-50">
        <Navbar />
      </div>

      {/* Background */}
      <Image
        src="/city-bg.png"
        alt="City skyline"
        fill
        className="object-cover -z-10"
        priority
      />

      {/* Floating Balls */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute w-64 h-64 bg-gradient-to-br from-pink-500 to-yellow-500 rounded-full opacity-30 animate-float1 top-10 left-10" />
        <div className="absolute w-72 h-72 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full opacity-30 animate-float2 bottom-20 right-20" />
        <div className="absolute w-56 h-56 bg-gradient-to-br from-green-400 to-cyan-500 rounded-full opacity-30 animate-float3 top-1/2 left-1/3" />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 -z-10" />

      {/* Badge */}
      <div className="px-4 py-1 mb-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-sm text-cyan-300">
        Best Digital Group of 2024
      </div>

      {/* Heading */}
      <h1 className="mb-2 font-extrabold tracking-tight leading-[1.05] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white">
        <span className="block">One Group.</span>
        <span className="block bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          Infinite Possibilities.
        </span>
      </h1>

      {/* Subheading */}
      <p className="mt-3 md:mt-4 text-lg max-w-2xl text-gray-300">
        From real estate to restaurants, Nirmittee leads 8 successful ventures
        under one vision.
      </p>

      {/* CTAs */}
      <div className="relative z-10 mt-6 mb-8 md:mb-[200px] lg:mb-[240px] flex gap-4">
        <Link
          href="/ventures"
          className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium shadow-lg shadow-blue-500/30 hover:scale-105 transition-transform"
        >
          Explore Our Ventures →
        </Link>
        <Link
          href="/contact"
          className="px-6 py-3 rounded-full border border-white text-white font-medium hover:bg-white hover:text-black transition-colors"
        >
          Contact Head Office
        </Link>
      </div>

      {/* Stats with KPI counters */}
      <div
        ref={statsRef}
        className="
          mt-4 w-full px-4
          flex flex-col md:flex-row md:flex-wrap gap-4 md:gap-6 items-center md:justify-center
          md:absolute md:bottom-5 md:left-1/2 md:-translate-x-1/2
        "
      >
        {/* 1: Ventures */}
        <div
          className="
            bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl border border-white/10 shadow-lg
            flex flex-col items-center w-full md:w-64 py-6
            animate-fadeup hover:scale-105 hover:shadow-cyan-500/30 transition-all duration-300
          "
          style={{ animationDelay: `0s` }}
        >
          <Building2 size={36} className="text-cyan-300 mb-3" />
          <p className="text-3xl font-bold tabular-nums">{ventures}</p>
          <p className="text-gray-300 text-sm text-center">Active Ventures</p>
        </div>

        {/* 2: Employees */}
        <div
          className="
            bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl border border-white/10 shadow-lg
            flex flex-col items-center w-full md:w-64 py-6
            animate-fadeup hover:scale-105 hover:shadow-cyan-500/30 transition-all duration-300
          "
          style={{ animationDelay: `0.2s` }}
        >
          <Users size={36} className="text-cyan-300 mb-3" />
          <p className="text-3xl font-bold tabular-nums">
            {employees}
            <span className="align-super text-lg">+</span>
          </p>
          <p className="text-gray-300 text-sm text-center">Employees</p>
        </div>

        {/* 3: Revenue */}
        <div
          className="
            bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl border border-white/10 shadow-lg
            flex flex-col items-center w-full md:w-64 py-6
            animate-fadeup hover:scale-105 hover:shadow-cyan-500/30 transition-all duration-300
          "
          style={{ animationDelay: `0.4s` }}
        >
          <IndianRupee size={36} className="text-cyan-300 mb-3" />
          <p className="text-3xl font-bold tabular-nums">
            ₹{crore}
            <span className="mx-1">Cr</span>
            <span className="align-super text-lg">+</span>
          </p>
          <p className="text-gray-300 text-sm text-center">Revenue</p>
        </div>
      </div>
    </section>
  );
}
