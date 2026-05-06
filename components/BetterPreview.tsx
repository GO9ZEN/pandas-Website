"use client";

import { useState } from "react";

const challenges = [
  // Action
  {
    id: "1",
    title: "Work 1 hour on your goal today.",
    category: "Action",
    description:
      "No phone. No distractions. Just you and your goal for 60 minutes straight.",
  },
  {
    id: "2",
    title: "Cut one bad habit for 24 hours.",
    category: "Action",
    description: "Just today. Prove to yourself you are in control.",
  },
  {
    id: "3",
    title: "Do one thing you have been avoiding.",
    category: "Action",
    description: "That task sitting on your list. Today is the day. Start it.",
  },
  {
    id: "4",
    title: "Reach out to one person who inspires you.",
    category: "Action",
    description: "Send a message. Build a connection. Grow your circle.",
  },
  {
    id: "5",
    title: "Plan tomorrow tonight before you sleep.",
    category: "Action",
    description: "5 minutes of planning saves 1 hour of confusion tomorrow.",
  },
  {
    id: "6",
    title: "Delete one app that wastes your time.",
    category: "Action",
    description:
      "You know which one. Remove the distraction. Reclaim your focus.",
  },
  {
    id: "7",
    title: "Spend zero time on social media today.",
    category: "Action",
    description: "One day. See how much you get done without the noise.",
  },

  // Discipline
  {
    id: "8",
    title: "Wake up 30 minutes earlier than usual.",
    category: "Discipline",
    description:
      "Use that time for yourself. Read, plan, or just think. Own your morning.",
  },
  {
    id: "9",
    title: "Do 20 minutes of exercise. No excuses.",
    category: "Discipline",
    description:
      "Walk, run, push-ups — anything. Your body is your foundation.",
  },
  {
    id: "10",
    title: "Eat clean for the entire day.",
    category: "Discipline",
    description: "No junk. No excuses. Fuel your body like it matters.",
  },
  {
    id: "11",
    title: "Sleep before midnight tonight.",
    category: "Discipline",
    description: "Rest is not weakness. Recovery is part of the grind.",
  },
  {
    id: "12",
    title: "Do not complain once today.",
    category: "Discipline",
    description:
      "Every complaint is wasted energy. Use that energy to fix the problem.",
  },
  {
    id: "13",
    title: "Complete your to-do list before relaxing.",
    category: "Discipline",
    description:
      "Work first. Rest after. That is the order that builds winners.",
  },
  {
    id: "14",
    title: "Sit in silence for 10 minutes.",
    category: "Discipline",
    description: "No phone, no music, no noise. Just you and your thoughts.",
  },

  // Mindset
  {
    id: "15",
    title: "Write down 3 things you are grateful for.",
    category: "Mindset",
    description: "Gratitude rewires your brain. Start small. Start now.",
  },
  {
    id: "16",
    title: "Write down your top 3 goals and read them out loud.",
    category: "Mindset",
    description: "Clarity creates direction. Know exactly where you are going.",
  },
  {
    id: "17",
    title: "Replace one negative thought with a powerful one.",
    category: "Mindset",
    description:
      "Every time doubt hits — counter it. Train your mind like a muscle.",
  },
  {
    id: "18",
    title: "Forgive someone today. Even silently.",
    category: "Mindset",
    description: "Holding grudges drains you. Let it go. Move forward.",
  },
  {
    id: "19",
    title: "Visualize your future self for 5 minutes.",
    category: "Mindset",
    description: "Close your eyes. See exactly who you are becoming. Feel it.",
  },
  {
    id: "20",
    title: "Stop comparing yourself to others today.",
    category: "Mindset",
    description: "Your only competition is who you were yesterday.",
  },
  {
    id: "21",
    title: "Tell yourself: I am capable. I am enough.",
    category: "Mindset",
    description:
      "Words become beliefs. Beliefs become actions. Actions become your life.",
  },

  // Growth
  {
    id: "22",
    title: "Read 10 pages of a book today.",
    category: "Growth",
    description:
      "10 pages a day. 3,650 pages a year. That is 12 books. That is an edge.",
  },
  {
    id: "23",
    title: "Learn one new thing and write it down.",
    category: "Growth",
    description: "One idea a day. 365 ideas a year. Compound knowledge.",
  },
  {
    id: "24",
    title: "Watch one educational video instead of entertainment.",
    category: "Growth",
    description: "Same time. Different input. Completely different outcome.",
  },
  {
    id: "25",
    title: "Ask for feedback from someone you trust.",
    category: "Growth",
    description: "Ego blocks growth. Feedback accelerates it.",
  },
  {
    id: "26",
    title: "Write about one lesson you learned this week.",
    category: "Growth",
    description: "Reflection turns experience into wisdom.",
  },
  {
    id: "27",
    title: "Try something outside your comfort zone today.",
    category: "Growth",
    description: "Comfort is the enemy of growth. Do the uncomfortable thing.",
  },
  {
    id: "28",
    title: "Listen more than you speak today.",
    category: "Growth",
    description:
      "The most successful people are the best listeners. Practice it.",
  },
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

function getDailyChallenge() {
  const today = new Date();
  const dayOfYear = Math.floor(
    (today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) /
      1000 /
      60 /
      60 /
      24,
  );
  return challenges[dayOfYear % challenges.length];
}

function getDailySupportChallenges(mainId: string) {
  const today = new Date();
  const dayOfYear = Math.floor(
    (today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) /
      1000 /
      60 /
      60 /
      24,
  );

  const mainCategory = challenges.find((c) => c.id === mainId)?.category;

  // Get the other 3 categories
  const otherCategories = ["Action", "Discipline", "Mindset", "Growth"].filter(
    (cat) => cat !== mainCategory,
  );

  // Pick one challenge from each of the 3 other categories
  return otherCategories.map((cat) => {
    const pool = challenges.filter((c) => c.category === cat);
    return pool[dayOfYear % pool.length];
  });
}

export default function BetterPreview() {
  const daily = getDailyChallenge();
  const support = getDailySupportChallenges(daily.id);
  const [completed, setCompleted] = useState<Record<string, boolean>>({});

  const toggle = (id: string) => {
    setCompleted((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const allChallenges = [daily, ...support];
  const completedCount = allChallenges.filter((c) => completed[c.id]).length;

  const today = new Date();
  const dateLabel = today.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  return (
    <section className="py-24 px-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-end justify-between mb-4">
        <div>
          <p className="text-[11px] tracking-[0.25em] text-gold/60 uppercase mb-3">
            1% Better
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
            Small Steps.
            <br />
            <span className="text-gold">Big Life.</span>
          </h2>
        </div>
        <div
          onClick={() => window.open("/better", "_self")}
          className="hidden sm:inline-block text-sm text-[#888] hover:text-gold transition-colors tracking-wide border-b border-[#333] hover:border-gold pb-0.5 cursor-pointer"
        >
          See All Challenges &#8594;
        </div>
      </div>

      {/* Date label */}
      <p className="text-[11px] text-[#444] tracking-widest uppercase mb-10">
        {dateLabel}
      </p>

      {/* Progress */}
      <div className="mb-10">
        <div className="flex justify-between items-center mb-2">
          <span className="text-[11px] text-[#555] uppercase tracking-wider">
            Today&#39;s progress
          </span>
          <span className="text-[11px] text-gold">
            {completedCount} / {allChallenges.length} done
          </span>
        </div>
        <div className="h-1 bg-[#1e1e1e] rounded-full overflow-hidden">
          <div
            className="h-full bg-gold rounded-full transition-all duration-500"
            style={{
              width: `${(completedCount / allChallenges.length) * 100}%`,
            }}
          />
        </div>
      </div>

      {/* Daily featured challenge */}
      <div className="bg-[#111] border border-gold/30 rounded-lg p-8 mb-6 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

        {/* Top row */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <span className="text-xs px-2 py-1 rounded border border-gold/30 text-gold/70 tracking-widest uppercase">
              Today&#39;s Challenge
            </span>
            <span
              className={`text-[10px] px-2 py-1 rounded tracking-wider uppercase font-medium ${categoryColors[daily.category]}`}
            >
              {categoryIcons[daily.category]} {daily.category}
            </span>
          </div>
          <div
            onClick={() => toggle(daily.id)}
            className={`w-6 h-6 rounded border flex items-center justify-center cursor-pointer transition-all duration-200 ${
              completed[daily.id]
                ? "bg-gold border-gold"
                : "border-[#444] hover:border-gold"
            }`}
          >
            {completed[daily.id] && (
              <span
                style={{
                  color: "#000",
                  fontSize: "11px",
                  fontWeight: 700,
                  lineHeight: 1,
                }}
              >
                ✓
              </span>
            )}
          </div>
        </div>

        <h3
          className={`text-2xl font-bold leading-snug mb-4 transition-all duration-200 ${
            completed[daily.id] ? "line-through text-[#444]" : "text-white"
          }`}
        >
          {daily.title}
        </h3>

        <p className="text-sm text-[#888] leading-relaxed mb-8">
          {daily.description}
        </p>

        <button
          onClick={() => toggle(daily.id)}
          className={`px-8 py-3 rounded text-sm font-semibold tracking-widest uppercase transition-all duration-200 ${
            completed[daily.id]
              ? "bg-[#1a1a0a] border border-gold/30 text-gold/60"
              : "bg-gold text-black hover:bg-gold-light"
          }`}
        >
          {completed[daily.id] ? "✓ Completed" : "Mark as Done"}
        </button>
      </div>

      {/* Supporting challenges */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
        {support.map((challenge) => (
          <div
            key={challenge.id}
            className={`bg-[#111] border rounded-lg p-5 transition-all duration-200 ${
              completed[challenge.id]
                ? "border-gold/20 opacity-60"
                : "border-[#1e1e1e] hover:border-[#333]"
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <span
                className={`text-[10px] px-2 py-0.5 rounded tracking-wide uppercase ${categoryColors[challenge.category]}`}
              >
                {categoryIcons[challenge.category]} {challenge.category}
              </span>
              <div
                onClick={() => toggle(challenge.id)}
                className={`w-5 h-5 rounded border flex items-center justify-center cursor-pointer transition-all duration-200 ${
                  completed[challenge.id]
                    ? "bg-gold border-gold"
                    : "border-[#444] hover:border-gold"
                }`}
              >
                {completed[challenge.id] && (
                  <span
                    style={{
                      color: "#000",
                      fontSize: "9px",
                      fontWeight: 700,
                      lineHeight: 1,
                    }}
                  >
                    ✓
                  </span>
                )}
              </div>
            </div>
            <p
              className={`text-sm leading-snug transition-all duration-200 ${
                completed[challenge.id]
                  ? "line-through text-[#444]"
                  : "text-[#ccc]"
              }`}
            >
              {challenge.title}
            </p>
          </div>
        ))}
      </div>

      {/* Bottom tagline */}
      <div className="text-center">
        <p className="text-[11px] text-[#333] tracking-[0.3em] uppercase">
          1% better every day — 37x better every year
        </p>
      </div>

      {/* Mobile see all */}
      <div className="sm:hidden text-center mt-8">
        <div
          onClick={() => window.open("/better", "_self")}
          className="inline-block text-sm border border-gold text-gold px-6 py-2.5 rounded hover:bg-gold hover:text-black transition-all duration-200 tracking-wide cursor-pointer"
        >
          See All Challenges &#8594;
        </div>
      </div>

      {/* Divider */}
      <div className="mt-16 h-px bg-gradient-to-r from-transparent via-[#2a2a2a] to-transparent" />
    </section>
  );
}
