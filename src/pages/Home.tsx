import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ChevronDown,
  ArrowRight,
  ShieldCheck,
  Truck,
  Coins,
  Users,
  Award,
  Phone,
  MapPin,
  Mail,
  ExternalLink
} from 'lucide-react';
import { CATEGORIES, PRODUCTS } from '../data';
import Trustedby from './Trustedby';
import ProductRegistryIndex from '../components/ProductRegistryIndex';
import AreasWeServe from '../components/AreasWeServe';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

interface HomeProps {
  onNavigate: (path: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const headerGroupRef = useRef<HTMLDivElement>(null);

  const aboutRef = useRef<HTMLDivElement>(null);
  const yearsCounterRef = useRef<HTMLSpanElement>(null);
  const productsCounterRef = useRef<HTMLSpanElement>(null);
  const ordersCounterRef = useRef<HTMLSpanElement>(null);

  const showcaseRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const whyChooseUsRef = useRef<HTMLDivElement>(null);
  const horizontalScrollRef = useRef<HTMLDivElement>(null);

  const contactRef = useRef<HTMLDivElement>(null);

  const skyBlueSectionRef = useRef<HTMLDivElement>(null);
  const scaleDivRef = useRef<HTMLDivElement>(null);

  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoStarted, setVideoStarted] = useState(false);
  const [videoPaused, setVideoPaused] = useState(false);

