import { motion } from "framer-motion";
import styles from "@/styles/Testimonials.module.css";

function Testimonials({ testimonials }) {

  return (
    <section className="py-2 md:py-10 overflow-x-hidden">

      <motion.h2
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1, transition: { duration: 0.6 } }}
        viewport={{ once: true }}
        className="font-bold mb-14 text-center text-4xl md:text-5xl font-sans text-lime-300">
        WHAT OUR <span className="text-white">CLIENTS SAYS</span>
      </motion.h2>

      <div
        className="overflow-hidden relative"
      >


        {/* Testimonials */}
        <motion.div
          className={`flex gap-5 ${styles.marquee}`}
        >
          {[...testimonials, ...testimonials, ...testimonials].map((item, index) => (
            <div
              key={index}
              className="max-w-[300px] shrink-0 border-x border-lime-300 shadow rounded-lg"
            >
              <div className="flex flex-col justify-between h-full p-4">

                <div className="text-4xl text-center">
                  <i className="fas fa-quote-left text-lime-300"></i>
                </div>

                <p className="mb-4 text-xs leading-relaxed tracking-wide font-mono text-white">
                  <span className="text-lime-300">“</span> {item?.quote} <span className="text-lime-300">”</span>
                </p>

                <div className="pt-3 mt-auto border-t border-gray-700">
                  <h6 className="font-bold text-lime-300">{item?.name}</h6>
                  <span className="text-gray-500 text-sm font-mono">
                    {item?.title}
                  </span>
                </div>

              </div>
            </div>
          ))}
        </motion.div>

      </div>

    </section>
  );
}

export default Testimonials;