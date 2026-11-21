import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';

// Structural heights for the 14 architectural elevation elements (percentages)
const FOURTEEN_ELEMENT_PROFILES = [
  { id: 1, heightPct: 48, label: 'GL-01', spec: '+14.2m', offsetTop: 26 },
  { id: 2, heightPct: 62, label: 'GL-02', spec: '+18.5m', offsetTop: 18 },
  { id: 3, heightPct: 78, label: 'GL-03', spec: '+24.0m', offsetTop: 10 },
  { id: 4, heightPct: 56, label: 'GL-04', spec: '+16.8m', offsetTop: 22 },
  { id: 5, heightPct: 92, label: 'GL-05', spec: '+28.4m', offsetTop: 4 },
  { id: 6, heightPct: 86, label: 'GL-06', spec: '+26.2m', offsetTop: 8 },
  { id: 7, heightPct: 100, label: 'GL-07', spec: '+32.0m', offsetTop: 0 },
  { id: 8, heightPct: 94, label: 'GL-08', spec: '+29.6m', offsetTop: 3 },
  { id: 9, heightPct: 72, label: 'GL-09', spec: '+22.4m', offsetTop: 14 },
  { id: 10, heightPct: 82, label: 'GL-10', spec: '+25.0m', offsetTop: 9 },
  { id: 11, heightPct: 68, label: 'GL-11', spec: '+20.8m', offsetTop: 16 },
  { id: 12, heightPct: 54, label: 'GL-12', spec: '+16.0m', offsetTop: 24 },
  { id: 13, heightPct: 42, label: 'GL-13', spec: '+12.6m', offsetTop: 30 },
  { id: 14, heightPct: 35, label: 'GL-14', spec: '+10.5m', offsetTop: 35 },
];

