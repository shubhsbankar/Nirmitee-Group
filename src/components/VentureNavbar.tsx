"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ventures = [
  { name: "Nirmittee Developers", path: "/ventures/developers" },
  { name: "Nirmittee Traders", path: "/ventures/traders" },
  { name: "Vrindavan Restaurant", path: "/ventures/vrindavan-restaurant" },
  { name: "Vrindavan Lawn", path: "/ventures/vrindavan-lawn" },
  { name: "Leozkate Jewellery", path: "/ventures/leozkate-jewellery" },
  { name: "Nirmittee Tours & Travels", path: "/ventures/tours-and-travels" },
  { name: "Gulmohar Hotel", path: "/ventures/gulmohar-hotel" },
];

// Per-venture branding
const BRAND: Record<string, {
  label: string;
  logo: string;
  home: string;
  ctaText?: string;
  ctaHref?: string;
}> = {
  "/ventures/developers": {
    label: "Nirmittee Developers",
    logo: "/images/logos/developers.png",
    home: "/ventures/developers",
    ctaText: "Get in Touch",
    ctaHref: "/contact",
  },
  "/ventures/traders": {
    label: "Nirmittee Traders",
    logo: "/images/logos/traders.png",
    home: "/ventures/traders",
    ctaText: "Enquire",
    ctaHref: "/ventures/traders#contact",
  },
  "/ventures/vrindavan-restaurant": {
    label: "Vrindavan Restaurant",
    logo: "/images/logos/vrindavan-restaurant.png",
    home: "/ventures/vrindavan-restaurant",
    ctaText: "Book Table",
    ctaHref: "/ventures/vrindavan-restaurant#book",
  },
  "/ventures/vrindavan-lawn": {
    label: "Vrindavan Lawn",
    logo: "/images/logos/vrindavan-lawn.png",
    home: "/ventures/vrindavan-lawn",
    ctaText: "Enquire",
    ctaHref: "/ventures/vrindavan-lawn#contact",
  },
  "/ventures/leozkate-jewellery": {
    label: "Leozkate Jewellery",
    logo: "/images/logos/leozkate.png",
    home: "/ventures/leozkate-jewellery",
    ctaText: "View Collection",
    ctaHref: "/ventures/leozkate-jewellery#collections",
  },
  "/ventures/tours-and-travels": {
    label: "Nirmittee Tours & Travels",
    logo: "/images/logos/tours-travels.png",
    home: "/ventures/tours-and-travels",
    ctaText: "Plan a Trip",
    ctaHref: "/ventures/tours-and-travels#contact",
  },
  "/ventures/gulmohar-hotel": {
    label: "Gulmohar Hotel",
    logo: "/images/logos/gulmohar.png",
    home: "/ventures/gulmohar-hotel",
    ctaText: "Notify Me",
    ctaHref: "/ventures/gulmohar-hotel",
  },
};

const GROUP_BRAND = {
  label: "Nirmittee Group",
  logo: "/images/logos/group.png",
  home: "/",
  ctaText: "Get in Touch",
  ctaHref: "/contact",
};

type TimeoutId = ReturnType<typeof setTimeout>;

