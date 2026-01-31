// src/app/ventures/vrindavan-restaurant/page.tsx
import type { Metadata } from "next";
import Script from "next/script";
import AnimateOnScroll from "./AnimateOnScroll";

import Hero from "@/app/ventures/vrindavan-restaurant/Hero";
import About from "@/app/ventures/vrindavan-restaurant/About";
import Specialties from "./Specialties";
import MenuHighlights from "@/app/ventures/vrindavan-restaurant/MenuHighlights";
import Gallery from "@/app/ventures/vrindavan-restaurant/Gallery";
import Testimonials from "@/app/ventures/vrindavan-restaurant/Testimonials";
import HoursBooking from "@/app/ventures/vrindavan-restaurant/HoursBooking";
import ContactMap from "@/app/ventures/vrindavan-restaurant/ContactMap";



const pageUrl = "https://nirmiteegroup.com/ventures/vrindavan-restaurant";
const ogImage = "https://nirmiteegroup.com/images/vrindavan/og-banner.jpg";

export const metadata: Metadata = {
  title: "Vrindavan Restaurant | Pure Vegetarian Dining in Yavatmal",
  description:
    "Vrindavan Restaurant — authentic vegetarian cuisine, cozy ambiance, and family-friendly service in Yavatmal.",
  alternates: { canonical: pageUrl },
  openGraph: { type: "website", url: pageUrl, title: "Vrindavan Restaurant | Pure Vegetarian Dining in Yavatmal", description: "Authentic vegetarian cuisine with warm ambiance.", images: [ogImage] },
  twitter: { card: "summary_large_image", title: "Vrindavan Restaurant | Pure Vegetarian Dining in Yavatmal", description: "Authentic vegetarian cuisine with warm ambiance.", images: [ogImage] },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "Vrindavan Restaurant",
    url: pageUrl,
    image: ogImage,
    servesCuisine: ["Indian", "Vegetarian"],
    priceRange: "₹₹",
    telephone: "+91-9876543211",
    address: { "@type": "PostalAddress", streetAddress: "Main Road", addressLocality: "Yavatmal", addressRegion: "MH", postalCode: "445001", addressCountry: "IN" }
  };

  return (
    <main className="min-h-screen bg-midnight text-white">
      <Script id="vrindavan-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <AnimateOnScroll>
        <Hero />
        <About />
        <Specialties />
        <MenuHighlights />
        <Gallery />
        <Testimonials />
        <HoursBooking />
        <ContactMap />
      </AnimateOnScroll>
    </main>
  );
}
