"use client";
import Image from "next/image";
import { useRef } from "react";

export default function Hero() {
  const floatRef = useRef<HTMLDivElement>(null);

  const onMouseMove = (e: React.MouseEvent) => {
    const el = floatRef.current;
    if (!el) return;
    const { left, top, width, height } = el.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 50;
    const y = (e.clientY - top - height / 2) / 50;
    el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
  };

  return (
    <section
  className="
    relative min-h-[100vh]   // full screen on small devices
    md:min-h-[92vh]        // give extra room on desktop
    flex flex-col items-center justify-center text-center text-white
    bg-midnight overflow-hidden
    pt-28 md:pt-32 pb-16
  "
>

      <Image
        src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80"
        alt="Travel landscape"
        fill
        unoptimized
        className="object-cover -z-10 opacity-50"
        priority
      />
      <div className="max-w-7xl mx-auto px-6">
        <div ref={floatRef} className="transition-transform duration-200 will-change-transform">
          <p
             className="uppercase tracking-widest font-bold italic 
                       bg-gradient-to-r from-sky-400 via-violet-400 to-cyan-300 
                       bg-clip-text text-transparent text-lg sm:text-xl md:text-2xl lg:text-3xl"
                  data-aos="fade-up"
            >
                Nirmittee Tours & Travels
          </p>

          <h1 className="mt-2 text-4xl md:text-6xl font-extrabold leading-tight" data-aos="fade-up" data-aos-delay={60}>
            Discover the World with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-violet-400 to-cyan-300">
              Confidence
            </span>
          </h1>
          <p className="mt-3 text-white/85 max-w-2xl" data-aos="fade-up" data-aos-delay={120}>
            Tailor-made holidays, quick ticketing, and reliable hotel bookings — all in one place.
          </p>
         <div
  className="mt-7 flex gap-3 justify-center"
  data-aos="fade-up"
  data-aos-delay={180}
>
  <a
    href="#packages"
    className="px-6 py-3 rounded-xl font-semibold
               bg-gradient-to-r from-blue-500 to-purple-600
               text-white shadow-lg shadow-blue-500/30
               hover:scale-105 transition-transform duration-300"
  >
    View Packages
  </a>
  <a
    href="#contact"
    className="px-6 py-3 rounded-xl font-semibold
               bg-white/10 text-white border border-white/20
               hover:bg-white/20 hover:scale-105
               transition-transform duration-300"
  >
    Plan a Trip
  </a>
</div>

        </div> 
      </div>
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
    </section>
  );
}
