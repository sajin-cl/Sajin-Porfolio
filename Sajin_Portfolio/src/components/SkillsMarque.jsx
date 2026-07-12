import { useEffect, useRef } from "react";

const SkillsMarque = ({ items, reverse = false, duration = 10 }) => {

  const trackRef = useRef(null);

  const visibleItems = items.filter(item => item.isVisible);

  // Duplicate items for seamless infinite loop
  const loopItems = [...visibleItems, ...visibleItems];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // The animation translates by exactly 50% (one set of items)
    // since we have 2 copies, this creates a seamless loop
    track.style.animationDuration = `${duration}s`;
    track.style.animationDirection = reverse ? "reverse" : "normal";
  }, [reverse, duration]);

  return (
    <div className="overflow-hidden relative py-4">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 h-full w-12 bg-linear-to-r from-stone-950 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 h-full w-12 bg-linear-to-l from-stone-950 to-transparent z-10 pointer-events-none" />

      <div
        ref={trackRef}
        className="flex gap-8 whitespace-nowrap marquee-track"
      >
        {loopItems.map((item, i) => {
          const Icon = item.icon;
          return (
            <div
              key={i}
              className="flex gap-2 items-center justify-center min-w-[150px] cursor-pointer hover:scale-110 transition-all duration-300"
            >
              <Icon size={30} color={item.color} />
              <span className="text-gray-400 text-sm uppercase font-mono tracking-wider font-bold">
                {item.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SkillsMarque;