import { useEffect, useState } from 'react';
import { MapPin, Building2, Search, ArrowUpRight, Phone, Mail, CheckCircle2 } from 'lucide-react';
import gsap from 'gsap';
import AreasWeServe from '../components/AreasWeServe';

interface BranchesProps {
  onNavigate: (path: string) => void;
}

interface Branch {
  name: string;
  location: string;
  state: string;
  role: string;
  isManufacturer: boolean;
  phone?: string;
}

export default function Branches({ onNavigate }: BranchesProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('ALL');

  useEffect(() => {
    gsap.fromTo('.branches-page-anim',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', stagger: 0.1 }
    );
  }, []);

  const branchesList: Branch[] = [
    {
      name: 'Apex Brass Alloy Pvt Ltd',
      location: 'Mumbai',
      state: 'Maharashtra',
      role: 'WESTERN INDIA HUB',
      isManufacturer: true
    },
    {
      name: 'Apollo Steel and Alloy',
      location: 'Mumbai',
      state: 'Maharashtra',
      role: 'WESTERN DISTRIBUTION CENTER',
      isManufacturer: false
    },
    {
      name: 'Rinku Steel Corporation',
      location: 'Sanchore',
      state: 'Rajasthan',
      role: 'NORTHWEST MANUFACTURING FACILITY',
      isManufacturer: true
    },
    {
      name: 'Reliance Steel House',
      location: 'Baddi',
      state: 'Himachal Pradesh',
      role: 'NORTHERN INDUSTRIAL REPAIR & SUPPLY',
      isManufacturer: false
    },
    {
      name: 'Raghukul Steel House',
      location: 'Haridwar',
      state: 'Uttarakhand',
      role: 'NORTHERN ZONE SUPPLY',
      isManufacturer: false
    },
    {
      name: 'Neutech Pipe Fittings LLP',
      location: 'Ahmedabad',
      state: 'Gujarat',
      role: 'WESTERN LOGISTICS CENTER',
      isManufacturer: false
    },
    {
      name: 'Aditya Industries',
      location: 'Pithampur',
      state: 'Madhya Pradesh',
      role: 'CENTRAL INDIA HUB',
      isManufacturer: false
    },
    {
      name: 'Rajat Group Industries',
      location: 'Raipur',
      state: 'Chhattisgarh',
      role: 'CENTRAL-EAST COIL & SHEET DEPOT',
      isManufacturer: false
    },
    {
      name: 'Real Steel Industries',
      location: 'Delhi',
      state: 'National Capital Region',
      role: 'NORTHERN METALLURGY DESK',
      isManufacturer: false
    },
    {
      name: 'Himani Industries',
      location: 'Jammu',
      state: 'Jammu & Kashmir',
      role: 'FAR NORTH RESOURCE OUTPOST',
      isManufacturer: false
    },
    {
      name: 'Reliance Steel Corporation',
      location: 'Guwahati',
      state: 'Assam',
      role: 'EASTERN & NORTHEAST COUPLING DEPOT',
      isManufacturer: false
    },
    {
      name: 'Apex Brass Alloy Pvt Ltd',
      location: 'Chandigarh',
      state: 'Punjab & Haryana',
      role: 'NORTHERN ALLOY DEPOT',
      isManufacturer: false
    }
  ];

  // Map regions for categorization
  const getRegion = (state: string): string => {
    const north = ['Himachal Pradesh', 'Uttarakhand', 'National Capital Region', 'Jammu & Kashmir', 'Punjab & Haryana'];
    const west = ['Maharashtra', 'Rajasthan', 'Gujarat'];
    const central = ['Madhya Pradesh', 'Chhattisgarh'];
    const east = ['Assam'];
    
    if (north.includes(state)) return 'NORTH';
    if (west.includes(state)) return 'WEST';
    if (central.includes(state)) return 'CENTRAL';
    if (east.includes(state)) return 'EAST';
    return 'OTHER';
  };

  const filteredBranches = branchesList.filter(branch => {
    const matchesSearch = 
      branch.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      branch.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      branch.state.toLowerCase().includes(searchQuery.toLowerCase()) ||
      branch.role.toLowerCase().includes(searchQuery.toLowerCase());
      
    const branchRegion = getRegion(branch.state);
    const matchesRegion = selectedRegion === 'ALL' || branchRegion === selectedRegion;

    return matchesSearch && matchesRegion;
  });

  return (
    <div className="bg-[#FFFFFF] min-h-screen pt-28 pb-20 font-sans">
      
      {/* HEADER HERO BANNER */}
      <section className="relative py-16 border-b border-gray-200/60 bg-[#F2F7FB] mb-12">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <span className="branches-page-anim text-xs font-bold tracking-[0.3em] text-[#0A5A7D] uppercase block mb-3">
            NATIONWIDE NETWORK
          </span>
          <h1 className="branches-page-anim font-heading text-4xl md:text-7xl font-black text-[#101828] uppercase tracking-tighter mb-4">
            OUR BRANCHES & PLANTS
          </h1>
          <p className="branches-page-anim text-sm sm:text-base text-[#64748B] max-w-2xl font-light leading-relaxed">
            Hospira Steel & Alloy delivers high-performance products nationwide. Explore our state-of-the-art mills, fabrication plants, and strategic distribution networks across India.
          </p>
        </div>
      </section>

      {/* CORE SEARCH & FILTER SHELF */}
      <section className="max-w-7xl mx-auto px-6 mb-12 relative z-10">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-[#EEF4FA] border border-gray-200 p-4 rounded-xl">
          
          {/* Custom Search Input */}
          <div className="relative w-full md:max-w-md bg-white border border-gray-200 focus-within:border-[#0A5A7D]/40 rounded-full transition-all duration-300 px-4 py-2.5 flex items-center gap-3">
            <Search className="w-4 h-4 text-[#64748B] shrink-0" />
            <input 
              type="text" 
              placeholder="Search by city, state, or company..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent w-full outline-none text-xs text-[#101828] placeholder-[#64748B]/50 font-sans"
            />
          </div>

          {/* Region Tabs */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {['ALL', 'NORTH', 'WEST', 'CENTRAL', 'EAST'].map((region) => (
              <button
                key={region}
                onClick={() => setSelectedRegion(region)}
                className={`px-4 py-2 rounded-full font-mono text-[9px] font-bold tracking-widest uppercase transition-all duration-300 ${
                  selectedRegion === region 
                    ? 'bg-[#0A5A7D] text-white border border-[#0A5A7D] shadow-sm' 
                    : 'bg-transparent text-[#64748B] border border-gray-200 hover:border-[#0A5A7D]/40 hover:text-[#0A5A7D]'
                }`}
              >
                {region} ZONE
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* BRANCHES LIST GRID */}
      <section className="max-w-7xl mx-auto px-6 relative z-10">
        {filteredBranches.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBranches.map((branch, index) => (
              <div 
                key={index} 
                className="branches-page-anim bg-white border border-gray-200/80 hover:border-[#0A5A7D]/40 rounded-xl p-6 flex flex-col justify-between transition-all duration-300 hover:translate-y-[-2px] relative group shadow-sm hover:shadow-md"
              >
                {/* Accent line top */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#0A5A7D]/10 to-transparent group-hover:via-[#0A5A7D]/40 transition-all duration-300" />

                <div>
                  {/* Card Header Tag */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[9px] font-mono tracking-widest text-[#0A5A7D] uppercase bg-[#0A5A7D]/5 border border-[#0A5A7D]/10 px-2 py-1 rounded">
                      {getRegion(branch.state)} ZONE
                    </span>
                    {branch.isManufacturer && (
                      <span className="text-[8px] font-mono tracking-wider text-[#16A34A] uppercase bg-[#16A34A]/5 border border-[#16A34A]/15 px-2 py-0.5 rounded flex items-center gap-1">
                        <span className="w-1 h-1 bg-[#16A34A] rounded-full animate-pulse" />
                        MANUFACTURER
                      </span>
                    )}
                  </div>

                  {/* Branch Name */}
                  <h3 className="font-heading text-lg font-bold text-[#101828] uppercase tracking-wide group-hover:text-[#0A5A7D] transition-colors mb-2">
                    {branch.name}
                  </h3>

                  {/* Role/Classification */}
                  <p className="text-[10px] font-mono text-[#64748B] uppercase tracking-widest mb-6">
                    {branch.role}
                  </p>
                </div>

                {/* Footer Details */}
                <div className="border-t border-gray-200/60 pt-4 mt-6 space-y-2.5">
                  <div className="flex items-start gap-2.5 text-xs">
                    <MapPin className="w-4 h-4 text-[#0A5A7D] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[#101828] font-medium">{branch.location}</p>
                      <p className="text-[10px] text-[#64748B]">{branch.state}, India</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 text-[10px] font-mono text-[#64748B] pt-2">
                    <Building2 className="w-3.5 h-3.5 text-[#0A5A7D]/60 shrink-0" />
                    <span>HOSPIRA VERIFIED OUTPOST</span>
                  </div>
                </div>

                {/* Quick actions hover arrow */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowUpRight className="w-4 h-4 text-[#0A5A7D]" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-24 bg-[#F2F7FB] border border-gray-200/80 rounded-xl">
            <Building2 className="w-12 h-12 text-[#64748B]/30 mx-auto mb-4" />
            <h3 className="text-[#101828] text-lg uppercase font-heading font-bold mb-1">NO BRANCH FOUND</h3>
            <p className="text-xs text-[#64748B] max-w-sm mx-auto font-light">
              We couldn't find any branches matching "{searchQuery}" in the selected zone. Please clear or modify your criteria.
            </p>
          </div>
        )}
      </section>

      {/* REGIONAL GEO-LOGISTICS SERVICE INDEX */}
      <AreasWeServe />

      {/* INQUIRY BANNER */}
      <section className="max-w-4xl mx-auto px-6 mt-20 relative z-10 text-center">
        <div className="bg-[#EEF4FA] border border-gray-200 p-8 md:p-12 rounded-xl relative overflow-hidden shadow-md">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#0A5A7D]/5 blur-3xl pointer-events-none" />
          
          <span className="text-[10px] font-bold tracking-[0.3em] text-[#0A5A7D] uppercase block mb-3">
            LOGISTICS ENQUIRIES
          </span>
          <h2 className="font-heading text-xl md:text-3xl font-black text-[#101828] uppercase tracking-tighter mb-4">
            WANT TO PARTNER WITH OUR NETWORK?
          </h2>
          <p className="text-xs text-[#64748B] max-w-lg mx-auto mb-8 font-light leading-relaxed">
            Hospira Steel & Alloy works closely with nationwide distributors and core local logistics nodes to secure flawless product delivery. Contact our central commercial desk to connect with any local outpost.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('quote')}
              className="px-6 py-3 bg-[#0A5A7D] hover:bg-[#1A8CAF] text-white rounded-full font-heading text-[10px] font-bold tracking-widest uppercase transition-all duration-300 shadow-sm cursor-pointer"
            >
              REQUEST BULK ALLOCATION
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3 border border-gray-200 hover:border-[#0A5A7D]/40 text-[#101828] hover:text-[#0A5A7D] rounded-full font-heading text-[10px] font-bold tracking-widest uppercase transition-all duration-300 cursor-pointer"
            >
              CONTACT HEAD OFFICE
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
