"use client";

import { useState, useEffect, useRef } from "react";

const products = [
  {
    id: "1",
    name: "PANDAS Signature Hoodie",
    category: "Clothing",
    price: "$49.00",
    tag: "Bestseller",
    tagColor: "bg-[#1a1a0a] text-[#C9A84C] border border-[#3a3210]",
    description: "Wear the Calm. Live the Charm.",
    emoji: "🧥",
  },
  {
    id: "2",
    name: "Bamboo Water Bottle",
    category: "Eco Products",
    price: "$29.00",
    tag: "Eco",
    tagColor: "bg-[#0a1a0a] text-[#7ac47a] border border-[#1a3a1a]",
    description: "Hydrate clean. Think clean.",
    emoji: "🎋",
  },
  {
    id: "3",
    name: "PANDAS Mind Journal",
    category: "Books + Digital",
    price: "$19.00",
    tag: "Think",
    tagColor: "bg-[#0a0a1a] text-[#7a8fc4] border border-[#1a1a3a]",
    description: "Write your thoughts. Build your life.",
    emoji: "📓",
  },
  {
    id: "4",
    name: "Maglev City Concept Tee",
    category: "Clothing",
    price: "$35.00",
    tag: "Idea",
    tagColor: "bg-[#1a0a1a] text-[#b47ac4] border border-[#3a1a3a]",
    description: "The city of the future. On your chest today.",
    emoji: "🏙️",
  },
  {
    id: "5",
    name: "Recycled PANDAS Cap",
    category: "Eco Products",
    price: "$25.00",
    tag: "Eco",
    tagColor: "bg-[#0a1a0a] text-[#7ac47a] border border-[#1a3a1a]",
    description: "Made from the earth. Worn for the future.",
    emoji: "🧢",
  },
  {
    id: "6",
    name: "1% Better Digital Course",
    category: "Books + Digital",
    price: "$49.00",
    tag: "Digital",
    tagColor: "bg-[#1a1a0a] text-[#C9A84C] border border-[#3a3210]",
    description: "The system behind the discipline.",
    emoji: "💻",
  },
  {
    id: "7",
    name: "PANDAS Discipline Tee",
    category: "Clothing",
    price: "$32.00",
    tag: "New",
    tagColor: "bg-[#1a0a0a] text-[#c47a7a] border border-[#3a1a1a]",
    description: "Silent. Focused. Unstoppable.",
    emoji: "👕",
  },
  {
    id: "8",
    name: "Eco Tote Bag",
    category: "Eco Products",
    price: "$18.00",
    tag: "Eco",
    tagColor: "bg-[#0a1a0a] text-[#7ac47a] border border-[#1a3a1a]",
    description: "Carry less. Mean more.",
    emoji: "👜",
  },
  {
    id: "9",
    name: "Growth Mindset Ebook",
    category: "Books + Digital",
    price: "$12.00",
    tag: "Digital",
    tagColor: "bg-[#1a1a0a] text-[#C9A84C] border border-[#3a3210]",
    description: "The knowledge that changes everything.",
    emoji: "📱",
  },
];

type Product = (typeof products)[number];

function shuffle<T>(array: T[]): T[] {
  return [...array].sort(() => Math.random() - 0.5);
}

