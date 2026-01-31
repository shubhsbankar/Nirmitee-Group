// src/app/ventures/leozkate-jewellery/CategoryMegaNav.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import {
  Sparkles,
  Gem,
  Diamond,
  CircleDot,
  Boxes,
  HeartHandshake,
  Gift,
} from "lucide-react";

type IconType = React.ComponentType<React.SVGProps<SVGSVGElement>>;

type SubCat = { title: string; href: string; img: string };
type MainCat = {
  id: string;
  title: string;
  icon?: IconType;
  href?: string;
  columns: { heading?: string; items: SubCat[] }[];
};

/* --- Copyright-free thumbnails (Unsplash). 
   You can swap any URL below later; each has crop/size params. --- */
const IMG = {
  gold: "https://images.unsplash.com/photo-1603561591385-2c6eb3f1b1f4?w=96&q=80&auto=format&fit=crop&crop=center",
  diamond: "https://images.unsplash.com/photo-1520962918287-7448c2878f65?w=96&q=80&auto=format&fit=crop&crop=center",
  platinum: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=96&q=80&auto=format&fit=crop&crop=center",
  silver: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=96&q=80&auto=format&fit=crop&crop=center",

  bridal: "https://images.unsplash.com/photo-1606800052052-f56b9f1c9c9c?w=96&q=80&auto=format&fit=crop&crop=center",
  daily: "https://images.unsplash.com/photo-1520975922198-6b2f1f3f1a45?w=96&q=80&auto=format&fit=crop&crop=center",
  festive: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=96&q=80&auto=format&fit=crop&crop=center",
  office: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=96&q=80&auto=format&fit=crop&crop=center",

  best: "https://images.unsplash.com/photo-1516637090014-cb1ab0d08fc7?w=96&q=80&auto=format&fit=crop&crop=center",
  new: "https://images.unsplash.com/photo-1490367532201-b9bc1dc483f6?w=96&q=80&auto=format&fit=crop&crop=center",
  under30: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=96&q=80&auto=format&fit=crop&crop=center",
  gifting: "https://images.unsplash.com/photo-1512427691650-1b9f2e0b2b62?w=96&q=80&auto=format&fit=crop&crop=center",

  studs: "https://images.unsplash.com/photo-1585386959984-a41552231653?w=96&q=80&auto=format&fit=crop&crop=center",
  hoops: "https://images.unsplash.com/photo-1571079969546-1f4bba3b2f3d?w=96&q=80&auto=format&fit=crop&crop=center",
  jhumka: "https://images.unsplash.com/photo-1599643477797-5db6d3d0f401?w=96&q=80&auto=format&fit=crop&crop=center",
  chand: "https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?w=96&q=80&auto=format&fit=crop&crop=center",
  drops: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=96&q=80&auto=format&fit=crop&crop=center",
  cuffs: "https://images.unsplash.com/photo-1585386959984-a41552231653?w=96&q=80&auto=format&fit=crop&crop=center",
  huggies: "https://images.unsplash.com/photo-1571079969546-1f4bba3b2f3d?w=96&q=80&auto=format&fit=crop&crop=center",
  frontback: "https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?w=96&q=80&auto=format&fit=crop&crop=center",

  earDiamond: "https://images.unsplash.com/photo-1520962918287-7448c2878f65?w=96&q=80&auto=format&fit=crop&crop=center",
  earSol: "https://images.unsplash.com/photo-1516637090014-cb1ab0d08fc7?w=96&q=80&auto=format&fit=crop&crop=center",
  earGem: "https://images.unsplash.com/photo-1520975922198-6b2f1f3f1a45?w=96&q=80&auto=format&fit=crop&crop=center",
  earPearl: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=96&q=80&auto=format&fit=crop&crop=center",

  women: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=96&q=80&auto=format&fit=crop&crop=center",
  men: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&q=80&auto=format&fit=crop&crop=center",
  couple: "https://images.unsplash.com/photo-1519744346363-11c0f2fcb0c2?w=96&q=80&auto=format&fit=crop&crop=center",

  engagement: "https://images.unsplash.com/photo-1519741497674-611481863552?w=96&q=80&auto=format&fit=crop&crop=center",
  solitaire: "https://images.unsplash.com/photo-1516637090014-cb1ab0d08fc7?w=96&q=80&auto=format&fit=crop&crop=center",
  bands: "https://images.unsplash.com/photo-1516637090014-cb1ab0d08fc7?w=96&q=80&auto=format&fit=crop&crop=center",
  cluster: "https://images.unsplash.com/photo-1603561591385-2c6eb3f1b1f4?w=96&q=80&auto=format&fit=crop&crop=center",
  cocktail: "https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?w=96&q=80&auto=format&fit=crop&crop=center",
  adjustable: "https://images.unsplash.com/photo-1585386959984-a41552231653?w=96&q=80&auto=format&fit=crop&crop=center",

  u20: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=96&q=80&auto=format&fit=crop&crop=center",
  u50: "https://images.unsplash.com/photo-1490367532201-b9bc1dc483f6?w=96&q=80&auto=format&fit=crop&crop=center",
  a50: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=96&q=80&auto=format&fit=crop&crop=center",

  pendants: "https://images.unsplash.com/photo-1520975922198-6b2f1f3f1a45?w=96&q=80&auto=format&fit=crop&crop=center",
  chains: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=96&q=80&auto=format&fit=crop&crop=center",
  set: "https://images.unsplash.com/photo-1556229162-5c63ed9c4efb?w=96&q=80&auto=format&fit=crop&crop=center",
  chokers: "https://images.unsplash.com/photo-1516637090014-cb1ab0d08fc7?w=96&q=80&auto=format&fit=crop&crop=center",
  mangalsutra: "https://images.unsplash.com/photo-1603561591385-2c6eb3f1b1f4?w=96&q=80&auto=format&fit=crop&crop=center",

  diaRings: "https://images.unsplash.com/photo-1519741497674-611481863552?w=96&q=80&auto=format&fit=crop&crop=center",
  diaEars: "https://images.unsplash.com/photo-1520962918287-7448c2878f65?w=96&q=80&auto=format&fit=crop&crop=center",
  diaPend: "https://images.unsplash.com/photo-1520975922198-6b2f1f3f1a45?w=96&q=80&auto=format&fit=crop&crop=center",
  diaBrac: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=96&q=80&auto=format&fit=crop&crop=center",

  solRings: "https://images.unsplash.com/photo-1516637090014-cb1ab0d08fc7?w=96&q=80&auto=format&fit=crop&crop=center",
  solStuds: "https://images.unsplash.com/photo-1520962918287-7448c2878f65?w=96&q=80&auto=format&fit=crop&crop=center",
  solPendants: "https://images.unsplash.com/photo-1520975922198-6b2f1f3f1a45?w=96&q=80&auto=format&fit=crop&crop=center",

  cert: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?w=96&q=80&auto=format&fit=crop&crop=center",
  fourCs: "https://images.unsplash.com/photo-1520975922198-6b2f1f3f1a45?w=96&q=80&auto=format&fit=crop&crop=center",

  minimal: "https://images.unsplash.com/photo-1516637090014-cb1ab0d08fc7?w=96&q=80&auto=format&fit=crop&crop=center",
  heritage: "https://images.unsplash.com/photo-1556229162-5c63ed9c4efb?w=96&q=80&auto=format&fit=crop&crop=center",
  designer: "https://images.unsplash.com/photo-1490367532201-b9bc1dc483f6?w=96&q=80&auto=format&fit=crop&crop=center",

  anniv: "https://images.unsplash.com/photo-1512427691650-1b9f2e0b2b62?w=96&q=80&auto=format&fit=crop&crop=center",
  bday: "https://images.unsplash.com/photo-1490367532201-b9bc1dc483f6?w=96&q=80&auto=format&fit=crop&crop=center",
  festiveGift: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=96&q=80&auto=format&fit=crop&crop=center",

  wedSet: "https://images.unsplash.com/photo-1556229162-5c63ed9c4efb?w=96&q=80&auto=format&fit=crop&crop=center",
  tikka: "https://images.unsplash.com/photo-1599643477797-5db6d3d0f401?w=96&q=80&auto=format&fit=crop&crop=center",
  nath: "https://images.unsplash.com/photo-1599643477797-5db6d3d0f401?w=96&q=80&auto=format&fit=crop&crop=center",
  baju: "https://images.unsplash.com/photo-1599643477797-5db6d3d0f401?w=96&q=80&auto=format&fit=crop&crop=center",
  kamar: "https://images.unsplash.com/photo-1599643477797-5db6d3d0f401?w=96&q=80&auto=format&fit=crop&crop=center",

  gift10: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=96&q=80&auto=format&fit=crop&crop=center",
  gift1025: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=96&q=80&auto=format&fit=crop&crop=center",
  gift2550: "https://images.unsplash.com/photo-1490367532201-b9bc1dc483f6?w=96&q=80&auto=format&fit=crop&crop=center",
  her: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=96&q=80&auto=format&fit=crop&crop=center",
  him: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=96&q=80&auto=format&fit=crop&crop=center",
  kids: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=96&q=80&auto=format&fit=crop&crop=center",
};

