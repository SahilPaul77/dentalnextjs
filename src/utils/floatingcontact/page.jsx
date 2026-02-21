'use client'

import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';
import Image from 'next/image'


const BoutiqueContactFloat = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const phone = "+442071234567";
  const whatsappUrl = `https://wa.me/1234567890?text=Hello, I'd like to inquire about a consultation.`;

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end gap-4">
      
      {/* Expanded Options */}
      <div
        className={`flex flex-col gap-4 transition-all duration-500 ease-out ${
          isOpen
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
      >
        
        {/* Call Option */}
        <div className="flex items-center gap-4 group">
          <span className="bg-white/95 backdrop-blur-md px-4 py-2 rounded-full text-[12px] uppercase tracking-widest text-stone-900 shadow-lg border border-stone-100">
            call inquiry
          </span>
          <a
            href={`tel:${phone}`}
            className="w-10 h-10 bg-white text-stone-900 rounded-full flex items-center justify-center shadow-xl hover:bg-stone-900 hover:text-white transition-all duration-300"
          >
         <Image
  src="/images/call.png"
  alt="call"
  width={32}
  height={32}
  className="object-contain"
/>
          </a>
        </div>

        {/* WhatsApp Option */}
        <div className="flex items-center gap-4 group">
          <span className="bg-white/95 backdrop-blur-md px-6 py-2 rounded-full text-[12px] uppercase tracking-widest text-stone-900 shadow-lg border border-stone-100">
          WhatsApp
          </span>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 bg-white text-stone-900 rounded-full flex items-center justify-center shadow-xl hover:bg-stone-900 hover:text-white transition-all duration-300"
          >
         <Image
  src="/images/whatsapp.png"
  alt="whatsapp"
  width={32}
  height={32}
  className="object-contain"
/>
          </a>
        </div>
      </div>

      {/* Main Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`relative cursor-pointer w-16 h-16 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(0,0,0,0.40)] transition-all duration-700 ${
          isOpen
            ? 'bg-stone-100 text-stone-900 rotate-180'
            : 'bg-[#1C1917] text-white rotate-0'
        }`}
      >
        {isOpen ? <X size={24} strokeWidth={1} /> : <Plus size={24} strokeWidth={1} />}

        {/* Subtle Static Ring (FIXED) */}
        <div
          className={`pointer-events-none absolute inset-0 rounded-full border border-stone-200/50 transition-all duration-700 ${
            isOpen ? 'scale-110 opacity-0' : 'scale-100 opacity-100'
          }`}
        />
      </button>
    </div>
  );
};

export default BoutiqueContactFloat;
