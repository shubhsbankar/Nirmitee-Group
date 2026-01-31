"use client";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/anim";
import { Medal, Clock3, UsersRound } from "lucide-react";

export default function WhyChooseSection() {
  const features = [
    {
      title: "Quality Assurance",
      desc: "ISO certified construction with premium materials and finishes",
      Icon: Medal,
    },
    {
      title: "Timely Delivery",
      desc: "100% on-time project completion track record",
      Icon: Clock3,
    },
    {
      title: "Customer Support",
      desc: "24/7 support and lifetime maintenance services",
      Icon: UsersRound,
    },
  ];

  return (
    <section id="why-choose" className="px-6 py-16">
      <div className="container mx-auto">
        {/* Title */}
        <motion.h2
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.35 }} // replay on every visit
          className="text-center text-3xl md:text-4xl font-extrabold text-white"
        >
          Why Choose Nirmittee Developers?
        </motion.h2>

        {/* 3 Columns */}
        <motion.div
          variants={stagger(0.14, 0.12)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="mx-auto mt-10 grid gap-10 md:grid-cols-3 max-w-6xl"
        >
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              variants={fadeUp(i * 0.04)}
              className="text-center"
            >
              <f.Icon aria-hidden className="mx-auto h-10 w-10 text-sky-400/80" />
              <h3 className="mt-4 text-lg md:text-xl font-semibold text-white">
                {f.title}
              </h3>
              <p className="mt-2 text-sm md:text-base leading-6 text-white/70 max-w-xs mx-auto">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
