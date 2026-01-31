// src/app/ventures/vrindavan-lawn/About.tsx
"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

/** Counter hook */
function useCounter(end: number, inView: boolean, durationMs = 1100) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const step = (t: number) => {
      const p = Math.min(1, (t - start) / durationMs);
      setVal(Math.round(end * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [end, inView, durationMs]);
  return val;
}

export default function AboutLawn() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const inView = useInView(sectionRef, { amount: 0.3, once: true });

  // TODO: adjust numbers for Lawn (kept placeholders)
  const years      = useCounter(7, inView);     // years operating
  const capacity   = useCounter(1000, inView);  // lawn guest capacity
  const eventsYear = useCounter(250, inView);   // events per year

  return (
    <section
      ref={sectionRef}
      className="bg-about mx-auto max-w-[100rem] px-6 md:px-10 py-20 md:py-28 rounded-2xl border border-white/10"
      style={{ minHeight: "70svh" }}
    >
      <div className="grid gap-14 md:gap-16 lg:grid-cols-2 items-start">
        {/* LEFT: Text */}
        <div data-aos="fade-right">
          <div className="inline-block">
            <h2 className="relative text-4xl md:text-5xl font-extrabold text-white leading-tight">
              <span className="gradient-text">About</span> Vrindavan Lawn
              <motion.span
                aria-hidden="true"
                initial={{ width: 0, opacity: 0 }}
                animate={inView ? { width: "100%", opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute -bottom-2 left-0 h-[3px] rounded-full bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-500"
              />
            </h2>
          </div>

          <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground max-w-prose">
            <p>
              Vrindavan Lawn is Yavatmal’s premium outdoor wedding &amp; event destination—
              expansive greens, elegant lighting, and flawless guest flow for celebrations that truly shine.
            </p>
            <p>
              From grand weddings and sangeet nights to corporate galas and community gatherings,
              our dedicated team crafts unforgettable experiences with meticulous planning and hospitality.
            </p>
          </div>

          {/* KPI Stats */}
          <div className="mt-10 grid grid-cols-3 gap-6">
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-extrabold text-cyan-300 tabular-nums">
                {years}+
              </p>
              <p className="text-sm text-gray-400 mt-1">Years Hosting</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-extrabold text-cyan-300 tabular-nums">
                {capacity}
              </p>
              <p className="text-sm text-gray-400 mt-1">Guest Capacity</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-extrabold text-cyan-300 tabular-nums">
                {eventsYear}+
              </p>
              <p className="text-sm text-gray-400 mt-1">Events / Year</p>
            </div>
          </div>

          {/* USPs */}
          <div className="mt-10 grid sm:grid-cols-2 gap-4">
            {[
              "Grand stage & décor support",
              "Catering & live counters",
              "Valet & logistics-ready layout",
              "Power backup & lighting design",
            ].map((t) => (
              <div key={t} className="glass-card p-4 shadow-glow">
                <p className="text-white">{t}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: Image */}
        <div className="flex md:justify-end" data-aos="fade-left" data-aos-delay="80">
          <motion.div
            initial={{ y: 12, opacity: 0.85 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
            className="relative w-full max-w-[720px] aspect-[16/10] rounded-2xl overflow-hidden shadow-[0_15px_50px_rgba(0,0,0,0.35)] glass-card"
          >
            <Image
              src="/images/vrindavan-lawn/image4.png"
              alt="Vrindavan Lawn event ambience"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 720px, 92vw"
            />
            {/* soft gradient edge for premium depth */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-black/10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
