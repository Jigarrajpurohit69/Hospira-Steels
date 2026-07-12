import { jsPDF } from 'jspdf';

export function generateHospiraProfilePDF() {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const goldColor = [201, 168, 76]; // #C9A84C
  const darkBg = [10, 10, 10];
  const lightGrey = [245, 245, 245];

  // Helper to draw a header band
  const drawPageBorderAndHeader = (pageNum: number) => {
    // Elegant border
    doc.setDrawColor(201, 168, 76);
    doc.setLineWidth(0.5);
    doc.rect(5, 5, 200, 287);

    // Decorative corner markers
    doc.rect(7, 7, 196, 283);

    // Header band
    doc.setFillColor(15, 15, 15);
    doc.rect(8, 8, 194, 25, 'F');

    // Title in gold
    doc.setTextColor(201, 168, 76);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(22);
    doc.text('HOSPIRA STEEL & ALLOY', 12, 18);

    doc.setFont('helvetica', 'italic');
    doc.setFontSize(10);
    doc.text('THE ZEAL OF STAINLESS STEEL', 12, 23);

    // Certifications text
    doc.setTextColor(255, 255, 255);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7);
    doc.text('ISO 9001:2008 Certified Company', 150, 14);
    doc.text('TUV | NABCB | CARES | UKAS Approved', 150, 18);
    doc.text('BS EN ISO 9001 2008 Compliant', 150, 22);

    // Footer
    doc.setDrawColor(201, 168, 76);
    doc.line(8, 280, 202, 280);

    doc.setTextColor(120, 120, 120);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.text('www.hospirasteel.com  |  hospira.steel@gmail.com', 12, 285);
    doc.text(`Page ${pageNum} of 3`, 185, 285);
  };

  // ==========================================
  // PAGE 1: TITLE & CORE INTRODUCTION
  // ==========================================
  drawPageBorderAndHeader(1);

  // Logo / Emblem simulation
  doc.setDrawColor(201, 168, 76);
  doc.setLineWidth(0.8);
  doc.line(12, 38, 198, 38);

  doc.setTextColor(0, 0, 0);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(16);
  doc.text('COMPANY PROFILE & CAPABILITY DOCUMENT', 12, 48);

  // Established details
  doc.setFillColor(248, 246, 240);
  doc.rect(12, 53, 186, 12, 'F');
  doc.setTextColor(150, 120, 40);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.text('ESTABLISHED: SEPTEMBER 2006  |  NATURE OF CONCERN: PARTNERSHIP', 16, 61);

  // Intro text
  doc.setTextColor(50, 50, 50);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10.5);
  
  const introPara1 = "Since being incorporated 2 decades back, Hospira Steel & Alloy has acquired a distinguished edge over others. The well-performed role of manufacturers, stockists, and dealers has given the company a prominent, highly reputable position amongst its industrial competitors. We deliver absolute structural security, precise quality, and elite finish standards.";
  const splitIntro1 = doc.splitTextToSize(introPara1, 186);
  doc.text(splitIntro1, 12, 72);

  const introPara2 = "We are prime manufacturers and stockholders in Stainless Steel SS 304, 304L, 309, 310, 316, 316L, 316Ti, 321, 347, 904L, and High-Purity Nickel, Monel, Inconel (800 / 825 / 600 / 625), Hastelloy, Alloy 20, and Duplex. We specialize in providing premium stainless steel materials, structural components, and high-pressure fittings to various industrial, commercial, and residential projects.";
  const splitIntro2 = doc.splitTextToSize(introPara2, 186);
  doc.text(splitIntro2, 12, 94);

  // Corporate Offices Section
  doc.setTextColor(201, 168, 76);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12);
  doc.text('CORPORATE REGISTERED HEADQUARTERS', 12, 124);
  doc.line(12, 126, 198, 126);

  doc.setTextColor(40, 40, 40);
  doc.setFontSize(9.5);
  doc.setFont('helvetica', 'bold');
  doc.text('REGISTERED OFFICE & DEPRECIATION DEPOT (VISAKHAPATNAM):', 12, 133);
  doc.setFont('helvetica', 'normal');
  doc.text('M/s. Hospira Steel & Alloy', 12, 138);
  doc.text('Address: 7-13-22, Opp. Varun Bajaj, NH-5 Road, Old Gajuwaka,', 12, 143);
  doc.text('Visakhapatnam, Andhra Pradesh, India. Pin: 530026', 12, 148);
  doc.text('Contact No: +91 98851 21388, +91 70133 61790', 12, 153);
  doc.text('Primary Email: hospira.steel@gmail.com', 12, 158);

  doc.setFont('helvetica', 'bold');
  doc.text('MUMBAI GENERAL HEAD OFFICE (RINKU STEEL CO.):', 12, 168);
  doc.setFont('helvetica', 'normal');
  doc.text('Rinku Steel Co.', 12, 173);
  doc.text('Shed No.1 Ground Floor Zariwalla Building, Near Alankar Cinema Hall,', 12, 178);
  doc.text('Mumbai - 400004, Maharashtra, India.', 12, 183);
  doc.text('Email: rinkusteel2010@gmail.com  |  Web: www.rinkusteel.com', 12, 188);

  // Commercial Registrations Table
  doc.setTextColor(201, 168, 76);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12);
  doc.text('COMMERCIAL VERIFICATION & BANKING SCHEME', 12, 202);
  doc.line(12, 204, 198, 204);

  doc.setFillColor(245, 245, 245);
  doc.rect(12, 209, 186, 56, 'F');
  
  doc.setTextColor(60, 60, 60);
  doc.setFontSize(9);
  
  // Table Rows
  const startY = 215;
  const rowHeight = 6;
  const tableData = [
    { label: 'Firm Name', val: 'M/s. Hospira Steel & Alloy' },
    { label: 'Managing Director', val: 'Mr. Dinesh Purohit (Mob: +91 99854 77751)' },
    { label: 'GSTIN Registration', val: '37AAJFH5346KV1ZZ' },
    { label: 'Income Tax PAN', val: 'AAJFH5346K' },
    { label: 'Banker Partner', val: 'State Bank of India (SBI), Branch Code: 18850' },
    { label: 'Bank Branch', val: 'Pantullugarimeda Branch, Visakhapatnam' },
    { label: 'Current Account No', val: '36286506739  (IFSC Code: SBIN0018850)' },
    { label: 'Nature of Concern', val: 'Industrial Manufacturers, Exporters, & Core Bulk Stockists' }
  ];

  tableData.forEach((row, i) => {
    doc.setFont('helvetica', 'bold');
    doc.text(row.label + ':', 16, startY + (i * rowHeight));
    doc.setFont('helvetica', 'normal');
    doc.text(row.val, 65, startY + (i * rowHeight));
  });


  // ==========================================
  // PAGE 2: PIPES, FLANGES & FITTINGS SPECS
  // ==========================================
  doc.addPage();
  drawPageBorderAndHeader(2);

  doc.setTextColor(0, 0, 0);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(15);
  doc.text('PRODUCT SPECIFICATIONS & MATERIAL GRADES', 12, 42);
  doc.line(12, 44, 198, 44);

  // 1. PIPES & TUBES
  doc.setTextColor(201, 168, 76);
  doc.setFontSize(11);
  doc.text('1. STAINLESS, CARBON & ALLOY STEEL PIPES', 12, 52);
  
  doc.setTextColor(50, 50, 50);
  doc.setFontSize(8.5);
  doc.setFont('helvetica', 'bold');
  doc.text('Stainless Steel Pipes:', 14, 58);
  doc.setFont('helvetica', 'normal');
  doc.text('ASTM A312 TP 304/304L/304H/316/316L/317/317L/321/310/347/904L, EN 10204 3.1 Certified.', 50, 58);

  doc.setFont('helvetica', 'bold');
  doc.text('Carbon Steel Pipes:', 14, 63);
  doc.setFont('helvetica', 'normal');
  doc.text('ASTM A53 Gr. B, A106 Gr. B, API 5L Grade B, API 5L Gr. X42/46/52/56/60/65/70, A333 Gr.3 & Gr.6.', 50, 63);

  doc.setFont('helvetica', 'bold');
  doc.text('Alloy Steel Pipes:', 14, 68);
  doc.setFont('helvetica', 'normal');
  doc.text('ASTM A335 Gr. P1, P5, P9, P11, P22, P91.', 50, 68);

  doc.setFont('helvetica', 'bold');
  doc.text('Stocked Super Alloys:', 14, 73);
  doc.setFont('helvetica', 'normal');
  doc.text('INCONEL 800, 825, 600, 625, Monel Nickel, Hastelloy, Alloy 20 and Duplex steels.', 50, 73);

  // 2. FLANGES
  doc.setTextColor(201, 168, 76);
  doc.setFontSize(11);
  doc.setFont('helvetica', 'bold');
  doc.text('2. FORGED INDUSTRIAL FLANGES (Size: 1/2" NB to 60" NB)', 12, 85);

  doc.setTextColor(50, 50, 50);
  doc.setFontSize(8.5);
  doc.setFont('helvetica', 'bold');
  doc.text('Stainless Steel:', 14, 91);
  doc.setFont('helvetica', 'normal');
  doc.text('ASTM A182, F304/304L, 304H, 316/316L, 317/317L, 321, 310, 347, 904L etc.', 42, 91);

  doc.setFont('helvetica', 'bold');
  doc.text('Carbon Steel:', 14, 96);
  doc.setFont('helvetica', 'normal');
  doc.text('ASTM A105 / A694 F42/46/52/56/60/65/70, A350 LF3, A650 LF2.', 42, 96);

  doc.setFont('helvetica', 'bold');
  doc.text('Alloy Steel:', 14, 101);
  doc.setFont('helvetica', 'normal');
  doc.text('ASTM A182 F1, F5, F9, F11, F22, F91 etc.', 42, 101);

  doc.setFont('helvetica', 'bold');
  doc.text('Flange Configurations:', 14, 106);
  doc.setFont('helvetica', 'normal');
  doc.text('Weldneck, Slipon, Blind, Socket Weld, Lap Joint, Spectacles, Ring Joint, Orifice, DeckFlange.', 42, 106);

  // 3. BUTTWELD FITTINGS
  doc.setTextColor(201, 168, 76);
  doc.setFontSize(11);
  doc.setFont('helvetica', 'bold');
  doc.text('3. BUTT WELD FITTINGS (Size: 1/4" NB to 48" NB | Sch. 5S to Sch. XXS)', 12, 118);

  doc.setTextColor(50, 50, 50);
  doc.setFontSize(8.5);
  doc.setFont('helvetica', 'bold');
  doc.text('Stainless Steel:', 14, 124);
  doc.setFont('helvetica', 'normal');
  doc.text('ASTM A403 WP 304/304L/304H/316/316L/317/317L/321/310/347/904L etc.', 42, 124);

  doc.setFont('helvetica', 'bold');
  doc.text('Carbon Steel:', 14, 129);
  doc.setFont('helvetica', 'normal');
  doc.text('ASTM A234 WPB / A420 WPL3 / A420 WPL6, MSS SP75 WPHY 42/46/52/56/60/65/70.', 42, 129);

  doc.setFont('helvetica', 'bold');
  doc.text('Alloy Steel:', 14, 134);
  doc.setFont('helvetica', 'normal');
  doc.text('ASTM A234 WP1 / WP5 / WP9 / WP11 / WP22 / WP91.', 42, 134);

  doc.setFont('helvetica', 'bold');
  doc.text('Fittings Catalog:', 14, 139);
  doc.setFont('helvetica', 'normal');
  doc.text('Elbow (90° & 45°), Equal/Reducing Tee, Reducers, Return Bends, Stub-Ends, Caps, Collars, Crosses.', 42, 139);

  // 4. SCREWED & FORGED FITTINGS
  doc.setTextColor(201, 168, 76);
  doc.setFontSize(11);
  doc.setFont('helvetica', 'bold');
  doc.text('4. SCREWED & FORGED FITTINGS (Size: 1/4" to 4" | Class: 3000#, 6000#, 9000#)', 12, 151);

  doc.setTextColor(50, 50, 50);
  doc.setFontSize(8.5);
  doc.setFont('helvetica', 'bold');
  doc.text('Material Grades:', 14, 157);
  doc.setFont('helvetica', 'normal');
  doc.text('ASTM A182 F304/304L/316/316L/321/310/347/904L, Monel, Inconel, Nickel, Hastelloy, Brass.', 42, 157);

  doc.setFont('helvetica', 'bold');
  doc.text('Fittings Catalog:', 14, 162);
  doc.setFont('helvetica', 'normal');
  doc.text('Elbow, Tee, Union, Coupling, Cap, Bushing, Plug, Swage, Hex Nipple, Welding Boss, Hex Nut, Sockolet, Threadolet.', 42, 162);

  // 5. VALVES
  doc.setTextColor(201, 168, 76);
  doc.setFontSize(11);
  doc.setFont('helvetica', 'bold');
  doc.text('5. HEAVY INDUSTRIAL FLOW VALVES & VALVE ASSEMBLIES', 12, 174);

  doc.setTextColor(50, 50, 50);
  doc.setFontSize(8.2);
  doc.setFont('helvetica', 'bold');
  doc.text('Globe Valves:', 14, 180);
  doc.setFont('helvetica', 'normal');
  doc.text('BS 5352 / BS 6755 / BS 1873, ASME B13.34, DIN 3356. (Sizes: 15mm to 400mm, Rating 150# to 1500#)', 42, 180);

  doc.setFont('helvetica', 'bold');
  doc.text('Gate Valves:', 14, 185);
  doc.setFont('helvetica', 'normal');
  doc.text('Bar Stock Forged & Cast Carbon, Stainless & Alloy Steel. (Sizes: 8mm to 600mm)', 42, 185);

  doc.setFont('helvetica', 'bold');
  doc.text('Check Valves:', 14, 190);
  doc.setFont('helvetica', 'normal');
  doc.text('Non-Return Valves (NRV) BS 6755 / BS 1868, Wafer Type Check Valves.', 42, 190);

  doc.setFont('helvetica', 'bold');
  doc.text('Butterfly Valves:', 14, 195);
  doc.setFont('helvetica', 'normal');
  doc.text('API 609 / BS 5155 / BS 13095 Cast Iron & Carbon Steel, Lever & Manual Gears. (40mm to 1200mm)', 42, 195);

  doc.setFont('helvetica', 'bold');
  doc.text('Specialty Valves:', 14, 200);
  doc.setFont('helvetica', 'normal');
  doc.text('Spherical Disc, Knife Gate, Pulp, Forged Ball, Diaphragm, Steam Traps, Bolted Bonnet Safety Valves.', 42, 200);

  // 6. SPECIAL PRODUCTS & FABRICATIONS
  doc.setTextColor(201, 168, 76);
  doc.setFontSize(11);
  doc.setFont('helvetica', 'bold');
  doc.text('6. HEAVY FABRICATION & ARCHITECTURAL UTILITIES', 12, 212);

  doc.setTextColor(50, 50, 50);
  doc.setFontSize(8.5);
  doc.setFont('helvetica', 'bold');
  doc.text('Heavy Fabrication:', 14, 218);
  doc.setFont('helvetica', 'normal');
  doc.text('Stainless Steel Tanks, Industrial Hand Railings, Pipeline Sheeting & Specialized Grillwork.', 42, 218);

  doc.setFont('helvetica', 'bold');
  doc.text('Architectural SS:', 14, 223);
  doc.setFont('helvetica', 'normal');
  doc.text('Bespoke Gold PVD Coating Partitions, Decorative SS Screens, & Glass Railing Architecture.', 42, 223);

  doc.setFont('helvetica', 'bold');
  doc.text('Special Hardware:', 14, 228);
  doc.setFont('helvetica', 'normal');
  doc.text('Condensate POT, SS Nut & Bolts, Fasteners, Nickel-base Alloy Threaded rods.', 42, 228);


  // ==========================================
  // PAGE 3: COMPREHENSIVE PRODUCT DIRECTORY & INDUSTRIES
  // ==========================================
  doc.addPage();
  drawPageBorderAndHeader(3);

  doc.setTextColor(0, 0, 0);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(15);
  doc.text('PRODUCT DIRECTORY & APPLICATION INDUSTRIES', 12, 42);
  doc.line(12, 44, 198, 44);

  // 2 Column list for Product Categories
  doc.setTextColor(201, 168, 76);
  doc.setFontSize(11);
  doc.setFont('helvetica', 'bold');
  doc.text('PRODUCT PORTFOLIO:', 12, 53);

  doc.setTextColor(60, 60, 60);
  doc.setFontSize(9);
  doc.setFont('helvetica', 'bold');

  const leftProducts = [
    '• Stainless, Carbon, & Alloy Pipes',
    '• Cold and Hot Rolled Sheets & Coils',
    '• High-Pressure Forged Flanges',
    '• Concentric & Eccentric Reducers',
    '• Equal & Reducing Tees',
    '• 90° & 45° Butt-Weld Elbows',
    '• Barrel & Hexagonal Nipples',
    '• Round Bars & Bright Bars',
    '• Angles, Channels, Strips & Flats'
  ];

  const rightProducts = [
    '• Stainless Steel Wire & Fine Coils',
    '• Heavy Duty Screwed Unions & Caps',
    '• API 609 Premium Butterfly Valves',
    '• BS 1873 High Temperature Globe Valves',
    '• High-Pressure Double Ferrule Tube Fittings',
    '• Nickel Base Fasteners (Monel, Inconel)',
    '• SS Custom Condensate POTs',
    '• Structural SS Pipeline Fabrications',
    '• Glass Railing Work & PVD Partitions'
  ];

  leftProducts.forEach((item, i) => {
    doc.text(item, 16, 61 + (i * 6.5));
  });

  rightProducts.forEach((item, i) => {
    doc.text(item, 110, 61 + (i * 6.5));
  });

  // Industries Served
  doc.setTextColor(201, 168, 76);
  doc.setFontSize(11);
  doc.setFont('helvetica', 'bold');
  doc.text('INDUSTRIES WE DIRECTLY SERVE:', 12, 130);
  doc.line(12, 132, 198, 132);

  doc.setTextColor(60, 60, 60);
  doc.setFontSize(8.5);
  doc.setFont('helvetica', 'normal');

  const industryText = "Our fully-tested, mill-certified metallic alloys serve extreme tolerances across critical infrastructure nodes:";
  doc.text(industryText, 12, 138);

  // Grid of Industries
  const industries = [
    'DEFENCE & MILITARY CONDUITS',
    'PETROCHEMICALS & REFINERIES',
    'AEROSPACE & TURBINES',
    'THERMAL POWER & HYDROPOWER',
    'MINING, EXCAVATION & PORTS',
    'FERTILIZER & CHEMICAL REACTION',
    'CEMENT, KILNS & CALCINATION',
    'PULP, PAPER & CATERING FOODS',
    'SHIPBUILDING & OFFSHORE PLATFORMS',
    'BIOPHARMACEUTICAL RECTOR PIPES',
    'ARCHITECTURAL HOME GLAZINGS',
    'PRECISION ENGINEERING STATIONS'
  ];

  industries.forEach((ind, index) => {
    const col = index % 3;
    const row = Math.floor(index / 3);
    const xPos = 12 + (col * 64);
    const yPos = 145 + (row * 10);

    // Small square bullet
    doc.setFillColor(201, 168, 76);
    doc.rect(xPos, yPos - 2.2, 2.5, 2.5, 'F');

    // Industry text
    doc.setTextColor(30, 30, 30);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7.5);
    doc.text(ind, xPos + 5, yPos);
  });

  // Quality Statement Section
  doc.setTextColor(201, 168, 76);
  doc.setFontSize(11);
  doc.setFont('helvetica', 'bold');
  doc.text('OUR CORE VALUES & UNCOMPROMISING QUALITY:', 12, 198);
  doc.line(12, 200, 198, 200);

  doc.setTextColor(60, 60, 60);
  doc.setFontSize(9);
  doc.setFont('helvetica', 'italic');

  const qualityText = '"We believe in delivering ultimate structural security. Every item of sheets, plates, coils, fittings, and pipes is validated under strict physical laboratory audits and provided with complete physical Mill Test Certificates (MTC) to secure supreme safety margins under extreme industrial loads."';
  const splitQuality = doc.splitTextToSize(qualityText, 186);
  doc.text(splitQuality, 12, 207);

  // Signatures / Footnotes
  doc.setTextColor(0, 0, 0);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.text('Mr. Dinesh Purohit', 12, 235);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.text('Managing Partner', 12, 240);
  doc.text('Hospira Steel & Alloy', 12, 244);

  doc.setFont('helvetica', 'bold');
  doc.text('Authorized Signatory', 145, 235);
  doc.setFont('helvetica', 'normal');
  doc.text('Quality Assurance Dept.', 145, 240);
  doc.text('Corporate Standard Audit Seal', 145, 244);

  // Save PDF trigger
  doc.save('HOSPIRA_STEEL_ALLOY_COMPANY_PROFILE.pdf');
}
