import { useEffect, useState, useRef } from 'react';
import { ChevronRight, ArrowLeft, ShieldCheck, HelpCircle, FileText, FileSpreadsheet, Award } from 'lucide-react';
import gsap from 'gsap';
import { PRODUCTS } from '../data';
import { Product } from '../types';

interface ProductDetailProps {
  productId: string;
  onNavigate: (path: string) => void;
  onQuotePreFill: (metalType: string, form: string) => void;
}

const SPEC_SHEETS: Record<string, {
  title: string;
  subtitle: string;
  boxes: Array<{
    title: string;
    isRed: boolean;
    items: string[];
  }>;
}> = {
  pipes: {
    title: "Steel Pipe Specification",
    subtitle: "Detailed metallurgy, sizing, standards, and manufacturing types",
    boxes: [
      {
        title: "Standard Specification Of Steel Pipes",
        isRed: true,
        items: ["ASME B36.10M / ASME B36.10", "BS EN 10204", "ASME B36.19 / ASME B36.19M"]
      },
      {
        title: "Manufacturing Type",
        isRed: false,
        items: ["Seamless", "Welded", "ERW"]
      },
      {
        title: "Schedule & Wall Thickness",
        isRed: true,
        items: ["Sch 5, 10, 40, 60", "80, 120, 160, STD", "Sch XS, XXS"]
      },
      {
        title: "Steel Pipe Types",
        isRed: false,
        items: ["Square", "Round", "Rectangular"]
      },
      {
        title: "Applications",
        isRed: true,
        items: ["Power plants", "Food and beverage", "Aerospace"]
      },
      {
        title: "Length Of Pipe",
        isRed: false,
        items: ["Single Random", "Double Random", "Cut-to-Length"]
      }
    ]
  },
  tubes: {
    title: "Steel Tube Specification",
    subtitle: "Detailed dimensions, processing options, and high-performance standards",
    boxes: [
      {
        title: "Standard",
        isRed: true,
        items: ["ASTM A269", "ASTM A249", "ASTM A789"]
      },
      {
        title: "Processing Service",
        isRed: false,
        items: ["Cutting", "Bending", "Welding"]
      },
      {
        title: "Specifications",
        isRed: true,
        items: [
          "Length up to 20 Meter",
          "Thickness - 0.5 To 5 mm",
          "Size Range - 6.53 to 127 mm",
          "End - Beveled End, Plain End, Threaded"
        ]
      },
      {
        title: "Steel Tube Other Specs",
        isRed: false,
        items: [
          "1.25 x Outer Diameter up to 1700mm",
          "Steel Tube Turbulence - +/-0.05 Mm"
        ]
      }
    ]
  },
  "astm-pipes-tubes": {
    title: "ASTM Pipe Standards",
    subtitle: "Standardized dimensional specifications for seamless and welded piping",
    boxes: [
      {
        title: "ASTM Seamless Pipe",
        isRed: true,
        items: ["Size 1/8\" to 24\"", "Length: 6m to 12m"]
      },
      {
        title: "ASTM Welded Pipe",
        isRed: false,
        items: ["Size: 1/8\" to 48\"", "Length: 6m to 12m"]
      },
      {
        title: "ASTM ERW Pipe",
        isRed: true,
        items: ["Size: 1/8\" to 24\"", "Length: 6m to 12m"]
      }
    ]
  },
  "electroplish-pipes-tubes": {
    title: "Electropolish Stainless Steel Pipe Specification",
    subtitle: "Ultra-clean and sterile tubing with flawless micro-smooth specifications",
    boxes: [
      {
        title: "Nominal Bore (NB)",
        isRed: true,
        items: ["1/8\" NB to 24\" NB"]
      },
      {
        title: "Outer Diameter (OD)",
        isRed: false,
        items: ["1/4\" OD to 24\" OD"]
      },
      {
        title: "Length",
        isRed: true,
        items: ["Up to 6 meters"]
      },
      {
        title: "Types",
        isRed: false,
        items: ["Round", "Square", "Rectangular"]
      },
      {
        title: "Thickness",
        isRed: false,
        items: [
          "1mm to 20mm",
          "SCH 5/5S, 10/10S",
          "20/20S, 40/40S"
        ]
      }
    ]
  },
  "buttweld-fittings": {
    title: "Pipe Fittings Specification",
    subtitle: "Heavy industry dimensions, grade certifications, and coating properties",
    boxes: [
      {
        title: "Size in Ready Stock",
        isRed: true,
        items: [
          "Welded : 24\" To 96\"",
          "Seamless : 1/2\" To 24\"",
          "Buttweld : 1/2\" To 36\""
        ]
      },
      {
        title: "Available Machines",
        isRed: false,
        items: ["CNC", "Beveling Machine", "Conventional Machine"]
      },
      {
        title: "Common Thickness",
        isRed: true,
        items: [
          "Schedule 20 & 40",
          "Schedule : 80 To 120",
          "Schedule : 160 To 180"
        ]
      },
      {
        title: "American Standard",
        isRed: false,
        items: ["ASME B16.9", "ASME B16.28", "DIN/ JIS/ EN/ ISO"]
      },
      {
        title: "Types Of Coating",
        isRed: false,
        items: [
          "Anti rust",
          "Back painting",
          "Zinc coatings",
          "PE/ PTFE/ FBE coating"
        ]
      }
    ]
  },
  "threaded-forged-fittings": {
    title: "Forged Steel Fittings Specification",
    subtitle: "High pressure threaded and forged fitting class tolerances and connection dimensions",
    boxes: [
      {
        title: "Grade",
        isRed: true,
        items: ["ASME B16.11"]
      },
      {
        title: "Sizes",
        isRed: false,
        items: ["DN8 to DN100 (1/4\" to 4\")"]
      },
      {
        title: "Pressure Classes",
        isRed: true,
        items: ["2000, 3000, 6000, and 9000 psi"]
      },
      {
        title: "Standards",
        isRed: false,
        items: ["ASME B16.11, ANSI B16.9, MSS-SP-97"]
      },
      {
        title: "Connection Types",
        isRed: false,
        items: ["Threaded (NPT/BSP), Socket Weld"]
      },
      {
        title: "Thread Types",
        isRed: true,
        items: ["NPT, BSP, and Metric"]
      },
      {
        title: "Temperature Range",
        isRed: true,
        items: ["-29°C to 427°C (-20°F to 800°F)"]
      },
      {
        title: "Surface Finish",
        isRed: false,
        items: ["Black, Galvanized, or Custom Coatings"]
      }
    ]
  },
  "socket-weld-fittings": {
    title: "Socket Weld Fittings Specification",
    subtitle: "Precision forged socket weld joint pressure ratings and thermal specifications",
    boxes: [
      {
        title: "Grade",
        isRed: true,
        items: ["ASME B16.11"]
      },
      {
        title: "Sizes",
        isRed: false,
        items: ["SW: 1/2\" to 4\""]
      },
      {
        title: "Pressure Classes",
        isRed: true,
        items: ["3000, 6000, and 9000 psi"]
      },
      {
        title: "Standards",
        isRed: false,
        items: ["ASME B16.11, ANSI B16.9, MSS-SP-97"]
      },
      {
        title: "Finish Types",
        isRed: false,
        items: ["Smooth Finish", "Polished Finish"]
      },
      {
        title: "Temperature Range",
        isRed: true,
        items: ["425-860°C"]
      }
    ]
  },
  nipple: {
    title: "Nipple Specification",
    subtitle: "Precision threaded nipple sizes, pitch thread standards, and pressure ratings",
    boxes: [
      {
        title: "Sizes",
        isRed: false,
        items: ["1/8\" to 4\" (NPS)"]
      },
      {
        title: "Length",
        isRed: true,
        items: ["50 mm – 300 mm (Customizable)"]
      },
      {
        title: "Thread Pitch",
        isRed: false,
        items: ["0.75 mm – 2.5 mm (Varies by size)"]
      },
      {
        title: "Thread Types",
        isRed: false,
        items: ["NPT", "BSP", "BSPT"]
      },
      {
        title: "Pressure Ratings",
        isRed: true,
        items: ["Class 3000", "Class 6000", "Class 9000"]
      },
      {
        title: "End Type",
        isRed: true,
        items: ["Threaded Ends", "Plain Ends", "Beveled Ends"]
      }
    ]
  },
  flanges: {
    title: "Flange Specification",
    subtitle: "High-grade industrial pipe connection flange dimensions and pressure standards",
    boxes: [
      {
        title: "Sizes",
        isRed: false,
        items: ["DN15 to DN1500", "NPS: 1/2\" to 24\""]
      },
      {
        title: "Schedule",
        isRed: true,
        items: ["SCH 10/20/40", "SCH 80/100/120"]
      },
      {
        title: "Pressure Class",
        isRed: false,
        items: ["150/ 300/", "600/900", "1500/2500"]
      },
      {
        title: "Standards",
        isRed: false,
        items: ["ASME B16.5", "ASME B16.47", "ASME B16.48"]
      },
      {
        title: "Flange Finishing",
        isRed: true,
        items: ["Stock & Smooth", "Spiral Serrated", "Mirror Finish"]
      },
      {
        title: "Thread Types",
        isRed: true,
        items: ["NPT", "BSP", "BSPT"]
      }
    ]
  },
  wires: {
    title: "Steel Wire Specification",
    subtitle: "High tensile steel and alloy wire dimensions and coating strengths",
    boxes: [
      {
        title: "Wire Diameter",
        isRed: false,
        items: ["0.20-9 mm"]
      },
      {
        title: "Tensile Strength",
        isRed: true,
        items: ["40-85 kg/mm 2"]
      },
      {
        title: "Surface Strength",
        isRed: false,
        items: ["Hot Dipped Galvanized, Electro Galvanized."]
      }
    ]
  },
  sheets: {
    title: "Steel Plate Specification",
    subtitle: "Industrial grade heavy duty steel and alloy plates manufacturing thickness and finishes",
    boxes: [
      {
        title: "Thickness Size",
        isRed: false,
        items: ["3mm to 1200mm"]
      },
      {
        title: "Manufacturing Method",
        isRed: true,
        items: ["Hot Rolled & Cold Rolled"]
      },
      {
        title: "Surface Treatments",
        isRed: true,
        items: ["Oiled & unoiled"]
      },
      {
        title: "Surface Finishes & Center Roughness",
        isRed: false,
        items: ["Extra smooth, smooth, matte, rough"]
      }
    ]
  },
  valves: {
    title: "Industrial Valve Specification",
    subtitle: "Precision flow control solutions, design standards, pressure classes and dimensions",
    boxes: [
      {
        title: "Valve Types",
        isRed: true,
        items: ["Gate Valve", "Globe Valve", "Ball Valve", "Check Valve", "Butterfly Valve"]
      },
      {
        title: "Sizes Available",
        isRed: false,
        items: ["DN50 to DN600 (2\" to 24\")"]
      },
      {
        title: "Pressure Ratings",
        isRed: true,
        items: ["Class 125, Class 150", "PN10, PN16, PN25"]
      },
      {
        title: "Design Standards",
        isRed: false,
        items: ["API 600 / API 6D", "ASME B16.34", "BS EN 593"]
      },
      {
        title: "Testing & Inspection",
        isRed: true,
        items: ["API 598 (Leakage-free Test)", "ISO 5208"]
      },
      {
        title: "End Connections",
        isRed: false,
        items: ["Flanged Ends (RF, FF, RTJ)", "Threaded / Socket Weld"]
      }
    ]
  }
};