export default function ShopPreview() {
  const [displayed, setDisplayed] = useState<Product[]>(products.slice(0, 6));
  const isClientRef = useRef(false);

  useEffect(() => {
    if (!isClientRef.current) {
      isClientRef.current = true;
      setDisplayed(shuffle(products).slice(0, 6));
    }
  }, []);

  const displayedProducts = displayed;

  const [mobileCurrent, setMobileCurrent] = useState(0);
  const [desktopCurrent, setDesktopCurrent] = useState(0);

  // Mobile — 1 card at a time
  const mobileMax = displayedProducts.length - 1;
  const prevMobile = () => setMobileCurrent((c) => Math.max(c - 1, 0));
  const nextMobile = () => setMobileCurrent((c) => Math.min(c + 1, mobileMax));

  // Desktop — 3 cards at a time, 2 pages
  const desktopPerPage = 3;
  const desktopPages = Math.ceil(displayedProducts.length / desktopPerPage);
  const desktopMax = desktopPages - 1;
  const prevDesktop = () => setDesktopCurrent((c) => Math.max(c - 1, 0));
  const nextDesktop = () =>
    setDesktopCurrent((c) => Math.min(c + 1, desktopMax));

  // Auto scroll — mobile
  const mobileIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const startMobileScroll = () => {
    mobileIntervalRef.current = setInterval(() => {
      setMobileCurrent((c) => (c >= mobileMax ? 0 : c + 1));
    }, 3000);
  };
  const stopMobileScroll = () => {
    if (mobileIntervalRef.current) {
      clearInterval(mobileIntervalRef.current);
      mobileIntervalRef.current = null;
    }
  };
  useEffect(() => {
    startMobileScroll();
    return () => stopMobileScroll();
  }, [mobileMax]);

  // Auto scroll — desktop
  const desktopIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const startDesktopScroll = () => {
    desktopIntervalRef.current = setInterval(() => {
      setDesktopCurrent((c) => (c >= desktopMax ? 0 : c + 1));
    }, 3500);
  };
  const stopDesktopScroll = () => {
    if (desktopIntervalRef.current) {
      clearInterval(desktopIntervalRef.current);
      desktopIntervalRef.current = null;
    }
  };
  useEffect(() => {
    startDesktopScroll();
    return () => stopDesktopScroll();
  }, [desktopMax]);

  return (
    <section className="py-24 px-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-end justify-between mb-4">
        <div>
          <p className="text-[11px] tracking-[0.25em] text-gold/60 uppercase mb-3">
            Shop
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
            Wear the Calm.
            <br />
            <span className="text-gold">Live the Charm.</span>
          </h2>
        </div>
        <div
          onClick={() => window.open("/shop", "_self")}
          className="hidden sm:inline-block text-sm text-[#888] hover:text-gold transition-colors tracking-wide border-b border-[#333] hover:border-gold pb-0.5 cursor-pointer"
        >
          View All Products &#8594;
        </div>
      </div>

      {/* Tagline */}
      <p className="text-[#666] text-sm mb-12 max-w-lg leading-relaxed">
        Not just products. Every item has something to say, something to teach,
        and something to grow. Built for thinkers, builders, and idea
        generators.
      </p>

      {/* ── MOBILE CAROUSEL (1 card at a time) ── */}
      <div className="sm:hidden">
        <div
          className="relative"
          onTouchStart={stopMobileScroll}
          onTouchEnd={startMobileScroll}
        >
          <div className="overflow-hidden rounded-lg mx-8">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${mobileCurrent * 100}%)` }}
            >
              {displayedProducts.map((product) => (
                <div key={product.id} style={{ minWidth: "100%" }}>
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>

          {/* Mobile arrows */}
          <button
            onClick={prevMobile}
            disabled={mobileCurrent === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#111] border border-[#2a2a2a] hover:border-gold text-[#888] hover:text-gold flex items-center justify-center transition-all duration-200 z-10 text-2xl disabled:opacity-20 disabled:cursor-not-allowed"
          >
            <span style={{ lineHeight: 1, marginTop: "-2px" }}>&#8249;</span>
          </button>
          <button
            onClick={nextMobile}
            disabled={mobileCurrent === mobileMax}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#111] border border-[#2a2a2a] hover:border-gold text-[#888] hover:text-gold flex items-center justify-center transition-all duration-200 z-10 text-2xl disabled:opacity-20 disabled:cursor-not-allowed"
          >
            <span style={{ lineHeight: 1, marginTop: "-2px" }}>&#8250;</span>
          </button>
        </div>

        {/* Mobile dots */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {displayedProducts.map((_, i) => (
            <button
              key={i}
              onClick={() => setMobileCurrent(i)}
              className={`transition-all duration-300 rounded-full ${
                i === mobileCurrent
                  ? "w-6 h-1.5 bg-gold"
                  : "w-1.5 h-1.5 bg-[#333]"
              }`}
            />
          ))}
        </div>

        {/* Mobile view all */}
        <div className="text-center mt-8">
          <div
            onClick={() => window.open("/shop", "_self")}
            className="inline-block text-sm border border-gold text-gold px-6 py-2.5 rounded hover:bg-gold hover:text-black transition-all duration-200 tracking-wide cursor-pointer"
          >
            View All Products &#8594;
          </div>
        </div>
      </div>

      {/* ── DESKTOP CAROUSEL (3 cards, 2 pages) ── */}
      <div className="hidden sm:block">
        <div
          className="relative"
          onMouseEnter={stopDesktopScroll}
          onMouseLeave={startDesktopScroll}
        >
          <div className="overflow-hidden rounded-lg">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${desktopCurrent * 100}%)` }}
            >
              {Array.from({ length: desktopPages }).map((_, pageIndex) => (
                <div
                  key={pageIndex}
                  style={{ minWidth: "100%" }}
                  className="grid grid-cols-3 gap-5"
                >
                  {displayedProducts
                    .slice(
                      pageIndex * desktopPerPage,
                      pageIndex * desktopPerPage + desktopPerPage,
                    )
                    .map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                </div>
              ))}
            </div>
          </div>

          {/* Desktop arrows */}
          <button
            onClick={prevDesktop}
            disabled={desktopCurrent === 0}
            className="absolute -left-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#111] border border-[#2a2a2a] hover:border-gold text-[#888] hover:text-gold flex items-center justify-center transition-all duration-200 z-10 text-2xl disabled:opacity-20 disabled:cursor-not-allowed"
          >
            <span style={{ lineHeight: 1, marginTop: "-2px" }}>&#8249;</span>
          </button>
          <button
            onClick={nextDesktop}
            disabled={desktopCurrent === desktopMax}
            className="absolute -right-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#111] border border-[#2a2a2a] hover:border-gold text-[#888] hover:text-gold flex items-center justify-center transition-all duration-200 z-10 text-2xl disabled:opacity-20 disabled:cursor-not-allowed"
          >
            <span style={{ lineHeight: 1, marginTop: "-2px" }}>&#8250;</span>
          </button>
        </div>

        {/* Desktop dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {Array.from({ length: desktopPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setDesktopCurrent(i)}
              className={`transition-all duration-300 rounded-full ${
                i === desktopCurrent
                  ? "w-6 h-1.5 bg-gold"
                  : "w-1.5 h-1.5 bg-[#333]"
              }`}
            />
          ))}
        </div>

        {/* Desktop view all */}
        <div className="text-center mt-10">
          <div
            onClick={() => window.open("/shop", "_self")}
            className="inline-block text-sm border border-gold text-gold px-8 py-3 rounded hover:bg-gold hover:text-black transition-all duration-200 tracking-widest uppercase cursor-pointer"
          >
            Visit Shop &#8594;
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="mt-16 h-px bg-gradient-to-r from-transparent via-[#2a2a2a] to-transparent" />
    </section>
  );
}

