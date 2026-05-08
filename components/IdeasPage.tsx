"use client";

import { useState, useEffect, useRef } from "react";

const ideas = [
  {
    id: "1",
    title: "Maglev City",
    tagline: "The city built on Electromagnetic Levitation.",
    description:
      "A fully functional city where transportation, infrastructure, and energy systems run on electromagnetic levitation. Zero friction. Zero emissions. Maximum efficiency. This is not science fiction — it is the next step in human civilization. Imagine a city where trains float, buildings generate their own energy, and waste is completely eliminated. This is the future PANDAS is thinking about.",
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
    comments: [
      {
        id: "c1",
        name: "Ashan",
        text: "This is actually possible with current technology. Just needs the right investment.",
        time: "2 days ago",
      },
      {
        id: "c2",
        name: "Dilshan",
        text: "Sri Lanka should pilot this. Small country, perfect test case.",
        time: "1 day ago",
      },
    ],
  },
  {
    id: "2",
    title: "Green School Network",
    tagline: "Education powered by nature, not concrete.",
    description:
      "A network of schools built entirely from sustainable materials, powered by solar and wind energy, with curriculums focused on environmental responsibility, critical thinking, and real-world skills. Learning that actually prepares you for life — not just exams. Every child deserves an education that teaches them how to think, not just what to think.",
    category: "Education",
    status: "Early Stage",
    statusColor: "bg-[#0a1a0a] text-[#7ac47a] border border-[#1a3a1a]",
    tags: ["📚 Education", "🌱 Sustainable", "☀️ Solar Power", "🌍 Global"],
    emoji: "🌿",
    supporters: 84,
    comments: [
      {
        id: "c1",
        name: "Nimasha",
        text: "Education reform is the most important thing we can do for the next generation.",
        time: "3 days ago",
      },
    ],
  },
  {
    id: "3",
    title: "Open Mind Library",
    tagline: "A free global library of human knowledge.",
    description:
      "A decentralized digital library where anyone in the world can access books, research, courses, and knowledge — completely free. No paywalls. No gatekeeping. Knowledge is a human right, not a privilege. Built on blockchain technology to ensure permanence and censorship resistance. One library. Every language. Every person.",
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
    comments: [
      {
        id: "c1",
        name: "Kasun",
        text: "This would change everything for students in developing countries.",
        time: "5 days ago",
      },
      {
        id: "c2",
        name: "Thilini",
        text: "Already support this 100%. When do we start building?",
        time: "4 days ago",
      },
      {
        id: "c3",
        name: "Ruwan",
        text: "Wikipedia showed this is possible. We just need to go further.",
        time: "2 days ago",
      },
    ],
  },
  {
    id: "4",
    title: "PANDAS Action Fund",
    tagline: "Funding real people with real ideas.",
    description:
      "A community-driven micro-fund that supports individuals with powerful ideas but no resources. Not a bank. Not a corporation. A movement that bets on people. Submit your idea, get community support, get funded. No equity taken. No control given away. Just pure support for people who are serious about building something meaningful.",
    category: "Finance",
    status: "Planning",
    statusColor: "bg-[#0a0a1a] text-[#7a8fc4] border border-[#1a1a3a]",
    tags: ["💰 Funding", "🐼 PANDAS", "🤝 Community", "🚀 Action"],
    emoji: "💡",
    supporters: 176,
    comments: [
      {
        id: "c1",
        name: "Priya",
        text: "This is what the community needs. Not just motivation — actual support.",
        time: "1 day ago",
      },
    ],
  },
  {
    id: "5",
    title: "Solar Village Project",
    tagline: "Powering rural communities with clean energy.",
    description:
      "A movement to bring 100% solar-powered energy systems to off-grid villages across developing nations. Clean energy is not a luxury — it is a right. Every village powered means children can study at night, businesses can run, and communities can grow. Starting with Sri Lanka, expanding globally.",
    category: "Energy",
    status: "Concept",
    statusColor: "bg-[#1a1a0a] text-[#C9A84C] border border-[#3a3210]",
    tags: ["☀️ Solar", "🌍 Rural", "⚡ Clean Energy", "🤝 Community"],
    emoji: "☀️",
    supporters: 95,
    comments: [],
  },
  {
    id: "6",
    title: "Zero Waste City Blueprint",
    tagline: "A city that produces absolutely no waste.",
    description:
      "A complete urban design blueprint for a city that operates on a fully circular economy. Every material is reused, repurposed, or composted. Zero landfill. Zero pollution. This blueprint will be open-sourced and made available to any city, government, or community that wants to implement it.",
    category: "Environment",
    status: "Research",
    statusColor: "bg-[#0a1a0a] text-[#7ac47a] border border-[#1a3a1a]",
    tags: ["♻️ Circular", "🌱 Zero Waste", "🏙️ Urban", "🔬 Research"],
    emoji: "♻️",
    supporters: 142,
    comments: [
      {
        id: "c1",
        name: "Sandun",
        text: "Singapore is close to this already. We can learn from them.",
        time: "6 days ago",
      },
    ],
  },
  {
    id: "7",
    title: "Global Skill Exchange",
    tagline: "Trade skills, not money.",
    description:
      "A platform where people exchange skills instead of currency. You teach coding, someone teaches you cooking. No money needed. Pure human value exchange. Building a world where your knowledge is your currency, and everyone has something valuable to offer. Skill is the new gold.",
    category: "Economy",
    status: "Early Stage",
    statusColor: "bg-[#1a0a1a] text-[#b47ac4] border border-[#3a1a3a]",
    tags: ["🤝 Exchange", "💡 Skills", "🌍 Global", "🆓 Free"],
    emoji: "🔄",
    supporters: 189,
    comments: [
      {
        id: "c1",
        name: "Chamara",
        text: "Barter economy reimagined for the digital age. Genius.",
        time: "3 days ago",
      },
      {
        id: "c2",
        name: "Isuru",
        text: "I would trade design skills for coding lessons right now.",
        time: "2 days ago",
      },
    ],
  },
  {
    id: "8",
    title: "Mental Health First Network",
    tagline: "Making mental health support available to everyone.",
    description:
      "A global network of trained mental health first responders — ordinary people trained to provide immediate emotional support before professional help arrives. Because waiting kills. This network would be free, always available, and built on genuine human connection. No app can replace a real conversation with someone who cares.",
    category: "Health",
    status: "Planning",
    statusColor: "bg-[#0a0a1a] text-[#7a8fc4] border border-[#1a1a3a]",
    tags: ["🧠 Mental Health", "❤️ Support", "🌍 Global", "🤝 Community"],
    emoji: "🧠",
    supporters: 231,
    comments: [
      {
        id: "c1",
        name: "Malika",
        text: "Mental health is the silent crisis no one talks about enough.",
        time: "4 days ago",
      },
      {
        id: "c2",
        name: "Tharaka",
        text: "This idea hits different. We need this urgently.",
        time: "1 day ago",
      },
    ],
  },
];