/* --- Data with thumbnails on EVERY item --- */
const CATS: MainCat[] = [
  {
    id: "all",
    title: "All Jewellery",
    icon: Sparkles,
    columns: [
      {
        heading: "Shop by Metal",
        items: [
          { title: "Gold", href: "#gold", img: IMG.gold },
          { title: "Diamond", href: "#diamond", img: IMG.diamond },
          { title: "Platinum", href: "#platinum", img: IMG.platinum },
          { title: "Silver", href: "#silver", img: IMG.silver },
        ],
      },
      {
        heading: "By Occasion",
        items: [
          { title: "Bridal", href: "#bridal", img: IMG.bridal },
          { title: "Daily Wear", href: "#daily", img: IMG.daily },
          { title: "Festive", href: "#festive", img: IMG.festive },
          { title: "Office Wear", href: "#office", img: IMG.office },
        ],
      },
      {
        heading: "Specials",
        items: [
          { title: "Best Sellers", href: "#bestsellers", img: IMG.best },
          { title: "New Arrivals", href: "#new", img: IMG.new },
          { title: "Under ₹30k", href: "#under30", img: IMG.under30 },
          { title: "Gifting", href: "#gifting", img: IMG.gifting },
        ],
      },
    ],
  },

  {
    id: "earrings",
    title: "Earrings",
    icon: CircleDot,
    columns: [
      {
        heading: "Styles",
        items: [
          { title: "Studs", href: "#ear-studs", img: IMG.studs },
          { title: "Hoops", href: "#ear-hoops", img: IMG.hoops },
          { title: "Jhumkas", href: "#ear-jhumka", img: IMG.jhumka },
          { title: "Chandbalis", href: "#ear-chandbali", img: IMG.chand },
          { title: "Drops", href: "#ear-drops", img: IMG.drops },
          { title: "Ear Cuffs", href: "#ear-cuffs", img: IMG.cuffs },
          { title: "Huggies", href: "#ear-huggies", img: IMG.huggies },
          { title: "Front Back", href: "#ear-frontback", img: IMG.frontback },
        ],
      },
      {
        heading: "By Stone",
        items: [
          { title: "Diamond Earrings", href: "#ear-diamond", img: IMG.earDiamond },
          { title: "Solitaire Studs", href: "#ear-solitaire", img: IMG.earSol },
          { title: "Gemstone Earrings", href: "#ear-gem", img: IMG.earGem },
          { title: "Pearl Earrings", href: "#ear-pearl", img: IMG.earPearl },
        ],
      },
      {
        heading: "By Occasion",
        items: [
          { title: "Daily Wear", href: "#ear-daily", img: IMG.daily },
          { title: "Party", href: "#ear-party", img: IMG.festive },
          { title: "Wedding", href: "#ear-wedding", img: IMG.bridal },
          { title: "Office", href: "#ear-office", img: IMG.office },
        ],
      },
      {
        heading: "Featured",
        items: [
          { title: "Lightweight", href: "#ear-light", img: IMG.minimal },
          { title: "Designer Picks", href: "#ear-designer", img: IMG.designer },
          { title: "Under ₹30k", href: "#ear-30k", img: IMG.under30 },
        ],
      },
    ],
  },

  {
    id: "rings",
    title: "Rings",
    icon: Gem,
    columns: [
      {
        heading: "For",
        items: [
          { title: "Women", href: "#rings-women", img: IMG.women },
          { title: "Men", href: "#rings-men", img: IMG.men },
          { title: "Couple Bands", href: "#rings-couple", img: IMG.couple },
        ],
      },
      {
        heading: "Styles",
        items: [
          { title: "Engagement Rings", href: "#rings-engagement", img: IMG.engagement },
          { title: "Solitaire Rings", href: "#rings-solitaire", img: IMG.solitaire },
          { title: "Bands", href: "#rings-bands", img: IMG.bands },
          { title: "Cluster Rings", href: "#rings-cluster", img: IMG.cluster },
          { title: "Cocktail Rings", href: "#rings-cocktail", img: IMG.cocktail },
          { title: "Adjustable Rings", href: "#rings-adjustable", img: IMG.adjustable },
        ],
      },
      {
        heading: "By Budget",
        items: [
          { title: "Under ₹20k", href: "#rings-20", img: IMG.u20 },
          { title: "₹20k–₹50k", href: "#rings-20-50", img: IMG.u50 },
          { title: "Above ₹50k", href: "#rings-50+", img: IMG.a50 },
        ],
      },
    ],
  },

  {
    id: "necklaces",
    title: "Necklaces",
    icon: Gem,
    columns: [
      {
        heading: "Styles",
        items: [
          { title: "Pendants", href: "#neck-pendant", img: IMG.pendants },
          { title: "Chains", href: "#neck-chain", img: IMG.chains },
          { title: "Necklace Sets", href: "#neck-set", img: IMG.set },
          { title: "Chokers", href: "#neck-choker", img: IMG.chokers },
          { title: "Mangalsutras", href: "#neck-mangal", img: IMG.mangalsutra },
        ],
      },
      {
        heading: "By Stone",
        items: [
          { title: "Diamond Necklaces", href: "#neck-diamond", img: IMG.diamond },
          { title: "Gemstone Necklaces", href: "#neck-gem", img: IMG.diamond },
          { title: "Pearl Necklaces", href: "#neck-pearl", img: IMG.earPearl },
        ],
      },
      {
        heading: "Occasion",
        items: [
          { title: "Daily Wear", href: "#neck-daily", img: IMG.daily },
          { title: "Wedding", href: "#neck-wedding", img: IMG.bridal },
          { title: "Festive", href: "#neck-festive", img: IMG.festive },
        ],
      },
    ],
  },

  {
    id: "diamond",
    title: "Diamond",
    icon: Diamond,
    columns: [
      {
        heading: "Shop All",
        items: [
          { title: "Diamond Rings", href: "#dia-rings", img: IMG.diaRings },
          { title: "Diamond Earrings", href: "#dia-earrings", img: IMG.diaEars },
          { title: "Diamond Pendants", href: "#dia-pendants", img: IMG.diaPend },
          { title: "Diamond Bracelets", href: "#dia-bracelets", img: IMG.diaBrac },
        ],
      },
      {
        heading: "Solitaire",
        items: [
          { title: "Rings", href: "#sol-rings", img: IMG.solRings },
          { title: "Studs", href: "#sol-studs", img: IMG.solStuds },
          { title: "Pendants", href: "#sol-pendants", img: IMG.solPendants },
        ],
      },
      {
        heading: "Certification",
        items: [
          { title: "IGI/GIA Certified", href: "#cert", img: IMG.cert },
          { title: "4C’s Guide", href: "#4cs", img: IMG.fourCs },
        ],
      },
    ],
  },

  {
    id: "collections",
    title: "Collections",
    icon: Boxes,
    columns: [
      {
        heading: "Curated",
        items: [
          { title: "Minimal Daily", href: "#col-min", img: IMG.minimal },
          { title: "Heritage", href: "#col-heritage", img: IMG.heritage },
          { title: "Designer Edit", href: "#col-designer", img: IMG.designer },
        ],
      },
      {
        heading: "Gifting",
        items: [
          { title: "Anniversary", href: "#gift-anniv", img: IMG.anniv },
          { title: "Birthday", href: "#gift-bday", img: IMG.bday },
          { title: "Festive Gifts", href: "#gift-festive", img: IMG.festiveGift },
        ],
      },
    ],
  },

  {
    id: "wedding",
    title: "Wedding",
    icon: HeartHandshake,
    columns: [
      {
        heading: "Bridal Jewellery",
        items: [
          { title: "Necklace Sets", href: "#wed-set", img: IMG.wedSet },
          { title: "Maang Tikka", href: "#wed-tikka", img: IMG.tikka },
          { title: "Nath", href: "#wed-nath", img: IMG.nath },
          { title: "Bajuband", href: "#wed-baju", img: IMG.baju },
          { title: "Kamarbandh", href: "#wed-kamar", img: IMG.kamar },
        ],
      },
      {
        heading: "For Family",
        items: [
          { title: "Bridesmaids", href: "#wed-bm", img: IMG.bridal },
          { title: "Groomsmen", href: "#wed-gm", img: IMG.men },
          { title: "Mother of Bride", href: "#wed-mob", img: IMG.bridal },
        ],
      },
    ],
  },

  {
    id: "gifting",
    title: "Gifting",
    icon: Gift,
    columns: [
      {
        heading: "By Budget",
        items: [
          { title: "Under ₹10k", href: "#gift-10", img: IMG.gift10 },
          { title: "₹10k–₹25k", href: "#gift-10-25", img: IMG.gift1025 },
          { title: "₹25k–₹50k", href: "#gift-25-50", img: IMG.gift2550 },
        ],
      },
      {
        heading: "For",
        items: [
          { title: "For Her", href: "#gift-her", img: IMG.her },
          { title: "For Him", href: "#gift-him", img: IMG.him },
          { title: "For Kids", href: "#gift-kids", img: IMG.kids },
        ],
      },
    ],
  },
];

