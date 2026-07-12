import { useState, useEffect, useRef } from 'react';
import { SlidersHorizontal, ArrowRight, ShieldAlert, CheckCircle2, ChevronRight } from 'lucide-react';
import gsap from 'gsap';
import { PRODUCTS } from '../data';
import { Product } from '../types';
import ProductRegistryIndex from '../components/ProductRegistryIndex';

interface ProductsProps {
  onNavigate: (path: string) => void;
}

export default function Products({ onNavigate }: ProductsProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedForm, setSelectedForm] = useState<string>('all');
  const gridRef = useRef<HTMLDivElement>(null);

  // Metal categories
  const categoriesList = [
    { id: 'all', name: 'ALL PRODUCTS' },
    { id: 'pipes', name: 'PIPES' },
    { id: 'sheets', name: 'SHEETS' },
    { id: 'buttweld-fittings', name: 'BUTTWELD FITTINGS' },
    { id: 'threaded-forged-fittings', name: 'THREADED FORGED FITTINGS' },
    { id: 'socket-weld-fittings', name: 'SOCKET WELD FITTINGS' },
    { id: 'flanges', name: 'FLANGES' },
    { id: 'astm-pipes-tubes', name: 'ASTM PIPES & TUBES' },
    { id: 'electroplish-pipes-tubes', name: 'ELECTROPOLISH PIPES' },
    { id: 'wires', name: 'WIRES' },
    { id: 'valves', name: 'VALVES' },
    { id: 'tubes', name: 'TUBES' },
    { id: 'nipple', name: 'NIPPLES' }
  ];

  // Metal forms
  const formsList = [
    { id: 'all', name: 'ALL FORMS' },
    { id: 'Sheet', name: 'SHEETS' },
    { id: 'Plate', name: 'PLATES' },
    { id: 'Rod', name: 'RODS & BARS' },
    { id: 'Pipe', name: 'PIPES & TUBES' },
    { id: 'Coil', name: 'COILS & FOILS' }
  ];

  // Filter products
  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesCategory = selectedCategory === 'all' || 
                            product.category === selectedCategory || 
                            product.id === selectedCategory;
    const matchesForm = selectedForm === 'all' || product.availableForms.some(form => form.toLowerCase().includes(selectedForm.toLowerCase()));
    return matchesCategory && matchesForm;
  });

  // Hero fade-in on mount
  useEffect(() => {
    gsap.fromTo('.products-hero-anim',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', stagger: 0.15 }
    );
  }, []);

  // Trigger smooth GSAP card entry on filter changes
  useEffect(() => {
    if (gridRef.current) {
      const cards = gridRef.current.querySelectorAll('.product-card');
      if (cards.length > 0) {
        gsap.killTweensOf(cards);
        gsap.fromTo(cards,
          { opacity: 0, y: 20, scale: 0.98 },
          { opacity: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.06, ease: 'power2.out' }
        );
      }
    }
  }, [selectedCategory, selectedForm]);

  return (
    <div className="bg-[#FFFFFF] min-h-screen pt-28 pb-20 font-sans">
      
      {/* HERO BANNER SECTION */}
      <section className="relative py-16 border-b border-gray-200/60 bg-[#F2F7FB] mb-12">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          
          {/* Breadcrumbs */}
          <div className="products-hero-anim flex items-center space-x-2 text-[10px] tracking-[0.2em] text-[#0A5A7D] uppercase mb-4">
            <button onClick={() => onNavigate('home')} className="hover:text-[#101828] transition-colors">HOME</button>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#64748B]">PRODUCTS CATALOG</span>
          </div>

          <h1 className="products-hero-anim font-heading text-4xl md:text-7xl font-black text-[#101828] uppercase tracking-tighter mb-4">
            OUR PRODUCTS CATALOG
          </h1>
          
          <p className="products-hero-anim text-sm sm:text-base text-[#64748B] max-w-2xl font-light leading-relaxed">
            Filter our premium raw stock holdings by metallurgical chemical family and industrial standard shape format. Access detailed dimensions and certification lists.
          </p>
        </div>
        
        {/* Subtle decorative gold light */}
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-80 h-40 rounded-full bg-[#0A5A7D]/5 blur-[80px] pointer-events-none" />
      </section>

      {/* FILTER BAR & PRODUCTS DISPLAY */}
      <section className="max-w-7xl mx-auto px-6">
        
        {/* FILTERS PANEL */}
        <div className="bg-[#EEF4FA] border border-gray-200 p-6 mb-10 rounded-xl shadow-sm">
          <div className="flex items-center space-x-2 mb-6">
            <SlidersHorizontal className="w-4 h-4 text-[#0A5A7D]" />
            <span className="font-heading text-xs font-bold tracking-[0.25em] text-[#101828] uppercase">
              INTERACTIVE REFINERY FILTERS
            </span>
          </div>

          <div className="space-y-6">
            {/* Category Filter */}
            <div>
              <span className="block text-[10px] tracking-widest text-[#64748B] font-bold uppercase mb-3 font-mono">
                1. SELECT PRODUCT CLASSIFICATION
              </span>
              <div className="flex flex-wrap gap-2">
                {categoriesList.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-4 py-2 rounded-full border text-[10px] font-bold tracking-widest uppercase transition-all duration-300 cursor-pointer ${
                      selectedCategory === cat.id
                        ? 'bg-[#0A5A7D] text-white border-[#0A5A7D] shadow-sm'
                        : 'bg-white border-gray-200 text-[#64748B] hover:text-[#101828] hover:border-[#0A5A7D]'
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="h-[1px] bg-gray-200/60 w-full" />

            {/* Shape Form Filter */}
            <div>
              <span className="block text-[10px] tracking-widest text-[#64748B] font-bold uppercase mb-3 font-mono">
                2. SELECT SEMI-FINISHED SHAPE FORMAT
              </span>
              <div className="flex flex-wrap gap-2">
                {formsList.map((form) => (
                  <button
                    key={form.id}
                    onClick={() => setSelectedForm(form.id)}
                    className={`px-4 py-2 rounded-full border text-[10px] font-bold tracking-widest uppercase transition-all duration-300 cursor-pointer ${
                      selectedForm === form.id
                        ? 'bg-[#0A5A7D] text-white border-[#0A5A7D] shadow-sm'
                        : 'bg-white border-gray-200 text-[#64748B] hover:text-[#101828] hover:border-[#0A5A7D]'
                    }`}
                  >
                    {form.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* METALS GRID DISPLAY */}
        {filteredProducts.length > 0 ? (
          <div
            ref={gridRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                onClick={() => onNavigate(`products/${product.id}`)}
                className="product-card group bg-white border border-gray-200 rounded-xl overflow-hidden flex flex-col justify-between hover:border-[#0A5A7D]/40 transition-all duration-300 hover:shadow-lg shadow-sm cursor-pointer"
              >
                {/* Visual Cover image in its natural colors */}
                <div className="h-60 w-full overflow-hidden relative border-b border-gray-200/60">
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-gray-900/60 to-transparent z-10" />
                  <img
                    src={product.imageUrl}
                    alt={product.seoAlt || product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500 pointer-events-none"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    {/* Card category tags */}
                    <div className="flex items-center justify-between text-xs tracking-widest font-bold uppercase text-[#0A5A7D] mb-3 font-mono">
                      <span>{product.categoryLabel}</span>
                      <span className="font-mono bg-[#0A5A7D]/10 text-[#0A5A7D] px-3 py-1 rounded-full font-bold text-xs">{product.grade}</span>
                    </div>

                    {/* Metal Name */}
                    <h3 className="font-heading text-2xl font-bold tracking-wide text-[#101828] mb-3 capitalize">
                      {product.name}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-[#64748B] font-light leading-relaxed mb-5">
                      {product.description}
                    </p>

                    {/* Grades and specifications displayed cleanly */}
                    <div className="mt-4 p-4 bg-[#0A5A7D] group-hover:bg-[#F2F7FB] border border-[#0A5A7D]/10 rounded-md shadow-sm overflow-hidden transition-all duration-300">
                      <span className="text-xs font-mono font-black tracking-wider text-[#E0F2FE] group-hover:text-[#0A5A7D] uppercase block mb-1.5 transition-colors duration-300">
                        STANDARDS & GRADES:
                      </span>
                      <p className="text-xs font-mono text-white group-hover:text-[#101828] leading-relaxed break-words font-bold whitespace-normal transition-colors duration-300">
                        {product.grade}
                      </p>
                    </div>

                    <div className="h-[1px] bg-gray-200/60 my-4" />

                    {/* Available Forms */}
                    <div className="space-y-2 mb-6">
                      <span className="block text-[10px] tracking-[0.2em] text-[#64748B] font-bold uppercase font-mono">
                        IN-STOCK TYPES OF {product.name.toUpperCase()}:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {product.availableForms.map((form, i) => (
                          <span
                            key={i}
                            className="bg-[#F2F7FB] border border-gray-200 text-[10px] font-mono font-bold px-3 py-1 rounded-full text-[#101828]"
                          >
                            {form}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card CTA Actions */}
                  <div className="pt-4 border-t border-gray-200 flex items-center justify-between gap-4 mt-auto">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onNavigate(`products/${product.id}`);
                      }}
                      className="flex-1 py-2.5 border border-[#0A5A7D]/40 text-[#0A5A7D] hover:text-white hover:bg-[#0A5A7D] text-xs font-extrabold tracking-widest uppercase transition-all duration-300 rounded-full text-center cursor-pointer shadow-sm"
                    >
                      TECHNICAL SPECS
                    </button>
                    
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onNavigate('quote');
                      }}
                      className="py-2.5 px-5 bg-[#0A5A7D] hover:bg-[#1A8CAF] text-white text-xs font-extrabold tracking-widest uppercase rounded-full transition-all duration-300 shadow-sm cursor-pointer"
                    >
                      QUOTE
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Empty state */
          <div className="border border-[#0A5A7D]/20 bg-[#F2F7FB] p-12 text-center rounded-xl max-w-xl mx-auto space-y-4 shadow-sm">
            <ShieldAlert className="w-12 h-12 text-[#0A5A7D] mx-auto" />
            <h3 className="font-heading text-xl font-bold text-[#101828] tracking-wide uppercase">
              NO COMPATIBLE STOCK DETECTED
            </h3>
            <p className="text-xs text-[#64748B] leading-relaxed">
              We frequently process custom metallurgy batches. If you require specialized alloying dimensions or certified formats not displayed in our stock system, please consult our direct desk.
            </p>
            <button
              onClick={() => { setSelectedCategory('all'); setSelectedForm('all'); }}
              className="px-5 py-2.5 border border-[#0A5A7D] text-[#0A5A7D] text-[10px] tracking-widest font-bold uppercase rounded-full hover:bg-[#0A5A7D] hover:text-white transition-colors"
            >
              RESET ADVANCED FILTERS
            </button>
          </div>
        )}
      </section>

      {/* METALLURGICAL PRODUCT DIRECTORY INDEX FOR SEO OPTIMIZATION */}
      <ProductRegistryIndex />

    </div>
  );
}
