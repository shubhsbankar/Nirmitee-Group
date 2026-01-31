import type { Metadata } from "next";
import Script from "next/script";
import AnimateOnScroll from "./AnimateOnScroll";

import Hero from "./Hero";
import About from "./About";
import Services from "./Services";
import Destinations from "./Destinations";
import Packages from "./Packages";
import Gallery from "./Gallery";
import Testimonials from "./Testimonials";
import ContactMap from "./ContactMap";

const pageUrl = "https://nirmiteegroup.com/ventures/tours-and-travels";
const ogImage =
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80";

export const metadata: Metadata = {
  title: "Nirmittee Tours & Travels | Holiday Packages & Ticketing in Yavatmal",
  description:
    "Domestic & international tours, custom itineraries, flight/train/bus ticketing, hotel bookings, visa assistance, and corporate travel in Yavatmal.",
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "website",
    url: pageUrl,
    title: "Nirmittee Tours & Travels",
    description:
      "Holiday packages, ticketing & hotel bookings with personalized service.",
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nirmittee Tours & Travels",
    description:
      "Holiday packages, ticketing & hotel bookings with personalized service.",
    images: [ogImage],
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: "Nirmittee Tours & Travels",
    url: pageUrl,
    image: ogImage,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Yavatmal",
      addressRegion: "MH",
      postalCode: "445001",
      addressCountry: "IN",
    },
    telephone: "+91-9876543213",
    areaServed: "IN",
  };

  return (
    <main className="min-h-screen bg-midnight text-white">
      <Script
        id="ntt-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AnimateOnScroll>
        <Hero />
        <About />
        <Services />
        <Destinations />
        <Packages />
        <Gallery />
        <Testimonials />
        <ContactMap />
      </AnimateOnScroll>
    </main>
  );
}
