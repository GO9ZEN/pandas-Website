"use client";

import { useEffect, useRef } from "react";

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const vignetteRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let scrollY = 0;
    let fadeIn = 0;

    interface Particle {
      x: number;
      y: number;
      r: number;
      vx: number;
      vy: number;
      a: number;
      pulseSpeed: number;
      pulseOffset: number;
      isLarge: boolean;
    }

    const mouse = { x: -999, y: -999 };
    let particles: Particle[] = [];
    let W = 0;
    let H = 0;

    const init = () => {
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.width = W;
      canvas.height = H;

      const count = Math.min(Math.floor((W * H) / 8000), 200);

      particles = Array.from({ length: count }, (_, i) => ({
        x: Math.random() * W,
        y: Math.random() * H,
        r:
          i < count * 0.1
            ? Math.random() * 2.5 + 1.5 // 10% are large
            : Math.random() * 1.2 + 0.3, // rest are small
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
        a: Math.random() * 0.5 + 0.2,
        pulseSpeed: Math.random() * 0.02 + 0.005,
        pulseOffset: Math.random() * Math.PI * 2,
        isLarge: i < count * 0.1,
      }));
    };

    const draw = () => {
      // Fade in on load
      if (fadeIn < 1) fadeIn += 0.008;

      // Parallax — particles move at 20% of scroll speed
      const parallaxY = scrollY * 0.2;

      ctx.clearRect(0, 0, W, H);

      const time = performance.now() / 1000;

      particles.forEach((p) => {
        // Slow elegant movement
        p.x += p.vx;
        p.y += p.vy;

        // Wrap
        if (p.x < 0) p.x = W;
        if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H;
        if (p.y > H) p.y = 0;

        // Mouse repulsion
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.hypot(dx, dy);
        if (dist < 130 && dist > 0) {
          const force = (130 - dist) / 130;
          p.vx += (dx / dist) * force * 0.25;
          p.vy += (dy / dist) * force * 0.25;
        }

        // Speed cap + damping — very slow, elegant
        const speed = Math.hypot(p.vx, p.vy);
        if (speed > 1.2) {
          p.vx = (p.vx / speed) * 1.2;
          p.vy = (p.vy / speed) * 1.2;
        }
        p.vx *= 0.995;
        p.vy *= 0.995;

        // Pulsing alpha
        const pulse = Math.sin(time * p.pulseSpeed * 60 + p.pulseOffset) * 0.2;
        const alpha = Math.max(0.05, Math.min(0.9, p.a + pulse)) * fadeIn;

        // Parallax offset
        const drawY = p.y - parallaxY * 0.03;

        if (p.isLarge) {
          // Large particles — glow effect using multiple circles
          const gradient = ctx.createRadialGradient(
            p.x,
            drawY,
            0,
            p.x,
            drawY,
            p.r * 4,
          );
          gradient.addColorStop(0, `rgba(201,168,76,${alpha})`);
          gradient.addColorStop(0.4, `rgba(201,168,76,${alpha * 0.4})`);
          gradient.addColorStop(1, `rgba(201,168,76,0)`);
          ctx.beginPath();
          ctx.arc(p.x, drawY, p.r * 4, 0, Math.PI * 2);
          ctx.fillStyle = gradient;
          ctx.fill();

          // Core
          ctx.beginPath();
          ctx.arc(p.x, drawY, p.r, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(232,201,122,${alpha})`;
          ctx.fill();
        } else {
          // Small particles — clean dot
          ctx.beginPath();
          ctx.arc(p.x, drawY, p.r, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(201,168,76,${alpha})`;
          ctx.fill();
        }
      });

      // Draw connections — only between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const aY = a.y - parallaxY * 0.03;
          const bY = b.y - parallaxY * 0.03;
          const dist = Math.hypot(a.x - b.x, aY - bY);
          const maxDist = 110;
          if (dist < maxDist) {
            const opacity = (1 - dist / maxDist) * 0.18 * fadeIn;
            ctx.beginPath();
            ctx.moveTo(a.x, aY);
            ctx.lineTo(b.x, bY);
            ctx.strokeStyle = `rgba(201,168,76,${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(draw);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleScroll = () => {
      scrollY = window.scrollY;
    };

    const handleResize = () => {
      init();
    };

    init();
    draw();

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Deep space vignette */}
      <div
        ref={vignetteRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          pointerEvents: "none",
          zIndex: 0,
          background: `
            radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.5) 70%, rgba(0,0,0,0.85) 100%)
          `,
        }}
      />

      {/* Hero gold glow — subtle warm light at top center */}
      <div
        style={{
          position: "fixed",
          top: "-20vh",
          left: "50%",
          transform: "translateX(-50%)",
          width: "60vw",
          height: "60vh",
          pointerEvents: "none",
          zIndex: 0,
          background:
            "radial-gradient(ellipse at center, rgba(201,168,76,0.06) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
    </>
  );
}
