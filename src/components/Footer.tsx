"use client";

import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin as LinkedIn,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative text-white">
      <div className="bg-[#0b0f39]">
        {/* subtle animated glow */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1300px_650px_at_50%_-220px,rgba(124,58,237,0.18),transparent_70%)] animate-pulse" />
        
        <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-20">
          {/* top row */}
          <div className="mb-14 flex items-center justify-between">
            <a href="/" className="flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[linear-gradient(135deg,#7C3AED_0%,#EC4899_60%,#22D3EE_100%)] shadow-lg shadow-purple-900/30">
                <span className="text-2xl font-extrabold">N</span>
              </div>
              <div>
                <p className="text-2xl font-bold leading-tight">Nirmitee</p>
                <p className="text-sm text-white/75 leading-none">Group</p>
              </div>
            </a>

            <a
              href="#contact"
              className="hidden md:inline-flex items-center rounded-xl bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-500 px-6 py-3 text-base font-medium shadow-lg shadow-indigo-900/30 transition hover:brightness-110"
            >
              Get in Touch
            </a>
          </div>

          {/* main grid */}
          <div className="grid grid-cols-1 gap-14 md:grid-cols-4">
            {/* col 1 */}
            <div className="max-w-md">
              <p className="text-base leading-relaxed text-white/85">
                Building futures and empowering lives through strategic business
                ventures across multiple industries since 2015.
              </p>
              <div className="mt-6 flex items-center gap-4">
                {[Facebook, Twitter, Instagram, LinkedIn].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="rounded-xl border border-white/10 p-3 text-white/85 transition hover:text-white hover:border-white/20"
                  >
                    <Icon className="h-6 w-6" />
                  </a>
                ))}
              </div>
            </div>

            {/* col 2 */}
            <div>
              <h4 className="mb-5 text-xl font-semibold bg-gradient-to-r from-[#A78BFA] via-[#60A5FA] to-[#22D3EE] bg-clip-text text-transparent">
                Our Ventures
              </h4>
              <ul className="space-y-3 text-base text-white/85 leading-relaxed">
                <li><a href="#" className="hover:text-white">Nirmitee Developers</a></li>
                <li><a href="#" className="hover:text-white">Nirmitee Traders</a></li>
                <li><a href="#" className="hover:text-white">Nirmitee Tours & Travels</a></li>
                <li><a href="#" className="hover:text-white">Vrindavan Restaurant</a></li>
                <li><a href="#" className="hover:text-white">Vrindavan Lawn</a></li>
                <li><a href="#" className="hover:text-white">leozkate-jewellery</a></li>
                <li><a href="#" className="hover:text-white">Gulmohar Hotel</a></li>
              </ul>
            </div>

            {/* col 3 */}
            <div>
              <h4 className="mb-5 text-xl font-semibold bg-gradient-to-r from-[#A78BFA] via-[#60A5FA] to-[#22D3EE] bg-clip-text text-transparent">
                Quick Links
              </h4>
              <ul className="space-y-3 text-base text-white/85 leading-relaxed">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Our Ventures</a></li>
                <li><a href="#" className="hover:text-white">Gallery</a></li>
                <li><a href="#" className="hover:text-white">Media & News</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>

            {/* col 4 */}
            <div>
              <h4 className="mb-5 text-xl font-semibold bg-gradient-to-r from-[#A78BFA] via-[#60A5FA] to-[#22D3EE] bg-clip-text text-transparent">
                Contact Info
              </h4>
              <ul className="space-y-4 text-base text-white/85 leading-relaxed">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-1 h-5 w-5 shrink-0" />
                  <span>Mumbai, Maharashtra, India</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 shrink-0" />
                  <a href="tel:+919876543210" className="hover:text-white">
                    +91 98765 43210
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 shrink-0" />
                  <a href="mailto:info@nirmiteegroup.com" className="hover:text-white">
                    info@nirmiteegroup.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* bottom bar */}
          <div className="mt-16 border-t border-white/10 pt-8">
            <div className="flex flex-col items-center justify-between gap-4 text-sm text-white/70 md:flex-row">
              <p>© {year} Nirmitee Group. All rights reserved.</p>
              <div className="flex items-center gap-6">
                <a href="#" className="hover:text-white">Privacy Policy</a>
                <a href="#" className="hover:text-white">Terms of Service</a>
                <a href="#" className="hover:text-white">Sitemap</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