export default function CategoryMegaNav() {
  const [open, setOpen] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mql = window.matchMedia("(max-width: 1023px)");
    const update = () => setIsMobile(mql.matches);
    update();
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (!navRef.current) return;
      if (!navRef.current.contains(e.target as Node)) setOpen(null);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(null);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div ref={navRef} className="relative w-full">
      {/* Top Row (main categories) */}
      <div className="w-full border border-white/10 bg-white/5 backdrop-blur-sm rounded-2xl px-3 sm:px-4 py-2 sm:py-3">
        <ul className="flex flex-wrap items-center gap-x-6 gap-y-3">
          {CATS.map((c) => {
            const Icon = c.icon ?? Sparkles;
            const active = open === c.id;
            return (
              <li key={c.id}>
                <button
                  type="button"
                  onMouseEnter={() => !isMobile && setOpen(c.id)}
                  onFocus={() => !isMobile && setOpen(c.id)}
                  onMouseLeave={() => !isMobile && setOpen((o) => (o === c.id ? c.id : o))}
                  onClick={() => isMobile && setOpen((o) => (o === c.id ? null : c.id))}
                  className={`flex items-center gap-2 text-[15px] transition-colors ${
                    active ? "text-cyan-300" : "text-white/85 hover:text-cyan-300"
                  }`}
                  aria-expanded={active}
                  aria-controls={`mega-${c.id}`}
                >
                  <Icon className="h-5 w-5" />
                  <span className="whitespace-nowrap">{c.title}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Mega Panel (desktop) */}
      {!isMobile && (
        <div
          onMouseLeave={() => setOpen(null)}
          className={`absolute left-0 right-0 top-[calc(100%+8px)] z-50 transition-opacity duration-150 ${
            open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
          }`}
        >
          {CATS.map((c) => {
            const visible = open === c.id;
            return (
              <div
                key={c.id}
                id={`mega-${c.id}`}
                role="region"
                aria-hidden={!visible}
                className={`w-full overflow-hidden ${visible ? "block" : "hidden"}`}
              >
                <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md shadow-[0_15px_60px_rgba(0,0,0,.35)] p-6">
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                    {c.columns.map((col, idx) => (
                      <div key={idx}>
                        {col.heading && (
                          <h4 className="text-white/80 text-sm mb-3 font-semibold tracking-wide">
                            {col.heading}
                          </h4>
                        )}
                        <ul className="space-y-2">
                          {col.items.map((item) => (
                            <li key={item.title}>
                              <a
                                href={item.href}
                                className="flex items-center gap-3 rounded-lg px-2 py-1.5 text-white/85 hover:text-cyan-300 hover:bg-white/5 transition"
                              >
                                <span className="relative inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full ring-1 ring-white/20 overflow-hidden bg-white/10">
                                  <img
                                    src={item.img}
                                    alt={item.title}
                                    className="h-full w-full object-cover"
                                    loading="lazy"
                                  />
                                </span>
                                <span className="text-sm">{item.title}</span>
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Mobile Accordion Panels */}
      {isMobile && (
        <div className="mt-2 space-y-2">
          {CATS.map((c) => {
            const expanded = open === c.id;
            const Icon = c.icon ?? Sparkles;
            return (
              <div key={c.id} className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
                <button
                  onClick={() => setOpen((o) => (o === c.id ? null : c.id))}
                  className="w-full flex items-center justify-between px-4 py-3 text-left text-white/85"
                  aria-expanded={expanded}
                  aria-controls={`mega-m-${c.id}`}
                >
                  <span className="flex items-center gap-2">
                    <Icon className="h-5 w-5" />
                    {c.title}
                  </span>
                  <span className={`transition-transform ${expanded ? "rotate-180" : ""}`}>⌃</span>
                </button>
                <div
                  id={`mega-m-${c.id}`}
                  className={`grid grid-cols-2 gap-4 px-4 pb-4 transition-all ${
                    expanded ? "max-h-[800px] opacity-100 pt-1" : "max-h-0 opacity-0 overflow-hidden"
                  }`}
                >
                  {c.columns.map((col, idx) => (
                    <div key={idx}>
                      {col.heading && (
                        <h4 className="text-white/75 text-xs mb-2 font-semibold">{col.heading}</h4>
                      )}
                      <ul className="space-y-1.5">
                        {col.items.map((item) => (
                          <li key={item.title}>
                            <a
                              href={item.href}
                              className="flex items-center gap-2 rounded px-2 py-1 text-[13px] text-white/85 hover:text-cyan-300 hover:bg-white/5"
                            >
                              <span className="relative inline-flex h-8 w-8 shrink-0 rounded-full ring-1 ring-white/20 overflow-hidden bg-white/10">
                                <img
                                  src={item.img}
                                  alt={item.title}
                                  className="h-full w-full object-cover"
                                  loading="lazy"
                                />
                              </span>
                              {item.title}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
