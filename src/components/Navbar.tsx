"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ventures = [
  { name: "Vrindavan Lawn", path: "/ventures/vrindavan-lawn" },
  { name: "Leozkate Jewellery", path: "/ventures/leozkate-jewellery" }, // just the label
  { name: "Nirmittee Tours & Travels", path: "/ventures/tours-and-travels" },
  { name: "Nirmittee Developers", path: "/ventures/developers" },
  { name: "Nirmittee Traders", path: "/ventures/traders" },
  { name: "Vrindavan Restaurant", path: "/ventures/vrindavan-restaurant" },
  { name: "Gulmohar Hotel", path: "/ventures/gulmohar-hotel" },
  { name: "Nirmitee Fashion", path: "https://fashion.nirmiteegroup.com/", external: true },
];

type TimeoutId = ReturnType<typeof setTimeout>;

export default function Navbar() {
  const pathname = usePathname() || "/";
  const [isOpen, setIsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef<TimeoutId | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const venturesActive = pathname.startsWith("/ventures");

  useEffect(() => {
    return () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
      closeTimer.current = null;
    };
  }, []);

  // close menus on route change
  useEffect(() => {
    setIsOpen(false);
    setMobileOpen(false);
  }, [pathname]);

  // ESC to close
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
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
      "relative inline-flex items-center font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60 rounded",
      "transition text-base lg:text-lg hover:text-cyan-300",
      "after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full",
      "after:scale-x-0 after:origin-left after:transition-transform after:duration-300",
      "after:bg-gradient-to-r after:from-[#60A5FA] after:via-[#A78BFA] after:to-[#22D3EE]",
      forceActive || isActive(href)
        ? "text-cyan-300 after:scale-x-100"
        : "hover:after:scale-x-100",
    ].join(" ");

  return (
    <nav className="w-full text-white bg-transparent border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3">
        {/* logo */}
        <Link
          href="/"
          className="flex items-center gap-2 font-bold text-lg sm:text-xl"
          aria-label="Nirmittee Group Home"
        >
          <Image
            src="/logo.png"
            alt="Nirmittee Group Logo"
            width={36}
            height={36}
            className="rounded-full"
          />
          Nirmittee <span className="text-gray-300 font-light">Group</span>
        </Link>

        {/* desktop menu */}
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

          {/* ventures dropdown */}
          <li
            className="relative"
            onMouseEnter={openMenu}
            onMouseLeave={scheduleClose}
            onFocus={openMenu}
            onBlur={(e) => {
              // only close when focus leaves the whole menu
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
              <div className="bg-[#0B1221]/95 backdrop-blur-md border border-white/10 shadow-xl">
                {ventures.map((v) => {
                  const active = !v.external && pathname === v.path;
                  const commonClasses = [
                    "block px-5 py-3 text-base transition",
                    active ? "bg-white/10 text-cyan-300" : "hover:bg-white/10",
                  ].join(" ");

                  return v.external ? (
                    <a
                      key={v.name}
                      href={v.path}
                      role="menuitem"
                      className={commonClasses}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsOpen(false)}
                    >
                      {v.name}
                    </a>
                  ) : (
                    <Link
                      key={v.name}
                      href={v.path}
                      role="menuitem"
                      aria-current={active ? "page" : undefined}
                      className={commonClasses}
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
        <Link
          href="/contact"
          className="hidden md:block px-4 lg:px-5 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium shadow-lg shadow-blue-500/30 hover:scale-105 transition-transform text-sm lg:text-base"
        >
          Get in Touch
        </Link>

        {/* mobile toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileOpen((s) => !s)}
          aria-label="Toggle navigation"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0B1221] backdrop-blur-md border-t border-white/10 px-4 py-4 space-y-3">
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
              {ventures.map((v) =>
                v.external ? (
                  <a
                    key={v.name}
                    href={v.path}
                    className="block py-1 hover:text-cyan-300"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileOpen(false)}
                  >
                    {v.name}
                  </a>
                ) : (
                  <Link
                    key={v.name}
                    href={v.path}
                    className="block py-1 hover:text-cyan-300"
                    onClick={() => setMobileOpen(false)}
                  >
                    {v.name}
                  </Link>
                )
              )}
            </div>
          </details>

          <Link href="/careers" className="block py-2 hover:text-cyan-300" onClick={() => setMobileOpen(false)}>
            Careers
          </Link>
          <Link href="/contact" className="block py-2 hover:text-cyan-300" onClick={() => setMobileOpen(false)}>
            Contact
          </Link>

          <Link
            href="/contact"
            className="block w-full mt-3 text-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium shadow-lg shadow-blue-500/30 hover:scale-105 transition-transform"
            onClick={() => setMobileOpen(false)}
          >
            Get in Touch
          </Link>
        </div>
      )}
    </nav>
  );
}
