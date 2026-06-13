import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const SkillsMarque = ({ items, reverse = false, duration = 15 }) => {
  
  const controls = useAnimation();

  const visibleItems = items.filter(item => item.isVisible);

  const startAnimation = () => {
    controls.start({
      x: reverse ? [0, -1000] : [-1000, 0],
      transition: {
        repeat: Infinity,
        duration,
        ease: "linear"
      }
    });
  };

  useEffect(() => {
    startAnimation();
  }, [reverse, duration]);

  return (
    <div
      className="overflow-hidden relative py-4"
    >
      <div className="absolute left-0 top-0 h-full w-12 bg-linear-to-r from-stone-950 to-transparent z-10" />
      <div className="absolute right-0 top-0 h-full w-12 bg-linear-to-l from-stone-950 to-transparent z-10" />

      <motion.div
        className="flex gap-8 whitespace-nowrap"
        animate={controls}
      >
        {[...Array(3)].map((_, idx) =>
          visibleItems.map((item, i) => {
            const Icon = item.icon;

            return (
              <div
                key={`${idx}-${i}`}
                className="flex flex-col items-center justify-center min-w-[100px] cursor-pointer hover:scale-110 transition-all duration-300"
              >
                <Icon size={30} color={item.color} />
                <span className="mt-2 text-white text-xs">
                  {item.name}
                </span>
              </div>
            );
          })
        )}
      </motion.div>
    </div>
  );
};

export default SkillsMarque;