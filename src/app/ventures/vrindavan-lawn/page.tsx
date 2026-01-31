import SEO from "@/components/SEO";
import Hero from "./Hero";
import About from "./About";
import Services from "./Services";
import Gallery from "./Gallery";
import Testimonials from "./Testimonials";
import ContactMap from "./ContactMap";

export default function VrindavanLawnPage() {
  return (
    <>
      <SEO
        title="Vrindavan Lawn | Premium Wedding & Event Venue in Yavatmal"
        description="Vrindavan Lawn – A premium wedding and event lawn in Yavatmal offering elegant ambience, spacious capacity, modern amenities, and exceptional services for weddings, receptions, and corporate events."
        url="https://nirmiteegroup.com/ventures/vrindavan-lawn"
        image="https://nirmiteegroup.com/images/vrindavan-lawn-banner.jpg"
      />

      <Hero />
      <About />
      <Services />
      <Gallery />
      <Testimonials />
      <ContactMap />
    </>
  );
}
