'use client'

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const StatsStrip = () => {
  const stripRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Scroll-based entrance animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',     // works well for mobile & desktop
          toggleActions: 'play none none none',
        },
        defaults: { ease: 'power4.out' },
      });

      tl.fromTo(
        containerRef.current,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 }
      ).from(
        '.stat-item',
        {
          y: 20,
          opacity: 0,
          duration: 0.9,
          stagger: 0.15,
        },
        '-=0.8'
      );

      // Number counter animation (syncs with scroll reveal)
      document.querySelectorAll('.stat-number').forEach((num) => {
        const target = parseInt(num.dataset.target, 10);

        gsap.fromTo(
          num,
          { innerText: 0 },
          {
            innerText: target,
            duration: 2.5,
            snap: { innerText: 1 },
            ease: 'expo.out',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 80%',
            },
            onUpdate() {
              const value = Math.ceil(num.innerText);
              if (num.id.includes('clients')) {
                num.innerHTML = value.toLocaleString() + '+';
              } else if (num.id.includes('success')) {
                num.innerHTML = value + '%';
              } else {
                num.innerHTML = value;
              }
            },
          }
        );
      });
    }, stripRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    { id: 'clients-glass', label: 'Happy Clients', target: 5000 },
    { id: 'years-glass', label: 'Years Exp.', target: 10 },
    { id: 'success-glass', label: 'Success Rate', target: 100 },
  ];

  return (
   <div ref={stripRef} className="relative z-30 -mt-10 md:-mt-3 px-6">
      <div className="container mx-auto max-w-5xl">
        <div
          ref={containerRef}
          className="
            bg-white/40 backdrop-blur-xl
            border border-white/40
            shadow-[0_8px_32px_0_rgba(0,0,0,0.05)]
            rounded-sm
            py-8 md:py-10
            px-4 md:px-12
            flex items-center
            gap-6 md:gap-10
            overflow-hidden
            opacity-0
          "
        >
          {stats.map((stat, i) => (
            <React.Fragment key={i}>
              <div className="stat-item flex flex-col items-center text-center flex-1">
                <span
                  id={stat.id}
                  data-target={stat.target}
                  className="stat-number text-2xl md:text-4xl font-serif text-stone-900 leading-none"
                >
                  0
                </span>

                <p className="mt-2 text-[7px] md:text-[10px] uppercase tracking-[0.3em] text-stone-500 font-medium">
                  {stat.label}
                </p>
              </div>

              {/* Darker elegant divider (desktop only) */}
              {i !== stats.length - 1 && (
                <div className="hidden md:block h-12 w-[1px] bg-gradient-to-b from-transparent via-stone-400/70 to-transparent" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsStrip;
