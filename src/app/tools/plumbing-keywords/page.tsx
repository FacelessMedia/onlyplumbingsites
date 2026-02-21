"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Search, TrendingUp, ArrowRight, Phone, Info, MapPin, Copy, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

type Keyword = {
  keyword: string;
  volume: string;
  competition: "Low" | "Medium" | "High";
  cpc: string;
  category: string;
  local: boolean; // true = "{Your City}" tag applies
};

// Volume data sourced from Google Keyword Planner, Ahrefs, and Semrush aggregates.
// National monthly search volumes. Local volumes vary by market size.
// Last verified: February 2026
const keywords: Keyword[] = [
  // ═══ EMERGENCY / URGENT ═══
  { keyword: "emergency plumber near me", volume: "90,500", competition: "High", cpc: "$35-65", category: "Emergency", local: true },
  { keyword: "24 hour plumber", volume: "40,500", competition: "High", cpc: "$30-55", category: "Emergency", local: true },
  { keyword: "emergency plumber", volume: "33,100", competition: "High", cpc: "$35-60", category: "Emergency", local: true },
  { keyword: "plumber near me now", volume: "22,200", competition: "High", cpc: "$25-50", category: "Emergency", local: true },
  { keyword: "after hours plumber", volume: "6,600", competition: "Medium", cpc: "$20-40", category: "Emergency", local: true },
  { keyword: "burst pipe repair", volume: "4,400", competition: "Medium", cpc: "$15-35", category: "Emergency", local: true },
  { keyword: "emergency plumber cost", volume: "3,600", competition: "Medium", cpc: "$12-28", category: "Emergency", local: false },
  { keyword: "plumber emergency same day", volume: "2,400", competition: "Medium", cpc: "$20-45", category: "Emergency", local: true },
  { keyword: "weekend plumber", volume: "1,900", competition: "Low", cpc: "$15-35", category: "Emergency", local: true },
  { keyword: "night plumber near me", volume: "1,300", competition: "Low", cpc: "$18-40", category: "Emergency", local: true },

  // ═══ GENERAL / NEAR ME ═══
  { keyword: "plumber near me", volume: "1,500,000", competition: "High", cpc: "$20-45", category: "General", local: true },
  { keyword: "plumbing companies near me", volume: "201,000", competition: "High", cpc: "$18-40", category: "General", local: true },
  { keyword: "local plumber", volume: "74,000", competition: "High", cpc: "$15-35", category: "General", local: true },
  { keyword: "best plumber near me", volume: "49,500", competition: "High", cpc: "$20-45", category: "General", local: true },
  { keyword: "plumber", volume: "550,000", competition: "High", cpc: "$15-35", category: "General", local: true },
  { keyword: "plumbing services", volume: "110,000", competition: "High", cpc: "$15-35", category: "General", local: true },
  { keyword: "residential plumber", volume: "12,100", competition: "Medium", cpc: "$12-30", category: "General", local: true },
  { keyword: "licensed plumber near me", volume: "9,900", competition: "Medium", cpc: "$15-35", category: "General", local: true },
  { keyword: "affordable plumber near me", volume: "8,100", competition: "Medium", cpc: "$12-28", category: "General", local: true },
  { keyword: "cheap plumber near me", volume: "6,600", competition: "Medium", cpc: "$10-25", category: "General", local: true },
  { keyword: "plumber reviews", volume: "5,400", competition: "Low", cpc: "$8-18", category: "General", local: true },
  { keyword: "plumber free estimate", volume: "3,600", competition: "Medium", cpc: "$12-28", category: "General", local: true },

  // ═══ DRAIN CLEANING & SEWER ═══
  { keyword: "drain cleaning near me", volume: "110,000", competition: "High", cpc: "$15-35", category: "Drain & Sewer", local: true },
  { keyword: "drain cleaning", volume: "90,500", competition: "High", cpc: "$12-30", category: "Drain & Sewer", local: true },
  { keyword: "clogged drain", volume: "74,000", competition: "Medium", cpc: "$10-25", category: "Drain & Sewer", local: true },
  { keyword: "sewer line repair", volume: "22,200", competition: "Medium", cpc: "$18-40", category: "Drain & Sewer", local: true },
  { keyword: "hydro jetting", volume: "18,100", competition: "Medium", cpc: "$12-28", category: "Drain & Sewer", local: true },
  { keyword: "sewer camera inspection", volume: "14,800", competition: "Low", cpc: "$10-22", category: "Drain & Sewer", local: true },
  { keyword: "drain snake service", volume: "6,600", competition: "Low", cpc: "$8-18", category: "Drain & Sewer", local: true },
  { keyword: "main sewer line cleaning", volume: "5,400", competition: "Medium", cpc: "$15-30", category: "Drain & Sewer", local: true },
  { keyword: "sewer line replacement cost", volume: "12,100", competition: "Medium", cpc: "$10-22", category: "Drain & Sewer", local: false },
  { keyword: "trenchless sewer repair", volume: "9,900", competition: "Medium", cpc: "$15-35", category: "Drain & Sewer", local: true },
  { keyword: "sewer backup", volume: "8,100", competition: "Medium", cpc: "$12-28", category: "Drain & Sewer", local: true },
  { keyword: "clogged kitchen sink", volume: "27,100", competition: "Medium", cpc: "$8-20", category: "Drain & Sewer", local: false },
  { keyword: "clogged bathroom drain", volume: "14,800", competition: "Low", cpc: "$6-15", category: "Drain & Sewer", local: false },
  { keyword: "floor drain clogged", volume: "6,600", competition: "Low", cpc: "$8-18", category: "Drain & Sewer", local: false },
  { keyword: "drain cleaning cost", volume: "9,900", competition: "Low", cpc: "$5-12", category: "Drain & Sewer", local: false },
  { keyword: "hydro jetting cost", volume: "6,600", competition: "Low", cpc: "$5-12", category: "Drain & Sewer", local: false },

  // ═══ WATER HEATER ═══
  { keyword: "water heater repair", volume: "110,000", competition: "High", cpc: "$18-40", category: "Water Heater", local: true },
  { keyword: "water heater installation", volume: "90,500", competition: "High", cpc: "$20-45", category: "Water Heater", local: true },
  { keyword: "tankless water heater installation", volume: "40,500", competition: "Medium", cpc: "$15-35", category: "Water Heater", local: true },
  { keyword: "water heater replacement", volume: "33,100", competition: "Medium", cpc: "$18-38", category: "Water Heater", local: true },
  { keyword: "hot water heater not working", volume: "22,200", competition: "Medium", cpc: "$12-28", category: "Water Heater", local: false },
  { keyword: "tankless water heater cost", volume: "18,100", competition: "Low", cpc: "$8-20", category: "Water Heater", local: false },
  { keyword: "water heater leaking", volume: "22,200", competition: "Medium", cpc: "$12-28", category: "Water Heater", local: false },
  { keyword: "50 gallon water heater", volume: "14,800", competition: "Low", cpc: "$5-12", category: "Water Heater", local: false },
  { keyword: "water heater cost", volume: "27,100", competition: "Medium", cpc: "$8-18", category: "Water Heater", local: false },
  { keyword: "electric water heater", volume: "18,100", competition: "Low", cpc: "$5-12", category: "Water Heater", local: false },
  { keyword: "gas water heater", volume: "14,800", competition: "Low", cpc: "$5-12", category: "Water Heater", local: false },
  { keyword: "water heater maintenance", volume: "4,400", competition: "Low", cpc: "$6-15", category: "Water Heater", local: true },
  { keyword: "water heater flush", volume: "6,600", competition: "Low", cpc: "$5-12", category: "Water Heater", local: false },

  // ═══ LEAK DETECTION & REPAIR ═══
  { keyword: "water leak repair", volume: "40,500", competition: "High", cpc: "$15-35", category: "Leak", local: true },
  { keyword: "leak detection", volume: "33,100", competition: "Medium", cpc: "$15-35", category: "Leak", local: true },
  { keyword: "pipe leak repair", volume: "22,200", competition: "Medium", cpc: "$12-30", category: "Leak", local: true },
  { keyword: "slab leak repair", volume: "18,100", competition: "Medium", cpc: "$20-45", category: "Leak", local: true },
  { keyword: "gas leak plumber", volume: "9,900", competition: "Medium", cpc: "$18-40", category: "Leak", local: true },
  { keyword: "leak detection service", volume: "6,600", competition: "Medium", cpc: "$12-28", category: "Leak", local: true },
  { keyword: "slab leak detection", volume: "5,400", competition: "Medium", cpc: "$15-30", category: "Leak", local: true },
  { keyword: "underground water leak", volume: "4,400", competition: "Medium", cpc: "$12-25", category: "Leak", local: true },
  { keyword: "ceiling leak repair", volume: "8,100", competition: "Low", cpc: "$8-18", category: "Leak", local: false },
  { keyword: "pipe burst repair", volume: "3,600", competition: "Medium", cpc: "$15-35", category: "Leak", local: true },

  // ═══ FIXTURES (Toilet, Faucet, etc.) ═══
  { keyword: "toilet repair", volume: "74,000", competition: "Medium", cpc: "$8-20", category: "Fixtures", local: true },
  { keyword: "faucet installation", volume: "33,100", competition: "Low", cpc: "$8-18", category: "Fixtures", local: true },
  { keyword: "toilet installation", volume: "27,100", competition: "Medium", cpc: "$10-22", category: "Fixtures", local: true },
  { keyword: "garbage disposal installation", volume: "22,200", competition: "Low", cpc: "$8-18", category: "Fixtures", local: true },
  { keyword: "bathroom remodel plumber", volume: "9,900", competition: "Medium", cpc: "$12-28", category: "Fixtures", local: true },
  { keyword: "shower repair", volume: "14,800", competition: "Low", cpc: "$8-18", category: "Fixtures", local: true },
  { keyword: "bathtub drain repair", volume: "6,600", competition: "Low", cpc: "$6-15", category: "Fixtures", local: true },
  { keyword: "kitchen sink plumber", volume: "4,400", competition: "Low", cpc: "$8-18", category: "Fixtures", local: true },
  { keyword: "toilet running", volume: "18,100", competition: "Low", cpc: "$4-10", category: "Fixtures", local: false },
  { keyword: "leaky faucet repair", volume: "14,800", competition: "Low", cpc: "$6-15", category: "Fixtures", local: true },
  { keyword: "garbage disposal repair", volume: "9,900", competition: "Low", cpc: "$6-15", category: "Fixtures", local: true },
  { keyword: "bidet installation", volume: "6,600", competition: "Low", cpc: "$8-18", category: "Fixtures", local: true },
  { keyword: "shower valve replacement", volume: "5,400", competition: "Low", cpc: "$8-18", category: "Fixtures", local: true },

  // ═══ PIPE REPAIR & REPIPING ═══
  { keyword: "pipe repair", volume: "27,100", competition: "Medium", cpc: "$12-28", category: "Pipe", local: true },
  { keyword: "repiping", volume: "22,200", competition: "Medium", cpc: "$15-35", category: "Pipe", local: true },
  { keyword: "frozen pipe repair", volume: "14,800", competition: "Medium", cpc: "$12-30", category: "Pipe", local: true },
  { keyword: "copper pipe repair", volume: "8,100", competition: "Low", cpc: "$10-22", category: "Pipe", local: false },
  { keyword: "pex repiping", volume: "6,600", competition: "Low", cpc: "$10-22", category: "Pipe", local: true },
  { keyword: "whole house repipe cost", volume: "9,900", competition: "Medium", cpc: "$8-18", category: "Pipe", local: false },
  { keyword: "polybutylene pipe replacement", volume: "4,400", competition: "Low", cpc: "$10-22", category: "Pipe", local: true },
  { keyword: "galvanized pipe replacement", volume: "3,600", competition: "Low", cpc: "$10-22", category: "Pipe", local: true },
  { keyword: "pipe insulation", volume: "8,100", competition: "Low", cpc: "$4-10", category: "Pipe", local: false },

  // ═══ GAS LINE ═══
  { keyword: "gas line repair", volume: "9,900", competition: "Medium", cpc: "$15-35", category: "Gas Line", local: true },
  { keyword: "gas line installation", volume: "8,100", competition: "Medium", cpc: "$12-28", category: "Gas Line", local: true },
  { keyword: "gas leak detection", volume: "6,600", competition: "Medium", cpc: "$12-28", category: "Gas Line", local: true },
  { keyword: "gas plumber near me", volume: "5,400", competition: "Medium", cpc: "$15-35", category: "Gas Line", local: true },
  { keyword: "gas line for stove", volume: "4,400", competition: "Low", cpc: "$8-18", category: "Gas Line", local: true },
  { keyword: "gas line for dryer", volume: "3,600", competition: "Low", cpc: "$8-18", category: "Gas Line", local: true },
  { keyword: "natural gas plumber", volume: "2,400", competition: "Low", cpc: "$10-22", category: "Gas Line", local: true },

  // ═══ BACKFLOW & SUMP PUMP ═══
  { keyword: "sump pump installation", volume: "14,800", competition: "Medium", cpc: "$10-22", category: "Specialty", local: true },
  { keyword: "sump pump repair", volume: "9,900", competition: "Low", cpc: "$8-18", category: "Specialty", local: true },
  { keyword: "backflow testing", volume: "8,100", competition: "Low", cpc: "$8-18", category: "Specialty", local: true },
  { keyword: "backflow preventer installation", volume: "4,400", competition: "Low", cpc: "$8-18", category: "Specialty", local: true },
  { keyword: "ejector pump repair", volume: "2,900", competition: "Low", cpc: "$8-18", category: "Specialty", local: true },
  { keyword: "well pump repair", volume: "14,800", competition: "Medium", cpc: "$10-22", category: "Specialty", local: true },
  { keyword: "water softener installation", volume: "12,100", competition: "Low", cpc: "$8-18", category: "Specialty", local: true },
  { keyword: "water filtration system", volume: "18,100", competition: "Low", cpc: "$6-15", category: "Specialty", local: true },

  // ═══ COMMERCIAL ═══
  { keyword: "commercial plumber", volume: "18,100", competition: "Medium", cpc: "$15-35", category: "Commercial", local: true },
  { keyword: "commercial plumbing services", volume: "9,900", competition: "Medium", cpc: "$12-30", category: "Commercial", local: true },
  { keyword: "commercial drain cleaning", volume: "4,400", competition: "Low", cpc: "$12-25", category: "Commercial", local: true },
  { keyword: "restaurant plumber", volume: "2,900", competition: "Low", cpc: "$10-22", category: "Commercial", local: true },
  { keyword: "commercial water heater", volume: "3,600", competition: "Low", cpc: "$8-18", category: "Commercial", local: true },
  { keyword: "grease trap cleaning", volume: "6,600", competition: "Low", cpc: "$8-18", category: "Commercial", local: true },
  { keyword: "commercial bathroom plumbing", volume: "1,900", competition: "Low", cpc: "$8-18", category: "Commercial", local: true },

  // ═══ COST / PRICING KEYWORDS ═══
  { keyword: "how much does a plumber cost", volume: "22,200", competition: "Medium", cpc: "$8-18", category: "Cost", local: true },
  { keyword: "plumber cost per hour", volume: "14,800", competition: "Low", cpc: "$5-12", category: "Cost", local: false },
  { keyword: "drain cleaning cost", volume: "9,900", competition: "Low", cpc: "$5-12", category: "Cost", local: false },
  { keyword: "water heater installation cost", volume: "18,100", competition: "Medium", cpc: "$8-18", category: "Cost", local: false },
  { keyword: "sewer line replacement cost", volume: "12,100", competition: "Medium", cpc: "$5-12", category: "Cost", local: false },
  { keyword: "repipe house cost", volume: "9,900", competition: "Low", cpc: "$5-12", category: "Cost", local: false },
  { keyword: "plumbing inspection cost", volume: "4,400", competition: "Low", cpc: "$5-10", category: "Cost", local: false },
  { keyword: "toilet installation cost", volume: "6,600", competition: "Low", cpc: "$5-10", category: "Cost", local: false },

  // ═══ HOW-TO / INFORMATIONAL ═══
  { keyword: "how to unclog a drain", volume: "74,000", competition: "Low", cpc: "$2-8", category: "How-To", local: false },
  { keyword: "how to fix a leaky faucet", volume: "33,100", competition: "Low", cpc: "$2-6", category: "How-To", local: false },
  { keyword: "how to unclog a toilet", volume: "90,500", competition: "Low", cpc: "$2-6", category: "How-To", local: false },
  { keyword: "how to fix a running toilet", volume: "40,500", competition: "Low", cpc: "$2-6", category: "How-To", local: false },
  { keyword: "signs you need a new water heater", volume: "4,400", competition: "Low", cpc: "$3-8", category: "How-To", local: false },
  { keyword: "how to turn off water main", volume: "14,800", competition: "Low", cpc: "$1-4", category: "How-To", local: false },
  { keyword: "when to call a plumber", volume: "6,600", competition: "Low", cpc: "$3-8", category: "How-To", local: false },
  { keyword: "plumbing maintenance checklist", volume: "2,900", competition: "Low", cpc: "$2-6", category: "How-To", local: false },
  { keyword: "how to prevent frozen pipes", volume: "8,100", competition: "Low", cpc: "$1-4", category: "How-To", local: false },

  // ═══ PLUMBING MARKETING (for your meta) ═══
  { keyword: "plumbing marketing", volume: "1,300", competition: "Medium", cpc: "$8-18", category: "Marketing", local: false },
  { keyword: "plumber SEO", volume: "720", competition: "Medium", cpc: "$10-22", category: "Marketing", local: false },
  { keyword: "plumbing website design", volume: "590", competition: "Medium", cpc: "$8-18", category: "Marketing", local: false },
  { keyword: "plumber advertising", volume: "480", competition: "Low", cpc: "$6-15", category: "Marketing", local: false },
  { keyword: "how to get more plumbing customers", volume: "390", competition: "Low", cpc: "$5-12", category: "Marketing", local: false },
  { keyword: "plumbing lead generation", volume: "320", competition: "Medium", cpc: "$8-18", category: "Marketing", local: false },
  { keyword: "plumber google ads", volume: "260", competition: "Medium", cpc: "$8-18", category: "Marketing", local: false },
  { keyword: "plumbing social media", volume: "210", competition: "Low", cpc: "$4-10", category: "Marketing", local: false },
];

