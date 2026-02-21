'use client'

import React, { useEffect, useRef, useState } from "react";
import {
  UserCheck,
  Sparkles,
  ShieldCheck,
  Heart
} from "lucide-react";

const WhyChooseUs = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const values = [
    {
      title: "Personal Attention",
      desc: "We see only one patient at a time, so the doctor can focus fully on your care without rushing.",
      icon: UserCheck,
      position: "md:translate-y-10",
    },
    {
      title: "Trusted Dental Lab",
      desc: "We work with experienced dental labs to create natural-looking crowns and restorations.",
      icon: Sparkles,
      position: "md:-translate-y-6",
    },
    {
      title: "Safe & Quality Materials",
      desc: "We use high-quality, body-safe materials that are durable and comfortable.",
      icon: ShieldCheck,
      position: "md:translate-y-14",
    },
    {
      title: "Comfort-First Care",
      desc: "Your comfort matters. We provide gentle treatment in a calm and caring environment.",
      icon: Heart,
      position: "md:translate-y-0",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#FDFDFB] overflow-hidden py-10 md:py-20"
    >
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div
          className={`mb-16 transition-all duration-700
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <h2 className="text-4xl md:text-6xl font-serif text-stone-900">
            Why Choose Us
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {values.map((item, i) => {
            const Icon = item.icon;

            return (
              <div
                key={i}
                style={{ transitionDelay: `${i * 120}ms` }}
                className={`relative bg-white p-10 border border-stone-100
                transition-all duration-700
                hover:-translate-y-2 hover:shadow-lg
                ${item.position}
                ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                  {/* Premium Icon */}
                <div className=" mb-4 md:mb-8 text-stone-300 group-hover:text-stone-900 transition-all duration-500">
                  <Icon
                    size={28}
                    strokeWidth={1}
                    className="transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-serif text-stone-900 mb-6 leading-snug">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-md text-stone-600 font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
