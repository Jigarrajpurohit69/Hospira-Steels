import React from 'react';

interface TrustedbyProps {
  variant?: 'standard' | 'minimal';
}

export default function Trustedby({ variant = 'standard' }: TrustedbyProps) {
  const partners = [
    { name: 'TATA STEEL', label: 'TATA STEEL' },
    { name: 'L&T BUILD', label: 'L&T BUILD' },
    { name: 'RELIANCE', label: 'RELIANCE' },
    { name: 'GODREJ', label: 'GODREJ' },
    { name: 'BHEL', label: 'BHEL' },
    { name: 'JINDAL STEEL', label: 'JINDAL STEEL' },
    { name: 'SAIL', label: 'SAIL' },
    { name: 'HINDALCO', label: 'HINDALCO' }
  ];

  // Duplicate to make a long seamless strip
  const doubledPartners = [...partners, ...partners, ...partners, ...partners];

  if (variant === 'minimal') {
    return (
      <div className="w-full py-4 relative overflow-hidden mt-2 z-10">
        {/* CSS for seamless infinite loop */}
        <style>{`
          @keyframes marquee-mini {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee-mini {
            display: flex;
            gap: 2.5rem;
            width: max-content;
            animation: marquee-mini 40s linear infinite;
          }
          .animate-marquee-mini:hover {
            animation-play-state: paused;
          }
        `}</style>

        <div className="max-w-7xl mx-auto px-6 mb-3">
          <span className="text-[9px] font-bold tracking-[0.3em] text-[#64748B]/60 uppercase mb-1 block text-center">
            TRUSTED BY GLOBAL INDUSTRIAL GIANTS
          </span>
          <div className="h-[1px] bg-gradient-to-r from-transparent via-[#101828]/5 to-transparent w-full" />
        </div>

        {/* Gradient masks to fade out at edges */}
        <div className="relative w-full overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-16 before:bg-gradient-to-r before:from-white/0 before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-16 after:bg-gradient-to-l after:from-white/0 after:to-transparent">
          <div className="animate-marquee-mini py-1">
            {doubledPartners.map((partner, index) => (
              <span
                key={index}
                className="text-[13px] md:text-[15px] font-extrabold font-mono tracking-[0.25em] text-[#64748B]/70 hover:text-[#0A5A7D] transition-colors duration-300 cursor-default select-none"
              >
                {partner.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-[#F2F7FB] border-t border-b border-[#101828]/10 py-10 relative overflow-hidden mt-16">
      {/* CSS for seamless infinite loop */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          gap: 1.5rem;
          width: max-content;
          animation: marquee 35s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Decorative subtle blue light leaks */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-24 bg-[#0A5A7D]/5 blur-[80px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-24 bg-[#0A5A7D]/5 blur-[80px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 mb-6">
        <span className="text-[10px] font-bold tracking-[0.4em] text-[#0A5A7D]/80 uppercase mb-2 block text-center font-heading">
          TRUSTED BY GLOBAL INDUSTRIAL GIANTS
        </span>
        <div className="h-[1px] bg-gradient-to-r from-transparent via-[#0A5A7D]/15 to-transparent w-full" />
      </div>

      {/* Gradient masks to fade out at edges */}
      <div className="relative w-full overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-16 md:before:w-32 before:bg-gradient-to-r before:from-[#F2F7FB] before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-16 md:after:w-32 after:bg-gradient-to-l after:from-[#F2F7FB] after:to-transparent">
        <div className="animate-marquee py-2">
          {doubledPartners.map((partner, index) => (
            <span
              key={index}
              className="text-xs md:text-sm font-extrabold font-mono tracking-[0.2em] text-[#101828] hover:text-[#0A5A7D] transition-colors duration-300 bg-white px-5 py-2.5 rounded-md border border-[#101828]/10 shadow-sm cursor-default select-none flex items-center gap-2"
            >
              <span className="text-[#0A5A7D]/40 text-[10px]">◆</span>
              {partner.label}
              <span className="text-[#0A5A7D]/40 text-[10px]">◆</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