  // Background slideshow setup for Hero section
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const HERO_IMAGES = [
    '/b/b1.webp',
    '/b/b2.webp',
    '/b/b3.webp',
    '/b/b4.webp'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBgIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 2500); // Crossfade every 2.5 seconds for faster, smooth change
    return () => clearInterval(timer);
  }, []);


  useEffect(() => {
    // Page load hone par video play karo
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        console.log('Autoplay blocked');
      });
    }
  }, []);

  useEffect(() => {
    const section = skyBlueSectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Jab section 90% visible ho
          if (entry.isIntersecting && entry.intersectionRatio >= 0.9) {
            if (videoRef.current && !videoRef.current.paused) {
              videoRef.current.pause();
              setVideoPaused(true);
            }
          }
        });
      },
      {
        threshold: [0.9], // 90% visible
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  // Robust ScrollTrigger refresh handler to handle refresh and dynamic heights perfectly
  useEffect(() => {
    // Force a ScrollTrigger refresh on mount and after a short delay
    const refreshTimers = [
      setTimeout(() => ScrollTrigger.refresh(), 100),
      setTimeout(() => ScrollTrigger.refresh(), 500),
      setTimeout(() => ScrollTrigger.refresh(), 1000),
      setTimeout(() => ScrollTrigger.refresh(), 2000),
    ];

    const handleLoad = () => {
      ScrollTrigger.refresh();
    };
    window.addEventListener('load', handleLoad);

    return () => {
      refreshTimers.forEach(clearTimeout);
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  useEffect(() => {
    // Kill existing ScrollTriggers to prevent duplicates on hot reload / component remount
    const triggers = ScrollTrigger.getAll();
    triggers.forEach(trigger => trigger.kill());

    // -------------------------------------------------------------
    // 1. HERO ANIMATION & PINNING
    // -------------------------------------------------------------
    if (heroRef.current && videoContainerRef.current) {
      // Pin the video section and create scrub parallax / playback rate manipulation
      const heroTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: '+=150%',
          pin: true,
          scrub: 1.5,
          invalidateOnRefresh: true,
        },
      });

      // Parallax zoom on background slideshow as user scrolls (no dimming/opacity reduction)
      heroTimeline.to(videoContainerRef.current, {
        scale: 1.25,
        ease: 'none',
      });

      // Split text-like reveal for hero content
      const heroHeadlineWords = document.querySelectorAll('.hero-word');
      if (heroHeadlineWords.length > 0) {
        gsap.fromTo(heroHeadlineWords,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.08,
            duration: 0.8,
            ease: 'power3.out',
            delay: 0.3
          }
        );
      }

      // Stagger other hero UI elements
      gsap.fromTo('.hero-fade-in',
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 1, ease: 'power2.out', delay: 0.8, stagger: 0.15 }
      );
    }

    // -------------------------------------------------------------
    // 2. SKY BLUE SECTION PINNED SCROLL ANIMATION (Visually second on page)
    // -------------------------------------------------------------
    if (skyBlueSectionRef.current && scaleDivRef.current) {
      gsap.fromTo(scaleDivRef.current,
        { scale: 0.65 },
        {
          scale: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: skyBlueSectionRef.current,
            pin: true,
            start: 'top top',
            end: '+=100%',
            scrub: 1,
            invalidateOnRefresh: true,
          }
        }
      );
    }

    // -------------------------------------------------------------
    // 3. COUNTERS WITH GSAP COUNTTO ON VIEWPORT ENTRY
    // -------------------------------------------------------------
    if (aboutRef.current) {
      const counters = [
        { ref: yearsCounterRef, target: 20 },
        { ref: productsCounterRef, target: 500 },
        { ref: ordersCounterRef, target: 10000 },
      ];

      const aboutTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: aboutRef.current,
          start: 'top 90%',
          toggleActions: 'play none none none',
        },
      });

      // Standard fade and slide for text
      aboutTimeline.fromTo('.about-anim',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out' }
      );

      // Trigger the counter animations
      counters.forEach((counter) => {
        if (counter.ref.current) {
          const obj = { value: 0 };
          gsap.to(obj, {
            value: counter.target,
            duration: 2.5,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: aboutRef.current,
              start: 'top 10%',
            },
            onUpdate: () => {
              if (counter.ref.current) {
                const isTenK = counter.target === 10000;
                counter.ref.current.innerText = isTenK
                  ? Math.floor(obj.value).toLocaleString() + '+'
                  : Math.floor(obj.value) + '+';
              }
            }
          });
        }
      });
    }

    // -------------------------------------------------------------
    // 3. PRODUCT SHOWCASE UNDERLINE & GRID STAGGER
    // -------------------------------------------------------------
    if (showcaseRef.current) {
      // Animate product showcase section entering
      gsap.fromTo('.showcase-title',
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          scrollTrigger: {
            trigger: showcaseRef.current,
            start: 'top 85%',
          }
        }
      );

      // Draw thin gold line
      gsap.fromTo('.gold-underline',
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1,
          ease: 'power3.inOut',
          scrollTrigger: {
            trigger: showcaseRef.current,
            start: 'top 80%',
          }
        }
      );

      // Stagger reveal metal grid cards
      gsap.fromTo('.metal-card',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.metal-grid',
            start: 'top 85%',
          }
        }
      );
    }

    // -------------------------------------------------------------
    // 4. WHY CHOOSE US HORIZONTAL SCROLL PINNING
    // -------------------------------------------------------------
    if (whyChooseUsRef.current && horizontalScrollRef.current) {
      const pinContainer = horizontalScrollRef.current;

      gsap.to(pinContainer, {
        x: () => -(pinContainer.scrollWidth - window.innerWidth),
        ease: 'none',
        scrollTrigger: {
          trigger: whyChooseUsRef.current,
          pin: true,
          start: 'top top',
          end: () => `+=${pinContainer.scrollWidth - window.innerWidth}`,
          scrub: 1,
          invalidateOnRefresh: true,
        }
      });
    }

    // -------------------------------------------------------------
    // 5. CONTACT FORM ANIMATIONS
    // -------------------------------------------------------------
    if (contactRef.current) {
      gsap.fromTo('.contact-anim-left',
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: contactRef.current,
            start: 'top 80%',
          }
        }
      );

      gsap.fromTo('.contact-anim-right',
        { opacity: 0, x: 30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: contactRef.current,
            start: 'top 80%',
          }
        }
      );
    }

    // Cleanup triggers
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  // -------------------------------------------------------------
  // 6. MAGNETIC CARD HOVER EFFECT (rotateX/rotateY)
  // -------------------------------------------------------------
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; // x position within card
    const y = e.clientY - rect.top;  // y position within card

    // Calculate normalized delta coordinates (-0.5 to 0.5)
    const deltaX = (x / rect.width) - 0.5;
    const deltaY = (y / rect.height) - 0.5;

    // Apply tilt angles
    const tiltX = deltaY * 12; // tilt based on Y-axis deviation
    const tiltY = -deltaX * 12; // tilt based on X-axis deviation

    gsap.to(card, {
      rotateX: tiltX,
      rotateY: tiltY,
      transformPerspective: 800,
      duration: 0.4,
      ease: 'power2.out',
      force3D: true,
    });
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    gsap.to(card, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.4,
      ease: 'power2.out',
    });
  };

  // -------------------------------------------------------------
  // 7. INPUT FOCUS TWEEN ON CONTACT FORM
  // -------------------------------------------------------------
  const handleInputFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const inputWrapper = e.currentTarget.parentElement;
    if (inputWrapper) {
      gsap.to(inputWrapper, {
        borderColor: '#C9A84C',
        boxShadow: '0 0 10px rgba(201, 168, 76, 0.2)',
        duration: 0.3
      });
    }
  };

  const handleInputBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const inputWrapper = e.currentTarget.parentElement;
    if (inputWrapper) {
      gsap.to(inputWrapper, {
        borderColor: 'rgba(201, 168, 76, 0.25)',
        boxShadow: 'none',
        duration: 0.3
      });
    }
  };

  return (
    <div className=" bg-[#F9F6EE] text-[#101828] overflow-hidden">
      {/* -------------------------------------------------------------
          SECTION 1 — HERO
          ------------------------------------------------------------- */}
      <section
        id="hero-section"
        ref={heroRef}
        className="relative min-h-screen w-full flex flex-col justify-between pt-[100px] md:pt-[120px] pb-8 overflow-hidden z-20"
      >
        {/* Background image slideshow with crossfade zoom */}
        <div 
          ref={videoContainerRef}
          className="absolute inset-0 z-0 overflow-hidden pointer-events-none"
          style={{ transformOrigin: 'center center' }}
        >
          {HERO_IMAGES.map((img, idx) => (
            <div
              key={idx}
              className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out"
              style={{
                backgroundImage: `url(${img})`,
                opacity: currentBgIndex === idx ? 0.9 : 0,
              }}
            />
          ))}
          {/* Subtle grid pattern overlay for industrial touch */}
          <div 
            className="absolute inset-0 mix-blend-overlay opacity-30"
            style={{
              backgroundImage: 'repeating-linear-gradient(45deg, #F2F7FB 0px, #F2F7FB 1px, transparent 1px, transparent 12px)'
            }}
          />
        </div>

        {/* Center Main Content (B2B Presentation matching screenshot) */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-12 md:pt-24 grow flex flex-col md:flex-row items-center justify-between gap-12 w-full">
          {/* Left Column: Text presentation */}
          <div className="flex-1 text-left max-w-2xl space-y-6">
            <div className="hero-fade-in inline-flex items-center gap-2">
              <span className="text-xs font-bold tracking-[0.25em] text-[#0A5A7D] uppercase font-mono">
                EST. 2006 · TWO DECADES OF EXCELLENCE
              </span>
            </div>
            
            <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black tracking-normal uppercase leading-[1.0] text-[#101828]">
              <span className="block text-[#101828]">BUILD WITH</span>
              <span className="block text-[#0A5A7D]">REPUTATION</span>
            </h1>
            
            <div className="w-24 h-[3px] bg-[#0A5A7D] mt-2" />
            
            <p className="hero-fade-in text-sm sm:text-base md:text-lg text-[#64748B] font-normal leading-relaxed max-w-xl">
              Provisioning the nation's most prestigious infrastructure, defense, and heavy industries with certified steel and alloy excellence.
            </p>
            
            <div className="hero-fade-in flex flex-wrap gap-4 pt-2">
              <button
                onClick={() => onNavigate('products')}
                className="px-8 py-3.5 bg-[#0A5A7D] hover:bg-[#1A8CAF] text-white font-heading text-xs font-bold tracking-widest uppercase transition-all duration-300 shadow-md rounded-none hover:scale-[1.02] active:scale-[0.98]"
              >
                VIEW CATALOG
              </button>
              <button
                onClick={() => onNavigate('quote')}
                className="px-8 py-3.5 bg-[#F9F6EE] hover:bg-[#F2EDE0] text-[#101828] border border-[#101828]/15 font-heading text-xs font-bold tracking-widest uppercase transition-all duration-300 rounded-none hover:scale-[1.02] active:scale-[0.98]"
              >
                GET A QUOTE
              </button>
            </div>
          </div>

          {/* Right Column: Metrics Card */}
          <div className="w-full md:w-[450px] shrink-0 hero-fade-in">
            <div className="p-8 md:p-10 rounded-2xl bg-[#EDE7D8] border border-[#101828]/10 shadow-[0_15px_35px_rgba(10,90,125,0.05)] flex flex-col justify-between">
              <div className="grid grid-cols-3 gap-4 pb-8">
                <div className="text-center md:text-left">
                  <span className="block text-3xl sm:text-4xl font-heading font-black text-[#0A5A7D] leading-none">
                    20+
                  </span>
                  <span className="block text-[10px] tracking-wider text-[#64748B] font-bold uppercase mt-1">
                    YEARS EXP.
                  </span>
                </div>
                
                <div className="text-center md:text-left border-l border-[#101828]/10 pl-4">
                  <span className="block text-3xl sm:text-4xl font-heading font-black text-[#0A5A7D] leading-none">
                    500+
                  </span>
                  <span className="block text-[10px] tracking-wider text-[#64748B] font-bold uppercase mt-1">
                    PRODUCTS
                  </span>
                </div>
                
                <div className="text-center md:text-left border-l border-[#101828]/10 pl-4">
                  <span className="block text-3xl sm:text-4xl font-heading font-black text-[#0A5A7D] leading-none">
                    10K+
                  </span>
                  <span className="block text-[10px] tracking-wider text-[#64748B] font-bold uppercase mt-1">
                    DELIVERIES
                  </span>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="h-2 w-full bg-white/60 rounded-full overflow-hidden">
                  <div className="h-full bg-[#0A5A7D] rounded-full w-[65%]" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Status bar from the screenshot */}
        <div className="w-full max-w-7xl mx-auto px-6 py-4 border-t border-[#101828]/10 flex flex-col sm:flex-row justify-between items-center text-[10px] tracking-[0.15em] font-bold text-[#64748B] uppercase">
          <div className="text-center sm:text-left">
            AUSTENITIC STAINLESS STEEL · PIPES · SHEETS · FITTINGS
          </div>
          <div className="text-center sm:text-right mt-2 sm:mt-0">
            COBALT CURRENT
          </div>
        </div>
      </section>


      {/* -------------------------------------------------------------
          SECTION — SKY BLUE PLACEHOLDER
          ------------------------------------------------------------- */}
      <section
        id="sky-blue-section"
        ref={skyBlueSectionRef}
        className="h-screen w-full relative flex items-center justify-center bg-[#F9F6EE] grain-overlay text-[#101828] overflow-hidden z-10"
      >
        <div
          ref={scaleDivRef}
          className="w-[92%] sm:w-[85%] md:w-[75%] lg:w-[65%] h-[55%] sm:h-[58%] md:h-[62%] lg:h-[68%] max-w-6xl max-h-[600px] sm:max-h-[700px] md:max-h-[750px] rounded-2xl relative bg-black border-[3px] border-[#0A5A7D] lg:border-0 flex items-center justify-center shadow-2xl overflow-hidden"
          style={{ transformOrigin: 'center center' }}
        >
          {/* Black background */}
          <div className="absolute inset-0 bg-black rounded-2xl z-0" />

          {/* Video */}
          <video
            ref={videoRef}
            autoPlay
            muted
            playsInline
            preload="auto"
            onPlay={() => setVideoPaused(false)}
            onPause={() => setVideoPaused(true)}
            onEnded={() => setVideoPaused(true)}
            className="absolute inset-0 w-full h-full object-contain rounded-2xl z-10"
            style={{ backgroundColor: '#000000', maxWidth: '100%', maxHeight: '100%' }}
          >
            <source src="/video/products.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Top Right - Text */}
          <div className="absolute top-3 right-3 sm:top-4 sm:right-4 md:top-6 md:right-6 lg:top-8 lg:right-8 z-30">
            <h2 className="text-[10px] sm:text-sm md:text-2xl lg:text-3xl font-heading font-bold text-white tracking-wider drop-shadow-lg text-right">
              HOSPIRA STEEL & ALLOY
            </h2>
          </div>

          {/* Middle Play Button */}
          {videoPaused && (
            <button
              onClick={() => {
                const video = videoRef.current;
                if (video) {
                  video.currentTime = 0;
                  video.muted = false;
                  video.play();
                  setVideoPaused(false);
                }
              }}
              className="absolute inset-0 z-30 flex items-center justify-center"
            >
              <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full bg-[#0A5A7D]/30 backdrop-blur-md border-2 border-[#0A5A7D] flex flex-col items-center justify-center hover:bg-[#0A5A7D]/50 transition-all duration-300 group shadow-2xl">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-white group-hover:scale-110 transition-transform ml-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
                <span className="text-[6px] sm:text-[8px] md:text-[10px] lg:text-[12px] text-white font-bold tracking-widest uppercase mt-0.5">
                  PLAY
                </span>
              </div>
            </button>
          )}

          {/* Play/Pause Toggle Button - Bottom Right */}
          <button
            onClick={() => {
              const video = videoRef.current;
              if (video) {
                if (video.paused) {
                  video.muted = false;
                  video.play();
                } else {
                  video.pause();
                }
              }
            }}
            className="absolute bottom-27 right-4 sm:bottom-5 sm:right-5 md:bottom-6 md:right-6 lg:bottom-18 lg:right-20 z-30 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full bg-[#0A5A7D]/20 backdrop-blur-sm border-2 border-[#0A5A7D] flex items-center justify-center hover:bg-[#0A5A7D]/40 transition-all duration-300 group"
          >
            {videoPaused ? (
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-[#0A5A7D] group-hover:scale-110 transition-transform ml-1"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            ) : (
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-[#0A5A7D] group-hover:scale-110 transition-transform"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <rect x="6" y="4" width="4" height="16" />
                <rect x="14" y="4" width="4" height="16" />
              </svg>
            )}
          </button>
        </div>
      </section>
      {/* -------------------------------------------------------------
          SECTION 2 — ABOUT / LEGACY (Dark Prestige)
          ------------------------------------------------------------- */}
      <section
        id="legacy-section"
        ref={aboutRef}
        className="py-24 bg-[#F2EDE0] border-b border-[#101828]/10 relative z-10 grain-overlay"
      >
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Left Side: Dynamic Counters */}
          <div className="grid grid-cols-3 md:grid-cols-1 gap-6 md:space-y-12 pr-0 md:pr-12 md:border-l border-[#0A5A7D]/25 md:pl-8">

            <div className="about-anim text-center md:text-left border-r md:border-r-0 pb-0 last:border-0 last:pb-0">
              <span
                ref={yearsCounterRef}
                className="block text-4xl sm:text-5xl md:text-6xl font-heading font-black text-[#0A5A7D] leading-none"
              >
                0+
              </span>
              <span className="block text-[9px] md:text-[10px] tracking-widest text-[#64748B] font-bold uppercase mt-1">
                YEARS OF EXPERIENCE
              </span>
              <span className="block text-[8px] md:text-[9px] font-mono text-[#0A5A7D] uppercase mt-1 tracking-widest font-bold">
                ESTD. SEPTEMBER 2006
              </span>
            </div>

            <div className="about-anim text-center md:text-left border-r md:border-r-0 pb-0 last:border-0 last:pb-0">
              <span
                ref={productsCounterRef}
                className="block text-4xl sm:text-5xl md:text-6xl font-heading font-black text-[#0A5A7D] leading-none"
              >
                0+
              </span>
              <span className="block text-[9px] md:text-[10px] tracking-widest text-[#64748B] font-bold uppercase mt-1">
                PRECISION PRODUCTS
              </span>
            </div>

            <div className="about-anim text-center md:text-left">
              <span
                ref={ordersCounterRef}
                className="block text-4xl sm:text-5xl md:text-6xl font-heading font-black text-[#0A5A7D] leading-none"
              >
                0+
              </span>
              <span className="block text-[9px] md:text-[10px] tracking-widest text-[#64748B] font-bold uppercase mt-1">
                GLOBAL DELIVERIES
              </span>
            </div>

          </div>

          {/* Right Side: Description */}
          <div className="space-y-6  ">
            <span className="about-anim text-xs font-bold tracking-[0.3em] text-[#0A5A7D] uppercase block">
              OUR ABOUT & HERITAGE STORY
            </span>
            <h2 className="about-anim font-heading text-4xl md:text-6xl font-extrabold text-[#101828] tracking-tight uppercase leading-tight">
              PRECISION SHAPED BY TWO DECADES OF EXCELLENCE
            </h2>
            <div className="w-16 h-[2px] bg-[#0A5A7D] about-anim" />
            <p className="about-anim text-sm sm:text-base text-[#64748B] leading-relaxed font-light">
              With over 20 years of experience in the stainless steel pipe and sheet industry, Hospira Steel and Alloy is a trusted name in the manufacturing and supply of high-quality stainless steel products. We are recognized for our knowledge, expertise, and commitment to quality, serving both industrial and commercial sectors.
            </p>
            <p className="about-anim text-sm sm:text-base text-[#64748B] leading-relaxed font-light">
              Hospira Steel and Alloy is a leading manufacturer, stockiest, and supplier of high-quality Stainless Steel products in Visakhapatnam. With nearly two decades of experience, we specialize in providing premium stainless steel materials and fittings to various industrial, commercial, and residential projects, as well as premium <strong className="text-[#0A5A7D]">SS PVD coating Partition glass railing work</strong> for Homes.
            </p>
            <div className="about-anim pt-4">
              <button
                onClick={() => onNavigate('about')}
                className="flex items-center space-x-2 text-xs font-bold tracking-[0.2em] text-[#0A5A7D] hover:text-[#101828] transition-colors uppercase group"
              >
                <span>READ FOUNDING CHRONICLE</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section >

      {/* -------------------------------------------------------------
          SECTION 3 — PRODUCT SHOWCASE
          ------------------------------------------------------------- */}
      <section id="showcase-section" ref={showcaseRef} className="py-24 bg-[#F9F6EE] relative mb-40 z-10" >
        <div className="max-w-7xl mx-auto ">
          {/* Header */}
          <div className="text-center mb-16 relative">
            <span className="showcase-title text-xs font-bold tracking-[0.3em] text-[#0A5A7D] uppercase block mb-3">
              PREMIUM PRODUCT SELECTION
            </span>
            <h2 className="showcase-title font-heading text-5xl md:text-7xl font-extrabold text-[#101828] uppercase tracking-tight">
              OUR PRODUCTS
            </h2>
            {/* Animated gold underline */}
            <div className="w-24 h-[2px] bg-[#0A5A7D] mx-auto mt-4 origin-center scale-x-0 gold-underline" />
          </div>

          {/* Metal Grid - 3 cols x 2 rows */}
          <div className="metal-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRODUCTS.slice(0, 6).map((product) => (
              <div
                key={product.id}
                className="metal-card cursor-pointer group rounded-sm bg-[#EDE7D8] border border-[#101828]/10 overflow-hidden transition-all duration-500 hover:shadow-[0_10px_30px_rgba(10,90,125,0.08)] flex flex-col justify-between"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                onClick={() => onNavigate(`products/${product.id}`)}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Visual Cover image in its natural, original colors */}
                <div className="h-64 w-full overflow-hidden relative">
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#EDE7D8] to-transparent z-15" />
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700 pointer-events-none"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Content */}
                <div className="p-6 relative z-10 flex-grow flex flex-col justify-between" style={{ transform: 'translateZ(30px)' }}>
                  <div>
                    <h3 className="font-heading text-2xl font-bold tracking-wider text-[#101828] mb-2.5 group-hover:text-[#0A5A7D] transition-colors capitalize">
                      {product.name}
                    </h3>
                    <p className="text-sm text-[#0A5A7D] tracking-widest uppercase mb-4.5 font-medium">
                      {product.categoryLabel}
                    </p>
                    <p className="text-sm text-[#64748B] leading-relaxed font-light">
                      {product.description}
                    </p>
                  </div>

                  {/* Grades and specifications displayed cleanly above the footer specification link */}
                  <div className="mt-6 p-4 bg-[#0A5A7D] group-hover:bg-[#F9F6EE] border border-[#101828]/10 rounded-md shadow-sm overflow-hidden transition-all duration-300">
                    <span className="text-base font-mono font-black tracking-wider text-[#E0F2FE] group-hover:text-[#0A5A7D] uppercase block mb-1.5 transition-colors duration-300">
                      STANDARDS & GRADES:
                    </span>
                    <p className="text-base font-mono text-white group-hover:text-[#101828] leading-relaxed break-words font-bold whitespace-normal transition-colors duration-300">
                      {product.grade}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-gray-200/60 flex items-center justify-between">
                    <span className="text-xs font-bold tracking-widest text-[#64748B] group-hover:text-[#101828] transition-colors uppercase">
                      EXPLORE SPECIFICATIONS
                    </span>
                    <div className="w-8 h-8 rounded-full border border-[#0A5A7D]/30 group-hover:border-[#0A5A7D] flex items-center justify-center group-hover:bg-[#0A5A7D] text-[#0A5A7D] group-hover:text-white transition-all duration-300">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Link Below */}
          <div className="text-center mt-12">
            <button
              onClick={() => onNavigate('products')}
              className="inline-flex items-center justify-center space-x-3 text-xs font-bold tracking-[0.25em] text-white hover:text-[#0A5A7D] bg-[#0A5A7D] hover:bg-white border border-[#0A5A7D] px-8 py-4 rounded-none transition-all duration-500 shadow-[0_4px_12px_rgba(10,90,125,0.05)] uppercase group"
            >
              <span>VIEW ALL INTEGRATED GRADES</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------
          SECTION 4 — WHY CHOOSE US (Horizontal Scrolling Panels)
          ------------------------------------------------------------- */}
      <section
        id="why-choose-us"
        ref={whyChooseUsRef}
        className="bg-[#F2EDE0] border-t border-b border-[#101828]/10 overflow-hidden relative z-10 h-screen w-full flex flex-row items-center"
      >
        <div ref={horizontalScrollRef} className="horizontal-scroll-container flex flex-row h-full w-auto">

          {/* Introductory Cover Panel */}
          <div className="w-screen flex-shrink-0 bg-[#F9F6EE] flex flex-col justify-center px-6 md:px-24 border-r border-[#101828]/10 h-full">
            <div className="max-w-2xl">
              <span className="text-xs font-bold tracking-[0.3em] text-[#0A5A7D] uppercase block mb-4">
                THE HOSPIRA STANDARD
              </span>
              <h2 className="font-heading text-4xl sm:text-6xl md:text-7xl font-extrabold text-[#101828] uppercase tracking-tight leading-tight mb-6">
                BUILT FOR PURE PRESTIGE INDUSTRY
              </h2>
              <p className="text-sm md:text-base text-[#64748B] leading-relaxed font-light mb-8">
                Scroll horizontally or drag to inspect the distinct values that make us the preferred partner for complex, heavy industrial, maritime, and defense developments.
              </p>
              <div className="flex items-center space-x-3 text-[#0A5A7D]">
                <span className="text-[11px] font-bold tracking-widest uppercase block">SCROLL FORWARD TO BROWSE</span>
                <ArrowRight className="w-4 h-4 animate-pulse" />
              </div>
            </div>
          </div>

          {/* Panel 1: Certified Quality */}
          <div className="w-screen flex-shrink-0 bg-[#F2EDE0] flex flex-col md:flex-row-reverse items-center justify-center px-6 md:px-24 border-r border-[#101828]/10 relative h-full gap-4 md:gap-16 lg:gap-24">
            <div className="flex-shrink-0 w-[220px] sm:w-[260px] md:w-[640px] lg:w-[720px] bg-[#EDE7D8] border border-[#101828]/10 shadow-2xl md:bg-transparent md:border-none md:shadow-none p-6 md:p-10 rounded-md flex flex-col items-center justify-center gap-2 text-center mx-auto md:ml-0">
              <img src="/logos/HSA.png" alt="HSA Quality Assurance" className="h-28 sm:h-36 md:h-96 lg:h-[450px] w-auto object-contain mx-auto" />
              <p className="text-[20px] md:text-sm text-[#0A5A7D] font-mono uppercase tracking-widest mt-2">HSA APPROVED</p>
            </div>
            <div className="max-w-xl space-y-4 md:space-y-6">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-md bg-[#EDE7D8] border border-[#101828]/10 flex items-center justify-center text-[#0A5A7D]">
                <ShieldCheck className="w-6 h-6 md:w-8 md:h-8 stroke-[1.5]" />
              </div>
              <h3 className="font-heading text-3xl md:text-5xl font-black text-[#101828] uppercase tracking-wider">
                CERTIFIED QUALITY ASSURANCE
              </h3>
              <p className="text-xs md:text-sm text-[#64748B] leading-relaxed font-light">
                We accept nothing but perfection. All physical inventory has direct mill pedigree correlation, featuring comprehensive EN 10204 3.1 chemical & mechanical certification and complete non-destructive material evaluation.
              </p>
            </div>
          </div>

          {/* Panel 2: Fast Delivery */}
          <div className="w-screen flex-shrink-0 bg-[#F2EDE0] flex flex-col md:flex-row-reverse items-center justify-center px-6 md:px-24 border-r border-[#101828]/10 h-full gap-4 md:gap-16 lg:gap-24">
            <div className="flex-shrink-0 w-[220px] sm:w-[260px] md:w-[640px] lg:w-[720px] bg-[#EDE7D8] border border-[#101828]/10 shadow-2xl md:bg-transparent md:border-none md:shadow-none p-6 md:p-10 rounded-md flex flex-col items-center justify-center gap-2 text-center mx-auto md:ml-0">
              <img src="/logos/logo.jpeg" alt="Impact Logistics Logo" className="h-28 sm:h-56 md:h-96 lg:h-[450px] w-auto object-contain mx-auto rounded" />
              <p className="text-[20px] md:text-sm text-[#0A5A7D] font-mono uppercase tracking-widest mt-2">LOGISTICS PARTNER</p>
            </div>
            <div className="max-w-xl space-y-4 md:space-y-6">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-md bg-[#EDE7D8] border border-[#101828]/10 flex items-center justify-center text-[#0A5A7D]">
                <Truck className="w-6 h-6 md:w-8 md:h-8 stroke-[1.5]" />
              </div>
              <h3 className="font-heading text-3xl md:text-5xl font-black text-[#101828] uppercase tracking-wider">
                IMPACT-CONTAINED LOGISTICS
              </h3>
              <p className="text-xs md:text-sm text-[#64748B] leading-relaxed font-light">
                Our strategic logistics network operates directly out of Visakhapatnam’s premier industrial zones. Backed by dedicated shipping fleets, we handle oversize loads, bulk coils, and direct sea container stuffing seamlessly.
              </p>
            </div>
          </div>

          {/* Panel 3: Founder & CEO */}
          <div className="w-screen flex-shrink-0 bg-transparent flex flex-col md:flex-row-reverse items-center justify-center px-6 md:px-24 border-r border-[#101828]/10 h-full gap-4 md:gap-16 lg:gap-24 relative overflow-hidden">
            {/* Mobile Only Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-100 md:hidden pointer-events-none" 
              style={{ backgroundImage: 'url("/logos/owner.jpeg")' }}
            />
            
            <div className="hidden md:flex flex-shrink-0 w-[220px] sm:w-[260px] md:w-[640px] lg:w-[720px] p-6 md:p-10 rounded-md flex-col items-center justify-center gap-2 text-center">
              <img src="/logos/owner.jpeg" alt="Dinesh MohanlalJI Rajguru" className="h-28 sm:h-36 md:h-96 lg:h-[450px] w-auto object-contain mx-auto rounded" />
              <p className="text-[20px] text-[#0A5A7D] font-mono uppercase tracking-widest mt-2">FOUNDER & CEO</p>
              <p className="text-[#101828] text-base font-semibold tracking-wider uppercase mt-1 font-mono">Dinesh MohanlalJI Rajguru</p>
            </div>
            <div className="max-w-xl space-y-4 md:space-y-6 relative z-10">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-md bg-[#EDE7D8] border border-[#101828]/10 flex items-center justify-center text-[#0A5A7D]">
                <Users className="w-6 h-6 md:w-8 md:h-8 stroke-[1.5]" />
              </div>
              <h3 className="font-heading text-3xl md:text-5xl font-black text-[#101828] uppercase tracking-wider">
                FOUNDER & CEO
              </h3>
              <p className="text-[#0A5A7D] font-mono text-sm tracking-widest uppercase block md:hidden -mt-2">
                Dinesh MohanlalJI Rajguru
              </p>
              <p className="text-xs md:text-sm text-[#64748B] leading-relaxed font-light font-sans">
                Every success has a story, and ours began with struggle, sacrifice, and the courage to keep moving forward when times were toughest. Through years of dedication, hard work, and an unwavering belief in quality, our Founder & CEO transformed a vision into one of the most trusted names in stainless steel products. Today, we proudly serve customers across <strong className="text-[#0A5A7D]">Visakhapatnam</strong> and <strong className="text-[#0A5A7D]">Andhra Pradesh</strong>, building lasting relationships through reliability, integrity, and excellence.
              </p>
            </div>
          </div>

          {/* Panel 4: Optimized Bulk Arbitrage */}
          <div className="w-screen flex-shrink-0 bg-[#F2EDE0] flex flex-col md:flex-row-reverse items-center justify-center px-6 md:px-24 h-full gap-4 md:gap-16 lg:gap-24">
            
            {/* Laptop/Desktop Only Arbitrage Stats & Partner Visuals */}
            <div className="hidden md:flex flex-shrink-0 w-[220px] sm:w-[260px] md:w-[640px] lg:w-[720px] bg-[#F9F6EE] p-6 md:p-10 rounded-md flex-col justify-between border border-[#101828]/10 h-[480px] shadow-sm">
              <div>
                <div className="flex items-center justify-between border-b border-[#101828]/10 pb-4 mb-6">
                  <div>
                    <span className="text-[10px] text-[#0A5A7D] font-mono uppercase tracking-widest">ARBITRAGE INDEX</span>
                    <h4 className="text-[#101828] text-lg font-bold font-heading uppercase tracking-wider mt-1">PRICE PROTECTION</h4>
                  </div>
                  <div className="px-3 py-1 bg-[#0A5A7D]/10 border border-[#0A5A7D]/25 rounded-full text-[#0A5A7D] font-mono text-[10px] uppercase tracking-widest">
                    ACTIVE COVER
                  </div>
                </div>
 
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="bg-[#EDE7D8] p-4 border border-[#101828]/10 rounded">
                    <span className="text-[9px] text-[#64748B] uppercase tracking-widest font-mono">ANNUAL ALLOCATION</span>
                    <p className="text-[#101828] text-2xl font-bold font-heading mt-1">50,000+ TN</p>
                  </div>
                  <div className="bg-[#EDE7D8] p-4 border border-[#101828]/10 rounded">
                    <span className="text-[9px] text-[#64748B] uppercase tracking-widest font-mono">SPOT PROTECTION</span>
                    <p className="text-[#0A5A7D] text-2xl font-bold font-heading mt-1">100% SECURE</p>
                  </div>
                </div>
 
                <div className="space-y-3">
                  <span className="text-[9px] text-[#0A5A7D] font-mono uppercase tracking-widest block">DIRECT MILL INTEGRATION</span>
                  <div className="flex flex-wrap gap-2">
                    {['JSL', 'APEX', 'RINKU', 'ADDBSTEEL'].map((partner, idx) => (
                      <span key={idx} className="px-3 py-1.5 bg-[#EDE7D8] border border-[#101828]/10 text-[#101828] font-mono text-xs tracking-wider rounded uppercase">
                        {partner}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="border-t border-[#101828]/10 pt-4 mt-6">
                <p className="text-[11px] text-[#64748B] leading-relaxed font-light">
                  Our direct-to-mill reservation queue secures high priority production slots, fully shielded from speculative commercial trading markups.
                </p>
              </div>
            </div>

            <div className="max-w-xl space-y-4 md:space-y-6">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-md bg-[#EDE7D8] border border-[#0A5A7D]/30 flex items-center justify-center text-[#0A5A7D]">
                <Coins className="w-6 h-6 md:w-8 md:h-8 stroke-[1.5]" />
              </div>
              <h3 className="font-heading text-3xl md:text-5xl font-black text-[#101828] uppercase tracking-wider">
                OPTIMIZED BULK ARBITRAGE
              </h3>
              <p className="text-xs md:text-sm text-[#64748B] leading-relaxed font-light">
                Through direct multi-tonnage commitments with premium steel giants like JSL, APEX, RINKU, and ADDBSTEEL, we isolate our clients from spot-market volatile spikes, giving them consistent price safety.
              </p>
              <div className="pt-2 md:pt-4">
                <button
                   onClick={() => onNavigate('quote')}
                  className="px-6 py-3 bg-[#0A5A7D] text-white rounded-full font-heading text-xs font-bold tracking-widest hover:bg-[#1A8CAF] transition-colors duration-300 shadow-md"
                >
                  REQUEST BULK SPECS
                </button>
              </div>
            </div>
          </div>

        </div>
      </section >

      {/* -------------------------------------------------------------
          SECTION 5 — CONTACT / QUOTE CTA
          ------------------------------------------------------------- */}
      <section id="home-contact-section" ref={contactRef} className="py-24 bg-[#F2EDE0] relative z-10" >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Left Column: Form with focus animations */}
            <div className="contact-anim-left bg-[#F9F6EE] p-8 border border-gray-200/80 rounded-sm shadow-xl">
              <div className="mb-6">
                <h3 className="font-heading text-2xl font-bold text-[#101828] tracking-wide uppercase">
                  READY TO SOURCE?
                </h3>
                <p className="text-xs text-[#0A5A7D] tracking-widest uppercase mt-1">
                  GET A CUSTOM QUOTE WITHIN 24 HOURS
                </p>
              </div>
              <form onSubmit={(e) => { e.preventDefault(); onNavigate('quote'); }} className="space-y-4">
                {/* Name */}
                <div className="flex flex-col border border-gray-200/80 bg-[#F2EDE0] px-4 py-2 rounded-sm transition-all duration-300">
                  <label className="text-[9px] font-bold tracking-widest text-[#0A5A7D] uppercase mb-1">
                    Contact Person Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    className="bg-transparent border-0 outline-none text-xs text-[#101828] py-1 focus:ring-0 placeholder:text-[#64748B]/50"
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                  />
                </div>
 
                {/* Business Name */}
                <div className="flex flex-col border border-gray-200/80 bg-[#F2EDE0] px-4 py-2 rounded-sm transition-all duration-300">
                  <label className="text-[9px] font-bold tracking-widest text-[#0A5A7D] uppercase mb-1">
                    Business / Company Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Apex Engineering Pvt Ltd"
                    className="bg-transparent border-0 outline-none text-xs text-[#101828] py-1 focus:ring-0 placeholder:text-[#64748B]/50"
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                  />
                </div>
 
                {/* Email */}
                <div className="flex flex-col border border-gray-200/80 bg-[#F2EDE0] px-4 py-2 rounded-sm transition-all duration-300">
                  <label className="text-[9px] font-bold tracking-widest text-[#0A5A7D] uppercase mb-1">
                    Corporate Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. procurement@apex.com"
                    className="bg-transparent border-0 outline-none text-xs text-[#101828] py-1 focus:ring-0 placeholder:text-[#64748B]/50"
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                  />
                </div>
 
                {/* Metal Dropdown */}
                <div className="flex flex-col border border-gray-200/80 bg-[#F2EDE0] px-4 py-2 rounded-sm transition-all duration-300">
                  <label className="text-[9px] font-bold tracking-widest text-[#0A5A7D] uppercase mb-1">
                    Select Stainless Steel Category *
                  </label>
                  <select
                    required
                    className="bg-transparent border-0 outline-none text-xs text-[#101828] py-1 focus:ring-0 cursor-pointer text-[#64748B]"
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                  >
                    <option value="" className="bg-[#F9F6EE]">-- Please Select --</option>
                    <option value="austenitic" className="bg-[#F9F6EE]">Austenitic Stainless Steel (e.g., SS 304/316)</option>
                    <option value="duplex" className="bg-[#F9F6EE]">Duplex & Super Duplex Steel</option>
                    <option value="ferritic" className="bg-[#F9F6EE]">Ferritic & Martensitic SS</option>
                    <option value="specialty" className="bg-[#F9F6EE]">Precipitation Hardening & Specialty SS</option>
                  </select>
                </div>
 
                {/* Message */}
                <div className="flex flex-col border border-gray-200/80 bg-[#F2EDE0] px-4 py-2 rounded-sm transition-all duration-300">
                  <label className="text-[9px] font-bold tracking-widest text-[#0A5A7D] uppercase mb-1">
                    Specify Specs or Requirements (Tonnage, Grade, Form)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Describe custom tolerances, sizes, special standards..."
                    className="bg-transparent border-0 outline-none text-xs text-[#101828] py-1 focus:ring-0 resize-none placeholder:text-[#64748B]/50"
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-sm bg-[#0A5A7D] hover:bg-[#1A8CAF] text-white font-heading text-xs font-extrabold tracking-widest uppercase transition-all duration-300 shadow-lg active:scale-[0.98]"
                >
                  INITIALIZE PRECISE INQUIRY
                </button>
              </form>
            </div>

            {/* Right Column: Address and Direct Call */}
            <div className="contact-anim-right flex flex-col justify-between py-4 pl-0 lg:pl-10">
              <div className="space-y-6">
                <span className="text-xs font-bold tracking-[0.3em] text-[#0A5A7D] uppercase block">
                  DIRECT CONCIERGE DESK
                </span>
                <h3 className="font-heading text-3xl md:text-5xl font-extrabold text-[#101828] tracking-tight uppercase leading-none">
                  LOCATED IN THE HEART OF INDUSTRY
                </h3>
                <p className="text-xs text-[#64748B] leading-relaxed font-light">
                  Our heavy processing machinery, precision shearing systems, and corporate offices operate in perfect synchronization, facilitating rapid dispatch and immediate custom sizing from our Visakhapatnam headquarters.
                </p>
                <div className="h-[1px] bg-[#101828]/10 w-full" />
              </div>

              {/* Info Block */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">

                <div className="space-y-2.5">
                  <div className="flex items-center space-x-2 text-[#0A5A7D]">
                    <MapPin className="w-4 h-4 shrink-0" />
                    <span className="text-[10px] font-bold tracking-widest uppercase">HEAD OFFICE</span>
                  </div>
                  <p className="text-xs text-[#64748B] leading-relaxed font-light">
                    8-6-45 OPP Westside showroom panthulugarimeda nh.5 old gajuwaka Visakhapatnam 530026 A.P
                  </p>
                </div>

                <div className="space-y-2.5">
                  <div className="flex items-center space-x-2 text-[#0A5A7D]">
                    <Phone className="w-4 h-4 shrink-0" />
                    <span className="text-[10px] font-bold tracking-widest uppercase">PROCURE DESK</span>
                  </div>
                  <p className="text-xs text-[#64748B] leading-relaxed font-light font-sans">
                    7013361790 / 9885121388
                  </p>
                  <p className="text-xs text-[#64748B] leading-relaxed font-light">
                    WhatsApp Support Active
                  </p>
                </div>

                <div className="space-y-2.5">
                  <div className="flex items-center space-x-2 text-[#0A5A7D]">
                    <Mail className="w-4 h-4 shrink-0" />
                    <span className="text-[10px] font-bold tracking-widest uppercase">OFFICIAL EMAIL</span>
                  </div>
                  <p className="text-xs text-[#64748B] leading-relaxed font-light font-mono">
                    hospira.steel@gmail.com
                  </p>
                </div>

                <div className="space-y-2.5">
                  <div className="flex items-center space-x-2 text-[#0A5A7D]">
                    <Award className="w-4 h-4 shrink-0" />
                    <span className="text-[10px] font-bold tracking-widest uppercase">ACCREDITATIONS</span>
                  </div>
                  <p className="text-xs text-[#64748B] leading-relaxed font-light font-sans">
                    ISO 9001:2015 Quality System <br />
                    ISI Standard IS 2062 approved
                  </p>
                </div>

              </div>

              {/* Quick direct WhatsApp link */}
              <div className="mt-8">
                <a
                  href="https://wa.me/919885121388"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-3 bg-[#0A5A7D]/5 hover:bg-[#0A5A7D]/10 border border-[#0A5A7D]/15 text-[#0A5A7D] hover:text-[#1A8CAF] text-xs font-bold tracking-widest uppercase py-3.5 px-6 rounded-sm transition-all duration-300"
                >
                  <span>CONNECT ON WHATSAPP SECURELY</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section >

      {/* AREAS WE SERVE GEO-LOGISTICS REGIONAL HUBS */}
      <AreasWeServe />

      {/* METALLURGICAL PRODUCT DIRECTORY INDEX FOR SEO OPTIMIZATION */}
      <ProductRegistryIndex />

      {/* Infinite scrolling Trusted By partners banner at the very bottom of the page */}
      < Trustedby />

      {/* Hidden SEO Keywords Block - visually completely hidden but present in DOM for search engine crawlers */}
      <div 
        aria-hidden="true" 
        className="opacity-0 pointer-events-none select-none absolute -bottom-[9999px] left-0 h-[1px] w-[1px] overflow-hidden"
        style={{ fontSize: '1px', color: 'transparent' }}
      >
        <p>Company. SINCE September 2006</p>
        <p>With over 21 years of experience in the Stainless steel Pipe and Sheet industry, HOSPIRA STEEL AND ALLOY has the knowledge and expertise to .</p>
        <p>
          Manufacturing and Stockiest Stainless Steel Pipe , stainless steel sheet plate tube steel pipe Stainless Steel sheet Dealers in Visakhapatnam Jindal steel pipe Visakhapatnam Stainless Steel Pipe Visakhapatnam ss seamless pipe 304,310,321,309 Pipe , flange, plate, sheet, nut bolt, WIRE ROD Tube ,ball valve, Elbow Fittings, Angle Channel Jindal stainless Steel vizag All type Stainless steel pipe fitting flange ,Jindal Pipe Sheet Plate Ss 304 Ss 316 Ss 310 ,Steel pipe Erw pipe seamless pipe tube Ss 304 Jindal steel plate and sheet ,Ss 316 pipe and plate sheet Fittings ,Stainless steel ball valve , gate valve , Ss pipe Fittings, bend, elbow, reducer ,Ss Flanges sorf WNRF SOFF FLANGE , Ss Bend Elbow Fittings Suppliers Manufacturer
          SS NUT BOLT, ss washer, bolt nut ,SS WIRE ROD, stainless steel round rod , Gold coated pipe , golden coating pipe , Golden sheet Visakhapatnam SS 304 pipe fittings bend elbow suppliers Ss PVD Coating Partition , Pvd Coating Glass railing Vizag , rose Gold Pvd Coating Patrion & glass railing work done by Hospira steel ss sheet suppliers in Visakhapatnam
          Stainless Steel 304,316,310,321,309 , SS Sheet suppliers In Near Me Visakhapatnam
          Stainless Steel Company ,Stainless Steel sheet Suppliers in Visakhapatnam 
          Jindal Stainless Steel pipe Visakhapatnam ,Stainless Steel flange Visakhapatnam 
          Stainless Steel Valve Visakhapatnam , Stainless Steel pipe fitting Visakhapatnam 
          Jindal Stainless Steel plate sheet Vizag , Stainless Steel railing pipe Visakhapatnam 
          Stainless Steel shop in Visakhapatnam , Jindal steel pipe price Visakhapatnam 
          Jindal Stainless Steel shop Visakhapatnam Stainless Steel tube Gajuwaka Visakhapatnam ,Stainless Steel pipe dealers in Visakhapatnam , pipe , pipes, ss 304 pipe price in Visakhapatnam , SS 304 pipe price kg, ss pipes , ss pipe , Jindal steel pipe price in kg vizag
        </p>
        <p>Stainless Steel Sheet Dealers In Visakhapatnam , stainless steel fastener Dealers in Visakhapatnam , SS 304 Pipe suppliers distributors in vizag , ALL TYPE STAINLESS STEEL RAW MATERIALS</p>
        <p>Top Stainless Steel Pipe Distributors Dealers suppliers In Visakhapatnam</p>
        <p>Stainless steel pipe dealers in Visakhapatnam</p>
        <p>ss pipe supplies in Visakhapatnam / ss 304 316 pipe sheet plate fittings valve fasteners in vizag</p>
      </div>

    </div >
  );
}