type Comment = { id: string; name: string; text: string; time: string };
type SubmitStatus = "idle" | "sending" | "done";

const categoryColors: Record<string, string> = {
  Infrastructure: "bg-[#1a0a1a] text-[#b47ac4] border border-[#3a1a3a]",
  Education: "bg-[#0a1a0a] text-[#7ac47a] border border-[#1a3a1a]",
  Knowledge: "bg-[#1a1a0a] text-[#C9A84C] border border-[#3a3210]",
  Finance: "bg-[#0a0a1a] text-[#7a8fc4] border border-[#1a1a3a]",
  Energy: "bg-[#1a1a0a] text-[#C9A84C] border border-[#3a3210]",
  Environment: "bg-[#0a1a0a] text-[#7ac47a] border border-[#1a3a1a]",
  Economy: "bg-[#1a0a1a] text-[#b47ac4] border border-[#3a1a3a]",
  Health: "bg-[#0a0a1a] text-[#7a8fc4] border border-[#1a1a3a]",
};

export default function IdeasPage() {
  const mountedRef = useRef(true);

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);

  const [supported, setSupported] = useState<Record<string, boolean>>({});
  const [supportCounts, setSupportCounts] = useState<Record<string, number>>(
    Object.fromEntries(ideas.map((i) => [i.id, i.supporters])),
  );
  const [comments, setComments] = useState<Record<string, Comment[]>>(
    Object.fromEntries(ideas.map((i) => [i.id, i.comments])),
  );
  const [commentInput, setCommentInput] = useState<Record<string, string>>({});
  const [commentName, setCommentName] = useState<Record<string, string>>({});
  const [commentStatus, setCommentStatus] = useState<
    Record<string, SubmitStatus>
  >({});
  const [showComments, setShowComments] = useState<Record<string, boolean>>({});
  const [showSubmitForm, setShowSubmitForm] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    title: "",
    description: "",
  });
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");

  const handleSupport = (id: string) => {
    if (supported[id]) {
      setSupported((prev) => ({ ...prev, [id]: false }));
      setSupportCounts((prev) => ({ ...prev, [id]: prev[id] - 1 }));
    } else {
      setSupported((prev) => ({ ...prev, [id]: true }));
      setSupportCounts((prev) => ({ ...prev, [id]: prev[id] + 1 }));
    }
  };

  const handleShare = (idea: (typeof ideas)[0]) => {
    if (navigator.share) {
      navigator.share({
        title: idea.title,
        text: idea.tagline,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  const handleComment = (id: string) => {
    const text = commentInput[id]?.trim();
    const name = commentName[id]?.trim();
    if (!text || !name) return;
    setCommentStatus((prev) => ({ ...prev, [id]: "sending" }));
    setTimeout(() => {
      if (!mountedRef.current) return;
      const newComment: Comment = {
        id: `c${Date.now()}`,
        name,
        text,
        time: "Just now",
      };
      setComments((prev) => ({
        ...prev,
        [id]: [...(prev[id] || []), newComment],
      }));
      setCommentInput((prev) => ({ ...prev, [id]: "" }));
      setCommentName((prev) => ({ ...prev, [id]: "" }));
      setCommentStatus((prev) => ({ ...prev, [id]: "idle" }));
    }, 800);
  };

  const handleSubmitIdea = () => {
    if (!form.name || !form.title || !form.description) return;
    setSubmitStatus("sending");
    setTimeout(() => {
      if (!mountedRef.current) return;
      setSubmitStatus("done");
      setForm({ name: "", email: "", title: "", description: "" });
    }, 1500);
  };

  return (
    <div className="min-h-screen px-6 py-24 max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-16">
        <p className="text-[11px] tracking-[0.25em] text-gold/60 uppercase mb-3">
          Ideas
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-4">
          Think Big. <span className="text-gold">Build Bigger.</span>
        </h1>
        <p className="text-[#666] text-sm max-w-xl leading-relaxed mb-8">
          PANDAS is a platform for idea generators and supporters. These are the
          ideas we are building toward. Support the ones that matter. Add your
          voice. Submit your own.
        </p>
        <button
          onClick={() => setShowSubmitForm(true)}
          className="px-8 py-3 bg-gold text-black text-sm font-semibold tracking-widest uppercase rounded hover:bg-gold-light transition-all duration-200"
        >
          Submit Your Idea &#8594;
        </button>
      </div>

      {/* Ideas — full page cards */}
      <div className="flex flex-col gap-10">
        {ideas.map((idea) => (
          <div
            key={idea.id}
            className="bg-[#111] border border-[#1e1e1e] rounded-xl overflow-hidden hover:border-gold/20 transition-all duration-300"
          >
            {/* Card header */}
            <div className="p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gold/3 rounded-full blur-3xl pointer-events-none" />

              <div className="relative">
                {/* Top row */}
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div className="flex items-center gap-4">
                    <span className="text-5xl">{idea.emoji}</span>
                    <div>
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <span
                          className={`text-[10px] px-2 py-1 rounded tracking-wider uppercase font-medium ${idea.statusColor}`}
                        >
                          {idea.status}
                        </span>
                        <span
                          className={`text-[10px] px-2 py-1 rounded tracking-wider uppercase font-medium ${categoryColors[idea.category]}`}
                        >
                          {idea.category}
                        </span>
                      </div>
                      <h2 className="text-xl sm:text-2xl font-bold text-white">
                        {idea.title}
                      </h2>
                    </div>
                  </div>

                  {/* Supporter count */}
                  <div className="text-right flex-shrink-0">
                    <p className="text-2xl font-bold text-gold">
                      {supportCounts[idea.id]}
                    </p>
                    <p className="text-[10px] text-[#555] uppercase tracking-wider">
                      supporters
                    </p>
                  </div>
                </div>

                {/* Tagline */}
                <p className="text-sm text-gold/70 italic mb-4">
                  {idea.tagline}
                </p>

                {/* Description */}
                <p className="text-sm text-[#888] leading-relaxed mb-6">
                  {idea.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {idea.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] px-3 py-1 rounded border border-[#2a2a2a] text-[#666]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex items-center gap-3 flex-wrap">
                  {/* Support */}
                  <button
                    onClick={() => handleSupport(idea.id)}
                    className={`flex items-center gap-2 px-6 py-2.5 rounded text-sm font-semibold tracking-widest uppercase transition-all duration-200 ${
                      supported[idea.id]
                        ? "bg-gold text-black"
                        : "border border-gold text-gold hover:bg-gold hover:text-black"
                    }`}
                  >
                    {supported[idea.id] ? "❤️ Supported" : "🤍 Support"}
                    <span className="text-xs opacity-70">
                      {supportCounts[idea.id]}
                    </span>
                  </button>

                  {/* Share */}
                  <button
                    onClick={() => handleShare(idea)}
                    className="flex items-center gap-2 px-6 py-2.5 rounded text-sm border border-[#2a2a2a] text-[#666] hover:border-[#444] hover:text-white transition-all duration-200 tracking-widest uppercase"
                  >
                    ↗ Share
                  </button>

                  {/* Comments toggle */}
                  <button
                    onClick={() =>
                      setShowComments((prev) => ({
                        ...prev,
                        [idea.id]: !prev[idea.id],
                      }))
                    }
                    className="flex items-center gap-2 px-6 py-2.5 rounded text-sm border border-[#2a2a2a] text-[#666] hover:border-[#444] hover:text-white transition-all duration-200 tracking-widest uppercase"
                  >
                    💬 {comments[idea.id]?.length || 0} Comments
                  </button>
                </div>
              </div>
            </div>

            {/* Comments section */}
            {showComments[idea.id] && (
              <div className="border-t border-[#1e1e1e] p-8 bg-[#0d0d0d]">
                <p className="text-[11px] tracking-[0.2em] text-[#555] uppercase mb-6">
                  Discussion
                </p>

                {/* Existing comments */}
                <div className="flex flex-col gap-4 mb-6">
                  {(comments[idea.id] || []).length === 0 ? (
                    <p className="text-[12px] text-[#444] italic">
                      No comments yet. Be the first to share your thoughts.
                    </p>
                  ) : (
                    (comments[idea.id] || []).map((comment) => (
                      <div key={comment.id} className="flex gap-3">
                        <div className="w-7 h-7 rounded-full bg-[#1a1a1a] border border-[#2a2a2a] flex items-center justify-center flex-shrink-0 text-[10px] text-gold font-bold">
                          {comment.name[0].toUpperCase()}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-[12px] font-medium text-white">
                              {comment.name}
                            </span>
                            <span className="text-[10px] text-[#444]">
                              {comment.time}
                            </span>
                          </div>
                          <p className="text-[12px] text-[#888] leading-relaxed">
                            {comment.text}
                          </p>
                        </div>
                      </div>
                    ))
                  )}
                </div>

                {/* Add comment */}
                <div className="flex flex-col gap-3 pt-4 border-t border-[#1e1e1e]">
                  <p className="text-[11px] text-[#555] uppercase tracking-wider">
                    Add your voice
                  </p>
                  <input
                    type="text"
                    value={commentName[idea.id] || ""}
                    onChange={(e) =>
                      setCommentName((prev) => ({
                        ...prev,
                        [idea.id]: e.target.value,
                      }))
                    }
                    placeholder="Your name"
                    suppressHydrationWarning
                    className="w-full bg-[#111] border border-[#2a2a2a] rounded px-4 py-2.5 text-sm text-white placeholder-[#444] focus:outline-none focus:border-gold/50 transition-colors"
                  />
                  <div className="flex gap-3">
                    <input
                      type="text"
                      value={commentInput[idea.id] || ""}
                      onChange={(e) =>
                        setCommentInput((prev) => ({
                          ...prev,
                          [idea.id]: e.target.value,
                        }))
                      }
                      onKeyDown={(e) =>
                        e.key === "Enter" && handleComment(idea.id)
                      }
                      placeholder="Share your thoughts..."
                      suppressHydrationWarning
                      className="flex-1 bg-[#111] border border-[#2a2a2a] rounded px-4 py-2.5 text-sm text-white placeholder-[#444] focus:outline-none focus:border-gold/50 transition-colors"
                    />
                    <button
                      onClick={() => handleComment(idea.id)}
                      disabled={commentStatus[idea.id] === "sending"}
                      className="px-5 py-2.5 bg-gold text-black text-sm font-semibold rounded hover:bg-gold-light transition-all duration-200 disabled:opacity-60 flex-shrink-0"
                    >
                      {commentStatus[idea.id] === "sending" ? "..." : "Post"}
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Submit idea CTA */}
      <div className="mt-16 text-center">
        <p className="text-[11px] text-[#333] tracking-[0.2em] uppercase mb-4">
          Have a big idea?
        </p>
        <button
          onClick={() => setShowSubmitForm(true)}
          className="px-10 py-3 border border-gold text-gold text-sm font-semibold tracking-widest uppercase rounded hover:bg-gold hover:text-black transition-all duration-200"
        >
          Submit Your Idea &#8594;
        </button>
      </div>

      {/* Submit form modal */}
      {showSubmitForm && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center px-6">
          <div className="bg-[#111] border border-[#2a2a2a] rounded-lg p-8 w-full max-w-lg relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => {
                setShowSubmitForm(false);
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
                <p className="text-sm text-[#888] mb-6">
                  We will review it and add it to the platform. Keep building.
                </p>
                <button
                  onClick={() => {
                    setShowSubmitForm(false);
                    setSubmitStatus("idle");
                  }}
                  className="px-6 py-2.5 bg-gold text-black text-sm font-semibold tracking-widest uppercase rounded hover:bg-gold-light transition-all duration-200"
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
                      suppressHydrationWarning
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
                      suppressHydrationWarning
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
                      suppressHydrationWarning
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
                    onClick={handleSubmitIdea}
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
    </div>
  );
}
