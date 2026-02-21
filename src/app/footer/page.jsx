import React from 'react';
import { Instagram, Facebook, Linkedin, ArrowUp } from 'lucide-react';
import Link from 'next/link'

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const navigation = {
    practice: [
      { name: 'About Us', href: '/aboutUs' },
      { name: 'Our Services', href: '/services' },
      { name: 'Gallery', href: '/gallery' },
    
    ],
    services: [
      { name: 'General Dentistry', href: '/services' },
      { name: 'Cosmetic Dentistry', href: '/services' },
      { name: 'Dental Implants', href: '/services' },
      { name: 'Teeth Whitening', href: '/services' },
      { name: 'Root Canal', href: '/services' },
      { name: 'Orthodontics', href: '/services' },
    ],
    // legal: [
    //   { name: 'Privacy Policy', href: '#' },
    //   { name: 'Patient Rights', href: '#' },
    //   { name: 'Terms of Service', href: '#' },
    // ]
  };

  return (
    <footer className="bg-[#1C1917] text-[#F7F7F2] pt-24 pb-12 px-6">
      <div className="container mx-auto max-w-7xl">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 mb-24">
          
          {/* Brand Column */}
          <div className="md:col-span-4">
            <h2 className="text-3xl font-serif tracking-tighter mb-8">Clinic name</h2>
            <p className="text-stone-300 font-light text-sm leading-relaxed max-w-xs mb-8">
             A personalized dental studio focused on excellent care and beautiful results.
            </p>
            <div className="flex gap-6 text-stone-300">
              <Instagram size={18} className="hover:text-white cursor-pointer transition-colors" />
              <Facebook size={18} className="hover:text-white cursor-pointer transition-colors" />
              <Linkedin size={18} className="hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-2">
            <h4 className="text-[12px] uppercase tracking-[0.3em] font-bold mb-8 text-stone-300">quick links</h4>
            <ul className="space-y-4">
              {navigation.practice.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-stone-300 hover:text-white transition-colors font-light italic hover:not-italic">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-[12px] uppercase tracking-[0.3em] font-bold mb-8 text-stone-300">services</h4>
            <ul className="space-y-4">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-stone-300 hover:text-white transition-colors font-light">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact / Location */}
          <div className="md:col-span-4">
            <h4 className="text-[12px] uppercase tracking-[0.3em] font-bold mb-8 text-stone-300">Inquiries</h4>
            <div className="space-y-6">
              <div>
                <p className="text-xs text-stone-300 mb-1">General Inquiries</p>
                <a href="mailto:concierge@aurelia.com" className="text-lg font-serif italic hover:text-stone-400 transition-colors">
                  mail@clinicname.com
                </a>
              </div>
              <div>
                <p className="text-xs text-stone-300 mb-1">Clinic Address</p>
                <p className="text-sm font-light text-stone-300 leading-relaxed">
               Address of your Location <br />
                  
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-stone-500 flex flex-col md:flex-row justify-between items-center gap-8">
          {/* <div className="flex gap-8 order-2 md:order-1">
            {navigation.legal.map((item) => (
              <a key={item.name} href={item.href} className="text-[9px] uppercase tracking-widest text-stone-600 hover:text-stone-400">
                {item.name}
              </a>
            ))}
          </div> */}
          
          <p className="text-[10px] uppercase tracking-widest text-stone-400 order-3 md:order-2">
            © 2026 clinic name.
          </p>

          {/* <button 
            onClick={scrollToTop}
            className="group flex items-center gap-3 order-1 md:order-3"
          >
            <span className="text-[9px] uppercase tracking-widest text-stone-400 group-hover:text-white transition-colors">Back to Top</span>
            <div className="p-2 border border-stone-800 rounded-full group-hover:border-stone-500 transition-colors">
              <ArrowUp size={14} className="text-stone-500 group-hover:text-white" />
            </div>
          </button> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;