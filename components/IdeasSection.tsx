"use client";

import { useState, useEffect, useRef } from "react";

const ideas = [
  {
    id: "1",
    title: "Maglev City",
    tagline: "The city built on Electromagnetic Levitation.",
    description:
      "A fully functional city where transportation, infrastructure, and energy systems run on electromagnetic levitation. Zero friction. Zero emissions. Maximum efficiency. This is not science fiction — it is the next step in human civilization.",
    category: "Infrastructure",
    status: "Concept",
    statusColor: "bg-[#1a0a1a] text-[#b47ac4] border border-[#3a1a3a]",
    tags: [
      "⚡ Electromagnetic",
      "🌱 Zero Emissions",
      "🏙️ Urban Design",
      "🔬 Innovation",
    ],
    emoji: "🏙️",
    supporters: 128,
  },
  {
    id: "2",
    title: "Green School Network",
    tagline: "Education powered by nature, not concrete.",
    description:
      "A network of schools built entirely from sustainable materials, powered by solar and wind energy, with curriculums focused on environmental responsibility, critical thinking, and real-world skills.",
    category: "Education",
    status: "Early Stage",
    statusColor: "bg-[#0a1a0a] text-[#7ac47a] border border-[#1a3a1a]",
    tags: ["📚 Education", "🌱 Sustainable", "☀️ Solar Power", "🌍 Global"],
    emoji: "🌿",
    supporters: 84,
  },
  {
    id: "3",
    title: "Open Mind Library",
    tagline: "A free global library of human knowledge.",
    description:
      "A decentralized digital library where anyone in the world can access books, research, courses, and knowledge — completely free. No paywalls. No gatekeeping. Knowledge is a human right.",
    category: "Knowledge",
    status: "Concept",
    statusColor: "bg-[#1a1a0a] text-[#C9A84C] border border-[#3a3210]",
    tags: [
      "📖 Knowledge",
      "🌐 Decentralized",
      "🆓 Free Access",
      "🤝 Community",
    ],
    emoji: "📚",
    supporters: 210,
  },
  {
    id: "4",
    title: "PANDAS Action Fund",
    tagline: "Funding real people with real ideas.",
    description:
      "A community-driven micro-fund that supports individuals with powerful ideas but no resources. Not a bank. Not a corporation. A movement that bets on people.",
    category: "Finance",
    status: "Planning",
    statusColor: "bg-[#0a0a1a] text-[#7a8fc4] border border-[#1a1a3a]",
    tags: ["💰 Funding", "🐼 PANDAS", "🤝 Community", "🚀 Action"],
    emoji: "💡",
    supporters: 176,
  },
  {
    id: "5",
    title: "Solar Village Project",
    tagline: "Powering rural communities with clean energy.",
    description:
      "A movement to bring 100% solar-powered energy systems to off-grid villages across developing nations. Clean energy is not a luxury — it is a right.",
    category: "Energy",
    status: "Concept",
    statusColor: "bg-[#1a1a0a] text-[#C9A84C] border border-[#3a3210]",
    tags: ["☀️ Solar", "🌍 Rural", "⚡ Clean Energy", "🤝 Community"],
    emoji: "☀️",
    supporters: 95,
  },
  {
    id: "6",
    title: "Zero Waste City Blueprint",
    tagline: "A city that produces absolutely no waste.",
    description:
      "A complete urban design blueprint for a city that operates on a fully circular economy. Every material is reused, repurposed, or composted. Zero landfill. Zero pollution.",
    category: "Environment",
    status: "Research",
    statusColor: "bg-[#0a1a0a] text-[#7ac47a] border border-[#1a3a1a]",
    tags: ["♻️ Circular", "🌱 Zero Waste", "🏙️ Urban", "🔬 Research"],
    emoji: "♻️",
    supporters: 142,
  },
  {
    id: "7",
    title: "Global Skill Exchange",
    tagline: "Trade skills, not money.",
    description:
      "A platform where people exchange skills instead of currency. You teach coding, someone teaches you cooking. No money needed. Pure human value exchange.",
    category: "Economy",
    status: "Early Stage",
    statusColor: "bg-[#1a0a1a] text-[#b47ac4] border border-[#3a1a3a]",
    tags: ["🤝 Exchange", "💡 Skills", "🌍 Global", "🆓 Free"],
    emoji: "🔄",
    supporters: 189,
  },
  {
    id: "8",
    title: "Mental Health First Network",
    tagline: "Making mental health support available to everyone.",
    description:
      "A global network of trained mental health first responders — ordinary people trained to provide immediate emotional support before professional help arrives. Because waiting kills.",
    category: "Health",
    status: "Planning",
    statusColor: "bg-[#0a0a1a] text-[#7a8fc4] border border-[#1a1a3a]",
    tags: ["🧠 Mental Health", "❤️ Support", "🌍 Global", "🤝 Community"],
    emoji: "🧠",
    supporters: 231,
  },
];

