"use client";
import { motion } from "framer-motion";
import { fadeUp, scaleIn } from "@/lib/anim";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className=" bg-[#0B1221] px-15 py-16">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          
          {/* Left: Contact Info */}
          <div>
            <motion.h2
              variants={fadeUp(0)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3 }} // <-- replays every time
              className="text-3xl md:text-4xl font-extrabold text-white"
            >
              Get in Touch
            </motion.h2>

            <motion.ul
              variants={fadeUp(0.05)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3 }}
              className="mt-6 space-y-5 text-white/80"
            >
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-sky-400" />
                <span>+91-9876543210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-sky-400" />
                <span>info@nirmitteedevelopers.com</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-sky-400" />
                <span>Main Road, Yavatmal, Maharashtra 445001</span>
              </li>
            </motion.ul>

            <motion.div
              variants={fadeUp(0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3 }}
              className="mt-6 flex gap-4"
            >
              <a
                href="tel:+919876543210"
                className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium transition"
              >
                📞 Call Now
              </a>
              <a
                href="https://wa.me/919876543210"
                className="px-5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                💬 WhatsApp
              </a>
            </motion.div>
          </div>

          {/* Right: Google Map */}
          <motion.div
            variants={scaleIn(0.15)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }} // <-- replays on scroll
            className="rounded-2xl overflow-hidden border border-white/10 shadow-[0_6px_24px_rgba(0,0,0,0.25)]"
          >
            <iframe
              title="Nirmittee Developers Yavatmal location"
              src="https://www.google.com/maps?q=Yavatmal&output=embed"
              className="w-full h-[300px] md:h-[350px]"
              loading="lazy"
              style={{ border: 0 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
