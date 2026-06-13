import { SKILLS_DATA, PROFICIENCY_DATA, SERVICE_INTEGRATIONS_DATA } from "@/config/data";
import SkillsMarque from "@/components/SkillsMarque";
import { delay, easeOut, motion } from 'framer-motion';

const Skills = () => {

  return (
    <section id="skills" className="min-h-screen bg-stone-950 pt-5 flex justify-center items-center">
      <div className="container w-full  py-10 flex flex-col gap-4">
        <motion.h1
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1, transition: { duration: 0.6 } }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-white group px-4 md:px-10"
        >
          <span className="text-white group-hover:text-lime-400 transition duration-300">SKILLS</span>
          <span className="text-gray-400"> &</span> <span className="text-lime-400 group-hover:text-white transition duration-300">TECHNOLOGY</span>
        </motion.h1>

        <motion.p
          className="text-gray-400 mb-3 tracking-wide font-inter px-4 md:px-10"
          initial={{ x: 20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1, transition: { duration: 0.6 } }}
          viewport={{ once: true }}
        >
          <span
            className="text-gray-400 text-xs font-mono"
          >
            I SPECIALIZE IN THE FOLLOWING TECHNOLOGIES & FRAMEWORKS TO BRING IDEAS TO LIFE THROUGH INNOVATIVE SOLUTIONS
          </span>
        </motion.p>

        {/* ------ Skills Marques section start------ */}
        <SkillsMarque items={SKILLS_DATA.tools} reverse={false} duration={15} />
        <SkillsMarque items={SKILLS_DATA.techStack} reverse={true} duration={15} />
        {/* ------ Skills Marques section end   ----- */}

        {/* Skills Explore */}
        <div className="skills-explore grid grid-cols-1 lg:grid-cols-3  mt-20 mb-5">

          {/* Proficiency */}
          <div className="proficiecy-container px-5 py-2">
            <h2 className="text-lime-300 text-xs mb-5 font-mono">PROFICIENCY</h2>
            {PROFICIENCY_DATA.map((prof, idx) => (
              <div
                key={idx}
                className="proficiency-bar mb-2"
              >
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs text-gray-400">{prof.name}</label>
                  <label className="text-xs text-lime-300">{prof.percentage}%</label>
                </div>

                <div className="w-full bg-gray-700 h-1 rounded overflow-hidden">
                  <motion.div
                    className="h-1 bg-lime-300"
                    initial={{ width: "0%" }}
                    whileInView={{ width: `${prof.percentage}%` }}
                    transition={{ duration: 1, delay: idx * 0.2 }}
                  ></motion.div>
                </div>
              </div>
            ))}
          </div>

          {/* Frontend skills*/}
          <div className="frontend-skills-container px-5 py-2">
            <h2 className="text-lime-300 text-xs mb-5 font-mono">FRONTEND</h2>
            <div className="flex flex-wrap gap-2">
              {SKILLS_DATA.techStack
                .filter((tech) => tech.type === "Frontend")
                .map((tech, idx) => (
                  <motion.span
                    key={idx}
                    initial={{ y: -10, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.2, delay: idx * 0.1, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="border border-gray-500 text-gray-400 text-xs py-1 px-2 cursor-context-menu hover:border-lime-300 hover:text-lime-300"
                  >
                    {tech.name}
                  </motion.span>
                ))}
            </div>
          </div>

          {/* Backend skills*/}
          <div className="backend-skills-container px-5 py-2">
            <h2 className="text-lime-300 text-xs mb-5 font-mono">BACKEND</h2>
            <div className="flex flex-wrap gap-2">
              {SKILLS_DATA.techStack
                .filter((tech) => tech.type === "Backend")
                .map((tech, idx) => (
                  <motion.span
                    key={idx}
                    initial={{ y: -10, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.2, delay: idx * 0.1, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="border border-gray-500 text-gray-400 text-xs py-1 px-2 cursor-context-menu hover:border-lime-300 hover:text-lime-300"
                  >
                    {tech.name}
                  </motion.span>
                ))}
            </div>
          </div>

          {/* SERVICES & INTEGRATIONS */}
          <div className="service-integrations-container px-5 py-2">
            <h2 className="text-lime-300 text-xs mb-5 font-mono">SERVICES & INTEGRATIONS</h2>
            <div className="flex flex-wrap gap-2">
              {SERVICE_INTEGRATIONS_DATA.map((service, idx) => (
                <motion.span
                  key={idx}
                  initial={{ y: -10, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.2, delay: idx * 0.1, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="border border-gray-500 text-gray-400 text-xs py-1 px-2 cursor-context-menu hover:border-lime-300 hover:text-lime-300"
                >
                  {service?.name}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Dev Tools */}
          <div className="dev-tools-container px-5 py-2">
            <h2 className="text-lime-300 text-xs mb-5 font-mono">DEV TOOLS</h2>
            <div className="flex flex-wrap gap-2">
              {SKILLS_DATA.tools.map((tool, idx) => (
                <motion.span
                  key={idx}
                  initial={{ y: -10, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.2, delay: idx * 0.1, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="border border-gray-500 text-gray-400 text-xs py-1 px-2 cursor-context-menu hover:border-lime-300 hover:text-lime-300"
                >
                  {tool.name}
                </motion.span>
              ))}
            </div>
          </div>

        </div>
      </div>

    </section >
  );
};

export default Skills;
