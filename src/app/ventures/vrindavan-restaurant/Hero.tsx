// src/app/ventures/vrindavan-restaurant/Hero.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect } from "react";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useRef(false);

  useEffect(() => {
    reduceMotion.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  const onMouseMove = (e: React.MouseEvent) => {
    if (reduceMotion.current) return;
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left - r.width / 2) / 40;
    const y = (e.clientY - r.top - r.height / 2) / 40;
    el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
  };

  return (
    <header
      className="relative overflow-hidden pt-23"
      onMouseMove={onMouseMove}
      aria-label="Vrindavan Restaurant hero"
    >
      {/* background */}
      <Image
        src="/images/vrindavan/hero.jpg"
        alt="Vrindavan Restaurant interior"
        fill
        priority
        sizes="100vw"
        className="object-cover -z-10 opacity-40"
      />
      {/* darker overlay for contrast */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-black/55"
      />
      {/* soft top/bottom vignette like screenshot */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-black/35 via-transparent to-black/50"
      />

      {/* content */}
      <div className="container mx-auto px-6">
        <div className="min-h-[60vh] md:min-h-[73vh] flex items-center justify-center">
          <div
            ref={ref}
            className="max-w-4xl text-center transition-transform duration-200 will-change-transform"
          >
            <h1
              className="text-[42px] leading-tight md:text-7xl md:leading-[1.1] font-extrabold tracking-tight"
              data-aos="fade-up"
              style={{
                textShadow:
                  "0 2px 16px rgba(0,0,0,.45), 0 1px 2px rgba(0,0,0,.25)",
              }}
            >
              <span className="bg-gradient-to-r from-sky-400 via-violet-400 to-purple-400 bg-clip-text text-transparent animate-[shine_3.5s_linear_infinite]">
                Vrindavan
              </span>{" "}
              <span className="text-white">Restaurant</span>
            </h1>

            <p
              className="mt-5 text-white/90 text-lg md:text-2xl"
              data-aos="fade-up"
              data-aos-delay="80"
            >
              Best Pure Vegetarian Restaurant in Yavatmal – Where Every Meal is a Celebration
            </p>

            <div
              className="mt-8 flex flex-wrap items-center justify-center gap-4"
              data-aos="fade-up"
              data-aos-delay="140"
            >
              <Link
                href="#booking"
                className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium shadow-lg shadow-blue-900/30 focus:outline-none focus:ring-2 focus:ring-blue-300"
              >
                Book Table Now
              </Link>

              <Link
                href="#menu"
                className="px-6 py-3 rounded-xl bg-black/60 hover:bg-black/70 text-white font-medium border border-white/10 backdrop-blur focus:outline-none focus:ring-2 focus:ring-white/30"
              >
                View Menu
              </Link>

              <div className="flex items-center gap-2 text-white/90 text-sm border border-white/15 rounded-full px-4 py-2 bg-black/35 backdrop-blur">
                <span aria-hidden>⭐⭐⭐⭐⭐</span>
                <span>4.8/5 (500+ Reviews)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* subtle glow on the word “Vrindavan” */}
      <style jsx global>{`
        @keyframes shine {
          0% {
            filter: drop-shadow(0 0 0 rgba(0, 0, 0, 0));
          }
          50% {
            filter: drop-shadow(0 0 12px rgba(124, 58, 237, 0.35));
          }
          100% {
            filter: drop-shadow(0 0 0 rgba(0, 0, 0, 0));
          }
        }
      `}</style>
    </header>
  );
}
