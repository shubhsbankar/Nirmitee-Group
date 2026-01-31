// src/app/ventures/vrindavan-restaurant/HoursBooking.tsx
export default function HoursBooking() {
  return (
    <section className="container mx-auto px-6 pb-12" id="booking">
      <div className="grid md:grid-cols-2 gap-6">
        <div data-aos="fade-right" className="rounded-2xl border border-white/10 p-6 bg-white/5">
          <h3 className="text-2xl font-semibold">Opening Hours</h3>
          <ul className="mt-4 space-y-3 text-white/90">
            <li className="flex justify-between"><span>Monday - Sunday</span><span>11:00 AM - 11:00 PM</span></li>
            <li className="flex justify-between"><span>Lunch Service</span><span>11:00 AM - 3:30 PM</span></li>
            <li className="flex justify-between"><span>Dinner Service</span><span>6:00 PM - 11:00 PM</span></li>
          </ul>
        </div>
        <div data-aos="fade-left" className="rounded-2xl border border-white/10 p-6 bg-white/5">
          <h3 className="text-2xl font-semibold">Book Your Table</h3>
          <p className="mt-2 text-white/80">Reserve for special occasions, family dinners, or corporate events.</p>
          <a href="tel:+919876543211" className="inline-block mt-6 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500">Call to Reserve</a>
        </div>
      </div>
    </section>
  );
}
