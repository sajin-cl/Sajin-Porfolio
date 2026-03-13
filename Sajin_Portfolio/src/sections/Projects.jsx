import { projectsData } from '@/config/data';
import { motion } from 'framer-motion';
import { useRef, useLayoutEffect } from 'react';
import { MdKeyboardDoubleArrowRight, MdKeyboardDoubleArrowLeft } from 'react-icons/md';
import Typewriter from "typewriter-effect";

const Projects = () => {
  const carouselRef = useRef(null);
  const scrollAmountRef = useRef(0);

  useLayoutEffect(() => {
    const card = carouselRef.current?.querySelector('.carousel-card');
    if (card) scrollAmountRef.current = card.clientWidth + 16;
  }, []);

  const scroll = (direction) => {
    if (!carouselRef.current || !scrollAmountRef.current) return;

    carouselRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmountRef.current : scrollAmountRef.current,
      behavior: 'smooth',
    });
  };

  return (
    <section id="projects" className="flex min-h-screen justify-between items-center bg-stone-950">
      <div className="w-full py-10 flex flex-col items-center gap-8">
        <motion.h1
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1, transition: { duration: 0.6 } }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-semibold text-white  text-center"
        >
          PROJECTS
        </motion.h1>

        <div className="text-lime-500 text-center mb-0 text-sm">
          <Typewriter
            options={{
              strings: ["A collection of things I've built, tested, and improved along the way"],
              autoStart: true,
              loop: true,
              delay: 80,
              deleteSpeed: 60,
            }}
          />
        </div>

        {/* Carousel */}
        <div className="flex w-full max-w-6xl items-center relative">
          {/* Left Arrow */}
          <MdKeyboardDoubleArrowLeft
            size={40}
            onClick={() => scroll('left')}
            className="absolute z-50 left-2 md:left-4 lg:left-0 text-lime-300 cursor-pointer"
          />

          {/* Right Arrow */}
          <MdKeyboardDoubleArrowRight
            size={40}
            onClick={() => scroll('right')}
            className="absolute z-50 right-2 md:right-4 lg:right-0 text-lime-300 cursor-pointer"
          />

          {/* Scrollable container */}
          <div
            ref={carouselRef}
            className="flex gap-4 w-full py-10 px-10 md:px-10 xl:px-15 overflow-x-auto scroll-smooth carousel-scrollbar-hide"
          >
            {projectsData.map((project, index) => (
              <div
                key={index}
                className="carousel-card flex flex-col w-full md:w-1/2 xl:w-1/3 shrink-0 rounded-2xl overflow-hidden bg-stone-950 outline outline-gray-900 hover:outline-lime-900 hover:shadow-[0_15px_25px_rgba(0,255,0,0.3)]"
              >
                {/* Project Image */}
                <img
                  src={project.image}
                  alt={project.name}
                  height={400}
                  width={200}
                  className="w-full h-48 object-cover"
                />

                {/* Project Info */}
                <div className="p-6 flex flex-col grow">
                  <h3 className="text-xl lg:text-xl text-center font-semibold text-lime-100 mb-2 min-h-[3.8rem] leading-snug ">
                    {project.name}
                  </h3>
                  <p
                    className="text-gray-300 mb-4 flex-1 text-xs border-b border-gray-800 leading-loose tracking-wide pb-2"
                    title={project.description}
                  >
                    {project.description}
                  </p>

                  {/* Skills icons */}
                  <div className="flex justify-center mb-4 gap-4">
                    {project?.skills.map((skill, idx) => {
                      const Icon = skill.icon;
                      return (
                        <Icon
                          key={idx}
                          color={skill.color}
                          size={20}
                          title={skill.name}
                          className="cursor-pointer hover:scale-110"
                        />
                      );
                    })}
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="lg:text-base border border-lime-400 text-lime-400 font-bold tracking-wide px-4 py-2 rounded-full w-full hover:bg-lime-400/20 transition-colors text-center"
                    >
                      GitHub
                    </a>

                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`px-4 py-2 text-center w-full outline outline-lime-400 bg-lime-600 hover:bg-lime-500 hover:shadow-[0_0_15px_#84ff00] text-white rounded-full transition-all duration-300 ${
                        !project.live ? 'cursor-not-allowed' : ''
                      }`}
                    >
                      {project.live ? 'Live Demo' : 'Not available'}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;