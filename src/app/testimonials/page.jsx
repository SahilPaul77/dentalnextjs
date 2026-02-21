'use client'

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowLeft, ArrowRight } from 'lucide-react';
import Image from 'next/image'

const Testimony = () => {
  const [active, setActive] = useState(0);

  const reviews = [
    {
      quote:
        "The doctor explained everything clearly and the whole process felt very calm and professional. I was really impressed.",
      author: "Rahul Sharma",
      img: '/images/test1.jpg'
         
    },
    {
      quote:
        "I usually get nervous at dental clinics, but this place felt different. Clean, peaceful, and very well managed.",
      author: "jyoti Verma",
      img: '/images/test2.jpg'
       
    },
    {
      quote:
        "The results look very natural. Even my family couldn’t notice anything, which made me really happy.",
      author: "Priya Nair",
       img: '/images/test3.jpg'
      
    },
  ];

  const next = () =>
    setActive((prev) => (prev + 1) % reviews.length);

  const prev = () =>
    setActive((prev) => (prev - 1 + reviews.length) % reviews.length);

  return (
    <section className="py-16 md:py-32 bg-[#F7F7F2] px-6">
      {/* Heading */}
      <div className="mb-20 max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-serif text-stone-900 leading-tight">
          Real Stories. <br />
          <span className="italic font-light text-stone-400">
            Real Results.
          </span>
        </h2>

        {/* Mobile Controls — TOP */}
     <div className="flex items-center gap-8">
  {/* Counter */}
  <div className="flex items-center gap-3 font-serif italic text-xl mt-8">
    <span className="text-stone-900">
      {String(active + 1).padStart(2, '0')}
    </span>
    <span className="text-stone-300">|</span>

    <span className="text-stone-300">
      {String(reviews.length).padStart(2, '0')}
    </span>
  </div>

  {/* Arrows */}
  <div className="flex gap-3 mt-8">
    <button
      onClick={prev}
      className="w-14 h-14 rounded-full border border-stone-200
                 flex items-center justify-center
                 transition-all duration-300
                 hover:border-stone-400
                 active:scale-95 hover:bg-stone-900 hover:text-white cursor-pointer"
    >
      <ArrowLeft size={18} className="cursor-pointer transition-colors" />
    </button>

    <button
      onClick={next}
      className="w-14 h-14 rounded-full border border-stone-200
                 flex items-center justify-center
                 transition-all duration-300
                 hover:border-stone-400
                 active:scale-95 cursor-pointer hover:bg-stone-900 hover:text-white"
    >
      <ArrowRight size={18} className="cursor-pointer transition-colors" />
    </button>
  </div>
</div>


      </div>

      {/* Content */}
      <div className="relative max-w-4xl mx-auto">
        {/* Decorative Quote — DESKTOP ONLY */}
        <div className="hidden md:block absolute -top-10 left-0 text-[12rem] font-serif text-stone-300/40 select-none leading-none">
          “
        </div>

        <div className="relative z-10 flex flex-col md:flex-row items-center gap-10 md:gap-20">
          {/* Image */}
        <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border border-stone-200 p-2 relative">
  <Image
    src={reviews[active].img}
    alt={reviews[active].author}
    fill
    style={{ objectFit: "cover" }}
    className="rounded-full"
    priority
  />
</div>

          {/* Text */}
          <div className="flex-1 text-center md:text-left">
            <p className="text-xl md:text-3xl font-serif italic text-stone-800 mb-8">
              {reviews[active].quote}
            </p>

            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <h4 className="text-[11px] uppercase tracking-[0.4em] font-bold text-stone-900">
                {reviews[active].author}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimony;
