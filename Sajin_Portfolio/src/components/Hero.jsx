import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { HiOutlineLightBulb } from "react-icons/hi";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { GiPirateFlag } from "react-icons/gi";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-stone-950 pt-20 overflow-hidden">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row-reverse items-center justify-between gap-12">

        {/* RIGHT SIDE: Animated Image & Floating Icons */}
        <div className="relative flex justify-center items-center w-full lg:w-1/2">

          {/* Background Glow */}
          <div className="absolute w-72 h-72 md:w-96 md:h-96 bg-lime-400/10 rounded-full blur-[150px] animate-pulse"></div>

          {/* Floating UI Icons */}
          <HiOutlineLightBulb className="absolute text-lime-400 size-10 top-0 right-10 animate-bounce " />
          <LiaLaptopCodeSolid className="absolute text-lime-400 size-10 bottom-10 left-10 animate-pulse " />
          <GiPirateFlag className="absolute text-lime-400 size-10 top-10 left-0 -rotate-12 animate-pulse" />

          {/* Hero Profile Image */}
          <div className="relative size-72 md:size-112 rounded-full overflow-hidden flex items-center justify-center ">
            <motion.img
              initial={{ translateY: 0 }}
              animate={{ translateY: 15 }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 3,
                ease: "easeInOut",
              }}
              src="/profile.png"
              alt="Sajin Profile"
              className="w-full h-full scale-140 translate-y-10 object-contain"
            />
          </div>
        </div>

        {/* LEFT SIDE: Text & Social Content */}
        <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
          <h2 className="text-2xl md:text-3xl text-gray-400 font-medium tracking-tight">Hi There,</h2>

          <div className="min-h-24 md:min-h-32">
            <h1 className="text-3xl md:text-6xl font-bold bg-linear-to-r from-lime-400 via-lime-200 to-green-500 bg-clip-text text-transparent">
              <Typewriter
                options={{
                  strings: ["I'm Sajin CL", "I'm a MERN Stack Developer", "React Developer", "Node Developer"],
                  autoStart: true,
                  loop: true,
                  delay: 75,
                  deleteSpeed: 50,
                }}
              />
            </h1>
          </div>

          <p className="text-gray-400 text-lg md:text-xl max-w-lg mx-auto lg:mx-0 leading-relaxed">
            Full Stack Developer | Turning Ideas into Scalable Digital Products
          </p>

          {/* Social Links */}
          <div className="flex justify-center lg:justify-start gap-8 pt-8">
            {[
              { icon: <FaGithub />, href: "https://github.com/sajin-cl" },
              { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/sajincl/" },
              { icon: <FaInstagram />, href: "https://www.instagram.com/sajin_cl/" },
              { icon: <SiLeetcode />, href: "https://leetcode.com/u/sajin-cl/" }
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-lime-400 hover:scale-125 transition-all duration-300 ease-out text-3xl"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
