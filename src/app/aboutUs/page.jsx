import Image from 'next/image'

const AboutUs = () => {

  return (
    <section className="py-24 bg-[#FDFDFB] px-6 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
       <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center lg:items-start">
          {/* Left Side: Visual Composition */}
          <div className="relative">
            {/* The Main Image */}
            <div className="relative z-10 rounded-2xl overflow-hidden aspect-[4/5] shadow-2xl">
              <Image
              fill
              priority
                src='/images/clinicinfo.jpg'
                alt="Clinic Interior"
                className="w-full h-full object-cover transform hover:scale-105 transition-duration-1000"
              />
            </div>

            {/* The Floating Decorative Box */}
            {/* <div className="absolute -bottom-10 -right-10 z-20 bg-[#1C1917] p-8 md:p-12 rounded-2xl text-white hidden md:block max-w-[280px]">
              <p className="text-[10px] uppercase tracking-[0.3em] text-stone-400 mb-4">
                Our Heritage
              </p>
              <p className="text-xl font-serif italic font-light leading-relaxed">
                "Artistry meets clinical precision in the heart of Marylebone."
              </p>
            </div> */}

            {/* Subtle Background Text */}
            <span className="absolute -top-20 -left-20 text-[15rem] font-serif text-stone-100 pointer-events-none -z-0">
              Est.
            </span>
          </div>

          {/* Right Side: Content */}
          <div className="lg:pl-10">
            <header className="mb-8">
           
              <h2 className="text-5xl md:text-6xl font-serif text-stone-900 leading-[1.1] mb-8">
                Defining the <br />
                <span className="italic font-light text-stone-500">
                  New Standard
                </span>{" "}
                <br />
                of Care.
              </h2>
            </header>

            <div className="space-y-6 text-stone-600 leading-relaxed font-light">
              <p className="text-lg">
                We believe wellness is both a science and an art. At our clinic,
                we combine trusted medical expertise with a calm, personalised
                experience designed around you. Every face is unique, and so is
                every treatment. That’s why we take time to understand your
                goals and create solutions that enhance your natural
                features—never change who you are.
              </p>
            </div>
            <div className="space-y-3 py-6">
    <h3 className="text-sm uppercase tracking-[0.3em] text-stone-500 font-semibold">
      Our Vision
    </h3>
     <div className="space-y-6 text-stone-600 leading-relaxed font-light">
              <p className="text-lg">
                Our vision is to set a new standard in aesthetic care—one that is
      ethical, thoughtful, and deeply personal. We strive to create an
      environment where patients feel understood, confident, and
      empowered at every step of their journey.
              </p>
            </div>
  </div>
     <div className="space-y-3 py-6">
    <h3 className="text-sm uppercase tracking-[0.3em] text-stone-500 font-semibold">
        Our Aim
    </h3>
     <div className="space-y-6 text-stone-600 leading-relaxed font-light">
              <p className="text-lg">
                Our aim is to deliver natural, long-lasting results through safe,
      advanced treatments while building lasting relationships based on
      trust, transparency, and care.
              </p>
            </div>
  </div>

            {/* Values / Signature Stats */}
            <div className="grid grid-cols-2 gap-8 mt-12 py-8 border-t border-stone-200">
              <div>
                <p className="text-2xl font-serif text-stone-900">5k+</p>
                <p className="text-[10px] uppercase tracking-widest text-stone-400 mt-1">
                  Clients Served
                </p>
              </div>
              <div>
                <p className="text-2xl font-serif text-stone-900">100%</p>
                <p className="text-[10px] uppercase tracking-widest text-stone-400 mt-1">
                  Success rate
                </p>
              </div>
            </div>

            {/* <Link to="/">
              <button
              
                className="cursor-pointer group relative flex items-center gap-4 text-[11px] uppercase tracking-[0.1em] text-stone-900 font-medium p-6 ml-auto md:mr-16"
              >
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
