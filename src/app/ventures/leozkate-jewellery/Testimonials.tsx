// src/app/ventures/leozkate/Testimonials.tsx
"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { fadeUp, stagger } from "@/lib/anim";

/* Compact star row with warm gold tone */
function Stars() {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" className="h-5 w-5 text-amber-400/95" aria-hidden>
          <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2 9.19 8.62 2 9.24l5.46 4.73L5.82 21 12 17.27Z" fill="currentColor" />
        </svg>
      ))}
    </div>
  );
}

/* Jewellery copy */
const ITEMS = [
  {
    quote:
      "“Absolutely stunning craftsmanship. The diamond pendant looks even more brilliant in person. Packaging and delivery were premium.”",
    name: "Aarohi Desai",
    city: "Mumbai",
  },
  {
    quote:
      "“I bought a rose-gold engagement ring—perfect sizing and finish. Leozkate’s team guided me throughout. Highly recommended.”",
    name: "Raghav Mehta",
    city: "Pune",
  },
  {
    quote:
      "“Hallmarked and ethically sourced—exactly what I wanted. The detailing on the bracelet is exquisite.”",
    name: "Ishita Sharma",
    city: "Bengaluru",
  },
  {
    quote:
      "“Elegance with everyday comfort. My pearl studs have become a staple; shine and quality are top-notch.”",
    name: "Naina Kapoor",
    city: "Delhi",
  },
];

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden rounded-2xl border border-black/[0.06] bg-[#0b0d14] px-6 py-20 md:py-24"
    >
      <div className="container mx-auto">
        <motion.h2
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center text-3xl md:text-4xl font-extrabold text-white"
        >
          What Our <span className="bg-gradient-to-r from-amber-300 via-rose-300 to-amber-200 bg-clip-text text-transparent">Customers Say</span>
        </motion.h2>

        <motion.p
          variants={fadeUp(0.06)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          className="mt-2 text-center text-white/70"
        >
          Trusted for hallmarked elegance & thoughtful craftsmanship
        </motion.p>

        <motion.div
          variants={stagger(0.12, 0.12)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-10"
        >
          <AutoSlider items={ITEMS} intervalMs={3000} />
        </motion.div>
      </div>

      {/* Warm metallic gradient stroke for cards */}
      <style jsx global>{`
        .glow-stroke { position: relative; }
        .glow-stroke::before {
          content: "";
          position: absolute; inset: 0;
          border-radius: 1rem;
          padding: 1px;
          background: conic-gradient(from 0deg, #fbbf24, #fda4af, #fbbf24);
          -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
          -webkit-mask-composite: xor; mask-composite: exclude;
          animation: spinHue 8s linear infinite;
          opacity: 0.9;
        }
        @keyframes spinHue { to { transform: rotate(1turn); } }
        @media (prefers-reduced-motion: reduce) { .glow-stroke::before { animation: none; } }
      `}</style>

      {/* Subtle vignette for luxury feel */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(120%_80%_at_50%_-20%,rgba(251,191,36,0.08),transparent_60%),radial-gradient(90%_70%_at_100%_10%,rgba(253,164,175,0.06),transparent_60%)]" />
    </section>
  );
}

/* ---------- Pure Framer auto-slider (no deps) ---------- */

type TItem = { quote: string; name: string; city: string };

function AutoSlider({ items, intervalMs = 3000 }: { items: TItem[]; intervalMs?: number }) {
  const [visible, setVisible] = useState(1);
  const [isPaused, setPaused] = useState(false);
  const idx = useRef(0);
  const x = useMotionValue(0);

  // responsive slides per view
  useEffect(() => {
    const mm = window.matchMedia("(min-width: 768px)");
    const on = () => setVisible(mm.matches ? 2 : 1);
    on(); mm.addEventListener("change", on);
    return () => mm.removeEventListener("change", on);
  }, []);

  // build track (triple for seamless loop)
  const TRACK = useMemo(() => [...items, ...items, ...items], [items]);
  const stepPct = 100 / visible;

  // autoplay
  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(() => slideBy(1), intervalMs);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPaused, intervalMs, visible]);

  const slideBy = (delta: number) => {
    idx.current += delta;
    const target = -idx.current * stepPct;
    const controls = animate(x, target, { type: "tween", ease: "linear", duration: 0.6 });
    controls.then(() => {
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

  const translateX = useTransform(x, (v) => `${v}%`);

  return (
    <div
      className="relative overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* track */}
      <motion.div className="flex" style={{ x: translateX, willChange: "transform" }}>
        {TRACK.map((t, i) => (
          <div key={`${t.name}-${i}`} className="px-2 md:px-3" style={{ flex: `0 0 ${stepPct}%` }}>
            <TestimonialCard item={t} />
          </div>
        ))}
      </motion.div>

      {/* dots */}
      <div className="mt-6 flex justify-center gap-2">
        {items.map((_, i) => {
          const current = ((idx.current % items.length) + items.length) % items.length;
          const active = i === current % items.length;
          return (
            <button
              key={i}
              onClick={() => {
                const base = idx.current - (idx.current % 1);
                idx.current = base - (current - i);
                x.set(-idx.current * stepPct);
              }}
              className={[
                "h-2.5 rounded-full transition-all",
                active
                  ? "bg-amber-400 shadow-[0_0_12px_rgba(251,191,36,0.65)] w-6"
                  : "w-2.5 bg-white/30 hover:bg-white/60",
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
      {/* warm metallic animated stroke */}
      <div className="glow-stroke rounded-2xl pb-20">
        <div className="relative rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8 shadow-[0_6px_24px_rgba(0,0,0,0.25)] backdrop-blur-sm">
          <Stars />
          <p className="mt-3 italic text-white/90 leading-relaxed">{item.quote}</p>
          <footer className="mt-5">
            <div className="font-medium text-amber-300">{item.name}</div>
            <div className="text-sm text-white/60">{item.city}</div>
          </footer>
          {/* subtle inner glow */}
          <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(120%_120%_at_10%_0%,rgba(251,191,36,0.06),transparent_40%)]" />
        </div>
      </div>
      {/* gentle hover halo */}
      <div className="pointer-events-none absolute -inset-[2px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-amber-400/25 via-rose-300/25 to-amber-300/25 blur-xl" />
    </blockquote>
  );
}
