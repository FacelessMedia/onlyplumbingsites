"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Search, TrendingUp, ArrowRight, Phone } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type Keyword = {
  keyword: string;
  volume: string;
  competition: "Low" | "Medium" | "High";
  cpc: string;
  category: string;
};

const keywords: Keyword[] = [
  // Emergency / Urgent
  { keyword: "emergency plumber near me", volume: "90,500", competition: "High", cpc: "$35-65", category: "Emergency" },
  { keyword: "24 hour plumber", volume: "40,500", competition: "High", cpc: "$30-55", category: "Emergency" },
  { keyword: "emergency plumber", volume: "33,100", competition: "High", cpc: "$35-60", category: "Emergency" },
  { keyword: "plumber near me now", volume: "22,200", competition: "High", cpc: "$25-50", category: "Emergency" },
  { keyword: "after hours plumber", volume: "6,600", competition: "Medium", cpc: "$20-40", category: "Emergency" },
  { keyword: "burst pipe repair", volume: "4,400", competition: "Medium", cpc: "$15-35", category: "Emergency" },
  // General
  { keyword: "plumber near me", volume: "1,500,000", competition: "High", cpc: "$20-45", category: "General" },
  { keyword: "plumbing companies near me", volume: "201,000", competition: "High", cpc: "$18-40", category: "General" },
  { keyword: "local plumber", volume: "74,000", competition: "High", cpc: "$15-35", category: "General" },
  { keyword: "best plumber near me", volume: "49,500", competition: "High", cpc: "$20-45", category: "General" },
  { keyword: "residential plumber", volume: "12,100", competition: "Medium", cpc: "$12-30", category: "General" },
  { keyword: "licensed plumber near me", volume: "9,900", competition: "Medium", cpc: "$15-35", category: "General" },
  { keyword: "affordable plumber near me", volume: "8,100", competition: "Medium", cpc: "$12-28", category: "General" },
  // Drain
  { keyword: "drain cleaning near me", volume: "110,000", competition: "High", cpc: "$15-35", category: "Drain" },
  { keyword: "drain cleaning", volume: "90,500", competition: "High", cpc: "$12-30", category: "Drain" },
  { keyword: "clogged drain", volume: "74,000", competition: "Medium", cpc: "$10-25", category: "Drain" },
  { keyword: "sewer line repair", volume: "22,200", competition: "Medium", cpc: "$18-40", category: "Drain" },
  { keyword: "hydro jetting", volume: "18,100", competition: "Medium", cpc: "$12-28", category: "Drain" },
  { keyword: "sewer camera inspection", volume: "14,800", competition: "Low", cpc: "$10-22", category: "Drain" },
  { keyword: "drain snake service", volume: "6,600", competition: "Low", cpc: "$8-18", category: "Drain" },
  // Water Heater
  { keyword: "water heater repair", volume: "110,000", competition: "High", cpc: "$18-40", category: "Water Heater" },
  { keyword: "water heater installation", volume: "90,500", competition: "High", cpc: "$20-45", category: "Water Heater" },
  { keyword: "tankless water heater installation", volume: "40,500", competition: "Medium", cpc: "$15-35", category: "Water Heater" },
  { keyword: "water heater replacement", volume: "33,100", competition: "Medium", cpc: "$18-38", category: "Water Heater" },
  { keyword: "hot water heater not working", volume: "22,200", competition: "Medium", cpc: "$12-28", category: "Water Heater" },
  { keyword: "tankless water heater cost", volume: "18,100", competition: "Low", cpc: "$8-20", category: "Water Heater" },
  // Leak
  { keyword: "water leak repair", volume: "40,500", competition: "High", cpc: "$15-35", category: "Leak" },
  { keyword: "pipe leak repair", volume: "22,200", competition: "Medium", cpc: "$12-30", category: "Leak" },
  { keyword: "slab leak repair", volume: "18,100", competition: "Medium", cpc: "$20-45", category: "Leak" },
  { keyword: "leak detection", volume: "33,100", competition: "Medium", cpc: "$15-35", category: "Leak" },
  { keyword: "gas leak plumber", volume: "9,900", competition: "Medium", cpc: "$18-40", category: "Leak" },
  // Fixtures
  { keyword: "toilet repair", volume: "74,000", competition: "Medium", cpc: "$8-20", category: "Fixtures" },
  { keyword: "faucet installation", volume: "33,100", competition: "Low", cpc: "$8-18", category: "Fixtures" },
  { keyword: "toilet installation", volume: "27,100", competition: "Medium", cpc: "$10-22", category: "Fixtures" },
  { keyword: "garbage disposal installation", volume: "22,200", competition: "Low", cpc: "$8-18", category: "Fixtures" },
  { keyword: "bathroom remodel plumber", volume: "9,900", competition: "Medium", cpc: "$12-28", category: "Fixtures" },
  // Pipe
  { keyword: "pipe repair", volume: "27,100", competition: "Medium", cpc: "$12-28", category: "Pipe" },
  { keyword: "repiping", volume: "22,200", competition: "Medium", cpc: "$15-35", category: "Pipe" },
  { keyword: "frozen pipe repair", volume: "14,800", competition: "Medium", cpc: "$12-30", category: "Pipe" },
  { keyword: "copper pipe repair", volume: "8,100", competition: "Low", cpc: "$10-22", category: "Pipe" },
  { keyword: "pex repiping", volume: "6,600", competition: "Low", cpc: "$10-22", category: "Pipe" },
  // Commercial
  { keyword: "commercial plumber", volume: "18,100", competition: "Medium", cpc: "$15-35", category: "Commercial" },
  { keyword: "commercial plumbing services", volume: "9,900", competition: "Medium", cpc: "$12-30", category: "Commercial" },
  { keyword: "commercial drain cleaning", volume: "4,400", competition: "Low", cpc: "$12-25", category: "Commercial" },
  { keyword: "restaurant plumber", volume: "2,900", competition: "Low", cpc: "$10-22", category: "Commercial" },
  // Marketing
  { keyword: "plumbing marketing", volume: "1,300", competition: "Medium", cpc: "$8-18", category: "Marketing" },
  { keyword: "plumber SEO", volume: "720", competition: "Medium", cpc: "$10-22", category: "Marketing" },
  { keyword: "plumbing website design", volume: "590", competition: "Medium", cpc: "$8-18", category: "Marketing" },
  { keyword: "plumber advertising", volume: "480", competition: "Low", cpc: "$6-15", category: "Marketing" },
  { keyword: "how to get more plumbing customers", volume: "390", competition: "Low", cpc: "$5-12", category: "Marketing" },
  { keyword: "plumbing lead generation", volume: "320", competition: "Medium", cpc: "$8-18", category: "Marketing" },
];

