"use client";

import { useState, useMemo } from "react";
import { Video } from "@/lib/youtube";

const INITIAL_COUNT = 8;
const LOAD_MORE_COUNT = 8;

const categories = [
  "All",
  "Success",
  "Discipline",
  "Mindset",
  "Comeback",
  "Reality",
];

function guessCategory(title: string): string {
  const t = title.toLowerCase();
  if (
    t.includes("success") ||
    t.includes("win") ||
    t.includes("built") ||
    t.includes("rich")
  )
    return "Success";
  if (
    t.includes("discipline") ||
    t.includes("consistent") ||
    t.includes("habit") ||
    t.includes("routine")
  )
    return "Discipline";
  if (
    t.includes("mind") ||
    t.includes("think") ||
    t.includes("focus") ||
    t.includes("meditat")
  )
    return "Mindset";
  if (
    t.includes("comeback") ||
    t.includes("lost") ||
    t.includes("fail") ||
    t.includes("broke")
  )
    return "Comeback";
  if (
    t.includes("truth") ||
    t.includes("real") ||
    t.includes("nobody") ||
    t.includes("stop")
  )
    return "Reality";
  return "Mindset";
}

const categoryColors: Record<string, string> = {
  Success: "bg-[#1a1a0a] text-[#C9A84C] border border-[#3a3210]",
  Discipline: "bg-[#0a0a1a] text-[#7a8fc4] border border-[#1a1a3a]",
  Mindset: "bg-[#0a1a0a] text-[#7ac47a] border border-[#1a3a1a]",
  Comeback: "bg-[#1a0a0a] text-[#c47a7a] border border-[#3a1a1a]",
  Reality: "bg-[#1a0a1a] text-[#b47ac4] border border-[#3a1a3a]",
};

export default function StoriesGrid({ videos }: { videos: Video[] }) {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  const enriched = useMemo(
    () => videos.map((v) => ({ ...v, category: guessCategory(v.title) })),
    [videos],
  );

  const filtered = useMemo(() => {
    return enriched.filter((v) => {
      const matchSearch = v.title.toLowerCase().includes(search.toLowerCase());
      const matchCategory =
        activeCategory === "All" || v.category === activeCategory;
      return matchSearch && matchCategory;
    });
  }, [enriched, search, activeCategory]);

  // Reset visible count when filters change
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

  const loadMore = () => {
    setVisibleCount((c) => c + LOAD_MORE_COUNT);
  };

  return (
    <div className="min-h-screen px-6 py-24 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-12">
        <p className="text-[11px] tracking-[0.25em] text-gold/60 uppercase mb-3">
          True Stories
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-4">
          Real People. <span className="text-gold">Real Wins.</span>
        </h1>
        <p className="text-[#666] text-sm max-w-lg leading-relaxed">
          Every story here is proof that it is possible. Watch. Learn. Act.
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
            placeholder="Search stories..."
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
      <div className="mb-6 flex items-center justify-between">
        <p className="text-[11px] text-[#444] tracking-wider uppercase">
          Showing {visible.length} of {filtered.length}{" "}
          {filtered.length === 1 ? "story" : "stories"}
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
          <p className="text-white font-medium mb-2">No stories found.</p>
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

      {/* Video grid */}
      {filtered.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {visible.map((video) => (
            <div
              key={video.id}
              className="group bg-[#111] border border-[#1e1e1e] rounded-lg overflow-hidden hover:border-gold/30 transition-all duration-300 cursor-pointer"
              onClick={() =>
                window.open(
                  `https://www.youtube.com/watch?v=${video.youtubeId}`,
                  "_blank",
                )
              }
            >
              {/* Thumbnail */}
              <div
                className="relative overflow-hidden bg-[#0a0a0a]"
                style={{ paddingTop: "56.25%" }}
              >
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                />

                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-gold/90 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                    <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[12px] border-l-black border-b-[6px] border-b-transparent ml-0.5" />
                  </div>
                </div>

                {/* Category badge */}
                <div className="absolute top-2 left-2">
                  <span
                    className={`text-[9px] px-2 py-0.5 rounded tracking-wider uppercase font-medium ${categoryColors[video.category]}`}
                  >
                    {video.category}
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="p-4">
                <h3 className="text-sm font-medium text-[#ccc] leading-snug group-hover:text-white transition-colors line-clamp-2">
                  {video.title}
                </h3>
                <div className="flex items-center gap-2 mt-3">
                  <div className="w-3 h-3 rounded-full bg-[#FF0000] flex-shrink-0" />
                  <span className="text-[10px] text-[#555]">
                    Watch on YouTube &#8594;
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
            onClick={loadMore}
            className="px-10 py-3 border border-gold text-gold text-sm font-semibold tracking-widest uppercase rounded hover:bg-gold hover:text-black transition-all duration-200"
          >
            Load More ({remaining} remaining)
          </button>
        </div>
      )}

      {/* All loaded message */}
      {!hasMore && filtered.length > INITIAL_COUNT && (
        <div className="text-center mt-12">
          <p className="text-[11px] text-[#333] tracking-[0.2em] uppercase mb-4">
            You have seen all {filtered.length} stories
          </p>
          <div
            onClick={() =>
              window.open("https://www.youtube.com/@pandas_lk", "_blank")
            }
            className="inline-block text-sm border border-gold text-gold px-8 py-3 rounded hover:bg-gold hover:text-black transition-all duration-200 tracking-widest uppercase cursor-pointer"
          >
            Visit YouTube for More &#8594;
          </div>
        </div>
      )}

      {/* Bottom CTA — when less than initial count */}
      {!hasMore && filtered.length <= INITIAL_COUNT && filtered.length > 0 && (
        <div className="text-center mt-16 pb-8">
          <p className="text-[11px] text-[#333] tracking-[0.2em] uppercase mb-4">
            Want more stories?
          </p>
          <div
            onClick={() =>
              window.open("https://www.youtube.com/@pandas_lk", "_blank")
            }
            className="inline-block text-sm border border-gold text-gold px-8 py-3 rounded hover:bg-gold hover:text-black transition-all duration-200 tracking-widest uppercase cursor-pointer"
          >
            Visit YouTube Channel &#8594;
          </div>
        </div>
      )}
    </div>
  );
}
