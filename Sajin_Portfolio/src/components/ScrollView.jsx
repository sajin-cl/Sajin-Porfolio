import { motion } from "framer-motion";

const ScrollRow = ({ items, reverse = false, duration = 15 }) => (

  <div className="overflow-hidden relative py-4">
    {/* gradient edges for fade */}
    <div className="absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-stone-950 to-transparent z-10" />
    <div className="absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-stone-950 to-transparent z-10" />

    <motion.div
      className="flex gap-8 whitespace-nowrap"
      animate={{ x: reverse ? ["0%", "-50%"] : ["-50%", "0%"] }}
      transition={{ repeat: Infinity, duration: duration, ease: "linear" }}
    >
      {[...Array(3)].map((_, idx) =>
        items.map((item, i) => {
          const Icon = item.icon;
          return (
            <div
              key={`${idx}-${i}`}
              className="flex flex-col items-center justify-center min-w-[100px]"
            >
              <Icon size={40} color={item.color} />
              <span className="mt-2 text-white">{item.name}</span>
            </div>
          );
        })
      )}
    </motion.div>
  </div>
);

export default ScrollRow;