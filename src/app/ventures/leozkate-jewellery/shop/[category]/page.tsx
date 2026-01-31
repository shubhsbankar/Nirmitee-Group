import ProductGrid from "../../_components/ProductGrid";
import FiltersBar from "../../_components/FiltersBar";
import { notFound } from "next/navigation";

const CATS = ["diamond","earrings","rings","necklaces","gold","collections","wedding","gifting"] as const;
type Cat = typeof CATS[number];

export async function generateStaticParams() { return CATS.map((c)=>({ category: c })); }

export default async function Page({ params, searchParams }:{ params:{ category: Cat }; searchParams: { [k:string]: string | string[] | undefined }}) {
  const category = params.category;
  if (!CATS.includes(category)) notFound();

  const products = await fetchProducts({ category, searchParams });

  return (
    <main className="bg-midnight text-white px-6 pb-16">
      <h1 className="text-2xl sm:text-3xl font-semibold mt-6 mb-3 capitalize">{category}</h1>
      <FiltersBar basePath={`/ventures/leozkate-jewellery/shop/${category}`} />
      <ProductGrid products={products} />
    </main>
  );
}

// Mock data (replace with your backend/CMS)
async function fetchProducts({ category }:{ category: string }) {
  return MOCK.filter(p => p.category === category || (category === "gold" && p.category === "rings"));
}
const MOCK = [
  { id:"1", title:"Abstract Embrace Diamond Ring", price:68960, image:"https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80&auto=format&fit=crop&crop=center", category:"diamond" },
  { id:"2", title:"Royal Filigree Diamond Drop Earrings", price:90250, image:"https://images.unsplash.com/photo-1520962918287-7448c2878f65?w=800&q=80&auto=format&fit=crop&crop=center", category:"earrings" },
  { id:"3", title:"Ripple Curve Diamond Ring", price:84616, image:"https://images.unsplash.com/photo-1516637090014-cb1ab0d08fc7?w=800&q=80&auto=format&fit=crop&crop=center", category:"diamond" },
  { id:"4", title:"Classic Chain Necklace", price:32999, image:"https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&q=80&auto=format&fit=crop&crop=center", category:"necklaces" },
];
