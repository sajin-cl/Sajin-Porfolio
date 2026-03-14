import { skillsData, proficiencyData } from "@/config/data";
import ScrollRow from "@/components/ScrollView";
import { motion } from 'framer-motion';

const Skills = () => {

  return (
    <section id="skills" className="min-h-screen bg-stone-950 flex justify-center items-center">
      <div className="container w-full py-10 flex flex-col gap-8">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1, transition: { duration: 0.6 } }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-white text-center"
        >
          SKILLS <span className="text-gray-400"> &</span> <span className="text-lime-400">TECHNOLOGY</span>
        </motion.h1>

        <motion.p
          className="text-gray-400 text-center mb-3 tracking-wide font-inter"
          initial={{ x: 20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1, transition: { duration: 0.6 } }}
          viewport={{ once: true }}
        >
          <span
            className="text-gray-400 text-xs"
          >
           I SPECIALIZE IN THE FOLLOWING TECHNOLOGIES & FRAMEWORKS TO BRING IDEAS TO LIFE THROUGH INNOVATIVE SOLUTIONS
          </span>
        </motion.p>

        <ScrollRow items={skillsData.tools} isVisible={true} reverse={false} duration={15} />

        <ScrollRow items={skillsData.techStack} isVisible={true} reverse={true} duration={15} />

        {/* Skills Explore */}
        <div className="skills-explore grid grid-cols-1 lg:grid-cols-3  mt-20 mb-5">

          {/* Proficiency */}
          <div className="proficiecy-container px-5 py-2">
            <h2 className="text-lime-300 text-xs mb-5 font-mono">PROFICIENCY</h2>
            {proficiencyData.map((prof, idx) => (
              <div
                key={idx}
                className="proficiency-bar mb-2"
              >
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs text-gray-400">{prof.name}</label>
                  <label className="text-xs text-lime-300">{prof.percentage}%</label>
                </div>

                <div className="w-full bg-gray-700 h-1 rounded overflow-hidden">
                  <div className="h-1 bg-lime-300" style={{ width: `${prof.percentage}%` }}></div>
                </div>
              </div>
            ))}
          </div>

          {/* Frontend */}
          <div className="frontend-skills-container px-5 py-2">
            <h2 className="text-lime-300 text-xs mb-5 font-mono">FRONTEND</h2>
            <div className="flex flex-wrap gap-2">
              {skillsData.techStack
                .filter((tech) => tech.type === "Frontend")
                .map((tech, idx) => (
                  <span
                    key={idx}
                    className="border border-gray-500 text-gray-400 text-xs py-1 px-2 cursor-context-menu hover:border-lime-300 hover:text-lime-300"
                  >
                    {tech.name}
                  </span>
                ))}
            </div>
          </div>

          {/* Backend */}
          <div className="backend-skills-container px-5 py-2">
            <h2 className="text-lime-300 text-xs mb-5 font-mono">BACKEND</h2>
            <div className="flex flex-wrap gap-2">
              {skillsData.techStack
                .filter((tech) => tech.type === "Backend")
                .map((tech, idx) => (
                  <span
                    key={idx}
                    className="border border-gray-500 text-gray-400 text-xs py-1 px-2 cursor-context-menu hover:border-lime-300 hover:text-lime-300"
                  >
                    {tech.name}
                  </span>
                ))}
            </div>
          </div>

          {/* Dev Tools */}
          <div className="dev-tools-container px-5 py-2">
            <h2 className="text-lime-300 text-xs mb-5 font-mono">DEV TOOLS</h2>
            <div className="flex flex-wrap gap-2">
              {skillsData.tools.map((tool, idx) => (
                <span
                  key={idx}
                  className="border border-gray-500 text-gray-400 text-xs py-1 px-2 cursor-context-menu hover:border-lime-300 hover:text-lime-300"
                >
                  {tool.name}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};

export default Skills;
