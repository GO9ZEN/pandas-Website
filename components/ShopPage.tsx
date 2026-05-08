"use client";

import { useState } from "react";

type Product = {
  id: string;
  name: string;
  category: string;
  price: string;
  originalPrice?: string;
  tag: string;
  tagColor: string;
  description: string;
  fullDescription: string;
  emoji: string;
  badge?: string;
};

const products: Product[] = [
  {
    id: "1",
    name: "PANDAS Signature Hoodie",
    category: "Clothing",
    price: "$49.00",
    tag: "Bestseller",
    tagColor: "bg-[#1a1a0a] text-[#C9A84C] border border-[#3a3210]",
    description: "Wear the Calm. Live the Charm.",
    fullDescription:
      "Premium quality hoodie. Black with gold PANDAS embroidery. Oversized fit. Wear your mindset.",
    emoji: "🧥",
    badge: "🔥 Most Popular",
  },
  {
    id: "2",
    name: "Bamboo Water Bottle",
    category: "Eco Products",
    price: "$29.00",
    tag: "Eco",
    tagColor: "bg-[#0a1a0a] text-[#7ac47a] border border-[#1a3a1a]",
    description: "Hydrate clean. Think clean.",
    fullDescription:
      "100% sustainable bamboo exterior. Double-wall insulated. Keeps cold 24hrs, hot 12hrs. Zero plastic.",
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
    fullDescription:
      "180 pages of structured journaling. Daily prompts, goal tracking, and reflection pages. Matte black cover.",
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
    fullDescription:
      "Limited edition tee featuring the Maglev City blueprint. 100% organic cotton. Gold print on black.",
    emoji: "🏙️",
    badge: "💡 Limited",
  },
  {
    id: "5",
    name: "Recycled PANDAS Cap",
    category: "Eco Products",
    price: "$25.00",
    tag: "Eco",
    tagColor: "bg-[#0a1a0a] text-[#7ac47a] border border-[#1a3a1a]",
    description: "Made from the earth. Worn for the future.",
    fullDescription:
      "Made from 100% recycled materials. Adjustable strap. Gold PANDAS embroidery on front.",
    emoji: "🧢",
  },
  {
    id: "6",
    name: "1% Better Digital Course",
    category: "Books + Digital",
    price: "$49.00",
    originalPrice: "$99.00",
    tag: "Digital",
    tagColor: "bg-[#1a1a0a] text-[#C9A84C] border border-[#3a3210]",
    description: "The system behind the discipline.",
    fullDescription:
      "8-week digital course. Daily challenges, mindset frameworks, and accountability systems. Lifetime access.",
    emoji: "💻",
    badge: "🏷️ 50% Off",
  },
  {
    id: "7",
    name: "PANDAS Discipline Tee",
    category: "Clothing",
    price: "$32.00",
    tag: "New",
    tagColor: "bg-[#1a0a0a] text-[#c47a7a] border border-[#3a1a1a]",
    description: "Silent. Focused. Unstoppable.",
    fullDescription:
      "Minimalist design. PANDAS text on chest. Premium cotton blend. Available in black only.",
    emoji: "👕",
    badge: "✨ New",
  },
  {
    id: "8",
    name: "Eco Tote Bag",
    category: "Eco Products",
    price: "$18.00",
    tag: "Eco",
    tagColor: "bg-[#0a1a0a] text-[#7ac47a] border border-[#1a3a1a]",
    description: "Carry less. Mean more.",
    fullDescription:
      "Organic canvas. Reinforced handles. Gold PANDAS print. Perfect for daily carry. Replaces 500 plastic bags.",
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
    fullDescription:
      "120-page digital book. Frameworks for building discipline, focus, and unstoppable habits. Instant download.",
    emoji: "📱",
  },
];

const categories = ["All", "Clothing", "Eco Products", "Books + Digital"];

