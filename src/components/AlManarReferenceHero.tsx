import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Six technical service divisions matching Image 2 exactly
const SERVICE_PANELS = [
  {
    id: 'hvac',
    titleLine1: 'HVAC',
    titleLine2: 'INSTALLATIONS',
    href: '/services/hvac',
    icon: (
      <svg className="w-5 h-5 text-[#F07842] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4z" />
        <path d="M12 12c2.67-2 4-4 4-6a4 4 0 1 0-8 0c0 2 1.33 4 4 6z" />
        <path d="M12 12c2 2.67 4 4 6 4a4 4 0 0 0 0-8c-2 0-4 1.33-6 4z" />
        <path d="M12 12c-2.67 2-4 4-4 6a4 4 0 0 0 8 0c0-2-1.33-4-4-6z" />
        <circle cx="12" cy="12" r="1.5" fill="currentColor" />
      </svg>
    )
  },
  {
    id: 'mep',
    titleLine1: 'MEP',
    titleLine2: 'CONTRACTING',
    href: '/services/mep-contracting',
    icon: (
      <svg className="w-5 h-5 text-[#F07842] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    )
  },
  {
    id: 'fire',
    titleLine1: 'FIRE',
    titleLine2: 'DETECTION',
    href: '/services/fire-detection',
    icon: (
      <svg className="w-5 h-5 text-[#F07842] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
      </svg>
    )
  },
  {
    id: 'telecom',
    titleLine1: 'IT &',
    titleLine2: 'TELECOMMUNICATIONS',
    href: '/services/it-telecom',
    icon: (
      <svg className="w-5 h-5 text-[#F07842] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="6" height="6" rx="1" />
        <rect x="16" y="2" width="6" height="6" rx="1" />
        <rect x="9" y="16" width="6" height="6" rx="1" />
        <path d="M5 8v3a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8" />
        <path d="M12 12v4" />
      </svg>
    )
  },
  {
    id: 'security',
    titleLine1: 'SECURITY &',
    titleLine2: 'SURVEILLANCE',
    href: '/services/security',
    icon: (
      <svg className="w-5 h-5 text-[#F07842] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    )
  },
  {
    id: 'maintenance',
    titleLine1: 'FACILITY',
    titleLine2: 'MAINTENANCE',
    href: '/services/facility-maintenance',
    icon: (
      <svg className="w-5 h-5 text-[#F07842] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    )
  }
];

// Bottom information strip items
const INFO_ITEMS = [
  {
    icon: (
      <svg className="w-4 h-4 text-[#F07842] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
    label: 'ESTABLISHED 2001'
  },
  {
    icon: (
      <svg className="w-4 h-4 text-[#F07842] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: 'ABU DHABI & AL AIN'
  },
  {
    icon: (
      <svg className="w-4 h-4 text-[#F07842] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    ),
    label: 'INTEGRATED ENGINEERING'
  },
  {
    icon: (
      <svg className="w-4 h-4 text-[#F07842] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
      </svg>
    ),
    label: 'SIX TECHNICAL SERVICE DIVISIONS'
  }
];

export default function AlManarReferenceHero() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const listener = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, []);

  return (
    <section 
      id="homepage-hero"
      className="relative -mt-20 sm:-mt-24 pt-24 sm:pt-28 min-h-[95vh] flex flex-col justify-between bg-[#111920] text-white overflow-hidden border-b border-[#252F38]"
      aria-label="Al Manar Tech Homepage Hero"
    >
      {/* =========================================================================
          1. BACKGROUND PHOTOGRAPH (IMAGE 1 INTEGRATION) & LAYERED GRADIENTS
          ========================================================================= */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        {/* Actual Engineering Building Photograph (Image 1) */}
        <img 
          src="/images/hero-building-engineering.jpg" 
          alt="Al Manar Tech Engineering Infrastructure & Building Architecture"
          className="w-full h-full object-cover object-right sm:object-center transform scale-100"
          loading="eager"
          decoding="async"
        />

        {/* Sophisticated Dark Layered Gradients matching exact specs */}
        {/* Top Gradient: ensures floating header readability */}
        <div 
          className="absolute inset-0" 
          style={{
            background: 'linear-gradient(180deg, rgba(17, 25, 32, 0.70) 0%, rgba(17, 25, 32, 0.40) 25%, rgba(17, 25, 32, 0.15) 50%, rgba(17, 25, 32, 0.85) 100%)'
          }}
        />

        {/* Left Gradient: provides obsidian density and 100% contrast for the typography */}
        <div 
          className="absolute inset-0" 
          style={{
            background: 'linear-gradient(90deg, rgba(17, 25, 32, 0.95) 0%, rgba(17, 25, 32, 0.88) 32%, rgba(17, 25, 32, 0.50) 60%, rgba(17, 25, 32, 0.20) 100%)'
          }}
        />

        {/* Radial Subtle Ambient Center Overlay */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 75% 45%, rgba(240, 120, 66, 0.08) 0%, transparent 60%)'
          }}
        />

        {/* Technical Coordinate Grid Overlay (Matching Reference Image 2) */}
        <div 
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `linear-gradient(to right, #FFFFFF 1px, transparent 1px), linear-gradient(to bottom, #FFFFFF 1px, transparent 1px)`,
            backgroundSize: '80px 80px'
          }}
        />

        {/* Copper Light Streaks Accent SVG */}
        <svg 
          className="absolute inset-0 w-full h-full pointer-events-none opacity-40" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="heroCopperStreak" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F07842" stopOpacity="0" />
              <stop offset="40%" stopColor="#F07842" stopOpacity="0.8" />
              <stop offset="70%" stopColor="#FFAB78" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#D96532" stopOpacity="0" />
            </linearGradient>
            <filter id="heroGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>
          <path 
            d="M 320 480 C 480 320, 680 180, 880 140 C 980 120, 1140 180, 1320 320" 
            fill="none" 
            stroke="url(#heroCopperStreak)" 
            strokeWidth="1.5" 
            filter="url(#heroGlow)"
          />
          <path 
            d="M 400 460 C 560 280, 780 160, 960 180 C 1100 200, 1260 380, 1420 540" 
            fill="none" 
            stroke="url(#heroCopperStreak)" 
            strokeWidth="1" 
            opacity="0.5"
          />
        </svg>
      </div>

      {/* =========================================================================
          2. MAIN HERO CONTENT GRID (12 COLS: TYPOGRAPHY LEFT, PANELS RIGHT)
          ========================================================================= */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* -------------------------------------------------------------------
              LEFT COLUMN: EYEBROW + 5-LINE HEADLINE + PARAGRAPH + DUAL CTAS
              ------------------------------------------------------------------- */}
          <div className="lg:col-span-7 xl:col-span-8 space-y-6 sm:space-y-8 max-w-3xl">
            
            {/* Eyebrow: — INTEGRATED ENGINEERING & TECHNICAL SOLUTIONS — */}
            <motion.div 
              initial={prefersReducedMotion ? false : { opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2.5 text-[#F07842] font-mono text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase select-none"
            >
              <span className="w-5 sm:w-7 h-[1.5px] bg-[#F07842]" />
              <span>INTEGRATED ENGINEERING &amp; TECHNICAL SOLUTIONS</span>
              <span className="w-5 sm:w-7 h-[1.5px] bg-[#F07842]" />
            </motion.div>

            {/* 5-Line Strict Headline with Metallic Copper Treatment */}
            <motion.h1 
              initial={prefersReducedMotion ? false : { opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-extrabold uppercase tracking-tight text-white text-[2.75rem] sm:text-[3.75rem] md:text-[4.5rem] lg:text-[4.75rem] xl:text-[5.25rem] leading-[0.93] sm:leading-[0.93]"
            >
              <span className="block text-white">ENGINEERING</span>
              <span className="block text-white">THE SYSTEMS</span>
              <span className="block text-white">THAT KEEP</span>
              <span className="block text-copper-headline">BUILDINGS</span>
              <span className="block text-copper-headline">RUNNING.</span>
            </motion.h1>

            {/* Exact Supporting Paragraph */}
            <motion.p 
              initial={prefersReducedMotion ? false : { opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="font-sans text-[#D5D9DF] text-sm sm:text-base leading-relaxed max-w-xl text-left"
            >
              Al Manar Tech delivers integrated electromechanical, HVAC, fire detection, IT and telecommunications, security and maintenance solutions for commercial, industrial and residential environments across Abu Dhabi and Al Ain.
            </motion.p>

            {/* Dual CTA Buttons (Strict Match to Image 2) */}
            <motion.div 
              initial={prefersReducedMotion ? false : { opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 pt-2"
            >
              {/* Primary CTA: DISCUSS YOUR PROJECT → */}
              <a 
                href="/contact"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 sm:py-4 rounded-xl font-display font-bold text-xs sm:text-sm uppercase tracking-wider bg-[#F07842] text-[#111920] hover:bg-[#D96532] shadow-lg shadow-[#F07842]/25 transition-all duration-200 group/btn"
              >
                <span>DISCUSS YOUR PROJECT</span>
                <span className="group-hover/btn:translate-x-1 transition-transform duration-200">→</span>
              </a>

              {/* Secondary CTA: EXPLORE OUR SERVICES → */}
              <a 
                href="/services"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 sm:py-4 rounded-xl font-display font-bold text-xs sm:text-sm uppercase tracking-wider bg-[#111920]/60 backdrop-blur-md text-white border border-[#F07842]/60 hover:border-[#F07842] hover:bg-[#F07842]/10 transition-all duration-200 group/btn2"
              >
                <span>EXPLORE OUR SERVICES</span>
                <span className="group-hover/btn2:translate-x-1 transition-transform duration-200">→</span>
              </a>
            </motion.div>

          </div>

          {/* -------------------------------------------------------------------
              RIGHT COLUMN: SIX VERTICALLY STACKED TRANSLUCENT SERVICE PANELS
              ------------------------------------------------------------------- */}
          <div className="lg:col-span-5 xl:col-span-4 flex justify-start lg:justify-end">
            <motion.div 
              initial={prefersReducedMotion ? false : { opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="w-full sm:max-w-xs space-y-2.5 sm:space-y-3"
            >
              {SERVICE_PANELS.map((panel, idx) => (
                <motion.a 
                  key={panel.id}
                  href={panel.href}
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 0.25 + idx * 0.08, 
                    ease: [0.16, 1, 0.3, 1] 
                  }}
                  className="glass-panel-copper rounded-2xl px-4 py-3 sm:px-5 sm:py-3.5 flex items-center gap-3.5 group cursor-pointer block border border-white/12 hover:border-[#F07842]/60 transition-all duration-300"
                >
                  {/* Copper Line Icon */}
                  <div className="p-2 rounded-xl bg-[#111920]/60 border border-white/5 group-hover:border-[#F07842]/30 transition-colors shrink-0">
                    {panel.icon}
                  </div>

                  {/* Service Title */}
                  <div className="flex flex-col">
                    <span className="font-display font-bold text-[11px] sm:text-xs tracking-wider text-white uppercase leading-tight group-hover:text-[#FFAB78] transition-colors">
                      {panel.titleLine1}
                    </span>
                    <span className="font-display font-bold text-[11px] sm:text-xs tracking-wider text-white uppercase leading-tight group-hover:text-[#FFAB78] transition-colors">
                      {panel.titleLine2}
                    </span>
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </div>

        </div>
      </div>

      {/* =========================================================================
          3. FULL-WIDTH BOTTOM INFORMATION STRIP (STRICT MATCH TO IMAGE 2)
          ========================================================================= */}
      <div className="relative z-10 w-full border-t border-white/10 bg-[#111920]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
          <div className="flex flex-wrap items-center justify-between gap-y-3 gap-x-6 text-white font-mono text-xs sm:text-[13px] font-bold tracking-wider uppercase">
            
            {INFO_ITEMS.map((item, idx) => (
              <React.Fragment key={idx}>
                <div className="flex items-center gap-2.5 sm:gap-3 text-slate-200 hover:text-white transition-colors">
                  {item.icon}
                  <span>{item.label}</span>
                </div>

                {/* Fine vertical copper dividers between items */}
                {idx < INFO_ITEMS.length - 1 && (
                  <div className="hidden lg:block w-[1px] h-4 bg-[#F07842]/40" />
                )}
              </React.Fragment>
            ))}

          </div>
        </div>
      </div>

    </section>
  );
}
