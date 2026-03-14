import { projectsData } from '@/config/data';
import { motion } from 'framer-motion';
import { useRef, useLayoutEffect } from 'react';
import { MdKeyboardDoubleArrowRight, MdKeyboardDoubleArrowLeft } from 'react-icons/md';


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
                className="carousel-card flex flex-col w-full md:w-1/2 xl:w-1/3 shrink-0  overflow-hidden bg-stone-950 outline outline-gray-900 hover:outline-lime-900 hover:shadow-[0_0_15px_rgba(0,255,0,0.3)]"
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
                  <h3 className="text-xl font-mono text-center font-semibold text-lime-100 mb-2 min-h-[3.8rem] leading-snug">
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
                  <div className="flex flex-col sm:flex-row gap-4 items-center">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm border font-mono flex items-center justify-center gap-2 border-lime-400 text-white tracking-wide  w-full hover:text-lime-300 transition-colors text-center py-1"
                    >
                      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 496 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                      </svg>
                      CODE
                    </a>

                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={` py-1 font-mono text-sm text-center w-full outline outline-lime-400 bg-lime-600 hover:bg-lime-500 hover:shadow-[0_0_15px_#84ff00] transition-all duration-300 ${!project.live ? 'cursor-not-allowed' : ''
                        }`}
                    >
                      {project.live ? 'VISIT ↗' : 'NO LIVE'}
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