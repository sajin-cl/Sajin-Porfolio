import { projectsData } from '../data/data'
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { MdKeyboardDoubleArrowRight, MdKeyboardDoubleArrowLeft } from "react-icons/md";

const Projects = () => {

  const carouselRef = useRef(null);

  const scroll = (direction) => {

    const card = carouselRef.current.querySelector('.carousel-card');

    const scrollAmount = card.clientWidth + 16;

    if (direction === 'left') {
      carouselRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
    else {
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }

  };


  return (
    <section id="projects" className="flex min-h-screen justify-between items-center bg-stone-950">
      <div className="w-full py-10 bg-stone-950 flex flex-col items-center gap-8">
        <div className="text-center">
          <motion.h2
            initial={{ y: 100, opacity: 0 }} whileInView={{ y: 0, opacity: 1, transition: { duration: 0.6 } }} viewport={{ once: true }}
            className="text-3xl lg:text-5xl font-semibold text-white mb-5"
          >
            PROJECTS
          </motion.h2>

        </div>

        {/* Courousil */}
        <div className='flex w-full max-w-6xl items-center relative '>

          {/* left arrow */}
          <MdKeyboardDoubleArrowLeft
            size={40}
            onClick={() => { scroll('left') }}
            className='absolute left-0 z-50 text-lime-300 cursor-pointer'
          />


          {/* scrollable container */}
          <div
            ref={carouselRef}
            className="flex gap-4 w-full  p-10 overflow-x-auto scroll-smooth carousel-scrollbar-hide"
          >
            {projectsData.map((project, index) => (

              /* project card */
              <div
                key={index}
                className="carousel-card flex flex-col w-full md:w-1/2 lg:w-1/3 shrink-0  rounded-2xl overflow-hidden bg-stone-950 outline outline-gray-900
             hover:outline-lime-900  hover:shadow-[0_15px_25px_rgba(0,255,0,0.3)]"
              >

                {/* Project Image */}
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-48 object-cover"
                />

                {/* Project Info */}
                <div className="p-6 flex flex-col grow ">
                  <h3 className="text-xl lg:text-2xl font-semibold text-white mb-2  md:flex-1">
                    {project.name}
                  </h3>
                  <p className="text-gray-300  mb-4 flex-1   leading-loose tracking-wide" title={project.description}>{project.description}</p>

                  {/* Buttons */}
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className=" lg:text-base border border-lime-400 text-lime-400 font-bold 
                       tracking-wide px-4 py-2  rounded-full w-full hover:bg-lime-400/20 transition-colors text-center cursor-pointer "
                    >
                      GitHub
                    </a>

                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`px-4 py-2 text-md text-center w-full outline outline-lime-400 bg-lime-600  hover:bg-lime-500 hover:shadow-[0_0_15px_#84ff00]
                     text-white  rounded-full transition-all duration-300 ${project.live == '#' ? "cursor-not-allowed" : ""}`}
                    >
                      {project.live !== '#' ? "Live Demo" : "Not available"}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* right arrow */}
          <MdKeyboardDoubleArrowRight
            size={40}
            onClick={() => { scroll('right') }}
            className='absolute right-0 md:right-[-6px] lg:right-[-30px] z-50 text-lime-300 cursor-pointer'
          />

        </div>
      </div>
    </section>
  );
};

export default Projects;
