import Image from 'next/image'
import Animation from "../../animations/expert.jsx";

import { 
  GraduationCap, 
  MapPin, 
  Languages, 
  Award, 
  Clock,
  Quote,
  Users
} from 'lucide-react';

const MasterDoctorProfile = () => {



  const expertise = [
    "General Dentistry",
    "Cosmetic Dentistry",
    "Dental Implants",
    "Tooth Whitening",
    "Root Canal",
    "Orthodontics"
  ];

  return (
    <section className="py-24 md:py-44 bg-[#F9F9F6] px-6 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-0">
          
          {/* Left Image */}
          <div className="lg:col-span-5 relative z-20">
            <div className="relative aspect-[3/4] group">
              <div className="absolute -inset-4 bg-stone-200/50 rounded-2xl -rotate-2 group-hover:rotate-0 transition-transform duration-1000" />
              
              <div className="relative h-full w-full overflow-hidden rounded-xl shadow-2xl">
                <Image
                fill
                priority
                  src='/images/expert.jpg'
                  alt="Dr. Shivani Sharma"
                  className="w-full h-full object-cover transition-all duration-1000 scale-105 group-hover:scale-100"
                />
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-7 lg:-ml-12 pt-16 lg:pt-24 relative z-10">
            <div className="bg-white p-8 md:p-20 shadow-[0_50px_100px_rgba(0,0,0,0.04)] rounded-2xl lg:rounded-r-2xl lg:rounded-l-none border-y border-r border-stone-100">
              
              {/* Header */}
              <div className="mb-12">
                <h2 className="text-5xl md:text-7xl font-serif text-stone-900 leading-[0.9] mb-4">
                  Dr. Shivani Sharma
                </h2>
                <p className="text-stone-400 font-serif italic text-xl">
                  MBBS, MD
                </p>
              </div>

              {/* Info Grid */}
              <div className="grid grid-cols-2 gap-y-10 gap-x-6 mb-16">
                <DetailBox icon={<Award size={16} />} label="Experience" value="10+ Years" />
                <DetailBox icon={<Users size={16} />} label="Patients" value="5000+" />
                <DetailBox icon={<Languages size={16} />} label="Languages" value="English / Hindi / Punjabi" />
                <DetailBox icon={<Clock size={16} />} label="Timing" value="Mon–Sat | 10:00 AM – 5:00 PM" />
              </div>

              {/* Quote */}
              <div className="relative mb-16">
                <Quote className="absolute -top-6 -left-8 text-stone-100 h-16 w-16 -z-10" />
                <p className="text-lg md:text-xl text-stone-600 font-light leading-relaxed italic">
                  "I believe a smile is not a procedure, but a portrait. My mission is to ensure every restoration honors the natural history of your face."
                </p>
              </div>

              {/* Areas of Expertise — FIXED */}
              <div className="space-y-8">
                <p className="text-center text-[12px] uppercase tracking-[0.4em] text-stone-900 font-bold">
                  Areas of Expertise
                </p>

            <div className="grid grid-cols-2 gap-2 md:flex md:flex-wrap md:justify-start">
    {expertise.map((skill, idx) => (
      <span
        key={idx}
        className="
          w-auto
          text-center
          text-[11px] text-stone-500
          border border-stone-300
          px-4 py-2 rounded-full
          uppercase tracking-wide md:tracking-widest
          hover:bg-stone-900 hover:text-white
          transition-all cursor-default
        "
      >
        {skill}
      </span>
    ))}
  </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    {/* <Link to="/">
 <button className="cursor-pointer group relative flex items-center gap-4 text-[11px] uppercase tracking-[0.1em] text-stone-900 font-medium p-6 ml-auto md:mr-16">
    <svg
      viewBox="0 0 14 14"
      fill="none"
      className="w-3 h-3 transition-transform duration-500 group-hover:-translate-x-1"
    >
      <path
        d="M13 7H1M1 7L7 1M1 7L7 13"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
   <div className="relative overflow-hidden w-8 h-px bg-stone-300 hidden md:block">
  <div className="absolute inset-0 bg-stone-900 translate-x-[100%] group-hover:translate-x-0 transition-transform duration-500"></div>
</div>


   
    <span>Back to Home</span>

  </button>
</Link> */}

 <Animation />
    </section>
  );
};

const DetailBox = ({ icon, label, value }) => (
  <div className="space-y-2">
    <div className="flex items-center gap-2 text-stone-500">
      {icon}
      <span className="text-[9px] uppercase tracking-[0.3em] font-bold">
        {label}
      </span>
    </div>
    <p className="text-md font-serif text-stone-800 italic">{value}</p>
  </div>
);

export default MasterDoctorProfile;
