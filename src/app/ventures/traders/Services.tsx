// src/app/ventures/traders/Services.tsx
"use client";

import { Package, Truck, ShieldCheck, Users } from "lucide-react";

type Service = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  desc: string;
};

const services: Service[] = [
  { icon: Package, title: "Bulk Supply", desc: "Large quantity supply with competitive wholesale rates" },
  { icon: Truck, title: "Fast Delivery", desc: "Reliable delivery network across Maharashtra" },
  { icon: ShieldCheck, title: "Quality Assurance", desc: "Certified products with quality guarantee" },
  { icon: Users, title: "Business Support", desc: "Dedicated account managers for business clients" },
];


export default function Services() {
  return (
    <section className="container mx-auto px-6 py-20" id="services">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold">Our Services</h2>
        <p className="mt-2 text-gray-300">
          Comprehensive wholesale trading solutions for your business needs
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {services.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="group relative rounded-2xl bg-white/5 border border-white/10 p-6 transition
                       hover:bg-white/[0.07] hover:shadow-xl hover:shadow-black/10"
          >
            {/* gradient ring like screenshot */}
            <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10 group-hover:ring-white/20" />
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl
                              bg-white/5 ring-1 ring-white/10">
                <Icon className="h-6 w-6 text-white/80" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-gray-300">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
