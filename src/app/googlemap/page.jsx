'use client'

import { MapPin, Phone, Clock, Calendar } from "lucide-react";
import { motion } from "framer-motion";

const GoogleMapSection = () => {
  const mapEmbedUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.905029955113!2d-0.141444!3d51.515069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761ad556278b83%3A0x7ac9e7046972261a!2sWimpole%20St%2C%20London!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk";

  return (
    <motion.section
      className="py-12 mt-12 md:mt-0 bg-[#FDFDFB] px-6"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
    >
      <div className="container mx-auto max-w-6xl">
        <div className="bg-white border border-stone-100 shadow-sm overflow-hidden rounded-3xl flex flex-col lg:flex-row min-h-[600px]">

          {/* Map Side */}
          <div className="w-full lg:w-2/3 h-[400px] lg:h-auto relative transition-all duration-1000">
            <iframe
              src={mapEmbedUrl}
              className="w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Studio Location"
            ></iframe>
          </div>

          {/* Info Side */}
          <div className="w-full lg:w-1/3 p-10 md:p-12 flex flex-col justify-between overflow-auto">
            <div>
              <h2 className="text-4xl font-serif text-stone-900 mb-6 leading-tight">
                Visit our <br />
                <span className="italic font-light text-stone-400">
                  Clinic.
                </span>
              </h2>

              <div className="space-y-6 mt-10">
                <div className="flex gap-4">
                  <MapPin size={20} className="text-stone-300 mt-1" />
                  <p className="text-md text-stone-900 font-medium">
                    [Location of your clinic]
                  </p>
                </div>
              </div>

              <div className="space-y-8 mt-10">
                <div className="grid grid-cols-1 gap-3 pt-2">

                  <a
                    href="tel:+447894561230"
                    className="md:hidden w-full bg-[#1C1917] text-white h-[56px] rounded-2xl flex items-center justify-center gap-3 hover:bg-stone-800 transition-all"
                  >
                    <Phone size={18} strokeWidth={1.5} />
                    <span className="text-[12px] uppercase tracking-[0.15em] font-bold">
                      Call Clinic
                    </span>
                  </a>

                  <a
                    href="tel:+447894561230"
                    className="hidden md:flex w-full bg-[#1C1917] text-white h-[56px] rounded-2xl flex items-center justify-center gap-3 hover:bg-stone-800 transition-all"
                  >
                    <Phone size={18} strokeWidth={1.5} />
                    <span className="text-[14px] uppercase tracking-[0.15em] font-bold">
                      +91 7894561230
                    </span>
                  </a>

                  <a
                    href="https://wa.me/917895202628?text=Hello%20Doctor,%20I%20would%20like%20to%20book%20an%20appointment"
                    target="_blank"
                    className="w-full bg-[#1C1917] text-white h-[56px] rounded-2xl flex items-center justify-center gap-3 hover:bg-stone-800 transition-all"
                  >
                    <Calendar size={18} strokeWidth={1.5} />
                    <span className="text-[12px] uppercase tracking-[0.15em] font-bold">
                      Book Appointment
                    </span>
                  </a>

                </div>
              </div>
            </div>

            {/* Opening Hours */}
            <div>
              <div className="mt-12 pt-8 border-t border-stone-300">
                <div className="flex items-center gap-4 mb-10">
                  <Clock size={16} strokeWidth={1.5} className="text-stone-400" />
                  <h4 className="text-[12px] uppercase tracking-[0.3em] text-stone-500 font-semibold">
                    Opening Hours
                  </h4>
                </div>

                <div className="space-y-6">
                  <div className="flex flex-col gap-1">
                    <div className="flex justify-between items-end">
                      <span className="text-xs md:text-md uppercase tracking-widest text-stone-400 font-medium">
                        Mon — Sat
                      </span>
                      <span className="text-sm md:text-[17px] font-serif text-stone-900">
                        10:00 — 9:00
                      </span>
                    </div>

                    <div className="flex justify-between items-end">
                      <span className="text-xs md:text-md uppercase tracking-widest text-stone-400 font-medium">
                        Sunday
                      </span>
                      <span className="text-sm md:text-[17px] font-serif text-red-400 italic">
                        Closed
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default GoogleMapSection;