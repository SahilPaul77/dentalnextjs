'use client'

import React, { useEffect, useRef } from "react";
import { Sparkles, Phone, Calendar } from "lucide-react";
import { gsap } from "gsap";
import Image from 'next/image'

const HeroSection = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 });

      tl.from(".hero-badge", {
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
      })
      // TITLE REVEAL
      .from(".mask-title span", {
        y: "100%",
        duration: 1.2,
        ease: "power4.out",
        stagger: 0.15,
      })
      // SUBTEXT REVEAL
      .from(".mask-sub span", {
        y: "100%",
        duration: 0.8,
        ease: "power3.out",
      }, "-=0.8")
      // BUTTONS FADE IN
      .from(".hero-btns", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
      }, "-=0.4");
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[90vh] md:h-screen flex items-center justify-center overflow-hidden pt-20 bg-[#F7F7F2]"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src='/images/hero2.jpg'
          className="w-full h-full object-cover opacity-40 grayscale-[40%]"
          alt="Dental Studio"
          fill
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 w-full">
        {/* Badge */}
        <div className="hero-badge inline-flex items-center gap-2 mb-8 px-4 py-1 border border-stone-300 rounded-full text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-stone-500 bg-white/50">
          <Sparkles size={12} />
          New Standards in Dentistry
        </div>

        {/* MASKED TITLE */}
        <h1 className="text-6xl sm:text-7xl md:text-9xl lg:text-[130px] font-serif leading-[1.1] md:leading-[0.85] mb-8">
          <div className="mask-title overflow-hidden h-[1.1em]">
            <span className="block">Smile With</span>
          </div>
          <div className="mask-title overflow-hidden h-[1.1em]">
          <span className="block italic font-light">Confidence.</span>
          </div>
        </h1>

        {/* MASKED SUBTEXT */}
        <div className="mask-sub overflow-hidden mb-10">
          <span className="block text-stone-700 text-lg md:text-xl font-light tracking-wide italic">
            Pain-Free & Advanced Dental Care in <span className="font-semibold text-stone-900 not-italic">Pathankot</span>
          </span>
        </div>

        {/* CTA BUTTONS */}
        <div className="hero-btns flex flex-col sm:flex-row items-center justify-center gap-5">
        <a
href="https://wa.me/917895202628?text=Hello%20Doctor,%20I%20would%20like%20to%20book%20an%20appointment"
target="_blank"
className="cursor-pointer group relative bg-stone-900 text-white px-10 py-4 rounded-full text-[11px] md:text-sm uppercase tracking-[0.2em] font-bold flex items-center gap-3"
>
<Calendar size={14} className="text-stone-400" />
Book Appointment
</a>

         <a
  href="tel:+919999999999"
  className="hidden md:flex group border border-stone-500 px-10 py-4 rounded-full text-sm md:text-base uppercase tracking-[0.2em] font-bold text-stone-700 hover:bg-white transition-all flex items-center gap-3"
>
  <Phone size={16} className="text-stone-500" />
  <span className="truncate">+91 9876543210</span>
</a>
           <a
            href="tel:+919999999999"
            className=" md:hidden group border border-stone-400 px-14 py-4 rounded-full text-[11px] uppercase tracking-[0.2em] font-bold text-stone-700 hover:bg-white transition-all flex items-center gap-3"
          >
            <div>
               <Phone size={14} className="text-stone-400" />
              </div>
           
            Call Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;