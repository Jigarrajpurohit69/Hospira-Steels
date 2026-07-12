import { useEffect } from 'react';
import { Award, Compass, Heart, ShieldCheck, Milestone, CheckCircle2 } from 'lucide-react';
import gsap from 'gsap';
import ProductRegistryIndex from '../components/ProductRegistryIndex';

interface AboutProps {
  onNavigate: (path: string) => void;
}

export default function About({ onNavigate }: AboutProps) {
  useEffect(() => {
    gsap.fromTo('.about-page-anim',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', stagger: 0.15 }
    );
  }, []);

  const values = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#0A5A7D]" />,
      title: 'CERTIFIED PEDIGREE',
      desc: 'No product exits our gates without a direct physical mill test correlation. We maintain 100% trace origin.'
    },
    {
      icon: <Compass className="w-6 h-6 text-[#0A5A7D]" />,
      title: 'STRUCTURAL PRECISION',
      desc: 'Our processing line operates with laser-aligned tolerances up to +/- 0.05mm across slitting and shearing.'
    },
    {
      icon: <Award className="w-6 h-6 text-[#0A5A7D]" />,
      title: 'COMPLIANCE INTEGRITY',
      desc: 'Strictly aligned with ISI, ISO 9001:2015, and international ASTM, ASME standards for high-security construction.'
    },
    {
      icon: <Milestone className="w-6 h-6 text-[#0A5A7D]" />,
      title: 'SUPPLY CHAIN VELOCITY',
      desc: 'Backed by localized strategic dispatch warehouses, we secure seamless, uninterrupted container lines.'
    }
  ];

  return (
    <div className="bg-[#FFFFFF] min-h-screen pt-28 pb-20 font-sans">
      
      {/* HEADER BANNER */}
      <section className="relative py-16 border-b border-gray-200/60 bg-[#F2F7FB] mb-16">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <span className="about-page-anim text-xs font-bold tracking-[0.3em] text-[#0A5A7D] uppercase block mb-3">
            VISAKHAPATNAM & ANDHRA PRADESH
          </span>
          <h1 className="about-page-anim font-heading text-4xl md:text-7xl font-black text-[#101828] uppercase tracking-tighter mb-4">
            OUR LEGACY STORY
          </h1>
          <p className="about-page-anim text-sm sm:text-base text-[#64748B] max-w-2xl font-light leading-relaxed">
            Discover the strict metallurgical values and foundational chronology that built one of the most trusted names in steel and alloy products.
          </p>
        </div>
      </section>

      {/* CORE STORY BLOCK */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
        
        {/* Left: Narrative text (7/12) */}
        <div className="lg:col-span-7 space-y-6 about-page-anim">
          <span className="text-xs font-bold tracking-[0.2em] text-[#0A5A7D] uppercase block">
            HOW WE SHAPED MASTERY
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-black text-[#101828] uppercase tracking-tighter">
            BRIDGING REFINERY INTENSITY AND PRECISION MANUFACTURING
          </h2>
          <div className="w-16 h-[2px] bg-[#0A5A7D]" />
          
          <p className="text-sm text-[#64748B] leading-relaxed font-light">
            With over 20 years of experience in the stainless steel pipe and sheet industry, Hospira Steel and Alloy is a trusted name in the manufacturing and supply of high-quality stainless steel products. We are recognized for our knowledge, expertise, and commitment to quality, serving both industrial and commercial sectors.
          </p>

          <p className="text-sm text-[#64748B] leading-relaxed font-light">
            Hospira Steel and Alloy is a leading manufacturer, stockiest, and supplier of high-quality Stainless Steel products in Visakhapatnam. With nearly two decades of experience, we specialize in providing premium stainless steel materials and fittings to various industrial, commercial, and residential projects. We also offer bespoke <strong className="text-[#0A5A7D]">SS PVD coating Partition glass railing work</strong> for residential properties and custom homes.
          </p>

          <p className="text-sm text-[#64748B] leading-relaxed font-light">
            We do not just trade sheets, plates, and coils. We deliver absolute structural security and exquisite architectural finish compliance.
          </p>
        </div>

        {/* Right: Architectural Stats & Graphic Card (5/12) */}
        <div className="lg:col-span-5 bg-[#EEF4FA] border border-gray-200 p-8 rounded-xl space-y-6 about-page-anim hover:border-[#0A5A7D]/35 transition-all duration-300 shadow-md">
          <h3 className="font-heading text-xl font-bold text-[#101828] uppercase tracking-wider">
            OUR PROCESSING CORE
          </h3>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-gray-200/60 pb-2">
              <span className="text-xs text-[#64748B] font-medium">Established</span>
              <span className="text-xs text-[#0A5A7D] font-mono font-bold">September 2006</span>
            </div>

            <div className="flex items-center justify-between border-b border-gray-200/60 pb-2">
              <span className="text-xs text-[#64748B] font-medium">Headquarters Location</span>
              <span className="text-xs text-[#101828] font-mono">Visakhapatnam, India</span>
            </div>

            <div className="flex items-center justify-between border-b border-gray-200/60 pb-2">
              <span className="text-xs text-[#64748B] font-medium">Annual Shearing Capacity</span>
              <span className="text-xs text-[#101828] font-mono">150,000+ Metric Tons</span>
            </div>

            <div className="flex items-center justify-between border-b border-gray-200/60 pb-2">
              <span className="text-xs text-[#64748B] font-medium">Precision Tolerance</span>
              <span className="text-xs text-[#0A5A7D] font-mono font-bold">+/- 0.05 mm</span>
            </div>

            <div className="flex items-center justify-between border-b border-gray-200/60 pb-2">
              <span className="text-xs text-[#64748B] font-medium">In-House Labs</span>
              <span className="text-xs text-[#101828] font-mono">NABL ISO-17025 Certified</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-xs text-[#64748B] font-medium">Mill Partners</span>
              <span className="text-xs text-[#101828] font-mono">JSL, APEX, RINKU, ADDBSTEEL</span>
            </div>
          </div>

          <div className="pt-4">
            <button
              onClick={() => onNavigate('contact')}
              className="w-full py-3 bg-[#0A5A7D] hover:bg-[#1A8CAF] text-white text-xs font-bold tracking-widest uppercase transition-all duration-300 rounded-full shadow-sm"
            >
              VISIT OUR COMPLEX
            </button>
          </div>
        </div>

      </section>

      {/* CERTIFICATE OF ACCREDITATION */}
      <section className="max-w-4xl mx-auto px-6 mb-24 relative z-10 text-center">
        <div className="bg-[#EEF4FA] border border-[#0A5A7D]/20 p-6 md:p-10 rounded-xl hover:border-[#0A5A7D]/30 transition-all duration-300 shadow-lg relative overflow-hidden">
          {/* Subtle decorative corners */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-[#0A5A7D]/40" />
          <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-[#0A5A7D]/40" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-[#0A5A7D]/40" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-[#0A5A7D]/40" />

          <span className="text-[10px] font-bold tracking-[0.3em] text-[#0A5A7D] uppercase block mb-3">
            VERIFIED CREDIBILITY
          </span>
          <h2 className="font-heading text-2xl md:text-4xl font-black text-[#101828] uppercase tracking-tighter mb-4">
            CERTIFICATE OF COMPLIANCE & TRUST
          </h2>
          <p className="text-xs md:text-sm text-[#64748B] max-w-xl mx-auto mb-8 font-light leading-relaxed">
            Hospira Steel & Alloy is fully registered, accredited, and verified under official international industrial steel and alloy protocols.
          </p>

          <div className="relative group max-w-lg mx-auto bg-white p-3 border border-gray-200 rounded-lg shadow-sm">
            <img 
              src="/Certificate/certificate 1.jpeg" 
              alt="Hospira Steel & Alloy Certificate of Compliance" 
              className="w-full h-auto object-contain rounded border border-[#0A5A7D]/15 group-hover:border-[#0A5A7D]/35 transition-all duration-300 max-h-[600px] mx-auto"
            />
            {/* Gloss overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/[0.03] to-white/0 pointer-events-none rounded-md" />
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-[10px] text-[#0A5A7D] font-mono uppercase tracking-widest">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#0A5A7D] shrink-0" />
              ISO 9001:2015 REGISTERED
            </span>
            <span className="text-gray-300">•</span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#0A5A7D] shrink-0" />
              GOVERNMENT APPROVED DEPOT
            </span>
            <span className="text-gray-300">•</span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#0A5A7D] shrink-0" />
              100% QUALITY TRACEABILITY
            </span>
          </div>
        </div>
      </section>

      {/* CORE VALUES BLOCK */}
      <section className="bg-[#F2F7FB] border-t border-b border-gray-200/60 py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-bold tracking-[0.25em] text-[#0A5A7D] uppercase block mb-3">
              THE FOUR PILLARS OF INTEGRITY
            </span>
            <h2 className="font-heading text-3xl md:text-5xl font-black text-[#101828] uppercase tracking-tighter">
              CORPORATE VALUE CHARTER
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div
                key={i}
                className="bg-white border border-gray-200 p-6 rounded-xl space-y-4 hover:border-[#0A5A7D]/40 transition-all duration-300 shadow-sm"
              >
                <div className="w-12 h-12 rounded-lg bg-[#0A5A7D]/10 border border-[#0A5A7D]/30 flex items-center justify-center">
                  {v.icon}
                </div>
                <h3 className="font-heading text-base font-bold text-[#101828] tracking-wider uppercase">
                  {v.title}
                </h3>
                <p className="text-xs text-[#64748B] leading-relaxed font-light">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPLIANCE / ACCREDITATIONS BADGES */}
      <section className="max-w-7xl mx-auto px-6 py-24 text-center space-y-10">
        <div className="max-w-2xl mx-auto">
          <span className="text-xs font-bold tracking-[0.25em] text-[#0A5A7D] uppercase block mb-3">
            VERIFIED INDUSTRY STATUS
          </span>
          <h2 className="font-heading text-2xl md:text-4xl font-black text-[#101828] uppercase tracking-tighter mb-4">
            GOVERNMENT & ISO APPROVALS
          </h2>
          <p className="text-xs text-[#64748B] font-light leading-relaxed">
            Our facilities, shearing machinery, safety processes, and quality audits undergo continuous stringent evaluation. We are proud, accredited suppliers to public sector undertakings (PSUs), defense contractors, and major aerospace giants.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 max-w-4xl mx-auto">
          
          <div className="bg-[#EEF4FA] border border-gray-200 px-6 py-4 rounded-xl flex items-center space-x-3 shadow-sm">
            <CheckCircle2 className="w-5 h-5 text-[#0A5A7D]" />
            <span className="text-xs text-[#101828] font-mono font-medium tracking-wide">ISO 9001:2015 SYSTEM</span>
          </div>

          <div className="bg-[#EEF4FA] border border-gray-200 px-6 py-4 rounded-xl flex items-center space-x-3 shadow-sm">
            <CheckCircle2 className="w-5 h-5 text-[#0A5A7D]" />
            <span className="text-xs text-[#101828] font-mono font-medium tracking-wide">IS 2062 ACCREDITED</span>
          </div>

          <div className="bg-[#EEF4FA] border border-gray-200 px-6 py-4 rounded-xl flex items-center space-x-3 shadow-sm">
            <CheckCircle2 className="w-5 h-5 text-[#0A5A7D]" />
            <span className="text-xs text-[#101828] font-mono font-medium tracking-wide">NABL LAB ISO-17025</span>
          </div>

          <div className="bg-[#EEF4FA] border border-gray-200 px-6 py-4 rounded-xl flex items-center space-x-3 shadow-sm">
            <CheckCircle2 className="w-5 h-5 text-[#0A5A7D]" />
            <span className="text-xs text-[#101828] font-mono font-medium tracking-wide">BHEL APPROVED</span>
          </div>

        </div>
      </section>

      {/* METALLURGICAL PRODUCT DIRECTORY INDEX FOR SEO OPTIMIZATION */}
      <ProductRegistryIndex />

    </div>
  );
}
