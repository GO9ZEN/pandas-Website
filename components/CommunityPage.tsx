"use client";

import { useState } from "react";

const socials = [
  {
    name: "YouTube",
    handle: "@pandas_lk",
    url: "https://www.youtube.com/@pandas_lk",
    description: "True stories. Real wins. Watch and get inspired.",
    members: "Subscribe",
    color: "#FF0000",
    bg: "bg-[#1a0a0a]",
    border: "border-[#3a1a1a]",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    name: "TikTok",
    handle: "@pandas_lk",
    url: "https://www.tiktok.com/@pandas_lk",
    description: "Short. Sharp. Powerful. Daily mindset content.",
    members: "Follow",
    color: "#ffffff",
    bg: "bg-[#111]",
    border: "border-[#2a2a2a]",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    handle: "@pandas_lk",
    url: "https://www.instagram.com/pandas_lk",
    description: "Behind the scenes. Brand moments. Visual stories.",
    members: "Follow",
    color: "#E1306C",
    bg: "bg-[#1a0a12]",
    border: "border-[#3a1a25]",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    handle: "PandasLK",
    url: "https://www.facebook.com/PandasLK",
    description: "Updates, articles, and community posts.",
    members: "Like",
    color: "#1877F2",
    bg: "bg-[#0a0f1a]",
    border: "border-[#1a2a3a]",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    handle: "pandas-lk",
    url: "https://www.linkedin.com/company/pandas-lk",
    description: "Professional insights. Growth mindset for your career.",
    members: "Follow",
    color: "#0A66C2",
    bg: "bg-[#0a0f1a]",
    border: "border-[#1a2535]",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: "Medium",
    handle: "@pandas_lk",
    url: "https://medium.com/@pandas_lk",
    description: "Deep articles. Real talk. Read and grow.",
    members: "Follow",
    color: "#ffffff",
    bg: "bg-[#111]",
    border: "border-[#2a2a2a]",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M13.54 12a6.8 6.8 0 0 1-6.77 6.82A6.8 6.8 0 0 1 0 12a6.8 6.8 0 0 1 6.77-6.82A6.8 6.8 0 0 1 13.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
      </svg>
    ),
  },
];

const groups = [
  {
    name: "Discord Server",
    description:
      "Deep discussions. Real talk. Serious minds only. Join the inner circle.",
    url: "#",
    status: "coming_soon",
    color: "#5865F2",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.002.022.015.045.033.057a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
      </svg>
    ),
  },
  {
    name: "WhatsApp Group",
    description: "Daily challenges. Quick wins. Real support from real people.",
    url: "#",
    status: "coming_soon",
    color: "#25D366",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
      </svg>
    ),
  },
  {
    name: "Facebook Group",
    description: "Stories, wins, accountability, and community love.",
    url: "#",
    status: "coming_soon",
    color: "#1877F2",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
];

const values = [
  {
    emoji: "⚡",
    title: "Action First",
    description: "We don't just talk. We build, execute, and move.",
  },
  {
    emoji: "🧠",
    title: "Mindset Over Everything",
    description: "Your mind is your most powerful tool. We sharpen it daily.",
  },
  {
    emoji: "🤝",
    title: "Serious People Only",
    description: "No negativity. No excuses. Only people who want to grow.",
  },
  {
    emoji: "🌍",
    title: "Global Movement",
    description: "From Sri Lanka to the world. PANDAS has no borders.",
  },
  {
    emoji: "📈",
    title: "1% Better Daily",
    description: "Small consistent steps. Compounding results. Forever.",
  },
  {
    emoji: "🐼",
    title: "Calm But Powerful",
    description: "Silent. Focused. Disciplined. That is the PANDAS way.",
  },
];

