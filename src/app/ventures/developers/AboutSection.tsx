// src/app/ventures/developers/About.tsx
"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

/** counter hook for stats */
function useCounter(end: number, inView: boolean, durationMs = 1000) {
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

export default function AboutDevelopers() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const inView = useInView(sectionRef, { amount: 0.35, once: true });

  // animated stats
  const projects = useCounter(25, inView);
  const families = useCounter(500, inView);
  const years = useCounter(8, inView);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative bg-about mx-auto max-w-[100rem] px-6 md:px-10 py-20 md:py-28 
                 rounded-2xl border border-white/10 overflow-hidden"
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
              <span className="gradient-text">About</span> Nirmittee Developers
              <motion.span
                aria-hidden="true"
                initial={{ width: 0, opacity: 0 }}
                animate={inView ? { width: "100%", opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute -bottom-2 left-0 h-[3px] rounded-full 
                           bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-500"
              />
            </h2>
          </div>

          <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground max-w-prose">
            <p>
              For over{" "}
              <span className="text-cyan-300 font-semibold">{years}+ years</span>, 
              Nirmittee Developers has been synonymous with quality construction 
              and customer satisfaction in Yavatmal.
            </p>
            <p>
              We have successfully completed{" "}
              <span className="text-cyan-300 font-semibold">{projects}+</span> projects, 
              delivering over{" "}
              <span className="text-cyan-300 font-semibold">{families}+</span> premium 
              residential and commercial units.
            </p>
            <p>
              Our commitment to excellence, innovative designs, and timely delivery 
              has made us the preferred choice for property buyers in Yavatmal and 
              surrounding areas.
            </p>
          </div>

          {/* Stats */}
          <div className="mt-10 grid grid-cols-3 gap-6">
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-extrabold text-cyan-300 tabular-nums">
                {projects}+
              </p>
              <p className="text-sm text-gray-400 mt-1">Projects Completed</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-extrabold text-cyan-300 tabular-nums">
                {families}+
              </p>
              <p className="text-sm text-gray-400 mt-1">Happy Families</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-extrabold text-cyan-300 tabular-nums">
                {years}+
              </p>
              <p className="text-sm text-gray-400 mt-1">Years Experience</p>
            </div>
          </div>

          {/* USPs */}
         
        </motion.div>

        {/* RIGHT: Image */}
        <motion.div
          initial={{ opacity: 0, x: 28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="flex md:justify-end"
        >
          <div className="relative w-full max-w-[720px] aspect-[16/10] rounded-2xl overflow-hidden 
                          glass-card shadow-[0_15px_50px_rgba(0,0,0,0.35)]">
            <Image
              src="/images/developers/about.png"
              alt="Modern commercial towers — Nirmittee Developers, Yavatmal"
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
