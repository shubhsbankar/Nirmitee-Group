export default function ContactMap() {
  return (
    <section id="contact" className="max-w-7xl mx-auto px-6 pb-16">
      <h2 className="text-3xl font-bold" data-aos="fade-up">Get in Touch</h2>
      <div className="mt-6 grid md:grid-cols-2 gap-8 items-start">
        <div className="space-y-3" data-aos="fade-right">
          <p className="text-white/90">📍 Main Road, Yavatmal, Maharashtra 445001</p>
          <p className="text-white/90">📞 +91-9876543213</p>
          <p className="text-white/90">✉️ tours@nirmitteegroup.com</p>
          <div className="pt-2 flex flex-wrap gap-3">
            <a href="tel:+919876543213" className="px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500">Call Now</a>
            <a href="https://wa.me/919876543213" className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20">WhatsApp</a>
          </div>
        </div>
        <div data-aos="fade-left" className="rounded-2xl overflow-hidden border border-white/10">
          <iframe
            title="Nirmittee Tours & Travels location"
            src="https://www.google.com/maps?q=Yavatmal&output=embed"
            className="w-full h-72 md:h-80"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
