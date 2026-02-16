import { projectsData } from '../data/data'

const Projects = () => {
  return (
    <section id="projects" className="flex min-h-screen justify-between items-center bg-stone-950">
      <div className="w-full py-10 bg-stone-950 flex flex-col items-center gap-8">
        <div className="text-center">
          <h2 className="text-3xl lg:text-5xl font-semibold text-white mb-5">
            PROJECTS
          </h2>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl px-4">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="bg-stone-950 rounded-2xl overflow-hidden flex flex-col outline outline-gray-900
             hover:outline-lime-900  hover:shadow-[0_15px_25px_rgba(0,255,0,0.3)] px-2 py-1"
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
                <p className="text-gray-300  mb-4 flex-1 overflow-hidden  leading-loose tracking-wide" title={project.description}>{project.description}</p>

                {/* Buttons */}
                <div className="flex gap-4">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-md lg:text-base border-1 border-lime-400 text-lime-400 font-bold 
             tracking-wide px-4 py-2  rounded-full w-full hover:bg-lime-400/20 transition-colors text-center cursor-pointer "
                  >
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-md text-center w-full outline outline-lime-400 bg-lime-600  hover:bg-lime-500 hover:shadow-[0_0_15px_#84ff00]
                     text-white text-md rounded-full transition-all duration-300"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
