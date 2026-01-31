// src/app/ventures/leozkate/Hero.tsx
"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative pt-24 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-8 items-stretch relative z-10">
        {/* Left copy */}
        <div
          className="lg:col-span-4 flex flex-col justify-center"
          data-aos="fade-right"
        >
          <h1 className="uppercase tracking-widest text-cyan-400/90 text-lg md:text-xl font-semibold">
               Leozkate Jewellery
          </h1>

          <h1 className="mt-2 text-4xl md:text-5xl font-extrabold leading-tight text-white">
            It’s all About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400">
              New Year
            </span>
          </h1>
          <p className="mt-3 text-white/70">
            Discover your iconic style. Ethically sourced, consciously crafted
            and hallmarked.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href="#bestsellers"
              className="px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:opacity-90"
            >
              Shop Now
            </a>
            <a
              href="#about"
              className="px-5 py-3 rounded-xl border border-cyan-400/40 text-cyan-300 hover:bg-cyan-400/10"
            >
              About Us
            </a>
          </div>
        </div>

        {/* Right: 3 smoky image columns */}
        <div
          className="lg:col-span-8 grid grid-cols-3 gap-4"
          data-aos="fade-left"
        >
          {[
            "/images/leozkate/hero-col-1.jpeg",
            "/images/leozkate/hero-col-2.jpeg",
            "/images/leozkate/hero-col-3.jpeg",
          ].map((src, i) => (
            <div
              key={src}
              className="relative h-[420px] md:h-[520px] rounded-[18px] overflow-hidden"
            >
              <Image
                src={src}
                alt={`Leozkate hero ${i + 1}`}
                fill
                className="object-cover"
                priority={i === 0}
              />

              {/* edge smoky fade */}
              <span
                aria-hidden
                className="abs inset-y-0 left-0 w-12 bg-gradient-to-r from-cyan-600/40 to-transparent"
              />
              <span
                aria-hidden
                className="abs inset-y-0 right-0 w-12 bg-gradient-to-l from-purple-600/40 to-transparent"
              />
              <span
                aria-hidden
                className="abs inset-x-0 top-0 h-16 bg-gradient-to-b from-cyan-500/30 to-transparent"
              />
              <span
                aria-hidden
                className="abs inset-x-0 bottom-0 h-16 bg-gradient-to-t from-purple-500/30 to-transparent"
              />
            </div>
          ))}
        </div>
      </div>

      {/* FULL smoky background */}
      <div className="absolute inset-0 -z-10 bg-midnight">
        <div className="smoke-bg absolute inset-0" />
      </div>

      <style jsx>{`
        .abs {
          position: absolute;
          pointer-events: none;
        }

        .smoke-bg {
          background: radial-gradient(
              50% 60% at 20% 20%,
              rgba(0, 255, 255, 0.25) 0%,
              transparent 70%
            ),
            radial-gradient(
              50% 60% at 80% 25%,
              rgba(128, 0, 255, 0.25) 0%,
              transparent 70%
            ),
            radial-gradient(
              60% 50% at 40% 75%,
              rgba(0, 255, 255, 0.2) 0%,
              transparent 75%
            ),
            radial-gradient(
              55% 65% at 70% 80%,
              rgba(128, 0, 255, 0.2) 0%,
              transparent 75%
            );
          filter: blur(40px);
          animation: drift-bg 30s ease-in-out infinite;
          mix-blend-mode: screen;
        }

        @keyframes drift-bg {
          0% {
            transform: translate3d(0, 0, 0) scale(1);
          }
          50% {
            transform: translate3d(-40px, -30px, 0) scale(1.05);
          }
          100% {
            transform: translate3d(0, 0, 0) scale(1);
          }
        }
      `}</style>
    </section>
  );
}
