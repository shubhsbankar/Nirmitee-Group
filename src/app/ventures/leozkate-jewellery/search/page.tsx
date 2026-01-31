// import ProductGrid from "../_components/ProductGrid";
// import FiltersBar from "../_components/FiltersBar";

// export default async function SearchPage({ searchParams }:{ searchParams: { q?: string } }) {
//   const q = (searchParams.q ?? "").trim();
//   const products = await searchProducts({ q });

//   return (
//     <main className="bg-midnight text-white px-6 pb-16">
//       <h1 className="text-2xl sm:text-3xl font-semibold mt-6 mb-3">
//         {q ? `Results for “${q}”` : "Search"}
//       </h1>
//       <FiltersBar basePath="/ventures/leozkate-jewellery/search" q={q} />
//       <ProductGrid products={products} emptyText={q ? `No results for “${q}”.` : "Type to search."} />
//     </main>
//   );
// }

// // Mock search (replace)
// async function searchProducts({ q }:{ q?: string }) {
//   if (!q) return MOCK.slice(0, 8);
//   return MOCK.filter(p => p.title.toLowerCase().includes(q.toLowerCase()));
// }
// const MOCK = [
//   { id:"1", title:"Abstract Embrace Diamond Ring", price:68960, image:"https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80&auto=format&fit=crop&crop=center", category:"diamond" },
//   { id:"2", title:"Royal Filigree Diamond Drop Earrings", price:90250, image:"https://images.unsplash.com/photo-1520962918287-7448c2878f65?w=800&q=80&auto=format&fit=crop&crop=center", category:"earrings" },
//   { id:"3", title:"Ripple Curve Diamond Ring", price:84616, image:"https://images.unsplash.com/photo-1516637090014-cb1ab0d08fc7?w=800&q=80&auto=format&fit=crop&crop=center", category:"diamond" },
//   { id:"4", title:"Classic Chain Necklace", price:32999, image:"https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&q=80&auto=format&fit=crop&crop=center", category:"necklaces" },
// ];
import ProductGrid from "../_components/ProductGrid";
import FiltersBar from "../_components/FiltersBar";

type SearchPageProps = {
  searchParams?: Promise<{
    q?: string;
  }>;
};

export default async function SearchPage({
  searchParams,
}: SearchPageProps) {
  const params = await searchParams;
  const q = (params?.q ?? "").trim();

  const products = await searchProducts({ q });

  return (
    <main className="bg-midnight text-white px-6 pb-16">
      <h1 className="text-2xl sm:text-3xl font-semibold mt-6 mb-3">
        {q ? `Results for “${q}”` : "Search"}
      </h1>

      <FiltersBar
        basePath="/ventures/leozkate-jewellery/search"
        q={q}
      />

      <ProductGrid
        products={products}
        emptyText={q ? `No results for “${q}”.` : "Type to search."}
      />
    </main>
  );
}

// Mock search (replace later)
async function searchProducts({ q }: { q?: string }) {
  if (!q) return MOCK.slice(0, 8);
  return MOCK.filter((p) =>
    p.title.toLowerCase().includes(q.toLowerCase())
  );
}

const MOCK = [
  {
    id: "1",
    title: "Abstract Embrace Diamond Ring",
    price: 68960,
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80&auto=format&fit=crop&crop=center",
    category: "diamond",
  },
  {
    id: "2",
    title: "Royal Filigree Diamond Drop Earrings",
    price: 90250,
    image:
      "https://images.unsplash.com/photo-1520962918287-7448c2878f65?w=800&q=80&auto=format&fit=crop&crop=center",
    category: "earrings",
  },
  {
    id: "3",
    title: "Ripple Curve Diamond Ring",
    price: 84616,
    image:
      "https://images.unsplash.com/photo-1516637090014-cb1ab0d08fc7?w=800&q=80&auto=format&fit=crop&crop=center",
    category: "diamond",
  },
  {
    id: "4",
    title: "Classic Chain Necklace",
    price: 32999,
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&q=80&auto=format&fit=crop&crop=center",
    category: "necklaces",
  },
];
