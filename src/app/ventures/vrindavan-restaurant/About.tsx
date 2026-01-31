// src/app/ventures/vrindavan-restaurant/About.tsx
"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

/** simple counter that animates to `end` when inView becomes true */
function useCounter(end: number, inView: boolean, durationMs = 1100) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();

    const step = (t: number) => {
      const p = Math.min(1, (t - start) / durationMs);
      setVal(Math.round(end * (1 - Math.pow(1 - p, 3)))); // easeOutCubic
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [end, inView, durationMs]);

  return val;
}

export default function About() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const inView = useInView(sectionRef, { amount: 0.35, once: true });

  // counters (adjust targets as needed)
  const years = useCounter(5, inView);
  const seats = useCounter(120, inView);
  const items = useCounter(50, inView);

  return (
    <section ref={sectionRef} className="mx-auto max-w-7xl px-6 py-16">
      <div className="grid gap-12 md:grid-cols-2 items-start">
        {/* LEFT: Text */}
        <div data-aos="fade-right">
          <div className="inline-block">
            <h2 className="relative text-4xl md:text-5xl font-extrabold text-white">
              <span className="bg-gradient-to-r from-sky-700 via-violet-700 to-purple-700 bg-clip-text text-transparent">
                About
              </span>{" "}
              Vrindavan Restaurant
              {/* Trail underline */}
              <motion.span
                aria-hidden="true"
                initial={{ width: 0, opacity: 0 }}
                animate={inView ? { width: "100%", opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute -bottom-2 left-0 h-[3px] rounded-full bg-gradient-to-r from-sky-500 via-violet-500 to-purple-500"
              />
            </h2>
          </div>

          <p className="mt-6 text-lg leading-relaxed text-gray-300 max-w-prose">
            Since 2018, Vrindavan Restaurant has been serving Yavatmal’s finest
            pure vegetarian cuisine. Our commitment to quality, hygiene, and
            authentic flavors has made us the preferred choice for families and
            food lovers across the city.
          </p>

          <p className="mt-4 text-lg leading-relaxed text-gray-300 max-w-prose">
            With a seating capacity of 120 guests, we specialize in traditional
            Indian cuisine, special occasion celebrations, and corporate events.
            Every dish is prepared with fresh ingredients and traditional
            recipes passed down through generations.
          </p>

          {/* KPI Stats with counters */}
          <div className="mt-10 grid grid-cols-3 gap-6">
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-extrabold text-sky-400 tabular-nums">
                {years}+
              </p>
              <p className="text-sm text-gray-400 mt-1">Years Serving</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-extrabold text-sky-400 tabular-nums">
                {seats}
              </p>
              <p className="text-sm text-gray-400 mt-1">Seating Capacity</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-extrabold text-sky-400 tabular-nums">
                {items}+
              </p>
              <p className="text-sm text-gray-400 mt-1">Menu Items</p>
            </div>
          </div>
        </div>

        {/* RIGHT: Image */}
        <div className="flex md:justify-end" data-aos="fade-left" data-aos-delay="80">
          <motion.div
            initial={{ y: 12, opacity: 0.85 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
            className="relative w-full max-w-[640px] aspect-[16/11] rounded-2xl overflow-hidden shadow-[0_15px_50px_rgba(0,0,0,0.35)]"
          >
            <Image
              src="/images/vrindavan/about.jpg"
              alt="Elegant dining area at Vrindavan Restaurant"
              fill
              className="object-cover"
              priority={false}
              sizes="(min-width: 1024px) 640px, 90vw"
            />
            {/* very soft dark overlay for depth */}
            <div className="absolute inset-0 bg-black/10 pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
