"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const links = [
  { label: "Stories", href: "/stories" },
  { label: "Blog", href: "/blog" },
  { label: "1% Better", href: "/better" },
  { label: "Ideas", href: "/ideas" },
  { label: "Community", href: "/community" },
  { label: "Shop", href: "/shop" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 left-0 right-0 z-50 border-b border-[#1e1e1e] bg-[#0d0d0d]/95 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-gold font-semibold text-lg tracking-widest uppercase"
        >
          PANDAS
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-[#888] hover:text-gold transition-colors duration-200 tracking-wide"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link
            href="/community"
            className="text-sm border border-gold text-gold px-4 py-2 rounded hover:bg-gold hover:text-black transition-all duration-200 tracking-wide"
          >
            Join Now
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-px bg-gold transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-5 h-px bg-gold transition-all duration-300 ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-5 h-px bg-gold transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${open ? "max-h-96 border-t border-[#1e1e1e]" : "max-h-0"}`}
      >
        <div className="px-6 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-sm text-[#888] hover:text-gold transition-colors duration-200 tracking-wide"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/community"
            onClick={() => setOpen(false)}
            className="text-sm border border-gold text-gold px-4 py-2 rounded text-center hover:bg-gold hover:text-black transition-all duration-200 mt-2"
          >
            Join Now
          </Link>
        </div>
      </div>
    </nav>
  );
}
