import { Plane, Hotel, Car, Briefcase, Globe2, Ticket } from "lucide-react";

const items = [
  { title: "Holiday Packages", desc: "Domestic & international custom tours", icon: Globe2 },
  { title: "Ticketing", desc: "Flights • Trains • Buses", icon: Ticket },
  { title: "Hotel Booking", desc: "Verified stays at best rates", icon: Hotel },
  { title: "Visa Assistance", desc: "Guidance & documentation support", icon: Plane },
  { title: "Car Rentals", desc: "Chauffeur-driven and self-drive", icon: Car },
  { title: "Corporate Travel", desc: "Budgets, invoicing & reports", icon: Briefcase },
];

export default function Services() {
  return (
    <section
      id="services"
      className="w-full px-6 md:px-12 lg:px-20 py-16 bg-gradient-to-br from-blue-950/40 via-slate-900/40 to-purple-950/40"
    >
      {/* Heading */}
      <h2
        className="text-3xl md:text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"
        data-aos="fade-up"
      >
        Our Services
      </h2>
      <p
        className="text-center text-gray-300 mt-3 text-lg"
        data-aos="fade-up"
        data-aos-delay={80}
      >
        Everything you need for a smooth journey
      </p>

      {/* Services Grid */}
      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((s, i) => {
          const Icon = s.icon;
          return (
            <div
              key={s.title}
              data-aos="zoom-in-up"
              data-aos-delay={i * 80}
              className="relative group rounded-2xl p-[1px] bg-gradient-to-r from-blue-500/40 to-purple-500/40"
            >
              {/* Glow wrapper */}
              <div className="rounded-2xl p-8 bg-white/5 backdrop-blur border border-white/10 transition-transform duration-300 group-hover:-translate-y-2 group-hover:shadow-[0_0_25px_rgba(59,130,246,0.6)]">
                <div className="flex items-center gap-4">
                  <Icon className="w-8 h-8 text-blue-400" />
                  <h3 className="text-xl font-semibold text-white">{s.title}</h3>
                </div>
                <p className="text-gray-300 mt-3">{s.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
