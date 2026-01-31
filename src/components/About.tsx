"use client";

import { useEffect, useRef, useState, MouseEvent } from "react";
import { Target, Eye, Award, Users } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type ValueItem = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
};

const values: ValueItem[] = [
  {
    icon: Target,
    title: "Mission",
    description:
      "To create sustainable business ecosystems that drive innovation and deliver exceptional value across multiple industries.",
  },
  {
    icon: Eye,
    title: "Vision",
    description:
      "To become India's most trusted and diversified business group, setting benchmarks in every sector we operate.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "We strive for excellence in every venture, ensuring quality, innovation, and customer satisfaction remain our top priorities.",
  },
  {
    icon: Users,
    title: "People First",
    description:
      "Our success is built on the foundation of our people—employees, customers, and communities we serve across India.",
  },
];

const achievements = [
  { year: "2015", milestone: "Founded Nirmittee Group" },
  { year: "2017", milestone: "Launched Real Estate Division" },
  { year: "2019", milestone: "Expanded to 3 Ventures" },
  { year: "2021", milestone: "₹50Cr Revenue Milestone" },
  { year: "2023", milestone: "7 Active Business Ventures" },
  { year: "2024", milestone: "₹100Cr+ Revenue Achievement" },
];

function TiltCard({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const cardRef = useRef<HTMLDivElement | null>(null);

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const px = x / rect.width;
    const py = y / rect.height;

    const rotateY = (px - 0.5) * 16;
    const rotateX = (0.5 - py) * 16;
    const hue = 180 + px * 140;

    el.style.setProperty("--rx", `${rotateX}deg`);
    el.style.setProperty("--ry", `${rotateY}deg`);
    el.style.setProperty("--hue", `${hue}`);
  };

  const handleLeave = () => {
    const el = cardRef.current;
    if (!el) return;
    el.style.setProperty("--rx", `0deg`);
    el.style.setProperty("--ry", `0deg`);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`about-tilt glass-card glow transition-transform duration-300 ${className}`}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [visibleBlocks, setVisibleBlocks] = useState<Record<string, boolean>>({
    story: false,
    values: false,
    timeline: false,
  });

  // ---- NEW: refs for the animated timeline ----
  const timelineRef = useRef<HTMLDivElement | null>(null);
  const progressRef = useRef<HTMLDivElement | null>(null);
  const dotRefs = useRef<HTMLDivElement[]>([]);
  dotRefs.current = [];
  const addDotRef = (el: HTMLDivElement | null) => {
    if (el && !dotRefs.current.includes(el)) dotRefs.current.push(el);
  };

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const key = (entry.target as HTMLElement).dataset.key!;
          setVisibleBlocks((prev) => ({ ...prev, [key]: entry.isIntersecting }));
        });
      },
      { threshold: 0.25 }
    );

    const nodes = sectionRef.current?.querySelectorAll("[data-key]");
    nodes?.forEach((n) => io.observe(n));

    return () => io.disconnect();
  }, []);

  // ---- NEW: GSAP scroll-fill line + glowing dots ----
  useEffect(() => {
    if (!timelineRef.current || !progressRef.current) return;

    // Fill the center line as the section scrolls
    gsap.fromTo(
      progressRef.current,
      { height: 0 },
      {
        height: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top 70%",
          end: "bottom 30%",
          scrub: true,
        },
      }
    );

    // Glow/scale active dot per step
    const steps = Array.from(
      timelineRef.current.querySelectorAll<HTMLElement>("[data-step]")
    );
    steps.forEach((step, i) => {
      const dot = dotRefs.current[i];
      // reveal card slightly
      gsap.fromTo(
        step.querySelector("[data-card]"),
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: step,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
      // dot glow
      if (dot) {
        gsap.fromTo(
          dot,
          { scale: 0.95, boxShadow: "0px 0px 0px rgba(56,189,248,0)" },
          {
            scale: 1.12,
            boxShadow: "0px 0px 18px rgba(124,58,237,0.9)", // purple glow
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

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <section id="about-section" ref={sectionRef} className="py-24 bg-about">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl md:text-6xl text-white mb-6">
            About <span className="gradient-text">Nirmittee Group</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Building futures and empowering lives through strategic business ventures
            that create lasting impact across multiple industries.
          </p>
        </div>

        {/* Story + Values */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Story */}
          <div
            data-key="story"
            className={`space-y-8 transition-all duration-700 ${
              visibleBlocks.story
                ? "animate-slide-in-left opacity-100 translate-x-0"
                : "opacity-0 -translate-x-6"
            }`}
          >
            {/* Powerhouse */}
            <div className="glass-card p-8 border border-white/10 bg-gradient-to-br from-[#10172A] via-[#0A0E1F] to-[#050814] shadow-glow">
              <h3 className="font-montserrat font-bold text-2xl gradient-text mb-6">
                The Powerhouse Behind 7 Ventures
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2015, Nirmittee Group has emerged as one of India&apos;s
                  most dynamic and diversified business conglomerates. Under the visionary
                  leadership of{" "}
                  <span className="text-primary-glow font-semibold">Smeet Raut</span>, we have
                  successfully established ourselves across seven distinct industries.
                </p>
                <p>
                  Our journey began with a simple yet powerful vision: to create business
                  ecosystems that not only generate sustainable profits but also contribute
                  meaningfully to society. Today, we stand as a testament to what&apos;s possible
                  when innovation meets determination.
                </p>
                <p>
                  From Dreams to Developments—Nirmittee leads the way in building a future
                  where business success and social responsibility go hand in hand.
                </p>
              </div>
            </div>

            {/* Founder Quote */}
            <div className="glass-card p-8 border border-white/10 bg-gradient-to-br from-[#10172A] via-[#0A0E1F] to-[#050814] shadow-glow">
              <blockquote className="text-lg text-white italic mb-4">
                “Success is not just about building businesses; it&apos;s about building
                legacies that inspire and empower future generations.”
              </blockquote>
              <cite className="text-primary-glow font-semibold">
                — Smeet Raut, Founder &amp; Chairman
              </cite>
            </div>
          </div>

          {/* Values */}
          <div
            data-key="values"
            className={`transition-all duration-700 ${
              visibleBlocks.values
                ? "animate-slide-in-right opacity-100 translate-x-0"
                : "opacity-0 translate-x-6"
            }`}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((v, i) => {
                const Icon = v.icon;
                return (
                  <TiltCard key={v.title} delay={i * 0.12} className="p-6 group shadow-glow">
                    <div className="w-12 h-12 rounded-lg p-3 mb-4 about-tilt-badge group-hover:scale-110 transition-transform">
                      <Icon className="w-full h-full text-white" />
                    </div>
                    <h4 className="font-montserrat font-bold text-lg text-white mb-3">
                      {v.title}
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {v.description}
                    </p>
                  </TiltCard>
                );
              })}
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div
          data-key="timeline"
          className={`mt-20 transition-all duration-700 ${
            visibleBlocks.timeline ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <h3 className="font-montserrat font-bold text-3xl text-white text-center mb-12">
            Our Journey of <span className="gradient-text">Excellence</span>
          </h3>

          {/* ---- Timeline container with animated progress line ---- */}
          <div ref={timelineRef} className="relative">
            {/* Rail (faint static line) */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[2px] h-full bg-white/15 rounded hidden md:block" />

            {/* Progress (animated height) */}
            <div
              ref={progressRef}
              className="absolute left-1/2 -translate-x-1/2 top-0 w-[2px] bg-gradient-to-b from-cyan-400 via-indigo-400 to-purple-500 rounded hidden md:block"
              style={{ height: 0 }}
            />

            <div className="space-y-12">
              {achievements.map((a, i) => (
                <div
                  key={a.year}
                  data-step // for gsap
                  className={`flex items-center ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } flex-col md:gap-8`}
                >
                  <div
                    className={`w-full md:w-5/12 ${
                      i % 2 === 0 ? "md:text-right" : "md:text-left"
                    } text-center`}
                  >
                    <div
                      data-card // for gsap
                      className={`glass-card p-6 shadow-glow transition-all duration-300 cursor-pointer 
                      hover:scale-105 hover:shadow-hover 
                      ${a.year === "2023" ? "pulse-highlight" : ""}`}
                    >
                      <h4 className="text-2xl font-bold gradient-text mb-2">{a.year}</h4>
                      <p className="text-white font-medium">{a.milestone}</p>
                    </div>
                  </div>

                  {/* Dot (animated glow on active) */}
                  <div
                    ref={addDotRef}
                    className="w-6 h-6 rounded-full border-4 border-background bg-white/10 hidden md:block transition-all"
                    style={{
                      boxShadow: "0 0 0 rgba(124,58,237,0)", // will be animated
                    }}
                  />

                  <div className="w-full md:w-5/12" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
