// src/app/ventures/leozkate/GalleryPolaroid.tsx
"use client";
import Image from "next/image";
import { useRef } from "react";

const PHOTOS = [
  "/images/leozkate/gallery/1.jpeg",
  "/images/leozkate/gallery/2.jpeg",
  "/images/leozkate/gallery/3.jpeg",
  "/images/leozkate/gallery/4.jpeg",
  "/images/leozkate/gallery/5.jpeg",
  "/images/leozkate/gallery/6.jpeg",
];

export default function GalleryPolaroid() {
  return (
    <section
      className="relative overflow-hidden py-16"
      aria-labelledby="gallery-title"
    >
      {/* layered background */}
      <div className="abs inset-0 -z-10">
        <div className="bg-base abs inset-0" />      {/* solid dark base */}
        <div className="smoke-bg abs inset-0" />     {/* cyan+purple smoke */}
        <div className="vignette abs inset-0" />     {/* soft vignette (translucent) */}
      </div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <header className="text-center mb-8">
          <h2 id="gallery-title" className="text-3xl md:text-4xl font-extrabold">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Gallery
            </span>
          </h2>
          <p className="mt-2 text-white/80">
            A glimpse of our designs &amp; happy customers
          </p>
        </header>

        {/* Board */}
        <div className="grid place-items-center">
          <div className="relative w-full h-[56svh] min-h-[420px]">
            {PHOTOS.map((src, i) => (
              <Draggable key={src} src={src} i={i} />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .abs { position: absolute; pointer-events: none; }

        /* base: guarantees screen blend looks bright */
        .bg-base {
          background: linear-gradient(180deg, #0a0e1f 0%, #081225 48%, #050814 100%);
        }

        /* brighter, blurrier smoke with 'screen' blend */
        .smoke-bg {
          background:
            radial-gradient(60% 60% at 20% 30%, rgba(34,211,238,0.55) 0%, transparent 70%),
            radial-gradient(50% 50% at 80% 25%, rgba(168,85,247,0.55) 0%, transparent 70%),
            radial-gradient(55% 55% at 30% 80%, rgba(34,211,238,0.42) 0%, transparent 75%),
            radial-gradient(50% 65% at 75% 85%, rgba(168,85,247,0.42) 0%, transparent 75%);
          filter: blur(90px);
          mix-blend-mode: screen;
          opacity: 1;
          animation: drift-bg 38s ease-in-out infinite alternate;
          transform: translateZ(0) scale(1.15);
          will-change: transform, opacity, filter;
        }

        /* softer vignette so smoke stays visible */
        .vignette {
          background:
            radial-gradient(120% 80% at 50% -20%, rgba(255,255,255,0.05), transparent 60%),
            radial-gradient(120% 90% at 50% 120%, rgba(0,0,0,0.45), transparent 55%);
        }

        @keyframes drift-bg {
          0%   { transform: translateZ(0) scale(1.15) translate(0,0); opacity: 0.95; }
          50%  { transform: translateZ(0) scale(1.22) translate(-40px,-28px); opacity: 1; }
          100% { transform: translateZ(0) scale(1.15) translate(0,0); opacity: 0.95; }
        }
      `}</style>
    </section>
  );
}

function Draggable({ src, i }: { src: string; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const start = useRef<{ x: number; y: number; ox: number; oy: number } | null>(null);

  const onDown = (e: React.PointerEvent) => {
    const el = ref.current!;
    el.setPointerCapture(e.pointerId);
    start.current = { x: e.clientX, y: e.clientY, ox: el.offsetLeft, oy: el.offsetTop };
  };
  const onMove = (e: React.PointerEvent) => {
    if (!start.current) return;
    const el = ref.current!;
    el.style.left = start.current.ox + (e.clientX - start.current.x) + "px";
    el.style.top = start.current.oy + (e.clientY - start.current.y) + "px";
  };
  const onUp = () => { start.current = null; };

  // arranged defaults (for shorter board)
  const base = [
    { top: "6%",  left: "6%",  rot: -6 },
    { top: "10%", left: "56%", rot: 5  },
    { top: "42%", left: "12%", rot: 10 },
    { top: "46%", left: "58%", rot: -8 },
    { top: "25%", left: "34%", rot: -2 },
    { top: "66%", left: "38%", rot: 4  },
  ][i % 6];

  return (
    <div
      ref={ref}
      onPointerDown={onDown}
      onPointerMove={onMove}
      onPointerUp={onUp}
      className="absolute w-[200px] sm:w-[230px] md:w-[260px] shadow-[0_10px_40px_rgba(0,0,0,0.35)] cursor-grab active:cursor-grabbing transition-transform hover:-translate-y-0.5"
      style={{ top: base.top, left: base.left, transform: `rotate(${base.rot}deg)` }}
    >
      <div className="bg-white/95 rounded-xl p-3">
        <div className="relative h-[280px] sm:h-[300px] rounded-lg overflow-hidden">
          <Image src={src} alt="Leozkate jewellery" fill className="object-cover" />
          <div className="absolute inset-x-0 top-0 h-14 bg-gradient-to-b from-black/10 to-transparent" />
        </div>
      </div>
    </div>
  );
}
