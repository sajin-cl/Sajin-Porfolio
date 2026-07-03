import React, { useState } from "react";
import { FAQ_DATA } from "@/config/data";
import { motion } from "framer-motion";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="min-h-screen pt-20 mt-2 mb-10 bg-stone-950 overflow-x-hidden">
      <div className="pr-2 md:pr-10">
        <motion.h2
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1, transition: { duration: 0.6 } }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-right text-white mb-3 uppercase"
        >
          Frequently <span className="text-lime-400">Asked Questions</span>
        </motion.h2>

        <motion.p
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1, transition: { duration: 0.6 } }}
          viewport={{ once: true }}
          className="text-gray-400 text-right mb-10 font-mono text-xs uppercase tracking-wider"
        >
          Quick answers to common questions about my experience, skills, and
          availability.
        </motion.p>
      </div> 
      <div className="max-w-7xl mx-auto px-4">

        {FAQ_DATA.map((faq, index) => (
          <div key={index} className="py-5 border-b border-gray-900">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex items-center justify-between text-left cursor-pointer"
            >
              <h3 className="text-white text-sm font-medium font-mono hover:text-lime-400">
                {faq?.q}
              </h3>

              <span className="text-xl font-semibold text-lime-400 font-mono">
                {activeIndex === index ? "−" : "+"}
              </span>
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${activeIndex === index
                ? "max-h-40 mt-4"
                : "max-h-0"
                }`}
            >
              <p className="text-gray-400 text-sm leading-7 font-mono">
                {faq?.a}
              </p>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default FAQ;