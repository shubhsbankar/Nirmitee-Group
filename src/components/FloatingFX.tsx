"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useMemo } from "react";

type Orb = {
  size: number;              // px
  x: string;                 // % or px, e.g. "10%", "calc(100% - 200px)"
  y: string;                 // % or px
  hue: number;               // 0-360
  delay: number;             // seconds
  dur: number;               // seconds
  amp: number;               // px vertical amplitude
};

export default function FloatingFX() {
  const reduce = useReducedMotion();

  // a few tasteful blobs + tiny sparkles
  const orbs = useMemo<Orb[]>(
    () => [
      { size: 220, x: "5%",   y: "12%",  hue: 200, delay: 0.1, dur: 12, amp: 18 },
      { size: 300, x: "70%",  y: "22%",  hue: 275, delay: 0.6, dur: 16, amp: 24 },
      { size: 180, x: "15%",  y: "70%",  hue: 195, delay: 0.3, dur: 14, amp: 16 },
      { size: 260, x: "82%",  y: "74%",  hue: 255, delay: 0.2, dur: 18, amp: 22 },
    ],
    []
  );

  // tiny particles (stars) – handful for performance
  const dots = useMemo(
    () =>
      Array.from({ length: 18 }).map((_, i) => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 80 + 10}%`,
        delay: Math.random() * 4,
        dur: 4 + Math.random() * 5,
        size: 2 + Math.random() * 2,
      })),
    []
  );

  if (reduce) return null; // respect reduced motion

  return (
    <>
      {/* SOFT ORBS */}
      {orbs.map((o, idx) => (
        <motion.div
          key={`orb-${idx}`}
          aria-hidden
          className="pointer-events-none absolute -z-0 blur-3xl mix-blend-screen"
          style={{
            width: o.size,
            height: o.size,
            left: o.x,
            top: o.y,
            borderRadius: "9999px",
            background:
              `radial-gradient(closest-side, hsl(${o.hue} 95% 65% / 0.35), transparent 70%)`,
          }}
          animate={{ y: [0, -o.amp, 0] }}
          transition={{ duration: o.dur, repeat: Infinity, ease: "easeInOut", delay: o.delay }}
        />
      ))}

      {/* TINY SPARKLES */}
      {dots.map((d, i) => (
        <motion.span
          key={`dot-${i}`}
          aria-hidden
          className="pointer-events-none absolute -z-0 rounded-full opacity-70"
          style={{
            left: d.left,
            top: d.top,
            width: d.size,
            height: d.size,
            background: "rgba(255,255,255,.9)",
            boxShadow: "0 0 10px rgba(255,255,255,.6)",
          }}
          animate={{ y: [-8, 8, -8], opacity: [0.35, 0.8, 0.35] }}
          transition={{ duration: d.dur, repeat: Infinity, ease: "easeInOut", delay: d.delay }}
        />
      ))}
    </>
  );
}
