import { Product, CategoryData } from './types';

export const CATEGORIES: CategoryData[] = [
  {
    id: 'austenitic',
    name: 'AUSTENITIC STAINLESS STEEL',
    tagline: 'Universal Corrosion Resistance',
    description: 'Elite food, medical, and process grade stainless steels including SS 304, SS 316, and SS 321, perfect for extreme durability.',
    specCount: '15 Grades Available',
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'duplex',
    name: 'DUPLEX & SUPER DUPLEX STEEL',
    tagline: 'Double the Strength, Dual Phase',
    description: 'Austenitic-ferritic alloys providing maximum resistance to chloride stress corrosion cracking, high yield strength, and toughness.',
    specCount: '8 Grades Available',
    imageUrl: 'https://images.unsplash.com/photo-1535813547-99c456a41d4a?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'ferritic',
    name: 'FERRITIC & MARTENSITIC SS',
    tagline: 'Magnetic Strength & Hardenability',
    description: 'Chromium-heavy stainless alloys such as SS 410, SS 430, and SS 440 designed for exceptional wear resistance, mechanical hardness, and moderate anti-corrosion.',
    specCount: '10 Grades Available',
    imageUrl: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'specialty',
    name: 'PRECIPITATION HARDENING & SPECIALTY SS',
    tagline: 'Extreme Marine & Aerospace Performance',
    description: 'Highly specialized stainless steels like 17-4 PH, 15-5 PH, 904L, and Nickel-Chromium superalloys built to survive intense pressures, space vacuums, and deep-sea marine depths.',
    specCount: '6 Grades Available',
    imageUrl: 'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&q=80&w=1000'
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'pipes',
    name: 'Stainless Steel Pipes',
    category: 'austenitic',
    categoryLabel: 'Austenitic Stainless Steel',
    grade: 'ASTM A312 TP 304/304L/304H/316/316L/317/317L/321/310/347/904L etc.',
    description: 'High-quality seamless and welded stainless steel, carbon steel, and alloy steel pipes from premium mills.',
    availableForms: [
      'Stainless Steel: ASTM A312 TP 304/304L/304H/316/316L/317/317L/321/310/347/904L',
      'Carbon Steel: ASTM A53 GR. B / A 106 GR. B / API 5L GRADE B / API 5L GR.X42/46/52/56/60/65/70 / A333 GR.3 / GR.6 etc.',
      'Alloy Steel: ASTM A335 GR. P1/P5/P9/P11/P22/P91 etc.',
      'Seamless & Welded SS Pipe',
      'Jindal Pipe & Ms Cs Jindal Pipe',
      'INCONEL 800 / 825 / 600 / 625, Monel, Nickel'
    ],
    thicknessRange: 'SCH 5S to SCH XXS',
    width: '1/4" to 48" NB',
    length: '6 Meters Standard, Cut-to-Length',
    certifications: ['ASTM A312 / ASME SA312 / API 5L', 'EN 10204 3.1 MTC', 'ISO 9001:2008 & BS EN ISO 9001 2008', 'TUV / NABCB / CARES / UKAS Certified'],
    longDescription: 'Our certified piping systems are manufactured from premium-grade materials in accordance with strict international codes. We offer high-quality options in Stainless Steel (including TP304, 316L, 321, and 310), Carbon Steel, and specialized Alloy Steel.',
    keyApplications: ['Petrochemical refineries & chemical processing', 'Defence & aerospace conduits', 'Thermal power & hydropower projects', 'Marine, ports, and dockyards', 'Sugar, paper, fertilizer and cement plants'],
    composition: [
      { element: 'Chromium (Cr)', percentage: '18.0% - 20.0%' },
      { element: 'Nickel (Ni)', percentage: '8.0% - 11.0%' },
      { element: 'Molybdenum (Mo)', percentage: '2.0% - 3.0%' },
      { element: 'Carbon (C)', percentage: '0.03% Max' }
    ],
    imageUrl: '/photo/pipes.jpg',
    seoAlt: 'Hospira Steel Stainless and Carbon Steel Pipes and Tubes Manufacturer in Visakhapatnam and Andhra Pradesh'
  },
  {
    id: 'sheets',
    name: 'Stainless Steel Sheets & Plates',
    category: 'austenitic',
    categoryLabel: 'Austenitic Stainless Steel',
    grade: 'SS 304, 304L, 309, 310, 316, 316L, 316Ti, 321, 904L',
    description: 'High-quality hot & cold-rolled plates, coils, and sheets, including Jindal plate sheets.',
    availableForms: [
      'Jindal Plat Sheet',
      'Cold Rolled 2B & Bright Annealed (BA) Sheet',
      'No.4 Hairline & 8K Mirror Finish Plate',
      'Nickel, Monel, Inconel (800 / 825 / 600 / 625), Hastelloy Alloy 20, Duplex',
      'Stainless Coils & Plates',
      'SS PVD Coating Partition & Glass Railing work'
    ],
    thicknessRange: '0.3mm to 75mm',
    width: '1000mm, 1219mm, 1500mm, 2000mm, Custom Coils',
    length: '2000mm to 6000mm, Custom Coils',
    certifications: ['ASTM A240 / ASME SA240', 'EN 10204 3.1 MTC', 'NABL Lab Certified', 'ISO 9001:2008 & BS EN ISO 9001 2008'],
    longDescription: 'Our high-performance sheets and plates (such as Jindal Plat Sheets) are available in a range of finishes and sizes. We stock premium materials including SS 304, 309, 310, 316, 316L, 316Ti, 321, Nickel, Monel, Inconel, and Duplex to serve severe industrial and architectural applications.',
    keyApplications: ['Home SS PVD coating partition glass railings', 'Industrial tanks & pressure vessels', 'Chemical storage & marine lining', 'Kitchenware & catering decoration', 'Defence and mechanical fabrications'],
    composition: [
      { element: 'Chromium (Cr)', percentage: '16.0% - 20.0%' },
      { element: 'Nickel (Ni)', percentage: '8.0% - 15.0%' },
      { element: 'Molybdenum (Mo)', percentage: '2.0% - 3.0%' },
      { element: 'Titanium (Ti)', percentage: '0.70% Max' }
    ],
    imageUrl: '/photo/SHEETS.jpg',
    seoAlt: 'Premium Stainless Steel Sheet and Hot Rolled Plates Stockist'
  },
  {
    id: 'buttweld-fittings',
    name: 'Stainless Steel Buttweld Fittings',
    category: 'austenitic',
    categoryLabel: 'Austenitic Stainless Steel',
    grade: 'ASTM A403 WP 304/304L/304H/316/316L/317/317L/321/310/347/904L etc.',
    description: 'Certified seamless & welded SS, Carbon, and Alloy buttweld elbows, tees, reducers, and pipe caps.',
    availableForms: [
      'Stainless Steel: ASTM A403 WP 304/304L/304H/316/316L/317/317L/321/310/347/904L etc.',
      'Carbon Steel: ASTM A234 WPB / A420 WPL3 / A420 WPL6, MSS SP75 WPHY 42/46/52/56/60/65/70',
      'Alloy Steel: ASTM A234 WP1/WP5/WP9/WP11/WP22/WP91 etc.',
      'Monel, Nickel, Inconel, Hastalloy, Copper, Brass, Bronze, Titanium, Tantalum, Bismuth, Aluminium, Zinc, Lead etc.',
      'Elbow (90° / 45°), Tee (Equal & Reducing), Reducer (Concentric & Eccentric), Return Bends, Stub-Ends, Cap, Collar, Cross, Insert'
    ],
    thicknessRange: 'Sch.5S to Sch. XXS',
    width: '1/4" NB to 48" NB (Seamless & Welded)',
    length: 'Standard ASME B16.9 / MSS SP75 Dimensions',
    certifications: ['ASME B16.9 / ASTM A403', 'EN 10204 3.1 MTC', 'ISO 9001:2008 & BS EN ISO 9001 2008', 'TUV / NABCB / CARES / UKAS Approved'],
    longDescription: 'High-strength buttweld fittings produced under international ASME/ASTM quality standards. Suitable for high-pressure piping assemblies and process networks where maximum connection reliability is critical.',
    keyApplications: ['Refineries & steam lines', 'Offshore oil & gas transport', 'Water treatment & chemical loops', 'Nuclear power & process engineering'],
    composition: [
      { element: 'Chromium (Cr)', percentage: '16.0% - 18.0%' },
      { element: 'Nickel (Ni)', percentage: '10.0% - 14.0%' },
      { element: 'Molybdenum (Mo)', percentage: '2.0% - 3.0%' }
    ],
    imageUrl: '/Buttweld Fittings/types.webp',
    seoAlt: 'Stainless steel bend elbow reducer tee nipple union socket coupling buttweld fitting'
  },
  {
    id: 'threaded-forged-fittings',
    name: 'Screwed & Forged Fittings',
    category: 'austenitic',
    categoryLabel: 'Austenitic Stainless Steel',
    grade: 'ASTM A182 F304/304L/304H/316/316L/317/317L/321/310/347/904L etc.',
    description: 'High-pressure screwed and socketweld forged fittings, elbows, unions, tees, and plugs.',
    availableForms: [
      'Stainless Steel: ASTM A182 F304/304L/304H/316/316L/317/317L/321/310/347/904L etc.',
      'Carbon & Alloy Steel: ASTM A182 F1/F5/F9/F11/F22/F91 etc.',
      'Other Materials: Monel, Nickel, Inconel, Hastalloy, Copper, Brass, Bronze, Titanium, Tantalum, Bismuth, Aluminium, Zinc, Lead etc.',
      'Elbow, Tee, Union, Cross, Coupling, Cap, Bushing, Plug, Swage, Nipple, Welding Boss, Hexagon Nut, Hose Nipple, Bend, Adapter Insert, Weldot, Elbownet, Sockolet, Threadolet, Nickel Letrolet'
    ],
    thicknessRange: 'Class 3000#, 6000#, 9000#',
    width: '1/4" NB to 4" NB (Socketweld & Threaded)',
    length: 'Standard ASME B16.11 Dimensions',
    certifications: ['ASME B16.11 / ASTM A182', 'NACE MR0175 Compliance', 'EN 10204 3.1 MTC', 'ISO 9001:2008 & BS EN ISO 9001 2008'],
    longDescription: 'High-pressure screwed & forged fittings manufactured from solid forgings. These components are designed to withstand extreme hydraulic loads, mechanical vibration, and corrosive processing environments across various industrial pipelines.',
    keyApplications: ['Hydraulic control loops', 'High-velocity steam lines', 'Offshore oil platforms', 'Marine cooling systems', 'Chemical and refinery pipe networks'],
    composition: [
      { element: 'Chromium (Cr)', percentage: '16.0% - 18.0%' },
      { element: 'Nickel (Ni)', percentage: '10.0% - 14.0%' },
      { element: 'Molybdenum (Mo)', percentage: '2.0% - 3.0%' }
    ],
    imageUrl: '/photo/Threaded Forged Fittings.jpg',
    seoAlt: 'Precision stainless steel nut bolt fastener and high pressure forged socket fittings'
  },
  {
    id: 'socket-weld-fittings',
    name: 'Precision SS Nut, Bolt & Fasteners',
    category: 'austenitic',
    categoryLabel: 'Austenitic Stainless Steel',
    grade: 'Nickel Base Alloys, SS & High Tensile Alloys',
    description: 'High-grade stainless steel, Monel, Inconel, and Hastelloy nuts, bolts, and custom fasteners.',
    availableForms: [
      'SS Nut & Bolts',
      'Nickel Base Alloy Fasteners (Monel / Inconel / Hastalloy etc.)',
      'Titanium & Specialized Metal Fasteners',
      'Hex Bolts, Stud Bolts, Threaded Rods, Washers, Dome Nuts, Eye Bolts'
    ],
    thicknessRange: 'Full Range of Metric & Imperial Threads',
    width: '1/8" to 4" Nominal Diameter',
    length: 'As per Custom Architectural or Structural Drawing',
    certifications: ['ASME B18.2.1 / ASTM A193', 'EN 10204 3.1 MTC', 'ISO 9001:2008 Certified'],
    longDescription: 'Heavy-duty industrial fasteners and custom SS nut and bolt sets engineered to resist corrosive atmospheres, sea breeze degradation, and high mechanical fatigue in infrastructure and marine vessels.',
    keyApplications: ['Structural marine assembly', 'High-stress chemical reactors', 'Architectural glazing and glass railing structures', 'Industrial engine and pump casing'],
    composition: [
      { element: 'Nickel (Ni)', percentage: 'Balance' },
      { element: 'Chromium (Cr)', percentage: '15.0% - 22.0%' },
      { element: 'Molybdenum (Mo)', percentage: '3.0% - 9.0%' }
    ],
    imageUrl: '/photo/Socket Weld Fittings.jpg',
    seoAlt: 'Heavy duty socket weld elbows, unions, and tees for high-strength steel industrial piping'
  },
  {
    id: 'flanges',
    name: 'Stainless Steel Flanges',
    category: 'austenitic',
    categoryLabel: 'Austenitic Stainless Steel',
    grade: 'ASTM A182 F304/304L/304H/316/316L/317/317L/321/310/347/904L etc.',
    description: 'Forged stainless steel, carbon steel, and alloy steel flanges in all primary structural designs.',
    availableForms: [
      'Stainless Steel: ASTM A182 F304/304L/304H/316/316L/317/317L/321/310/347/904L etc.',
      'Carbon Steel: ASTM A105 / A694 F42 / 46 / 52 / 56 / 60 / 65 / 70 / A350 LF3 / A650 LF2 etc.',
      'Alloy Steel: ASTM A182 F1/F5/F9/F11/F22/F91 etc.',
      'Others: Monel, Nickel, Inconel, Hastalloy, Copper, Brass, Bronze, Titanium, Tantalum, Bismuth, Aluminium, High Speed Steel, Zinc, Lead etc.',
      'Weldneck, Slipon, Blind, Socket Weld, Lap Joint, Spectacles, Ring Joint, Orifice, Long Weldneck, DeckFlange etc.'
    ],
    thicknessRange: 'Class 150#, 300#, 600#, 900#, 1500#, 2500# / Table D, E, F, H',
    width: '1/2" NB to 60" NB',
    length: 'Standard ASME B16.5 / B16.47 / EN 1092-1 Dimensions',
    certifications: ['ASME B16.5 / EN 1092-1 / ISO 9001:2008', 'EN 10204 3.1 MTC', 'NABL Lab Certified', 'TUV / NABCB Approved'],
    longDescription: 'Forged from premier raw billet stock, our high-durability flanges offer absolute alignment security and zero-leak performance under maximum working pressure and extreme temperatures.',
    keyApplications: ['Petrochemical transport pipelines', 'Shipbuilding and marine hull connections', 'Water reservoir reservoirs & treatment plants', 'Defence & aerospace fuel lines'],
    composition: [
      { element: 'Chromium (Cr)', percentage: '18.0% - 20.0%' },
      { element: 'Nickel (Ni)', percentage: '8.0% - 11.0%' },
      { element: 'Molybdenum (Mo)', percentage: '2.0% - 3.0%' }
    ],
    imageUrl: '/Flanges/Forged Flanges.jpeg',
    seoAlt: 'Stainless steel flange in slip-on, weld-neck, blind and lap joint types'
  },
  {
    id: 'astm-pipes-tubes',
    name: 'ASTM Stainless Pipes & Tubes',
    category: 'duplex',
    categoryLabel: 'Duplex & Super Duplex Steel',
    grade: 'ASTM A789 / A790 UNS S31803 / S32205',
    description: 'High-alloy duplex stainless steel seamless and welded pipes offering supreme chloride pitting and stress corrosion cracking resistance.',
    availableForms: [
      'Duplex Seamless Pipe',
      'Duplex Welded Tubing',
      'Super Duplex UNS S32750 Pipe',
      'Heat Exchanger U-Tubes',
      'Instrumentation Tubing'
    ],
    thicknessRange: 'SCH 10S, SCH 40S, SCH 80S',
    width: '1/8" to 12" Nominal Size',
    length: '6000mm to 12000mm',
    certifications: ['ASTM A790 / ASME SA790', 'ASTM A789 / ASME SA789', 'NACE MR0175 Approved', 'EN 10204 3.1 MTC'],
    longDescription: 'Combining both austenitic and ferritic grain structures, duplex stainless steel pipes offer double the yield strength of standard austenitic grades along with superior resistance to localized corrosion, making them perfect for marine use.',
    keyApplications: ['Marine vessel cargo tanks', 'Offshore oil and gas lines', 'Seawater desalination plants', 'High-chloride chemical reactors'],
    composition: [
      { element: 'Chromium (Cr)', percentage: '21.0% - 23.0%' },
      { element: 'Nickel (Ni)', percentage: '4.5% - 6.5%' },
      { element: 'Molybdenum (Mo)', percentage: '2.5% - 3.5%' },
      { element: 'Nitrogen (N)', percentage: '0.08% - 0.20%' }
    ],
    imageUrl: '/photo/ASTM Pipes & Tubes_converted.jpg',
    seoAlt: 'Jindal stainless steel pipe, ASTM ERW seamless steel pipes and tubes'
  },
  {
    id: 'electroplish-pipes-tubes',
    name: 'Sanitary Electropolished Tubes',
    category: 'austenitic',
    categoryLabel: 'Austenitic Stainless Steel',
    grade: 'ASTM A270 Grade TP316L SF4',
    description: 'Ultra-smooth electropolished stainless steel tubing designed for high-purity biotech, pharma, and semiconductor systems.',
    availableForms: [
      'Electropolished Seamless Tubing',
      'ASME BPE Sanitary Tube',
      'SF4 Mirror Polish Tubing',
      'Ultra-Pure Gas Delivery Lines'
    ],
    thicknessRange: '1.0mm to 3.0mm Wall Thickness',
    width: '1/2" to 6" Outer Diameter',
    length: '6 Meters / 20 Feet Standard',
    certifications: ['ASTM A270 / ASME BPE SF4', '3-A Sanitary Standards', 'USP Class VI Approved', 'FDA Food-Grade'],
    longDescription: 'Subjected to advanced electrochemical surface polishing, our electropolished tubes reach a maximum surface roughness (Ra) of under 0.38 microns, completely preventing chemical residue and bacterial adhesion.',
    keyApplications: ['Semiconductor gas conduits', 'Pharmaceutical manufacturing loops', 'Biotechnical process equipment', 'Ultra-pure water networks'],
    composition: [
      { element: 'Chromium (Cr)', percentage: '16.0% - 18.0%' },
      { element: 'Nickel (Ni)', percentage: '10.0% - 14.0%' },
      { element: 'Molybdenum (Mo)', percentage: '2.0% - 3.0%' },
      { element: 'Carbon (C)', percentage: '0.03% Max' }
    ],
    imageUrl: '/photo/electroplish pipes & tubes.jpg',
    seoAlt: 'High-purity electropolished ss pipes and sanitary tubing for biopharma'
  },
  {
    id: 'wires',
    name: 'Stainless Steel Wires & Coils',
    category: 'ferritic',
    categoryLabel: 'Ferritic & Martensitic SS',
    grade: 'ASTM A580 SS 304 / 316 / 410',
    description: 'High-tensile stainless steel wire coils designed for spring manufacturing, mesh weaving, cold-heading, and lashing applications.',
    availableForms: [
      'SS Spring Wire',
      'SS Cold Heading Wire',
      'Annealed Lashing Wire',
      'SS Fine Weaving Wire',
      'SS Bright Coil Wire'
    ],
    thicknessRange: '0.1mm to 12.0mm Diameter',
    width: 'Precision Coiled Reels',
    length: 'Custom Spools up to 5000m',
    certifications: ['ASTM A580 Standard', 'RoHS Compliant', 'ISO 9001:2015'],
    longDescription: 'Our stainless steel wires offer precise dimensional tolerances, high strength, and exceptional corrosion resistance. Designed to feed automatic spring machines and weaving systems without jamming or fracturing.',
    keyApplications: ['Heavy-duty compression springs', 'Industrial wire mesh screens', 'Aerospace locking wires', 'Marine cage wiring', 'Stainless steel fasteners'],
    composition: [
      { element: 'Chromium (Cr)', percentage: '11.5% - 13.5%' },
      { element: 'Manganese (Mn)', percentage: '1.00% Max' },
      { element: 'Carbon (C)', percentage: '0.15% Max' },
      { element: 'Silicon (Si)', percentage: '1.00% Max' }
    ],
    imageUrl: '/Wires/Coil Wire.jpeg',
    seoAlt: 'High tensile spring wire and premium copper coil wires'
  },
  {
    id: 'valves',
    name: 'Industrial Valves',
    category: 'austenitic',
    categoryLabel: 'Austenitic Stainless Steel',
    grade: 'Cast SS, Carbon Steel, Cast Iron & Special Alloys',
    description: 'Elite quality gate, globe, ball, check, and safety valves in BS, ASME, DIN, and API specifications.',
    availableForms: [
      'Globe Valve: BS 5352 / BS 6755 / BS 1873, ASME B13.34, DIN 3356 (Sizes: 15mm to 400mm)',
      'Gate Valve: Bar Stock Forged & Cast (Sizes: 8mm to 600mm, Rating: 150# / 300# / 800# / 1500#)',
      'Non Return Valve (Check Valve): BS 6755 / BS 1868 / DIN Standard (Sizes: 8mm to 600mm)',
      'Butterfly Valve: API 609 / BS 5155 / BS 13095 (Cast Iron & Cast Carbon Steel, Sizes: 40mm to 1200mm)',
      'Spherical Disc Valve & Strainers (Y-Type, Pot Type, T-Type, Dirt Box, Sizes: 15mm to 300mm)',
      'DIN Globe Valve & DIN Non Return Valve (Rating: PN10 / PN16 / PN40 / PN64)',
      'Knife Gate Valve, Wafer Type Check Valve, Investment Casting Ball/Gate/Globe Valve',
      'Pulp Valve, Forged Ball Valve (1PC / 2PC / 3PC, Sizes: 15mm to 400mm)',
      'Investment Casting Steam Trap, Diaphragm Valve, Spring Loaded Bolted Bonnet Safety Valve'
    ],
    thicknessRange: 'Class 150#, 300#, 800#, 1500# / PN10, PN16, PN40, PN64',
    width: '8mm to 1200mm Nominal Bore',
    length: 'Standard ASME B16.10 / DIN / API Face-to-Face Dimensions',
    certifications: ['API 6D / API 600 / API 609', 'BS 5352 / BS 6755 / BS 1873 / BS 1868', 'ISO 9001:2008 & BS EN ISO 9001 2008', 'TUV / NABCB Approved'],
    longDescription: 'Our comprehensive range of industrial valves is engineered for optimal performance under the most grueling pressures and aggressive chemical or abrasive fluids. We supply gate, globe, ball, check, diaphragm, and safety valves manufactured from certified materials such as Stainless Steel, Cast Carbon Steel, Cast Iron, and high-purity Nickel Alloys.',
    keyApplications: ['Petrochemical refinery flow loops', 'Offshore oil & gas transport manifolds', 'Hydraulic gas and steam lines', 'Mining, slurry transport, and pulp mills', 'Power plants and water distribution grids'],
    composition: [
      { element: 'Chromium (Cr)', percentage: '18.0% - 20.0%' },
      { element: 'Nickel (Ni)', percentage: '9.0% - 13.0%' },
      { element: 'Molybdenum (Mo)', percentage: '2.0% - 3.0%' }
    ],
    imageUrl: '/photo/valves.jpg',
    seoAlt: 'Industrial stainless steel valve including gate, globe, and check valves'
  },
  {
    id: 'tubes',
    name: 'Precision Stainless Steel Tubes',
    category: 'specialty',
    categoryLabel: 'Precipitation Hardening & Specialty SS',
    grade: 'ASTM A213 / A269 TP316L / TP321 / 17-4 PH',
    description: 'Seamless high-accuracy stainless steel instrumentation, heat-exchanger, and hydraulic tubing built for extreme stability.',
    availableForms: [
      'Seamless SS Hydraulic Tubing',
      'ASTM A269 Bright Annealed Tube',
      'High-Pressure Gas Conduit',
      'Capillary SS Tubing',
      'Heat Exchanger U-Tube'
    ],
    thicknessRange: '0.5mm to 6.0mm Wall Thickness',
    width: '6.0mm to 76.2mm Outer Diameter',
    length: '6000mm Standard, Coiled Formats',
    certifications: ['ASTM A213 / ASME SA213', 'ASTM A269 Approved', 'EN 10204 3.1 MTC', 'ABS approved'],
    longDescription: 'Precision cold-drawn and bright-annealed stainless steel tubing offers incredibly tight tolerances and clean surfaces to handle high mechanical stress and intense pressures in sub-sea, aerospace, and medical utilities.',
    keyApplications: ['Hydraulic control systems', 'Aircraft fuel conduits', 'Offshore chemical injection tubes', 'Industrial heat exchangers', 'Medical apparatus components'],
    composition: [
      { element: 'Chromium (Cr)', percentage: '15.0% - 17.5%' },
      { element: 'Nickel (Ni)', percentage: '3.0% - 5.0%' },
      { element: 'Copper (Cu)', percentage: '3.0% - 5.0%' },
      { element: 'Niobium (Nb) + Ta', percentage: '0.15% - 0.45%' }
    ],
    imageUrl: '/photo/tubes.jpg',
    seoAlt: 'Structural aerospace and marine grade stainless steel tube and coiled tubing'
  },
  {
    id: 'nipple',
    name: 'Stainless Steel Nipples & Fittings',
    category: 'austenitic',
    categoryLabel: 'Austenitic Stainless Steel',
    grade: 'ASTM A733 SS 304 / 316L',
    description: 'Precision-machined threaded stainless steel barrel, hexagonal, and welded connection nipples for secure, leak-proof joints.',
    availableForms: [
      'SS Barrel Nipple',
      'SS Hex Nipple',
      'SS Reducing Hex Nipple',
      'SS Welding Nipple',
      'SS Close Nipple',
      'SS TOE and TBE Nipple'
    ],
    thicknessRange: 'Sch 10S, Sch 40S, Sch 80S',
    width: '1/8" to 4" Nominal Thread Size',
    length: '1" to 12" Standard, Custom Sizing',
    certifications: ['ASTM A733 Standards', 'ASME B1.20.1 NPT Thread', 'RoHS Compliant'],
    longDescription: 'Our threaded nipples are precision-turned from heavy stainless steel pipes and bars. Featuring clean-cut, taper NPT or BSP threads to ensure tight, metal-to-metal seals in sanitary water or chemical piping.',
    keyApplications: ['Industrial manifold connections', 'Pneumatic flow lines', 'Sanitary piping branch points', 'Chemical process connections'],
    composition: [
      { element: 'Chromium (Cr)', percentage: '16.0% - 18.0%' },
      { element: 'Nickel (Ni)', percentage: '10.0% - 14.0%' },
      { element: 'Molybdenum (Mo)', percentage: '2.0% - 3.0%' }
    ],
    imageUrl: '/photo/Nipple.jpg',
    seoAlt: 'Hex and barrel nipples, brass fittings, and threaded connection couplers'
  }
];

