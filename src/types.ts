export interface Product {
  id: string;
  name: string;
  category: 'austenitic' | 'duplex' | 'ferritic' | 'specialty';
  categoryLabel: string;
  grade: string;
  description: string;
  availableForms: string[]; // e.g., ["Sheet", "Rod", "Coil", "Pipe"]
  thicknessRange: string; // e.g., "0.5mm - 50mm"
  width: string; // e.g., "1000mm - 2500mm"
  length: string; // e.g., "2000mm - 6000mm"
  certifications: string[]; // e.g., ["ISI Certified", "ISO 9001:2015", "TUV NORD"]
  longDescription: string;
  keyApplications: string[];
  composition: {
    element: string;
    percentage: string;
  }[];
  imageUrl: string;
  seoAlt?: string;
}

export interface CategoryData {
  id: 'austenitic' | 'duplex' | 'ferritic' | 'specialty';
  name: string;
  tagline: string;
  description: string;
  specCount: string;
  imageUrl: string;
}

export interface QuoteRequest {
  companyName: string;
  contactPerson: string;
  email: string;
  phone: string;
  metalType: string;
  form: string;
  quantity: string;
  unit: 'KG' | 'Tons' | 'Pieces';
  deliveryLocation: string;
  timeline: string;
  specialRequirements: string;
}

export interface ContactInquiry {
  name: string;
  businessName: string;
  email: string;
  metalType: string;
  message: string;
}
