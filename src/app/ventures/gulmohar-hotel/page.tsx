"use client";

import { Clock } from "lucide-react";

export default function GulmoharHotel() {
  return (
    <section className="relative min-h-[80vh] flex flex-col items-center justify-center text-center px-6">
      {/* background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-cyan-900 via-midnight to-indigo-900" />

      {/* content */}
      <div className="max-w-2xl mx-auto">
        <Clock className="w-16 h-16 text-cyan-400 mx-auto mb-6 animate-pulse" />
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
          Gulmohar Hotel
        </h1>
        <p className="text-gray-300 text-lg">
          This page is under construction. Stay tuned for updates!
        </p>
      </div>
    </section>
  );
}
