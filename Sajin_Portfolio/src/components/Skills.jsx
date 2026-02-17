import { skillsData } from "../data/data";
import ScrollRow from "./ScrollView";
import { motion } from 'framer-motion';



const Skills = () => {

  return (
    <section id="skills" className="min-h-screen bg-stone-950 flex justify-center items-center">


      <div className="container w-full py-10 flex flex-col gap-8">
        <motion.h1
          initial={{ y: -50, opacity: 0 }} whileInView={{ y: 0, opacity: 1, transition: { duration: 0.6 } }} viewport={{ once: true }}
          className="h2 md:h1 text-white text-center"
        >
          SKILLS & TECHNOLOGY
        </motion.h1>
        <motion.p
          className="text-lime-100 text-center px-2 mb-4 tracking-wide"
          initial={{ x: 20, opacity: 0 }} whileInView={{ x: 0, opacity: 1, transition: { duration: 0.6 } }} viewport={{ once: true }}
        >
          I specialize in the following technologies and frameworks to bring ideas to life through innovative solutions
        </motion.p>
        <ScrollRow items={skillsData.tools} reverse={false} duration={15} />

        <ScrollRow items={skillsData.languages} reverse={true} duration={15} />
      </div>
    </section>
  );
};

export default Skills;
