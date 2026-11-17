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

  // 2. INTERSECTION OBSERVER FOR CONTAINER REVEALS & MASKS
  const revealTargets = document.querySelectorAll(
    '.scroll-reveal-up, .scroll-reveal-scale, .mask-reveal-clip, .mask-reveal-side, .img-zoom-reveal, .drawn-accent, .mask-line'
  );

  if ('IntersectionObserver' in window && revealTargets.length > 0) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view', 'mask-revealed');
            // If it's a drawn accent underline, trigger active
            if (entry.target.classList.contains('drawn-accent')) {
              entry.target.classList.add('active');
            }
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    revealTargets.forEach((el) => observer.observe(el));
  } else {
    revealTargets.forEach((el) => el.classList.add('in-view'));
  }

  // 3. PARALLAX EFFECTS ON DESKTOP
  if (isDesktop) {
    const parallaxElements = document.querySelectorAll<HTMLElement>('[data-parallax-speed]');
    parallaxElements.forEach((el) => {
      const speed = parseFloat(el.getAttribute('data-parallax-speed') || '0.1');
      gsap.to(el, {
        y: () => `${speed * 120}px`,
        ease: 'none',
        scrollTrigger: {
          trigger: el,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 0.6,
          invalidateOnRefresh: true
        }
      });
    });

    // Ambient background amber glow drift
    const ambientGlow = document.querySelectorAll<HTMLElement>('[data-parallax-glow]');
    ambientGlow.forEach((glow) => {
      gsap.to(glow, {
        y: '60px',
        scale: 1.08,
        ease: 'none',
        scrollTrigger: {
          trigger: glow.parentElement || glow,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1
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
      scrub: 0.4,
      onUpdate: (self) => {
        timelineBeam.style.height = `${self.progress * 100}%`;
      }
    });

    // Milestone cards active illumination
    const stages = timelineSection.querySelectorAll('.timeline-stage-card');
    stages.forEach((stage) => {
      ScrollTrigger.create({
        trigger: stage,
        start: 'top 65%',
        onEnter: () => stage.classList.add('stage-active'),
        onLeaveBack: () => stage.classList.remove('stage-active')
      });
    });
  }

  // 5. HORIZONTAL PROJECTS SEQUENCE (DESKTOP PINNING)
  const horizontalTrack = document.getElementById('horizontal-projects-track');
  const horizontalWrapper = document.getElementById('horizontal-projects-wrapper');

  if (isDesktop && horizontalTrack && horizontalWrapper) {
    const slides = gsap.utils.toArray<HTMLElement>('.horizontal-project-slide');
    if (slides.length > 1) {
      const totalMovement = horizontalTrack.scrollWidth - window.innerWidth;
      gsap.to(slides, {
        x: () => -totalMovement,
        ease: 'none',
        scrollTrigger: {
          trigger: horizontalWrapper,
          pin: true,
          scrub: 0.8,
          start: 'top top',
          end: () => `+=${totalMovement + 300}`,
          invalidateOnRefresh: true,
          anticipatePin: 1
        }
      });
    }
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

