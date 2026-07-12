import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Clock, Calendar, ShieldCheck, ArrowRight, MessageSquare, Copy, Check, Code } from 'lucide-react';
import gsap from 'gsap';
import ProductRegistryIndex from '../components/ProductRegistryIndex';
import AreasWeServe from '../components/AreasWeServe';

interface ContactProps {
  onNavigate: (path: string) => void;
}

export default function Contact({ onNavigate }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    email: '',
    metalType: 'austenitic',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [contactMethod, setContactMethod] = useState<'whatsapp' | 'email'>('whatsapp');
  const [whatsappMessage, setWhatsappMessage] = useState('Hello Hospira Steel & Alloy, I would like to request an estimate/quote for industrial steel products.');
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);

  useEffect(() => {
    gsap.fromTo('.contact-page-anim',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', stagger: 0.15 }
    );
  }, []);

  const handleInputFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const wrapper = e.currentTarget.parentElement;
    if (wrapper) {
      gsap.to(wrapper, {
        borderColor: '#0A5A7D',
        boxShadow: '0 0 10px rgba(10, 90, 125, 0.2)',
        duration: 0.3
      });
    }
  };

  const handleInputBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const wrapper = e.currentTarget.parentElement;
    if (wrapper) {
      gsap.to(wrapper, {
        borderColor: 'rgba(10, 90, 125, 0.25)',
        boxShadow: 'none',
        duration: 0.3
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Animate success card
    setTimeout(() => {
      gsap.fromTo('.success-popup',
        { scale: 0.9, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5, ease: 'power3.out' }
      );
    }, 100);
  };

  const handleCopyToClipboard = (email: string) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(email);
    setTimeout(() => {
      setCopiedEmail(null);
    }, 2000);
  };

  return (
    <div className="bg-[#FFFFFF] min-h-screen pt-28 pb-20 font-sans">
      
      {/* HERO BANNER - BOLD & ENLARGED */}
      <section className="relative py-20 border-b border-gray-200/60 bg-[#F2F7FB] mb-20">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <span className="contact-page-anim text-sm font-bold tracking-[0.3em] text-[#0A5A7D] uppercase block mb-4">
            SECURE DIRECT CHANNELS
          </span>
          <h1 className="contact-page-anim font-heading text-5xl md:text-8xl font-black text-[#101828] uppercase tracking-tighter mb-6">
            CONTACT METALLURGY DESK
          </h1>
          <p className="contact-page-anim text-base sm:text-lg md:text-xl text-[#64748B] max-w-3xl font-light leading-relaxed">
            Reach out directly to our procure lines, access our Visakhapatnam logistics terminal coordinates, or dispatch a custom specification inquiry.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* LEFT COLUMN (7/12): Contact Form & Map */}
        <div className="lg:col-span-7 space-y-10 contact-page-anim">
          
          {isSubmitted ? (
            <div className="success-popup bg-white border border-[#0A5A7D]/40 p-12 text-center rounded-2xl space-y-6 shadow-2xl">
              <ShieldCheck className="w-20 h-20 text-[#0A5A7D] mx-auto animate-pulse" />
              <h3 className="font-heading text-3xl font-bold text-[#101828] tracking-wide uppercase">
                INQUIRY REGISTERED SECURELY
              </h3>
              <p className="text-sm sm:text-base text-[#64748B] leading-relaxed max-w-lg mx-auto">
                Thank you for contacting the Hospira Steel & Alloy procurement desk. Your corporate inquiry has been logged in our system. A senior estimating engineer will review the specifications and reply to <strong>{formData.email}</strong> within 2 hours.
              </p>
              <div className="pt-6">
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-8 py-3.5 bg-[#0A5A7D] hover:bg-[#1A8CAF] text-white text-sm font-bold tracking-widest uppercase rounded-full transition-colors cursor-pointer shadow-md"
                >
                  DISPATCH ANOTHER MESSAGE
                </button>
              </div>
            </div>
          ) : (
            <div className="bg-[#F2F7FB] border border-gray-200 p-8 md:p-10 rounded-2xl shadow-md">
              
              {/* TABS SELECTOR - LARGER FONTS */}
              <div className="flex border-b border-gray-200 mb-8 pb-3">
                <button
                  type="button"
                  onClick={() => setContactMethod('whatsapp')}
                  className={`flex-1 py-4 text-center font-heading text-xs sm:text-sm font-bold tracking-widest uppercase border-r border-gray-200/60 transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer ${
                    contactMethod === 'whatsapp'
                      ? 'text-[#0A5A7D] bg-[#0A5A7D]/5 shadow-[inset_0_-3px_0_#0A5A7D]'
                      : 'text-[#64748B] hover:text-[#101828]'
                  }`}
                >
                  <MessageSquare className="w-5 h-5 text-emerald-500 shrink-0" />
                  CONTACT ON WHATSAPP
                </button>
                <button
                  type="button"
                  onClick={() => setContactMethod('email')}
                  className={`flex-1 py-4 text-center font-heading text-xs sm:text-sm font-bold tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer ${
                    contactMethod === 'email'
                      ? 'text-[#0A5A7D] bg-[#0A5A7D]/5 shadow-[inset_0_-3px_0_#0A5A7D]'
                      : 'text-[#64748B] hover:text-[#101828]'
                  }`}
                >
                  <Mail className="w-5 h-5 text-[#0A5A7D] shrink-0" />
                  CONTACT THROUGH EMAIL
                </button>
              </div>

              {contactMethod === 'whatsapp' ? (
                <div className="space-y-8">
                  <div>
                    <h3 className="font-heading text-2xl md:text-3xl font-bold text-[#101828] uppercase tracking-wide">
                      WHATSAPP INSTANT DESK
                    </h3>
                    <p className="text-xs text-[#0A5A7D] tracking-widest uppercase mt-1 font-mono">
                      DIRECT CHAT & INSTANT RESPONSE
                    </p>
                    <p className="text-sm md:text-base text-[#64748B] mt-3 font-light leading-relaxed">
                      Type your inquiry details below, then click any of our active departments to launch WhatsApp and begin secure instant communication.
                    </p>
                  </div>

                  {/* PRE-FILLED WHATSAPP MESSAGE WRAPPER */}
                  <div className="flex flex-col border border-gray-200 bg-white px-5 py-3 rounded-xl transition-all duration-300">
                    <label className="text-[11px] font-bold tracking-widest text-[#0A5A7D] uppercase mb-2">
                      Write your brief / inquiry text
                    </label>
                    <textarea
                      rows={3}
                      value={whatsappMessage}
                      onChange={(e) => setWhatsappMessage(e.target.value)}
                      placeholder="Specify your product name, sizes, grades or custom request details here..."
                      className="bg-transparent border-0 outline-none text-sm text-[#101828] py-1 focus:ring-0 resize-none placeholder:text-[#64748B]/30 font-light"
                      onFocus={handleInputFocus}
                      onBlur={handleInputBlur}
                    />
                  </div>

                  {/* FOUR ACTIVE DESKS */}
                  <div className="space-y-4">
                    <span className="text-[11px] font-bold tracking-widest text-[#64748B] uppercase block font-mono">
                      CHOOSE ACTIVE REPRESENTATIVE DESK
                    </span>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {[
                        { name: 'Head Office (Dinesh)', phone: '7013361790', desk: 'General Procurement & Pricing' },
                        { name: 'Direct Line 2', phone: '9885121388', desk: 'Bulk Quotes & Structural Alloys' },
                        { name: 'Direct Line 3', phone: '9985477751', desk: 'Logistics, Port & Delivery Planning' },
                        { name: 'Direct Line 4', phone: '9618821088', desk: 'Mill Testing & Certificates' }
                      ].map((desk, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => {
                            const url = `https://wa.me/91${desk.phone}?text=${encodeURIComponent(whatsappMessage)}`;
                            window.open(url, '_blank');
                          }}
                          className="flex items-start justify-between bg-white hover:bg-white/80 border border-gray-200 hover:border-[#0A5A7D]/50 p-4 rounded-xl text-left transition-all duration-300 group/item cursor-pointer shadow-sm"
                        >
                          <div>
                            <div className="text-xs sm:text-sm font-bold text-[#101828] group-hover/item:text-[#0A5A7D] transition-colors font-sans uppercase">
                              {desk.name}
                            </div>
                            <div className="text-[10px] text-[#64748B] tracking-wider uppercase mt-1">
                              {desk.desk}
                            </div>
                            <div className="text-xs sm:text-sm text-emerald-600 font-mono font-bold mt-2 flex items-center gap-1.5">
                              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                              +91 {desk.phone}
                            </div>
                          </div>
                          <span className="bg-[#0A5A7D]/5 text-[#0A5A7D] border border-[#0A5A7D]/15 p-2 rounded-lg group-hover/item:bg-[#0A5A7D] group-hover/item:text-white transition-all shrink-0 ml-3 shadow-sm">
                            <MessageSquare className="w-4 h-4 shrink-0" />
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-8">
                  {/* TWO ELEGANT EMAIL CONTACT CARDS - HIGHLY VISUAL & FUNCTIONAL */}
                  <div>
                    <h3 className="font-heading text-2xl md:text-3xl font-bold text-[#101828] uppercase tracking-wide">
                      DIRECT EMAIL DESK
                    </h3>
                    <p className="text-xs text-[#0A5A7D] tracking-widest uppercase mt-1 font-mono">
                      COPY OR LAUNCH DIRECT CORRESPONDENCE
                    </p>
                  </div>

                  <div className="grid grid-cols-1 gap-5">
                    {/* 1st Email Contact (Company) */}
                    <div className="bg-white border border-gray-200/80 rounded-xl p-5 md:p-6 transition-all duration-300 hover:border-[#0A5A7D]/30 group shadow-sm">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="flex items-start gap-4">
                          <div className="bg-[#0A5A7D]/10 p-3 rounded-lg border border-[#0A5A7D]/25 text-[#0A5A7D] shrink-0 mt-0.5">
                            <Mail className="w-5 h-5" />
                          </div>
                          <div>
                            <span className="text-[10px] md:text-xs font-bold tracking-widest text-[#0A5A7D] uppercase font-mono block mb-1">
                              1st Contact · Company Head Desk
                            </span>
                            <h4 className="text-lg md:text-2xl font-mono font-extrabold text-[#101828] tracking-tight break-all">
                              hospira.steel@gmail.com
                            </h4>
                            <p className="text-xs text-[#64748B] mt-1 font-light">
                              For business quotes, material certification, and logistics coordination.
                            </p>
                          </div>
                        </div>

                        {/* Copy & Send Action bar */}
                        <div className="flex items-center gap-2 md:self-center">
                          <button
                            type="button"
                            onClick={() => handleCopyToClipboard('hospira.steel@gmail.com')}
                            className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#F2F7FB] hover:bg-[#0A5A7D] hover:text-white text-[#0A5A7D] border border-gray-200 text-xs font-bold uppercase transition-all duration-300 cursor-pointer"
                          >
                            {copiedEmail === 'hospira.steel@gmail.com' ? (
                              <>
                                <Check className="w-3.5 h-3.5 shrink-0" />
                                COPIED!
                              </>
                            ) : (
                              <>
                                <Copy className="w-3.5 h-3.5 shrink-0" />
                                COPY EMAIL
                              </>
                            )}
                          </button>
                          <a
                            href="mailto:hospira.steel@gmail.com"
                            className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#0A5A7D] hover:bg-[#1A8CAF] text-white text-xs font-bold uppercase transition-all duration-300 text-center shadow-sm"
                          >
                            <ArrowRight className="w-3.5 h-3.5" />
                            SEND EMAIL
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* 2nd Email Contact (Website Designer) */}
                    <div className="bg-white border border-gray-200/80 rounded-xl p-5 md:p-6 transition-all duration-300 hover:border-[#0A5A7D]/30 group shadow-sm">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="flex items-start gap-4">
                          <div className="bg-[#F2F7FB] p-3 rounded-lg border border-gray-200 text-[#101828] shrink-0 mt-0.5">
                            <ShieldCheck className="w-5 h-5" />
                          </div>
                          <div>
                            <span className="text-[10px] md:text-xs font-bold tracking-widest text-[#64748B] uppercase font-mono block mb-1">
                              2nd Contact · Website Designer & Webmaster
                            </span>
                            <h4 className="text-lg md:text-2xl font-mono font-extrabold text-[#101828] tracking-tight break-all">
                              jigarrajpurohit82@gmail.com
                            </h4>
                            <p className="text-xs text-[#64748B] mt-1 font-light">
                              Contact regarding website issues, digital security, platform maintenance or technical bugs.
                            </p>
                          </div>
                        </div>

                        {/* Copy & Send Action bar */}
                        <div className="flex items-center gap-2 md:self-center">
                          <button
                            type="button"
                            onClick={() => handleCopyToClipboard('jigarrajpurohit82@gmail.com')}
                            className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#F2F7FB] hover:bg-[#0A5A7D] hover:text-white text-[#0A5A7D] border border-gray-200 text-xs font-bold uppercase transition-all duration-300 cursor-pointer"
                          >
                            {copiedEmail === 'jigarrajpurohit82@gmail.com' ? (
                              <>
                                <Check className="w-3.5 h-3.5 shrink-0" />
                                COPIED!
                              </>
                            ) : (
                              <>
                                <Copy className="w-3.5 h-3.5 shrink-0" />
                                COPY EMAIL
                              </>
                            )}
                          </button>
                          <a
                            href="mailto:jigarrajpurohit82@gmail.com"
                            className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#0A5A7D] hover:bg-[#1A8CAF] text-white text-xs font-bold uppercase transition-all duration-300 text-center shadow-sm"
                          >
                            <ArrowRight className="w-3.5 h-3.5" />
                            SEND EMAIL
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* OPTIONAL DETAILED EMAIL DISPATCH FORM */}
                  <form onSubmit={handleSubmit} className="space-y-5 border-t border-gray-200 pt-8 mt-4">
                    <div>
                      <h4 className="font-heading text-lg sm:text-xl font-bold text-[#101828] uppercase tracking-wide">
                        DISPATCH PROCUREMENT BRIEF
                      </h4>
                      <p className="text-[10px] text-[#0A5A7D] tracking-widest uppercase mt-0.5 font-mono">
                        OR SUBMIT SECURE WEB ENQUIRY FOR AUTOMATED EST-COMPILATION
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div className="flex flex-col border border-gray-200 bg-white px-4 py-2.5 rounded-xl transition-all duration-300">
                        <label className="text-[10px] md:text-xs font-bold tracking-widest text-[#0A5A7D] uppercase mb-1.5">
                          Contact Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Amit Patel"
                          className="bg-transparent border-0 outline-none text-sm text-[#101828] py-1 focus:ring-0 placeholder:text-[#64748B]/30"
                          onFocus={handleInputFocus}
                          onBlur={handleInputBlur}
                        />
                      </div>

                      {/* Company Name */}
                      <div className="flex flex-col border border-gray-200 bg-white px-4 py-2.5 rounded-xl transition-all duration-300">
                        <label className="text-[10px] md:text-xs font-bold tracking-widest text-[#0A5A7D] uppercase mb-1.5">
                          Business Company Name
                        </label>
                        <input
                          type="text"
                          value={formData.companyName}
                          onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                          placeholder="e.g. Apex Marine Builders"
                          className="bg-transparent border-0 outline-none text-sm text-[#101828] py-1 focus:ring-0 placeholder:text-[#64748B]/30"
                          onFocus={handleInputFocus}
                          onBlur={handleInputBlur}
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex flex-col border border-gray-200 bg-white px-4 py-2.5 rounded-xl transition-all duration-300">
                      <label className="text-[10px] md:text-xs font-bold tracking-widest text-[#0A5A7D] uppercase mb-1.5">
                        Corporate Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="procurement@apexmarine.com"
                        className="bg-transparent border-0 outline-none text-sm text-[#101828] py-1 focus:ring-0 placeholder:text-[#64748B]/50"
                        onFocus={handleInputFocus}
                        onBlur={handleInputBlur}
                      />
                    </div>

                    {/* Metallurgy Dropdown */}
                    <div className="flex flex-col border border-gray-200 bg-white px-4 py-2.5 rounded-xl transition-all duration-300">
                      <label className="text-[10px] md:text-xs font-bold tracking-widest text-[#0A5A7D] uppercase mb-1.5">
                        Select Stainless Steel Category *
                      </label>
                      <select
                        value={formData.metalType}
                        onChange={(e) => setFormData({ ...formData, metalType: e.target.value })}
                        className="bg-transparent border-0 outline-none text-sm text-[#101828] py-1 focus:ring-0 cursor-pointer text-[#64748B]"
                        onFocus={handleInputFocus}
                        onBlur={handleInputBlur}
                      >
                        <option value="austenitic" className="bg-white">Austenitic Stainless Steel (e.g., SS 304/316)</option>
                        <option value="duplex" className="bg-white">Duplex & Super Duplex Steel</option>
                        <option value="ferritic" className="bg-white">Ferritic & Martensitic SS</option>
                        <option value="specialty" className="bg-white">Precipitation Hardening & Specialty SS</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div className="flex flex-col border border-gray-200 bg-white px-4 py-2.5 rounded-xl transition-all duration-300">
                      <label className="text-[10px] md:text-xs font-bold tracking-widest text-[#0A5A7D] uppercase mb-1.5">
                        Your Requirements / Message *
                      </label>
                      <textarea
                        rows={4}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Specify tolerances, grades, dimensions, destination..."
                        className="bg-transparent border-0 outline-none text-sm text-[#101828] py-1 focus:ring-0 resize-none placeholder:text-[#64748B]/50 font-light"
                        onFocus={handleInputFocus}
                        onBlur={handleInputBlur}
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 bg-[#0A5A7D] hover:bg-[#1A8CAF] text-white font-heading text-xs sm:text-sm font-bold tracking-widest uppercase rounded-full transition-all duration-300 shadow-md shadow-[#0A5A7D]/20 cursor-pointer text-center"
                    >
                      DISPATCH DIRECT ESTIMATION BRIEF
                    </button>
                  </form>
                </div>
              )}
            </div>
          )}

          {/* Premium Vector Mock Map Dashboard */}
          <div className="bg-[#EEF4FA] border border-gray-200 p-8 rounded-2xl space-y-6 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-gray-200 pb-4 gap-2">
              <div>
                <span className="text-[10px] md:text-xs font-bold tracking-widest text-[#0A5A7D] uppercase block font-mono">LOGISTICS LOCATION HUBS</span>
                <span className="text-sm sm:text-base text-[#101828] font-semibold uppercase">VISAKHAPATNAM HQ & ANDHRA PRADESH NETWORK</span>
              </div>
              <span className="font-mono text-[10px] text-[#64748B] whitespace-nowrap">HQ: 17.6868° N | AP: 16.5062° N</span>
            </div>
            
            {/* Dark Styled Map Panel Layout */}
            <div className="h-80 bg-[#F2F7FB] border border-gray-200 rounded-2xl p-5 relative overflow-hidden flex flex-col justify-between shadow-inner">
              {/* Abstract luxury grid lines acting as map */}
              <div className="absolute inset-0 opacity-10 pointer-events-none bg-[linear-gradient(rgba(10,90,125,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(10,90,125,0.08)_1px,transparent_1px)] bg-[size:16px_16px]" />
              
              {/* Visual connection line between South (HQ) and AP network */}
              <div className="absolute top-[30%] right-[30%] w-[1px] h-[35%] bg-gradient-to-b from-[#0A5A7D]/40 to-transparent rotate-45 transform origin-top-left pointer-events-none" />
              
              {/* HQ pointer (Visakhapatnam) */}
              <div className="absolute bottom-[20%] left-[30%] -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center">
                <div className="w-3 h-3 bg-[#0A5A7D] rounded-full animate-ping absolute" />
                <div className="w-3 h-3 bg-[#0A5A7D] rounded-full border border-white" />
                <span className="bg-white border border-[#0A5A7D]/40 text-[#0A5A7D] text-[8px] font-bold font-mono px-2 py-1 rounded mt-1 whitespace-nowrap shadow-md">
                  VISAKHAPATNAM HQ (A.P)
                </span>
              </div>

              {/* Andhra Pradesh Hub Pointer */}
              <div className="absolute top-[20%] right-[25%] -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center">
                <div className="w-3 h-3 bg-[#0A5A7D] rounded-full animate-ping absolute" />
                <div className="w-3 h-3 bg-[#0A5A7D] rounded-full border border-white" />
                <span className="bg-white border border-[#0A5A7D]/40 text-[#0A5A7D] text-[8px] font-bold font-mono px-2 py-1 rounded mt-1 whitespace-nowrap shadow-md">
                  ANDHRA PRADESH DISTRIB HUB (VIJAYAWADA)
                </span>
              </div>

              {/* Transit times overlay stats */}
              <div className="relative z-10 self-start text-[10px] font-mono text-[#64748B] space-y-1.5 max-w-xs bg-white/80 p-2.5 rounded-xl border border-gray-200 shadow-sm">
                <div className="text-[#0A5A7D] font-bold uppercase tracking-wider mb-1">LOCAL CO-ORDINATES</div>
                <div>&gt; VIZAG HQ: NH-16 Access (0.1 KM) | Seaport (12.5 KM)</div>
                <div>&gt; ANDHRA HUB: Direct supply lines to Vijayawada & Guntur</div>
                <div>&gt; FREIGHT TRANSIT: Nationwide Industrial Logistics</div>
              </div>

              <div className="relative z-10 self-end text-[9px] text-[#0A5A7D] font-bold tracking-widest uppercase bg-white px-3.5 py-1.5 rounded-full border border-[#0A5A7D]/20 font-mono shadow-sm">
                SUPPLY NETWORK ACTIVE NATIONWIDE
              </div>
            </div>

            {/* Geographical SEO text block */}
            <div className="bg-white border border-gray-200/80 p-4 rounded-xl space-y-2">
              <h5 className="text-[10px] text-[#0A5A7D] font-mono uppercase tracking-widest font-bold">Local Delivery & Regional Coverage</h5>
              <p className="text-[11px] text-[#64748B] leading-relaxed font-light">
                Hospira Steel & Alloy delivers customized, heavy-duty industrial pipes, sheets, tubes, and fittings. We actively serve the major maritime industrial corridor of <strong>Visakhapatnam, Gajuwaka, and Andhra Pradesh</strong>, as well as providing direct critical supply lines for infrastructure, projects, and industrial construction throughout <strong>Andhra Pradesh (including Vijayawada, Guntur, Nellore, and Tirupati)</strong>.
              </p>
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN (5/12): Operating Hours & Direct Desk Lines */}
        <div className="lg:col-span-5 space-y-10 contact-page-anim">
          
          {/* Operating Hours Panel */}
          <div className="bg-[#EEF4FA] border border-gray-200 p-8 rounded-2xl space-y-5 shadow-sm">
            <div className="flex items-center space-x-3 border-b border-gray-200 pb-4">
              <Clock className="w-6 h-6 text-[#0A5A7D]" />
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#101828] uppercase tracking-wider">
                OPERATING HOURS
              </h3>
            </div>

            <div className="space-y-4 text-sm sm:text-base">
              <div className="flex justify-between items-center">
                <span className="text-[#64748B] font-light">Monday to Friday</span>
                <span className="text-[#101828] font-mono font-semibold">09:00 AM - 06:00 PM</span>
              </div>
              <div className="flex justify-between items-center border-t border-gray-200/60 pt-4">
                <span className="text-[#64748B] font-light">Saturday</span>
                <span className="text-[#101828] font-mono font-semibold">09:00 AM - 04:00 PM</span>
              </div>
              <div className="flex justify-between items-center border-t border-gray-200/60 pt-4">
                <span className="text-[#64748B] font-light">Sunday</span>
                <span className="text-[#0A5A7D] font-bold uppercase tracking-widest font-mono text-xs sm:text-sm">FACILITY SECURED (CLOSED)</span>
              </div>
            </div>
          </div>

          {/* Quick Contacts Panel */}
          <div className="bg-[#EEF4FA] border border-gray-200 p-8 rounded-2xl space-y-8 shadow-sm">
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#101828] uppercase tracking-wider border-b border-gray-200 pb-4">
              DIRECT DESK DIRECTORY
            </h3>

            <div className="space-y-6 text-sm sm:text-base">
              
              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-[#0A5A7D] shrink-0 mt-1" />
                <div>
                  <span className="block text-[10px] md:text-xs tracking-widest text-[#64748B] font-bold uppercase mb-1 font-mono">
                    DIRECT LINE 1 & 2
                  </span>
                  <span className="text-[#101828] font-mono font-bold block text-base sm:text-lg">7013361790 / 9885121388</span>
                  <span className="text-xs sm:text-sm text-[#0A5A7D] mt-1 block font-mono">hospira.steel@gmail.com</span>
                </div>
              </div>

              <div className="h-[1px] bg-gray-200/60 w-full" />

              <div className="flex items-start space-x-4">
                <ShieldCheck className="w-6 h-6 text-[#0A5A7D] shrink-0 mt-1" />
                <div>
                  <span className="block text-[10px] md:text-xs tracking-widest text-[#64748B] font-bold uppercase mb-1 font-mono">
                    DIRECT LINE 3 & 4
                  </span>
                  <span className="text-[#101828] font-mono font-bold block text-base sm:text-lg">9985477751 / 9618821088</span>
                  <span className="text-xs sm:text-sm text-[#0A5A7D] mt-1 block font-mono">hospira.steel@gmail.com</span>
                </div>
              </div>

              <div className="h-[1px] bg-gray-200/60 w-full" />

              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-[#0A5A7D] shrink-0 mt-1" />
                <div>
                  <span className="block text-[10px] md:text-xs tracking-widest text-[#64748B] font-bold uppercase mb-1 font-mono">
                    HEAD PROCUREMENT DESK
                  </span>
                  <span className="text-[#101828] font-mono font-bold block text-base sm:text-lg">hospira.steel@gmail.com</span>
                </div>
              </div>

              <div className="h-[1px] bg-gray-200/60 w-full" />

              <div className="flex items-start space-x-4">
                <Code className="w-6 h-6 text-[#0A5A7D] shrink-0 mt-1" />
                <div>
                  <span className="block text-[10px] md:text-xs tracking-widest text-[#64748B] font-bold uppercase mb-1 font-mono">
                    WEBSITE DESIGNER & WEBMASTER
                  </span>
                  <span className="text-[#101828] font-sans font-extrabold block text-base sm:text-lg uppercase">
                    Jigar Rajpurohit
                  </span>
                  <span className="text-[#101828] font-mono font-bold block text-sm sm:text-base mt-0.5">
                    +91 8104257343
                  </span>
                  <span className="text-xs sm:text-sm text-[#0A5A7D] mt-1 block font-mono">
                    jigarrajpurohit82@gmail.com
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* Prompt to Bulk Order Page */}
          <div className="border border-gray-200 bg-white p-8 rounded-2xl text-center space-y-5 shadow-md">
            <span className="text-[10px] md:text-xs font-bold tracking-widest text-[#0A5A7D] uppercase block font-mono">MACRO TONS SUPPLY</span>
            <h4 className="font-heading text-xl sm:text-2xl font-bold text-[#101828] uppercase">REQUIRING HIGH-TONNAGE BULK?</h4>
            <p className="text-sm sm:text-base text-[#64748B] font-light leading-relaxed">
              For complex project estimations exceeding 10 Metric Tons, please utilize our detailed bulk quote interface for custom chemical specifications and tailored delivery slots.
            </p>
            <button
              onClick={() => onNavigate('quote')}
              className="w-full py-4 bg-[#0A5A7D] hover:bg-[#1A8CAF] text-white font-heading text-xs sm:text-sm font-bold tracking-widest uppercase rounded-full transition-all duration-300 shadow-sm cursor-pointer"
            >
              ACCESS CUSTOM QUOTE MAKER
            </button>
          </div>

        </div>

      </section>

      {/* REGIONAL GEO-LOGISTICS SERVICE INDEX */}
      <AreasWeServe />

      {/* METALLURGICAL PRODUCT DIRECTORY INDEX FOR SEO OPTIMIZATION */}
      <ProductRegistryIndex />

    </div>
  );
}
