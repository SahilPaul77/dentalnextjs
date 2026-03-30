import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: "Best Dentist in Ludhiana – Dr. Shivani Sharma | Smile Care Clinic",
  description: "Looking for the best dentist in Ludhiana? Dr. Shivani Sharma provides expert dental care including root canal, braces, teeth cleaning, and more.",
};

const OurTeam = () => {

  return (
    <section className="py:20 mb-16 md:py-32 bg-white px-6 md:px-12 overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
          
          {/* Portrait Side */}
          <div className="w-full md:w-5/12 relative">
            <div  className="aspect-[4/5] bg-stone-100 overflow-hidden ">
              <Image
              fill
              priority
                src='/images/expert.jpg'
                alt="Principal Artisan"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Minimalist Name Tag Overlay */}
            <div className="absolute -bottom-6 -right-6 bg-[#1C1917] text-white p-8 hidden md:block">
              <p className="text-[10px] uppercase tracking-[0.4em] opacity-60 mb-2">Founder & Chief Dentist</p>
              <h3 className="text-xl font-serif italic">Dr. Shivani Sharma</h3>
            </div>
          </div>

          {/* Biography Side */}
          <div className="w-full md:w-1/2">
            <p className="text-[14px] uppercase tracking-[0.2em] text-stone-400 mb-8">meet the expert</p>
           <h1 className="text-4xl md:text-6xl font-serif leading-tight mb-8">
  <span className="italic">
    Dr. Shivani Sharma
  </span>
  <br />
  <span className="block md:hidden font-light text-[14px] not-italic mt-1 uppercase tracking-[0.1em] text-stone-500 ">
   Founder & Chief Dentist
  </span>
</h1>
            
            <div className="space-y-6 text-stone-500 font-light leading-relaxed max-w-md">
              <p>
               Dr. Shivani Sharma is a highly experienced dental specialist with over 10 years of expertise in advanced dental procedures. She believes in providing pain-free, patient-centric care using modern dental technology.
              </p>
             
            </div>

           <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-8">
    <Link href='/expertProfile'> <button className="cursor-pointer group relative flex items-center gap-4 text-[11px] uppercase tracking-[0.3em] text-stone-900 font-medium">
     <span>View Full Profile</span>
      <div className="relative overflow-hidden w-8 h-px bg-stone-300">
        <div className="absolute inset-0 bg-stone-900 translate-x-[-100%] group-hover:translate-x-[0%] transition-transform duration-500"></div>
      </div>
      <svg 
        viewBox="0 0 14 14" 
        fill="none" 
        className="w-3 h-3 transition-transform duration-500 group-hover:translate-x-1"
      >
        <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </button></Link>
  </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OurTeam;