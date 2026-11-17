import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initScrollExperience() {
  if (typeof window === 'undefined') return;

  const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isDesktop = window.innerWidth >= 1024;

  // 1. TOP GLOBAL SCROLL PROGRESS BAR
  const progressBar = document.getElementById('scroll-progress-bar');
  if (progressBar) {
    const updateProgress = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        const progress = Math.min(100, Math.max(0, (scrollY / scrollHeight) * 100));
        progressBar.style.width = `${progress}%`;
      }
    };
    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();
  }

  // If user prefers reduced motion, reveal everything immediately and exit
  if (isReducedMotion) {
    document.querySelectorAll('.scroll-reveal-up, .scroll-reveal-scale, .mask-reveal-clip, .mask-reveal-side, .mask-line-inner').forEach((el) => {
      el.classList.add('in-view', 'mask-revealed');
    });
    return;
  }

  // 2. FAIL-SAFE INTERSECTION OBSERVER FOR CONTAINER REVEALS
  const revealTargets = document.querySelectorAll(
    '.scroll-reveal-up, .scroll-reveal-scale, .mask-reveal-clip, .mask-reveal-side, .img-zoom-reveal, .drawn-accent, .mask-line'
  );

  // Immediately check any element already visible or near top of fold
  const viewportHeight = window.innerHeight;
  revealTargets.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top <= viewportHeight * 0.92) {
      el.classList.add('in-view', 'mask-revealed');
      if (el.classList.contains('drawn-accent')) {
        el.classList.add('active');
      }
    }
  });

  if ('IntersectionObserver' in window && revealTargets.length > 0) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view', 'mask-revealed');
            if (entry.target.classList.contains('drawn-accent')) {
              entry.target.classList.add('active');
            }
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.05,
        rootMargin: '0px 0px 50px 0px' // Trigger slightly before entering screen for buttery smooth visibility
      }
    );

    revealTargets.forEach((el) => {
      if (!el.classList.contains('in-view')) {
        observer.observe(el);
      }
    });
  } else {
    revealTargets.forEach((el) => el.classList.add('in-view'));
  }

  // 3. PARALLAX EFFECTS ON DESKTOP (Controlled & Subtle)
  if (isDesktop) {
    const parallaxElements = document.querySelectorAll<HTMLElement>('[data-parallax-speed]');
    parallaxElements.forEach((el) => {
      const speed = parseFloat(el.getAttribute('data-parallax-speed') || '0.08');
      gsap.to(el, {
        y: () => `${speed * 80}px`,
        ease: 'none',
        scrollTrigger: {
          trigger: el,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 0.5,
          invalidateOnRefresh: true
        }
      });
    });

    // Ambient background amber glow drift
    const ambientGlow = document.querySelectorAll<HTMLElement>('[data-parallax-glow]');
    ambientGlow.forEach((glow) => {
      gsap.to(glow, {
        y: '40px',
        ease: 'none',
        scrollTrigger: {
          trigger: glow.parentElement || glow,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 0.8
        }
      });
    });
  }

  // 4. VERTICAL PROCESS TIMELINE PROGRESSION
  const timelineSection = document.getElementById('process-timeline-section');
  const timelineBeam = document.getElementById('timeline-laser-beam');
  if (timelineSection && timelineBeam) {
    ScrollTrigger.create({
      trigger: timelineSection,
      start: 'top 70%',
      end: 'bottom 80%',
      scrub: 0.3,
      onUpdate: (self) => {
        timelineBeam.style.height = `${self.progress * 100}%`;
      }
    });

    const stages = timelineSection.querySelectorAll('.timeline-stage-card');
    stages.forEach((stage) => {
      ScrollTrigger.create({
        trigger: stage,
        start: 'top 70%',
        onEnter: () => stage.classList.add('stage-active'),
        onLeaveBack: () => stage.classList.remove('stage-active')
      });
    });
  }
}

// Auto-run on DOMContentLoaded or client load
if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initScrollExperience);
  } else {
    initScrollExperience();
  }
}
