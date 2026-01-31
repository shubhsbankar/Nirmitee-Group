const services = [
  { title: "Spacious Lawn", desc: "Accommodates up to 2000 guests." },
  { title: "Elegant Stage", desc: "Beautifully designed stage for grand celebrations." },
  { title: "Catering & Décor", desc: "Customizable menu and décor options." },
  { title: "Ample Parking", desc: "Hassle-free parking for guests." },
];

export default function Services() {
  return (
    <section className="relative bg-about py-20">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-14">
          <h2 className="relative inline-block text-4xl md:text-5xl font-extrabold text-white">
            Our <span className="gradient-text">Facilities</span>
            {/* underline glow */}
            <span className="absolute -bottom-2 left-0 w-full h-[3px] bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-500 rounded-full" />
          </h2>
          <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
            Discover everything you need for a flawless celebration at Vrindavan Lawn
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <div
              key={i}
              className="group relative p-6 rounded-xl glass-card shadow-glow border border-white/10 transition-all duration-500 hover:scale-105 hover:shadow-hover"
            >
              {/* gradient glow border */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none bg-gradient-to-r from-cyan-400/30 via-purple-500/30 to-pink-500/30 blur-xl" />
              
              <div className="relative z-10">
                <h3 className="text-xl font-semibold mb-3 text-white">{s.title}</h3>
                <p className="text-gray-400">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