type SubmitStatus = "idle" | "sending" | "done";
type Idea = (typeof ideas)[number];

function shuffle<T>(array: T[]): T[] {
  return [...array].sort(() => Math.random() - 0.5);
}

const IDEAS_PER_PAGE = 4;

export default function IdeasSection() {
  // Shuffle on client only
  const [shuffledIdeas, setShuffledIdeas] = useState<Idea[]>(ideas);
  const isClientRef = useRef(false);

  useEffect(() => {
    if (!isClientRef.current) {
      isClientRef.current = true;
      setShuffledIdeas(shuffle(ideas));
    }
  }, []);

  const [activeIdea, setActiveIdea] = useState(ideas[0]);
  const [currentPage, setCurrentPage] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    title: "",
    description: "",
  });
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");

  const totalPages = Math.ceil(shuffledIdeas.length / IDEAS_PER_PAGE);
  const maxPage = totalPages - 1;

  const visibleIdeas = shuffledIdeas.slice(
    currentPage * IDEAS_PER_PAGE,
    currentPage * IDEAS_PER_PAGE + IDEAS_PER_PAGE,
  );

  const prevPage = () => setCurrentPage((c) => Math.max(c - 1, 0));
  const nextPage = () => setCurrentPage((c) => Math.min(c + 1, maxPage));

  // Auto scroll
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoScroll = () => {
    intervalRef.current = setInterval(() => {
      setCurrentPage((c) => (c >= maxPage ? 0 : c + 1));
    }, 4000);
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
  }, [maxPage]);

  const handleSubmit = () => {
    if (!form.name || !form.title || !form.description) return;
    setSubmitStatus("sending");
    setTimeout(() => {
      setSubmitStatus("done");
      setForm({ name: "", email: "", title: "", description: "" });
    }, 1500);
  };

  return (
    <section className="py-24 px-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-end justify-between mb-4">
        <div>
          <p className="text-[11px] tracking-[0.25em] text-gold/60 uppercase mb-3">
            Ideas
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
            Think Big.
            <br />
            <span className="text-gold">Build Bigger.</span>
          </h2>
        </div>
        <div
          onClick={() => setShowForm(!showForm)}
          className="hidden sm:inline-block text-sm text-[#888] hover:text-gold transition-colors tracking-wide border-b border-[#333] hover:border-gold pb-0.5 cursor-pointer"
        >
          Submit Your Idea &#8594;
        </div>
      </div>

      <p className="text-[#666] text-sm mb-12 max-w-lg leading-relaxed">
        PANDAS is a platform for idea generators and supporters. Big ideas start
        here. Support the ones that matter. Submit the ones that can change the
        world.
      </p>

      {/* Ideas layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
        {/* Left — vertical carousel */}
        <div
          className="flex flex-col"
          onMouseEnter={stopAutoScroll}
          onMouseLeave={startAutoScroll}
        >
          {/* Ideas list — animates between pages */}
          <div className="flex flex-col gap-3 mb-4">
            {visibleIdeas.map((idea) => (
              <div
                key={idea.id}
                onClick={() => setActiveIdea(idea)}
                className={`p-5 rounded-lg border cursor-pointer transition-all duration-300 ${
                  activeIdea.id === idea.id
                    ? "border-gold/40 bg-gold/5"
                    : "border-[#1e1e1e] bg-[#111] hover:border-[#333]"
                }`}
              >
                <div className="flex items-start gap-4">
                  <span className="text-2xl flex-shrink-0">{idea.emoji}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <h3
                        className={`text-sm font-semibold transition-colors ${
                          activeIdea.id === idea.id ? "text-gold" : "text-white"
                        }`}
                      >
                        {idea.title}
                      </h3>
                      <span
                        className={`text-[9px] px-2 py-0.5 rounded tracking-wider uppercase ${idea.statusColor}`}
                      >
                        {idea.status}
                      </span>
                    </div>
                    <p className="text-[12px] text-[#666] leading-snug mb-2">
                      {idea.tagline}
                    </p>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] text-[#444]">
                        ❤️ {idea.supporters} supporters
                      </span>
                      <span className="text-[10px] text-[#333]">•</span>
                      <span className="text-[10px] text-[#444]">
                        {idea.category}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Carousel controls */}
          <div className="flex items-center justify-between mt-2">
            <div className="flex items-center gap-2">
              <button
                onClick={prevPage}
                disabled={currentPage === 0}
                className="w-8 h-8 rounded-full bg-[#111] border border-[#2a2a2a] hover:border-gold text-[#888] hover:text-gold flex items-center justify-center transition-all duration-200 text-lg disabled:opacity-20 disabled:cursor-not-allowed"
              >
                <span style={{ lineHeight: 1, marginTop: "-1px" }}>
                  &#8249;
                </span>
              </button>
              <button
                onClick={nextPage}
                disabled={currentPage === maxPage}
                className="w-8 h-8 rounded-full bg-[#111] border border-[#2a2a2a] hover:border-gold text-[#888] hover:text-gold flex items-center justify-center transition-all duration-200 text-lg disabled:opacity-20 disabled:cursor-not-allowed"
              >
                <span style={{ lineHeight: 1, marginTop: "-1px" }}>
                  &#8250;
                </span>
              </button>
            </div>

            {/* Page dots */}
            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i)}
                  className={`transition-all duration-300 rounded-full ${
                    i === currentPage
                      ? "w-6 h-1.5 bg-gold"
                      : "w-1.5 h-1.5 bg-[#333] hover:bg-[#555]"
                  }`}
                />
              ))}
            </div>

            <span className="text-[11px] text-[#444]">
              {currentPage + 1} / {totalPages}
            </span>
          </div>
        </div>

        {/* Right — active idea detail */}
        <div className="lg:sticky lg:top-24 h-fit">
          <div className="bg-[#111] border border-gold/20 rounded-lg p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

            <div className="flex items-center justify-between mb-6">
              <span className="text-4xl">{activeIdea.emoji}</span>
              <span
                className={`text-[10px] px-2 py-1 rounded tracking-wider uppercase font-medium ${activeIdea.statusColor}`}
              >
                {activeIdea.status}
              </span>
            </div>

            <p className="text-[10px] text-[#555] uppercase tracking-wider mb-1">
              {activeIdea.category}
            </p>
            <h3 className="text-xl font-bold text-white mb-2">
              {activeIdea.title}
            </h3>
            <p className="text-sm text-gold/70 mb-4 italic">
              {activeIdea.tagline}
            </p>
            <p className="text-sm text-[#888] leading-relaxed mb-6">
              {activeIdea.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {activeIdea.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] px-3 py-1 rounded border border-[#2a2a2a] text-[#666]"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Supporters */}
            <div className="flex items-center justify-between mb-6 p-3 bg-[#0d0d0d] rounded-lg border border-[#1e1e1e]">
              <span className="text-[12px] text-[#666]">
                Community supporters
              </span>
              <span className="text-sm font-semibold text-gold">
                ❤️ {activeIdea.supporters}
              </span>
            </div>

            {/* Support button */}
            <button
              onClick={() => {}}
              className="w-full py-3 bg-gold text-black text-sm font-semibold tracking-widest uppercase rounded hover:bg-gold-light transition-all duration-200"
            >
              Support This Idea
            </button>
          </div>
        </div>
      </div>

      {/* Submit idea CTA */}
      <div
        className="bg-[#0d0d0d] border border-[#1e1e1e] rounded-lg p-8 cursor-pointer hover:border-gold/20 transition-all duration-200"
        onClick={() => setShowForm(true)}
      >
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <p className="text-[11px] tracking-[0.25em] text-gold/50 uppercase mb-2">
              Got an idea?
            </p>
            <h3 className="text-lg font-bold text-white mb-1">
              Submit Your Big Idea
            </h3>
            <p className="text-sm text-[#666]">
              PANDAS gives your idea a platform. Share it. Build support. Change
              the world.
            </p>
          </div>
          <div className="px-6 py-3 border border-gold text-gold text-sm font-semibold tracking-widest uppercase rounded hover:bg-gold hover:text-black transition-all duration-200">
            Submit Now &#8594;
          </div>
        </div>
      </div>

      {/* Submit form modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center px-6">
          <div className="bg-[#111] border border-[#2a2a2a] rounded-lg p-8 w-full max-w-lg relative">
            <button
              onClick={() => {
                setShowForm(false);
                setSubmitStatus("idle");
              }}
              className="absolute top-4 right-4 text-[#555] hover:text-white transition-colors text-xl"
            >
              ✕
            </button>

            {submitStatus === "done" ? (
              <div className="text-center py-8">
                <p className="text-5xl mb-4">🐼</p>
                <h3 className="text-xl font-bold text-white mb-2">
                  Idea Received.
                </h3>
                <p className="text-sm text-[#888]">
                  We will review it and add it to the platform. Keep building.
                </p>
                <button
                  onClick={() => {
                    setShowForm(false);
                    setSubmitStatus("idle");
                  }}
                  className="mt-6 px-6 py-2.5 bg-gold text-black text-sm font-semibold tracking-widest uppercase rounded hover:bg-gold-light transition-all duration-200"
                >
                  Close
                </button>
              </div>
            ) : (
              <>
                <p className="text-[11px] tracking-[0.25em] text-gold/60 uppercase mb-2">
                  Submit Your Idea
                </p>
                <h3 className="text-xl font-bold text-white mb-6">
                  What&#39;s your big idea?
                </h3>

                <div className="flex flex-col gap-4">
                  <div>
                    <label className="text-[11px] text-[#555] uppercase tracking-wider block mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      placeholder="John Silva"
                      className="w-full bg-[#0d0d0d] border border-[#2a2a2a] rounded px-4 py-3 text-sm text-white placeholder-[#444] focus:outline-none focus:border-gold/50 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] text-[#555] uppercase tracking-wider block mb-2">
                      Email (optional)
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      placeholder="you@email.com"
                      className="w-full bg-[#0d0d0d] border border-[#2a2a2a] rounded px-4 py-3 text-sm text-white placeholder-[#444] focus:outline-none focus:border-gold/50 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] text-[#555] uppercase tracking-wider block mb-2">
                      Idea Title *
                    </label>
                    <input
                      type="text"
                      value={form.title}
                      onChange={(e) =>
                        setForm({ ...form, title: e.target.value })
                      }
                      placeholder="e.g. Solar-powered public transport"
                      className="w-full bg-[#0d0d0d] border border-[#2a2a2a] rounded px-4 py-3 text-sm text-white placeholder-[#444] focus:outline-none focus:border-gold/50 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] text-[#555] uppercase tracking-wider block mb-2">
                      Describe Your Idea *
                    </label>
                    <textarea
                      value={form.description}
                      onChange={(e) =>
                        setForm({ ...form, description: e.target.value })
                      }
                      placeholder="What is it? Why does it matter? How would it work?"
                      rows={4}
                      className="w-full bg-[#0d0d0d] border border-[#2a2a2a] rounded px-4 py-3 text-sm text-white placeholder-[#444] focus:outline-none focus:border-gold/50 transition-colors resize-none"
                    />
                  </div>

                  <button
                    onClick={handleSubmit}
                    disabled={submitStatus === "sending"}
                    className="w-full py-3 bg-gold text-black text-sm font-semibold tracking-widest uppercase rounded hover:bg-gold-light transition-all duration-200 disabled:opacity-60"
                  >
                    {submitStatus === "sending"
                      ? "Submitting..."
                      : "Submit Idea"}
                  </button>

                  <p className="text-[11px] text-[#444] text-center">
                    All ideas are reviewed by the PANDAS team before publishing.
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* Divider */}
      <div className="mt-16 h-px bg-gradient-to-r from-transparent via-[#2a2a2a] to-transparent" />
    </section>
  );
}
