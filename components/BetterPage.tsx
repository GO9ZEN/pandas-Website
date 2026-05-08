"use client";

import { useState, useEffect, useRef } from "react";

const challenges = [
  {
    id: "1",
    title: "Work 1 hour on your goal today.",
    category: "Action",
    description:
      "No phone. No distractions. Just you and your goal for 60 minutes straight. Set a timer. Sit down. Start.",
  },
  {
    id: "2",
    title: "Cut one bad habit for 24 hours.",
    category: "Action",
    description:
      "Just today. Pick one — scrolling, junk food, complaining. Prove to yourself you are in control.",
  },
  {
    id: "3",
    title: "Do one thing you have been avoiding.",
    category: "Action",
    description:
      "That task sitting on your list. Today is the day. Start it. You don't have to finish — just start.",
  },
  {
    id: "4",
    title: "Reach out to one person who inspires you.",
    category: "Action",
    description:
      "Send a message. Ask a question. Build a connection. Your network is your net worth.",
  },
  {
    id: "5",
    title: "Plan tomorrow tonight before you sleep.",
    category: "Action",
    description:
      "5 minutes of planning saves 1 hour of confusion. Write 3 things you must do tomorrow.",
  },
  {
    id: "6",
    title: "Delete one app that wastes your time.",
    category: "Action",
    description:
      "You know which one. Remove the distraction. Reclaim your focus. Reclaim your life.",
  },
  {
    id: "7",
    title: "Spend zero time on social media today.",
    category: "Action",
    description:
      "One full day. See how much you get done without the noise. You will be shocked.",
  },
  {
    id: "8",
    title: "Wake up 30 minutes earlier than usual.",
    category: "Discipline",
    description:
      "Use that time for yourself. Read, plan, exercise, or just think. Own your morning before the world does.",
  },
  {
    id: "9",
    title: "Do 20 minutes of exercise. No excuses.",
    category: "Discipline",
    description:
      "Walk, run, push-ups — anything. Your body is your foundation. Discipline starts here.",
  },
  {
    id: "10",
    title: "Eat clean for the entire day.",
    category: "Discipline",
    description:
      "No junk. No excuses. Fuel your body like it matters — because it does.",
  },
  {
    id: "11",
    title: "Sleep before midnight tonight.",
    category: "Discipline",
    description:
      "Rest is not weakness. Recovery is part of the grind. Protect your sleep, protect your performance.",
  },
  {
    id: "12",
    title: "Do not complain once today.",
    category: "Discipline",
    description:
      "Every complaint is wasted energy. Use that energy to fix the problem instead.",
  },
  {
    id: "13",
    title: "Complete your to-do list before relaxing.",
    category: "Discipline",
    description:
      "Work first. Rest after. That is the order that builds winners. Earn your rest today.",
  },
  {
    id: "14",
    title: "Sit in silence for 10 minutes.",
    category: "Discipline",
    description:
      "No phone. No music. No noise. Just you and your thoughts. Most people are afraid of this.",
  },
  {
    id: "15",
    title: "Write down 3 things you are grateful for.",
    category: "Mindset",
    description:
      "Gratitude rewires your brain. Start small. Start now. Watch your entire perspective shift.",
  },
  {
    id: "16",
    title: "Write down your top 3 goals and read them out loud.",
    category: "Mindset",
    description:
      "Clarity creates direction. Know exactly where you are going. Say it like you mean it.",
  },
  {
    id: "17",
    title: "Replace one negative thought with a powerful one.",
    category: "Mindset",
    description:
      "Every time doubt hits — counter it immediately. Train your mind like a muscle. Rep by rep.",
  },
  {
    id: "18",
    title: "Forgive someone today. Even silently.",
    category: "Mindset",
    description:
      "Holding grudges drains your energy. Let it go. Move forward. The weight will lift.",
  },
  {
    id: "19",
    title: "Visualize your future self for 5 minutes.",
    category: "Mindset",
    description:
      "Close your eyes. See exactly who you are becoming. Feel it. Believe it. Then go build it.",
  },
  {
    id: "20",
    title: "Stop comparing yourself to others today.",
    category: "Mindset",
    description:
      "Your only competition is who you were yesterday. Run your own race. At your own pace.",
  },
  {
    id: "21",
    title: "Tell yourself: I am capable. I am enough.",
    category: "Mindset",
    description:
      "Words become beliefs. Beliefs become actions. Actions become your life. Start with the words.",
  },
  {
    id: "22",
    title: "Read 10 pages of a book today.",
    category: "Growth",
    description:
      "10 pages a day. 3,650 pages a year. That is 12 books. That is a serious edge over everyone who isn't reading.",
  },
  {
    id: "23",
    title: "Learn one new thing and write it down.",
    category: "Growth",
    description:
      "One idea a day. 365 ideas a year. Compound knowledge is the most powerful force available to you.",
  },
  {
    id: "24",
    title: "Watch one educational video instead of entertainment.",
    category: "Growth",
    description:
      "Same time. Different input. Completely different outcome in 1 year. Your choice.",
  },
  {
    id: "25",
    title: "Ask for feedback from someone you trust.",
    category: "Growth",
    description:
      "Ego blocks growth. Feedback accelerates it. Be brave enough to ask. Be strong enough to hear it.",
  },
  {
    id: "26",
    title: "Write about one lesson you learned this week.",
    category: "Growth",
    description:
      "Reflection turns experience into wisdom. If you are not learning, you are just surviving.",
  },
  {
    id: "27",
    title: "Try something outside your comfort zone today.",
    category: "Growth",
    description:
      "Comfort is the enemy of growth. The thing that scares you slightly is exactly where you need to go.",
  },
  {
    id: "28",
    title: "Listen more than you speak today.",
    category: "Growth",
    description:
      "The most successful people are the best listeners. Every conversation is a chance to learn something.",
  },
];

