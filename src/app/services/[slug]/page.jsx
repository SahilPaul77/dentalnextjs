import Image from "next/image";
import { notFound } from "next/navigation";

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

export default async function ServiceDetail({ params }) {

  const { slug } = await params; // ✅ FIX HERE

  const service = services.find(
    (s) => s.slug === slug
  );

  if (!service) {
    notFound();
  }

  return (
<section className="relative py-24 lg:py-40 bg-[#FCFAF8] min-h-screen flex items-center overflow-hidden">
  {/* Minimalist Background Detail */}
  <div className="hidden lg:block absolute left-0 top-0 w-1/4 h-full bg-[#F9F7F4] -z-0" />

  <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
    <div className="flex flex-col lg:grid lg:grid-cols-12 lg:gap-24 items-center">
      
      {/* LEFT COLUMN: The Smaller, Art-Gallery Image */}
      <div className="order-1 lg:col-span-5 flex justify-center lg:justify-end mb-16 lg:mb-0">
        <div className="relative group">
          {/* Decorative Hairline Frame */}
          <div className="absolute -inset-6 border border-stone-200 translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-1000 ease-out"></div>
          
          {/* The Image Container (Intentionally smaller for a premium feel) */}
          <div className="relative w-64 md:w-80 lg:w-[360px] aspect-[3/4] overflow-hidden bg-stone-100 shadow-sm transition-shadow duration-700 group-hover:shadow-2xl">
            <Image
              src={service.img}
              alt={service.title}
              fill
              className="object-cover transition-transform duration-[3s] ease-out group-hover:scale-110"
            />
          </div>

          {/* Vertical Accent Text */}
          <div className="hidden lg:block absolute -left-12 bottom-12 -rotate-90 origin-bottom-left">
           
          </div>
        </div>
      </div>

      {/* RIGHT COLUMN: The Content Narrative */}
      <div className="order-2 lg:col-span-7 flex flex-col items-start lg:pl-10">
        <div className="max-w-xl w-full">
          <header className="mb-14">

          
          
            
            <h1 className="text-4xl md:text-7xl font-serif text-stone-900 leading-[1.1] mb-8 tracking-tight">
              {service.title}
            </h1>
            
            <p className="text-md md:text-xl text-stone-500 font-light leading-relaxed border-stone-100">
              {service.longDesc}
            </p>
          </header>

          {/* Premium Bullet List Replacement */}
          <div className="space-y-2">
            {service.points.map((point, i) => (
              <div 
                key={i} 
                className="group flex items-center justify-between py-5 border-b border-stone-100 last:border-0 cursor-default"
              >
                <div className="flex items-center gap-6">
                  <span className="font-serif italic text-stone-300 text-lg group-hover:text-stone-800 transition-colors duration-500">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="text-stone-700 tracking-wide text-lg font-light group-hover:translate-x-3 transition-transform duration-500 ease-out">
                    {point}
                  </p>
                </div>
                {/* Minimalist interaction indicator */}
                <div className="w-1.5 h-1.5 rounded-full bg-stone-200 group-hover:bg-stone-800 transition-all duration-500 transform group-hover:scale-150"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  </div>
</section>
  );
}
