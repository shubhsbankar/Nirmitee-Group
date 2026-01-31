"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function FiltersBar({ basePath, q }: { basePath: string; q?: string }) {
  const router = useRouter();
  const params = useSearchParams();
  const price = params.get("price") ?? "";
  const gender = params.get("gender") ?? "";
  const sort = params.get("sort") ?? "best";

  function setParam(key: string, value: string) {
    const sp = new URLSearchParams(Array.from(params.entries()));
    if (q) sp.set("q", q);
    value ? sp.set(key, value) : sp.delete(key);
    router.push(`${basePath}?${sp.toString()}`, { scroll: false });
  }

  return (
    <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4">
      <Select label="Sort" value={sort} onChange={(v) => setParam("sort", v)}
        options={[["best","Best Matches"],["priceAsc","Price: Low to High"],["priceDesc","Price: High to Low"]]} />
      <Select label="Price" value={price} onChange={(v)=>setParam("price",v)}
        options={[["","Any"],["<20000","Under ₹20k"],["20000-50000","₹20k–₹50k"],[">50000","Above ₹50k"]]} />
      <Select label="Gender" value={gender} onChange={(v)=>setParam("gender",v)}
        options={[["","All"],["women","Women"],["men","Men"],["kids","Kids"]]} />
    </div>
  );
}

function Select({ label, value, onChange, options }:{ label: string; value: string; onChange: (v: string)=>void; options: [string,string][]; }) {
  return (
    <label className="text-xs text-white/70 flex items-center gap-2">
      {label}:
      <select value={value} onChange={(e)=>onChange(e.target.value)} className="bg-white/5 border border-white/15 rounded-md text-white/90 text-xs px-2 py-1">
        {options.map(([v,t]) => <option key={v} value={v}>{t}</option>)}
      </select>
    </label>
  );
}
