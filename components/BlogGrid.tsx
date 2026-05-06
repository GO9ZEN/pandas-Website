"use client";

import { useState, useMemo } from "react";
import { Post } from "@/lib/medium";

const INITIAL_COUNT = 6;
const LOAD_MORE_COUNT = 6;

const categories = [
  "All",
  "Mindset",
  "Discipline",
  "Success",
  "Growth",
  "Reality",
];

const categoryColors: Record<string, string> = {
  Success: "bg-[#1a1a0a] text-[#C9A84C] border border-[#3a3210]",
  Mindset: "bg-[#0a1a0a] text-[#7ac47a] border border-[#1a3a1a]",
  Discipline: "bg-[#0a0a1a] text-[#7a8fc4] border border-[#1a1a3a]",
  Growth: "bg-[#1a0a1a] text-[#b47ac4] border border-[#3a1a3a]",
  Reality: "bg-[#1a0a0a] text-[#c47a7a] border border-[#3a1a1a]",
};

export default function BlogGrid({ posts }: { posts: Post[] }) {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  const filtered = useMemo(() => {
    return posts.filter((p) => {
      const matchSearch = p.title.toLowerCase().includes(search.toLowerCase());
      const matchCategory =
        activeCategory === "All" || p.category === activeCategory;
      return matchSearch && matchCategory;
    });
  }, [posts, search, activeCategory]);

  const handleSearch = (val: string) => {
    setSearch(val);
    setVisibleCount(INITIAL_COUNT);
  };

  const handleCategory = (cat: string) => {
    setActiveCategory(cat);
    setVisibleCount(INITIAL_COUNT);
  };

  const handleClear = () => {
    setSearch("");
    setActiveCategory("All");
    setVisibleCount(INITIAL_COUNT);
  };

  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;
  const remaining = filtered.length - visibleCount;

  return (
    <div className="min-h-screen px-6 py-24 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-12">
        <p className="text-[11px] tracking-[0.25em] text-gold/60 uppercase mb-3">
          Daily Power
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-4">
          Read. Think. <span className="text-gold">Act.</span>
        </h1>
        <p className="text-[#666] text-sm max-w-lg leading-relaxed">
          Short. Deep. Straight to the point. Articles that make you think and
          push you to act.
        </p>
      </div>

      {/* Search + Filter */}
      <div className="flex flex-col sm:flex-row gap-4 mb-10">
        {/* Search */}
        <div className="relative flex-1 max-w-md">
          <input
            type="text"
            value={search}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Search articles..."
            suppressHydrationWarning
            className="w-full bg-[#111] border border-[#2a2a2a] rounded-lg px-4 py-3 pl-10 text-sm text-white placeholder-[#444] focus:outline-none focus:border-gold/50 transition-colors"
          />
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#444] text-sm">
            ⌕
          </span>
          {search && (
            <button
              onClick={() => handleSearch("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#444] hover:text-white transition-colors text-sm"
            >
              ✕
            </button>
          )}
        </div>

        {/* Category filter */}
        <div className="flex items-center gap-2 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategory(cat)}
              className={`text-xs px-4 py-2 rounded-full border transition-all duration-200 ${
                activeCategory === cat
                  ? "border-gold text-gold bg-gold/10"
                  : "border-[#2a2a2a] text-[#555] hover:border-[#444] hover:text-[#888]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Results count */}
      <div className="mb-8 flex items-center justify-between">
        <p className="text-[11px] text-[#444] tracking-wider uppercase">
          Showing {visible.length} of {filtered.length}{" "}
          {filtered.length === 1 ? "article" : "articles"}
        </p>
        {(search || activeCategory !== "All") && (
          <button
            onClick={handleClear}
            className="text-[11px] text-[#555] hover:text-gold transition-colors tracking-wide"
          >
            Clear filters ✕
          </button>
        )}
      </div>

      {/* Empty state */}
      {filtered.length === 0 && (
        <div className="text-center py-24">
          <p className="text-5xl mb-4">🐼</p>
          <p className="text-white font-medium mb-2">No articles found.</p>
          <p className="text-[#666] text-sm mb-6">
            Try a different search or category.
          </p>
          <button
            onClick={handleClear}
            className="text-sm border border-gold text-gold px-6 py-2.5 rounded hover:bg-gold hover:text-black transition-all duration-200"
          >
            Clear filters
          </button>
        </div>
      )}

      {/* Articles grid */}
      {filtered.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((post, index) => (
            <div
              key={post.id || `post-${index}`}
              onClick={() => window.open(post.url, "_blank")}
              className="group bg-[#111] border border-[#1e1e1e] rounded-lg overflow-hidden hover:border-gold/30 transition-all duration-300 cursor-pointer flex flex-col"
            >
              {/* Thumbnail */}
              {post.thumbnail && (
                <div
                  className="relative overflow-hidden bg-[#0a0a0a] flex-shrink-0"
                  style={{ paddingTop: "52%" }}
                >
                  <img
                    src={post.thumbnail}
                    alt={post.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent" />
                </div>
              )}

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                {/* Top — category + read time */}
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`text-[10px] px-2 py-1 rounded tracking-wider uppercase font-medium ${categoryColors[post.category] ?? categoryColors["Mindset"]}`}
                  >
                    {post.category}
                  </span>
                  <span className="text-[11px] text-[#555]">
                    {post.readTime} read
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-sm font-medium text-[#ccc] leading-snug group-hover:text-white transition-colors line-clamp-3 mb-4 flex-1">
                  {post.title}
                </h3>

                {/* Bottom */}
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-[#1e1e1e]">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-[#222] border border-[#333] flex items-center justify-center">
                      <span className="text-[9px] text-[#888] font-bold">
                        M
                      </span>
                    </div>
                    <span className="text-[11px] text-[#555]">Medium</span>
                  </div>
                  <span className="text-[11px] text-[#444] group-hover:text-gold transition-colors">
                    Read &#8594;
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Load more */}
      {hasMore && (
        <div className="text-center mt-12">
          <button
            onClick={() => setVisibleCount((c) => c + LOAD_MORE_COUNT)}
            className="px-10 py-3 border border-gold text-gold text-sm font-semibold tracking-widest uppercase rounded hover:bg-gold hover:text-black transition-all duration-200"
          >
            Load More ({remaining} remaining)
          </button>
        </div>
      )}

      {/* All loaded */}
      {!hasMore && filtered.length > INITIAL_COUNT && (
        <div className="text-center mt-12">
          <p className="text-[11px] text-[#333] tracking-[0.2em] uppercase mb-4">
            You have read all {filtered.length} articles
          </p>
          <div
            onClick={() =>
              window.open("https://medium.com/@pandas_lk", "_blank")
            }
            className="inline-block text-sm border border-gold text-gold px-8 py-3 rounded hover:bg-gold hover:text-black transition-all duration-200 tracking-widest uppercase cursor-pointer"
          >
            Follow on Medium &#8594;
          </div>
        </div>
      )}

      {/* Bottom CTA — when fewer than initial */}
      {!hasMore && filtered.length <= INITIAL_COUNT && filtered.length > 0 && (
        <div className="text-center mt-16 pb-8">
          <p className="text-[11px] text-[#333] tracking-[0.2em] uppercase mb-4">
            More articles coming soon
          </p>
          <div
            onClick={() =>
              window.open("https://medium.com/@pandas_lk", "_blank")
            }
            className="inline-block text-sm border border-gold text-gold px-8 py-3 rounded hover:bg-gold hover:text-black transition-all duration-200 tracking-widest uppercase cursor-pointer"
          >
            Follow on Medium &#8594;
          </div>
        </div>
      )}
    </div>
  );
}
