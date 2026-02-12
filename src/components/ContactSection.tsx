"use client";

import { useState } from "react";
import { Send, Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"; // <- shadcn path

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    venture: "",
    message: "",
    company: "", // honeypot (bots will fill this)
  });
  const [sending, setSending] = useState(false);
  const [serverMsg, setServerMsg] = useState<{ ok: boolean; text: string } | null>(null);

  const onChange =
    (key: keyof typeof form) =>
    (
      e:
        | React.ChangeEvent<HTMLInputElement>
        | React.ChangeEvent<HTMLTextAreaElement>
    ) =>
      setForm((s) => ({ ...s, [key]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setServerMsg(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (res.ok && data.ok) {
        setServerMsg({ ok: true, text: "Thanks! We’ll get back to you within 24 hours." });
        setForm({ name: "", email: "", venture: "", message: "", company: "" });
      } else {
        setServerMsg({ ok: false, text: data.error || "Something went wrong. Please try again." });
      }
    } catch {
      setServerMsg({ ok: false, text: "Network error. Please try again." });
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-contact">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold">
            Let&apos;s Build <span className="contact-gradient-text">Together</span>
          </h2>
          <p className="text-xl contact-text-muted max-w-3xl mx-auto mt-4">
            Ready to explore opportunities with Nirmittee Group? Get in touch and let&apos;s
            discuss how we can create value together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left — Form */}
          <div className="contact-glass-card p-8 lg:p-12">
            <h3 className="text-2xl font-semibold mb-8">Send us a Message</h3>

            <form onSubmit={submit} className="space-y-6" noValidate>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm mb-2" htmlFor="name">Full Name *</label>
                  <input
                    id="name"
                    type="text"
                    autoComplete="name"
                    value={form.name}
                    onChange={onChange("name")}
                    placeholder="Your full name"
                    required
                    className="w-full rounded-md bg-white/5 border border-white/20 text-white placeholder:contact-text-muted px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500/60"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2" htmlFor="email">Email Address *</label>
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={onChange("email")}
                    placeholder="your.email@example.com"
                    required
                    className="w-full rounded-md bg-white/5 border border-white/20 text-white placeholder:contact-text-muted px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500/60"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm mb-2">Interested in</label>
                <Select
                  value={form.venture}
                  onValueChange={(v) => setForm((s) => ({ ...s, venture: v }))}
                >
                  <SelectTrigger className="w-full bg-white/5 border border-white/20 text-white">
                    <SelectValue placeholder="Select a venture" />
                  </SelectTrigger>

                  {/* Glassy dark dropdown panel */}
                  <SelectContent className="contact-glass-card border-white/20">
                    <SelectItem value="general">General Inquiry</SelectItem>
                    <SelectItem value="real-estate">Real Estate</SelectItem>
                    <SelectItem value="trading">Wholesale Trading</SelectItem>
                    <SelectItem value="travel">Travel &amp; Tours</SelectItem>
                    <SelectItem value="restaurant">Restaurant</SelectItem>
                    <SelectItem value="wedding">Wedding Venue</SelectItem>
                    <SelectItem value="fashion">Nirmitee Fashion</SelectItem>
                    <SelectItem value="hotel">Luxury Hotel</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm mb-2" htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  value={form.message}
                  onChange={onChange("message")}
                  placeholder="Tell us about your inquiry..."
                  required
                  className="w-full min-h-[120px] rounded-md bg-white/5 border border-white/20 text-white placeholder:contact-text-muted px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500/60"
                />
              </div>

              {/* Honeypot (hidden) */}
              <label className="hidden" htmlFor="company">Company</label>
              <input
                id="company"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="hidden"
                value={form.company}
                onChange={onChange("company")}
              />

              <button
                type="submit"
                disabled={sending}
                className="contact-btn w-full flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {sending ? "Sending…" : "Send Message"}
                <Send className="w-5 h-5" />
              </button>

              {serverMsg && (
                <p
                  className={`mt-3 text-sm ${
                    serverMsg.ok ? "text-[#8bda7f]" : "contact-text-muted"
                  }`}
                  aria-live="polite"
                >
                  {serverMsg.text}
                </p>
              )}
            </form>
          </div>

          {/* Right — Info */}
          <div className="space-y-8">
            <div className="contact-glass-card p-8">
              <h3 className="text-2xl font-semibold mb-8">Get in Touch</h3>

              <div className="space-y-8">
                <InfoItem
                  icon={Phone}
                  title="Call Us"
                  value="+91 98765 43210"
                  href="tel:+919876543210"
                  desc="Available 24/7 for urgent inquiries"
                />
                <InfoItem
                  icon={Mail}
                  title="Email Us"
                  value="info@nirmiteegroup.com"
                  href="mailto:info@nirmiteegroup.com"
                  desc="We'll respond within 24 hours"
                />
                <InfoItem
                  icon={MapPin}
                  title="Visit Us"
                  value="Mumbai, Maharashtra"
                  href="https://maps.google.com/?q=Mumbai,+Maharashtra"
                  desc="Our headquarters location"
                />
              </div>
            </div>

            {/* WhatsApp CTA */}
            <div className="contact-glass-card p-8 border border-green-500/30">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-xl p-4 bg-[#22c55e] flex items-center justify-center">
                  <MessageCircle className="w-full h-full text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold mb-2">Quick Support</h4>
                  <p className="contact-text-muted mb-4">Get instant assistance via WhatsApp</p>
                  <a
                    className="contact-whatsapp-btn inline-flex items-center justify-center"
                    href="https://wa.me/919876543210"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="contact-glass-card p-8">
              <h4 className="font-semibold mb-4">Business Hours</h4>
              <div className="space-y-2 contact-text-muted">
                <Row label="Monday - Friday" value="9:00 AM - 6:00 PM" />
                <Row label="Saturday" value="10:00 AM - 4:00 PM" />
                <Row label="Sunday" value={<span className="contact-text-danger">Closed</span>} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---- helpers ---- */

function InfoItem({
  icon: Icon,
  title,
  value,
  href,
  desc,
}: {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  value: string;
  href?: string;
  desc: string;
}) {
  const content = (
    <div className="flex items-start gap-4">
      <div className="w-12 h-12 rounded-xl p-3 contact-icon-badge">
        <Icon className="text-white w-full h-full" />
      </div>
      <div>
        <h4 className="font-semibold">{title}</h4>
        <p className="contact-text-glow font-medium mb-1">{value}</p>
        <p className="text-sm contact-text-muted">{desc}</p>
      </div>
    </div>
  );

  return href ? (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
      {content}
    </a>
  ) : (
    content
  );
}

function Row({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="flex justify-between">
      <span>{label}</span>
      <span>{value}</span>
    </div>
  );
}
