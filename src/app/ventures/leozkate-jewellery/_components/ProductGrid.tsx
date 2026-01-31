export default function ProductGrid({
  products,
  emptyText = "No products found.",
}: {
  products: Array<{ id: string; title: string; price: number; image: string }>;
  emptyText?: string;
}) {
  if (!products?.length)
    return <div className="text-white/70 py-10">{emptyText}</div>;

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 mt-4">
      {products.map((p) => (
        <a key={p.id} href={`#product-${p.id}`} className="group rounded-2xl border border-white/10 bg-white/5 p-3 hover:bg-white/10 transition">
          <div className="aspect-square rounded-xl overflow-hidden mb-3">
            <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform" />
          </div>
          <div className="text-white/90 text-sm">{p.title}</div>
          <div className="text-white/70 text-sm mt-1">₹ {p.price.toLocaleString("en-IN")}</div>
        </a>
      ))}
    </div>
  );
}
