"use client";

import { useState } from "react";

const navLinks = [
  { label: "Stories", href: "/stories" },
  { label: "Blog", href: "/blog" },
  { label: "1% Better", href: "/better" },
  { label: "Ideas", href: "/ideas" },
  { label: "Community", href: "/community" },
  { label: "Shop", href: "/shop" },
];

const socials = [
  { name: "YouTube", url: "https://www.youtube.com/@pandas_lk", icon: "▶" },
  { name: "TikTok", url: "https://www.tiktok.com/@pandas_lk", icon: "♪" },
  { name: "Instagram", url: "https://www.instagram.com/pandas_lk", icon: "◈" },
  { name: "Facebook", url: "https://www.facebook.com/PandasLK", icon: "f" },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/company/pandas-lk",
    icon: "in",
  },
  { name: "Medium", url: "https://medium.com/@pandas_lk", icon: "M" },
];

const taglines = [
  "Change Your Mind. Change Your Life.",
  "No Excuses. Just Action.",
  "PANDAS Builds.",
  "1% Better Every Day.",
  "Power. Action. No Doubt. Discipline. Ambition. Success.",
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [emailStatus, setEmailStatus] = useState<"idle" | "sending" | "done">(
    "idle",
  );
  const [taglineIndex, setTaglineIndex] = useState(0);

  const handleEmailSubmit = () => {
    if (!email || !email.includes("@")) return;
    setEmailStatus("sending");
    setTimeout(() => {
      setEmailStatus("done");
      setEmail("");
    }, 1500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const cycleTagline = () => {
    setTaglineIndex((i) => (i + 1) % taglines.length);
  };

  return (
    <footer className="border-t border-[#1e1e1e] bg-[#0a0a0a]">
      {/* Newsletter strip */}
      <div className="border-b border-[#1e1e1e]">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-[11px] tracking-[0.25em] text-gold/60 uppercase mb-2">
                Stay in the loop
              </p>
              <h3 className="text-xl font-bold text-white mb-2">
                Get the weekly <span className="text-gold">PANDAS drop.</span>
              </h3>
              <p className="text-sm text-[#666] leading-relaxed">
                Mindset. Stories. Challenges. Ideas. One email. Every week. No
                spam. Ever.
              </p>
            </div>

            {emailStatus === "done" ? (
              <div className="bg-[#111] border border-gold/20 rounded-lg p-6 text-center">
                <p className="text-2xl mb-2">🐼</p>
                <p className="text-sm font-medium text-white mb-1">
                  You&#39;re in.
                </p>
                <p className="text-[12px] text-[#666]">
                  Welcome to the movement. Stay locked in.
                </p>
              </div>
            ) : (
              <div className="flex flex-col gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleEmailSubmit()}
                  placeholder="your@email.com"
                  className="w-full bg-[#111] border border-[#2a2a2a] rounded px-4 py-3 text-sm text-white placeholder-[#444] focus:outline-none focus:border-gold/50 transition-colors"
                  suppressHydrationWarning
                />
                <button
                  onClick={handleEmailSubmit}
                  disabled={emailStatus === "sending"}
                  className="w-full py-3 bg-gold..."
                  suppressHydrationWarning
                >
                  {emailStatus === "sending"
                    ? "Joining..."
                    : "Join the Movement"}
                </button>
                <p className="text-[10px] text-[#444] text-center">
                  No spam. Unsubscribe anytime. PANDAS respects your inbox.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 mb-16">
          {/* Brand column */}
          <div className="sm:col-span-1">
            <div
              onClick={scrollToTop}
              className="text-gold font-semibold text-xl tracking-widest uppercase cursor-pointer mb-4 inline-block"
            >
              PANDAS
            </div>
            <p
              onClick={cycleTagline}
              className="text-[12px] text-[#555] leading-relaxed mb-6 cursor-pointer hover:text-[#888] transition-colors"
              title="Click to cycle taglines"
            >
              {taglines[taglineIndex]}
            </p>
            <p className="text-[11px] text-[#333] leading-relaxed">
              P.A.N.D.A.S — Power. Action. No Doubt. Discipline. Ambition.
              Success.
            </p>
          </div>

          {/* Nav links */}
          <div>
            <p className="text-[11px] tracking-[0.2em] text-[#555] uppercase mb-6">
              Navigate
            </p>
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <div
                  key={link.href}
                  onClick={() => window.open(link.href, "_self")}
                  className="text-sm text-[#666] hover:text-gold transition-colors cursor-pointer tracking-wide"
                >
                  {link.label}
                </div>
              ))}
            </div>
          </div>

          {/* Socials */}
          <div>
            <p className="text-[11px] tracking-[0.2em] text-[#555] uppercase mb-6">
              Follow
            </p>
            <div className="flex flex-col gap-3">
              {socials.map((social) => (
                <div
                  key={social.name}
                  onClick={() => window.open(social.url, "_blank")}
                  className="flex items-center gap-3 cursor-pointer group"
                >
                  <div className="w-6 h-6 rounded bg-[#1a1a1a] border border-[#2a2a2a] flex items-center justify-center text-[10px] text-[#666] group-hover:border-gold/30 group-hover:text-gold transition-all duration-200 flex-shrink-0">
                    {social.icon}
                  </div>
                  <span className="text-sm text-[#666] group-hover:text-gold transition-colors tracking-wide">
                    {social.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#1e1e1e] to-transparent mb-8" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <p className="text-[11px] text-[#333]">
              © {new Date().getFullYear()} PANDAS. All rights reserved.
            </p>
            <span className="hidden sm:block text-[#222]">•</span>
            <p className="text-[11px] text-[#333]">
              Built with discipline. Powered by purpose.
            </p>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2..."
            suppressHydrationWarning
          >
            <span>Back to top</span>
            <div className="w-6 h-6 rounded border border-[#2a2a2a] group-hover:border-gold flex items-center justify-center transition-all duration-200">
              <span
                className="text-[10px] group-hover:text-gold"
                style={{ lineHeight: 1 }}
              >
                ↑
              </span>
            </div>
          </button>
        </div>

        {/* Final brand line */}
        <div className="mt-12 text-center">
          <p className="text-[10px] tracking-[0.4em] text-[#222] uppercase">
            Change Your Mind. Change Your Life. — PANDAS 🐼
          </p>
        </div>
      </div>
    </footer>
  );
}
