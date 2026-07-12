import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { CERTIFICATIONS_DATA } from '@/config/data';
import { motion } from "framer-motion";
import {  useRef } from "react";

const Certifications = () => {

  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  useGSAP(() => {
    if (!containerRef.current || !sectionRef.current) return;

    // Disable GSAP horizontal scroll on mobile to prevent excessive spacing
    if (window.innerWidth < 768) return;

    const section = sectionRef?.current;
    const container = containerRef?.current;

    const totalWidth = container.scrollWidth;
    const scrollDistance = totalWidth - window.innerWidth;

    gsap.to(container, {
      x: -scrollDistance,
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: () => `+=${scrollDistance}`,
        scrub: 1,
        pin: true,
        invalidateOnRefresh: true,
      }
    });

  }, { scope: sectionRef });



  return (
    <section
      ref={sectionRef}
      id="certifications"
      className="flex min-h-auto md:min-h-screen justify-between items-center bg-stone-950 overflow-x-hidden"
    >
      <div className="w-full py-10 flex flex-col items-center gap-1 relative">
        {/* Title */}
        <div className="certifications-headings w-full px-4 md:px-20 flex flex-col flex-wrap items-start gap-2">
          <motion.h1
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1, transition: { duration: 0.6 } }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-semibold text-white"
          >
            CERTIFI<span className="text-lime-400">CATIONS</span>
          </motion.h1>

          <motion.p
            className="text-gray-400 text-xs tracking-wide font-mono"
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1, transition: { duration: 0.6 } }}
            viewport={{ once: true }}
          >
            <span className="text-gray-400 text-xs">
              VERIFIED CERTIFICATIONS AND ACHIEVEMENTS ( {CERTIFICATIONS_DATA.length || 6} )
            </span>
          </motion.p>
        </div>

        {/* Carousel */}
        <div className="relative w-full max-w-full flex items-center">
          {/* Scrollable container */}
          <div
            ref={containerRef}
            className="flex  scroll-smooth gap-4 w-full px-10 md:px-10 xl:px-15 py-3 carousel-scrollbar-hide overflow-x-auto md:overflow-x-visible"
          >
            {CERTIFICATIONS_DATA.map((cert, index) => (
              <div
                key={index}
                className="carousel-card shrink-0 w-full md:w-1/2 lg:w-1/3 bg-stone-950 overflow-hidden flex flex-col outline outline-gray-900 hover:outline-lime-900 "
              >
                {/* Certificate Image */}
                <img
                  src={cert?.image}
                  alt={cert?.name}
                  width={400}
                  height={200}
                  className="w-full h-60 object-cover"
                />

                {/* Certificate Info */}
                <div className="p-6 flex flex-col grow">
                  <h3 className="text-lg font-mono font-bold text-white mb-2 min-h-[2rem]">
                    {cert?.name.toUpperCase()}
                  </h3>
                  <p className="text-lime-400 mb-2 text-xs border-b pb-3 border-gray-800">
                    <span
                      className="inline-block w-2 h-2 mr-2 bg-lime-400 rounded-full animate-pulse shadow-[0_0_8px_#84cc16] [animation-duration:0.7s]"
                    ></span>
                    <span>{cert?.issuer}</span>
                  </p>

                  <a
                    href={cert?.credential}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`py-1 font-mono text-center w-full transition-all duration-300 ${cert?.credential
                      ? "outline outline-lime-400 bg-lime-600 hover:bg-lime-500 hover:shadow-[0_0_15px_#84ff00] cursor-pointer text-white"
                      : "outline outline-gray-700 text-gray-500 cursor-not-allowed"
                      }`}
                  >
                    {cert?.credential ? "VIEW CREDENTIAL" : "NOT CREDENTIAL"}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;