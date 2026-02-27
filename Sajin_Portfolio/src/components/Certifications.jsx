import { certificationsData } from '../data/data';
import { motion } from "framer-motion";
import { MdKeyboardDoubleArrowRight, MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { useRef } from "react";

const Certifications = () => {
  const carouselRef = useRef(null);

  const scroll = (direction) => {

    const card = carouselRef.current.querySelector(".carousel-card");

    const scrollAmount = card.clientWidth + 16;

    if (direction === "left") {
      carouselRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section
      id="certifications"
      className="flex min-h-screen justify-between items-center bg-stone-950"
    >
      <div className="w-full py-10 flex flex-col items-center gap-8 relative">

        {/* Title */}
        <div className="text-center">
          <motion.h2
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1, transition: { duration: 0.6 } }}
            viewport={{ once: true }}
            className="text-3xl lg:text-5xl font-semibold text-white mb-5"
          >
            CERTIFICATIONS
          </motion.h2>
        </div>

        {/* Carousel */}
        <div className="relative w-full max-w-6xl flex items-center">

          {/* Left Arrow  */}
          <MdKeyboardDoubleArrowLeft
            size={40}
            className="absolute left-0 z-10 cursor-pointer text-lime-300"
            onClick={() => scroll("left")}
          />

          {/* Scrollable container */}
          <div
            ref={carouselRef}
            className="flex overflow-x-auto scroll-smooth gap-4 w-full px-10 py-10  carousel-scrollbar-hide"
          >
            {certificationsData.map((cert, index) => (
              <div
                key={index}
                className="carousel-card shrink-0 w-full md:w-1/2 lg:w-1/3 bg-stone-950 rounded-2xl overflow-hidden flex flex-col outline outline-gray-900 hover:outline-lime-900 hover:shadow-[0_15px_25px_rgba(0,255,0,0.3)]"
              >
                {/* Certificate Image */}
                <img
                  src={cert?.image}
                  alt={cert?.name}
                  className="w-full h-48 object-cover"
                />

                {/* Certificate Info */}
                <div className="p-6 flex flex-col grow">
                  <h3 className="text-xl lg:text-2xl font-semibold text-white mb-2">
                    {cert?.name}
                  </h3>
                  <p className="text-lime-400 mb-2 text-sm">{cert?.issuer}</p>
                  <ul className="text-gray-300 mb-4 flex-1 leading-relaxed text-sm list-disc list-inside space-y-1">
                    {cert?.description &&
                      cert.description
                        .split(".")
                        .filter((item) => item.trim() !== "")
                        .map((point, i) => <li key={i}>{point.trim()}</li>)}
                  </ul>
                  <a
                    href={cert?.credential}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-4 py-2 text-center w-full rounded-full transition-all duration-300 ${cert?.credential !== "#"
                        ? "outline outline-lime-400 bg-lime-600 hover:bg-lime-500 hover:shadow-[0_0_15px_#84ff00] cursor-pointer text-white"
                        : "outline outline-gray-700 text-gray-500 cursor-not-allowed"
                      }`}
                  >
                    {cert?.credential !== "#" ? "View Credential" : "Not Credential"}
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow  */}  
          <MdKeyboardDoubleArrowRight
            size={40}
            className="absolute right-0 md:right-[-6px] lg:right-[-30px] z-10 cursor-pointer text-lime-300"
            onClick={() => scroll("right")}
          />
        </div>
      </div>
    </section>
  );
};

export default Certifications;