'use client'

import React, { useRef, useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, Minus } from 'lucide-react';
import Image from 'next/image'

 const galleryItems = [
   { id: 1, img: '/images/img3.jpeg', title: 'The Sanctuary', category: 'Interior' },
  { id: 2, img: '/images/img2.jpeg', title: 'Clinical Artistry', category: 'Treatments' },
  { id: 3, img: '/images/img1.jpeg', title: 'Marylebone Suite', category: 'Space' },
  { id: 4, img: '/images/img4.jpeg', title: 'The Ritual', category: 'Wellness' },
 ];

const Gallery = () => {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Intersection Observer to detect the active slide in the center
  useEffect(() => {
    const observerOptions = {
      root: scrollRef.current,
      threshold: 0.6, // Trigger when 60% of the slide is visible
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.getAttribute('data-index'));
          setActiveIndex(index);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const slides = scrollRef.current.querySelectorAll('.gallery-slide');
    slides.forEach((slide) => observer.observe(slide));

    return () => observer.disconnect();
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const slideWidth = scrollRef.current.querySelector('.gallery-slide').offsetWidth;
      const scrollAmount = direction === 'left' ? -slideWidth : slideWidth;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-[#FDFDFB] overflow-hidden">
      <div className="container max-w-6xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between md:items-end mb-16 gap-8">
          <div className="max-w-xl">
           
         <h2 className="text-4xl md:text-6xl font-serif text-stone-900 leading-tight">
              Evidence of <br />
              <span className="italic font-light text-stone-400">Transformation.</span>
            </h2>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2 text-stone-900 font-serif italic text-xl">
              <span className="opacity-100">0{activeIndex + 1}</span>
              <Minus size={24} className="rotate-90 text-stone-200" />
              <span className="text-stone-300">0{galleryItems.length}</span>
            </div>
            <div className="flex gap-3">
              <button 
                onClick={() => scroll('left')}
                className="cursor-pointer group w-14 h-14 rounded-full border border-stone-200 flex items-center justify-center hover:bg-stone-900 transition-all duration-500"
              >
                <ArrowLeft size={20} className="group-hover:text-white transition-colors cursor-pointer " strokeWidth={1.2} />
              </button>
              <button 
                onClick={() => scroll('right')}
                className="cursor-pointer group w-14 h-14 rounded-full border border-stone-200 flex items-center justify-center hover:bg-stone-900 transition-all duration-500"
              >
                <ArrowRight size={20} className="cursor-pointer group-hover:text-white transition-colors" strokeWidth={1.2} />
              </button>
            </div>
          </div>
        </div>

        {/* The Slider Container */}
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory px-[10%] lg:px-[25%] pb-10"
        >
          {galleryItems.map((item, index) => (
            <div 
              key={item.id}
              data-index={index}
              className="gallery-slide min-w-[80vw] lg:min-w-[50vw] snap-center transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)]"
              style={{ 
                opacity: activeIndex === index ? 1 : 0.3, 
                transform: activeIndex === index ? 'scale(1)' : 'scale(0.85)',
                filter: activeIndex === index ? 'grayscale(0%)' : 'grayscale(100%)'
              }}
            >
              <div className="relative aspect-[16/10] md:aspect-[16/9] rounded-[2.5rem] overflow-hidden shadow-2xl">
                <Image
                fill
                priority
                  src={item.img} 
                  alt={item.title} 
                  className={`w-full h-full object-cover transition-transform duration-[2000ms] ${activeIndex === index ? 'scale-95' : 'scale-90'}`}
                />
                
                {/* Active Caption with delayed fade-in */}
        
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;