import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

interface PageLoaderProps {
  onComplete: () => void;
}

export default function PageLoader({ onComplete }: PageLoaderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    if (
      !progressBarRef.current ||
      !containerRef.current ||
      !textRef.current
    )
      return;

    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set(progressBarRef.current, { width: "0%" });
      gsap.set(textRef.current, { opacity: 0, y: 20 });

      if (subtitleRef.current) {
        gsap.set(subtitleRef.current, { opacity: 0, y: 15 });
      }

      if (logoRef.current) {
        gsap.set(logoRef.current, { opacity: 0, scale: 0.9, y: 15 });
      }

      // Intro Animation
      gsap.timeline()
        .to(textRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power3.out",
        })
        .to(
          subtitleRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
            ease: "power3.out",
          },
          "-=0.25"
        )
        .to(
          logoRef.current,
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.3"
        )
        .to(
          progressBarRef.current,
          {
            width: "100%",
            duration: 4.0,
            ease: "power1.inOut",
          },
          "0"
        );
    }, containerRef);

 
    const minimumTime = new Promise((resolve) =>
      setTimeout(resolve, 4000)
    );

    let active = true;
    const pageLoaded = new Promise((resolve) => {
      if (document.readyState === "complete") {
        resolve(true);
      } else {
        window.addEventListener("load", () => resolve(true), {
          once: true,
        });
      }
    });

    Promise.all([minimumTime, pageLoaded]).then(() => {
      if (!active) return;
      gsap.to(containerRef.current, {
        opacity: 0,
        duration: 0.5,
        ease: "power2.inOut",
        onComplete: () => {
          onComplete();
        },
      });
    });

    return () => {
      active = false;
      ctx.revert();
    };
  }, [onComplete]);

  return (
    <div
      id="branded-loader"
      ref={containerRef}
      className="fixed inset-0 w-screen h-screen z-[9999] flex flex-col items-center justify-center bg-black overflow-hidden"
    >
      <div className="text-center relative z-10 max-w-2xl px-6 flex flex-col items-center">
        {/* Brand Logo & Name */}
        <div ref={textRef} style={{ opacity: 0 }} className="mb-2 flex flex-col items-center w-full">
          <h1 className="font-heading text-3xl sm:text-4xl font-bold tracking-[0.15em] text-[#38BDF8] !text-[#38BDF8]">
            HOSPIRA STEEL
          </h1>
          <div className="h-[1px] w-full max-w-xs bg-[#38BDF8]/40 mt-3 mb-2" />
        </div>
        
        <p ref={subtitleRef} style={{ opacity: 0 }} className="text-sm tracking-[0.4em] text-[#38BDF8] !text-[#38BDF8] uppercase mb-6 font-semibold">
          Precision · Quality · Metal
        </p>

        {/* Progress Bar Track */}
        <div className="w-64 h-[3px] bg-white/10 rounded-full overflow-hidden mx-auto mb-10">
          <div
            ref={progressBarRef}
            className="h-full bg-gradient-to-r from-[#0EA5E9] to-[#38BDF8] rounded-full"
            style={{ width: '0%' }}
          />
        </div>

        {/* Padharo PNG / Fallback */}
        {!imageError ? (
          <img
            ref={logoRef}
            src="/padharo.png"
            alt="Padharo"
            style={{ opacity: 0 }}
            className="w-48 sm:w-64 md:w-80 lg:w-[480px] h-auto object-contain"
            onError={() => {
              setImageError(true);
            }}
          />
        ) : (
          <div 
            ref={logoRef}
            style={{ opacity: 0 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#38BDF8] !text-[#38BDF8] tracking-[0.25em] uppercase italic drop-shadow-[0_0_20px_rgba(56,189,248,0.3)] select-none"
          >
            PADHARO
          </div>
        )}
      </div>
    </div>
  );
}
