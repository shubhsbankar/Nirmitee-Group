"use client";

import { useEffect, useRef, useState } from "react";

type Cat = { title: string; img: string };

type Props = {
  value: string;
  onChange: (v: string) => void;
  popular: string[];
  tiles: Cat[];
  onTileClick?: (title: string) => void;
};

export default function SearchPanel({
  value,
  onChange,
  popular,
  tiles,
  onTileClick,
}: Props) {
  const [focused, setFocused] = useState(false);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  // Close the panel when clicking outside
  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!wrapperRef.current) return;
      if (!wrapperRef.current.contains(e.target as Node)) {
        setFocused(false);
      }
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  const showPanel = focused || value.trim().length > 0;

  return (
    <div
      ref={wrapperRef}
      className="relative mb-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-[0_10px_30px_rgba(0,0,0,.25)]"
    >
      {/* Search bar */}
      <div className="flex items-center gap-2 p-3 sm:p-4">
        <SearchIcon className="h-5 w-5 text-white/70 shrink-0" />
        <input
          value={value}
          onFocus={() => setFocused(true)}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search for Gold Jewellery, Diamond Jewellery and more…"
          className="w-full bg-transparent text-white/90 placeholder:text-white/50 outline-none"
          aria-label="Search products"
        />
        {value && (
          <button
            onClick={() => onChange("")}
            className="rounded-full p-1.5 text-white/70 hover:bg-white/10"
            aria-label="Clear search"
          >
            <CloseIcon className="h-4 w-4" />
          </button>
        )}
        <button
          className="hidden sm:inline-flex rounded-full p-2 text-white/80 hover:bg-white/10"
          aria-label="Voice search (coming soon)"
          title="Voice search (coming soon)"
        >
          <MicIcon className="h-5 w-5" />
        </button>
        <button
          className="hidden sm:inline-flex rounded-full p-2 text-white/80 hover:bg-white/10"
          aria-label="Image search (coming soon)"
          title="Image search (coming soon)"
        >
          <CameraIcon className="h-5 w-5" />
        </button>
      </div>

      {/* Divider */}
      <div className="h-px bg-white/10" />

      {/* Popular searches + category tiles */}
      <div className="p-3 sm:p-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs text-white/60 mr-1">Popular:</span>
          {popular.map((p) => (
            <button
              key={p}
              onClick={() => {
                onChange(p);
                setFocused(true);
              }}
              className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs text-white/80 hover:bg-white/10"
            >
              {p}
            </button>
          ))}
        </div>

        {/* Category tiles (square) */}
        {showPanel && (
          <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {tiles.map((c, i) => (
              <button
                key={c.title}
                onClick={() => {
                  onChange(c.title);
                  onTileClick?.(c.title);
                }}
                data-aos="zoom-in"
                data-aos-delay={i * 60}
                className="group text-center rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition p-3 flex flex-col"
              >
                {/* Square container */}
                <div className="aspect-square w-full rounded-lg overflow-hidden">
                  <img
                    src={c.img}
                    alt={c.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.05]"
                  />
                </div>
                <span className="mt-2 block text-xs sm:text-sm text-white/90">
                  {c.title}
                </span>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

/* -------- tiny inline icons (kept local) -------- */
function SearchIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path
        fill="currentColor"
        d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79L20 21.5 21.5 20 15.5 14Zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14Z"
      />
    </svg>
  );
}
function CloseIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path
        fill="currentColor"
        d="M18.3 5.71 12 12l6.3 6.29-1.41 1.42L10.59 13.4 4.29 19.71 2.88 18.3 9.17 12 2.88 5.71 4.29 4.3l6.3 6.3 6.29-6.3z"
      />
    </svg>
  );
}
function MicIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path
        fill="currentColor"
        d="M12 14a3 3 0 0 0 3-3V6a3 3 0 0 0-6 0v5a3 3 0 0 0 3 3Zm5-3a5 5 0 0 1-10 0H5a7 7 0 0 0 6 6.92V21h2v-3.08A7 7 0 0 0 19 11h-2Z"
      />
    </svg>
  );
}
function CameraIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path
        fill="currentColor"
        d="M20 5h-3.2l-1.2-1.5A2 2 0 0 0 13.4 3h-2.8a2 2 0 0 0-1.6.5L7.8 5H4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Zm0 13H4V7h4.2l1.6-2h4.4l1.6 2H20v11Zm-8-1a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0-2.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"
      />
    </svg>
  );
}
