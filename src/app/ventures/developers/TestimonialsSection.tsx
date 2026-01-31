// src/app/ventures/developers/Testimonials.tsx
"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { fadeUp, stagger } from "@/lib/anim";

function Stars() {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" className="h-5 w-5 text-yellow-400/90" aria-hidden>
          <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2 9.19 8.62 2 9.24l5.46 4.73L5.82 21 12 17.27Z" fill="currentColor" />
        </svg>
      ))}
    </div>
  );
}

const ITEMS = [
  { quote: "“Nirmittee Developers delivered our dream home exactly as promised. Excellent quality and timely completion.”", name: "Rajesh Sharma", city: "Yavatmal" },
  { quote: "“Professional team, transparent dealings, and superior construction quality. Highly recommended.”", name: "Priya Patel", city: "Yavatmal" },
  { quote: "“Great coordination from booking to possession. The amenities and finishing exceeded expectations.”", name: "Ankit Verma", city: "Yavatmal" },
  { quote: "“Reliable and responsive. The craftsmanship and material quality were top-notch.”", name: "Sneha Kulkarni", city: "Yavatmal" },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative bg-about px-6 py-20 md:py-24 overflow-hidden rounded-2xl border border-white/10">
      <div className="container mx-auto">
        <motion.h2
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center text-3xl md:text-4xl font-extrabold text-white"
        >
          What Our <span className="gradient-text">Clients Say</span>
        </motion.h2>

        <motion.p
          variants={fadeUp(0.06)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          className="mt-2 text-center text-white/70"
        >
          Trusted by families across Yavatmal
        </motion.p>

        <motion.div
          variants={stagger(0.12, 0.12)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-10"
        >
          <AutoSlider items={ITEMS} intervalMs={2800} />
        </motion.div>
      </div>

      {/* Glowing gradient stroke for cards */}
      <style jsx global>{`
        .glow-stroke { position: relative; }
        .glow-stroke::before {
          content: "";
          position: absolute; inset: 0;
          border-radius: 1rem; /* rounded-2xl */
          padding: 1px;
          background: conic-gradient(from 0deg, #22d3ee, #6366f1, #a855f7, #22d3ee);
          -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
          -webkit-mask-composite: xor; mask-composite: exclude;
          animation: spinHue 6s linear infinite;
          opacity: 0.9;
        }
        @keyframes spinHue { to { transform: rotate(1turn); } }
        @media (prefers-reduced-motion: reduce) { .glow-stroke::before { animation: none; } }
      `}</style>
    </section>
  );
}

/* ---------- Pure Framer auto-slider ---------- */

type TItem = { quote: string; name: string; city: string };

function AutoSlider({ items, intervalMs = 3000 }: { items: TItem[]; intervalMs?: number }) {
  const [visible, setVisible] = useState(1); // slides per view
  const [isPaused, setPaused] = useState(false);
  const idx = useRef(0);
  const x = useMotionValue(0);

  // detect responsive slidesPerView (1 on small, 2 on md+)
  useEffect(() => {
    const mm = window.matchMedia("(min-width: 768px)");
    const set = () => setVisible(mm.matches ? 2 : 1);
    set(); mm.addEventListener("change", set);
    return () => mm.removeEventListener("change", set);
  }, []);

  // build track: duplicate for seamless loop
  const TRACK = useMemo(() => [...items, ...items, ...items], [items]); // triple = plenty of runway

  // width per slide in %
  const stepPct = 100 / visible;

  // autoplay
  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(() => slideBy(1), intervalMs);
    return () => clearInterval(id);
  }, [isPaused, intervalMs, visible]);

  // slideBy: animate x to next step; reset when we overflow the middle chunk
  const slideBy = (delta: number) => {
    idx.current += delta;
    const target = -idx.current * stepPct;

    // animate to target %
    const controls = animate(x, target, { type: "tween", ease: "linear", duration: 0.6 });

    controls.then(() => {
      // when idx grows too big, snap back by one items.length (still visually identical)
      const chunk = items.length;
      if (idx.current > chunk * 1.5) {
        idx.current -= chunk;
        x.jump(-idx.current * stepPct);
      } else if (idx.current < chunk * 0.5) {
        idx.current += chunk;
        x.jump(-idx.current * stepPct);
      }
    });
  };

  // derived transform -> percentage string
  const translateX = useTransform(x, (v) => `${v}%`);

  return (
    <div
      className="relative overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Track */}
      <motion.div
        className="flex"
        style={{ x: translateX, willChange: "transform" }}
      >
        {TRACK.map((t, i) => (
          <div
            key={`${t.name}-${i}`}
            className="px-2 md:px-3"
            style={{ flex: `0 0 ${stepPct}%` }} // slide width
          >
            <TestimonialCard item={t} />
          </div>
        ))}
      </motion.div>

      {/* Pagination dots */}
      <div className="mt-6 flex justify-center gap-2">
        {items.map((_, i) => {
          // compute “active” dot based on current idx
          const current = ((idx.current % items.length) + items.length) % items.length;
          const active = i === current % items.length;
          return (
            <button
              key={i}
              onClick={() => {
                // jump to chosen index
                const base = idx.current - (idx.current % 1); // current integer index
                idx.current = base - (current - i);
                x.set(-idx.current * stepPct);
              }}
              className={[
                "h-2.5 w-2.5 rounded-full transition-all",
                active ? "bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.7)] w-6" : "bg-white/30 hover:bg-white/60",
              ].join(" ")}
              aria-label={`Go to slide ${i + 1}`}
            />
          );
        })}
      </div>
    </div>
  );
}

function TestimonialCard({ item }: { item: TItem }) {
  return (
    <blockquote className="group relative rounded-2xl p-[1px]">
      {/* animated gradient stroke */}
      <div className="glow-stroke rounded-2xl">
        <div className="relative rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8 shadow-[0_6px_24px_rgba(0,0,0,0.25)] backdrop-blur-sm">
          <Stars />
          <p className="mt-3 italic text-white/90 leading-relaxed">{item.quote}</p>
          <footer className="mt-5">
            <div className="font-medium text-cyan-300">{item.name}</div>
            <div className="text-sm text-white/60">{item.city}</div>
          </footer>

          {/* soft inner tint */}
          <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(120%_120%_at_10%_0%,rgba(110,168,255,0.06),transparent_40%)]" />
        </div>
      </div>

      {/* outer halo on hover */}
      <div className="pointer-events-none absolute -inset-[2px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-cyan-400/25 via-purple-500/25 to-pink-500/25 blur-xl" />
    </blockquote>
  );
}
