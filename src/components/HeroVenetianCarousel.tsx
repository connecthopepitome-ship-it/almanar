import React, { useState, useEffect, useRef } from 'react';

// Three engineering background images
const SLIDES = [
  {
    id: 1,
    src: '/images/hero-slide-1.jpg',
    alt: 'Modern commercial building with integrated HVAC infrastructure'
  },
  {
    id: 2,
    src: '/images/hero-slide-2.jpg',
    alt: 'Contemporary glass commercial and engineering building'
  },
  {
    id: 3,
    src: '/images/hero-slide-3.jpg',
    alt: 'Industrial mechanical plant room with HVAC ducting, pumps and engineering infrastructure'
  }
];

const NUM_SLICES = 14;
const DISPLAY_DURATION = 5000; // 5 seconds display between transitions
const TRANSITION_DURATION = 2300; // Exactly 2.3 seconds transition duration
const SLICE_DELAY_STEP = 50; // Stagger per slice (13 * 50ms = 650ms total delay)
const SLICE_ANIM_DURATION = TRANSITION_DURATION - (NUM_SLICES - 1) * SLICE_DELAY_STEP; // 1650ms

export default function HeroVenetianCarousel() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [incomingSlideIndex, setIncomingSlideIndex] = useState<number | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const displayTimerRef = useRef<NodeJS.Timeout | null>(null);
  const transitionTimerRef = useRef<NodeJS.Timeout | null>(null);
  const isPausedRef = useRef(false);

  // Preload all 3 images on mount
  useEffect(() => {
    SLIDES.forEach((slide) => {
      const img = new Image();
      img.src = slide.src;
    });

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    const motionListener = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', motionListener);

    return () => mediaQuery.removeEventListener('change', motionListener);
  }, []);

  // Slide transition trigger
  const triggerNextTransition = () => {
    if (isPausedRef.current) return;

    const nextIndex = (currentSlideIndex + 1) % SLIDES.length;
    setIncomingSlideIndex(nextIndex);

    // Give browser a frame to prepare the incoming DOM before animating
    requestAnimationFrame(() => {
      setIsTransitioning(true);
    });

    // Clean up previous timer if any
    if (transitionTimerRef.current) clearTimeout(transitionTimerRef.current);

    transitionTimerRef.current = setTimeout(() => {
      // Transition complete: commit incoming to current, reset incoming
      setCurrentSlideIndex(nextIndex);
      setIncomingSlideIndex(null);
      setIsTransitioning(false);
    }, TRANSITION_DURATION);
  };

  // Display timer loop
  useEffect(() => {
    if (incomingSlideIndex !== null) return; // Wait until transition completes

    if (displayTimerRef.current) clearTimeout(displayTimerRef.current);

    displayTimerRef.current = setTimeout(() => {
      triggerNextTransition();
    }, DISPLAY_DURATION);

    return () => {
      if (displayTimerRef.current) clearTimeout(displayTimerRef.current);
    };
  }, [currentSlideIndex, incomingSlideIndex]);

  // Tab visibility handling (pause on background tab, resume on visible)
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        isPausedRef.current = true;
        if (displayTimerRef.current) clearTimeout(displayTimerRef.current);
      } else {
        isPausedRef.current = false;
        // Resume after a brief delay if not currently transitioning
        if (!isTransitioning) {
          if (displayTimerRef.current) clearTimeout(displayTimerRef.current);
          displayTimerRef.current = setTimeout(() => {
            triggerNextTransition();
          }, 3000);
        }
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, [isTransitioning, currentSlideIndex]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (displayTimerRef.current) clearTimeout(displayTimerRef.current);
      if (transitionTimerRef.current) clearTimeout(transitionTimerRef.current);
    };
  }, []);

  const currentSlide = SLIDES[currentSlideIndex];
  const incomingSlide = incomingSlideIndex !== null ? SLIDES[incomingSlideIndex] : null;

  return (
    <div 
      className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none"
      aria-hidden="true"
    >
      {/* =====================================================================
          BASE SLIDE LAYER: Stable underlying image
          ===================================================================== */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={currentSlide.src}
          alt={currentSlide.alt}
          className="w-full h-full object-cover object-right sm:object-center transform-gpu"
          loading="eager"
          decoding="async"
        />
      </div>

      {/* =====================================================================
          INCOMING SLIDE LAYER: 14-Slice Venetian-Blind Staggered Reveal
          ===================================================================== */}
      {incomingSlide && (
        <div className="absolute inset-0 w-full h-full z-10 pointer-events-none">
          {prefersReducedMotion ? (
            // Reduced motion fallback: gentle crossfade
            <div 
              className={`absolute inset-0 transition-opacity duration-1000 ${
                isTransitioning ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={incomingSlide.src}
                alt={incomingSlide.alt}
                className="w-full h-full object-cover object-right sm:object-center"
              />
            </div>
          ) : (
            // Full 14-Slice Venetian Blind Left-to-Right Shutter
            Array.from({ length: NUM_SLICES }).map((_, i) => {
              const sliceLeftPct = (i * 100) / NUM_SLICES;
              const sliceWidthPct = 100 / NUM_SLICES;
              const delayMs = i * SLICE_DELAY_STEP;

              return (
                <div
                  key={`slice-${incomingSlide.id}-${i}`}
                  className="absolute top-0 bottom-0 overflow-hidden"
                  style={{
                    left: `${sliceLeftPct}%`,
                    width: `calc(${sliceWidthPct}% + 1.5px)`, // +1.5px eliminates sub-pixel gaps between slices
                    clipPath: isTransitioning
                      ? 'inset(0 0% 0 0)'
                      : 'inset(0 100% 0 0)',
                    transitionProperty: 'clip-path',
                    transitionDuration: `${SLICE_ANIM_DURATION}ms`,
                    transitionDelay: `${delayMs}ms`,
                    transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                >
                  {/* Full image correctly positioned and scaled across all slices */}
                  <img
                    src={incomingSlide.src}
                    alt={incomingSlide.alt}
                    className="absolute top-0 h-full max-w-none object-cover object-right sm:object-center transform-gpu"
                    style={{
                      width: `${NUM_SLICES * 100}%`,
                      left: `-${i * 100}%`
                    }}
                    loading="eager"
                    decoding="async"
                  />
                </div>
              );
            })
          )}
        </div>
      )}
    </div>
  );
}
