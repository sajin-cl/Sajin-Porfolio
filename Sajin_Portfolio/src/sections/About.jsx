import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="min-h-screen bg-stone-950 flex items-center justify-between overflow-hidden">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center gap-12 py-4">
        {/* Left side video */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <video
            poster="/world-preview.webp"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="object-contain p-3 w-full max-w-[520px] h-auto mix-blend-lighten scale-125"
          >
            <source src="https://res.cloudinary.com/dpc9p1npw/video/upload/f_auto,q_auto/world-video_oong1k.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Right side content */}
        <div className="w-full lg:w-1/2 text-center md:text-left p-3 relative">
          <motion.h1
            className="h1 text-white py-3 text-center lg:text-left"
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
            className="text-white text-base leading-normal tracking-wide py-3 [word-spacing:0.25rem] md:[word-spacing:0.5rem] font-mono text-center lg:text-left"
            initial={{  opacity: 0 }}
            whileInView={{  opacity: 1, transition: { duration: 1 } }}
            viewport={{ once: true }}
          >
            HELLO, I'M <span className="text-lime-300">SAJIN CL</span>, A
            <span className="text-lime-300"> MERN STACK DEVELOPER</span> WHO BUILDS SCALABLE AND SECURE FULL-STACK APPLICATIONS.
            I WORK WITH REACT, NODE.JS, EXPRESS, AND MONGODB TO DEVELOP RESPONSIVE
            INTERFACES AND POWERFUL BACKEND SYSTEMS. I HAVE BUILT <span className="text-lime-300">45+ RESTFUL APIS</span>,
            IMPLEMENTED <span className="text-lime-300">JWT/SESSION AUTHENTICATION & BCRYPT PASSWORD HASHING</span> AND DEVELOPED ROLE-BASED
            ECOMMERCE PLATFORMS WITH A FOCUS ON CLEAN ARCHITECTURE AND PERFORMANCE.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default About;