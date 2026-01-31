// src/app/ventures/vrindavan-restaurant/Gallery.tsx
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const photos = [
  "/images/vrindavan/gallery1.jpg",
  "/images/vrindavan/gallery2.jpg",
  "/images/vrindavan/gallery3.jpg",
  "/images/vrindavan/gallery4.jpg",
  "/images/vrindavan/gallery5.jpg",
  "/images/vrindavan/gallery6.jpg",
];

export default function Gallery() {
  const [open, setOpen] = useState<string | null>(null);

  // close on ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section
      className="container mx-auto px-6 pt-24 pb-16 rounded-xl"
      style={{
        background: "linear-gradient(180deg, #0B1221 0%, #131B36 100%)",
      }}
    >
      {/* Heading */}
      <h2 className="text-5xl font-extrabold text-center" data-aos="fade-up">
        <span className="bg-gradient-to-r from-sky-700 via-violet-700 to-purple-700 bg-clip-text text-transparent">
          Gallery
        </span>
      </h2>
      <p
        className="text-center text-gray-300 mt-3"
        data-aos="fade-up"
        data-aos-delay="80"
      >
        A glimpse of our ambiance and dishes
      </p>

      {/* Grid (reduced card size + uniform aspect) */}
      <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-5">
        {photos.map((src, i) => (
          <button
            key={src}
            onClick={() => setOpen(src)}
            data-aos="zoom-in-up"
            data-aos-delay={i * 70}
            className={[
              "group relative overflow-hidden rounded-2xl",
              "bg-white/[.03] border border-white/10",
              // gradient ring on hover
              "hover:border-transparent transition-all duration-300",
              "before:absolute before:inset-[-2px] before:rounded-[18px] before:opacity-0",
              "before:bg-[conic-gradient(var(--tw-gradient-stops))] before:from-sky-400 before:via-violet-500 before:to-purple-500",
              "hover:before:opacity-100 before:transition-opacity before:duration-300",
              "shadow-[0_10px_30px_rgba(0,0,0,0.25)] hover:shadow-[0_18px_50px_rgba(0,0,0,0.35)]",
            ].join(" ")}
          >
            {/* inner wrapper to mask the gradient border */}
            <div className="relative m-[2px] rounded-[14px] overflow-hidden">
              <div className="relative w-full aspect-[4/3]"> {/* smaller, consistent size */}
                <Image
                  src={src}
                  alt="Vrindavan Restaurant gallery"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04] group-hover:rotate-[0.2deg]"
                  sizes="(min-width: 768px) 33vw, 50vw"
                />
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors" />
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setOpen(null)}
        >
          <Image
            src={open}
            alt="Preview"
            width={1400}
            height={900}
            className="max-h-[80vh] w-auto rounded-2xl border border-white/15 shadow-2xl"
          />
        </div>
      )}
    </section>
  );
}
