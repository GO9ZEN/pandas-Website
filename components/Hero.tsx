import Link from "next/link";
// import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold/5 blur-3xl" />
      </div>

      {/* Panda glyph */}
      <div className="relative mb-8">
        <div className="w-24 h-24 rounded-full border border-gold/30 flex items-center justify-center text-5xl mb-2 mx-auto">
          🐼
        </div>
        <p className="text-[10px] tracking-[0.3em] text-gold/60 uppercase">
          P.A.N.D.A.S
        </p>
      </div>

      {/* Panda logo */}

      {/* <div className="relative mb-8">
        <div className="w-40 h-40 rounded-full border-2 border-gold/40 overflow-hidden mx-auto mb-2 bg-[#111]">
          <Image
            src="/logo.png"
            alt="PANDAS"
            width={128}
            height={128}
            className="w-full h-full object-contain scale-110"
          />
        </div>
        <p className="text-[10px] tracking-[0.3em] text-gold/60 uppercase text-center">
          P.A.N.D.A.S
        </p>
      </div> */}

      {/* Headline */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight max-w-4xl mb-6 tracking-tight">
        Build a Strong Mind.
        <br />
        <span className="text-gold">Build a Powerful Life.</span>
      </h1>

      {/* Subtext */}
      <p className="text-[#888] text-base sm:text-lg max-w-xl mb-10 leading-relaxed">
        Power. Action. No Doubt. Discipline. Ambition. Success.
        <br />
        This is not motivation. This is a movement.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mb-16">
        <Link
          href="/stories"
          className="px-8 py-3 bg-gold text-black text-sm font-semibold tracking-widest uppercase rounded hover:bg-gold-light transition-all duration-200"
        >
          Watch Stories
        </Link>
        <Link
          href="/community"
          className="px-8 py-3 border border-gold text-gold text-sm font-semibold tracking-widest uppercase rounded hover:bg-gold hover:text-black transition-all duration-200"
        >
          Join Community
        </Link>
      </div>

      {/* Bottom tagline */}
      <div className="absolute bottom-10 left-0 right-0 flex flex-col items-center gap-2">
        <p className="text-[11px] tracking-[0.25em] text-[#444] uppercase">
          No Excuses. Just Action.
        </p>
        <div className="w-px h-8 bg-gradient-to-b from-gold/30 to-transparent" />
      </div>
    </section>
  );
}
