export default function About() {
  return (
    <section
      id="about"
      className="w-full px-6 md:px-12 lg:px-20 py-16 relative bg-gradient-to-br from-blue-950/40 via-slate-900/40 to-purple-950/40"
    >
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Left content */}
        <div data-aos="fade-right">
          <h2 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
            About Nirmittee Tours & Travels
          </h2>
          <p className="mt-4 text-lg text-white/90">
            We craft domestic and international trips with transparent pricing and end-to-end support.
            From quick ticketing to full itineraries, we’ve got you covered.
          </p>

          {/* Features */}
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="px-4 py-2 rounded-full bg-white/10 text-sm">Hassle-free ticketing</span>
            <span className="px-4 py-2 rounded-full bg-white/10 text-sm">Hotel + Visa support</span>
            <span className="px-4 py-2 rounded-full bg-white/10 text-sm">Custom itineraries</span>
          </div>

          {/* Stats */}
          <ul className="mt-8 grid grid-cols-3 gap-6 text-center">
            <li className="p-4 rounded-xl bg-white/5 backdrop-blur">
              <p className="text-3xl font-bold text-blue-400">8+</p>
              <p className="text-sm text-gray-300">Years</p>
            </li>
            <li className="p-4 rounded-xl bg-white/5 backdrop-blur">
              <p className="text-3xl font-bold text-blue-400">1500+</p>
              <p className="text-sm text-gray-300">Travellers</p>
            </li>
            <li className="p-4 rounded-xl bg-white/5 backdrop-blur">
              <p className="text-3xl font-bold text-blue-400">40+</p>
              <p className="text-sm text-gray-300">Destinations</p>
            </li>
          </ul>
        </div>

        {/* Right image */}
        <div
          className="rounded-2xl overflow-hidden border border-white/10 shadow-lg"
          data-aos="fade-left"
        >
          <img
            src="https://images.unsplash.com/photo-1511735111819-9a3f7709049c?auto=format&fit=crop&w=1400&q=80"
            alt="Travel planning desk"
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
