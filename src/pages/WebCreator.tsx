import React, { useState, useEffect } from 'react';
import { Code, Sparkles, Mail, Phone, MessageSquare, Copy, Check, ShieldCheck, Cpu, Database, Layout, Smartphone, Star, Zap, Terminal } from 'lucide-react';
import gsap from 'gsap';

interface WebCreatorProps {
  onNavigate: (path: string) => void;
}

export default function WebCreator({ onNavigate }: WebCreatorProps) {
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'stack' | 'services' | 'guarantee'>('stack');

  useEffect(() => {
    // Elegant entrance animation with GSAP
    gsap.fromTo('.creator-hero-fade',
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out', stagger: 0.15 }
    );

    gsap.fromTo('.creator-card-stagger',
      { opacity: 0, scale: 0.95, y: 20 },
      { opacity: 1, scale: 1, y: 0, duration: 0.8, ease: 'back.out(1.2)', stagger: 0.1, delay: 0.4 }
    );
  }, []);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 2000);
  };

  const skills = [
    { name: 'React.js & Vite', level: 'Expert', desc: 'Ultra-fast loading & dynamic state handling' },
    { name: 'Tailwind CSS', level: 'Expert', desc: 'Sleek, responsive & custom aesthetic layouts' },
    { name: 'TypeScript', level: 'Advanced', desc: 'Robust, type-safe clean coding patterns' },
    { name: 'GSAP Animations', level: 'Advanced', desc: 'Fluid fluid transitions & cinematic scroll triggers' },
    { name: 'API Integrations', level: 'Expert', desc: 'Secure backend proxying & database connections' },
    { name: 'SEO & Performance', level: 'Expert', desc: 'Guaranteed 95+ lighthouse optimization scores' }
  ];

  const highlights = [
    { icon: <Cpu className="w-5 h-5" />, title: '5+ Years Experience', desc: 'Refined craft delivering reliable, secure production platforms.' },
    { icon: <Layout className="w-5 h-5" />, title: 'Custom UI/UX', desc: 'No generic templates. Tailored wireframes that fit your exact business tone.' },
    { icon: <Zap className="w-5 h-5" />, title: 'Hyper Performance', desc: 'Coded for instant page speeds, premium responsive breakpoints & SEO rank ready.' },
  ];

  return (
    <div className="bg-[#FFFFFF] min-h-screen pt-28 pb-20 text-[#101828] relative overflow-hidden">
      {/* Background Decorative Rings */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#0A5A7D]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-[#0A5A7D]/5 rounded-full blur-[150px] pointer-events-none" />

      {/* HEADER HERO AREA */}
      <section className="relative py-16 md:py-24 border-b border-[#101828]/10 bg-gradient-to-b from-[#F2F7FB] to-[#FFFFFF]">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-6">
          <div className="creator-hero-fade inline-flex items-center gap-2 px-3 py-1 bg-[#0A5A7D]/10 rounded-full border border-[#0A5A7D]/20 mb-2">
            <Sparkles className="w-4 h-4 text-[#0A5A7D] animate-spin-slow" />
            <span className="text-[10px] md:text-xs font-mono font-bold tracking-[0.25em] text-[#0A5A7D] uppercase">
              MEET YOUR DIGITAL ARCHITECT
            </span>
          </div>

          <h1 className="creator-hero-fade font-heading text-5xl sm:text-7xl md:text-8xl font-black uppercase tracking-tighter leading-none text-[#101828]">
            JIGAR RAJPUROHIT
          </h1>

          <p className="creator-hero-fade text-lg md:text-2xl text-[#0A5A7D] font-mono tracking-widest font-bold uppercase">
            5+ Years of Experience in Premium Website Designing
          </p>

          <p className="creator-hero-fade text-base md:text-xl text-[#64748B] max-w-3xl mx-auto font-light leading-relaxed">
            I build modern, blazingly fast full-stack websites that turn visitors into high-paying corporate clients. This very website is a living sample of my code craft, speed, and premium design standards.
          </p>

          {/* ATTENTION SEEKER BOUNCING HINGLISH PROMO BANNER */}
          <div className="creator-hero-fade max-w-2xl mx-auto bg-gradient-to-r from-[#0A5A7D]/15 via-[#0A5A7D]/5 to-[#0A5A7D]/15 border border-[#0A5A7D]/30 rounded-2xl p-6 md:p-8 shadow-[0_4px_25px_rgba(10,90,125,0.1)] relative overflow-hidden group">
            <div className="absolute inset-0 bg-[#0A5A7D]/5 pointer-events-none animate-pulse" />
            <div className="absolute -top-12 -right-12 w-24 h-24 bg-[#0A5A7D]/10 rounded-full blur-xl" />
            
            <div className="relative z-10 space-y-3.5">
              <span className="inline-block px-3 py-1 bg-[#0A5A7D] text-white text-[9px] font-mono font-black rounded uppercase tracking-wider animate-bounce">
                ATTENTION BUSINESS OWNERS
              </span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-heading font-black text-[#101828] uppercase tracking-tight">
                "Agar aap bhi chahte hain ki aapka business online grow kare ek aisi hi super-fast, responsive aur premium website ke saath, toh aaj hi contact karein!"
              </h2>
              <p className="text-xs text-[#64748B] font-light max-w-lg mx-auto">
                No templates, no lag, no excuses. Just pure premium custom code designed to place your business miles ahead of competitors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CORE STATS BENTO GRID */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map((item, idx) => (
            <div key={idx} className="creator-card-stagger bg-[#EEF4FA] border border-[#101828]/10 hover:border-[#0A5A7D]/30 p-6 rounded-2xl transition-all duration-300 relative group shadow-sm">
              <div className="w-10 h-10 bg-[#0A5A7D]/10 text-[#0A5A7D] border border-[#0A5A7D]/15 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-lg md:text-xl font-heading font-bold text-[#101828] uppercase tracking-wider mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-[#64748B] font-light leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED WORK SHOWCASE: Web.jpg */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="creator-card-stagger bg-[#F2F7FB] border border-[#101828]/10 rounded-3xl p-6 md:p-10 shadow-lg relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#0A5A7D]/5 rounded-full blur-[120px] pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Project Image */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden border border-[#101828]/10 bg-white shadow-2xl group-hover:border-[#0A5A7D]/30 transition-all duration-500 aspect-video flex items-center justify-center p-2 sm:p-4">
                <img 
                  src="/Web.png" 
                  alt="Premium Website Design Layout" 
                  className="max-w-full max-h-full object-contain group-hover:scale-102 transition-transform duration-700"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between z-10">
                  <span className="px-3 py-1 bg-[#101828] border border-[#0A5A7D]/30 rounded-lg text-xs font-mono font-bold text-white uppercase tracking-wider">
                    Featured Project
                  </span>
                  <span className="text-[10px] font-mono text-[#64748B] bg-white/90 px-2 py-0.5 rounded shadow-sm">
                    Perfect Responsiveness
                  </span>
                </div>
              </div>
            </div>

            {/* Project Details */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0A5A7D]/10 rounded-full border border-[#0A5A7D]/25">
                <Layout className="w-4 h-4 text-[#0A5A7D]" />
                <span className="text-[10px] md:text-xs font-bold tracking-widest text-[#0A5A7D] uppercase font-mono">Premium Work Sample</span>
              </div>
              
              <h3 className="font-heading text-3xl md:text-4xl font-black text-[#101828] uppercase tracking-tight leading-tight">
                HOSPIRA STEEL & ALLOY DIGITAL HUB
              </h3>

              <p className="text-sm md:text-base text-[#64748B] leading-relaxed font-light">
                Developed as a high-performance industrial storefront. This layout combines dense corporate catalogs with ultra-fast search speed, micro-animations, and a fully polished modern light theme.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="border border-[#101828]/10 bg-white p-4 rounded-xl shadow-sm">
                  <div className="text-lg font-bold text-[#0A5A7D] font-mono">100%</div>
                  <div className="text-[10px] text-[#64748B] uppercase tracking-wider mt-0.5">Mobile-Friendly Refinement</div>
                </div>
                <div className="border border-[#101828]/10 bg-white p-4 rounded-xl shadow-sm">
                  <div className="text-lg font-bold text-[#0A5A7D] font-mono">Sub-Second</div>
                  <div className="text-[10px] text-[#64748B] uppercase tracking-wider mt-0.5">Dynamic Route Rendering</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TWO-COLUMN DETAILS & SHOWCASE */}
      <section className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start py-8">
        
        {/* LEFT COLUMN: INTERACTIVE TABS */}
        <div className="lg:col-span-7 space-y-8">
          <div className="bg-[#EEF4FA] border border-[#101828]/10 rounded-2xl overflow-hidden shadow-sm">
            <div className="flex border-b border-[#101828]/10">
              {(['stack', 'services', 'guarantee'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 py-4 text-center font-heading text-xs sm:text-sm font-bold tracking-widest uppercase transition-colors cursor-pointer ${
                    activeTab === tab
                      ? 'text-[#0A5A7D] bg-white border-b-2 border-[#0A5A7D]'
                      : 'text-[#64748B] hover:text-[#101828]'
                  }`}
                >
                  {tab === 'stack' && 'TECH STACK'}
                  {tab === 'services' && 'WHAT I DELIVER'}
                  {tab === 'guarantee' && 'MY PROMISE'}
                </button>
              ))}
            </div>

            <div className="p-6 md:p-8 min-h-[300px]">
              {activeTab === 'stack' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {skills.map((skill, idx) => (
                    <div key={idx} className="bg-white border border-[#101828]/10 p-4 rounded-xl space-y-1.5 hover:border-[#0A5A7D]/30 transition-colors shadow-sm">
                      <div className="flex justify-between items-center">
                        <span className="font-mono text-sm font-bold text-[#101828]">{skill.name}</span>
                        <span className="text-[9px] font-mono bg-[#0A5A7D]/10 text-[#0A5A7D] border border-[#0A5A7D]/20 px-2 py-0.5 rounded uppercase font-bold">{skill.level}</span>
                      </div>
                      <p className="text-xs text-[#64748B] font-light leading-relaxed">{skill.desc}</p>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'services' && (
                <div className="space-y-4">
                  {[
                    { label: 'E-Commerce Portals', text: 'Secure transaction pipelines, high-density listing dashboards, and swift client checkouts.' },
                    { label: 'Industrial & B2B Web Solutions', text: 'Heavyweight branding designed to attract corporate buyers, automated pricing briefs, and custom CRM tools.' },
                    { label: 'SEO Campaign Integration', text: 'Clean semantics to guarantee first-page rankings on local and global search engines.' },
                    { label: 'Speed & Conversion Optimizations', text: 'Code-splitting and asset compressions that ensure your page loads in under 1.2 seconds.' }
                  ].map((service, idx) => (
                    <div key={idx} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-[#101828]/10 shadow-sm">
                      <div className="bg-[#0A5A7D]/10 text-[#0A5A7D] p-1.5 rounded-lg border border-[#0A5A7D]/25 shrink-0">
                        <Check className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-[#101828] uppercase tracking-wider">{service.label}</h4>
                        <p className="text-xs text-[#64748B] mt-1 leading-relaxed font-light">{service.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'guarantee' && (
                <div className="space-y-6 text-center sm:text-left">
                  <div className="flex flex-col sm:flex-row items-center gap-5 bg-white p-5 rounded-xl border border-[#0A5A7D]/20 shadow-sm">
                    <ShieldCheck className="w-12 h-12 text-[#0A5A7D] shrink-0" />
                    <div className="space-y-1">
                      <h4 className="text-base font-bold text-[#101828] uppercase tracking-widest font-mono">100% CLEAN CODE GUARANTEE</h4>
                      <p className="text-xs text-[#64748B] font-light leading-relaxed">
                        I write highly modular, pristine TypeScript React components following standard guidelines. No spaghetti codes, no hardcoded secrets, and no hidden dependencies.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-white border border-[#101828]/10 p-4 rounded-xl text-center shadow-sm">
                      <div className="text-3xl font-extrabold text-[#0A5A7D] font-mono">1.2s</div>
                      <div className="text-[10px] text-[#64748B] uppercase tracking-widest mt-1">Average Load Speed</div>
                    </div>
                    <div className="bg-white border border-[#101828]/10 p-4 rounded-xl text-center shadow-sm">
                      <div className="text-3xl font-extrabold text-[#0A5A7D] font-mono">100%</div>
                      <div className="text-[10px] text-[#64748B] uppercase tracking-widest mt-1">Mobile Responsive</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: DIRECT LEAD GENERATOR & CONTACT CARD */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-[#EEF4FA] border border-[#0A5A7D]/20 p-8 rounded-2xl space-y-6 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#0A5A7D] via-[#1A8CAF] to-[#0A5A7D]" />
            
            <div className="text-center">
              <span className="text-[10px] text-[#64748B] font-bold tracking-widest uppercase block font-mono">GET IN TOUCH INSTANTLY</span>
              <h3 className="font-heading text-2xl font-black text-[#101828] uppercase mt-1 tracking-wider">SECURE INQUIRY DESK</h3>
              <p className="text-xs text-[#64748B] mt-1.5 font-light">
                Launch a chat or drop a brief to upgrade your business online.
              </p>
            </div>

            {/* DIRECT TELEPHONE & COPY */}
            <div className="bg-white border border-[#101828]/10 hover:border-[#0A5A7D]/20 rounded-xl p-4 shadow-sm transition-all space-y-2">
              <span className="text-[9px] font-mono font-bold tracking-wider text-[#0A5A7D] uppercase block">
                Direct Phone Line
              </span>
              <div className="flex items-center justify-between gap-3">
                <a 
                  href="tel:+918104257343" 
                  className="text-base sm:text-lg font-mono font-black text-[#101828] hover:text-[#0A5A7D] transition-colors flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-emerald-600 animate-pulse" />
                  +91 8104257343
                </a>
                <button
                  type="button"
                  onClick={() => handleCopy('8104257343', 'phone')}
                  className="px-3 py-1.5 bg-white hover:bg-gray-50 border border-[#0A5A7D]/15 text-[10px] font-bold tracking-widest uppercase text-[#0A5A7D] rounded cursor-pointer transition-all flex items-center gap-1 shadow-sm"
                >
                  {copiedText === 'phone' ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-500" />
                      COPIED
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      COPY
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* DIRECT EMAIL & COPY */}
            <div className="bg-white border border-[#101828]/10 hover:border-[#0A5A7D]/20 rounded-xl p-4 shadow-sm transition-all space-y-2">
              <span className="text-[9px] font-mono font-bold tracking-wider text-[#0A5A7D] uppercase block">
                Official Email Address
              </span>
              <div className="flex flex-col gap-2">
                <a 
                  href="mailto:jigarrajpurohit82@gmail.com" 
                  className="text-sm sm:text-base font-mono font-black text-[#101828] hover:text-[#0A5A7D] transition-colors break-all flex items-center gap-2"
                >
                  <Mail className="w-4 h-4 text-[#0A5A7D]" />
                  jigarrajpurohit82@gmail.com
                </a>
                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={() => handleCopy('jigarrajpurohit82@gmail.com', 'email')}
                    className="px-3 py-1.5 bg-white hover:bg-gray-50 border border-[#0A5A7D]/15 text-[10px] font-bold tracking-widest uppercase text-[#0A5A7D] rounded cursor-pointer transition-all flex items-center gap-1 shadow-sm"
                  >
                    {copiedText === 'email' ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-500" />
                        COPIED
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        COPY EMAIL
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* INSTANT WHATSAPP LEAD GENERATOR */}
            <a
              href="https://wa.me/918104257343?text=Hello%20Jigar%2C%20I%20saw%20your%20awesome%20work%20on%20Hospira%20Steel%20and%20Alloy%20website%20and%20I%20want%20to%20discuss%20a%20website%20project%20with%20you%21"
              target="_blank"
              rel="noreferrer"
              className="w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-heading text-xs font-bold tracking-widest uppercase rounded-none flex items-center justify-center gap-2 transition-all duration-300 shadow-md text-center cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              TALK ON WHATSAPP NOW
            </a>

            <div className="text-center font-mono text-[9px] text-[#64748B] tracking-widest">
              SECURE SEC-LEVEL SSL SHIELDED CONNECTION
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}
