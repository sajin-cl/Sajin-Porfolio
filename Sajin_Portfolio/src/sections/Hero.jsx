import { socialLinks,projectCount } from "@/config/data";
import { SiReact, SiTailwindcss, SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa6";
import { motion } from "framer-motion";
import Counter from "@/components/Counter";
import Typewriter from "typewriter-effect";
import toast from "react-hot-toast";


const Hero = () => {

  

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-stone-950 pt-20 overflow-hidden">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row-reverse items-center justify-between gap-12">
        {/* RIGHT SIDE: Animated Image & Floating Icons */}
        <div className="relative flex justify-center items-center w-full lg:w-1/2">
          {/* Background Glow */}
          <div className="absolute w-72 h-72 md:w-96 md:h-96 bg-lime-400/10 rounded-full blur-[150px] animate-pulse"></div>

          {/* Floating UI Icons */}
          <SiReact
            title="Library"
            className="absolute text-lime-400 size-12 top-0 right-10 animate-bounce drop-shadow-[0_0_10px_#0aff47]"
          />
          <FaNodeJs
            title="Lan"
            className="absolute text-lime-400 size-10 bottom-10 left-10 animate-pulse drop-shadow-[0_0_20px_#0aff47] cursor-pointer"
          />
          <SiTailwindcss
            title="Framework"
            className="absolute text-lime-400 size-10 bottom-20 right-5 animate-bounce drop-shadow-[0_0_10px_#0aff47]"
          />

          <motion.div
            drag
            dragConstraints={{ left: 0, right: 0, bottom: 0, top: 0 }}
            className="absolute top-10 left-0 -rotate-18 text-lime-400 font-bold animate-bounce border border-lime-300 p-6 rounded-full drop-shadow-[0_0_15px_#84ff65]"
          >
            <div className="text-4xl md:text-5xl font-bold">
              <Counter value={projectCount} start={true} />+
            </div>
            <div className="text-md -mt-1" style={{ fontFamily: "Inter" }}>
              ProjectS
            </div>
          </motion.div>

          {/* Hero Profile Image */}
          <div className="relative size-72 md:size-112 rounded-full overflow-hidden flex items-center justify-center">
            <motion.img
              initial={{ translateY: 0 }}
              animate={{ translateY: 15 }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 3,
                ease: "easeInOut",
              }}
              src="https://res.cloudinary.com/dpc9p1npw/image/upload/v1774855802/profile_isla2l.webp"
              alt="Sajin Profile"
              fetchPriority="high"
              className="w-full h-full scale-140 translate-y-10 object-contain"
            />
          </div>
        </div>

        {/* LEFT SIDE: Text & Social Content */}
        <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
          <h1 className="text-gray-300 text-5xl font-bold hidden xl:block">FULL STACK DEVELOPER</h1>
          <h1 className=" text-sm text-lime-400 tracking-wide font-mono ">
            <span
              className="inline-block w-2 h-2 bg-lime-400 rounded-full animate-pulse shadow-[0_0_8px_#84cc16] [animation-duration:0.7s] mr-2"
            >
            </span>
            AVAILABLE FOR WORK - TAMIL NADU | KERALA | BANGALORE
          </h1>

          <h2 className="text-gray-100 text-5xl font-bold tracking-widest font-inter">SAJIN CL</h2>

          <div className="min-h-10">
            <h2 className="flex items-center justify-center lg:justify-normal gap-2 text-xl  font-bold bg-linear-to-r from-lime-400 via-lime-200 to-green-500 bg-clip-text text-transparent">
              <span className="hidden lg:block text-gray-300">→</span>
              <Typewriter
                options={{
                  strings: ["MERN STACK DEVELOPER", "REACT DEVELOPER", "NODE DEVELOPER"],
                  autoStart: true,
                  loop: true,
                  delay: 75,
                  deleteSpeed: 50,
                }}
              />
            </h2>
          </div>

          <motion.p
            className="text-gray-400 text-xs max-w-lg mx-auto lg:mx-0 leading-relaxed font-mono animate-pulse"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1, transition: { duration: 0.5 } }}
            viewport={{ once: true }}
          >
            TURNING IDEAS INTO SCALABLE DIGITAL PRODUCTS
          </motion.p>

          <h2
            className="text-sm md:text-lg font-mono font-bold bg-linear-to-r from-lime-200 via-lime-100 to-whie-400 bg-clip-text text-transparent"
          >
            <Typewriter
              options={{
                strings: ["BE,COMPUTER SCIENCE ENGINEER", "MERN STACK DEVELOPER INTERN – LOGIPROMPT TECHNO SOLUTIONS, TRIVANDRUM"],
                autoStart: true,
                loop: true,
                delay: 60,
                deleteSpeed: 60,
              }}
            />
          </h2>

          {/* Social Links icons */}
          <div className="flex justify-center lg:justify-start gap-8 pt-4">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={social.name}
                  className="text-gray-400 hover:text-lime-400 hover:scale-125 transition-all duration-300 ease-out text-2xl"
                >
                  <Icon />
                </a>
              );
            })}
          </div>

          {/* Download CV button */}
          <div className="mt-13 mb-10 flex justify-center lg:justify-start">
            <motion.a
              initial={{ opacity: 0, filter: "blur(15px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 1.2 }}
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(132,255,101,0.6)" }}
              whileTap={{ scale: 0.95 }}
              href="/SajinCL_Mern_Stack_Developer_Resume.pdf"
              download="SajinCL_Mern_Stack_Developer_Resume.pdf"
              onClick={() => toast.success("CV Downloaded!")}
              className="whitespace-nowrap px-20 md:px-30 py-3 rounded-xl bg-lime-400 text-black font-semibold hover:bg-lime-300 transition-all duration-300 shadow-lg shadow-lime-400/20 hover:scale-105 active:scale-95"
            >
              ⬇ Download CV
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
