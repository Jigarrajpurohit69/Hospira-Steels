import { useState } from 'react';
import { Shield, Mail, Phone, MapPin, ArrowRight, Code, Sparkles, Copy, Check, MessageSquare, ExternalLink } from 'lucide-react';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const [copiedPromo, setCopiedPromo] = useState<string | null>(null);

  const handleCopyPromo = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedPromo(text);
    setTimeout(() => setCopiedPromo(null), 2000);
  };

  return (
    <footer id="main-footer" className="bg-[#EEF4FA] border-t border-[#101828]/10 pt-16 pb-12 relative z-10 grain-overlay">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
        {/* Brand Bio */}
        <div className="md:col-span-1 space-y-4">
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center space-x-2 text-left group"
          >
            <div className="w-8 h-8 rounded bg-[#0A5A7D] flex items-center justify-center">
              <Shield className="w-4.5 h-4.5 text-white stroke-[2.5]" />
            </div>
            <div>
              <span className="block font-heading text-lg font-bold tracking-[0.15em] text-[#101828] leading-none">
                HOSPIRA
              </span>
              <span className="block text-[8px] tracking-[0.25em] text-[#0A5A7D] uppercase mt-0.5">
                STEEL & ALLOY
              </span>
            </div>
          </button>
          
          <p className="text-xs text-[#64748B] leading-relaxed">
            Where steel meets mastery. Preserving legacy engineering, rigid structural certifications, and extreme stainless quality.
          </p>

          <div className="pt-2 text-[10px] text-[#0A5A7D] font-semibold tracking-widest uppercase">
            QUALITY & INTEGRITY · INDIA
          </div>
        </div>

        {/* Categories navigation */}
        <div>
          <h4 className="font-heading text-xs font-bold tracking-[0.2em] text-[#101828] uppercase mb-5 border-b border-[#101828]/10 pb-2">
            STAINLESS STEEL
          </h4>
          <ul className="space-y-2.5 text-xs">
            <li>
              <button onClick={() => onNavigate('products')} className="text-[#64748B] hover:text-[#0A5A7D] transition-colors flex items-center group">
                <ArrowRight className="w-3 h-3 mr-1.5 opacity-0 group-hover:opacity-100 transition-all text-[#0A5A7D]" />
                Austenitic Stainless Steel
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('products')} className="text-[#64748B] hover:text-[#0A5A7D] transition-colors flex items-center group">
                <ArrowRight className="w-3 h-3 mr-1.5 opacity-0 group-hover:opacity-100 transition-all text-[#0A5A7D]" />
                Duplex & Super Duplex Steel
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('products')} className="text-[#64748B] hover:text-[#0A5A7D] transition-colors flex items-center group">
                <ArrowRight className="w-3 h-3 mr-1.5 opacity-0 group-hover:opacity-100 transition-all text-[#0A5A7D]" />
                Ferritic & Martensitic SS
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('products')} className="text-[#64748B] hover:text-[#0A5A7D] transition-colors flex items-center group">
                <ArrowRight className="w-3 h-3 mr-1.5 opacity-0 group-hover:opacity-100 transition-all text-[#0A5A7D]" />
                Precipitation Hardening & Specialty
              </button>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-heading text-xs font-bold tracking-[0.2em] text-[#101828] uppercase mb-5 border-b border-[#101828]/10 pb-2">
            CORPORATE
          </h4>
          <ul className="space-y-2.5 text-xs">
            <li>
              <button onClick={() => onNavigate('about')} className="text-[#64748B] hover:text-[#0A5A7D] transition-colors">
                Our Heritage Story
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('contact')} className="text-[#64748B] hover:text-[#0A5A7D] transition-colors">
                Contact & Map
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('branches')} className="text-[#64748B] hover:text-[#0A5A7D] transition-colors">
                Branches & Plants
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('quote')} className="text-[#64748B] hover:text-[#0A5A7D] transition-colors">
                Inquiry & Bulk Orders
              </button>
            </li>
            <li>
              <a href="#branded-loader" className="text-[#64748B] hover:text-[#0A5A7D] transition-colors">
                Certifications Directory
              </a>
            </li>
          </ul>
        </div>

        {/* Headquarters */}
        <div>
          <h4 className="font-heading text-xs font-bold tracking-[0.2em] text-[#101828] uppercase mb-5 border-b border-[#101828]/10 pb-2">
            OFFICES & CONTACT
          </h4>
          <ul className="space-y-3 px-0 text-xs text-[#64748B]">
            <li className="flex items-start space-x-2">
              <MapPin className="w-4 h-4 text-[#0A5A7D] shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#101828] block text-[10px] tracking-wider uppercase font-mono">Head Office:</strong>
                <span>8-6-45 OPP Westside showroom panthulugarimeda nh.5 old gajuwaka Visakhapatnam 530026 A.P</span>
              </div>
            </li>
            <li className="flex items-start space-x-2">
              <MapPin className="w-4 h-4 text-[#0A5A7D] shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#101828] block text-[10px] tracking-wider uppercase font-mono">Branch:</strong>
                <span>7-13-31 opp varun bajaj old gajuwaka Visakhapatnam</span>
              </div>
            </li>
            <li className="flex items-start space-x-2">
              <Phone className="w-4 h-4 text-[#0A5A7D] shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#101828] block text-[10px] tracking-wider uppercase font-mono">Phone Lines:</strong>
                <span className="block">7013361790</span>
                <span className="block">9885121388</span>
                <span className="block">9985477751</span>
                <span className="block">9618821088</span>
              </div>
            </li>
            <li className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-[#0A5A7D] shrink-0" />
              <span>hospira.steel@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* WEB DESIGNER PROMOTION SECTION (Jigar Rajpurohit) */}
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="relative rounded-2xl overflow-hidden border border-gray-200 bg-white p-6 md:p-8 lg:p-12 shadow-lg group transition-all duration-300 hover:border-[#0A5A7D]/45">
          {/* Subtle glowing effect */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#0A5A7D]/5 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-[#0A5A7D]/5 rounded-full blur-[80px] pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Column 1: Image / Mockup Graphic */}
            <div className="lg:col-span-5 flex justify-center items-center relative">
              <div className="relative rounded-xl overflow-hidden border border-gray-200/80 shadow-md group-hover:border-[#0A5A7D]/30 transition-all duration-500 bg-[#EEF4FA] max-w-[280px] lg:max-w-none lg:w-full lg:h-[350px] aspect-video sm:aspect-square md:aspect-video lg:aspect-auto flex items-center justify-center p-2">
                <img 
                  src="/Web.png" 
                  alt="Premium Web Design Mockup" 
                  className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    // Fallback to a stunning custom SVG mockup if Web.png fails to load
                    e.currentTarget.style.display = 'none';
                    const parent = e.currentTarget.parentElement;
                    if (parent) {
                      // Prevent duplicate fallbacks
                      if (!parent.querySelector('.svg-fallback')) {
                        const fallback = document.createElement('div');
                        fallback.className = "svg-fallback w-full h-full p-4 flex flex-col justify-between bg-white font-mono text-[9px] text-[#0A5A7D]/80 leading-relaxed";
                        fallback.innerHTML = `
                          <div class="flex items-center justify-between border-b border-gray-200 pb-2">
                            <span class="text-[#101828] font-bold">&lt;UI/UX DESIGN&gt;</span>
                            <span class="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                          </div>
                          <div class="space-y-1.5 py-3 text-left">
                            <div class="text-[#64748B] font-medium">// 5+ Years Experience</div>
                            <div class="text-[#64748B]/80">&gt; HTML5, CSS3, React & Vite</div>
                            <div class="text-[#64748B]/80">&gt; Custom Admin Panels</div>
                            <div class="text-[#64748B]/80">&gt; E-Commerce & SEO Ready</div>
                          </div>
                          <div class="border-t border-gray-200 pt-2 text-[8px] text-right uppercase">
                            by Jigar Rajpurohit
                          </div>
                        `;
                        parent.appendChild(fallback);
                      }
                    }
                  }}
                />
              </div>
              
              {/* Badge */}
              <div className="absolute -top-3 -right-3 bg-[#0A5A7D] text-white text-[10px] font-black tracking-widest px-3 py-1 rounded-full uppercase shadow-lg animate-bounce">
                PREMIUM
              </div>
            </div>

            {/* Column 2: Content Promo Details */}
            <div className="lg:col-span-4 space-y-4 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0A5A7D]/10 rounded-full border border-[#0A5A7D]/25">
                <Code className="w-4 h-4 text-[#0A5A7D] animate-pulse" />
                <span className="text-[10px] md:text-xs font-bold tracking-widest text-[#0A5A7D] uppercase font-mono">Web Architecture Desk</span>
              </div>

              <h3 className="font-heading text-2xl md:text-3xl font-black text-[#101828] uppercase tracking-tight leading-none">
                JIGAR RAJPUROHIT
              </h3>

              <p className="text-xs md:text-sm text-[#0A5A7D] font-bold uppercase tracking-widest font-mono">
                5+ YEARS OF EXPERIENCE IN WEBSITE DESIGNING
              </p>

              <p className="text-sm md:text-base text-[#101828] leading-relaxed font-light">
                Agar aap bhi chahte hain ki aapka business online grow kare ek aisi hi <span className="text-[#0A5A7D] font-bold underline decoration-[#0A5A7D]/40">super-fast, responsive aur premium website</span> ke saath, toh aaj hi contact karein!
              </p>

              <p className="text-xs text-[#64748B] leading-relaxed font-light italic">
                Specialized in crafting tailored solutions for clients across diverse industries—guaranteeing elite security, perfect responsiveness, and beautiful aesthetics.
              </p>
            </div>

            {/* Column 3: Contact & Direct Call to Action */}
            <div className="lg:col-span-3 space-y-3.5 bg-[#F2F7FB] p-5 rounded-xl border border-gray-200/80 shadow-inner">
              <span className="text-[10px] text-[#64748B] font-bold tracking-widest uppercase block text-center border-b border-gray-200/80 pb-2 font-mono">
                DIRECT CHANNELS
              </span>

              {/* Call */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-mono text-[#64748B]">
                  <span>PHONE LINE:</span>
                  <span className="text-emerald-500 font-bold">ACTIVE</span>
                </div>
                <div className="flex gap-2">
                  <a
                    href="tel:+918104257343"
                    className="flex-1 flex items-center justify-center gap-1.5 bg-white hover:bg-[#0A5A7D] hover:text-white border border-gray-200 hover:border-[#0A5A7D] px-3 py-2 rounded text-xs font-bold text-[#101828] transition-all duration-300"
                  >
                    <Phone className="w-3.5 h-3.5 shrink-0" />
                    +91 8104257343
                  </a>
                  <button
                    onClick={() => handleCopyPromo('8104257343')}
                    className="p-2 bg-white hover:bg-gray-50 text-[#0A5A7D] border border-gray-200 rounded transition-all shrink-0 cursor-pointer"
                    title="Copy Phone Number"
                  >
                    {copiedPromo === '8104257343' ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-mono text-[#64748B]">
                  <span>DIRECT EMAIL:</span>
                </div>
                <div className="flex gap-2">
                  <a
                    href="mailto:jigarrajpurohit82@gmail.com"
                    className="flex-1 flex items-center justify-center gap-1.5 bg-white hover:bg-[#0A5A7D] hover:text-white border border-gray-200 hover:border-[#0A5A7D] px-2 py-2 rounded text-[10px] md:text-xs font-bold text-[#101828] transition-all duration-300 truncate"
                  >
                    <Mail className="w-3.5 h-3.5 shrink-0" />
                    jigarrajpurohit82@gmail.com
                  </a>
                  <button
                    onClick={() => handleCopyPromo('jigarrajpurohit82@gmail.com')}
                    className="p-2 bg-white hover:bg-gray-50 text-[#0A5A7D] border border-gray-200 rounded transition-all shrink-0 cursor-pointer"
                    title="Copy Email Address"
                  >
                    {copiedPromo === 'jigarrajpurohit82@gmail.com' ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              {/* WhatsApp instant chat button */}
              <a
                href="https://wa.me/918104257343?text=Hello%20Jigar%2C%20I%20saw%20your%20awesome%20work%20on%20Hospira%20Steel%20and%20Alloy%20website%20and%20I%20want%20to%20discuss%20a%20website%20project%20with%20you%21"
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 bg-[#0A5A7D] hover:bg-[#1A8CAF] text-white font-heading text-xs font-bold tracking-widest uppercase rounded flex items-center justify-center gap-1.5 transition-all duration-300 shadow-md text-center cursor-pointer"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                GET YOUR SITE NOW
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-[#101828]/10 flex flex-col md:flex-row items-center justify-between text-[11px] text-[#64748B]">
        <div>
          © {currentYear} Hospira Steel & Alloy. All rights reserved.
        </div>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#privacy" className="hover:text-[#0A5A7D] transition-colors">Privacy Charter</a>
          <span>·</span>
          <a href="#terms" className="hover:text-[#0A5A7D] transition-colors">Supply Terms & Conditions</a>
          <span>·</span>
          <a href="#compliance" className="hover:text-[#0A5A7D] transition-colors">Anti-Corruption & ISO Standards</a>
        </div>
      </div>
    </footer>
  );
}