const GALLERY_TITLES: Record<string, string> = {
  pipes: "Types Of Steel Pipes",
  tubes: "Types Of Steel Tubes",
  "astm-pipes-tubes": "Types Of ASTM Pipes",
  "electroplish-pipes-tubes": "Types Of Electropolish Stainless Steel Pipe",
  "buttweld-fittings": "Pipe Fitting Types",
  "threaded-forged-fittings": "Forged Pipe Fitting Types",
  "socket-weld-fittings": "Socket Weld Fitting Types",
  sheets: "Types Of Steel Plates & Sheets",
  flanges: "Types Of Flanges",
  wires: "Types Of Wires & Coils",
  valves: "Types Of Industrial Valves",
  nipple: "Types Of Pipe Nipples"
};

const PRODUCT_TYPES_DATA: Record<string, Array<{ name: string; image: string; alt?: string }>> = {
  pipes: [
    { name: "Black Steel Pipes", image: "/Pipes/Black iron pipe.jpg", alt: "Black Steel Pipes - Heavy duty carbon steel industrial piping solutions" },
    { name: "Cold Rolled Steel Pipe", image: "/Pipes/Cold Rolled pipes.jpg", alt: "Cold rolled black carbon steel pipe with smooth outer finish" },
    { name: "Hot Rolled Steel Pipe", image: "/Pipes/Hot Rolled Seamless pipe.jpg", alt: "Hot rolled black steel welded pipe optimized for high load resistance" },
    { name: "Schedule 40 Steel Pipe", image: "/Pipes/Schedule 40 Pipes.png", alt: "Heavy duty black steel pipe – schedule 40 standard thickness size" },
    { name: "Seamless Pipe", image: "/Pipes/Hot Rolled Seamless pipe.jpg", alt: "Certified black steel pipe – seamless structural metal piping" },
    { name: "Welded Pipe", image: "/Pipes/Welded Pipe.jpeg", alt: "Industrial ERW black steel pipe for high-pressure fluid conveyance" }
  ],
  tubes: [
    { name: "Seamless Tubes", image: "/Tubes/Seamless Tubes.jpg", alt: "Precision black steel round tube for critical engineering projects" },
    { name: "Welded Tube", image: "/Tubes/Welded Tube.jpg", alt: "Robust black square steel pipe manufactured for framework systems" },
    { name: "Annealed Tube", image: "/Tubes/Annealed Tube.jpg", alt: "High quality black rectangular steel tube for architectural components" },
    { name: "Bright Annealed Tube", image: "/Tubes/Bright Annealed Tube.jpg", alt: "Bright annealed black iron pipe designed for clean plumbing loops" },
    { name: "Coiled Tubing", image: "/Tubes/Coiled Tubing.jpg", alt: "Bundle of black steel pipes in long coiled formats" },
    { name: "Precision Tubes", image: "/Tubes/Precision Tubes.jpg", alt: "Seamless black steel round pipe machined with precision tolerance" },
    { name: "Mechanical Tubing", image: "/Tubes/Mechanical Tubing.jpg", alt: "Structural black steel pipe for construction and equipment fabrication" },
    { name: "Condenser Tubes", image: "/Tubes/Condenser Tubes.png", alt: "Heavy duty black steel pipe for fire sprinkler systems and heat exchange" },
    { name: "Heat Exchanger Tube", image: "/Tubes/Heat Exchanger Tube.png", alt: "High performance black steel pipe for industrial piping applications" },
    { name: "Boiler Tube", image: "/Tubes/Boiler Tube.jpg", alt: "Specialized black steel pipe for plumbing and high temperature boilers" },
    { name: "Superheater Tubes", image: "/Tubes/Superheater Tubes.jpg", alt: "Durable black steel pipe for gas lines and pressure transmission" },
    { name: "Cold Drawn Tube", image: "/Tubes/Cold Drawn Tube.jpg", alt: "Cold drawn black steel tube designed for mechanical fabrication" },
    { name: "Hydraulic Tubing", image: "/Tubes/Hydraulic Tubing.jpg", alt: "High tensile black steel conduit pipe for hydraulic operations" }
  ],
  "astm-pipes-tubes": [
    { name: "Alloy Steel Pipes", image: "/ASTM Pipes & Tubes/Alloy Steel Pipes.jpeg", alt: "Premium alloy steel tube for severe industrial chemical environments" },
    { name: "ASTM ERW Pipe", image: "/ASTM Pipes & Tubes/ASTM ERW Pipe.jpeg", alt: "Certified ASTM A53 black steel pipe with welded seam design" },
    { name: "ASTM Seamless Pipe", image: "/ASTM Pipes & Tubes/ASTM Seamless Pipe.jpeg", alt: "ASTM certified black steel pipe for structural use and heavy load" },
    { name: "ASTM Welded Pipe", image: "/ASTM Pipes & Tubes/ASTM Welded Pipe.jpeg", alt: "ASTM welded steel pipes for national fluid distribution networks" },
    { name: "Carbon Steel Pipes", image: "/ASTM Pipes & Tubes/Carbon Steel Pipes.jpg", alt: "Black carbon steel pipe and ASTM standard piping elements" },
    { name: "ERW Pipe", image: "/ASTM Pipes & Tubes/ERW Pipe.jpeg", alt: "ERW black steel pipe designed for pipeline system integrations" },
    { name: "Lined and Clad Pipes", image: "/ASTM Pipes & Tubes/Lined and Clad Pipes.jpeg", alt: "Lined and clad steel tubes for extreme corrosive protection" },
    { name: "Seamless Steel Pipes", image: "/ASTM Pipes & Tubes/Seamless Steel Pipes.jpg", alt: "Sourcing certified seamless steel pipes from top global manufacturer" },
    { name: "Stainless Steel Pipes", image: "/ASTM Pipes & Tubes/Stainless Steel Pipes.webp", alt: "Jindal stainless steel pipe of grade Ss 304 316 310 321 317 309" },
    { name: "Welded Steel Pipes", image: "/ASTM Pipes & Tubes/Welded Steel Pipes.png", alt: "Welded steel pipes with custom gauge and diameter specifications" }
  ],
  "electroplish-pipes-tubes": [
    { name: "Electropolish Instrumentation Pipes", image: "/Electropolish Pipes & Tubes/Electropolish Instrumentation Pipes.jpeg", alt: "Precision black steel pipe fittings and accessories for instrumentation" },
    { name: "Electropolish Round Pipes", image: "/Electropolish Pipes & Tubes/Electropolish Round Pipes.webp", alt: "Electropolished stainless steel round tube for pharmaceutical pipelines" },
    { name: "Electropolish Seamless Pipes", image: "/Electropolish Pipes & Tubes/Electropolish Seamless Pipes.webp", alt: "Ultra smooth stainless steel pipe for sale in custom mirror finish" },
    { name: "Electropolish Square Pipes", image: "/Electropolish Pipes & Tubes/Electropolish Square Pipes.jpeg", alt: "Sanitary square steel pipes for cleanroom structural installations" },
    { name: "Electropolish Welded Pipes", image: "/Electropolish Pipes & Tubes/Electropolish Welded Pipes.jpeg", alt: "Electropolished welded stainless steel pipes for hygienic operations" },
    { name: "Electropolish Welded Tube", image: "/Electropolish Pipes & Tubes/Electropolish Welded Tube.jpeg", alt: "High purity electropolished stainless steel tube with sterile design" }
  ],
  "buttweld-fittings": [
    { name: "Buttweld Fittings", image: "/Buttweld Fittings/Buttweld Fittings.jpeg", alt: "ASME B16.9 Buttweld Fittings and Butt Weld Pipe Fittings by certified BW Fittings manufacturer" },
    { name: "Industrial Fittings", image: "/Buttweld Fittings/Industrial Fittings.webp", alt: "Industrial Buttweld Fittings - High Pressure Buttweld Fittings for Piping Systems" },
    { name: "Seamless Fittings", image: "/Buttweld Fittings/Seamless Fittings.jpeg", alt: "Carbon Steel and Stainless Steel Buttweld Fittings, Seamless Buttweld Fittings supplier" },
    { name: "Buttweld Fitting Types", image: "/Buttweld Fittings/types.webp", alt: "Buttweld Fitting Types - Butt Welded Steel Fittings including Buttweld Elbow Tee Reducer Cap assortment" }
  ],
  "threaded-forged-fittings": [
    { name: "Forged Elbow", image: "/Threaded Forged Fittings/Forged Elbow.jpeg", alt: "Forged Steel Elbow - Threaded Forged Elbow and Socket Weld Forged Elbow fitting" },
    { name: "Forged Tee", image: "/Threaded Forged Fittings/Forged Tee.jpeg", alt: "Forged Tee - Stainless Steel and Carbon Steel Forged Tee, ASME B16.11 high pressure standard" },
    { name: "Forged Reducer", image: "/Threaded Forged Fittings/Forged Reducer.jpeg", alt: "Forged Reducer - High Pressure Forged pipe fitting reducer from supplier" },
    { name: "Forged Coupling", image: "/Threaded Forged Fittings/Forged Coupling.jpeg", alt: "Forged Coupling - Threaded Pipe Forged Elbow and coupling fitting manufacturer" },
    { name: "Forged Cross", image: "/Threaded Forged Fittings/Forged Cross.jpg", alt: "Forged Cross - 90 Degree Forged Elbow, cross and high pressure piping components" },
    { name: "Forged Plug", image: "/Threaded Forged Fittings/Forged Plug.jpeg", alt: "Forged Plug - Threaded Forged Plug and high pressure piping systems accessories" },
    { name: "Forged Cap", image: "/Threaded Forged Fittings/forged-cap.jpg", alt: "Forged Cap - Forged cap with socket weld or threaded connection options" },
    { name: "Forged Boss", image: "/Threaded Forged Fittings/Forged Boss.jpeg", alt: "Forged Boss - ASME B16.11 forged boss and custom pipe elbow connector" },
    { name: "Forged Bushing", image: "/Threaded Forged Fittings/Forged Bushing.jpeg", alt: "Carbon Steel Forged pipe bushing and adapter fitting" },
    { name: "Forged Nipple", image: "/Threaded Forged Fittings/Forged Nipple.jpeg", alt: "Hex and barrel forged nipple pipe connections" },
    { name: "Forged Union", image: "/Threaded Forged Fittings/Forged Union.jpeg", alt: "Heavy duty forged union for high pressure industrial pipe systems" },
    { name: "Forged Outlet", image: "/Threaded Forged Fittings/Forged Outlet.jpeg", alt: "Weldolet, threadolet and sockolet forged outlet systems" }
  ],
  "socket-weld-fittings": [
    { name: "45 Degree Elbow", image: "/Socket Weld Fittings/45 Degree Elbow.jpg", alt: "45 Degree Elbow - Socket Weld 45 Degree Elbow and SW 45 Degree Elbow fitting" },
    { name: "30 Degree Elbow", image: "/Socket Weld Fittings/30 Degree Elbow.jpeg", alt: "30 Degree Elbow - Stainless Steel SW 30 Degree pipe elbow fitting manufacturer" },
    { name: "90 Degree Elbow", image: "/Socket Weld Fittings/90 Degree Elbow.jpeg", alt: "Carbon Steel 90 Degree Socket Weld pipe elbow fitting" },
    { name: "Street Elbow", image: "/Socket Weld Fittings/Street Elbow.jpeg", alt: "Socket weld fitting street elbow for industrial piping installations" },
    { name: "Reducing Elbow", image: "/Socket Weld Fittings/Reducing Elbow.jpeg", alt: "Precision Forged reducing socket weld elbow for different diameter pipes" },
    { name: "Long Radius Elbow", image: "/Socket Weld Fittings/Long Radius Elbow.jpeg", alt: "ASME B16.11 long radius elbow and high pressure fittings" },
    { name: "Half Coupling", image: "/Socket Weld Fittings/Half Coupling.jpeg", alt: "Socket Weld pipe half coupling connector from reliable supplier" },
    { name: "Reducing Coupling", image: "/Socket Weld Fittings/Reducing Coupling.jpeg", alt: "High Pressure socket weld reducing coupling for process pipelines" },
    { name: "Full Coupling", image: "/Socket Weld Fittings/Full Coupling.jpeg", alt: "SW Full Coupling fitting, stainless steel socket weld connector" },
    { name: "Reducing Tee", image: "/Socket Weld Fittings/Reducing Tee.jpeg", alt: "Socket weld reducing tee fitting for high density industrial piping" },
    { name: "Equal Tee", image: "/Socket Weld Fittings/Equal Tee.jpeg", alt: "Forged socket weld equal tee fitting, ASME certified" },
    { name: "Lateral Tee", image: "/Socket Weld Fittings/Lateral tee.jpeg", alt: "45 degree lateral tee, socket weld high pressure joint" },
    { name: "Concentric Reducer", image: "/Socket Weld Fittings/Concentric Reducer.jpeg", alt: "Socket weld concentric reducer and adapter fittings" },
    { name: "Insert Bushing", image: "/Socket Weld Fittings/Insert Bushing.jpeg", alt: "Forged SW insert bushing for high pressure socket connections" }
  ],
  sheets: [
    { name: "Cold Rolled BA (Bright Annealed) Coil", image: "/ss Sheets/Cold Rolled BA (Bright Annealed) Coil.jpg", alt: "Premium cold rolled BA coil with bright annealed surface finish" },
    { name: "Cold Rolled BA (Bright Annealed) Plate", image: "/ss Sheets/Cold Rolled BA (Bright Annealed) Plate.jpg", alt: "Bright annealed stainless steel plate with smooth reflective BA finish" },
    { name: "Cold Rolled Coil", image: "/ss Sheets/Cold Rolled Coil.jpg", alt: "High quality grade 304 cold rolled BA coil roll stock" },
    { name: "Cold Rolled Mirror Finish Plate", image: "/ss Sheets/Cold Rolled Mirror Finish Plate.jpg", alt: "Bright annealed mirror-like finish coil and polished decorative plate" },
    { name: "HRPO vs Cold Roll", image: "/ss Sheets/HRPO_vs_HrpoPlus_vs_Cold Roll.jpg", alt: "Comparison of HRPO vs cold rolled BA finish steel coil specifications" },
    { name: "Hot Rolled Pickled and Oiled Coil", image: "/ss Sheets/Hot Rolled Pickled and Oiled Coil.jpg", alt: "Hot rolled pickled and oiled coil alongside cold rolled bright annealed stainless coil" },
    { name: "Hot Rolled Sheet", image: "/ss Sheets/Hot Rolled Sheet.jpg", alt: "Heavy duty hot rolled steel sheets and 316 cold rolled BA coil plate stock" },
    { name: "Big Coil Spring Wire", image: "/ss Sheets/big-coil-spring-wire.jpg", alt: "Precision big coil spring wire and industrial cold rolled BA coil full hard" },
    { name: "Cold Stainless SS 304 Sheet", image: "/ss Sheets/cold stainless ss 304 sheet.jpg", alt: "Jindal stainless steel sheet of grade ss 304 bright annealed coil" },
    { name: "Hot Rolled Steel Coil", image: "/ss Sheets/hot rolled steel coil .jpg", alt: "Heavy duty hot rolled steel coil and bright annealed coil distributor stock" }
  ],
  flanges: [
    { name: "Forged Flanges", image: "/Flanges/Forged Flanges.jpeg", alt: "Forged Flanges - Forged Steel Flanges, Forged Pipe Flanges, ASME B16.5 high pressure flanges" },
    { name: "Plate Flange", image: "/Flanges/Plate Flange.jpeg", alt: "Carbon Steel Plate Flange, slip-on and blind plate steel flanges" },
    { name: "Ring Type Joint Flange", image: "/Flanges/Ring Type Joint Flange.jpeg", alt: "High pressure Ring Type Joint RTJ Forged Steel Flanges" },
    { name: "Socket Weld Flange", image: "/Flanges/Socket Weld Flange.jpeg", alt: "Stainless Steel Forged Socket Weld Flange for piping systems" },
    { name: "Lap Joint Flange", image: "/Flanges/Lap Joint Flange.jpeg", alt: "Carbon steel forged Lap Joint Flange, ASME standard" },
    { name: "Blind Flange", image: "/Flanges/Blind Flange.jpg", alt: "Blind Forged Flange, high pressure pipe blocking steel flange" },
    { name: "Weld Neck Flange", image: "/Flanges/Weld Neck Flange.jpeg", alt: "Weld Neck Forged Flange, ASME B16.5 certified weld neck flanges" },
    { name: "Slip-On Flange", image: "/Flanges/Slip-On Flange.jpeg", alt: "Slip-On Forged Flange, slip on steel pipe flanges from supplier" },
    { name: "SAE Flange", image: "/Flanges/SAE Flange.jpeg", alt: "Forged SAE Flange, high pressure split and solid flange clamps" },
    { name: "Tongue And Groove Flange", image: "/Flanges/Tongue And Groove Flange.jpeg", alt: "High pressure matched Tongue and Groove forged steel flanges" },
    { name: "Reducing Flange", image: "/Flanges/Reducing Flange.jpeg", alt: "Carbon Steel Forged reducing flanges for pipeline size transitions" },
    { name: "Square Flange", image: "/Flanges/Square Flange.jpeg", alt: "Heavy duty hydraulic socket weld square flanges and flange kits" },
    { name: "Spectacle Blind Flange", image: "/Flanges/Spectacle Blind Flange.jpeg", alt: "Steel forged Spectacle Blind Flange and line spade spacer" },
    { name: "Orifice Flange", image: "/Flanges/Orifice Flange.jpeg", alt: "Precision ASME B16.36 Orifice Flange, custom high pressure flange" }
  ],
  wires: [
    { name: "Spring Wire", image: "/Wires/Spring Wire.jpeg" },
    { name: "Round Wire", image: "/Wires/Round Wire.jpeg" },
    { name: "Coil Wire", image: "/Wires/Coil Wire.jpeg" },
    { name: "Flat Wire", image: "/Wires/Flat Wire.jpeg" },
    { name: "Thin Wire", image: "/Wires/Thin Wire.webp" },
    { name: "Annealed Wire", image: "/Wires/Annealed Wire.jpeg" },
    { name: "Cold Heating Wire", image: "/Wires/Cold Heating Wire.jpeg" },
    { name: "Wire Bobbin", image: "/Wires/Wire Bobbin.jpeg" },
    { name: "Lashing Wire", image: "/Wires/Lashing Wire.jpeg" }
  ],
  valves: [
    { name: "Gate Valve", image: "/Valves/Gate Valve.jpeg" },
    { name: "Globe Valve", image: "/Valves/Globe Valve.jpeg" },
    { name: "Ball Valve", image: "/Valves/Ball Valve.jpeg" },
    { name: "Check Valve", image: "/Valves/Check Valve.jpeg" },
    { name: "Butterfly Valve", image: "/Valves/Butterfly Valve.jpeg" }
  ],
  nipple: [
    { name: "Barrel Nipple", image: "/Nipple/Barrel Nipple.jpeg" },
    { name: "Beveled Nipple", image: "/Nipple/Beveled Nipple.jpeg" },
    { name: "Close Nipple", image: "/Nipple/Close Nipple.jpeg" },
    { name: "Grooved Nipple", image: "/Nipple/Grooved Nipple.jpeg" },
    { name: "Hex Nipple", image: "/Nipple/Hex Nipple.jpeg" },
    { name: "Hose Nipple", image: "/Nipple/Hose Nipple.jpeg" },
    { name: "Reducing Hex Nipple", image: "/Nipple/Reducing Hex Nipple.jpeg" },
    { name: "Reducing Nipple", image: "/Nipple/Reducing Nipple.jpeg" },
    { name: "TOE and TBE Nipple", image: "/Nipple/TOE-AND-TBE-1.jpg" },
    { name: "Threaded Nipple", image: "/Nipple/Threaded Nipple.jpeg" },
    { name: "Welding Nipple", image: "/Nipple/Welding Nipple.jpeg" }
  ]
};

