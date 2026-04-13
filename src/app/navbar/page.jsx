'use client'

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import  Link  from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* --- NAVIGATION --- */}
      <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-6 md:px-12 py-5 md:py-6 backdrop-blur-md bg-white/70 border-b border-stone-100">
        {/* Logo */}
        <Link
          href="/"
          className="text-lg md:text-xl font-serif tracking-tighter uppercase font-bold"
        >
         Smile Dental Care
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-10 text-[12px] uppercase tracking-[0.1em] font-medium text-stone-600">
          <Link href="/aboutUs" className="hover:text-stone-900 transition-colors">
            About us
          </Link>
          <Link href="/services" className="hover:text-stone-900 transition-colors">
            our Services
          </Link>
          <Link href="/gallery" className="hover:text-stone-900 transition-colors">
            Gallery
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4">
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* --- Mobile Fullscreen Menu --- */}
      <div
        className={`fixed inset-0 bg-[#FDFDFB] z-40 flex flex-col transition-all duration-700 ease-in-out lg:hidden ${
          isMenuOpen
            ? "opacity-100 visibility-visible"
            : "opacity-0 visibility-hidden pointer-events-none"
        }`}
      >
        <div className="relative flex flex-col items-start justify-center h-full px-12 gap-y-10">
          <p className="text-[10px] uppercase tracking-[0.5em] text-stone-400">
            menu
          </p>

          <nav className="flex flex-col gap-8">
            {[
              { name: "About Us", to: "/aboutUs" },
              { name: "Services", to: "/services" },
              { name: "Gallery", to: "/gallery" },
              { name: "Location", to: "/googlemap" },
            ].map((item, index) => (
              <Link
                key={item.name}
               href={item.to}
                onClick={() => setIsMenuOpen(false)}
                className={`group flex items-baseline gap-4 transition-all duration-700 ${
                  isMenuOpen
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-10 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <span className="text-stone-400 text-xs font-light font-serif">
                  0{index + 1}
                </span>
                <span className="text-3xl font-serif text-stone-900 group-hover:italic group-hover:translate-x-2 transition-all">
                  {item.name}
                </span>
              </Link>
            ))}
          </nav>

          <div
            className={`mt-12 pt-8 border-t border-stone-300 w-full transition-all duration-1000 delay-500 ${
              isMenuOpen ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
