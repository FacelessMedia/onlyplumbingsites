"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Search, Calendar, Clock, ArrowRight, X } from "lucide-react";
import { Input } from "@/components/ui/input";

type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
};

export default function BlogFilters({ posts }: { posts: BlogPost[] }) {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const categories = useMemo(() => {
    const cats = Array.from(new Set(posts.map((p) => p.category)));
    return cats.sort();
  }, [posts]);

  const filtered = useMemo(() => {
    let result = posts;
    if (activeCategory) {
      result = result.filter((p) => p.category === activeCategory);
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.excerpt.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      );
    }
    return result;
  }, [posts, activeCategory, search]);

  return (
    <div>
      {/* Search + Filters */}
      <div className="mb-8 space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <Input
            type="text"
            placeholder="Search articles..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10"
          />
          {search && (
            <button
              onClick={() => setSearch("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiveCategory(null)}
            className={`rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
              !activeCategory
                ? "bg-orange text-white"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            All ({posts.length})
          </button>
          {categories.map((cat) => {
            const count = posts.filter((p) => p.category === cat).length;
            return (
              <button
                key={cat}
                onClick={() =>
                  setActiveCategory(activeCategory === cat ? null : cat)
                }
                className={`rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
                  activeCategory === cat
                    ? "bg-orange text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {cat} ({count})
              </button>
            );
          })}
        </div>
      </div>

      {/* Results Count */}
      {(search || activeCategory) && (
        <p className="mb-6 text-sm text-slate-500">
          Showing {filtered.length} of {posts.length} articles
          {activeCategory && (
            <>
              {" "}
              in <span className="font-medium text-orange">{activeCategory}</span>
            </>
          )}
          {search && (
            <>
              {" "}
              matching &ldquo;
              <span className="font-medium text-navy">{search}</span>&rdquo;
            </>
          )}
        </p>
      )}

      {/* Posts */}
      <div className="space-y-8">
        {filtered.length === 0 ? (
          <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 p-12 text-center">
            <p className="text-lg font-semibold text-navy">No articles found</p>
            <p className="mt-2 text-sm text-slate-500">
              Try a different search term or category.
            </p>
            <button
              onClick={() => {
                setSearch("");
                setActiveCategory(null);
              }}
              className="mt-4 text-sm font-medium text-orange hover:text-orange-hover"
            >
              Clear all filters
            </button>
          </div>
        ) : (
          filtered.map((post) => (
            <article
              key={post.slug}
              className="group rounded-xl border border-slate-200 bg-white p-6 transition-all hover:border-orange/30 hover:shadow-md sm:p-8"
            >
              <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500">
                <span className="rounded-full bg-orange/10 px-3 py-1 text-xs font-medium text-orange">
                  {post.category}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="h-3.5 w-3.5" />
                  {new Date(post.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" />
                  {post.readTime}
                </span>
              </div>

              <h2 className="mt-3 text-xl font-bold text-navy sm:text-2xl">
                <Link
                  href={`/blog/${post.slug}`}
                  className="transition-colors hover:text-orange"
                >
                  {post.title}
                </Link>
              </h2>

              <p className="mt-3 text-slate-500">{post.excerpt}</p>

              <Link
                href={`/blog/${post.slug}`}
                className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-orange transition-colors hover:text-orange-hover"
              >
                Read Article
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </article>
          ))
        )}
      </div>
    </div>
  );
}