export default function CommunityPage() {
  const [email, setEmail] = useState("");
  const [emailStatus, setEmailStatus] = useState<"idle" | "sending" | "done">(
    "idle",
  );

  const handleJoin = () => {
    if (!email || !email.includes("@")) return;
    setEmailStatus("sending");
    setTimeout(() => setEmailStatus("done"), 1500);
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className="px-6 py-24 max-w-4xl mx-auto text-center">
        <p className="text-[11px] tracking-[0.25em] text-gold/60 uppercase mb-4">
          Community
        </p>
        <h1 className="text-4xl sm:text-6xl font-bold text-white leading-tight mb-6">
          Serious People.
          <br />
          <span className="text-gold">Only.</span>
        </h1>
        <p className="text-[#666] text-sm sm:text-base max-w-xl mx-auto leading-relaxed mb-10">
          PANDAS is not for everyone. It is for the ones who are tired of
          average — who want to grow, act, and win in life. If that is you,
          welcome home.
        </p>

        {/* Join email */}
        {emailStatus === "done" ? (
          <div className="inline-flex items-center gap-3 bg-[#111] border border-gold/30 rounded-lg px-6 py-4">
            <span className="text-2xl">🐼</span>
            <div className="text-left">
              <p className="text-sm font-medium text-white">
                You&#39;re in the movement.
              </p>
              <p className="text-[12px] text-[#666]">
                Stay locked in. Stay disciplined.
              </p>
            </div>
          </div>
        ) : (
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleJoin()}
              placeholder="your@email.com"
              suppressHydrationWarning
              className="flex-1 bg-[#111] border border-[#2a2a2a] rounded-lg px-4 py-3 text-sm text-white placeholder-[#444] focus:outline-none focus:border-gold/50 transition-colors"
            />
            <button
              onClick={handleJoin}
              disabled={emailStatus === "sending"}
              className="px-6 py-3 bg-gold text-black text-sm font-semibold tracking-widest uppercase rounded-lg hover:bg-gold-light transition-all duration-200 disabled:opacity-60 flex-shrink-0"
            >
              {emailStatus === "sending" ? "Joining..." : "Join Now"}
            </button>
          </div>
        )}
      </div>

      {/* Values */}
      <div className="px-6 py-16 max-w-4xl mx-auto">
        <p className="text-[11px] tracking-[0.25em] text-gold/60 uppercase mb-3 text-center">
          What We Stand For
        </p>
        <h2 className="text-2xl font-bold text-white text-center mb-12">
          The PANDAS <span className="text-gold">Way</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {values.map((v) => (
            <div
              key={v.title}
              className="bg-[#111] border border-[#1e1e1e] rounded-lg p-6 hover:border-gold/20 transition-all duration-200"
            >
              <span className="text-3xl mb-4 block">{v.emoji}</span>
              <h3 className="text-sm font-semibold text-white mb-2">
                {v.title}
              </h3>
              <p className="text-[12px] text-[#666] leading-relaxed">
                {v.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-[#2a2a2a] to-transparent" />
      </div>

      {/* Social platforms */}
      <div className="px-6 py-16 max-w-4xl mx-auto">
        <p className="text-[11px] tracking-[0.25em] text-gold/60 uppercase mb-3">
          Follow the Movement
        </p>
        <h2 className="text-2xl font-bold text-white mb-3">
          Find PANDAS <span className="text-gold">Everywhere</span>
        </h2>
        <p className="text-[#666] text-sm mb-10 max-w-lg">
          Follow us across every platform. Different content. Same mission. Pick
          your platform and join the movement today.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {socials.map((social) => (
            <div
              key={social.name}
              onClick={() => window.open(social.url, "_blank")}
              className={`${social.bg} border ${social.border} rounded-lg p-6 cursor-pointer hover:border-gold/30 transition-all duration-200 group`}
            >
              <div className="flex items-start justify-between mb-4">
                <div style={{ color: social.color }}>{social.icon}</div>
                <span className="text-[10px] text-[#444] group-hover:text-gold transition-colors tracking-wider uppercase">
                  {social.members} &#8594;
                </span>
              </div>
              <h3 className="text-sm font-semibold text-white mb-1">
                {social.name}
              </h3>
              <p className="text-[11px] text-[#555] mb-2">{social.handle}</p>
              <p className="text-[11px] text-[#444] leading-relaxed">
                {social.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-[#2a2a2a] to-transparent" />
      </div>

      {/* Groups */}
      <div className="px-6 py-16 max-w-4xl mx-auto">
        <p className="text-[11px] tracking-[0.25em] text-gold/60 uppercase mb-3">
          Join the Groups
        </p>
        <h2 className="text-2xl font-bold text-white mb-3">
          Where Real Work <span className="text-gold">Happens</span>
        </h2>
        <p className="text-[#666] text-sm mb-10 max-w-lg">
          Our community groups are where the movement lives. Deep conversations.
          Daily accountability. Real connections.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {groups.map((group) => (
            <div
              key={group.name}
              onClick={() =>
                group.status !== "coming_soon" &&
                window.open(group.url, "_blank")
              }
              className={`bg-[#111] border border-[#1e1e1e] rounded-lg p-6 relative overflow-hidden transition-all duration-200 ${
                group.status === "coming_soon"
                  ? "cursor-not-allowed opacity-70"
                  : "cursor-pointer hover:border-gold/30"
              }`}
            >
              {group.status === "coming_soon" && (
                <div className="absolute top-3 right-3">
                  <span className="text-[9px] px-2 py-0.5 rounded-full border border-[#333] text-[#555] tracking-widest uppercase">
                    Soon
                  </span>
                </div>
              )}
              <div style={{ color: group.color }} className="mb-4 opacity-80">
                {group.icon}
              </div>
              <h3 className="text-sm font-semibold text-white mb-2">
                {group.name}
              </h3>
              <p className="text-[12px] text-[#666] leading-relaxed mb-4">
                {group.description}
              </p>
              {group.status === "coming_soon" ? (
                <p className="text-[11px] text-[#444] tracking-wider">
                  Coming soon...
                </p>
              ) : (
                <p className="text-[11px] text-gold">Join now &#8594;</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-[#2a2a2a] to-transparent" />
      </div>

      {/* Rules */}
      <div className="px-6 py-16 max-w-4xl mx-auto">
        <p className="text-[11px] tracking-[0.25em] text-gold/60 uppercase mb-3">
          Community Rules
        </p>
        <h2 className="text-2xl font-bold text-white mb-10">
          The <span className="text-gold">Code</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            {
              rule: "01",
              title: "No Negativity",
              description:
                "Lift people up. Never tear them down. Negativity has no home here.",
            },
            {
              rule: "02",
              title: "No Excuses",
              description:
                "We don't complain. We find solutions. Action over everything.",
            },
            {
              rule: "03",
              title: "Respect Everyone",
              description:
                "Every background. Every level. Every person deserves respect.",
            },
            {
              rule: "04",
              title: "Share Real Value",
              description:
                "Share what actually helps. No spam. No self-promotion without substance.",
            },
            {
              rule: "05",
              title: "Stay Consistent",
              description:
                "Show up daily. Growth is not an event — it is a habit.",
            },
            {
              rule: "06",
              title: "Protect the Culture",
              description:
                "This community is special. Help keep it that way. Always.",
            },
          ].map((item) => (
            <div
              key={item.rule}
              className="flex gap-4 bg-[#111] border border-[#1e1e1e] rounded-lg p-5 hover:border-gold/10 transition-all duration-200"
            >
              <span className="text-[11px] font-mono text-gold/40 flex-shrink-0 mt-0.5">
                {item.rule}
              </span>
              <div>
                <h3 className="text-sm font-semibold text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-[12px] text-[#666] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Final CTA */}
      <div className="px-6 py-20 max-w-4xl mx-auto">
        <div className="bg-[#111] border border-gold/20 rounded-xl p-10 sm:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-gold/3 to-transparent pointer-events-none" />
          <div className="relative">
            <p className="text-5xl mb-6">🐼</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Ready to Build Your Life?
            </h2>
            <p className="text-sm text-[#888] mb-10 max-w-md mx-auto leading-relaxed">
              Follow. Connect. Grow. The PANDAS community is built for people
              who are serious about winning. No excuses. Just action.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div
                onClick={() =>
                  window.open("https://www.youtube.com/@pandas_lk", "_blank")
                }
                className="px-8 py-3 bg-gold text-black text-sm font-semibold tracking-widest uppercase rounded hover:bg-gold-light transition-all duration-200 cursor-pointer"
              >
                Subscribe on YouTube
              </div>
              <div
                onClick={() =>
                  window.open("https://medium.com/@pandas_lk", "_blank")
                }
                className="px-8 py-3 border border-gold text-gold text-sm font-semibold tracking-widest uppercase rounded hover:bg-gold hover:text-black transition-all duration-200 cursor-pointer"
              >
                Read on Medium
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
