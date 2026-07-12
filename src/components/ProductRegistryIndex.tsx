import React from 'react';
import { Database, Landmark, CheckSquare } from 'lucide-react';

export default function ProductRegistryIndex() {
  const directoryItems = [
    "Stainless steel pipe",
    "Stainless steel sheet",
    "Stainless steel tube",
    "Stainless steel nut bolt fastener",
    "Stainless steel valve",
    "Stainless steel plate",
    "Stainless steel fitting",
    "Stainless steel flange",
    "Stainless steel bend elbow reducer tee  nipple union socket coupling",
    "Ss pipes",
    "Seamless erw",
    "Jindal stainless steel pipe",
    "Jindal stainless steel sheet"
  ];

  const certifiedGrades = [
    "Grade Ss 304 316 310 321 317 309"
  ];

  return (
    <section className="py-16 bg-[#F2EDE0] border-t border-gray-200/50 relative overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="border border-gray-200 bg-[#EDE7D8] p-8 md:p-10 rounded-2xl relative">
          <div className="absolute top-0 left-0 w-16 h-[1px] bg-[#0A5A7D]" />
          <div className="absolute top-0 left-0 w-[1px] h-16 bg-[#0A5A7D]" />
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-gray-150 pb-6 mb-8">
            <div className="space-y-1">
              <span className="text-[10px] text-[#0A5A7D] tracking-widest font-bold uppercase font-mono block">
                STAINLESS STEEL PRODUCT DIRECTORY INDEX
              </span>
              <h4 className="font-heading text-xl md:text-2xl font-black text-[#101828] uppercase tracking-tight">
                CERTIFIED COMPONENT REGISTER
              </h4>
            </div>
            
            <div className="flex items-center gap-2 bg-[#F2EDE0] border border-gray-200 px-4 py-2 rounded-lg">
              <Database className="w-4 h-4 text-[#0A5A7D] shrink-0 animate-pulse" />
              <span className="text-[10px] text-[#64748B] font-mono tracking-wider">
                INDEX CODES: SYSTEM ACTIVE
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* COLUMN 1: FULL INDUSTRIAL COMPONENTS LISTING */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Landmark className="w-4 h-4 text-[#0A5A7D] shrink-0" />
                <span className="text-xs font-bold text-[#101828] uppercase tracking-widest font-mono">
                  SUPPLY CLASSIFICATION
                </span>
              </div>
              <p className="text-[11px] text-[#64748B] leading-relaxed font-light">
                Official registration listing of stainless products and high-performance alloys catered directly to heavy engineering yards, maritime infrastructures, and pipelines.
              </p>
              
              <div className="h-[1px] bg-gray-150 w-full" />
              
              <ul className="space-y-2.5 font-mono text-[11px] text-[#64748B]">
                {directoryItems.slice(0, 5).map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#0A5A7D] mt-0.5 font-bold">»</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* COLUMN 2: CUSTOM MILLING SERVICES & SHAPES */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <CheckSquare className="w-4 h-4 text-[#0A5A7D] shrink-0" />
                <span className="text-xs font-bold text-[#101828] uppercase tracking-widest font-mono">
                  FABRICATION DIRECTORY
                </span>
              </div>
              <p className="text-[11px] text-[#64748B] leading-relaxed font-light">
                Continuous rolling capability and sourcing of accredited steel components. Custom lengths, finishes, and thickness grades machined to client specifications.
              </p>

              <div className="h-[1px] bg-gray-150 w-full" />

              <ul className="space-y-2.5 font-mono text-[11px] text-[#64748B]">
                {directoryItems.slice(5).map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#0A5A7D] mt-0.5 font-bold">»</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* COLUMN 3: HEAVY CERTIFIED PRODUCTS & CHEMISTRY */}
            <div className="space-y-6 bg-[#F2EDE0] border border-gray-200 p-6 rounded-xl relative">
              <div className="space-y-2">
                <span className="text-[10px] text-[#0A5A7D] tracking-widest font-bold uppercase font-mono block">
                  STANDARDIZED CHEMICAL GRADES
                </span>
                <p className="text-[11px] text-[#64748B] leading-relaxed">
                  We supply, shear, process, and test specialized metallurgy with absolute chemical integrity.
                </p>
              </div>

              <div className="h-[1px] bg-gray-150" />

              <div className="space-y-4">
                <span className="block text-[9px] text-[#64748B] uppercase tracking-widest font-mono">
                  CERTIFIED STAINLESS GRADES
                </span>
                {certifiedGrades.map((grade, idx) => (
                  <div key={idx} className="bg-[#F9F6EE] border border-[#0A5A7D]/30 px-4 py-3 rounded-md text-center shadow-sm">
                    <span className="font-mono text-xs text-[#0A5A7D] font-bold tracking-wider">
                      {grade}
                    </span>
                  </div>
                ))}
                
                <p className="text-[10px] text-[#64748B] italic font-mono leading-relaxed">
                  * Trace certified by direct laboratory mill reports adhering to ASTM, ASME, and DIN specifications.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
