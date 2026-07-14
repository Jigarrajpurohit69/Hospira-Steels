import React, { useState } from 'react';
import { Database, Search, ShieldCheck, Layers, MapPin, Tag } from 'lucide-react';

export default function ProductRegistryIndex() {
  const [activeTab, setActiveTab] = useState<'all' | 'brand' | 'pipes' | 'sheets' | 'fittings' | 'valves' | 'local'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const seoCategories = {
    brand: {
      title: "Brand & Alloys",
      keywords: [
        "Hospira Steel & Alloy",
        "Hospira Steel & Alloy Visakhapatnam",
        "Hospira Steel",
        "Hospira Steel Gajuwaka",
        "Hospira Stainless Steel Supplier",
        "Hospira SS Pipe Dealer",
        "Hospira SS Stockist",
        "Hospira Steel India",
        "Hospira Steel Andhra Pradesh",
        "Hospira Steel Vizag",
        "SS 304",
        "SS 304L",
        "SS 316",
        "SS 316L",
        "SS 310",
        "SS 309",
        "SS 321",
        "SS 317",
        "Duplex Stainless Steel",
        "Super Duplex Stainless Steel",
        "Jindal Stainless Dealer",
        "Jindal Stainless Steel Pipe",
        "Ratnamani Pipe",
        "Venus Pipe",
        "Suraj Pipe",
        "MBM Tubes",
        "Maharashtra Seamless",
        "Steel Authority Products",
        "Stainless Steel Brands",
        "Industrial Steel Supplier"
      ]
    },
    pipes: {
      title: "Pipes & Tubes",
      keywords: [
        "Stainless Steel Pipe",
        "SS Pipe",
        "SS 304 Pipe",
        "SS 316 Pipe",
        "SS 304L Pipe",
        "SS 316L Pipe",
        "SS 310 Pipe",
        "SS 309 Pipe",
        "SS 321 Pipe",
        "SS 317 Pipe",
        "Stainless Steel Seamless Pipe",
        "Stainless Steel Welded Pipe",
        "ERW Stainless Steel Pipe",
        "Schedule 10 SS Pipe",
        "Schedule 40 SS Pipe",
        "Heavy Wall SS Pipe",
        "Polished SS Pipe",
        "Industrial SS Pipe",
        "Food Grade SS Pipe",
        "Pharmaceutical SS Pipe",
        "Stainless Steel Tube",
        "SS Tube",
        "SS Round Tube",
        "SS Square Tube",
        "SS Rectangular Tube",
        "SS Hollow Section",
        "Stainless Steel Hollow Pipe",
        "Decorative SS Tube",
        "Mirror Finish SS Tube",
        "Industrial SS Tube"
      ]
    },
    sheets: {
      title: "Sheets, Plates & Bars",
      keywords: [
        "Stainless Steel Sheet",
        "SS Sheet",
        "SS Plate",
        "Stainless Steel Plate",
        "SS Coil",
        "SS Strip",
        "Mirror Finish SS Sheet",
        "Matt Finish SS Sheet",
        "Hairline Finish SS Sheet",
        "No.4 Finish SS Sheet",
        "2B Finish SS Sheet",
        "BA Finish SS Sheet",
        "Decorative SS Sheet",
        "Laser Cutting SS Sheet",
        "SS Chequered Plate",
        "SS Rod",
        "Stainless Steel Rod",
        "SS Round Bar",
        "SS Bright Bar",
        "SS Hex Bar",
        "SS Flat Bar",
        "SS Square Bar",
        "SS Angle",
        "SS Channel",
        "SS Beam",
        "SS T Section",
        "Stainless Steel Structural Material"
      ]
    },
    fittings: {
      title: "Fittings & Flanges",
      keywords: [
        "SS Pipe Fittings",
        "Stainless Steel Elbow",
        "SS Tee",
        "SS Reducer",
        "SS Union",
        "SS Coupling",
        "SS Nipple",
        "SS Cap",
        "SS Bend",
        "SS Cross",
        "SS Socket",
        "SS Ferrule Fittings",
        "SS Compression Fittings",
        "SS Tri Clamp Fittings",
        "SS Dairy Fittings",
        "SS Flange",
        "Stainless Steel Flange",
        "Slip On Flange",
        "Weld Neck Flange",
        "Blind Flange",
        "Socket Weld Flange",
        "Threaded Flange",
        "Lap Joint Flange",
        "ANSI Flange",
        "DIN Flange",
        "BS Flange",
        "PN16 Flange",
        "150# Flange"
      ]
    },
    valves: {
      title: "Valves, Fasteners & Wire",
      keywords: [
        "SS Ball Valve",
        "SS Gate Valve",
        "SS Globe Valve",
        "SS Butterfly Valve",
        "SS Check Valve",
        "SS Needle Valve",
        "SS Safety Valve",
        "Stainless Steel Valve",
        "Industrial Valve Supplier",
        "High Pressure SS Valve",
        "SS Fasteners",
        "SS Nut Bolt",
        "SS Bolt",
        "SS Nut",
        "SS Washer",
        "SS Stud",
        "SS Threaded Rod",
        "Stainless Steel Screw",
        "Anchor Bolt",
        "Foundation Bolt",
        "SS Wire Mesh",
        "Stainless Steel Mesh",
        "Welded Wire Mesh",
        "Woven Wire Mesh",
        "Fine Wire Mesh",
        "SS Filter Mesh",
        "SS Perforated Sheet",
        "Expanded Metal Mesh",
        "Industrial Wire Mesh",
        "SS Screen Mesh",
        "Stainless Steel Railing",
        "Glass Railing",
        "SS Hand Railing",
        "Balcony Railing",
        "Staircase Railing",
        "PVD Gold Railing",
        "Glass Partition",
        "SS Fabrication",
        "Stainless Steel Fabrication",
        "SS Welding Services"
      ]
    },
    local: {
      title: "B2B & Local Coverage",
      keywords: [
        "Stainless Steel Supplier Visakhapatnam",
        "SS Pipe Supplier Visakhapatnam",
        "SS Pipe Dealer Visakhapatnam",
        "SS Tube Supplier Visakhapatnam",
        "Stainless Steel Stockist Visakhapatnam",
        "Stainless Steel Dealer Gajuwaka",
        "SS Sheet Supplier Gajuwaka",
        "Stainless Steel Pipe Dealer Vizag",
        "SS Material Supplier Andhra Pradesh",
        "Industrial Stainless Steel Supplier",
        "Stainless Steel Supplier Near Me",
        "SS Pipe Near Me",
        "Stainless Steel Shop Visakhapatnam",
        "SS Hardware Supplier",
        "SS Industrial Material Supplier",
        "Best Stainless Steel Supplier in Visakhapatnam",
        "Best SS Pipe Dealer in Gajuwaka",
        "Stainless Steel Sheet Supplier in Vizag",
        "SS Pipe Stockist in Andhra Pradesh",
        "Stainless Steel Tube Dealer in Visakhapatnam",
        "Industrial SS Material Supplier in Vizag",
        "Stainless Steel Pipe Distributor in Andhra Pradesh",
        "SS Flange Supplier Visakhapatnam",
        "SS Fastener Supplier Visakhapatnam",
        "SS Valve Supplier Visakhapatnam",
        "Stainless Steel Wholesale Dealer",
        "Stainless Steel Retail Shop",
        "SS Pipe Exporter India",
        "Stainless Steel Importer India",
        "Stainless Steel Stockist India",
        "Stainless Steel Dealer India",
        "Stainless Steel Pipe Manufacturer India",
        "Stainless Steel Sheet Stockist India",
        "Stainless Steel Industrial Supplier",
        "Stainless Steel Products Supplier",
        "Pharma SS Supplier",
        "Food Industry SS Material",
        "Dairy Industry SS Supplier",
        "Chemical Industry SS Pipe",
        "Oil & Gas SS Supplier",
        "Marine Grade Stainless Steel",
        "Power Plant SS Material",
        "Cement Industry SS Supplier",
        "Paper Mill SS Supplier",
        "Sugar Factory SS Supplier",
        "Buy Stainless Steel Pipe",
        "Buy SS Sheet",
        "Buy SS Tube",
        "Best SS Supplier",
        "Top Stainless Steel Dealer",
        "Stainless Steel Price",
        "SS Pipe Price",
        "SS Sheet Price",
        "SS Plate Price",
        "Stainless Steel Distributor"
      ]
    }
  };

  // Get all keywords combined
  const allKeywords = Object.values(seoCategories).flatMap(cat => cat.keywords);

  // Filter keywords based on selected category and search query
  const getFilteredKeywords = () => {
    let list: string[] = [];
    if (activeTab === 'all') {
      list = allKeywords;
    } else {
      list = seoCategories[activeTab].keywords;
    }

    // Remove duplicates
    const uniqueList = Array.from(new Set(list));

    if (searchQuery.trim() !== '') {
      return uniqueList.filter(kw => kw.toLowerCase().includes(searchQuery.toLowerCase()));
    }
    return uniqueList;
  };

  const filteredKeywords = getFilteredKeywords();

  return (
    <section className="py-20 bg-[#F2EDE0] border-t border-gray-200/50 relative overflow-hidden font-sans" id="product-directory-index">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="border border-gray-200 bg-[#EDE7D8] p-8 md:p-10 rounded-2xl relative shadow-sm">
          <div className="absolute top-0 left-0 w-16 h-[1px] bg-[#0A5A7D]" />
          <div className="absolute top-0 left-0 w-[1px] h-16 bg-[#0A5A7D]" />
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-gray-200/60 pb-6 mb-8">
            <div className="space-y-1">
              <span className="text-[10px] text-[#0A5A7D] tracking-widest font-bold uppercase font-mono block">
                METALLURGICAL CATALOGUE & REGISTRY
              </span>
              <h4 className="font-heading text-xl md:text-3xl font-black text-[#101828] uppercase tracking-tight">
                CERTIFIED B2B COMPONENT INDEX
              </h4>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
              {/* Live search box */}
              <div className="relative">
                <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search standards or products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full sm:w-64 pl-9 pr-4 py-2 text-xs bg-[#F2EDE0] border border-gray-200 rounded-lg text-[#101828] placeholder-gray-400 focus:outline-none focus:border-[#0A5A7D]/40 font-mono transition-all duration-300"
                />
              </div>

              <div className="flex items-center gap-2 bg-[#F2EDE0] border border-gray-200 px-4 py-2 rounded-lg">
                <Database className="w-4 h-4 text-[#0A5A7D] shrink-0 animate-pulse" />
                <span className="text-[9px] text-[#64748B] font-mono tracking-wider whitespace-nowrap">
                  INDEX CODES: ACTIVE ({allKeywords.length} REGISTERED)
                </span>
              </div>
            </div>
          </div>

          {/* Tab buttons */}
          <div className="flex flex-wrap gap-2 mb-8 border-b border-gray-200/50 pb-5">
            <button
              onClick={() => { setActiveTab('all'); }}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase transition-all duration-300 ${
                activeTab === 'all'
                  ? 'bg-[#0A5A7D] text-white shadow-sm'
                  : 'bg-white/50 text-[#64748B] hover:bg-white border border-gray-200/60'
              }`}
            >
              All Registry
            </button>
            {Object.entries(seoCategories).map(([key, value]) => (
              <button
                key={key}
                onClick={() => { setActiveTab(key as any); }}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase transition-all duration-300 ${
                  activeTab === key
                    ? 'bg-[#0A5A7D] text-white shadow-sm'
                    : 'bg-white/50 text-[#64748B] hover:bg-white border border-gray-200/60'
                }`}
              >
                {value.title}
              </button>
            ))}
          </div>

          {/* Grid content */}
          <div className="min-h-[180px]">
            {filteredKeywords.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                {filteredKeywords.map((kw, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-white/60 hover:bg-white border border-gray-200/50 hover:border-[#0A5A7D]/20 rounded-lg flex items-center gap-2 transition-all duration-300 hover:shadow-sm"
                  >
                    <Tag className="w-3 h-3 text-[#0A5A7D] shrink-0" />
                    <span className="font-mono text-[10px] md:text-[11px] text-[#64748B] hover:text-[#101828] font-medium leading-tight">
                      {kw}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="py-12 text-center text-[#64748B] font-mono text-xs">
                No indexed metallurgical terms match your search.
              </div>
            )}
          </div>

          {/* Compliance & Standard Footer */}
          <div className="mt-8 pt-6 border-t border-gray-200/60 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-[10px] font-mono text-[#64748B]">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#0A5A7D]" />
              <span>Sourcing verified & trace certified according to ASTM / ASME codes.</span>
            </div>
            <div>
              <span>Hospira Steel & Alloy Industrial Index • Vizag & Andhra Pradesh Hubs</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
