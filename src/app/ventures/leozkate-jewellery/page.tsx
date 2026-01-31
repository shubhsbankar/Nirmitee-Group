// src/app/ventures/leozkate-jewellery/page.tsx
import type { Metadata } from "next";
import Script from "next/script";

import AnimateOnScroll from "./AnimateOnScroll";
import Hero from "./Hero";
import CategoryBrowse from "./CategoryBrowse";
import BestSellers from "./BestSellers";
import DualBanner from "./DualBanner";
import TrustRow from "./TrustRow";
import Testimonials from "./Testimonials";
import Gallery from "./Gallery";
import ContactMap from "./ContactMap";

const pageUrl = "https://nirmiteegroup.com/ventures/leozkate-jewellery";

// Temporary Unsplash image for OpenGraph
const ogImage =
  "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80";

export const metadata: Metadata = {
  title: "Leozkate Jewellery | Gold & Diamond Jewellery in Yavatmal",
  description:
    "Discover bridal, engagement and everyday jewellery at Leozkate — handcrafted, hallmarked, and ethically sourced.",
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "website",
    url: pageUrl,
    title: "Leozkate Jewellery",
    description: "Bridal • Engagement • Daily wear",
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Leozkate Jewellery",
    description: "Gold & diamond jewellery in Yavatmal",
    images: [ogImage],
  },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "JewelryStore",
  name: "Leozkate Jewellery",
  url: pageUrl,
  image: ogImage,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Yavatmal",
    addressRegion: "MH",
    postalCode: "445001",
    addressCountry: "IN",
  },
  telephone: "+91-9876543212",
};

// Simple breadcrumbs for the page
const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://nirmiteegroup.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Ventures",
      item: "https://nirmiteegroup.com/ventures",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Leozkate Jewellery",
      item: pageUrl,
    },
  ],
};

export default function Page() {
  return (
    <main className="bg-midnight text-white">
      <Script
        id="leozkate-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />
      <Script
        id="leozkate-breadcrumbs"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <AnimateOnScroll>
        <Hero />
        {/* CategoryBrowse now contains the new SearchPanel internally */}
        <CategoryBrowse />
        <BestSellers />
        <DualBanner />
        <TrustRow />
        <Testimonials />
        <Gallery />
        <ContactMap />
      </AnimateOnScroll>
    </main>
  );
}