// ── Reusable product card ──
function ProductCard({ product }: { product: Product }) {
  return (
    <div
      className="group bg-[#111] border border-[#1e1e1e] rounded-lg overflow-hidden hover:border-gold/30 transition-all duration-300 cursor-pointer"
      onClick={() => window.open("/shop", "_self")}
    >
      {/* Image placeholder */}
      <div className="relative bg-[#0d0d0d] aspect-square flex items-center justify-center border-b border-[#1e1e1e]">
        <span className="text-6xl">{product.emoji}</span>
        <div className="absolute top-3 left-3">
          <span
            className={`text-[10px] px-2 py-1 rounded tracking-wider uppercase font-medium ${product.tagColor}`}
          >
            {product.tag}
          </span>
        </div>
        <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="text-xs text-gold border border-gold px-4 py-2 rounded tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
            Coming Soon
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="p-4">
        <p className="text-[10px] text-[#555] uppercase tracking-wider mb-1">
          {product.category}
        </p>
        <h3 className="text-sm font-medium text-white mb-1 group-hover:text-gold transition-colors">
          {product.name}
        </h3>
        <p className="text-[11px] text-[#666] mb-3 leading-snug">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-gold">
            {product.price}
          </span>
          <span className="text-[10px] text-[#444] border border-[#2a2a2a] px-2 py-1 rounded tracking-wide">
            Notify Me
          </span>
        </div>
      </div>
    </div>
  );
}
