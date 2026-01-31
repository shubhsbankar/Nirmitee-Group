// src/app/ventures/leozkate/CategoryBrowse.tsx
"use client";

import { useMemo, useState } from "react";
import SearchPanel from "./SearchPanel";
import CategoryMegaNav from "./CategoryMegaNav";

type Cat = { title: string; img: string };

export default function CategoryBrowse() {
  /* ----- CATEGORY TILES SHOWN INSIDE THE SEARCH PANEL ----- */
  const tiles: Cat[] = [
    { title: "Cluster Rings", img: "/images/leozkate/categories/cluster.jpeg" },
    { title: "Bands", img: "/images/leozkate/categories/bands.jpeg" },
    { title: "Engagement Rings", img: "/images/leozkate/categories/engagement.jpeg" },
    { title: "Necklace", img: "/images/leozkate/categories/necklace.jpeg" },
  ];

  const popular = ["Trendy Mangalsutras", "Gold Chain", "Diamond Rings", "Under ₹30k"];

  /* ----- SEARCH STATE ----- */
  const [q, setQ] = useState("");
  const filtered = useMemo(() => {
    if (!q.trim()) return tiles;
    return tiles.filter((c) => c.title.toLowerCase().includes(q.toLowerCase()));
  }, [q, tiles]);

  return (
    <section className="relative w-full pt-10 pb-20">
      {/* 🔮 Background Glow Effect */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-16 -left-40 w-[520px] h-[520px] rounded-full bg-cyan-500/20 blur-[150px] animate-pulse" />
        <div className="absolute bottom-10 -right-40 w-[420px] h-[420px] rounded-full bg-purple-500/20 blur-[150px] animate-pulse delay-700" />
      </div>

      {/* 🔎 SEARCH PANEL (FULL WIDTH, ON TOP) */}
      <div className="w-full px-6">
        <SearchPanel
          value={q}
          onChange={setQ}
          popular={popular}
          tiles={filtered}         // use filtered to react to typing
          onTileClick={(title) => setQ(title)}
        />
      </div>

      {/* 🧭 TANISHQ-STYLE MEGA MENU (FULL WIDTH, BELOW) */}
      <div className="w-full px-6 mt-6">
        <CategoryMegaNav />
      </div>
    </section>
  );
}
