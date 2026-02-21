import Image from "next/image";
import { ArrowRight, ShieldCheck } from "lucide-react";
import Link from 'next/link'

const SignatureServices = () => {

  const services = [
    {
      id: "01",
       slug: "general-dentistry",
      title: "General Dentistry",
      desc: "Complete oral checkups, fillings, and preventive dental care.",
      img: "/images/hero.jpg",
      longDesc: "Our general dentistry focuses on the biological longevity of your smile. We use high-magnification diagnostics to catch issues before they require invasive work.",
      points: ["Microscopic Examination", "BPA-Free Fillings", "Periodontal Therapy"]
    },
    {
      id: "02",
      slug:"cosmetic-dentistry",
      title: "Cosmetic Dentistry",
      desc: "Smile designing, teeth whitening, and aesthetic treatments.",
      img: "/images/service2.jpg",
      longDesc: "Artistry meets anatomy. We design smiles that harmonize with your unique facial features using digital smile design protocols and master-crafted porcelain.",
      points: ["Porcelain Veneers", "Smile Architecture", "Gum Contouring"]
    },
    {
      id: "03",
      slug: "dental-implants",
      title: "Dental Implants",
      desc: "Permanent and natural-looking solutions for missing teeth.",
      img: "/images/service3.jpg",
      longDesc: "Restore function and confidence with biomimetic implants that integrate seamlessly with your bone structure for a lifetime of strength.",
      points: ["Titanium & Zirconia Options", "Computer-Guided Placement", "Same-Day Restorations"]
    },
    {
      id: "04",
      slug: "teeth-whitening",
      title: "Teeth Whitening",
      desc: "Advanced whitening treatments for a brighter smile.",
      img: "/images/service4.gif",
      longDesc: "Professional grade whitening that protects your enamel while removing years of staining. Achieve up to 8 shades lighter in a single session.",
      points: ["Laser-Assisted Whitening", "Sensitivity-Free Formula", "Custom Home Care Kits"]
    },
    {
      id: "05",
      slug: "root-canal",
      title: "Root Canal",
      desc: "Pain-free root canal treatments using modern technology.",
      img: "/images/service5.jpeg",
      longDesc: "Root canals shouldn't be feared. Our endodontic specialists use rotary technology and thermal filling for a fast, pain-free experience.",
      points: ["Rotary Endodontics", "Apex Localization", "Micro-Sealing Technology"]
    },
    {
      id: "06",
      slug: "orthodontics",
      title: "Orthodontics",
      desc: "Braces and aligners for perfect teeth alignment.",
      img: "/images/service6.jpg",
      longDesc: "From clear aligners to lingual braces, we provide orthodontic solutions that fit your lifestyle while achieving biological symmetry.",
      points: ["Invisalign® Platinum Provider", "Interceptive Orthodontics", "Accelerated Treatment"]
    },
  ];

  return (
    <section className="py-12  bg-[#F7F7F2] px-6 relative">
      <div className="container mt-16 mx-auto max-w-6xl">

        {/* Header */}
        <div className="mb-14 border-b border-stone-200 pb-8 flex justify-between items-end">
          <h2 className="text-4xl md:text-6xl font-serif">Our Services</h2>
        </div>

        {/* Services Grid (Design Unchanged) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 md:gap-x-20 md:gap-y-20">

          {services.map((service, i) => (
            <Link href={`/services/${service.slug}`} key={i}>
            <div
              key={i}
              className="group flex items-start gap-6 md:gap-10 border-b border-stone-100 pb-8 md:pb-0"
            >
              {/* Image */}
              <div className="relative flex-shrink-0 w-28 h-28 md:w-52 md:h-52 overflow-hidden bg-stone-100 shadow-sm">
                <Image
                  src={service.img}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-stone-900/0" />
              </div>

              {/* Text */}
              <div className="flex flex-col justify-center h-28 md:h-52">
                <div className="flex items-center gap-3 mb-2 md:mb-4">
                  <span className="text-[14px] md:text-xl font-serif text-stone-400 md:text-stone-300">
                    {service.id}
                  </span>
                  <h3 className="text-lg md:text-2xl font-serif text-stone-900">
                    {service.title}
                  </h3>
                </div>

                <p className="text-md text-stone-500 font-light leading-snug md:leading-relaxed max-w-[180px] md:max-w-sm mb-3 md:mb-5">
                  {service.desc}
                </p>

                 <div className="flex items-center gap-2 text-[9px] md:text-[10px] uppercase tracking-widest font-medium opacity-100 md:opacity-0 md:group-hover:opacity-100 transition cursor-pointer">
                  Learn More <ArrowRight size={14} />
                </div>
              </div>
            </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SignatureServices;
