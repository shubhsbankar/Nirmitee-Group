import SEO from "@/components/SEO";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import ServicesSection from "./ServicesSection";
import TestimonialsSection from "./TestimonialsSection";
import WhyChooseSection from "./WhyChooseSection";
import ContactSection from "./ContactSection";


export default function NirmitteeDevelopersPage() {
  const pageUrl = "https://nirmiteegroup.com/ventures/developers";
  const heroImg = "https://nirmiteegroup.com/images/nirmittee-developers-banner.jpg";

  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Nirmittee Developers",
    url: pageUrl,
    logo: "https://nirmiteegroup.com/logo.png",
    description:
      "Premium real estate projects in Yavatmal, Maharashtra since 2015. Residential and commercial developments with transparent processes and on-time delivery.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Yavatmal",
      addressRegion: "MH",
      postalCode: "445001",
      addressCountry: "IN",
    },
    sameAs: [
      "https://www.facebook.com/yourpage",
      "https://www.instagram.com/yourpage",
    ],
  };

  return (
    <>
      <SEO
        title="Nirmittee Developers | Premium Real Estate in Yavatmal"
        description="Nirmittee Developers – Building dreams into reality with premium real estate projects in Yavatmal since 2015. Explore residential, commercial, and quality construction services."
        url={pageUrl}
        image={heroImg}
        structuredData={schema}
      />
      <main className="min-h-screen bg-midnight text-white">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <TestimonialsSection />
        <WhyChooseSection />
        <ContactSection />
      </main>
    </>
  );
}
