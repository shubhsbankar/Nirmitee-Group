// app/about/page.tsx
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutSection from "@/components/About";

export const metadata = {
  title: "About | Nirmittee Group",
  description:
    "Learn more about Nirmittee Group, our mission, vision, and achievements.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-about text-white pt-20">
        <AboutSection />
      </main>
      <Footer />
    </>
  );
}
