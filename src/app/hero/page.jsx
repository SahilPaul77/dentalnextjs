'use client'

import React, { useEffect, useRef } from "react";
import { Sparkles } from "lucide-react";
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

        // TEXT MASK REVEAL — TITLE
        .from(".mask-title span", {
          y: "100%",
          opacity: 0,
          duration: 1.2,
          ease: "power4.out",
          stagger: 0.15,
        })

        // TEXT MASK REVEAL — SUBTEXT
        .from(
          ".mask-sub span",
          {
            y: "100%",
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.6"
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[90vh] md:h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src='/images/hero.jpg'
          className="w-full h-full object-cover opacity-30 grayscale-[40%]"
          alt="Dental Studio"
          fill
    priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 w-full">
        {/* Badge */}
        <div className="hero-badge inline-flex items-center gap-2 mb-6 px-4 py-1 border border-stone-300 rounded-full text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-stone-500 bg-white/50">
          <Sparkles size={12} />
          New Standards in Dentistry
        </div>

        {/* MASKED TITLE */}
        <h1 className="text-5xl sm:text-7xl md:text-9xl lg:text-[120px] font-serif leading-[1.1] md:leading-[0.9] mb-6 md:mb-8">
          <div className="mask-title overflow-hidden">
            <span className="block">Smile With</span>
          </div>
          <div className="mask-title overflow-hidden">
            <span className="block italic font-light">Confidence.</span>
          </div>
        </h1>

        {/* MASKED SUBTEXT */}
        <p className="text-stone-600 max-w-[280px] sm:max-w-md mx-auto text-base md:text-lg font-light leading-relaxed mb-8 md:mb-10">
          <span className="mask-sub overflow-hidden block">
            <span className="block">
              Quality dental care designed for comfort, confidence, and
              natural-looking smiles.
            </span>
          </span>
        </p>

        <div className="hero-btn" />
      </div>
    </section>
  );
};

export default HeroSection;
