import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Careers | Nirmitee Group",
  description:
    "Explore career opportunities at Nirmitee Group. Join our team across real estate, hospitality, trading, and more.",
};

export default function CareersPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#0a0f1f] text-white pt-24 pb-20">
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="font-montserrat text-4xl md:text-5xl font-bold mb-6">
            Careers at <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Nirmitee Group</span>
          </h1>
          <p className="text-lg text-white/80 leading-relaxed mb-8">
            We are always interested in people who share our values—integrity, excellence, and a drive to grow with
            one of India&apos;s diversified business groups. Send us your profile and we will reach out when a role
            matches your skills.
          </p>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
            <h2 className="text-xl font-semibold mb-4">How to apply</h2>
            <p className="text-white/75 mb-6">
              Email your resume and a short note about the kind of role you are looking for to our team. We review
              applications regularly.
            </p>
            <Link
              href="/#contact"
              className="inline-flex rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 font-medium text-white shadow-lg shadow-blue-500/30 transition hover:scale-105"
            >
              Go to Contact — Let&apos;s Build Together
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
