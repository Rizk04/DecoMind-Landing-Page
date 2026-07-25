"use client";

import { motion } from "framer-motion";
import Footer from "@/components/Footer/Footer";
import React, { useEffect, useRef, useState } from "react";

const FRAME_COUNT = 164;
const FRAME_PATH = (n: number) =>
  `/Assets/Logo/frames/frame${String(n).padStart(4, "0")}.jpg`;

function Counter({ to, suffix = "", decimals = 0 }: { to: number; suffix?: string; decimals?: number }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const dur = 1600;
          const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min(1, (now - start) / dur);
            const eased = 1 - Math.pow(1 - p, 3);
            setVal(to * eased);
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      });
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [to]);
  return <div ref={ref}>{val.toFixed(decimals)}{suffix}</div>;
}

const SERVICES = [
  {
    num: "01",
    icon: "✨",
    title: "Generate stunning interiors in seconds",
    body: "Create photorealistic room designs with custom styles, lighting, materials, wood species, color palettes, and budget priorities.",
    tag: "Photoreal · 30s",
  },
  {
    num: "02",
    icon: "📸",
    title: "Photograph any room. See its future.",
    body: "Take a photo of your room and instantly redesign it with AI while preserving the room structure — walls, windows, and layout stay intact.",
    tag: "Structure-preserving",
  },
  {
    num: "03",
    icon: "🛋️",
    title: "Edit without starting over",
    body: "Replace furniture, lighting, materials, and decor while keeping everything else untouched. Iterate on details, not from scratch.",
    tag: "Non-destructive",
  },
  {
    num: "04",
    icon: "📐",
    title: "From floor plans to reality",
    body: "Upload a floor plan and let DecoMind furnish it intelligently — turning a 2D blueprint into a walkable 3D room in minutes.",
    tag: "2D → 3D",
  },
];

const checkItems = [
  { title: "Auto-detect walls & openings", desc: "Windows and doors are recognized from the plan, no manual tracing." },
  { title: "Smart furniture placement", desc: "Furniture is sized and placed to fit the room — not floating mid-air." },
  { title: "Export to your contractor", desc: "Share a 3D link or download a rendered image for your builder." },
];

