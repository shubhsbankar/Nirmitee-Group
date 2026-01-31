// src/app/ventures/vrindavan-restaurant/MenuHighlights.tsx
const categories = [
  "Traditional Thali",
  "Special Biryani",
  "South Indian Delicacies",
  "Chinese Cuisine",
  "Sweets & Desserts",
  "Fresh Juices & Shakes",
];

export default function MenuHighlights() {
  return (
    <section
      id="menu"
      className=" py-35 px-6 md:px-16" // increased from py-16 to py-28
    >
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-3xl md:text-4xl font-extrabold text-center"
          data-aos="fade-up"
        >
          Menu Highlights
        </h2>
        <p
          className="text-center text-gray-300 mt-2"
          data-aos="fade-up"
          data-aos-delay="80"
        >
          Popular dishes loved by our customers
        </p>

        <div
          className="mt-8 flex flex-wrap gap-4 justify-center"
          data-aos="fade-up"
          data-aos-delay="120"
        >
          {categories.map((c) => (
            <span
              key={c}
              className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-colors duration-300"
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
