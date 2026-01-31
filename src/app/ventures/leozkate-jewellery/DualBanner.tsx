export default function DualBanner() {
  const items = [
    { title: "Engagement", cta: "View Products", img: "/images/leozkate/dual/engagement.jpeg" },
    { title: "Wedding", cta: "View Products", img: "/images/leozkate/dual/wedding.jpeg" },
  ];
  return (
<section className="relative px-6 pb-20 pt-20">
  <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/60 to-purple-900/60 -z-10 backdrop-blur-md" />

      <div className="grid md:grid-cols-2 gap-6">
        {items.map((b, i) => (
          <div key={b.title} data-aos="fade-up" data-aos-delay={i * 80}
               className="relative h-56 md:h-72 rounded-2xl overflow-hidden group border border-white/10">
            <img src={b.img} alt={b.title} className="w-full h-full object-cover group-hover:scale-105 transition" />
            <div className="absolute inset-0 bg-black/35" />
            <div className="absolute inset-0 flex flex-col items-start justify-center p-6">
              <h3 className="text-2xl font-semibold">{b.title}</h3>
              <a href="#bestsellers" className="mt-3 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20">{b.cta}</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