export default function ServicesPage() {
  const outerRef = useRef<HTMLDivElement>(null);
  const heroOuterRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const framesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef(0);
  const [isMobile, setIsMobile] = useState(false);
  const [framesLoaded, setFramesLoaded] = useState(false);

  // Detect mobile
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Preload all frames on mobile
  useEffect(() => {
    if (!isMobile) return;
    let loaded = 0;
    const imgs: HTMLImageElement[] = [];
    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new window.Image();
      img.src = FRAME_PATH(i);
      img.onload = () => {
        loaded++;
        if (loaded === FRAME_COUNT) setFramesLoaded(true);
      };
      imgs.push(img);
    }
    framesRef.current = imgs;
  }, [isMobile]);

  // Draw a specific frame on canvas — sharp on retina/high-DPR screens
  const drawFrame = (index: number) => {
    const canvas = canvasRef.current;
    const img = framesRef.current[index];
    if (!canvas || !img) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const cssWidth =
      canvas.offsetWidth || canvas.parentElement?.offsetWidth || 260;
    const cssHeight = (cssWidth * img.naturalHeight) / img.naturalWidth;

    canvas.style.width = `${cssWidth}px`;
    canvas.style.height = `${cssHeight}px`;

    canvas.width = cssWidth * dpr;
    canvas.height = cssHeight * dpr;
    ctx.scale(dpr, dpr);
    ctx.clearRect(0, 0, cssWidth, cssHeight);
    ctx.drawImage(img, 0, 0, cssWidth, cssHeight);
  };

  // Mobile scroll scrub via canvas — driven by the hero's own tall scroll region
  useEffect(() => {
    if (!isMobile || !framesLoaded) return;
    const outer = outerRef.current;
    const heroOuter = heroOuterRef.current;
    if (!outer || !heroOuter) return;

    drawFrame(0);

    let rafId: number | null = null;

    const scrub = () => {
      if (rafId !== null) return;
      rafId = requestAnimationFrame(() => {
        rafId = null;
        const scrollableDistance = heroOuter.offsetHeight - outer.clientHeight;
        if (scrollableDistance <= 0) return;
        const progress = Math.min(
          Math.max(outer.scrollTop / scrollableDistance, 0),
          1,
        );
        const frameIndex = Math.min(
          Math.floor(progress * FRAME_COUNT),
          FRAME_COUNT - 1,
        );
        if (frameIndex !== currentFrameRef.current) {
          currentFrameRef.current = frameIndex;
          drawFrame(frameIndex);
        }
      });
    };

    outer.addEventListener("scroll", scrub, { passive: true });
    scrub();
    return () => {
      outer.removeEventListener("scroll", scrub);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, [isMobile, framesLoaded]);

  // Desktop scroll scrub via video — driven by the hero's own tall scroll region
  useEffect(() => {
    if (isMobile) return;
    const video = videoRef.current;
    const outer = outerRef.current;
    const heroOuter = heroOuterRef.current;
    if (!video || !outer || !heroOuter) return;

    let lastSeek = 0;
    const scrub = () => {
      const now = performance.now();
      if (now - lastSeek < 16) return;
      lastSeek = now;
      if (!video.duration || isNaN(video.duration)) return;
      const scrollableDistance = heroOuter.offsetHeight - outer.clientHeight;
      if (scrollableDistance <= 0) return;
      const progress = Math.min(
        Math.max(outer.scrollTop / scrollableDistance, 0),
        1,
      );
      video.currentTime = progress * video.duration;
    };

    video.addEventListener("loadedmetadata", scrub, { once: true });
    if (video.readyState >= 1) scrub();
    outer.addEventListener("scroll", scrub, { passive: true });
    return () => {
      outer.removeEventListener("scroll", scrub);
    };
  }, [isMobile]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&display=swap');

        .svc-outer, .svc-outer *, .svc-outer *::before, .svc-outer *::after {
          box-sizing: border-box;
        }

        /* ── OUTER SCROLL CONTAINER ── */
        .svc-outer {
          position: fixed;
          top: 12vh;
          left: 0; right: 0; bottom: 0;
          overflow-x: hidden;
          overflow-y: scroll;
          scroll-snap-type: y mandatory;
          background: #f0f4f3;
          color: #0f1f1c;
        }

        .svc-section {
          height: 88vh;
          scroll-snap-align: start;
          scroll-snap-stop: always;
          width: 100%;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          overflow-y: hidden;
          overflow-x: hidden;
          padding: 0 clamp(1.5rem, 6vw, 5rem);
        }

        .svc-container {
          max-width: 72rem;
          margin: 0 auto;
          width: 100%;
        }

        /* ── HERO ── */
        .svc-hero-outer {
          position: relative;
          width: 100%;
          height: 280vh;
          scroll-snap-align: start;
          scroll-snap-stop: always;
        }

        .svc-hero-sticky {
          scroll-snap-align: none;
          position: sticky;
          top: 0;
        }

        .svc-hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(2rem, 5vw, 5rem);
          align-items: center;
          width: 100%;
          max-width: 72rem;
          margin: 0 auto;
        }

        .svc-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: white;
          border: 1px solid #dde8e5;
          border-radius: 999px;
          padding: 0.35rem 1rem;
          font-size: clamp(0.7rem, 0.9vw, 0.8rem);
          color: #3d5a52;
          font-weight: 500;
          margin-bottom: clamp(1rem, 2vh, 1.5rem);
          box-shadow: 0 1px 4px rgba(0,0,0,0.05);
        }

        .svc-eyebrow .dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #0D9DB8;
          flex-shrink: 0;
        }

        .svc-hero-h1 {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(1.8rem, 3.5vw, 3.5rem);
          font-weight: 700;
          line-height: 1.1;
          color: #0f1f1c;
          margin: 0 0 clamp(0.75rem, 1.5vh, 1.25rem);
        }

        .svc-hero-h1 em { font-style: italic; color: #0D9DB8; }

        .svc-hero-sub {
          font-size: clamp(0.85rem, 1.1vw, 1rem);
          color: #5a756e;
          line-height: 1.65;
          margin: 0 0 clamp(1.25rem, 2.5vh, 2rem);
          max-width: 440px;
        }

        .svc-hero-cta {
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
          margin-bottom: clamp(1.25rem, 2.5vh, 2rem);
        }

        .btn-teal {
          display: inline-flex; align-items: center; gap: 0.4rem;
          background: #0D9DB8; color: white; font-weight: 600;
          font-size: clamp(0.8rem, 1vw, 0.95rem);
          padding: clamp(0.6rem, 1.2vh, 0.8rem) clamp(1.1rem, 1.8vw, 1.5rem);
          border-radius: 999px; border: none; cursor: pointer;
          transition: background 0.18s, transform 0.15s; white-space: nowrap;
        }
        .btn-teal:hover { background: #0b8da6; transform: translateY(-1px); }

        .btn-ghost {
          display: inline-flex; align-items: center; gap: 0.4rem;
          background: white; color: #0f1f1c; font-weight: 600;
          font-size: clamp(0.8rem, 1vw, 0.95rem);
          padding: clamp(0.6rem, 1.2vh, 0.8rem) clamp(1.1rem, 1.8vw, 1.5rem);
          border-radius: 999px; border: 1.5px solid #d0dbd8; cursor: pointer;
          transition: border-color 0.18s, transform 0.15s; white-space: nowrap;
        }
        .btn-ghost:hover { border-color: #0D9DB8; transform: translateY(-1px); }

        .svc-hero-stats {
          display: flex;
          gap: clamp(1.25rem, 3vw, 3rem);
          padding-top: clamp(1rem, 2vh, 1.5rem);
          border-top: 1px solid #d8e5e2;
          flex-wrap: wrap;
        }

        .svc-hero-stat-num {
          font-size: clamp(1.2rem, 2vw, 1.75rem);
          font-weight: 700;
          color: #0f1f1c;
        }

        .svc-hero-stat-lbl {
          font-size: clamp(0.6rem, 0.75vw, 0.7rem);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #7a9990;
          margin-top: 0.2rem;
        }

        /* Hero visual */
        .svc-hero-visual {
          background: #1A3A5C;
          border-radius: 1.5rem;
          box-shadow: 0 20px 60px rgba(26,58,92,0.25);
          overflow: hidden;
          position: relative;
          min-height: 220px;
          width: 100%;
        }

        .svc-hero-media {
          display: block;
          width: 100%;
          height: auto;
          position: relative;
          z-index: 1;
        }

        .svc-hero-badge {
          position: absolute;
          bottom: clamp(0.75rem, 1.5vw, 1.25rem);
          left: clamp(0.75rem, 1.5vw, 1.25rem);
          background: white;
          border-radius: 999px;
          padding: 0.3rem 0.75rem;
          font-size: clamp(0.65rem, 0.8vw, 0.75rem);
          font-weight: 600;
          color: #0f1f1c;
          display: flex; align-items: center; gap: 0.4rem;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          z-index: 2;
        }

        .svc-live-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #0D9DB8;
          animation: svc-pulse 1.5s ease-in-out infinite;
          flex-shrink: 0;
        }

        @keyframes svc-pulse { 0%,100% { opacity:1; } 50% { opacity:0.3; } }

        /* ── SERVICES LIST ── */
        .svc-list-section .svc-section-sub {
          margin-bottom: clamp(0.75rem, 1.5vh, 1.25rem);
        }

        .svc-list-section .svc-row {
          padding: clamp(0.5rem, 1.4vh, 0.9rem) 0;
        }

        .svc-list-section .svc-row-body p {
          font-size: clamp(0.68rem, 0.85vw, 0.8rem);
          line-height: 1.4;
        }

        .svc-list-section .svc-row-body h3 {
          margin: 0 0 0.15rem;
        }

        .svc-section-label {
          display: flex; align-items: center; gap: 0.5rem;
          font-size: clamp(0.65rem, 0.85vw, 0.75rem);
          font-weight: 600; text-transform: uppercase;
          letter-spacing: 0.1em; color: #0D9DB8;
          margin-bottom: 0.75rem;
        }

        .svc-section-label-line {
          width: 1.5rem; height: 1.5px;
          background: #0D9DB8; flex-shrink: 0;
        }

        .svc-section-title {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(1.6rem, 3vw, 2.75rem);
          font-weight: 700; color: #0f1f1c;
          line-height: 1.15; margin: 0 0 0.75rem;
        }

        .svc-section-sub {
          font-size: clamp(0.8rem, 1.05vw, 1rem);
          color: #6b8278; line-height: 1.6;
          max-width: 580px; margin: 0 0 clamp(1.5rem, 3vh, 2.5rem);
        }

        .svc-list {
          display: flex; flex-direction: column;
          border-top: 1px solid #dde8e5;
        }

        .svc-row {
          display: grid;
          grid-template-columns: 3rem 2.5rem 1fr auto;
          gap: clamp(0.75rem, 2vw, 2rem);
          align-items: center;
          padding: clamp(1rem, 2.5vh, 1.75rem) 0;
          border-bottom: 1px solid #dde8e5;
          cursor: default;
          transition: background 0.2s;
          border-radius: 0.5rem;
        }

        .svc-row:hover { background: white; padding-left: 0.75rem; padding-right: 0.75rem; }

        .svc-row-num {
          font-size: clamp(0.75rem, 0.9vw, 0.85rem);
          font-weight: 700; color: #c8d8d5;
          letter-spacing: 0.05em;
        }

        .svc-row-icon {
          font-size: clamp(1.25rem, 1.8vw, 1.5rem);
        }

        .svc-row-body h3 {
          font-size: clamp(0.9rem, 1.2vw, 1.1rem);
          font-weight: 700; color: #0f1f1c; margin: 0 0 0.3rem;
        }

        .svc-row-body p {
          font-size: clamp(0.72rem, 0.95vw, 0.875rem);
          color: #6b8278; line-height: 1.55; margin: 0;
        }

        .svc-row-tag {
          font-size: clamp(0.65rem, 0.8vw, 0.75rem);
          font-weight: 600; color: #0D9DB8;
          background: #e6f7fa;
          padding: 0.25rem 0.75rem;
          border-radius: 999px;
          white-space: nowrap;
        }

        /* ── FLOOR PLAN / SHOWCASE ── */
        .svc-showcase-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(2rem, 5vw, 5rem);
          align-items: center;
        }

        .svc-checklist {
          display: flex; flex-direction: column;
          gap: clamp(0.75rem, 1.5vh, 1.25rem);
          margin-top: clamp(1rem, 2vh, 1.5rem);
        }

        .svc-check-item {
          display: flex;
          gap: clamp(0.6rem, 1vw, 0.875rem);
          align-items: flex-start;
        }

        .svc-check-icon {
          width: clamp(1.1rem, 1.4vw, 1.375rem);
          height: clamp(1.1rem, 1.4vw, 1.375rem);
          border-radius: 50%;
          background: #e6f7fa; color: #0D9DB8;
          display: flex; align-items: center; justify-content: center;
          font-size: clamp(0.6rem, 0.75vw, 0.75rem);
          flex-shrink: 0; margin-top: 0.15rem; font-weight: 700;
        }

        .svc-check-title {
          font-size: clamp(0.85rem, 1.1vw, 1rem);
          font-weight: 700; color: #0f1f1c; line-height: 1.3;
        }

        .svc-check-desc {
          font-size: clamp(0.7rem, 0.9vw, 0.875rem);
          color: #6b8278; line-height: 1.55; margin-top: 0.2rem;
        }

        .svc-visual-card {
          background: #1A3A5C;
          border-radius: 1.5rem;
          padding: clamp(0.75rem, 1.5vw, 1.25rem);
          box-shadow: 0 20px 60px rgba(26,58,92,0.2);
          aspect-ratio: 4/3;
          position: relative; overflow: hidden;
        }

        .svc-visual-badge {
          position: absolute;
          top: clamp(0.6rem, 1vw, 1rem);
          left: clamp(0.6rem, 1vw, 1rem);
          background: white; border-radius: 999px;
          padding: 0.3rem 0.75rem;
          font-size: clamp(0.65rem, 0.8vw, 0.75rem);
          font-weight: 600; color: #0f1f1c;
          display: flex; align-items: center; gap: 0.4rem;
          z-index: 10; box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }

        .svc-floorplan-svg {
          width: 100%; height: 100%;
        }

        /* ── FOOTER ── */
        .svc-footer-section {
          scroll-snap-align: start;
          scroll-snap-stop: always;
          width: 100%; flex-shrink: 0;
        }

        /* ── MOBILE ── */
        @media (max-width: 768px) {
          .svc-outer {
            position: static !important;
            height: auto !important;
            overflow-y: auto !important;
            overflow-x: hidden !important;
            scroll-snap-type: none !important;
            max-width: 100vw !important;
          }
          .svc-section {
            height: auto !important;
            scroll-snap-align: none !important;
            padding: 2.5rem 1.25rem !important;
            align-items: flex-start !important;
          }
          .svc-hero-outer {
            height: 160vh;
          }
          .svc-hero-sticky {
            height: 100vh !important;
            min-height: 100vh !important;
            max-height: 100vh !important;
            align-items: center !important;
            overflow-y: auto !important;
            overflow-x: hidden !important;
            padding: 1.75rem 1.25rem !important;
          }
          .svc-hero-grid {
            grid-template-columns: 1fr !important;
            gap: 1rem !important;
          }
          .svc-hero-visual { order: -1; max-height: 26vh; }
          .svc-hero-media {
            width: 100% !important;
            height: 100% !important;
            object-fit: cover !important;
          }
          .svc-hero-sub { max-width: 100% !important; margin-bottom: 1rem !important; }
          .svc-eyebrow { margin-bottom: 0.6rem !important; }
          .svc-hero-h1 { margin-bottom: 0.6rem !important; }
          .svc-hero-cta { margin-bottom: 0 !important; }
          .svc-hero-stats { display: none !important; }
          .svc-row {
            grid-template-columns: 2rem 2rem 1fr !important;
          }
          .svc-row-tag { display: none; }
          .svc-showcase-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
          .svc-list-section, .svc-showcase-section {
            padding-left: 1.25rem !important;
            padding-right: 1.25rem !important;
          }
        }
      `}</style>

      <div className="svc-outer" ref={outerRef}>

        {/* ── HERO ── */}
        <div className="svc-hero-outer" ref={heroOuterRef}>
        <section className="svc-section svc-hero-sticky">
          <div className="svc-hero-grid">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="svc-eyebrow">
                <span className="dot" /> Services
              </div>
              <h1 className="svc-hero-h1">
                Design smarter. <em>Visualize</em> before you build.
              </h1>
              <p className="svc-hero-sub">
                Transform room photos, floor plans, and ideas into photorealistic interiors
                powered by advanced AI technology.
              </p>
              <div className="svc-hero-cta">
                <button className="btn-teal">Start a design →</button>
                <button className="btn-ghost">Talk to us</button>
              </div>
              <div className="svc-hero-stats">
                <div>
                  <div className="svc-hero-stat-num"><Counter to={1200} suffix="+" /></div>
                  <div className="svc-hero-stat-lbl">AI designs generated</div>
                </div>
                <div>
                  <div className="svc-hero-stat-num"><Counter to={50} suffix="+" /></div>
                  <div className="svc-hero-stat-lbl">Styles & materials</div>
                </div>
                <div>
                  <div className="svc-hero-stat-num"><Counter to={500} suffix="+" /></div>
                  <div className="svc-hero-stat-lbl">Happy customers</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65, ease: "easeOut", delay: 0.15 }}
            >
              <div className="svc-hero-visual">
                {isMobile ? (
                  <canvas
                    ref={canvasRef}
                    className="svc-hero-media"
                    style={{ mixBlendMode: "screen" }}
                  />
                ) : (
                  <video
                    ref={videoRef}
                    muted
                    playsInline
                    preload="auto"
                    className="svc-hero-media"
                    style={{ mixBlendMode: "screen" }}
                  >
                    <source src="/Assets/Logo/LogoLoop_smooth.mp4" type="video/mp4" />
                  </video>
                )}
                <div className="svc-hero-badge">
                  <span className="svc-live-dot" /> Generating…
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        </div>

        {/* ── SERVICES LIST ── */}
        <div className="svc-list-section svc-section">
          <div className="svc-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <div className="svc-section-label">
                <div className="svc-section-label-line" /> What we offer
              </div>
              <h2 className="svc-section-title">Four ways to design with AI</h2>
              <p className="svc-section-sub">
                Each service leads with a concrete outcome — not a feature list.
              </p>
            </motion.div>

            <motion.div
              className="svc-list"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
            >
              {SERVICES.map(({ num, icon, title, body, tag }) => (
                <motion.div
                  key={num}
                  className="svc-row"
                  variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } } }}
                >
                  <div className="svc-row-num">{num}</div>
                  <div className="svc-row-icon">{icon}</div>
                  <div className="svc-row-body">
                    <h3>{title}</h3>
                    <p>{body}</p>
                  </div>
                  <div className="svc-row-tag">{tag}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* ── FLOOR PLAN SHOWCASE ── */}
        <div className="svc-showcase-section svc-section">
          <div className="svc-container">
            <div className="svc-showcase-grid">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <div className="svc-section-label">
                  <div className="svc-section-label-line" /> Floor plan to 3D
                </div>
                <h2 className="svc-section-title">From blueprint to walkable room</h2>
                <p className="svc-section-sub">
                  Upload a 2D floor plan. DecoMind reads the walls, places furniture intelligently, and renders a 3D walkthrough you can orbit in real time.
                </p>
                <div className="svc-checklist">
                  {checkItems.map(({ title, desc }) => (
                    <div key={title} className="svc-check-item">
                      <div className="svc-check-icon">✓</div>
                      <div>
                        <div className="svc-check-title">{title}</div>
                        <div className="svc-check-desc">{desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              >
                <div className="svc-visual-card">
                  <div className="svc-visual-badge">
                    <span className="svc-live-dot" /> 2D → 3D
                  </div>
                  <svg viewBox="0 0 300 220" className="svc-floorplan-svg">
                    <rect x="20" y="20" width="260" height="180" fill="none" stroke="rgba(255,255,255,.7)" strokeWidth="3" />
                    <line x1="20" y1="110" x2="180" y2="110" stroke="rgba(255,255,255,.5)" strokeWidth="2" />
                    <line x1="180" y1="20" x2="180" y2="200" stroke="rgba(255,255,255,.5)" strokeWidth="2" />
                    <line x1="90" y1="20" x2="140" y2="20" stroke="rgba(13,157,184,.9)" strokeWidth="4" />
                    <line x1="280" y1="80" x2="280" y2="140" stroke="rgba(13,157,184,.9)" strokeWidth="4" />
                    <rect x="40" y="40" width="50" height="40" fill="rgba(212,165,116,.6)" rx="3" />
                    <rect x="210" y="130" width="50" height="50" fill="rgba(13,157,184,.5)" rx="3" />
                    <circle cx="240" cy="60" r="14" fill="rgba(228,64,95,.5)" />
                  </svg>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* ── FOOTER ── */}
        <section className="svc-footer-section">
          <Footer />
        </section>

      </div>
    </>
  );
}
