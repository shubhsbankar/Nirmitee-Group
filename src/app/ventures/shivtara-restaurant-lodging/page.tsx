"use client";

import { BedDouble, CalendarCheck2, Clock, MapPin, Phone, UtensilsCrossed } from "lucide-react";
import Link from "next/link";

export default function ShivtaraRestaurantAndLodgingPage() {
  return (
    <main className="min-h-[100svh] bg-midnight text-white">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-900/60 via-midnight to-purple-900/50" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(900px_360px_at_50%_0%,rgba(34,211,238,0.14),transparent_60%)]" />

        <div className="mx-auto max-w-6xl px-6 pt-28 pb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80">
            <Clock className="h-4 w-4 text-cyan-300" />
            Launching soon
          </div>

          <h1 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight">
            Shivtara{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Restaurant &amp; Lodging
            </span>
          </h1>

          <p className="mt-4 max-w-2xl text-lg text-white/75 leading-relaxed">
            A premium destination for dining and comfortable stays. Booking, room details, and full gallery are coming
            soon.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="tel:+918104247272"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 font-medium shadow-lg shadow-blue-500/30 transition hover:scale-105"
            >
              <Phone className="h-5 w-5" />
              Call Support: 8104247272
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3 font-medium text-white transition hover:bg-white hover:text-black"
            >
              <CalendarCheck2 className="h-5 w-5" />
              Enquiry
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid gap-6 md:grid-cols-3">
          <FeatureCard
            icon={UtensilsCrossed}
            title="Restaurant"
            text="Premium dining experience with curated menu and family-friendly ambience."
            badge="Coming Soon"
          />
          <FeatureCard
            icon={BedDouble}
            title="Lodging"
            text="Comfortable rooms with essential amenities for short and extended stays."
            badge="Coming Soon"
          />
          <FeatureCard
            icon={MapPin}
            title="Location & Map"
            text="Google Maps and full address details will be available on launch."
            badge="Coming Soon"
          />
        </div>
      </section>
    </main>
  );
}

function FeatureCard({
  icon: Icon,
  title,
  text,
  badge,
}: {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  text: string;
  badge?: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition hover:border-white/20">
      <div className="flex items-start justify-between gap-4">
        <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-cyan-400/20 to-purple-500/20 border border-white/10">
          <Icon className="h-6 w-6 text-cyan-200" />
        </div>
        {badge ? (
          <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/80">
            {badge}
          </span>
        ) : null}
      </div>
      <h2 className="mt-4 text-xl font-semibold">{title}</h2>
      <p className="mt-2 text-white/70 leading-relaxed">{text}</p>
    </div>
  );
}

