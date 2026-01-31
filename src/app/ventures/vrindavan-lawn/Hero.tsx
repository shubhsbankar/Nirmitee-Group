// src/app/ventures/vrindavan-lawn/Hero.tsx
"use client";
import Image from "next/image";
import { useMemo } from "react";

type Bubble = {
  left: string;
  top: string;
  size: number;
  color: "cyan" | "fuchsia" | "violet" | "white";
  dur: number;   // seconds
  delay: number; // seconds
};

export default function Hero() {
  // Tweak positions/sizes/durations here
  const bubbles = useMemo<Bubble[]>(
    () => [
      { left: "6%",  top: "18%", size: 180, color: "fuchsia", dur: 10, delay: 0 },
      { left: "16%", top: "68%", size: 120, color: "cyan",    dur: 9,  delay: 1.2 },
      { left: "28%", top: "36%", size: 240, color: "violet",  dur: 12, delay: 0.6 },
      { left: "45%", top: "22%", size: 140, color: "white",   dur: 8,  delay: 0.3 },
      { left: "55%", top: "72%", size: 260, color: "fuchsia", dur: 13, delay: 0.9 },
      { left: "70%", top: "30%", size: 170, color: "cyan",    dur: 11, delay: 0.4 },
      { left: "82%", top: "58%", size: 210, color: "violet",  dur: 12, delay: 1.1 },
      { left: "35%", top: "80%", size: 130, color: "white",   dur: 9,  delay: 0.8 },
    ],
    []
  );

  return (
    <section className="relative h-[90vh] flex items-center justify-center text-white text-center overflow-hidden">
      {/* Background image (slightly zoomed + blurred for softness) */}
      <Image
        src="/images/vrindavan-lawn/hero.png"
        alt="Vrindavan Lawn Yavatmal Wedding Venue"
        fill
        priority
        className="object-cover -z-30 scale-105 "
        sizes="100vw"
      />

      {/* Purple→Blue color layer */}
      <div
        aria-hidden
        className="absolute inset-0 -z-20 bg-gradient-to-br from-fuchsia-600/5 via-purple-600/35 to-sky-500/40"
      />
      {/* Dark veil for contrast */}
      <div aria-hidden className="absolute inset-0 -z-10 bg-black/40" />

      {/* Animated bubbles layer */}
      <div className="pointer-events-none absolute inset-0 -z-5">
        {bubbles.map((b, i) => (
          <div
            key={i}
            className={[
              "absolute rounded-full blur-3xl opacity-70 bubble-float",
              b.color === "cyan" ? "bg-cyan-400/25" :
              b.color === "fuchsia" ? "bg-fuchsia-500/25" :
              b.color === "violet" ? "bg-violet-500/25" :
              "bg-white/12",
            ].join(" ")}
            style={{
              left: b.left,
              top: b.top,
              width: b.size,
              height: b.size,
              animationDuration: `${b.dur}s`,
              animationDelay: `${b.delay}s`,
            }}
            aria-hidden
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative bg-black/50 px-6 py-6 md:py-8 rounded-xl backdrop-blur-sm border border-white/10">
        <h1 className="bg-gradient-to-r from-sky-700 via-violet-700 to-purple-700 bg-clip-text text-transparent text-4xl md:text-6xl font-bold">Vrindavan Lawn</h1>
        <p className="mt-4 text-lg md:text-xl">
          Premium Wedding &amp; Event Venue in Yavatmal
        </p>
      </div>

      {/* Keyframes + Reduced motion */}
      <style jsx global>{`
        /* soft floating + slight horizontal drift */
        @keyframes floatDrift {
          0%   { transform: translate3d(0, 0, 0) scale(1);    opacity: 0.65; }
          25%  { transform: translate3d(10px, -18px, 0) scale(1.03); opacity: 0.8; }
          50%  { transform: translate3d(0px, -32px, 0) scale(1.02);  opacity: 0.75; }
          75%  { transform: translate3d(-12px, -18px, 0) scale(1.04); opacity: 0.85; }
          100% { transform: translate3d(0, 0, 0) scale(1);    opacity: 0.65; }
        }
        .bubble-float {
          animation-name: floatDrift;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .bubble-float { animation: none !important; }
        }
      `}</style>
    </section>
  );
}