type NotifyStatus = "idle" | "sending" | "done";

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [notifyEmail, setNotifyEmail] = useState("");
  const [notifyStatus, setNotifyStatus] = useState<NotifyStatus>("idle");

  const filtered = products.filter((p) => {
    const matchCategory =
      activeCategory === "All" || p.category === activeCategory;
    const matchSearch =
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  const handleNotify = () => {
    if (!notifyEmail || !notifyEmail.includes("@")) return;
    setNotifyStatus("sending");
    setTimeout(() => {
      setNotifyStatus("done");
      setNotifyEmail("");
    }, 1500);
  };

  return (
    <div className="min-h-screen px-6 py-24 max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-16 max-w-2xl">
        <p className="text-[11px] tracking-[0.25em] text-gold/60 uppercase mb-3">
          Shop
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-4">
          Wear the Calm.
          <br />
          <span className="text-gold">Live the Charm.</span>
        </h1>
        <p className="text-[#666] text-sm leading-relaxed mb-6">
          Not just products. Every item has something to say, something to
          teach, and something to grow. Built for thinkers, builders, and idea
          generators. Products launching soon — notify me to be first.
        </p>

        {/* Launch notify */}
        <div className="flex flex-col sm:flex-row gap-3 max-w-md">
          {notifyStatus === "done" ? (
            <div className="flex items-center gap-3 bg-[#111] border border-gold/30 rounded-lg px-5 py-3">
              <span>🐼</span>
              <p className="text-sm text-white">
                You&#39;re on the list. We&#39;ll notify you first.
              </p>
            </div>
          ) : (
            <>
              <input
                type="email"
                value={notifyEmail}
                onChange={(e) => setNotifyEmail(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleNotify()}
                placeholder="Notify me when shop launches"
                suppressHydrationWarning
                className="flex-1 bg-[#111] border border-[#2a2a2a] rounded-lg px-4 py-3 text-sm text-white placeholder-[#444] focus:outline-none focus:border-gold/50 transition-colors"
              />
              <button
                onClick={handleNotify}
                disabled={notifyStatus === "sending"}
                className="px-6 py-3 bg-gold text-black text-sm font-semibold tracking-widest uppercase rounded-lg hover:bg-gold-light transition-all duration-200 disabled:opacity-60 flex-shrink-0"
              >
                {notifyStatus === "sending" ? "..." : "Notify Me"}
              </button>
            </>
          )}
        </div>
      </div>

      {/* Search + Filter */}
      <div className="flex flex-col sm:flex-row gap-4 mb-10">
        <div className="relative flex-1 max-w-md">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search products..."
            suppressHydrationWarning
            className="w-full bg-[#111] border border-[#2a2a2a] rounded-lg px-4 py-3 pl-10 text-sm text-white placeholder-[#444] focus:outline-none focus:border-gold/50 transition-colors"
          />
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#444] text-sm">
            ⌕
          </span>
          {search && (
            <button
              onClick={() => setSearch("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#444] hover:text-white text-sm"
            >
              ✕
            </button>
          )}
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
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
      <p className="text-[11px] text-[#444] tracking-wider uppercase mb-8">
        {filtered.length} {filtered.length === 1 ? "product" : "products"} found
      </p>

      {/* Empty state */}
      {filtered.length === 0 && (
        <div className="text-center py-24">
          <p className="text-5xl mb-4">🐼</p>
          <p className="text-white font-medium mb-2">No products found.</p>
          <button
            onClick={() => {
              setSearch("");
              setActiveCategory("All");
            }}
            className="text-sm border border-gold text-gold px-6 py-2.5 rounded hover:bg-gold hover:text-black transition-all duration-200 mt-4"
          >
            Clear filters
          </button>
        </div>
      )}

      {/* Product grid */}
      {filtered.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((product) => (
            <div
              key={product.id}
              className="group bg-[#111] border border-[#1e1e1e] rounded-xl overflow-hidden hover:border-gold/30 transition-all duration-300 cursor-pointer flex flex-col"
              onClick={() => setSelectedProduct(product)}
            >
              {/* Image area */}
              <div className="relative bg-[#0d0d0d] aspect-square flex items-center justify-center border-b border-[#1e1e1e] overflow-hidden">
                <span className="text-7xl group-hover:scale-110 transition-transform duration-300">
                  {product.emoji}
                </span>

                {/* Tag */}
                <div className="absolute top-3 left-3">
                  <span
                    className={`text-[10px] px-2 py-1 rounded tracking-wider uppercase font-medium ${product.tagColor}`}
                  >
                    {product.tag}
                  </span>
                </div>

                {/* Badge */}
                {product.badge && (
                  <div className="absolute top-3 right-3">
                    <span className="text-[10px] bg-[#0d0d0d] border border-[#2a2a2a] text-[#888] px-2 py-1 rounded tracking-wide">
                      {product.badge}
                    </span>
                  </div>
                )}

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <span className="text-xs text-gold border border-gold px-5 py-2 rounded tracking-widest uppercase">
                    View Details
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="p-5 flex flex-col flex-1">
                <p className="text-[10px] text-[#555] uppercase tracking-wider mb-1">
                  {product.category}
                </p>
                <h3 className="text-sm font-medium text-white mb-1 group-hover:text-gold transition-colors flex-1">
                  {product.name}
                </h3>
                <p className="text-[11px] text-[#666] mb-4 leading-snug">
                  {product.description}
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-gold">
                      {product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-[11px] text-[#444] line-through">
                        {product.originalPrice}
                      </span>
                    )}
                  </div>
                  <span className="text-[10px] text-[#444] border border-[#2a2a2a] px-3 py-1 rounded tracking-wide group-hover:border-gold/30 group-hover:text-gold/60 transition-all duration-200">
                    Coming Soon
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Brand tagline */}
      <div className="text-center mt-20 mb-8">
        <div className="inline-block border border-[#1e1e1e] rounded-lg px-8 py-6">
          <p className="text-[11px] tracking-[0.3em] text-[#333] uppercase mb-2">
            Every product carries a message
          </p>
          <p className="text-sm text-[#666] italic">
            &#34;Wear the Calm. Live the Charm. Build the Life.&#34;
          </p>
        </div>
      </div>

      {/* Product detail modal */}
      {selectedProduct && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center px-6"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="bg-[#111] border border-[#2a2a2a] rounded-xl w-full max-w-lg relative overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 text-[#555] hover:text-white transition-colors text-xl z-10"
            >
              ✕
            </button>

            {/* Product image */}
            <div className="bg-[#0d0d0d] aspect-video flex items-center justify-center border-b border-[#1e1e1e] relative">
              <span className="text-8xl">{selectedProduct.emoji}</span>
              <div className="absolute top-4 left-4 flex gap-2">
                <span
                  className={`text-[10px] px-2 py-1 rounded tracking-wider uppercase font-medium ${selectedProduct.tagColor}`}
                >
                  {selectedProduct.tag}
                </span>
                {selectedProduct.badge && (
                  <span className="text-[10px] bg-[#0d0d0d] border border-[#2a2a2a] text-[#888] px-2 py-1 rounded">
                    {selectedProduct.badge}
                  </span>
                )}
              </div>
            </div>

            {/* Product details */}
            <div className="p-8">
              <p className="text-[10px] text-[#555] uppercase tracking-wider mb-1">
                {selectedProduct.category}
              </p>
              <h2 className="text-xl font-bold text-white mb-2">
                {selectedProduct.name}
              </h2>
              <p className="text-sm text-gold/70 italic mb-4">
                {selectedProduct.description}
              </p>
              <p className="text-sm text-[#888] leading-relaxed mb-6">
                {selectedProduct.fullDescription}
              </p>

              {/* Price */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl font-bold text-gold">
                  {selectedProduct.price}
                </span>
                {selectedProduct.originalPrice && (
                  <span className="text-[#444] line-through text-sm">
                    {selectedProduct.originalPrice}
                  </span>
                )}
              </div>

              {/* Coming soon + notify */}
              <div className="bg-[#0d0d0d] border border-[#1e1e1e] rounded-lg p-5">
                <p className="text-sm font-medium text-white mb-1">
                  Launching Soon
                </p>
                <p className="text-[12px] text-[#666] mb-4">
                  Be the first to know when this product is available.
                </p>
                {notifyStatus === "done" ? (
                  <p className="text-sm text-gold">✓ You&#39;re on the list!</p>
                ) : (
                  <div className="flex gap-3">
                    <input
                      type="email"
                      value={notifyEmail}
                      onChange={(e) => setNotifyEmail(e.target.value)}
                      placeholder="your@email.com"
                      suppressHydrationWarning
                      className="flex-1 bg-[#111] border border-[#2a2a2a] rounded px-3 py-2.5 text-sm text-white placeholder-[#444] focus:outline-none focus:border-gold/50 transition-colors"
                    />
                    <button
                      onClick={handleNotify}
                      disabled={notifyStatus === "sending"}
                      className="px-5 py-2.5 bg-gold text-black text-sm font-semibold rounded hover:bg-gold-light transition-all duration-200 disabled:opacity-60 flex-shrink-0"
                    >
                      {notifyStatus === "sending" ? "..." : "Notify"}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