const dailyQuotes = [
  "The secret of getting ahead is getting started.",
  "1% better every day. 37x better every year.",
  "Discipline is choosing between what you want now and what you want most.",
  "Do something today that your future self will thank you for.",
  "Small daily improvements lead to staggering long-term results.",
  "You don't rise to the level of your goals. You fall to the level of your systems.",
  "The pain of discipline is nothing compared to the pain of regret.",
];

const categoryColors: Record<string, string> = {
  Action: "bg-[#1a1a0a] text-[#C9A84C] border border-[#3a3210]",
  Discipline: "bg-[#0a0a1a] text-[#7a8fc4] border border-[#1a1a3a]",
  Mindset: "bg-[#0a1a0a] text-[#7ac47a] border border-[#1a3a1a]",
  Growth: "bg-[#1a0a1a] text-[#b47ac4] border border-[#3a1a3a]",
};

const categoryIcons: Record<string, string> = {
  Action: "⚡",
  Discipline: "⚔️",
  Mindset: "🧠",
  Growth: "📈",
};

function getDayOfYear(): number {
  const now = new Date();
  return Math.floor(
    (now.getTime() - new Date(now.getFullYear(), 0, 0).getTime()) / 86400000,
  );
}

function getDailyChallenge() {
  return challenges[getDayOfYear() % challenges.length];
}

function getDailyQuote() {
  return dailyQuotes[getDayOfYear() % dailyQuotes.length];
}

function getTimeUntilMidnight() {
  const now = new Date();
  const midnight = new Date();
  midnight.setHours(24, 0, 0, 0);
  const diff = midnight.getTime() - now.getTime();
  const h = Math.floor(diff / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);
  return { h, m, s };
}

const categories = ["All", "Action", "Discipline", "Mindset", "Growth"];

