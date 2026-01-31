"use client";

import Image from "next/image";

type Card = {
  src: string;
  caption?: string;
  rotate?: string;
  offset?: string;
  z?: string;
};

const cards: Card[] = [
  {
    src: "/images/tours-and-travels/collage/1.jpeg",
    caption: "kashmir",
    rotate: "-rotate-6",
    offset: "md:-translate-y-2",
    z: "z-20",
  },
  {
    src: "/images/tours-and-travels/collage/2.jpeg",
    caption: "Dwarkadhish Temple",
    rotate: "rotate-4",
    offset: "md:translate-y-6",
    z: "z-30",
  },
  {
    src: "/images/tours-and-travels/collage/3.jpeg",
    caption: "Paris",
    rotate: "-rotate-2",
    offset: "md:-translate-y-4",
    z: "z-10",
  },
];

export default function CollageGallery() {
  return (
    <section className="relative overflow-hidden">
      {/* === Colorful Smoky Background (animated) === */}
      <div className="absolute inset-0 -z-10">
        {/* gradient base */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-indigo-900 to-sky-900 opacity-90" />
        {/* subtle vignette to focus content */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_60%,rgba(0,0,0,0.35))]" />

        {/* blurry smoky blobs (animated; motion-safe respects reduced-motion) */}
        <div className="absolute top-0 left-0 w-[40rem] h-[40rem] bg-pink-500/30 rounded-full blur-[160px] motion-safe:animate-float-slow" />
        <div className="absolute bottom-0 right-0 w-[35rem] h-[35rem] bg-cyan-400/30 rounded-full blur-[150px] motion-safe:animate-float-slower" />
        <div className="absolute top-1/3 right-1/4 w-[30rem] h-[30rem] bg-fuchsia-500/25 rounded-full blur-[140px] motion-safe:animate-float-slow" />
        <div className="absolute bottom-1/4 left-1/3 w-[28rem] h-[28rem] bg-emerald-400/20 rounded-full blur-[140px] motion-safe:animate-float-slower" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        {/* header */}
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Best Price
          </h2>

          {/* blob badge (decorative) */}
          <div className="hidden md:block relative" aria-hidden="true">
            <svg width="160" height="110" viewBox="0 0 200 140" className="drop-shadow-lg">
              <path
                d="M60 15c20-12 48-16 72 0s44 52 28 80-62 34-92 26-50-26-52-48 24-47 44-58z"
                fill="#38BDF8"
                opacity="0.65"
              />
            </svg>
            <span className="absolute inset-0 flex items-center justify-center font-extrabold text-lg text-white">
              BEST&nbsp;PRICE
            </span>
          </div>
        </div>

        {/* collage */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 place-items-center">
          {cards.map((c, i) => (
            <figure
              key={i}
              className={[
                "relative w-full max-w-sm",
                "transition-transform duration-300 hover:-translate-y-1 hover:rotate-1",
                c.rotate,
                c.offset,
                c.z,
              ].join(" ")}
              data-aos="zoom-in-up"
              data-aos-delay={i * 80}
            >
              {/* polaroid frame */}
              <div className="relative rounded-xl bg-white shadow-[0_20px_40px_-10px_rgba(0,0,0,0.6)] border border-black/5">
                <div className="p-2">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-md">
                    <Image
                      src={c.src}
                      alt={c.caption ?? "Travel photo"}
                      fill
                      className="object-cover"
                      priority={i === 0}
                    />
                  </div>
                  {/* thick bottom band (like the reference) */}
                  <div className="mt-2 h-6 w-full rounded-sm bg-[#0B1221]" />
                </div>

                {/* soft base shadow */}
                <div
                  className="absolute -bottom-4 left-4 right-4 h-4 rounded-md bg-black/20 blur-md"
                  aria-hidden="true"
                />
              </div>

              {/* caption chip */}
              <figcaption className="absolute -bottom-2 right-6 inline-flex items-center gap-2 text-xs font-semibold px-2 py-1 rounded-full bg-white/90 text-[#0B1221] border border-black/5 shadow">
                <span aria-hidden="true">📍</span>
                {c.caption ?? "Destination"}
              </figcaption>
            </figure>
          ))}
        </div>

        
      </div>
    </section>
  );
}
