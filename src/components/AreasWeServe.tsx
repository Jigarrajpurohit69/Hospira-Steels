import React, { useState } from 'react';
import { MapPin, ShieldCheck, Ship, Anchor, Landmark, Truck, CheckCircle, Search, HelpCircle, Activity, Star, MoreVertical, ExternalLink, Sparkles, Award, Lightbulb, Check } from 'lucide-react';

interface SerpListing {
  siteName: string;
  domain: string;
  breadcrumb: string;
  titlePrefix: string;
  boldLocation: string;
  descriptionBold: string;
  descriptionRest: string;
  rating: number;
  reviews: number;
  imageUrl: string;
}

export default function AreasWeServe() {
  const [activeTab, setActiveTab] = useState<'vizag' | 'ap_wide' | 'cities' | 'serp'>('serp');
  const [userCityQuery, setUserCityQuery] = useState('');
  const [checkResult, setCheckResult] = useState<string | null>(null);
  
  // SERP simulator state
  const [theme, setTheme] = useState<'dark' | 'light'>('light');
  const [selectedCity, setSelectedCity] = useState('Visakhapatnam');
  const [selectedProduct, setSelectedProduct] = useState('Stainless Steel Pipes');

  const apCitiesList = [
    { name: "Vijayawada", tag: "Stainless Steel in Vijayawada", transit: "Same-Day Express" },
    { name: "Guntur", tag: "Steel Suppliers in Guntur", transit: "24-Hour Delivery" },
    { name: "Rajahmundry", tag: "Stainless Steel Dealers in Rajahmundry", transit: "Next-Day Freight" },
    { name: "Tirupati", tag: "Steel Suppliers in Tirupati", transit: "Same-Day Freight" },
    { name: "Kakinada", tag: "Steel Industries in Kakinada", transit: "Same-Day Express" },
    { name: "Kurnool", tag: "Stainless Steel Wholesalers in Kurnool", transit: "36-Hour Freight" },
    { name: "Nellore", tag: "Steel Traders in Nellore", transit: "24-Hour Express" },
    { name: "Visakhapatnam", tag: "Stainless Steel Industries Vizag", transit: "Immediate Local Dispatch" }
  ];

  const handleCityCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userCityQuery.trim()) return;

    const queryClean = userCityQuery.toLowerCase().trim();
    const foundCity = apCitiesList.find(c => 
      c.name.toLowerCase().includes(queryClean) || 
      queryClean.includes(c.name.toLowerCase())
    );

    if (foundCity) {
      setCheckResult(`✅ HOSPIRA SERVICE ACTIVE: Direct logistical line detected for ${foundCity.name}. We support immediate dispatch for Stainless Steel Pipes, Sheets, and Fittings. Transit time: ${foundCity.transit}.`);
    } else if (['vizag', 'andhra', 'ap', 'andhra pradesh'].some(keyword => queryClean.includes(keyword))) {
      setCheckResult(`✅ HOSPIRA SERVICE ACTIVE: Visakhapatnam & AP Zone Hub fully online. Complete access to local stainless steel fabricators and steel manufacturers in Visakhapatnam.`);
    } else {
      setCheckResult(`ℹ️ SERVICE INQUIRY LOGGED: We regularly deliver heavy industrial steel and alloys to "${userCityQuery}" via our Visakhapatnam Port Road network. Contact our dispatch desk for a custom shipping quote.`);
    }
  };

  // Sample listing data generator based on selections
  const getSerpData = (): SerpListing => {
    const city = selectedCity;
    const prod = selectedProduct;
    
    return {
      siteName: "Hospira Steel & Alloy",
      domain: "https://www.hospirasteel.com",
      breadcrumb: `https://www.hospirasteel.com › products › ${prod.toLowerCase().replace(/\s+/g, '-')} › ${city.toLowerCase()}`,
      titlePrefix: `${prod} Manufacturers & Suppliers in ${city} `,
      boldLocation: `- Hospira Steel & Alloy`,
      descriptionBold: `Looking for premium ${prod} in ${city}? `,
      descriptionRest: `Hospira Steel & Alloy is the leading ISO 9001:2015 certified manufacturer and exporter of durable materials, heavy industrial flanges, and fittings. High-purity alloys with complete mill test certificates. Direct stockyard dispatch. Get instant wholesale pricing today.`,
      rating: 4.9,
      reviews: 1485,
      imageUrl: "/Pipes/Black iron pipe.jpg"
    };
  };

  const currentSerp = getSerpData();

  const serpCitiesList = ["Visakhapatnam", "Vijayawada", "Guntur", "Rajahmundry", "Thane", "Nellore"];
  const serpProductsList = [
    "Stainless Steel Pipes",
    "Industrial Forged Flanges",
    "Heavy Buttweld Fittings",
    "Bright Annealed Coils",
    "Ss sheet",
    "Ss fastener",
    "Ss flange",
    "Ss fittings",
    "Ss valve"
  ];

  return (
    <section className="py-20 bg-[#F9F6EE] border-t border-gray-200/80 relative overflow-hidden" id="regional-supply-hubs">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-[#0A5A7D]/5 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#0A5A7D]/5 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 font-sans">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#0A5A7D] rounded-full animate-ping" />
              <span className="text-[10px] text-[#0A5A7D] tracking-[0.3em] font-bold uppercase font-mono block">
                Andhra Pradesh Geo-Logistics Hub & Search Dominance
              </span>
            </div>
            <h2 className="font-heading text-3xl md:text-5xl font-black text-[#101828] uppercase tracking-tight">
              AREAS WE SERVE <span className="text-[#0A5A7D]">&</span> SEARCH VISIBILITY
            </h2>
            <p className="text-sm text-[#64748B] max-w-2xl font-light leading-relaxed">
              Logistics and stainless steel supply operations synchronized with major industrial zones. Hospira Steel and Alloy delivers certified steel components, heavy-duty piping, and custom alloy sheeting directly to the port city of Visakhapatnam and surrounding economic regions.
            </p>
          </div>

          <div className="flex items-center gap-3 bg-[#F2EDE0] border border-gray-200 px-4 py-2.5 rounded-lg font-mono text-[10px] text-[#64748B]">
            <Activity className="w-4 h-4 text-[#0A5A7D] shrink-0 animate-pulse" />
            <span>PRIMARY INGRESS: VISAKHAPATNAM PORT ROAD</span>
          </div>
        </div>

        {/* REGIONAL TABS CONTAINER */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* TAB TRIGGERS (LEFT SIDEBAR) */}
          <div className="flex flex-col gap-3">
            <button
              onClick={() => { setActiveTab('serp'); setCheckResult(null); }}
              className={`p-5 rounded-xl text-left border transition-all duration-300 relative overflow-hidden group ${
                activeTab === 'serp'
                  ? 'bg-[#EDE7D8] border-[#0A5A7D]/40 shadow-md'
                  : 'bg-[#F9F6EE] border-gray-200 hover:border-gray-300 hover:bg-[#F2EDE0]'
              }`}
            >
              <div className="flex items-center gap-4">
                <div className={`p-2.5 rounded-lg transition-colors duration-300 ${activeTab === 'serp' ? 'bg-[#0A5A7D]/10 text-[#0A5A7D]' : 'bg-gray-100 text-gray-400'}`}>
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm md:text-base font-bold font-mono tracking-wider text-[#101828] uppercase">Google SERP Preview</h4>
                  <p className="text-xs text-[#64748B] mt-0.5">High-CTR Search Snippet</p>
                </div>
              </div>
              {activeTab === 'serp' && <div className="absolute right-0 top-0 bottom-0 w-1.5 bg-[#0A5A7D]" />}
            </button>

            <button
              onClick={() => { setActiveTab('vizag'); setCheckResult(null); }}
              className={`p-5 rounded-xl text-left border transition-all duration-300 relative overflow-hidden group ${
                activeTab === 'vizag'
                  ? 'bg-[#EDE7D8] border-[#0A5A7D]/40 shadow-md'
                  : 'bg-[#F9F6EE] border-gray-200 hover:border-gray-300 hover:bg-[#F2EDE0]'
              }`}
            >
              <div className="flex items-center gap-4">
                <div className={`p-2.5 rounded-lg transition-colors duration-300 ${activeTab === 'vizag' ? 'bg-[#0A5A7D]/10 text-[#0A5A7D]' : 'bg-gray-100 text-gray-400'}`}>
                  <Ship className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm md:text-base font-bold font-mono tracking-wider text-[#101828] uppercase">Visakhapatnam Hub</h4>
                  <p className="text-xs text-[#64748B] mt-0.5">Stainless Steel Industries Vizag</p>
                </div>
              </div>
              {activeTab === 'vizag' && <div className="absolute right-0 top-0 bottom-0 w-1.5 bg-[#0A5A7D]" />}
            </button>

            <button
              onClick={() => { setActiveTab('ap_wide'); setCheckResult(null); }}
              className={`p-5 rounded-xl text-left border transition-all duration-300 relative overflow-hidden group ${
                activeTab === 'ap_wide'
                  ? 'bg-[#EDE7D8] border-[#0A5A7D]/40 shadow-md'
                  : 'bg-[#F9F6EE] border-gray-200 hover:border-gray-300 hover:bg-[#F2EDE0]'
              }`}
            >
              <div className="flex items-center gap-4">
                <div className={`p-2.5 rounded-lg transition-colors duration-300 ${activeTab === 'ap_wide' ? 'bg-[#0A5A7D]/10 text-[#0A5A7D]' : 'bg-gray-100 text-gray-400'}`}>
                  <Landmark className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm md:text-base font-bold font-mono tracking-wider text-[#101828] uppercase">Andhra Pradesh Network</h4>
                  <p className="text-xs text-[#64748B] mt-0.5">Steel Industries in Andhra Pradesh</p>
                </div>
              </div>
              {activeTab === 'ap_wide' && <div className="absolute right-0 top-0 bottom-0 w-1.5 bg-[#0A5A7D]" />}
            </button>

            <button
              onClick={() => { setActiveTab('cities'); setCheckResult(null); }}
              className={`p-5 rounded-xl text-left border transition-all duration-300 relative overflow-hidden group ${
                activeTab === 'cities'
                  ? 'bg-[#EDE7D8] border-[#0A5A7D]/40 shadow-md'
                  : 'bg-[#F9F6EE] border-gray-200 hover:border-gray-300 hover:bg-[#F2EDE0]'
              }`}
            >
              <div className="flex items-center gap-4">
                <div className={`p-2.5 rounded-lg transition-colors duration-300 ${activeTab === 'cities' ? 'bg-[#0A5A7D]/10 text-[#0A5A7D]' : 'bg-gray-100 text-gray-400'}`}>
                  <Truck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm md:text-base font-bold font-mono tracking-wider text-[#101828] uppercase">Sourcing AP Cities</h4>
                  <p className="text-xs text-[#64748B] mt-0.5">Vijayawada, Guntur & beyond</p>
                </div>
              </div>
              {activeTab === 'cities' && <div className="absolute right-0 top-0 bottom-0 w-1.5 bg-[#0A5A7D]" />}
            </button>

            {/* QUICK SEARCH TOOL FOR SEO */}
            <div className="mt-4 bg-[#F2EDE0] border border-gray-200/80 p-5 rounded-xl space-y-3.5">
              <span className="text-[11px] font-mono font-bold text-[#64748B] uppercase tracking-widest block">
                REGIONAL TRUCK ROUTES
              </span>
              <form onSubmit={handleCityCheck} className="space-y-3">
                <div className="relative flex items-center bg-[#F9F6EE] border border-gray-200 rounded-lg px-3 py-2.5 focus-within:border-[#0A5A7D]/30">
                  <Search className="w-4 h-4 text-gray-400 shrink-0 mr-2.5" />
                  <input
                    type="text"
                    value={userCityQuery}
                    onChange={(e) => setUserCityQuery(e.target.value)}
                    placeholder="Type AP city name..."
                    className="bg-transparent w-full outline-none text-xs text-[#101828] placeholder-gray-400 font-mono"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#0A5A7D] text-white font-mono text-[11px] font-bold uppercase tracking-widest py-3 rounded-lg hover:bg-[#1A8CAF] transition-all"
                >
                  VERIFY DIRECT SHIPPING
                </button>
              </form>
            </div>
          </div>

          {/* TAB CONTENTS (RIGHT DISPLAY - 3 COLS WIDTH) */}
          <div className="lg:col-span-3 bg-[#F2EDE0] border border-gray-200 p-6 md:p-8 rounded-2xl relative">
            <div className="absolute top-0 right-0 w-16 h-[1px] bg-[#0A5A7D]/25" />
            <div className="absolute top-0 right-0 w-[1px] h-16 bg-[#0A5A7D]/25" />

            {/* RESULTS FROM THE QUICK CHECK */}
            {checkResult && (
              <div className="mb-6 p-4 bg-[#F9F6EE] border border-[#0A5A7D]/20 rounded-xl font-mono text-xs text-[#101828] shadow-sm animate-fadeIn">
                {checkResult}
              </div>
            )}

            {/* TAB: GOOGLE SERP SIMULATOR */}
            {activeTab === 'serp' && (
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pb-4 border-b border-gray-200/80">
                  <div>
                    <span className="text-[12px] text-[#0A5A7D] font-mono tracking-widest uppercase block">HIGH-CTR SEARCH SIMULATOR</span>
                    <h3 className="font-heading text-2xl md:text-3xl font-black text-[#101828] uppercase tracking-tight mt-1">
                      Google Listing Snippet
                    </h3>
                  </div>
                  
                  {/* Theme Switcher inside the card header */}
                  <div className="flex items-center gap-1.5 bg-[#F9F6EE] p-1 rounded-lg border border-gray-200 shrink-0">
                    <button 
                      onClick={() => setTheme('dark')} 
                      className={`px-3 py-1.5 text-xs font-mono rounded font-bold uppercase transition-all ${theme === 'dark' ? 'bg-[#0A5A7D] text-white' : 'text-gray-500'}`}
                    >
                      Dark
                    </button>
                    <button 
                      onClick={() => setTheme('light')} 
                      className={`px-3 py-1.5 text-xs font-mono rounded font-bold uppercase transition-all ${theme === 'light' ? 'bg-[#0A5A7D] text-white' : 'text-gray-400'}`}
                    >
                      Light
                    </button>
                  </div>
                </div>

                <p className="text-sm md:text-base text-[#64748B] leading-relaxed font-light">
                  See how our premium steel directory listing dominates Google organic results. Adjust the parameters below to verify responsive keyword rendering in our simulated Google Search card:
                </p>

                {/* Live Controls inside the tab content */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 bg-[#F9F6EE] border border-gray-200/85 p-5 rounded-xl shadow-sm">
                  {/* Product selectors */}
                  <div className="space-y-2">
                    <span className="text-xs font-mono font-bold text-[#101828] uppercase tracking-widest block">1. Select Stainless Steel Category</span>
                    <div className="flex flex-wrap gap-1.5">
                      {serpProductsList.map((p) => (
                        <button
                          key={p}
                          onClick={() => setSelectedProduct(p)}
                          className={`px-3 py-1.5 text-xs font-sans rounded-md transition-all border ${selectedProduct === p ? 'bg-[#0A5A7D]/10 border-[#0A5A7D]/40 text-[#0A5A7D] font-semibold' : 'bg-white border-gray-200 text-gray-500 hover:bg-gray-50'}`}
                        >
                          {p}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* City selectors */}
                  <div className="space-y-2">
                    <span className="text-xs font-mono font-bold text-[#101828] uppercase tracking-widest block">2. Select Target Location</span>
                    <div className="flex flex-wrap gap-1.5">
                      {serpCitiesList.map((c) => (
                        <button
                          key={c}
                          onClick={() => setSelectedCity(c)}
                          className={`px-3 py-1.5 text-xs font-sans rounded-md transition-all border ${selectedCity === c ? 'bg-[#0A5A7D]/10 border-[#0A5A7D]/40 text-[#0A5A7D] font-semibold' : 'bg-white border-gray-200 text-gray-500 hover:bg-gray-50'}`}
                        >
                          {c}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* THE ACTUAL REPLICATED GOOGLE CARD */}
                <div className="pt-2">
                  <div className={`p-6 rounded-xl border transition-all duration-500 ${
                    theme === 'dark' 
                      ? 'bg-[#202124] border-white/5 text-gray-300' 
                      : 'bg-white border-gray-200 text-gray-800 shadow-md'
                  }`}>
                    
                    <div className="flex items-start justify-between gap-4">
                      
                      {/* Left Metadata & Title Side */}
                      <div className="space-y-2 w-full">
                        
                        {/* 1. Favicon, Site Name & Breadcrumb */}
                        <div className="flex items-center gap-2.5">
                          {/* circular icon top-left using HSA.png with fallbacks */}
                          <div className="w-7 h-7 rounded-full bg-white border border-white/10 flex items-center justify-center shrink-0 overflow-hidden">
                            <img 
                              src="/logos/HSA.png" 
                              alt="Hospira Logo" 
                              className="w-full h-full object-contain p-0.5"
                              onError={(e) => {
                                e.currentTarget.style.display = 'none';
                                const parent = e.currentTarget.parentElement;
                                if (parent) {
                                  parent.classList.remove('bg-white');
                                  parent.classList.add('bg-[#101828]');
                                  const fallback = document.createElement('span');
                                  fallback.className = 'text-xs font-black text-white font-mono';
                                  fallback.innerText = 'HS';
                                  parent.appendChild(fallback);
                                }
                              }}
                            />
                          </div>
                          
                          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 leading-none">
                            <span className={`text-sm font-bold tracking-wide ${
                              theme === 'dark' ? 'text-gray-100' : 'text-gray-900'
                            }`}>
                              {currentSerp.siteName}
                            </span>
                            
                            <span className="text-gray-500 text-xs truncate max-w-[200px] sm:max-w-xs font-sans tracking-wide">
                              {currentSerp.breadcrumb}
                            </span>
                          </div>

                          <button className="text-gray-500 hover:text-gray-300 ml-auto">
                            <MoreVertical className="w-4 h-4" />
                          </button>
                        </div>

                        {/* 2. Clickable Title Link */}
                        <h4 className="leading-tight mt-2">
                          <span className={`text-lg md:text-xl font-semibold font-sans hover:underline break-words ${
                            theme === 'dark' ? 'text-[#8ab4f8]' : 'text-[#1a0dab]'
                          }`}>
                            {currentSerp.titlePrefix}
                            <span className={`font-bold ml-1 ${
                              theme === 'dark' ? 'text-[#c58af9]' : 'text-[#705697]'
                            }`}>
                              {currentSerp.boldLocation}
                            </span>
                          </span>
                        </h4>

                        {/* 3. Star Rating & Review Count */}
                        <div className="flex items-center gap-2 pt-1">
                          <span className={`text-sm font-bold ${theme === 'dark' ? 'text-[#f0b134]' : 'text-[#e37400]'}`}>
                            {currentSerp.rating}
                          </span>
                          
                          <div className="flex items-center text-[#f2b01e]">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-3.5 h-3.5 fill-current stroke-none shrink-0" />
                            ))}
                          </div>

                          <span className="text-xs text-gray-500 font-mono">
                            ({currentSerp.reviews.toLocaleString()})
                          </span>

                          <div className="h-3.5 w-[1px] bg-gray-500/30 mx-2" />
                          
                          <span className="text-xs bg-green-500/10 text-green-400 px-2 py-0.5 rounded font-bold uppercase tracking-wider">
                            Verified
                          </span>
                        </div>

                        {/* 4. Description/Meta Text */}
                        <p className={`text-sm leading-relaxed font-sans ${
                          theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                        }`}>
                          <strong className={theme === 'dark' ? 'text-gray-100' : 'text-gray-950'}>
                            {currentSerp.descriptionBold}
                          </strong>
                          {currentSerp.descriptionRest}
                        </p>

                      </div>

                      {/* Right Side Thumbnail Preview Image */}
                      <div className="shrink-0 pt-1">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden border border-white/10 shadow bg-black/40 relative">
                          <img
                             src={currentSerp.imageUrl}
                             alt="Steel Pipes and Tubes Thumbnail"
                             className="w-full h-full object-cover"
                          />
                        </div>
                      </div>

                    </div>

                  </div>
                </div>

                <div className="p-5 bg-[#F9F6EE] border border-gray-200/80 rounded-xl space-y-2.5 text-sm text-[#64748B] font-light leading-relaxed">
                  <div className="flex items-center gap-2.5 text-[#0A5A7D]">
                    <Award className="w-5 h-5 shrink-0" />
                    <span className="font-mono font-bold uppercase tracking-wider text-xs">E-E-A-T Conversion Maximizer</span>
                  </div>
                  <span>
                    By embedding correct regional indicators, 5-star review trust indices, and structured metadata schemas, Hospira rankings remain highly relevant on native engines. This draws verified organic inquiries straight to our regional dispatch stations.
                  </span>
                </div>
              </div>
            )}

            {/* TAB 1: VISAKHAPATNAM (VIZAG) DEEP DIVE */}
            {activeTab === 'vizag' && (
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pb-4 border-b border-gray-200/85">
                  <div>
                    <span className="text-[12px] text-[#0A5A7D] font-mono tracking-widest uppercase block">PRIMARY STAINLESS STEEL COMPLEX</span>
                    <h3 className="font-heading text-2xl md:text-3xl font-black text-[#101828] uppercase tracking-tight mt-1">
                      Hospira Steel and Alloy Visakhapatnam
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 bg-[#0A5A7D]/5 border border-[#0A5A7D]/15 px-3.5 py-2 rounded text-xs font-mono text-[#0A5A7D] font-bold">
                    <Anchor className="w-4 h-4 animate-bounce" />
                    PORT LOGISTICS HUB
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="text-sm md:text-base font-bold text-[#101828] uppercase tracking-wider font-mono">
                      Trustworthy Steel Suppliers in Vizag
                    </h4>
                    <p className="text-sm md:text-base text-[#64748B] leading-relaxed font-light">
                      Hospira Steel & Alloy is renowned as the **#1 Steel Supplier in Visakhapatnam** and a vital driver for **Stainless Steel Industries in Visakhapatnam**. Operating directly near the core harbor network, we are the first-choice **Stainless Steel Suppliers in Visakhapatnam** for shipping complexes, oil refineries, and engineering zones.
                    </p>
                    <p className="text-sm md:text-base text-[#64748B] leading-relaxed font-light">
                      Whether you are sourcing custom industrial materials or searching for a **Quality Stainless Steel Shop Visakhapatnam**, our heavy logistics lines guarantee unmatched chemical composition integrity and flawless dimensional finishes.
                    </p>
                    <div className="p-4 bg-[#F9F6EE] border border-gray-200 rounded-lg flex items-center gap-3">
                      <ShieldCheck className="w-5 h-5 text-[#10B981] shrink-0" />
                      <span className="text-xs md:text-sm font-mono text-[#64748B]">
                        Trace-certified by global testing bureaus for **Stainless Steel Industries Vizag**.
                      </span>
                    </div>
                  </div>

                  <div className="bg-[#EDE7D8] border border-gray-200 p-6 rounded-xl space-y-4 shadow-sm">
                    <span className="text-xs font-mono text-[#64748B] uppercase tracking-widest block">
                      LOCAL PORTFOLIO DETAILS
                    </span>
                    
                    <ul className="space-y-3.5 text-sm md:text-base">
                      <li className="flex items-start gap-3 text-[#64748B]">
                        <CheckCircle className="w-4 h-4 text-[#0A5A7D] shrink-0 mt-1" />
                        <span><strong>Steel Processing Units in Vizag:</strong> High-precision shearing, slitting, and round bar processing.</span>
                      </li>
                      <li className="flex items-start gap-3 text-[#64748B]">
                        <CheckCircle className="w-4 h-4 text-[#0A5A7D] shrink-0 mt-1" />
                        <span><strong>Stainless Steel Sheet Suppliers Visakhapatnam:</strong> Smooth cold rolled BA, 2B, and high gloss mirror finishes.</span>
                      </li>
                      <li className="flex items-start gap-3 text-[#64748B]">
                        <CheckCircle className="w-4 h-4 text-[#0A5A7D] shrink-0 mt-1" />
                        <span><strong>Stainless Steel Pipe Suppliers Visakhapatnam:</strong> Seamless carbon, industrial black, and ERW high pressure pipes.</span>
                      </li>
                      <li className="flex items-start gap-3 text-[#64748B]">
                        <CheckCircle className="w-4 h-4 text-[#0A5A7D] shrink-0 mt-1" />
                        <span><strong>Stainless Steel Fittings Dealers Vizag:</strong> Socket weld elbows, heavy forged fittings, and custom flanges.</span>
                      </li>
                    </ul>

                    <div className="pt-3 border-t border-gray-150">
                      <p className="text-xs text-[#64748B]/85 italic font-mono">
                        * Search optimization anchors: <em>Stainless Steel Suppliers Near Me Visakhapatnam</em>, <em>Wholesale Stainless Steel Vizag</em>.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: ANDHRA PRADESH COV */}
            {activeTab === 'ap_wide' && (
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pb-4 border-b border-gray-200/85">
                  <div>
                    <span className="text-[12px] text-[#0A5A7D] font-mono tracking-widest uppercase block">STATEWIDE LOGISTICS PIPELINE</span>
                    <h3 className="font-heading text-2xl md:text-3xl font-black text-[#101828] uppercase tracking-tight mt-1">
                      Andhra Pradesh Industrial Steel Network
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 bg-[#0A5A7D]/5 border border-[#0A5A7D]/15 px-3.5 py-2 rounded text-xs font-mono text-[#0A5A7D] font-bold">
                    <Truck className="w-4 h-4 animate-pulse" />
                    DIRECT ROUTE LOGISTICS
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="text-sm md:text-base font-bold text-[#101828] uppercase tracking-wider font-mono">
                      Industrial Steel Suppliers AP
                    </h4>
                    <p className="text-sm md:text-base text-[#64748B] leading-relaxed font-light">
                      Hospira Steel & Alloy delivers a flawless procurement stream as one of the preeminent **Steel Industries in Andhra Pradesh**. We support large-scale commercial infrastructural projects, processing complexes, and fabricators across the length and breadth of AP.
                    </p>
                    <p className="text-sm md:text-base text-[#64748B] leading-relaxed font-light">
                      Our distribution lines handle severe industrial supplies. We represent the benchmark for **Stainless Steel Suppliers Andhra Pradesh**, supplying durable alloys, specialized carbon elements, and heavy-duty piping networks.
                    </p>
                    <div className="p-4 bg-[#F9F6EE] border border-gray-200 rounded-lg">
                      <p className="text-xs text-[#64748B] font-mono leading-relaxed">
                        Primary Search Phrases: **Stainless Steel Products in Andhra Pradesh**, **Stainless Steel Dealers AP**, **Best Steel Company in Andhra Pradesh**.
                      </p>
                    </div>
                  </div>

                  <div className="bg-[#EDE7D8] border border-gray-200 p-6 rounded-xl space-y-4 shadow-sm">
                    <span className="text-xs font-mono text-[#64748B] uppercase tracking-widest block">
                      SUPPLY PIPELINE CAPABILITIES
                    </span>

                    <ul className="space-y-3.5 text-sm md:text-base">
                      <li className="flex items-center gap-3">
                        <span className="w-2 h-2 bg-[#0A5A7D] rounded-full" />
                        <span className="text-[#64748B]"><strong>Stainless Steel Wholesalers Andhra Pradesh:</strong> Bulk discounts on container loads.</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="w-2 h-2 bg-[#0A5A7D] rounded-full" />
                        <span className="text-[#64748B]"><strong>Steel Manufacturers Andhra Pradesh:</strong> Precision mill orders engineered to design drafts.</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="w-2 h-2 bg-[#0A5A7D] rounded-full" />
                        <span className="text-[#64748B]"><strong>Steel Fabricators in Andhra Pradesh:</strong> Tailored structural components and laser beveling.</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="w-2 h-2 bg-[#0A5A7D] rounded-full" />
                        <span className="text-[#64748B]"><strong>Steel Distributors Andhra Pradesh:</strong> Decentralized logistic depots ensuring short lead times.</span>
                      </li>
                    </ul>

                    <div className="h-[1px] bg-gray-150" />
                    <p className="text-xs text-[#64748B] italic font-mono leading-relaxed">
                      All products trace directly to verified heavy steel processing centers ensuring ASME, ASTM and DIN standards compliance.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: CITIES GRID */}
            {activeTab === 'cities' && (
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pb-4 border-b border-gray-200/85">
                  <div>
                    <span className="text-[12px] text-[#0A5A7D] font-mono tracking-widest uppercase block">DECENTRALIZED CITY COVERAGE</span>
                    <h3 className="font-heading text-2xl md:text-3xl font-black text-[#101828] uppercase tracking-tight mt-1">
                      Sourcing AP Major Cities & Settle Points
                    </h3>
                  </div>
                </div>

                <p className="text-sm md:text-base text-[#64748B] font-light max-w-2xl leading-relaxed">
                  From our primary stainless steel complex, we provide express heavy haul routes to major urban centers and manufacturing corridors in AP. Below are active regional delivery lines:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                  {apCitiesList.map((city, idx) => (
                    <div key={idx} className="bg-[#EDE7D8] border border-gray-200 p-5 rounded-xl space-y-3 relative group hover:border-[#0A5A7D]/45 hover:shadow-md transition-all duration-300">
                      <div className="flex items-center justify-between">
                        <h4 className="text-sm md:text-base font-bold text-[#101828] uppercase font-mono group-hover:text-[#0A5A7D] transition-colors">
                          {city.name}
                        </h4>
                        <MapPin className="w-4 h-4 text-[#0A5A7D]/60 shrink-0" />
                      </div>
                      <p className="text-xs text-[#64748B] uppercase tracking-tight leading-relaxed font-medium">
                        {city.tag}
                      </p>
                      <div className="h-[1px] bg-gray-100" />
                      <div className="flex items-center justify-between pt-1">
                        <span className="text-[10px] font-mono text-[#64748B]">TRANSIT TIMELINE:</span>
                        <span className="text-xs font-mono text-[#0A5A7D] font-bold">{city.transit}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-[#F9F6EE] border border-gray-200 p-5 rounded-xl text-center shadow-sm">
                  <p className="text-xs md:text-sm text-[#64748B] leading-relaxed">
                    Looking to source robust, high-performance alloys and piping solutions elsewhere in the country? <br />
                    Explore our <strong className="text-[#0A5A7D] uppercase font-mono">12+ Nationwide Branches</strong> for localized distribution terminals.
                  </p>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