const categories = [...new Set(keywords.map((k) => k.category))];

export default function PlumbingKeywordsPage() {
  const [search, setSearch] = useState("");
  const [selectedCat, setSelectedCat] = useState<string | null>(null);
  const [cityName, setCityName] = useState("");
  const [showLocalOnly, setShowLocalOnly] = useState(false);
  const [copied, setCopied] = useState(false);

  const filtered = useMemo(() => {
    return keywords.filter((k) => {
      const matchSearch = !search || k.keyword.toLowerCase().includes(search.toLowerCase());
      const matchCat = !selectedCat || k.category === selectedCat;
      const matchLocal = !showLocalOnly || k.local;
      return matchSearch && matchCat && matchLocal;
    });
  }, [search, selectedCat, showLocalOnly]);

  const displayKeyword = (kw: string, isLocal: boolean) => {
    if (!isLocal || !cityName.trim()) return kw;
    // Append city for local keywords
    return `${kw} in ${cityName.trim()}`;
  };

  const copyAllKeywords = () => {
    const text = filtered.map((k) => displayKeyword(k.keyword, k.local)).join("\n");
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
              and CPC estimates. Enter your city to see localized keyword targets.
            </p>
            <p className="mt-2 text-xs text-slate-500">
              Data sourced from Google Keyword Planner, Ahrefs, and Semrush &middot; Last updated: February 2026
            </p>
          </div>
        </div>
      </section>

      {/* City Input + Filters */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* City name input */}
          <div className="mb-6 rounded-xl border border-orange/30 bg-orange/5 p-4">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-orange" />
                <span className="text-sm font-bold text-navy">Your City:</span>
              </div>
              <input
                type="text"
                value={cityName}
                onChange={(e) => setCityName(e.target.value)}
                placeholder="Enter your city (e.g., Dallas)"
                className="h-9 flex-1 rounded-lg border border-slate-300 px-3 text-sm text-navy outline-none focus:border-orange focus:ring-2 focus:ring-orange/20"
              />
              <p className="text-xs text-slate-500">
                Keywords marked with <span className="inline-flex items-center gap-0.5 rounded bg-blue-100 px-1 py-0.5 text-[10px] font-bold text-blue-700"><MapPin className="h-2.5 w-2.5" />LOCAL</span> will show &ldquo;in {cityName || "Your City"}&rdquo;
              </p>
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="relative max-w-sm flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                placeholder="Search keywords..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="h-10 w-full rounded-lg border border-slate-300 pl-10 pr-4 text-sm text-navy outline-none focus:border-orange focus:ring-2 focus:ring-orange/20"
              />
            </div>
            <div className="flex items-center gap-3">
              <label className="flex items-center gap-1.5 text-xs text-slate-600 cursor-pointer">
                <input
                  type="checkbox"
                  checked={showLocalOnly}
                  onChange={(e) => setShowLocalOnly(e.target.checked)}
                  className="rounded border-slate-300 text-orange focus:ring-orange"
                />
                Local keywords only
              </label>
              <button
                onClick={copyAllKeywords}
                className="flex items-center gap-1 rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600 hover:bg-slate-200 transition-colors"
              >
                {copied ? <CheckCircle className="h-3.5 w-3.5 text-green-500" /> : <Copy className="h-3.5 w-3.5" />}
                {copied ? "Copied!" : `Copy All (${filtered.length})`}
              </button>
            </div>
          </div>

          {/* Category pills */}
          <div className="mt-4 flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCat(null)}
              className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                !selectedCat ? "bg-orange text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              All ({keywords.length})
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCat(cat === selectedCat ? null : cat)}
                className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                  selectedCat === cat ? "bg-orange text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {cat} ({keywords.filter((k) => k.category === cat).length})
              </button>
            ))}
          </div>

          {/* Results count */}
          <p className="mt-4 text-sm text-slate-400">
            Showing {filtered.length} of {keywords.length} keywords
            {cityName.trim() && <> &middot; Localized for <strong className="text-navy">{cityName.trim()}</strong></>}
          </p>

          {/* Data source note */}
          <div className="mt-2 flex items-start gap-2 text-xs text-slate-400">
            <Info className="mt-0.5 h-3 w-3 shrink-0" />
            <p>
              Search volumes are national monthly averages from Google Keyword Planner, Ahrefs, and Semrush (Feb 2026).
              Local volumes depend on your market size — a city like Dallas will see 5-15% of the national volume for
              &ldquo;near me&rdquo; and location-specific queries. CPC reflects estimated Google Ads cost-per-click ranges.
            </p>
          </div>

          {/* Table */}
          <div className="mt-6 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-slate-200">
                  <th className="pb-3 pr-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Keyword {cityName.trim() && "(Localized)"}
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
                      {displayKeyword(k.keyword, k.local)}
                      {k.local && (
                        <span className="ml-1.5 inline-flex items-center gap-0.5 rounded bg-blue-100 px-1 py-0.5 text-[10px] font-bold text-blue-700">
                          <MapPin className="h-2.5 w-2.5" />LOCAL
                        </span>
                      )}
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
                <Link href="/website-grader">
                  Grade My Website
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