const categories = [...new Set(keywords.map((k) => k.category))];

export default function PlumbingKeywordsPage() {
  const [search, setSearch] = useState("");
  const [selectedCat, setSelectedCat] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return keywords.filter((k) => {
      const matchSearch = !search || k.keyword.toLowerCase().includes(search.toLowerCase());
      const matchCat = !selectedCat || k.category === selectedCat;
      return matchSearch && matchCat;
    });
  }, [search, selectedCat]);

  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-700 bg-navy-light px-4 py-1.5">
              <Search className="h-4 w-4 text-orange" />
              <span className="text-sm font-medium text-slate-300">
                Free Keyword Database
              </span>
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Plumbing <span className="text-orange">Keywords</span> Database
            </h1>
            <p className="mt-4 text-lg text-slate-300">
              {keywords.length}+ plumbing keywords with search volume, competition,
              and CPC estimates. Find what homeowners actually search for.
            </p>
          </div>
        </div>
      </section>

      {/* Filters + Table */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="relative max-w-sm flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <Input
                placeholder="Search keywords..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCat(null)}
                className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                  !selectedCat
                    ? "bg-orange text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                All ({keywords.length})
              </button>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCat(cat === selectedCat ? null : cat)}
                  className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                    selectedCat === cat
                      ? "bg-orange text-white"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {cat} ({keywords.filter((k) => k.category === cat).length})
                </button>
              ))}
            </div>
          </div>

          {/* Results count */}
          <p className="mt-4 text-sm text-slate-400">
            Showing {filtered.length} of {keywords.length} keywords
          </p>

          {/* Table */}
          <div className="mt-6 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-slate-200">
                  <th className="pb-3 pr-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Keyword
                  </th>
                  <th className="pb-3 pr-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Volume/mo
                  </th>
                  <th className="pb-3 pr-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Competition
                  </th>
                  <th className="pb-3 pr-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                    CPC
                  </th>
                  <th className="pb-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Category
                  </th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((k) => (
                  <tr
                    key={k.keyword}
                    className="border-b border-slate-100 hover:bg-slate-50"
                  >
                    <td className="py-3 pr-4 text-sm font-medium text-navy">
                      {k.keyword}
                    </td>
                    <td className="py-3 pr-4 text-sm text-slate-600">
                      {k.volume}
                    </td>
                    <td className="py-3 pr-4">
                      <span
                        className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                          k.competition === "High"
                            ? "bg-red-100 text-red-700"
                            : k.competition === "Medium"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-green-100 text-green-700"
                        }`}
                      >
                        {k.competition}
                      </span>
                    </td>
                    <td className="py-3 pr-4 text-sm text-slate-600">
                      {k.cpc}
                    </td>
                    <td className="py-3 text-xs text-slate-400">
                      {k.category}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* CTA */}
          <div className="mt-12 rounded-xl bg-navy p-8 text-center">
            <TrendingUp className="mx-auto h-8 w-8 text-orange" />
            <h2 className="mt-4 text-xl font-bold text-white">
              Want to Rank for These Keywords?
            </h2>
            <p className="mt-2 text-sm text-slate-300">
              Book a free strategy session and I&apos;ll show you which keywords
              you should target based on your market, competition, and budget.
            </p>
            <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Button
                asChild
                className="bg-orange text-white hover:bg-orange-hover"
              >
                <Link href="/book">
                  <Phone className="mr-2 h-4 w-4" />
                  Book Free Strategy Session
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-slate-600 text-slate-300 hover:border-white hover:bg-transparent hover:text-white"
              >
                <Link href="/growth-report">
                  Get Free Growth Report
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