export default function AlManarTypographicHero() {
  const containerRef = useRef<HTMLElement | null>(null);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000, normX: 0.5, active: false });
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
      setIsReducedMotion(mq.matches);
      const listener = (e: MediaQueryListEvent) => setIsReducedMotion(e.matches);
      mq.addEventListener('change', listener);
      return () => mq.removeEventListener('change', listener);
    }
  }, []);

  const handlePointerMove = useCallback((e: React.PointerEvent<HTMLElement>) => {
    if (e.pointerType === 'touch' || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const normX = Math.max(0, Math.min(1, x / rect.width));
    setMousePos({ x, y, normX, active: true });
  }, []);

  const handlePointerLeave = useCallback(() => {
    setMousePos((prev) => ({ ...prev, active: false }));
  }, []);

  // Headline lines for masked reveal
  const headlineLines = [
    { text: 'ENGINEERING', isMetallic: false },
    { text: 'THE SYSTEMS THAT KEEP', isMetallic: false },
    { text: 'BUILDINGS RUNNING.', isMetallic: true },
  ];

  return (
    <section
      ref={containerRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="relative w-full min-h-[94vh] lg:min-h-screen bg-[#17191D] text-white flex flex-col justify-between overflow-hidden select-none pt-24 pb-12 lg:pt-28 lg:pb-16"
      style={{
        backgroundColor: '#17191D',
      }}
      aria-label="Al Manar Tech Corporate Engineering Hero"
    >
      {/* =========================================================================
          1. BACKGROUND ARCHITECTURAL GRID & RADIAL LIGHTING
          ========================================================================= */}
      {/* Dynamic Interactive Copper Glow (Follows pointer on desktop) */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-500 z-0"
        style={{
          opacity: mousePos.active ? 1 : 0.35,
          background: mousePos.active
            ? `radial-gradient(circle 500px at ${mousePos.x}px ${mousePos.y}px, rgba(181, 110, 75, 0.18), transparent 70%)`
            : 'radial-gradient(circle 600px at 50% 35%, rgba(181, 110, 75, 0.12), transparent 70%)',
        }}
        aria-hidden="true"
      />

      {/* Static Subtle Secondary Glow for Depth */}
      <div
        className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full blur-[160px] pointer-events-none z-0"
        style={{ background: 'rgba(197, 132, 97, 0.08)' }}
        aria-hidden="true"
      />

      {/* Precision CAD / Architectural Grid Layer */}
      <div
        className="absolute inset-0 pointer-events-none z-0 opacity-25"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(217, 154, 116, 0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(217, 154, 116, 0.12) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
        }}
        aria-hidden="true"
      />

      {/* Abstract Engineering Dimension Lines & SVG Schematics */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-30"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <pattern id="dot-grid" x="0" y="0" width="36" height="36" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="#C5CDD4" opacity="0.25" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dot-grid)" />

        {/* Structural Horizontal Reference Guides */}
        <line x1="0" y1="24%" x2="100%" y2="24%" stroke="#343A40" strokeWidth="1" strokeDasharray="4 8" />
        <line x1="0" y1="58%" x2="100%" y2="58%" stroke="#343A40" strokeWidth="1" strokeDasharray="4 8" />
        <line x1="0" y1="84%" x2="100%" y2="84%" stroke="rgba(217, 154, 116, 0.25)" strokeWidth="1" />

        {/* Technical Coordinate Crosshairs */}
        <g stroke="#B56E4B" strokeWidth="1" opacity="0.6">
          <line x1="60" y1="180" x2="80" y2="180" />
          <line x1="70" y1="170" x2="70" y2="190" />
          <line x1="94%" y1="260" x2="96%" y2="260" />
          <line x1="95%" y1="250" x2="95%" y2="270" />
        </g>
      </svg>

      {/* =========================================================================
          2. FOURTEEN ABSTRACT ARCHITECTURAL ELEVATION ELEMENTS (PURE CSS/SVG)
          ========================================================================= */}
      <div
        className="absolute bottom-16 sm:bottom-20 left-0 right-0 h-[280px] sm:h-[340px] lg:h-[420px] px-4 sm:px-8 lg:px-14 flex items-end justify-between gap-1.5 sm:gap-2.5 lg:gap-4 pointer-events-none z-10 opacity-75"
        aria-hidden="true"
      >
        {FOURTEEN_ELEMENT_PROFILES.map((el, idx) => {
          // Dynamic proximity calculation for interactive lighting
          const activeIndex = mousePos.normX * (FOURTEEN_ELEMENT_PROFILES.length - 1);
          const dist = Math.abs(idx - activeIndex);
          const isNearCursor = mousePos.active && dist < 2.5;
          const proximityBrightness = isNearCursor ? 1 - dist / 2.5 : 0;

          return (
            <motion.div
              key={el.id}
              initial={isReducedMotion ? { opacity: 1, scaleY: 1 } : { opacity: 0, scaleY: 0 }}
              animate={{ opacity: 1, scaleY: 1 }}
              transition={{
                duration: isReducedMotion ? 0 : 0.9,
                delay: isReducedMotion ? 0 : idx * 0.045 + 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              style={{
                transformOrigin: 'bottom',
                height: `${el.heightPct}%`,
                flex: '1 1 0%',
                maxWidth: '68px',
              }}
              className="relative flex flex-col justify-between rounded-t-lg transition-colors duration-300"
            >
              {/* Outer Architectural Truss Shell */}
              <div
                className="w-full h-full rounded-t-lg flex flex-col justify-between p-1 transition-all duration-300"
                style={{
                  background: isNearCursor
                    ? 'linear-gradient(180deg, rgba(181, 110, 75, 0.35) 0%, rgba(37, 42, 48, 0.85) 100%)'
                    : 'linear-gradient(180deg, rgba(37, 42, 48, 0.8) 0%, rgba(23, 25, 29, 0.95) 100%)',
                  borderTop: isNearCursor
                    ? '2px solid #E7B99E'
                    : '1px solid rgba(217, 154, 116, 0.45)',
                  borderLeft: '1px solid rgba(217, 154, 116, 0.22)',
                  borderRight: '1px solid rgba(217, 154, 116, 0.22)',
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                }}
              >
                {/* Structural Top Cap & Laser Node */}
                <div className="flex items-center justify-between px-1 pt-0.5">
                  <span
                    className="w-1.5 h-1.5 rounded-full transition-colors duration-300"
                    style={{
                      backgroundColor: isNearCursor ? '#E7B99E' : '#B56E4B',
                      boxShadow: isNearCursor ? '0 0 8px #B56E4B' : 'none',
                    }}
                  />
                  <span className="font-mono text-[8px] text-stone-400 hidden xl:inline">
                    {el.label}
                  </span>
                </div>

                {/* Internal Structural Cross-Hatch Lines (SVG) */}
                <svg
                  className="w-full flex-1 my-1 overflow-visible opacity-50"
                  viewBox="0 0 40 120"
                  preserveAspectRatio="none"
                >
                  <line x1="0" y1="0" x2="40" y2="40" stroke="#343A40" strokeWidth="0.75" />
                  <line x1="40" y1="0" x2="0" y2="40" stroke="#343A40" strokeWidth="0.75" />
                  <line x1="0" y1="40" x2="40" y2="80" stroke="#343A40" strokeWidth="0.75" />
                  <line x1="40" y1="40" x2="0" y2="80" stroke="#343A40" strokeWidth="0.75" />
                  <line x1="0" y1="80" x2="40" y2="120" stroke="#343A40" strokeWidth="0.75" />
                  <line x1="40" y1="80" x2="0" y2="120" stroke="#343A40" strokeWidth="0.75" />

                  {/* Horizontal Floor Division Ticks */}
                  <line x1="0" y1="40" x2="40" y2="40" stroke="rgba(217, 154, 116, 0.4)" strokeWidth="1" />
                  <line x1="0" y1="80" x2="40" y2="80" stroke="rgba(217, 154, 116, 0.4)" strokeWidth="1" />
                </svg>

                {/* Base Level Indicator */}
                <div className="px-1 pb-1 text-center font-mono text-[8px] text-[#D99A74] border-t border-white/5 truncate">
                  {el.spec}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* =========================================================================
          3. HERO EDITORIAL CONTENT (12-COLUMN FULL-WIDTH LAYOUT)
          ========================================================================= */}
      <div className="relative z-20 max-w-[1440px] w-full mx-auto px-6 sm:px-10 lg:px-16 flex-1 flex flex-col justify-between">
        
        {/* TOP: Telemetry Identifier Strip */}
        <motion.div
          initial={isReducedMotion ? { opacity: 1 } : { opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10 font-mono text-xs text-stone-300"
        >
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#B56E4B] animate-ping" />
            <span className="text-white font-bold tracking-widest uppercase">
              AL MANAR TECH • ABU DHABI
            </span>
            <span className="text-stone-500">•</span>
            <span className="text-stone-400 font-semibold tracking-wider">
              ADDC &amp; ADM APPROVED CONTRACTOR
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <span className="px-2.5 py-0.5 rounded bg-[#252A30] border border-[#B56E4B]/40 text-[#D99A74] font-bold tracking-wide">
              MUNICIPALITY REGISTERED
            </span>
            <span className="hidden sm:inline text-stone-400">
              COMMERCIAL • INDUSTRIAL • RESIDENTIAL
            </span>
          </div>
        </motion.div>

        {/* MIDDLE: Oversized Full-Width Typography (Hero Centerpiece) */}
        <div className="my-auto py-8 sm:py-12 lg:py-16">
          <h1
            className="font-display font-extrabold uppercase tracking-tight text-white select-text"
            style={{
              fontSize: 'clamp(2.75rem, 7.8vw, 7.5rem)',
              lineHeight: 0.96,
              letterSpacing: '-0.03em',
            }}
          >
            {headlineLines.map((line, idx) => (
              <div key={idx} className="overflow-hidden">
                <motion.div
                  initial={isReducedMotion ? { y: 0 } : { y: '108%' }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: isReducedMotion ? 0 : 0.85,
                    delay: isReducedMotion ? 0 : idx * 0.14 + 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="block"
                >
                  {line.isMetallic ? (
                    <span
                      className="text-metallic-copper"
                      style={{
                        background:
                          'linear-gradient(135deg, #8B523B 0%, #B56E4B 22%, #C58461 45%, #D99A74 68%, #E7B99E 85%, #B56E4B 100%)',
                        backgroundSize: '250% 100%',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        display: 'inline-block',
                      }}
                    >
                      {line.text}
                    </span>
                  ) : (
                    <span>{line.text}</span>
                  )}
                </motion.div>
              </div>
            ))}
          </h1>
        </div>

        {/* BOTTOM: Supporting Narrative & Real CTAs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end pt-4 pb-8">
          
          {/* Supporting Paragraph (7 cols) */}
          <motion.div
            initial={isReducedMotion ? { opacity: 1 } : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-2"
          >
            <div className="inline-block px-3 py-1 rounded-full font-mono text-xs font-bold tracking-widest text-[#D99A74] uppercase border border-[#B56E4B]/30 mb-2 bg-[#252A30]/60">
              INTEGRATED ENGINEERING & INFRASTRUCTURE
            </div>
            <p className="font-sans text-base sm:text-lg lg:text-[19px] leading-relaxed text-stone-200 max-w-2xl">
              Al Manar Tech delivers integrated electromechanical, HVAC, fire detection, IT and telecommunications, security and maintenance solutions for commercial, industrial and residential environments across Abu Dhabi and Al Ain.
            </p>
          </motion.div>

          {/* Action Buttons (5 cols) */}
          <motion.div
            initial={isReducedMotion ? { opacity: 1 } : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 lg:justify-end"
          >
            {/* Primary Button */}
            <a
              href="/contact"
              className="group inline-flex items-center justify-center gap-3 px-8 text-xs font-display font-bold uppercase tracking-wider text-white rounded-xl transition-colors duration-200 shadow-sm"
              style={{
                height: '56px',
                minWidth: '220px',
                backgroundColor: '#B56E4B',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#C58461';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#B56E4B';
              }}
            >
              <span>DISCUSS YOUR PROJECT</span>
              <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </a>

            {/* Secondary Button */}
            <a
              href="/services"
              className="group inline-flex items-center justify-center gap-2.5 px-8 text-xs font-display font-bold uppercase tracking-wider text-white rounded-xl transition-colors duration-200"
              style={{
                height: '56px',
                minWidth: '220px',
                background: 'rgba(37, 42, 48, 0.65)',
                border: '1px solid rgba(237, 233, 227, 0.25)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(217, 154, 116, 0.7)';
                e.currentTarget.style.color = '#E7B99E';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(237, 233, 227, 0.25)';
                e.currentTarget.style.color = '#FFFFFF';
              }}
            >
              <span>EXPLORE OUR SERVICES</span>
              <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </a>
          </motion.div>

        </div>

        {/* =========================================================================
            4. COMPANY INFORMATION STRIP (MINIMAL EDITORIAL DIVIDER)
            ========================================================================= */}
        <motion.div
          initial={isReducedMotion ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.65 }}
          className="pt-6 border-t border-white/10 grid grid-cols-2 lg:grid-cols-4 gap-4 font-mono text-xs text-stone-300"
        >
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B56E4B]" />
            <span className="font-bold tracking-wider text-white">ESTABLISHED 2001</span>
          </div>

          <div className="flex items-center gap-2 sm:border-l sm:border-white/10 sm:pl-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B56E4B]" />
            <span className="font-bold tracking-wider text-white">ABU DHABI & AL AIN</span>
          </div>

          <div className="flex items-center gap-2 lg:border-l lg:border-white/10 lg:pl-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B56E4B]" />
            <span className="font-bold tracking-wider text-white">INTEGRATED ENGINEERING</span>
          </div>

          <div className="flex items-center gap-2 lg:border-l lg:border-white/10 lg:pl-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B56E4B]" />
            <span className="font-bold tracking-wider text-white">SIX TECHNICAL SERVICE DIVISIONS</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
