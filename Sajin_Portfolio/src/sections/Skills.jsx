import { skillsData } from "@/config/data";
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
          className="text-gray-400 text-center px-2 mb-4 tracking-wide font-inter"
          initial={{ x: 20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1, transition: { duration: 0.6 } }}
          viewport={{ once: true }}
        >
          <span className="text-white">I specialize in the following technologies </span>
          <span className="font-bold">&</span>
          <span className="text-lime-300"> frameworks to bring ideas to life through innovative solutions</span>
        </motion.p>

        <ScrollRow items={skillsData.tools} reverse={false} duration={15} />

        <ScrollRow items={skillsData.languages} reverse={true} duration={15} />
      </div>
    </section>
  );
};

export default Skills;
