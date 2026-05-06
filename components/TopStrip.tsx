"use client";

import { useState } from "react";

export default function TopStrip() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="relative bg-gold text-black text-center py-2 px-6">
      <p className="text-xs font-semibold tracking-[0.2em] uppercase">
        Change Your Mind. Change Your Life. &nbsp;—&nbsp; PANDAS Builds.
      </p>
      <button
        onClick={() => setVisible(false)}
        aria-label="Dismiss"
        className="absolute right-4 top-1/2 -translate-y-1/2 text-black/50 hover:text-black transition-colors text-lg leading-none"
      >
        ×
      </button>
    </div>
  );
}
