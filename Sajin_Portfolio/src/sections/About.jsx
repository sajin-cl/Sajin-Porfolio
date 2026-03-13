import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="min-h-screen bg-stone-950 flex items-center justify-between overflow-hidden">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center gap-12 py-4">
        {/* Left side video */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <video
            src="/world-video.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="object-contain p-3 w-full max-w-[520px] h-auto mix-blend-lighten scale-125"
          ></video>
        </div>

        {/* Right side content */}
        <div className="w-full lg:w-1/2 text-center md:text-left p-3 relative">
          <motion.h1
            className="h1 text-white py-3 text-center lg:text-left "
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1, transition: { duration: 0.5 } }}
            viewport={{ once: true }}
          >
            ABOUT <span className="text-gray-300">ME</span> →
          </motion.h1>

          <motion.h2
            className="text-sm font-semibold text-white py-3 font-sans text-center lg:text-left flex items-center lg:justify-normal justify-center gap-3"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1, transition: { duration: 0.5 } }}
            viewport={{ once: true }}
          >
            <span
              className="text-white rounded-full px-4 py-1 text-xs outline outline-lime-500 hover:bg-lime-400 hover:text-black cursor-pointer"
            >MERN STACK DEVELOPER </span>
            <span
              className="text-white rounded-full px-4 py-1 text-xs outline outline-lime-500 hover:bg-lime-400 hover:text-black cursor-pointer"
            >REACT DEVELOPER </span>
            <span
              className="text-white rounded-full px-4 py-1 text-xs outline outline-lime-500 hover:bg-lime-400 hover:text-black cursor-pointer"
            >NODE DEVELOPER </span>
          </motion.h2>

          <motion.p
            className="text-white text-xl leading-normal tracking-wide py-3 [word-spacing:0.25rem] md:[word-spacing:0.5rem] font-sans text-center lg:text-left"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1, transition: { duration: 0.6 } }}
            viewport={{ once: true }}
          >
            Hello, I'm <span className="text-lime-300">Sajin CL</span>, a
            <span className="text-lime-300"> MERN Stack Developer</span>. I enjoy building responsive, functional,
            and scalable web applications, from mobile-friendly websites to full-featured desktop sites. I am passionate
            about creating clean, efficient code and delivering seamless user experiences.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default About;