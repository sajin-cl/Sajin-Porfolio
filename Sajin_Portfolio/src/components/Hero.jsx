import { socialLinks } from "../data/data";
import { VscVscode } from "react-icons/vsc";
import { LiaLaptopCodeSolid, LiaCodeBranchSolid } from "react-icons/lia";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

const Hero = () => {

  const MotionVsCode = motion(VscVscode);
  const MotionGit = motion(LiaCodeBranchSolid);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-stone-950 pt-20 overflow-hidden">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row-reverse items-center justify-between gap-12">

        {/* RIGHT SIDE: Animated Image & Floating Icons */}
        <div className="relative flex justify-center items-center w-full lg:w-1/2">

          {/* Background Glow */}
          <div className="absolute w-72 h-72 md:w-96 md:h-96 bg-lime-400/10 rounded-full blur-[150px] animate-pulse"></div>

          {/* Floating UI Icons */}
          <LiaLaptopCodeSolid
            className="absolute text-lime-400 size-10 top-0 right-10 animate-bounce drop-shadow-[0_0_10px_#0aff47]  " />
          <MotionGit
            drag dragConstraints={{ left: 0, right: 0, bottom: 0, top: 0 }}
            className="absolute text-lime-400 size-10 bottom-10 left-10 animate-pulse drop-shadow-[0_0_20px_#0aff47] " />
          <MotionVsCode
            drag dragConstraints={{ left: 0, right: 0, bottom: 0, top: 0 }}
            className="absolute text-lime-400 size-10 top-10 left-0 -rotate-12 animate-pulse mix-blend-plus-lighter" />

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

          <div className="min-h-16 md:min-h-32">
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

          <motion.p
            className="text-gray-400 text-lg md:text-xl max-w-lg mx-auto lg:mx-0 leading-relaxed"
            initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1, transition: { duration: 0.5 } }} viewport={{ once: true }}
          >
            Turning Ideas into Scalable Digital Products
          </motion.p>

          <h1 className="text-xl md:h6 font-bold bg-linear-to-r from-lime-200 via-lime-100 to-whie-400 bg-clip-text text-transparent">
            <Typewriter
              options={{
                strings: ["BE,COMPUTER SCIENCE ENGINEER", "MERN Stack Developer Intern – Logiprompt Techno Solutions, Trivandrum", "ACTIVE IN LINKEDIN"],
                autoStart: true,
                loop: true,
                delay: 60,
                deleteSpeed: 60,
              }}
            />
          </h1>

          {/* Social Links icons */}
          <div className="flex justify-center lg:justify-start gap-8 pt-4">
            {socialLinks.map((social, index) => {
              const Icon = social.icon
              return (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={social.name}
                  className="text-gray-400 hover:text-lime-400 hover:scale-125 transition-all duration-300 ease-out text-3xl"
                >
                  <Icon />
                </a>
              )
            })}
          </div>

          {/* Download CV button */}
          <div className="mt-13 flex justify-center lg:justify-start">
            <motion.a
              initial={{ opacity: 0, filter: "blur(15px)" }}
              whileInView={{ opacity: 1,  filter: "blur(0px)" }}
              transition={{ duration: 1.2 }}
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(132,255,101,0.6)" }}
              whileTap={{ scale: 0.95 }}
              href="/SajinCL_Mern_Stack_Developer_Resume.pdf"
              download="SajinCL_Mern_Stack_Developer_Resume.pdf"
              className="whitespace-nowrap px-20 md:px-30 py-3 rounded-xl bg-lime-400 text-black font-semibold hover:bg-lime-300 transition-all duration-300 shadow-lg shadow-lime-400/20 hover:scale-105 active:scale-95"
            >
              Download CV
            </motion.a>
          </div>

        </div>

      </div>
    </section >
  );
};

export default Hero;