export default function VentureNavbar() {
  const pathname = usePathname() || "/";
  const [isOpen, setIsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef<TimeoutId | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const venturesActive = pathname.startsWith("/ventures");

  const key = Object.keys(BRAND).find((k) => pathname.startsWith(k));
  const currentBrand = key ? BRAND[key] : GROUP_BRAND;

  useEffect(() => {
    return () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
      closeTimer.current = null;
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setIsOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const isActive = (href: string) => pathname === href;

  const openMenu = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setIsOpen(true);
  };

  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setIsOpen(false), 150);
  };

  const navLink = (href: string, forceActive?: boolean) =>
    [
      "relative inline-flex items-center font-semibold rounded",
      "focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60",
      "transition text-base lg:text-lg hover:text-cyan-300",
      "after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full",
      "after:scale-x-0 after:origin-left after:transition-transform after:duration-300",
      "after:bg-gradient-to-r after:from-[#60A5FA] after:via-[#A78BFA] after:to-[#22D3EE]",
      forceActive || isActive(href)
        ? "text-cyan-300 after:scale-x-100"
        : "hover:after:scale-x-100",
    ].join(" ");

  return (
    // absolute + centered; width limited, lives only inside hero wrapper
    <nav className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] max-w-7xl z-50
                    text-white bg-transparent backdrop-blur-sm border border-white/10
                    rounded-xl px-0 py-0">
      <div className="flex items-center justify-between">
        {/* Brand */}
        <Link
          href={currentBrand.home}
          className="flex items-center gap-2 font-bold text-lg sm:text-xl"
          aria-label={currentBrand.label}
        >
          <Image
            src={currentBrand.logo}
            alt={`${currentBrand.label} Logo`}
            width={36}
            height={36}
            className="rounded-full"
          />
          <span className="whitespace-nowrap">
            {currentBrand.label.split(" ")[0]}{" "}
            <span className="text-gray-300 font-light">
              {currentBrand.label.split(" ").slice(1).join(" ")}
            </span>
          </span>
        </Link>

        {/* Desktop menu */}
        <ul className="hidden md:flex items-center gap-8 lg:gap-10">
          <li>
            <Link href="/" className={navLink("/")} aria-current={isActive("/") ? "page" : undefined}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className={navLink("/about")} aria-current={isActive("/about") ? "page" : undefined}>
              About
            </Link>
          </li>

          {/* Ventures dropdown */}
          <li
            className="relative"
            onMouseEnter={openMenu}
            onMouseLeave={scheduleClose}
            onFocus={openMenu}
            onBlur={(e) => {
              if (!menuRef.current?.contains(e.relatedTarget as Node)) scheduleClose();
            }}
          >
            <button
              type="button"
              className={navLink("#", venturesActive)}
              aria-haspopup="menu"
              aria-expanded={isOpen}
              aria-controls="ventures-menu"
              onClick={() => setIsOpen((v) => !v)}
            >
              <span className="pr-1">Our Ventures</span>
              <ChevronDown size={18} />
            </button>

            <div
              id="ventures-menu"
              ref={menuRef}
              className={[
                "absolute top-full left-0 mt-2 w-72 rounded-lg overflow-hidden transition-all duration-200 z-50",
                isOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none",
              ].join(" ")}
              role="menu"
            >
              <div className="bg-[#0B1221]/90 backdrop-blur-md border border-white/10 shadow-xl">
                {ventures.map((v) => {
                  const active = pathname === v.path;
                  return (
                    <Link
                      key={v.name}
                      href={v.path}
                      role="menuitem"
                      aria-current={active ? "page" : undefined}
                      className={["block px-5 py-3 text-base transition", active ? "bg-white/10 text-cyan-300" : "hover:bg-white/10"].join(" ")}
                      onClick={() => setIsOpen(false)}
                    >
                      {v.name}
                    </Link>
                  );
                })}
              </div>
            </div>
          </li>

          <li>
            <Link href="/careers" className={navLink("/careers")} aria-current={isActive("/careers") ? "page" : undefined}>
              Careers
            </Link>
          </li>
          <li>
            <Link href="/contact" className={navLink("/contact")} aria-current={isActive("/contact") ? "page" : undefined}>
              Contact
            </Link>
          </li>
        </ul>

        {/* CTA (desktop) */}
        {currentBrand.ctaText && currentBrand.ctaHref && (
          <Link
            href={currentBrand.ctaHref}
            className="hidden md:block px-4 lg:px-5 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600
                       text-white font-medium shadow-lg shadow-blue-500/30 hover:scale-105 transition-transform text-sm lg:text-base whitespace-nowrap"
          >
            {currentBrand.ctaText}
          </Link>
        )}

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileOpen((s) => !s)}
          aria-label="Toggle navigation"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0B1221]/95 backdrop-blur-md border-t border-white/10 px-4 py-4 space-y-3 mt-3 rounded-xl">
          <Link href="/" className="block py-2 hover:text-cyan-300" onClick={() => setMobileOpen(false)}>
            Home
          </Link>
          <Link href="/about" className="block py-2 hover:text-cyan-300" onClick={() => setMobileOpen(false)}>
            About
          </Link>

          <details className="group">
            <summary className="flex items-center justify-between py-2 cursor-pointer hover:text-cyan-300">
              Our Ventures <ChevronDown size={18} />
            </summary>
            <div className="pl-4 pt-2 space-y-2">
              {ventures.map((v) => (
                <Link key={v.name} href={v.path} className="block py-1 hover:text-cyan-300" onClick={() => setMobileOpen(false)}>
                  {v.name}
                </Link>
              ))}
            </div>
          </details>

          <Link href="/careers" className="block py-2 hover:text-cyan-300" onClick={() => setMobileOpen(false)}>
            Careers
          </Link>
          <Link href="/contact" className="block py-2 hover:text-cyan-300" onClick={() => setMobileOpen(false)}>
            Contact
          </Link>

          {currentBrand.ctaText && currentBrand.ctaHref && (
            <Link
              href={currentBrand.ctaHref}
              className="block w-full mt-3 text-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium shadow-lg shadow-blue-500/30 hover:scale-105 transition-transform"
              onClick={() => setMobileOpen(false)}
            >
              {currentBrand.ctaText}
            </Link>
          )}
        </div>
      )}
    </nav>
  );
}
