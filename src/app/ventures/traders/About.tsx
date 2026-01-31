// src/app/ventures/traders/About.tsx
"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

/** small counter for stats (optional: feel free to keep static numbers) */
function useCounter(end: number, inView: boolean, durationMs = 900) {
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

export default function AboutTraders() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const inView = useInView(sectionRef, { amount: 0.35, once: true });

  // animated stats (adjust as needed)
  const partners = useCounter(200, inView);
  const years = useCounter(7, inView);
  const products = useCounter(1000, inView);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative bg-about mx-auto max-w-[100rem] px-6 md:px-10 py-20 md:py-28 rounded-2xl border border-white/10 overflow-hidden"
      style={{ minHeight: "65svh" }}
    >
      <div className="grid md:grid-cols-2 gap-14 md:gap-16 items-start">
        {/* LEFT: Text */}
        <motion.div
          initial={{ opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <div className="inline-block">
            <h2 className="relative text-4xl md:text-5xl font-extrabold text-white leading-tight">
              <span className="gradient-text">About</span> Nirmittee Traders
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
              Established in 2016, Nirmittee Traders has become the leading wholesale trading
              company in Yavatmal, serving over <span className="text-cyan-300 font-semibold">200+</span> retail partners across Maharashtra.
              We specialize in bulk supply of FMCG products, electronics, and consumer goods.
            </p>
            <p>
              Our commitment to competitive pricing, quality assurance, and reliable delivery
              has made us the preferred choice for retailers and businesses looking for wholesale solutions.
            </p>
          </div>

          {/* Stats */}
          <div className="mt-10 grid grid-cols-3 gap-6">
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-extrabold text-cyan-300 tabular-nums">
                {partners}+
              </p>
              <p className="text-sm text-gray-400 mt-1">Retail Partners</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-extrabold text-cyan-300 tabular-nums">
                {years}+
              </p>
              <p className="text-sm text-gray-400 mt-1">Years Experience</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-extrabold text-cyan-300 tabular-nums">
                {products}+
              </p>
              <p className="text-sm text-gray-400 mt-1">Products</p>
            </div>
          </div>

          {/* USPs (glass cards) */}
          <div className="mt-10 grid sm:grid-cols-2 gap-4">
            {[
              "Pan-India sourcing network",
              "Bulk pricing & margin-friendly deals",
              "On-time logistics & tracking",
              "Dedicated account management",
            ].map((t) => (
              <div key={t} className="glow-wrap">
                <div className="glass-card p-4 shadow-glow hover:shadow-hover">
                  <p className="text-white">{t}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT: Image */}
        <motion.div
          initial={{ opacity: 0, x: 28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="flex md:justify-end"
        >
          <div className="relative w-full max-w-[720px] aspect-[16/10] rounded-2xl overflow-hidden glass-card shadow-[0_15px_50px_rgba(0,0,0,0.35)]">
            <Image
              src="/images/traders/about.png"
              alt="Warehouse and inventory management at Nirmittee Traders, Yavatmal"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 720px, 92vw"
              priority={false}
            />
            {/* soft gradient edge for depth */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-black/10" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
