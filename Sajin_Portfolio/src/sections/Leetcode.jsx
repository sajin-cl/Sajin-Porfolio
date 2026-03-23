import Counter from "@/components/Counter";
import { motion } from "framer-motion";
import { useState } from "react";

const Leetcode = () => {

  const [start, setStart] = useState(false);//used for counter;

  return (
    <motion.section
      id="leetcode"
      onViewportEnter={() => setStart(true)}
      viewport={{ once: true, amount: 0.6 }}
      className="min-h-[400px] w-full flex justify-center items-center bg-stone-950"
    >
      <div className="w-full max-w-6xl flex flex-col md:flex-row justify-between items-center gap-10 px-6 relative">

        {/* Background Glow */}
        <div className="absolute w-[200px] h-[200px] bg-lime-400/10 rounded-full blur-[120px]"></div>

        {/* Text Section */}
        <div className="flex flex-col items-center md:items-start gap-3 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-lime-400 via-lime-200 to-gray-400 bg-clip-text text-transparent">
            LEETCODE
          </h1>

          <h2 className="text-sm md:text-lg font-mono text-gray-400">
            SOLVED
            <span
              className="text-lime-300 font-inter mx-2">
              <Counter value={90} start={start} />+
            </span>
            CODING PROBLEMS ON LEETCODE
          </h2>
        </div>

        {/* Badge */}
        <div className="flex justify-center items-center">
          <img
            src="/leetCodeBadge.gif"
            alt="leetcode-badge"
            className="w-[200px] md:w-[260px] flex-shrink-0"
          />
        </div>

      </div>
    </motion.section>
  );
};

export default Leetcode;