import { skillsData } from "../data/data";
import ScrollRow from "./ScrollView";



const Skills = () => {

  return (
    <section id="skills" className="min-h-screen bg-stone-950 flex justify-center items-center">
     

      <div className="container w-full py-10 flex flex-col gap-8">
         <h1 className="h2 md:h1 text-white text-center">SKILLS & TECHNOLOGY</h1>
         <p className="text-lime-100 text-center px-2 mb-4 tracking-wide">I specialize in the following technologies and frameworks to bring ideas to life through innovative solutions</p>
        <ScrollRow items={skillsData.tools} reverse={false} duration={15} />

        <ScrollRow items={skillsData.languages} reverse={true} duration={15} />
      </div>
    </section>
  );
};

export default Skills;
