"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Step = {
  title: string;
  desc: string;
};

const STEPS: Step[] = [
  { title: "Discovery & Goals", desc: "We clarify KPIs, audience, and constraints." },
  { title: "Research & Audit", desc: "Competitive analysis, SEO/PPC baselines, tracking review." },
  { title: "Strategy & Roadmap", desc: "Channel mix, forecast, timelines, responsibilities." },
  { title: "Launch & Optimize", desc: "Creative, media, analytics, weekly iteration cycles." },
  { title: "Scale & Report", desc: "Quarterly planning, experiments, budget reallocation." },
];

export default function Process() {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const progressRef = useRef<HTMLDivElement | null>(null);
  const dotRefs = useRef<HTMLDivElement[]>([]);
  dotRefs.current = [];

  const addDotRef = (el: HTMLDivElement | null) => {
    if (el && !dotRefs.current.includes(el)) dotRefs.current.push(el);
  };

  useEffect(() => {
    if (!rootRef.current || !progressRef.current) return;

    // Vertical line fill
    gsap.fromTo(
      progressRef.current,
      { height: 0 },
      {
        height: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top 70%",     // when top hits 70% viewport height
          end: "bottom 30%",    // until bottom hits 30% viewport height
          scrub: true,
        },
      }
    );

    // Step reveal + active dot glow
    const steps = gsap.utils.toArray<HTMLElement>("[data-step]");
    steps.forEach((step, i) => {
      gsap.fromTo(
        step,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: step,
            start: "top 80%",
          },
        }
      );

      const dot = dotRefs.current[i];
      if (dot) {
        gsap.fromTo(
          dot,
          { scale: 0.9, boxShadow: "0 0 0px rgba(56,189,248,0)" },
          {
            scale: 1.12,
            boxShadow: "0 0 18px rgba(56,189,248,0.9)",
            transformOrigin: "center",
            scrollTrigger: {
              trigger: step,
              start: "top 75%",
              end: "bottom 25%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      }
    });

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  return (
    <section
      ref={rootRef}
      className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-20 text-white"
    >
      <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-12">
        Our Process
      </h2>

      <div className="relative">
        {/* Rail */}
        <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-[2px] bg-white/15 rounded-md" />

        {/* Progress (animated height) */}
        <div
          ref={progressRef}
          className="absolute left-4 sm:left-6 top-0 w-[2px] bg-cyan-400 rounded-md"
          style={{ height: 0 }}
        />

        <div className="space-y-12 sm:space-y-16">
          {STEPS.map((s, i) => (
            <div
              key={i}
              data-step
              className="relative pl-12 sm:pl-16"
            >
              {/* Dot */}
              <div
                ref={addDotRef}
                className="absolute left-4 sm:left-6 -translate-x-1/2 top-1.5 w-3.5 h-3.5 rounded-full bg-cyan-300 ring-4 ring-[#0b0f19] shadow-[0_0_0_rgba(56,189,248,0.0)]"
              />

              {/* Card */}
              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-5 sm:p-6 hover:bg-white/10 transition">
                <div className="text-sm sm:text-base text-cyan-300/90 font-semibold">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-1 text-xl sm:text-2xl font-bold">{s.title}</h3>
                <p className="mt-2 text-sm sm:text-base text-gray-300">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