export default function BetterPage() {
  const daily = getDailyChallenge();
  const quote = getDailyQuote();

  const [completed, setCompleted] = useState<Record<string, boolean>>({});
  const [celebrated, setCelebrated] = useState<Record<string, boolean>>({});
  const [flipped, setFlipped] = useState<Record<string, boolean>>({});
  const [particles, setParticles] = useState<
    { id: number; x: number; y: number }[]
  >([]);
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [countdown, setCountdown] = useState(getTimeUntilMidnight());
  const [visibleCount, setVisibleCount] = useState(12);
  const particleId = useRef(0);

  // Countdown timer
  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(getTimeUntilMidnight());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const burstParticles = (e: React.MouseEvent) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    const newParticles = Array.from({ length: 16 }, () => ({
      id: particleId.current++,
      x,
      y,
    }));
    setParticles((prev) => [...prev, ...newParticles]);
    setTimeout(() => {
      setParticles((prev) =>
        prev.filter((p) => !newParticles.find((n) => n.id === p.id)),
      );
    }, 1000);
  };

  const completeChallenge = (id: string, e: React.MouseEvent) => {
    if (completed[id]) return;
    burstParticles(e);
    setFlipped((prev) => ({ ...prev, [id]: true }));
    setTimeout(() => {
      setCompleted((prev) => ({ ...prev, [id]: true }));
      setCelebrated((prev) => ({ ...prev, [id]: true }));
      setFlipped((prev) => ({ ...prev, [id]: false }));
    }, 400);
  };

  const filtered = challenges.filter((c) => {
    const matchSearch = c.title.toLowerCase().includes(search.toLowerCase());
    const matchCategory =
      activeCategory === "All" || c.category === activeCategory;
    return matchSearch && matchCategory;
  });

  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;
  const completedCount = Object.values(completed).filter(Boolean).length;
  const totalProgress = (completedCount / challenges.length) * 100;

  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="min-h-screen px-6 py-24 max-w-5xl mx-auto">
      {/* Burst particles */}
      {particles.map((p) => (
        <div
          key={p.id}
          style={{
            position: "fixed",
            left: p.x,
            top: p.y,
            pointerEvents: "none",
            zIndex: 9999,
          }}
        >
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: i % 2 === 0 ? "#C9A84C" : "#E8C97A",
                animation: `burst-${i} 0.8s ease-out forwards`,
                transform: `rotate(${i * 45}deg)`,
              }}
            />
          ))}
        </div>
      ))}

      <style>{`
        @keyframes burst-0 { to { transform: translate(0px, -60px) rotate(0deg); opacity: 0; } }
        @keyframes burst-1 { to { transform: translate(42px, -42px) rotate(45deg); opacity: 0; } }
        @keyframes burst-2 { to { transform: translate(60px, 0px) rotate(90deg); opacity: 0; } }
        @keyframes burst-3 { to { transform: translate(42px, 42px) rotate(135deg); opacity: 0; } }
        @keyframes burst-4 { to { transform: translate(0px, 60px) rotate(180deg); opacity: 0; } }
        @keyframes burst-5 { to { transform: translate(-42px, 42px) rotate(225deg); opacity: 0; } }
        @keyframes burst-6 { to { transform: translate(-60px, 0px) rotate(270deg); opacity: 0; } }
        @keyframes burst-7 { to { transform: translate(-42px, -42px) rotate(315deg); opacity: 0; } }
        @keyframes flip { 0% { transform: rotateY(0deg); } 50% { transform: rotateY(90deg); } 100% { transform: rotateY(0deg); } }
        @keyframes glow-pulse { 0%, 100% { box-shadow: 0 0 10px rgba(201,168,76,0.3); } 50% { box-shadow: 0 0 30px rgba(201,168,76,0.7), 0 0 60px rgba(201,168,76,0.3); } }
        @keyframes progress-glow { 0%, 100% { filter: brightness(1); } 50% { filter: brightness(1.4); } }
        .flip-card { animation: flip 0.4s ease-in-out; }
        .glow-complete { animation: glow-pulse 2s ease-in-out infinite; }
        .progress-glow { animation: progress-glow 2s ease-in-out infinite; }
      `}</style>

      {/* Header */}
      <div className="mb-6">
        <p className="text-[11px] tracking-[0.25em] text-gold/60 uppercase mb-3">
          1% Better
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-2">
          Small Steps. <span className="text-gold">Big Life.</span>
        </h1>
        <p className="text-[#666] text-sm max-w-lg leading-relaxed">
          One challenge. One day. One step closer to who you are becoming.
        </p>
      </div>

      {/* Overall progress */}
      <div className="mb-12 bg-[#111] border border-[#1e1e1e] rounded-lg p-5">
        <div className="flex items-center justify-between mb-3">
          <span className="text-[11px] text-[#555] uppercase tracking-wider">
            Overall journey
          </span>
          <span className="text-[11px] text-gold font-medium">
            {completedCount} / {challenges.length} completed
          </span>
        </div>
        <div className="h-2 bg-[#1a1a1a] rounded-full overflow-hidden">
          <div
            className={`h-full rounded-full transition-all duration-700 ${completedCount > 0 ? "progress-glow" : ""}`}
            style={{
              width: `${totalProgress}%`,
              background: "linear-gradient(90deg, #C9A84C, #E8C97A)",
            }}
          />
        </div>
        {completedCount > 0 && (
          <p className="text-[11px] text-[#555] mt-2">
            {Math.round(totalProgress)}% complete — keep going 🐼
          </p>
        )}
      </div>

      {/* ── DAILY FEATURED SECTION ── */}
      <div className="mb-16">
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-[11px] tracking-[0.25em] text-gold/60 uppercase mb-1">
              Today&#39;s Challenge
            </p>
            <p className="text-[12px] text-[#444]">{today}</p>
          </div>

          {/* Countdown */}
          <div className="text-right">
            <p className="text-[10px] text-[#444] uppercase tracking-wider mb-1">
              Next challenge in
            </p>
            <div className="flex items-center gap-1">
              {[
                { val: countdown.h, label: "h" },
                { val: countdown.m, label: "m" },
                { val: countdown.s, label: "s" },
              ].map(({ val, label }) => (
                <div key={label} className="flex items-center gap-0.5">
                  <span className="text-sm font-mono font-bold text-gold">
                    {String(val).padStart(2, "0")}
                  </span>
                  <span className="text-[10px] text-[#444]">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Daily challenge card */}
        <div
          className={`relative bg-[#111] border rounded-lg p-8 overflow-hidden transition-all duration-500 ${
            completed[daily.id]
              ? "border-gold/40 glow-complete"
              : "border-gold/20"
          } ${flipped[daily.id] ? "flip-card" : ""}`}
        >
          {/* Background glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold/4 rounded-full blur-3xl pointer-events-none" />

          <div className="relative">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <span
                  className={`text-[10px] px-2 py-1 rounded tracking-wider uppercase font-medium ${categoryColors[daily.category]}`}
                >
                  {categoryIcons[daily.category]} {daily.category}
                </span>
                <span className="text-[10px] text-gold/50 border border-gold/20 px-2 py-1 rounded tracking-widest uppercase">
                  Day {(getDayOfYear() % challenges.length) + 1} of{" "}
                  {challenges.length}
                </span>
              </div>

              {completed[daily.id] && (
                <span className="text-[10px] text-gold tracking-wider uppercase flex items-center gap-1">
                  ✓ Done
                </span>
              )}
            </div>

            {completed[daily.id] ? (
              <div className="text-center py-4">
                <p className="text-4xl mb-3">🎉</p>
                <h2 className="text-2xl font-bold text-gold mb-2">
                  Challenge Complete!
                </h2>
                <p className="text-sm text-[#888] mb-2">{daily.title}</p>
                <p className="text-[12px] text-[#555]">
                  1% better than yesterday. Keep going. 🐼
                </p>
              </div>
            ) : (
              <>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 leading-snug">
                  {daily.title}
                </h2>
                <p className="text-sm text-[#888] leading-relaxed mb-8 max-w-xl">
                  {daily.description}
                </p>
                <button
                  onClick={(e) => completeChallenge(daily.id, e)}
                  className="px-10 py-3 bg-gold text-black text-sm font-semibold tracking-widest uppercase rounded hover:bg-gold-light transition-all duration-200"
                >
                  Mark as Done ✓
                </button>
              </>
            )}
          </div>
        </div>

        {/* Daily quote */}
        <div className="mt-4 p-4 border border-[#1e1e1e] rounded-lg bg-[#0d0d0d]">
          <p className="text-[12px] text-[#555] italic text-center leading-relaxed">
            &#34;{quote}&#34;
          </p>
        </div>
      </div>

      {/* ── FULL LIBRARY ── */}
      <div>
        <div className="mb-8">
          <p className="text-[11px] tracking-[0.25em] text-gold/60 uppercase mb-3">
            Full Library
          </p>
          <h2 className="text-2xl font-bold text-white mb-2">
            All {challenges.length} Challenges
          </h2>
          <p className="text-[#666] text-sm">
            Browse all challenges. Complete them at your own pace.
          </p>
        </div>

        {/* Search + Filter */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1 max-w-md">
            <input
              type="text"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setVisibleCount(12);
              }}
              placeholder="Search challenges..."
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
                onClick={() => {
                  setActiveCategory(cat);
                  setVisibleCount(12);
                }}
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

        {/* Results */}
        <p className="text-[11px] text-[#444] tracking-wider uppercase mb-6">
          Showing {visible.length} of {filtered.length} challenges
        </p>

        {/* Challenge grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-4xl mb-4">🐼</p>
            <p className="text-white font-medium mb-2">No challenges found.</p>
            <button
              onClick={() => {
                setSearch("");
                setActiveCategory("All");
              }}
              className="text-sm border border-gold text-gold px-6 py-2 rounded hover:bg-gold hover:text-black transition-all duration-200 mt-4"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {visible.map((challenge) => (
              <div
                key={challenge.id}
                className={`relative bg-[#111] border rounded-lg p-5 transition-all duration-300 ${
                  flipped[challenge.id] ? "flip-card" : ""
                } ${
                  completed[challenge.id]
                    ? "border-gold/30 glow-complete"
                    : "border-[#1e1e1e] hover:border-[#333]"
                }`}
              >
                {/* Completed overlay */}
                {completed[challenge.id] && (
                  <div className="absolute top-3 right-3">
                    <div className="w-6 h-6 rounded-full bg-gold flex items-center justify-center">
                      <span
                        style={{
                          color: "#000",
                          fontSize: "10px",
                          fontWeight: 700,
                        }}
                      >
                        ✓
                      </span>
                    </div>
                  </div>
                )}

                <div className="flex items-center gap-2 mb-3">
                  <span
                    className={`text-[9px] px-2 py-0.5 rounded tracking-wider uppercase font-medium ${categoryColors[challenge.category]}`}
                  >
                    {categoryIcons[challenge.category]} {challenge.category}
                  </span>
                </div>

                <p
                  className={`text-sm font-medium leading-snug mb-4 transition-colors ${
                    completed[challenge.id]
                      ? "line-through text-[#444]"
                      : "text-[#ccc]"
                  }`}
                >
                  {challenge.title}
                </p>

                {!completed[challenge.id] && (
                  <p className="text-[11px] text-[#555] leading-relaxed mb-4 line-clamp-2">
                    {challenge.description}
                  </p>
                )}

                {completed[challenge.id] ? (
                  <p className="text-[11px] text-gold/60">Completed ✓</p>
                ) : (
                  <button
                    onClick={(e) => completeChallenge(challenge.id, e)}
                    className="text-[11px] text-[#555] hover:text-gold border border-[#2a2a2a] hover:border-gold px-3 py-1.5 rounded transition-all duration-200 tracking-wide"
                  >
                    Mark Done
                  </button>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Load more */}
        {hasMore && (
          <div className="text-center mt-10">
            <button
              onClick={() => setVisibleCount((c) => c + 12)}
              className="px-10 py-3 border border-gold text-gold text-sm font-semibold tracking-widest uppercase rounded hover:bg-gold hover:text-black transition-all duration-200"
            >
              Load More ({filtered.length - visibleCount} remaining)
            </button>
          </div>
        )}

        {/* All done */}
        {completedCount === challenges.length && (
          <div className="text-center mt-12 p-8 bg-[#111] border border-gold/30 rounded-lg glow-complete">
            <p className="text-5xl mb-4">🏆</p>
            <h3 className="text-xl font-bold text-gold mb-2">
              All 28 Challenges Completed!
            </h3>
            <p className="text-sm text-[#888]">
              You are 1% better every single day. That is who PANDAS builds.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
