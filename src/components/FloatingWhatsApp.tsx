import { MessageSquare } from 'lucide-react';

export default function FloatingWhatsApp() {
  const whatsappUrl = 'https://wa.me/917013361790?text=Hello%20Hospira%20Steel%20%26%20Alloy%2C%20I%20would%20like%20to%20request%20a%20quote%20for%20premium%20metals.';

  return (
    <a
      id="whatsapp-trigger"
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] transition-all duration-300 hover:scale-110 active:scale-95 group"
      aria-label="Contact us on WhatsApp"
    >
      {/* Pulse ring indicator */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-70 animate-ping group-hover:animate-none scale-105 pointer-events-none" />
      
      {/* Icon */}
      <MessageSquare className="w-6 h-6 text-white relative z-10" />
      
      {/* Label on hover */}
      <span className="absolute right-16 bg-[#1A1A1A] border border-gold/20 text-gold-light text-xs font-medium py-1.5 px-3 rounded-md opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap shadow-xl">
        Chat with Metal Expert
      </span>
    </a>
  );
}
