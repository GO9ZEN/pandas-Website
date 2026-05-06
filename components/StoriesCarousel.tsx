"use client";

import { useState, useEffect, useRef } from "react";
import { Video } from "@/lib/youtube";

const SCROLL_OPTIONS = [3, 6] as const;
type ScrollCount = (typeof SCROLL_OPTIONS)[number];

export default function StoriesCarousel({ stories }: { stories: Video[] }) {
  const [current, setCurrent] = useState(0);
  const [visibleCount, setVisibleCount] = useState<ScrollCount>(3);

  const visible = stories.slice(0, visibleCount);
  const cardsPerView = 1;
  const maxIndex = visible.length - cardsPerView;

  const prev = () => setCurrent((c) => Math.max(c - 1, 0));
  const next = () => setCurrent((c) => Math.min(c + 1, maxIndex));
  const goTo = (i: number) => setCurrent(i);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoScroll = () => {
    intervalRef.current = setInterval(() => {
      setCurrent((c) => (c >= maxIndex ? 0 : c + 1));
    }, 3000);
  };

  const stopAutoScroll = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    startAutoScroll();
    return () => stopAutoScroll();
  }, [maxIndex]);

  if (stories.length === 0) {
    return (
      <section className="py-24 px-6 max-w-4xl mx-auto">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-[11px] tracking-[0.25em] text-gold/60 uppercase mb-3">
              True Stories
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
              Real People.
              <br />
              <span className="text-gold">Real Wins.</span>
            </h2>
          </div>
        </div>
        <div className="bg-[#111] border border-[#1e1e1e] rounded-lg p-12 text-center">
          <p className="text-4xl mb-4">🐼</p>
          <p className="text-[#888] text-sm tracking-wide">
            Stories dropping soon. Stay locked in.
          </p>
          <div
            onClick={() =>
              window.open("https://www.youtube.com/@pandas_lk", "_blank")
            }
            className="inline-block mt-6 text-xs border border-gold text-gold px-5 py-2 rounded hover:bg-gold hover:text-black transition-all duration-200 cursor-pointer tracking-widest uppercase"
          >
            Watch on YouTube &#8594;
          </div>
        </div>
        <div className="mt-16 h-px bg-gradient-to-r from-transparent via-[#2a2a2a] to-transparent" />
      </section>
    );
  }

  return (
    <section className="py-24 px-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-end justify-between mb-12">
        <div>
          <p className="text-[11px] tracking-[0.25em] text-gold/60 uppercase mb-3">
            True Stories
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
            Real People.
            <br />
            <span className="text-gold">Real Wins.</span>
          </h2>
        </div>
        <div
          onClick={() => window.open("/stories", "_self")}
          className="hidden sm:inline-block text-sm text-[#888] hover:text-gold transition-colors tracking-wide border-b border-[#333] hover:border-gold pb-0.5 cursor-pointer"
        >
          View All Stories &#8594;
        </div>
      </div>

      {/* Scroll toggle */}
      <div className="flex items-center gap-2 mb-8">
        <span className="text-[11px] text-[#555] tracking-wider uppercase">
          Show
        </span>
        {SCROLL_OPTIONS.map((count) => (
          <button
            key={count}
            onClick={() => {
              setVisibleCount(count);
              setCurrent(0);
            }}
            className={`text-xs px-3 py-1 rounded border transition-all duration-200 ${
              visibleCount === count
                ? "border-gold text-gold bg-gold/10"
                : "border-[#2a2a2a] text-[#555] hover:border-[#444] hover:text-[#888]"
            }`}
          >
            {count} Videos
          </button>
        ))}
      </div>

      {/* Carousel */}
      <div
        className="relative"
        onMouseEnter={stopAutoScroll}
        onMouseLeave={startAutoScroll}
      >
        {/* Track */}
        <div className="overflow-hidden rounded-lg mx-8">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {visible.map((story, index) => (
              <div
                key={story.id || `story-${index}`}
                style={{ minWidth: "100%" }}
              >
                <div className="bg-[#111] border border-[#1e1e1e] rounded-lg overflow-hidden hover:border-gold/30 transition-all duration-300 group">
                  {/* Thumbnail */}
                  <div
                    onClick={() =>
                      window.open(
                        `https://www.youtube.com/watch?v=${story.youtubeId}`,
                        "_blank",
                      )
                    }
                    className="cursor-pointer relative overflow-hidden bg-[#0a0a0a]"
                    style={{ paddingTop: "56.25%" }}
                  >
                    <img
                      src={story.thumbnail}
                      alt={story.title}
                      className="absolute inset-0 w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-300"
                    />
                    {/* Play button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full bg-gold/90 flex items-center justify-center hover:scale-110 transition-transform duration-200">
                        <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[16px] border-l-black border-b-[8px] border-b-transparent ml-1" />
                      </div>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-4">
                    <h3 className="text-sm font-medium text-[#ccc] leading-snug group-hover:text-white transition-colors line-clamp-2">
                      {story.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Prev arrow */}
        <button
          onClick={prev}
          disabled={current === 0}
          aria-label="Previous"
          className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#111] border border-[#2a2a2a] hover:border-gold text-[#888] hover:text-gold flex items-center justify-center transition-all duration-200 z-10 text-2xl disabled:opacity-20 disabled:cursor-not-allowed"
        >
          <span style={{ lineHeight: 1, marginTop: "-2px" }}>&#8249;</span>
        </button>

        {/* Next arrow */}
        <button
          onClick={next}
          disabled={current === maxIndex}
          aria-label="Next"
          className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#111] border border-[#2a2a2a] hover:border-gold text-[#888] hover:text-gold flex items-center justify-center transition-all duration-200 z-10 text-2xl disabled:opacity-20 disabled:cursor-not-allowed"
        >
          <span style={{ lineHeight: 1, marginTop: "-2px" }}>&#8250;</span>
        </button>
      </div>

      {/* Dots */}
      {visible.length > 1 && (
        <div className="flex items-center justify-center gap-2 mt-8">
          {visible.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`transition-all duration-300 rounded-full ${
                i === current
                  ? "w-6 h-1.5 bg-gold"
                  : "w-1.5 h-1.5 bg-[#333] hover:bg-[#555]"
              }`}
            />
          ))}
        </div>
      )}

      {/* Mobile view all */}
      <div className="sm:hidden text-center mt-8">
        <div
          onClick={() => window.open("/stories", "_self")}
          className="inline-block text-sm border border-gold text-gold px-6 py-2.5 rounded hover:bg-gold hover:text-black transition-all duration-200 tracking-wide cursor-pointer"
        >
          View All Stories &#8594;
        </div>
      </div>

      {/* Divider */}
      <div className="mt-16 h-px bg-gradient-to-r from-transparent via-[#2a2a2a] to-transparent" />
    </section>
  );
}
