// src/components/AnimateOnScroll.tsx
"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AnimateOnScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    AOS.init({
      duration: 700,       // medium speed (your preference)
      easing: "ease-out",
      once: true,
      offset: 80,
    });
  }, []);
  return <>{children}</>;
}
