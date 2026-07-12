import { useState, useEffect } from 'react';
import { Menu, X, Shield, FileText, Code, Sparkles, Phone, Mail, Check, Copy } from 'lucide-react';
import { generateHospiraProfilePDF } from '../utils/pdfGenerator';

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export default function Header({ currentPath, onNavigate }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'HOME', path: 'home' },
    { label: 'PRODUCTS', path: 'products' },
    { label: 'ABOUT US', path: 'about' },
    { label: 'CONTACT', path: 'contact' },
    { label: 'BRANCHES', path: 'branches' },
    { label: 'WEB CREATOR', path: 'creator' },
  ];

  const handleNavClick = (path: string) => {
    onNavigate(path);
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 border-b border-gray-100 shadow-sm backdrop-blur-md py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-4">
        {/* Left Side: Desktop Navigation / Mobile Logo fallback */}
        <div className="flex items-center justify-start shrink-0">
          {/* Mobile Brand Name */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex md:hidden items-center text-left"
          >
            <span className="flex items-center gap-2">
              <img 
                src="/logos/HSA.png" 
                alt="HSA Logo" 
                className={`w-auto object-contain transition-all duration-300 ${isScrolled ? 'h-10' : 'h-12'}`} 
                onError={(e) => { e.currentTarget.style.display = 'none'; }} 
              />
              <span className="font-heading text-[16px] sm:text-[18px] font-black tracking-[0.15em] text-[#101828]">
                HOSPIRA STEEL & ALLOY
              </span>
            </span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => {
              const isActive =
                currentPath === item.path ||
                (item.path === 'products' && currentPath.startsWith('products/'));
              return (
                <button
                   key={item.path}
                   onClick={() => handleNavClick(item.path)}
                   className={`relative font-heading text-[13px] lg:text-[14px] uppercase tracking-[0.2em] font-semibold transition-colors duration-300 py-1.5 group ${
                     isActive ? 'text-[#0A5A7D]' : 'text-[#64748B] hover:text-[#101828]'
                   }`}
                >
                  {item.label}
                  {/* Micro-interaction active line */}
                  <span
                    className={`absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#0A5A7D] transition-transform duration-300 origin-left ${
                      isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-50'
                    }`}
                  />
                </button>
              );
            })}
          </nav>


        </div>

        {/* Right Side: Brand Logo & Action Button */}
        <div className="flex items-center justify-end space-x-4 lg:space-x-6">
          {/* Desktop Brand Logo (Moved to the right side) */}
          <button
            onClick={() => handleNavClick('home')}
            className="hidden md:flex items-center text-right group mr-2"
          >
            <span className="flex items-center gap-2.5">
              <img 
                src="/logos/HSA.png" 
                alt="HSA Logo" 
                className={`w-auto object-contain transition-all duration-300 group-hover:scale-105 ${isScrolled ? 'h-11' : 'h-13'}`} 
                onError={(e) => { e.currentTarget.style.display = 'none'; }} 
              />
              <span className="font-heading text-[15px] lg:text-[17px] md:text-[16px] font-black tracking-[0.2em] text-[#101828] transition-colors duration-300 group-hover:text-[#0A5A7D] whitespace-nowrap">
                HOSPIRA STEEL & ALLOY
              </span>
            </span>
          </button>

          {/* Download PDF Button on the right side of Hospira heading */}
          <button
            onClick={generateHospiraProfilePDF}
            className="hidden md:flex items-center gap-2 px-4 py-1.5 bg-[#0A5A7D] hover:bg-[#1A8CAF] text-white font-semibold text-[11px] tracking-[0.15em] uppercase rounded transition-all duration-300 shadow-md font-mono shrink-0 hover:scale-[1.03] active:scale-[0.98]"
            title="Download PDF Company Profile"
          >
            <FileText className="w-3.5 h-3.5" />
            PDF Catalog
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-[#64748B] hover:text-[#101828] p-1 transition-colors"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-y-0 right-0 w-80 bg-white border-l border-gray-150 z-50 transform transition-transform duration-300 md:hidden flex flex-col p-8 justify-between shadow-2xl ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div>
          {/* Mobile Drawer Header */}
          <div className="flex items-center justify-between mb-12">
            <span className="flex items-center gap-2">
              <img src="/logos/HSA.png" alt="HSA Logo" className="h-12 w-auto object-contain" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
              <span className="font-heading text-[15px] font-black tracking-[0.15em] text-[#0A5A7D]">
                HOSPIRA STEEL & ALLOY
              </span>
            </span>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-[#64748B] hover:text-[#101828] p-1"
              aria-label="Close Menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Nav List */}
          <nav className="flex flex-col space-y-6">
            {navItems.map((item) => {
              const isActive =
                currentPath === item.path ||
                (item.path === 'products' && currentPath.startsWith('products/'));
              return (
                <button
                  key={item.path}
                  onClick={() => handleNavClick(item.path)}
                  className={`text-left font-heading text-sm font-bold tracking-widest uppercase transition-colors ${
                    isActive ? 'text-[#0A5A7D]' : 'text-[#64748B] hover:text-[#101828]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Download PDF CTA for mobile */}
          <button
            onClick={() => {
              generateHospiraProfilePDF();
              setIsMobileMenuOpen(false);
            }}
            className="mt-8 w-full flex items-center justify-center gap-2 py-3 bg-[#0A5A7D] hover:bg-[#1A8CAF] text-white font-semibold text-xs tracking-widest uppercase rounded transition-all duration-300"
          >
            <FileText className="w-4 h-4" />
            Download PDF Catalog
          </button>
        </div>

        {/* Drawer Footer Call to Action */}
        <div className="space-y-6">
          <div className="h-[1px] bg-gray-100 w-full" />
          <div className="text-center text-[10px] text-[#64748B] tracking-widest font-mono">
            7013361790 · VISAKHAPATNAM
          </div>
        </div>
      </div>

      {/* Drawer Overlay backdrop */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </header>
  );
}
