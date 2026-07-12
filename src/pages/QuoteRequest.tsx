import React, { useState, useEffect, useRef } from 'react';
import { 
  ShieldCheck, 
  FileText, 
  Calendar, 
  MapPin, 
  Scale, 
  ChevronRight,
  Database,
  Layers,
  Sparkles,
  Info,
  Check,
  Building2,
  User,
  Mail,
  Phone,
  FileSpreadsheet
} from 'lucide-react';
import gsap from 'gsap';
import confetti from 'canvas-confetti';
import { PRODUCTS } from '../data';
import ProductRegistryIndex from '../components/ProductRegistryIndex';

interface QuoteRequestProps {
  preFilledMetal?: string;
  preFilledForm?: string;
  onNavigate: (path: string) => void;
}

export default function QuoteRequest({ preFilledMetal = '', preFilledForm = '', onNavigate }: QuoteRequestProps) {
  // Determine initial selected product
  const getInitialProductId = () => {
    if (!preFilledMetal) return 'pipes';
    
    // Check if preFilledMetal matches direct product ID
    const directMatch = PRODUCTS.find(p => p.id === preFilledMetal);
    if (directMatch) return directMatch.id;
    
    // Check if matches category (like steel, stainless, copper)
    const catMatch = PRODUCTS.find(p => p.category === preFilledMetal);
    if (catMatch) return catMatch.id;
    
    // Default fallback
    return 'pipes';
  };

  const [selectedProductId, setSelectedProductId] = useState(getInitialProductId());
  const activeProduct = PRODUCTS.find(p => p.id === selectedProductId) || PRODUCTS[0];

  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    metalType: activeProduct.name,
    form: preFilledForm || activeProduct.availableForms[0] || '',
    grade: activeProduct.grade,
    quantity: '',
    unit: 'Tons',
    deliveryLocation: '',
    timeline: '1-2-weeks',
    specialRequirements: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Sync state when activeProduct changes
  useEffect(() => {
    setFormData(prev => ({
      ...prev,
      metalType: activeProduct.name,
      grade: activeProduct.grade,
      form: (preFilledForm && activeProduct.availableForms.some(f => f.toLowerCase() === preFilledForm.toLowerCase())) 
        ? preFilledForm 
        : activeProduct.availableForms[0] || ''
    }));
  }, [selectedProductId, activeProduct]);

  // Page entry animations
  useEffect(() => {
    gsap.fromTo('.quote-page-anim',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', stagger: 0.12 }
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
        borderColor: 'rgba(16, 24, 40, 0.1)',
        boxShadow: 'none',
        duration: 0.3
      });
    }
  };

  const triggerMetallicConfetti = () => {
    const colors = ['#0A5A7D', '#1A8CAF', '#FFFFFF', '#4A90D9', '#64748B'];
    
    confetti({
      particleCount: 80,
      angle: 60,
      spread: 60,
      origin: { x: 0, y: 0.8 },
      colors: colors
    });

    confetti({
      particleCount: 80,
      angle: 120,
      spread: 60,
      origin: { x: 1, y: 0.8 },
      colors: colors
    });

    setTimeout(() => {
      confetti({
        particleCount: 100,
        spread: 90,
        origin: { y: 0.6 },
        colors: colors
      });
    }, 250);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    triggerMetallicConfetti();

    setTimeout(() => {
      gsap.fromTo('.success-popup',
        { scale: 0.9, opacity: 0, y: 15 },
        { scale: 1, opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }
      );
    }, 100);
  };

  // Prettify names for display
  const getProductDisplayName = (name: string) => {
    const low = name.toLowerCase();
    if (low === 'pipes') return 'Industrial Pipes';
    if (low === 'sheets') return 'Sheets & Plates';
    if (low === 'electroplish pipes & tubes') return 'Electropolish Pipes & Tubes';
    if (low === 'nipple') return 'Hex & Barrel Nipples';
    return name;
  };

  return (
    <div ref={containerRef} className="bg-[#FFFFFF] min-h-screen pt-28 pb-20 relative overflow-hidden font-sans">
      {/* Decorative Blur Spheres */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#0A5A7D]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#0A5A7D]/5 rounded-full blur-[140px] pointer-events-none" />
      
      {/* HERO SECTION */}
      <section className="relative py-12 border-b border-gray-200/60 bg-[#F2F7FB] mb-12">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          
          {/* Breadcrumbs */}
          <div className="quote-page-anim flex items-center space-x-2 text-[10px] tracking-[0.25em] text-[#0A5A7D] uppercase mb-4">
            <button onClick={() => onNavigate('home')} className="hover:text-[#101828] transition-colors">HOME</button>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#64748B]">INQUIRY CONSTRUCTOR</span>
          </div>

          <h1 className="quote-page-anim font-heading text-4xl sm:text-5xl md:text-6xl font-black text-[#101828] uppercase tracking-tighter mb-4 leading-none">
            INQUIRY CONSTRUCTOR
          </h1>
          <p className="quote-page-anim text-xs sm:text-sm text-[#64748B] max-w-2xl font-light leading-relaxed">
            Construct and lock in your custom heavy-tonnage procurement request. Choose from our certified metallurgical products, configure specific shapes, grades, logistics, and compliance demands.
          </p>
        </div>
      </section>

      {/* ESTIMATE FORM CONTAINER */}
      <section className="max-w-7xl mx-auto px-6 quote-page-anim">
        
        {isSubmitted ? (
          <div className="success-popup bg-white border border-[#0A5A7D]/40 p-12 text-center rounded-2xl space-y-6 shadow-2xl relative overflow-hidden max-w-3xl mx-auto">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#0A5A7D] to-[#1A8CAF]" />
            
            <ShieldCheck className="w-16 h-16 text-[#0A5A7D] mx-auto animate-pulse" />
            
            <div className="space-y-2">
              <h2 className="font-heading text-2xl font-extrabold text-[#101828] uppercase tracking-wide">
                BULK INQUIRY REGISTERED
              </h2>
              <p className="text-[10px] text-[#0A5A7D] tracking-widest uppercase font-mono">
                CONTRACT REFERENCE: HS-Q-{Math.floor(100000 + Math.random() * 900000)}
              </p>
            </div>

            <p className="text-xs text-[#64748B] leading-relaxed max-w-lg mx-auto">
              Your custom metallurgy request for <strong>{getProductDisplayName(activeProduct.name)} ({formData.form})</strong> has been logged successfully and routed to our Senior Estimator Desk in Visakhapatnam. A complete, signed mechanical and chemical quote matching your requirements will be compiled and delivered to <strong>{formData.email}</strong> within 120 minutes.
            </p>

            <div className="h-[1px] bg-gray-200/60 w-24 mx-auto" />

            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <button
                onClick={() => onNavigate('products')}
                className="px-6 py-3 border border-[#0A5A7D]/40 text-[#0A5A7D] text-[10px] font-bold tracking-widest uppercase rounded-full hover:bg-[#0A5A7D] hover:text-white transition-all duration-300 shadow-sm"
              >
                BROWSE PRODUCTS
              </button>
              
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({
                    companyName: '',
                    contactPerson: '',
                    email: '',
                    phone: '',
                    metalType: activeProduct.name,
                    form: activeProduct.availableForms[0] || '',
                    grade: activeProduct.grade,
                    quantity: '',
                    unit: 'Tons',
                    deliveryLocation: '',
                    timeline: '1-2-weeks',
                    specialRequirements: ''
                  });
                }}
                className="px-6 py-3 bg-[#0A5A7D] hover:bg-[#1A8CAF] text-white text-[10px] font-bold tracking-widest uppercase rounded-full transition-all duration-300 shadow-md shadow-[#0A5A7D]/20"
              >
                CONSTRUCT NEW INQUIRY
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* LEFT 5 COLUMNS: 12 PRODUCT SELECTION CARDS */}
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center space-x-2 border-b border-gray-200 pb-3">
                <Layers className="w-5 h-5 text-[#0A5A7D]" />
                <h3 className="font-heading text-sm font-bold text-[#101828] uppercase tracking-widest">
                  1. CHOOSE INDUSTRIAL PRODUCT
                </h3>
              </div>
              
              <p className="text-xs text-[#64748B]">
                Select from our certified products catalog to auto-load available sub-shapes, certified grades, and specific tolerances.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[640px] overflow-y-auto pr-1 custom-scrollbar">
                {PRODUCTS.map((prod) => {
                  const isSelected = selectedProductId === prod.id;
                  return (
                    <div
                      key={prod.id}
                      onClick={() => setSelectedProductId(prod.id)}
                      className={`group relative rounded-xl p-3 border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                        isSelected 
                          ? 'border-[#0A5A7D] bg-[#0A5A7D]/5 shadow-sm' 
                          : 'border-gray-200 bg-white hover:border-[#0A5A7D]/30 hover:bg-[#F2F7FB]'
                      }`}
                    >
                      <div className="flex items-start space-x-3">
                        <div className="w-10 h-10 rounded-lg overflow-hidden bg-gray-50 shrink-0 border border-gray-200 flex items-center justify-center">
                          <img 
                            src={prod.imageUrl} 
                            alt={prod.name} 
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            onError={(e) => {
                              e.currentTarget.style.display = 'none';
                            }}
                          />
                        </div>
                        <div className="space-y-0.5">
                          <h4 className={`text-xs font-bold uppercase tracking-wider ${isSelected ? 'text-[#0A5A7D]' : 'text-[#101828]'}`}>
                            {getProductDisplayName(prod.name)}
                          </h4>
                          <p className="text-[9px] text-[#64748B] uppercase tracking-widest font-mono">
                            {prod.categoryLabel}
                          </p>
                        </div>
                      </div>

                      <div className="mt-4 flex items-center justify-between border-t border-gray-200/60 pt-2">
                        <span className="text-[8px] text-[#64748B] font-mono">
                          {prod.grade}
                        </span>
                        {isSelected && (
                          <span className="flex items-center space-x-1 text-[8px] text-[#0A5A7D] font-bold uppercase tracking-widest">
                            <Check className="w-2.5 h-2.5" />
                            <span>ACTIVE</span>
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* TECHNICAL DATA BOX OF SELECTED PRODUCT */}
              <div className="bg-[#EEF4FA] border border-gray-200 p-5 rounded-xl space-y-4 shadow-sm">
                <div className="flex items-center space-x-2 border-b border-gray-200 pb-2">
                  <Database className="w-4 h-4 text-[#0A5A7D]" />
                  <span className="text-[10px] text-[#0A5A7D] font-bold tracking-widest uppercase font-mono">
                    METRIC & LAB SPEC SHEET
                  </span>
                </div>
                
                <div className="grid grid-cols-2 gap-y-3 gap-x-4 text-[10px]">
                  <div>
                    <span className="block text-[#64748B] uppercase tracking-widest">Standard Grade</span>
                    <span className="font-mono text-[#101828] font-bold">{activeProduct.grade}</span>
                  </div>
                  <div>
                    <span className="block text-[#64748B] uppercase tracking-widest">Thickness / Size</span>
                    <span className="font-mono text-[#101828] font-bold">{activeProduct.thicknessRange}</span>
                  </div>
                  <div>
                    <span className="block text-[#64748B] uppercase tracking-widest">Width Options</span>
                    <span className="font-mono text-[#101828] font-bold">{activeProduct.width}</span>
                  </div>
                  <div>
                    <span className="block text-[#64748B] uppercase tracking-widest">Standard Length</span>
                    <span className="font-mono text-[#101828] font-bold">{activeProduct.length}</span>
                  </div>
                </div>

                <div className="h-[1px] bg-gray-200/60" />

                <div>
                  <span className="block text-[8px] text-[#64748B] uppercase tracking-widest mb-1.5 font-mono">Standard Accreditations</span>
                  <div className="flex flex-wrap gap-1">
                    {activeProduct.certifications.map((cert, idx) => (
                      <span key={idx} className="px-2 py-0.5 bg-white rounded text-[8px] font-mono text-[#101828] border border-gray-200">
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

            </div>

            {/* RIGHT 7 COLUMNS: ENQUIRY CONSTRUCTOR CONFIGURATION */}
            <div className="lg:col-span-7">
              <div className="bg-[#F2F7FB] border border-gray-200 rounded-2xl p-6 md:p-8 shadow-md relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#0A5A7D]/5 rounded-full blur-[40px] pointer-events-none" />
                
                <div className="flex items-center space-x-3 border-b border-gray-200 pb-4 mb-6">
                  <FileText className="w-5 h-5 text-[#0A5A7D]" />
                  <div>
                    <h3 className="font-heading text-sm font-bold text-[#101828] uppercase tracking-widest">
                      2. CONFIGURE SPECIFICATIONS
                    </h3>
                    <span className="text-[9px] text-[#64748B] font-bold tracking-widest uppercase block font-mono">
                      CUSTOM MILL ESTIMATION ENGINE
                    </span>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* COMPARTMENT 1: CHOSEN SPEC */}
                  <div className="bg-white border border-gray-200 rounded-xl p-4 space-y-4 shadow-sm">
                    <span className="block text-[9px] text-[#0A5A7D] font-bold tracking-widest uppercase font-mono">
                      PRODUCT COMPARTMENT
                    </span>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Form Format */}
                      <div className="flex flex-col border border-gray-200 bg-[#F2F7FB] px-3 py-2 rounded-lg transition-all duration-300">
                        <label className="text-[8px] font-bold tracking-widest text-[#0A5A7D] uppercase mb-1 font-mono">
                          Product Form / Format *
                        </label>
                        <select
                          required
                          value={formData.form}
                          onChange={(e) => setFormData({ ...formData, form: e.target.value })}
                          className="bg-transparent border-0 outline-none text-xs text-[#101828] py-1 focus:ring-0 cursor-pointer"
                          onFocus={handleInputFocus}
                          onBlur={handleInputBlur}
                        >
                          {activeProduct.availableForms.map((f, index) => (
                            <option key={index} value={f} className="bg-white text-[#101828]">
                              {f}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Chemical Grade */}
                      <div className="flex flex-col border border-gray-200 bg-[#F2F7FB] px-3 py-2 rounded-lg transition-all duration-300">
                        <label className="text-[8px] font-bold tracking-widest text-[#0A5A7D] uppercase mb-1 font-mono">
                          Specified Steel/Product Grade
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.grade}
                          onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                          placeholder="e.g. ASTM A312 TP316L"
                          className="bg-transparent border-0 outline-none text-xs text-[#101828] py-1 focus:ring-0"
                          onFocus={handleInputFocus}
                          onBlur={handleInputBlur}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Quantity & Unit */}
                      <div className="grid grid-cols-3 gap-2">
                        <div className="col-span-2 flex flex-col border border-gray-200 bg-[#F2F7FB] px-3 py-2 rounded-lg transition-all duration-300">
                          <label className="text-[8px] font-bold tracking-widest text-[#0A5A7D] uppercase mb-1 font-mono">
                            Required Quantity *
                          </label>
                          <input
                            type="number"
                            required
                            min="1"
                            placeholder="e.g. 250"
                            value={formData.quantity}
                            onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                            className="bg-transparent border-0 outline-none text-xs text-[#101828] py-1 focus:ring-0 placeholder:text-[#64748B]/40"
                            onFocus={handleInputFocus}
                            onBlur={handleInputBlur}
                          />
                        </div>
                        
                        <div className="col-span-1 flex flex-col border border-gray-200 bg-[#F2F7FB] px-2 py-2 rounded-lg transition-all duration-300">
                          <label className="text-[8px] font-bold tracking-widest text-[#0A5A7D] uppercase mb-1 font-mono">
                            Unit
                          </label>
                          <select
                            value={formData.unit}
                            onChange={(e) => setFormData({ ...formData, unit: e.target.value })}
                            className="bg-transparent border-0 outline-none text-xs text-[#101828] py-1 focus:ring-0 cursor-pointer"
                            onFocus={handleInputFocus}
                            onBlur={handleInputBlur}
                          >
                            <option value="Tons" className="bg-white text-[#101828]">Tons</option>
                            <option value="KG" className="bg-white text-[#101828]">KG</option>
                            <option value="Pieces" className="bg-white text-[#101828]">Pieces</option>
                          </select>
                        </div>
                      </div>

                      {/* Required Timeline */}
                      <div className="flex flex-col border border-gray-200 bg-[#F2F7FB] px-3 py-2 rounded-lg transition-all duration-300">
                        <label className="text-[8px] font-bold tracking-widest text-[#0A5A7D] uppercase mb-1 font-mono">
                          Delivery Timeline *
                        </label>
                        <select
                          value={formData.timeline}
                          onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                          className="bg-transparent border-0 outline-none text-xs text-[#101828] py-1 focus:ring-0 cursor-pointer"
                          onFocus={handleInputFocus}
                          onBlur={handleInputBlur}
                        >
                          <option value="immediate" className="bg-white text-[#101828]">Immediate (Under 48 Hours)</option>
                          <option value="1-2-weeks" className="bg-white text-[#101828]">Standard (1 - 2 Weeks)</option>
                          <option value="1-month" className="bg-white text-[#101828]">Planned (1 Month)</option>
                          <option value="quarterly" className="bg-white text-[#101828]">Continuous Supply (Quarterly)</option>
                        </select>
                      </div>
                    </div>

                    {/* Delivery Site */}
                    <div className="flex flex-col border border-gray-200 bg-[#F2F7FB] px-3 py-2 rounded-lg transition-all duration-300">
                      <label className="text-[8px] font-bold tracking-widest text-[#0A5A7D] uppercase mb-1 font-mono">
                        Delivery Site / Discharge Location *
                      </label>
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-3.5 h-3.5 text-[#0A5A7D] shrink-0" />
                        <input
                          type="text"
                          required
                          placeholder="e.g. Old Gajuwaka yard, Visakhapatnam"
                          value={formData.deliveryLocation}
                          onChange={(e) => setFormData({ ...formData, deliveryLocation: e.target.value })}
                          className="bg-transparent border-0 outline-none text-xs text-[#101828] py-0.5 focus:ring-0 placeholder:text-[#64748B]/40 w-full"
                          onFocus={handleInputFocus}
                          onBlur={handleInputBlur}
                        />
                      </div>
                    </div>
                  </div>

                  {/* COMPARTMENT 2: CORPORATE PROFILE */}
                  <div className="bg-white border border-gray-200 rounded-xl p-4 space-y-4 shadow-sm">
                    <span className="block text-[9px] text-[#0A5A7D] font-bold tracking-widest uppercase font-mono">
                      CORPORATE PROFILE
                    </span>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Company Name */}
                      <div className="flex flex-col border border-gray-200 bg-[#F2F7FB] px-3 py-2 rounded-lg transition-all duration-300">
                        <label className="text-[8px] font-bold tracking-widest text-[#0A5A7D] uppercase mb-1 font-mono">
                          Company Legal Name *
                        </label>
                        <div className="flex items-center space-x-2">
                          <Building2 className="w-3.5 h-3.5 text-[#0A5A7D] shrink-0" />
                          <input
                            type="text"
                            required
                            placeholder="e.g. Reliance Infrastructures"
                            value={formData.companyName}
                            onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                            className="bg-transparent border-0 outline-none text-xs text-[#101828] py-0.5 focus:ring-0 placeholder:text-[#64748B]/40 w-full"
                            onFocus={handleInputFocus}
                            onBlur={handleInputBlur}
                          />
                        </div>
                      </div>

                      {/* Contact Person */}
                      <div className="flex flex-col border border-gray-200 bg-[#F2F7FB] px-3 py-2 rounded-lg transition-all duration-300">
                        <label className="text-[8px] font-bold tracking-widest text-[#0A5A7D] uppercase mb-1 font-mono">
                          Procurement Officer *
                        </label>
                        <div className="flex items-center space-x-2">
                          <User className="w-3.5 h-3.5 text-[#0A5A7D] shrink-0" />
                          <input
                            type="text"
                            required
                            placeholder="e.g. Vikramaditya Sen"
                            value={formData.contactPerson}
                            onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                            className="bg-transparent border-0 outline-none text-xs text-[#101828] py-0.5 focus:ring-0 placeholder:text-[#64748B]/40 w-full"
                            onFocus={handleInputFocus}
                            onBlur={handleInputBlur}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Email */}
                      <div className="flex flex-col border border-gray-200 bg-[#F2F7FB] px-3 py-2 rounded-lg transition-all duration-300">
                        <label className="text-[8px] font-bold tracking-widest text-[#0A5A7D] uppercase mb-1 font-mono">
                          Corporate Email Address *
                        </label>
                        <div className="flex items-center space-x-2">
                          <Mail className="w-3.5 h-3.5 text-[#0A5A7D] shrink-0" />
                          <input
                            type="email"
                            required
                            placeholder="e.g. procurement@relianceinfra.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="bg-transparent border-0 outline-none text-xs text-[#101828] py-0.5 focus:ring-0 placeholder:text-[#64748B]/40 w-full"
                            onFocus={handleInputFocus}
                            onBlur={handleInputBlur}
                          />
                        </div>
                      </div>

                      {/* Phone */}
                      <div className="flex flex-col border border-gray-200 bg-[#F2F7FB] px-3 py-2 rounded-lg transition-all duration-300">
                        <label className="text-[8px] font-bold tracking-widest text-[#0A5A7D] uppercase mb-1 font-mono">
                          Desk / Contact Phone *
                        </label>
                        <div className="flex items-center space-x-2">
                          <Phone className="w-3.5 h-3.5 text-[#0A5A7D] shrink-0" />
                          <input
                            type="tel"
                            required
                            placeholder="e.g. +91 98765 43210"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="bg-transparent border-0 outline-none text-xs text-[#101828] py-0.5 focus:ring-0 placeholder:text-[#64748B]/40 w-full"
                            onFocus={handleInputFocus}
                            onBlur={handleInputBlur}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* COMPARTMENT 3: CUSTOM SPECS */}
                  <div className="bg-white border border-gray-200 rounded-xl p-4 space-y-4 shadow-sm">
                    <span className="block text-[9px] text-[#0A5A7D] font-bold tracking-widest uppercase font-mono">
                      COMPLIANCE & CUSTOM SPECS
                    </span>

                    <div className="flex flex-col border border-gray-200 bg-[#F2F7FB] px-3 py-2 rounded-lg transition-all duration-300">
                      <label className="text-[8px] font-bold tracking-widest text-[#0A5A7D] uppercase mb-1 font-mono">
                        Special Tolerances, Mill Accreditations, or Custom Cut Length Demands
                      </label>
                      <textarea
                        rows={4}
                        value={formData.specialRequirements}
                        onChange={(e) => setFormData({ ...formData, specialRequirements: e.target.value })}
                        placeholder="e.g. Strict ASTM A240, lab Charpy impact test certificates, or custom width dimensions..."
                        className="bg-transparent border-0 outline-none text-xs text-[#101828] py-1 focus:ring-0 resize-none placeholder:text-[#64748B]/40"
                        onFocus={handleInputFocus}
                        onBlur={handleInputBlur}
                      />
                    </div>
                  </div>

                  {/* Form Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-4 bg-[#0A5A7D] text-white font-heading text-xs font-bold tracking-[0.2em] uppercase rounded-full hover:bg-[#1A8CAF] transition-all duration-300 shadow-md shadow-[#0A5A7D]/20 cursor-pointer text-center"
                    >
                      DISPATCH CONSTRUCTED INQUIRY TO COMMERCIAL DESK
                    </button>
                  </div>

                </form>
              </div>
            </div>

          </div>
        )}

      </section>

      {/* METALLURGICAL PRODUCT DIRECTORY INDEX FOR SEO OPTIMIZATION */}
      <ProductRegistryIndex />

    </div>
  );
}
