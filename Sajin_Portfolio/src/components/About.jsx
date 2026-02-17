import { motion } from "framer-motion";

const About = () => {

  return (
    <section id="about" className="min-h-screen bg-stone-950 flex items-center justify-between overflow-hidden">
      <div className=" container mx-auto flex flex-col md:flex-row justify-between items-center gap-12 py-4">

        {/*  Left side image */}
        <div className="w-full md:w-1/2">

          <img src="/working-avatar.png" alt="" className=" object-contain p-3 w-full max-w-[520px] md:w-[520px] md:h-[520px]" />
        </div>

        {/* Right side content */}
        <div className="w-full md:w-1/2 text-center md:text-left p-3 relative">

          <motion.h1
            className="h1 text-white py-3"
            initial={{ x: -50, opacity: 0 }} whileInView={{ x: 0, opacity: 1, transition: { duration: 0.5 } }} viewport={{ once: true }}
          >
            About Me
          </motion.h1>
          <motion.h6
            className="h6 text-lime-200 py-3"
            initial={{ x: 50, opacity: 0 }} whileInView={{ x: 0, opacity: 1, transition: { duration: 0.5 } }} viewport={{ once: true }}
          >MERN Stack Developer | React Developer | Node Developer
          </motion.h6>
          <motion.p
            className="text-white text-xl leading-normal tracking-wide p-3 [word-spacing:0.25rem] md:[word-spacing:0.5rem]"
             initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1, transition: { duration: 0.6 } }} viewport={{ once: true }}
          >
            Hello, I'm Sajin CL , a MERN Stack Developer. I enjoy building responsive, functional, and scalable web applications, from mobile-friendly websites to full-featured desktop sites. I am passionate about creating clean, efficient code and delivering seamless user experiences.
          </motion.p>
        </div>

      </div>
    </section>
  )
};

export default About;