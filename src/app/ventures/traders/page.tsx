/// <reference types="react" />
import Script from "next/script";
import type { Metadata } from "next";

// ✅ correct imports (same folder, exact filenames)
import HeroSection from "./HeroSection";
import About from "./About";
import Services from "./Services";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import WhyUs from "./WhyUs";

// PUBLIC URLs (swap to your real ones)
const pageUrl = "https://nirmiteegroup.com/ventures/traders";
const ogImage = "https://nirmiteegroup.com/images/ventures/traders/og.jpg";

export const metadata: Metadata = {
  title: "Nirmittee Traders | Wholesale & Commodity Trading in Yavatmal",
  description:
    "Trusted partner for bulk supply, FMCG distribution, and commodity trading in Yavatmal & Maharashtra. Competitive pricing, reliable delivery, and certified quality.",
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "website",
    url: pageUrl,
    title: "Nirmittee Traders | Wholesale & Commodity Trading in Yavatmal",
    description:
      "B2B wholesale, commodity sourcing, FMCG distribution, logistics and warehousing.",
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nirmittee Traders | Wholesale & Commodity Trading in Yavatmal",
    description:
      "Your trusted partner for bulk supply and wholesale trading across Maharashtra.",
    images: [ogImage],
  },
};

export default function TradersPage() {
  // JSON-LD for rich results
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": pageUrl,
    name: "Nirmittee Traders",
    url: pageUrl,
    image: ogImage,
    description:
      "Wholesale & commodity trading company serving Yavatmal and Maharashtra. Bulk supply, FMCG distribution, logistics, and warehousing.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Yavatmal",
      addressRegion: "MH",
      postalCode: "445001",
      addressCountry: "IN",
    },
    areaServed: ["Yavatmal", "Vidarbha", "Maharashtra"],
    telephone: "+91-9876543212",
  };

  return (
    <main className="min-h-screen bg-midnight text-white">
      <Script id="traders-jsonld" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <HeroSection />
      <About />
      <Services />
      <Testimonials />
      <WhyUs />
      <Contact />
    </main>
  );
}
