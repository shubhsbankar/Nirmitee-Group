// src/app/ventures/traders/WhyUs.tsx
"use client";

import { Truck, ShieldCheck, IndianRupee } from "lucide-react";

type Reason = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  desc: string;
};

const reasons: Reason[] = [
  { icon: IndianRupee,  title: "Competitive Prices", desc: "Best wholesale rates in the market with volume discounts" },
  { icon: Truck,        title: "Reliable Delivery",  desc: "On-time delivery with our own transportation fleet" },
  { icon: ShieldCheck,  title: "Quality Guarantee",  desc: "100% genuine products with quality certification" },
];

export default function WhyUs() {
  return (
    <section
      id="why-us"
      className="relative py-24 md:py-36 bg-[#0A1230]"   // exact dark blue + taller section
    >
      {/* soft top-to-bottom darkening like the screenshot */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#071750] via-[#0A1230] to-[#0B0F26]/90" />

      <div className="container relative mx-auto px-6">
        <h2 className="text-center text-3xl md:text-4xl font-extrabold">
          Why Choose Nirmittee Traders?
        </h2>

        <div className="mt-14 grid gap-y-14 gap-x-10 md:grid-cols-3">
          {reasons.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="text-center">
              {/* icon */}
              <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl
                              bg-white/5 ring-1 ring-white/10">
                <Icon className="h-7 w-7 text-white/80" aria-hidden="true" />
              </div>

              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-gray-300 max-w-sm mx-auto">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
