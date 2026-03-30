import AboutClinicAnimation from "../../animations/aboutClinic.jsx";
import Image from 'next/image'
import { Stethoscope, ShieldCheck, Smile, Hospital } from "lucide-react";

 export const metadata = {
  title: "About Us | Bright Smile - Trusted Dentist in Ludhiana",
  description:
    "Learn about our experienced dentist in [City], qualifications, and commitment to providing safe and painless dental care.",
};

export default function AboutClinic() {

 
  const features = [
    {
      icon: <Stethoscope size={18} />,
      title: "Expert Dentists",
      desc: "Experienced professionals providing advanced dental care",
    },
    {
      icon: <Hospital size={18} />,
      title: "Modern Facility",
      desc: "State-of-the-art equipment & infrastructure.",
    },
    {
      icon: <ShieldCheck size={18} />,
      title: "Hygienic & Safe",
      desc: "Strict sterilization and safety standards.",
    },
    {
      icon: <Smile size={18} />,
      title: "Patient Comfort",
      desc: "Our clinic focused on patient satisfaction",
    },
  ];

  return (
    <section
      id="about-section"
      className="py-12 md:py-40 bg-white px-6 overflow-hidden max-w-6xl mx-auto"
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Image */}
          <div id="about-image" className="relative group">
            <div className="overflow-hidden aspect-[4/5] md:aspect-[3/4] shadow-2xl">
              <Image
               fill
    priority
                src='/images/clinicinfo.jpg'
                alt="Boutique Clinic Interior"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 hidden md:block w-48 h-48 border border-stone-200 -z-10" />
          </div>

          {/* Text */}
          <div id="about-text" className="flex flex-col">
            <h1 className="text-4xl md:text-6xl font-serif mb-8 leading-[1.05] md:leading-[1.1]">
              About Bright Smile
            </h1>

            <p className="text-stone-500 font-light leading-relaxed mb-12 max-w-lg">
              Our dental hospital delivers comprehensive oral healthcare using
              modern technology and evidence-based treatments.
              From preventive dentistry to advanced procedures, our clinic is
              designed to ensure comfort and trust.
            </p>

            <div
              id="about-features"
              className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10"
            >
              {features.map((feature, i) => (
                <div
                  key={i}
                  className="space-y-3 feature-item"
                >
                  <div className="text-stone-900">{feature.icon}</div>
                  <h4 className="text-xs uppercase tracking-widest font-semibold text-stone-900">
                    {feature.title}
                  </h4>
                  <p className="text-[16px] text-stone-500 font-light leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

     
     <AboutClinicAnimation />
    </section>
  );
}