export default function ProductDetail({ productId, onNavigate, onQuotePreFill }: ProductDetailProps) {
  const [selectedForm, setSelectedForm] = useState<string>('');
  const detailContainerRef = useRef<HTMLDivElement>(null);

  // Retrieve the correct product from database
  const product = PRODUCTS.find(p => p.id === productId) || PRODUCTS[0];

  useEffect(() => {
    // Set default selected form
    if (product && product.availableForms.length > 0) {
      setSelectedForm(product.availableForms[0]);
    }

    // GSAP page transitions
    gsap.fromTo('.detail-anim-top',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', stagger: 0.15 }
    );

    gsap.fromTo('.detail-anim-fade',
      { opacity: 0 },
      { opacity: 1, duration: 1.0, ease: 'power2.out', delay: 0.3 }
    );
  }, [productId, product]);

  const handleQuoteClick = () => {
    // Pass pre-filled values to parent so Quote Page is pre-selected
    onQuotePreFill(product.category, selectedForm);
    onNavigate('quote');
  };

  return (
    <div ref={detailContainerRef} className="bg-[#FFFFFF] text-[#101828] min-h-screen pt-28 pb-24 grain-overlay">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Navigation / Header bar */}
        <div className="detail-anim-top flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 pb-6 border-b border-[#101828]/10">
          <button
            onClick={() => onNavigate('products')}
            className="inline-flex items-center space-x-2 text-xs font-bold tracking-widest text-[#0A5A7D] hover:text-[#1A8CAF] transition-colors uppercase group"
          >
            <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
            <span>RETURN TO METALS CATALOG</span>
          </button>

          {/* Breadcrumbs */}
          <div className="flex items-center space-x-2 text-[10px] tracking-widest text-[#64748B] uppercase">
            <button onClick={() => onNavigate('home')} className="hover:text-[#101828] transition-colors">HOME</button>
            <ChevronRight className="w-3.5 h-3.5 text-[#101828]/20" />
            <button onClick={() => onNavigate('products')} className="hover:text-[#101828] transition-colors">OUR METALS</button>
            <ChevronRight className="w-3.5 h-3.5 text-[#101828]/20" />
            <span className="text-[#0A5A7D] font-semibold">{product.name}</span>
          </div>
        </div>

        {/* Core Detail Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column (5/12): Meta Info, Grades, Available Forms */}
          <div className="lg:col-span-5 space-y-8 detail-anim-top">
            
            {/* Main Title Badge */}
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 bg-[#0A5A7D]/10 border border-[#0A5A7D]/25 rounded-full text-[#0A5A7D] text-xs font-bold tracking-widest uppercase">
                <ShieldCheck className="w-4 h-4 stroke-[2]" />
                <span>{product.categoryLabel}</span>
              </div>
              
              <h1 className="font-heading text-5xl sm:text-6xl font-black text-[#101828] uppercase tracking-tighter leading-none">
                {product.name}
              </h1>
              
              <div className="flex items-center space-x-4">
                <span className="text-sm text-[#0A5A7D] font-bold tracking-widest uppercase">
                  CERTIFIED GRADE: {product.grade}
                </span>
              </div>
            </div>

            {/* Detailed Description */}
            <p className="text-base text-[#64748B] leading-relaxed font-light">
              {product.longDescription}
            </p>

            {/* Selected Type Info Block */}
            <div className="space-y-4 bg-[#EEF4FA] border border-[#101828]/10 p-6 rounded-lg shadow-md">
              <div className="flex items-center space-x-2">
                <FileSpreadsheet className="w-4 h-4 text-[#0A5A7D]" />
                <span className="text-xs tracking-widest text-[#0A5A7D] font-bold uppercase">
                  SELECTED TYPE
                </span>
              </div>
              <p className="text-xs text-[#64748B]">
                Current active product category type selected for specifications and quote calculations.
              </p>
              
              <div className="pt-2">
                <div className="px-5 py-4 rounded-xl bg-[#0A5A7D]/5 border border-[#0A5A7D]/20 flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] bg-[#0A5A7D] text-white px-2.5 py-1 rounded-md font-bold uppercase tracking-widest shrink-0">
                      ACTIVE
                    </span>
                  </div>
                  <span className="text-sm font-extrabold text-[#101828] uppercase tracking-wider break-words whitespace-normal max-w-full leading-relaxed">
                    {selectedForm || 'Standard Type'}
                  </span>
                </div>
              </div>
            </div>

            {/* Key Applications */}
            <div className="space-y-4">
              <h4 className="font-heading text-xs font-bold tracking-widest text-[#101828] uppercase border-b border-[#101828]/10 pb-2">
                CORE STRUCTURAL APPLICATIONS
              </h4>
              <ul className="space-y-2">
                {product.keyApplications.map((app, i) => (
                  <li key={i} className="flex items-start space-x-2 text-xs text-[#64748B]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0A5A7D] mt-1.5 shrink-0" />
                    <span>{app}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Right Column (7/12): Detailed Specs Table & Chemistry */}
          <div className="lg:col-span-7 space-y-8 detail-anim-fade">
            
            {/* Dimensions Specifications Table */}
            <div className="bg-[#EEF4FA] border border-[#101828]/10 rounded-lg p-6 space-y-5 shadow-md">
              <div className="flex items-center justify-between border-b border-[#101828]/10 pb-4">
                <h3 className="font-heading text-lg font-black tracking-tighter text-[#101828] uppercase">
                  DIMENSIONS & STANDARDS
                </h3>
                <span className="text-[10px] font-mono tracking-widest text-[#0A5A7D] uppercase font-bold">
                  FORM: {selectedForm || 'SELECTED'}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-6 text-xs">
                
                <div className="border-b border-[#101828]/10 pb-2">
                  <span className="block text-[9px] tracking-widest text-[#64748B] font-bold uppercase mb-1">
                    THICKNESS RANGE
                  </span>
                  <span className="font-mono text-[#101828] font-medium">{product.thicknessRange}</span>
                </div>

                <div className="border-b border-[#101828]/10 pb-2">
                  <span className="block text-[9px] tracking-widest text-[#64748B] font-bold uppercase mb-1">
                    WIDTH CAPABILITIES
                  </span>
                  <span className="font-mono text-[#101828] font-medium">{product.width}</span>
                </div>

                <div className="border-b border-[#101828]/10 pb-2 md:border-b-0">
                  <span className="block text-[9px] tracking-widest text-[#64748B] font-bold uppercase mb-1">
                    STOCK LENGTHS
                  </span>
                  <span className="font-mono text-[#101828] font-medium">{product.length}</span>
                </div>

                <div className="pb-2 md:pb-0">
                  <span className="block text-[9px] tracking-widest text-[#64748B] font-bold uppercase mb-1">
                    METALLURGY ACCREDITATIONS
                  </span>
                  <span className="font-sans text-[#0A5A7D] font-bold">{product.certifications[0]}</span>
                </div>

              </div>
            </div>

            {/* Metallurgy Chemical Composition Grid */}
            <div className="bg-[#EEF4FA] border border-[#101828]/10 rounded-lg p-6 space-y-4 shadow-md">
              <div>
                <h3 className="font-heading text-lg font-black tracking-tighter text-[#101828] uppercase">
                  CHEMICAL ALLOY COMPOSITION
                </h3>
                <p className="text-[10px] text-[#0A5A7D] tracking-widest uppercase mt-0.5 font-bold">
                  VERIFIED ACCORDING TO MILL ANALYSIS CERTIFICATE
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="border-b border-[#101828]/10 text-[#64748B] uppercase font-bold tracking-widest text-[9px]">
                      <th className="py-2.5 px-3">ALLOYING ELEMENT</th>
                      <th className="py-2.5 px-3 text-right">CERTIFIED PROPORTION (%)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {product.composition.map((elem, i) => (
                      <tr key={i} className="border-b border-[#101828]/5 hover:bg-[#101828]/5 transition-colors">
                        <td className="py-3 px-3 font-medium text-[#101828]">{elem.element}</td>
                        <td className="py-3 px-3 text-right font-mono text-[#0A5A7D] font-bold">{elem.percentage}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Quality Certifications Badge Listing */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {product.certifications.map((cert, index) => (
                <div key={index} className="flex items-center space-x-3 bg-[#EEF4FA] border border-[#101828]/10 p-4 rounded-lg shadow-sm">
                  <div className="w-8 h-8 rounded-full bg-[#0A5A7D]/10 border border-[#0A5A7D]/30 flex items-center justify-center shrink-0">
                    <Award className="w-4 h-4 text-[#0A5A7D]" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-[#64748B] font-bold uppercase tracking-wider">STANDARD</span>
                    <span className="text-xs text-[#101828] font-medium">{cert}</span>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

        {/* Specifications Visual Sheet from the uploaded images */}
        {SPEC_SHEETS[product.id] && (() => {
          const sheet = SPEC_SHEETS[product.id];
          return (
            <div className="mt-16 border-t border-[#101828]/10 pt-12 detail-anim-fade">
              <div className="text-center md:text-left mb-8">
                <h2 className="font-heading text-3xl font-black text-[#101828] tracking-tight uppercase">
                  {sheet.title}
                </h2>
                <p className="text-xs text-[#0A5A7D] tracking-widest uppercase mt-1 font-bold">
                  {sheet.subtitle}
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sheet.boxes.map((box, bIdx) => (
                  <div
                    key={bIdx}
                    className={`border rounded-xl p-6 shadow-md transition-transform duration-300 hover:scale-[1.02] ${
                      box.isRed
                        ? 'bg-[#0A5A7D] border-[#0A5A7D]/30 hover:border-white/40 text-white shadow-lg'
                        : 'bg-white border-[#101828]/10 hover:border-[#101828]/20'
                    }`}
                  >
                    <h3 className={`font-heading text-lg font-bold mb-4 border-b pb-2 uppercase tracking-wide ${
                      box.isRed ? 'text-white border-white/20' : 'text-[#101828] border-[#101828]/10'
                    }`}>
                      {box.title}
                    </h3>
                    <ul className="space-y-3 font-mono text-xs">
                      {box.items.map((item, iIdx) => (
                        <li
                          key={iIdx}
                          className={`flex items-center space-x-2 ${
                            box.isRed ? 'text-white/90' : 'text-[#2D3748]'
                          }`}
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                              box.isRed ? 'bg-white' : 'bg-[#0A5A7D]'
                            }`}
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          );
        })()}

        {/* Types Of (Product) - Dynamic Visual Gallery Grid */}
        {PRODUCT_TYPES_DATA[product.id] && (
          <div className="mt-16 border-t border-[#101828]/10 pt-12 detail-anim-fade">
            <div className="text-center md:text-left mb-8">
              <h2 className="font-heading text-3xl font-black text-[#101828] tracking-tight uppercase">
                {GALLERY_TITLES[product.id] || `Types Of ${product.name}`}
              </h2>
              <p className="text-xs text-[#0A5A7D] tracking-widest uppercase mt-1 font-bold">
                CHOOSE FROM THE PRE-APPROVED STRUCTURAL & PRESSURE FORMS TO RE-LOCK SPECIFICATIONS
              </p>
            </div>

            <div className={`grid gap-6 ${
              (PRODUCT_TYPES_DATA[product.id]?.length % 5 === 0)
                ? 'grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5'
                : 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6'
            }`}>
              {PRODUCT_TYPES_DATA[product.id].map((typeItem, tIdx) => {
                const isSelected = selectedForm === typeItem.name;
                return (
                  <div
                    key={tIdx}
                    onClick={() => setSelectedForm(typeItem.name)}
                    className={`group border rounded-2xl overflow-hidden bg-[#F2F7FB] flex flex-col items-center p-4 transition-all duration-300 cursor-pointer ${
                      isSelected
                        ? 'border-[#0A5A7D] shadow-[0_4px_20px_rgba(10,90,125,0.15)] bg-[#0A5A7D]/5'
                        : 'border-[#101828]/5 hover:border-[#0A5A7D]/30 hover:bg-[#EEF4FA]'
                    }`}
                  >
                    <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-white border border-[#101828]/5">
                      <img
                        src={typeItem.image}
                        alt={typeItem.alt || typeItem.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          // Fallback to the product's main image if custom image doesn't exist yet
                          (e.target as HTMLImageElement).src = product.imageUrl;
                        }}
                      />
                      {isSelected && (
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                          <span className="text-[10px] bg-[#0A5A7D] text-white px-2.5 py-1 rounded-full font-bold uppercase tracking-widest">
                            SELECTED
                          </span>
                        </div>
                      )}
                    </div>
                    <span className={`text-[11px] font-bold text-center mt-4 uppercase tracking-wider transition-colors line-clamp-2 h-8 flex items-center justify-center leading-tight ${
                      isSelected ? 'text-[#0A5A7D]' : 'text-[#64748B] group-hover:text-[#101828]'
                    }`}>
                      {typeItem.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Sticky-feeling Interactive Action Banner */}
        <div className="mt-16 bg-[#EEF4FA] border border-[#101828]/10 p-8 rounded-2xl flex flex-col md:flex-row justify-between items-center gap-6 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#0A5A7D]/5 rounded-full blur-[40px] pointer-events-none" />
          
          <div>
            <h4 className="font-heading text-xl font-black text-[#101828] tracking-tight uppercase">
              READY TO COMMENCE THE PROCUREMENT FLOW?
            </h4>
            <p className="text-xs text-[#0A5A7D] tracking-widest uppercase mt-1 font-bold">
              LOCK IN THE PRE-FILLED SPECIFICATIONS FOR APEX COILS
            </p>
            <p className="text-xs text-[#64748B] mt-2 font-light max-w-xl">
              Proceed to specify required tonnages, transport constraints, and targeted delivery dates. A metallurgical engineer will deliver a formal legal quote in 24 hours.
            </p>
          </div>

          <button
            onClick={handleQuoteClick}
            className="w-full md:w-auto px-8 py-4 bg-[#0A5A7D] hover:bg-[#1A8CAF] text-white font-heading text-xs font-bold tracking-widest uppercase rounded-none shadow-md shrink-0 transition-all duration-300 cursor-pointer text-center"
          >
            INITIALIZE EN-GRADE QUOTE
          </button>
        </div>

      </div>
    </div>
  );
}
