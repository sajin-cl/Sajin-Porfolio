import { motion } from "framer-motion";
import Counter from "@/components/Counter";
import { useState } from "react";
import { Link } from "react-router-dom";

const About = () => {

  const [start, setStart] = useState(false);//used for counter

  return (
    <section id="about" className="min-h-screen bg-stone-950 mt-20 overflow-x-hidden">
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
            ABOUT <span className="text-lime-300">ME</span> →
          </motion.h1>

          <motion.h2
            className="text-sm font-semibold text-white py-3 font-sans text-center lg:text-left flex items-center lg:justify-normal justify-center gap-3"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1, transition: { duration: 0.5 } }}
            viewport={{ once: true }}
          >
            <span
              className="hidden md:block text-white rounded-full px-4 py-1 text-xs outline outline-lime-500 hover:bg-lime-400 hover:text-black cursor-pointer"
            >MERN STACK DEVELOPER </span>
            <span
              className="hidden md:block text-white rounded-full px-4 py-1 text-xs outline outline-lime-500 hover:bg-lime-400 hover:text-black cursor-pointer"
            >REACT DEVELOPER </span>
            <span
              className="hidden md:block text-white rounded-full px-4 py-1 text-xs outline outline-lime-500 hover:bg-lime-400 hover:text-black cursor-pointer"
            >NODE DEVELOPER </span>
            <span
              className="hidden md:block text-white rounded-full px-4 py-1 text-xs outline outline-lime-500 hover:bg-lime-400 hover:text-black cursor-pointer"
            >FREELANCER </span>
          </motion.h2>

          <motion.p
            className="text-white text-base leading-normal tracking-wide py-3 [word-spacing:0.25rem] md:[word-spacing:0.5rem] font-mono text-center lg:text-left"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 1 } }}
            viewport={{ once: true }}
          >
            HELLO, I'M <span className="text-lime-300">SAJIN CL</span>, A
            <span className="text-lime-300"> FREELANCE MERN STACK DEVELOPER</span> WHO BUILDS SCALABLE AND SECURE FULL-STACK APPLICATIONS.
            I WORK WITH REACT.JS, NEXT.JS, NODE.JS, EXPRESS, AND MONGODB TO DEVELOP RESPONSIVE
            INTERFACES, POWERFUL BACKEND SYSTEMS, AND <span className="text-lime-300">SEO & SPEED OPTIMIZATION</span>. I HAVE BUILT <span className="text-lime-300">50+ RESTFUL APIS</span>,
            IMPLEMENTED <span className="text-lime-300">JWT/SESSION AUTHENTICATION & BCRYPT PASSWORD HASHING</span> AND DEVELOPED ROLE-BASED
            ECOMMERCE PLATFORMS WITH A FOCUS ON CLEAN ARCHITECTURE AND PERFORMANCE.
          </motion.p>
        </div>
      </div>

      {/* FAQ DETAILS COMTAINER */}
      <div className="faq-section relative ">

        <span className="absolute top-1/12 right-15 transform -translate-y-1/2 text-gray-400 text-9xl font-bold opacity-20 pointer-events-none select-none hidden lg:block">
          QUALITY <span className="block text-3xl leading-tight tracking-[1em] text-center">FIRST</span>
        </span>

        <span className="absolute top-10/12 left-15   text-gray-400 text-9xl font-extrabold opacity-20 pointer-events-none select-none font-popins hidden xl:block">
          100 %  SPEED
          <span className="block text-3xl leading-tight tracking-[1em] text-center">RUN LIKE A HORSE</span>
        </span>

        {/* Happy Clients */}
        <motion.div
          onViewportEnter={() => setStart(true)}
          viewport={{ once: true, amount: 0.6 }}
          className="happy-clients text-start my-20 px-4 md:px-20 flex flex-wrap items-center justify-center md:justify-self-start gap-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-wide">
            <motion.span
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1, transition: { duration: 0.6 } }}
              viewport={{ once: true }}
              className="text-white block">HAPPY</motion.span>
            <motion.span
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1, transition: { duration: 0.6 } }}
              viewport={{ once: true }}
              className="text-lime-400 ">CLIENTS</motion.span>
          </h1>
          <motion.span
            initial={{ y: -80, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1, transition: { duration: 0.6 } }}
            viewport={{ once: true }}
            className="inline-block text-lime-300 text-9xl font-bold">
            <Counter value={3} start={start} />
          </motion.span>
        </motion.div>

        {/* Contact Call to Action */}
        <motion.span
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1, transition: { duration: 0.6 } }}
          viewport={{ once: true }}
          className="text-gray-100  text-4xl text-end block tracking-widest px-4 md:px-20 mt-20 mb-5"
        >
          <span className="text-7xl">D</span>O YOU
          <span className="text-lime-300"> WANT A WEBSITE?</span>
        </motion.span>

        <span className="group text-gray-100 text-4xl text-end block tracking-widest px-4 md:px-20 mb-20">
          <span className="group-hover:text-lime-300 duration-500">JUST</span>
          <Link to="#contact" className="text-lime-300 cursor-pointer group-hover:text-gray-100 duration-200 animate-pulse ml-2 group-hover:ml-3 group-hover:font-bold">CONTACT NOW</Link>
        </span>

        {/* Query about main Stack */}
        <motion.span
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1, transition: { duration: 0.6 } }}
          viewport={{ once: true }}
          className="text-gray-100  text-4xl text-start block tracking-widest px-4 md:px-20 mt-20 mb-5"
        >
          <span className="text-7xl">W</span>HAT IS YOUR
          <span className="text-lime-300" > PRIMARY STACK?</span>
        </motion.span>

        <span className="group text-gray-100 text-4xl text-start block tracking-widest px-4 md:px-20 mb-20"
          title="MongoDB, Express.js, React.js, Node.js"
        >
          <span className="group-hover:text-lime-300 duration-500 animate-pulse mr-2 group-hover:mr-3 group-hover:font-bold">MERN</span>
          <Link className="text-lime-300  group-hover:text-gray-100 duration-200 ">Stack</Link>
        </span>


        {/* performance Query */}
        <motion.span
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1, transition: { duration: 0.6 } }}
          viewport={{ once: true }}
          className="text-gray-100 text-4xl text-end block tracking-widest px-4 md:px-20 mt-20 mb-7"
        >
          <span className="text-7xl">H</span>ow do you ensure
          <span className="text-lime-300"> WEBSITE SPEED?</span>
        </motion.span>

        <ul className="group text-gray-100 text-4xl block tracking-widest px-4 md:px-20 mb-20 max-w-max ml-auto">
          <li className="text-xl mb-3 grid grid-cols-[auto_1fr] gap-3 items-center">
            <span className="text-gray-400">→</span>
            <div>
              <span>Compress</span>
              <span className="text-lime-300 font-bold"> Images</span>
            </div>
          </li>
          <li className="text-xl mb-3 grid grid-cols-[auto_1fr] gap-3 items-center">
            <span className="text-gray-400">→</span>
            <div>
              <span>Lazy</span>
              <span className="text-lime-300 font-bold"> Loading</span>
            </div>
          </li>
          <li className="text-xl mb-3 grid grid-cols-[auto_1fr] gap-3 items-center">
            <span className="text-gray-400">→</span>
            <div>
              <span>Minify</span>
              <span className="text-lime-300 font-bold"> Code</span>
            </div>
          </li>
        </ul>

      </div>

    </section>
  );
};

export default About;