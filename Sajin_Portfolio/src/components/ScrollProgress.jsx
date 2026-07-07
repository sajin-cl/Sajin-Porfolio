import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollProgress() {
  const progressRef = useRef(null);

  useGSAP(() => {
    gsap.set(progressRef.current, {
      scaleX: 0,
      transformOrigin: "left center",
    });

    gsap.to(progressRef.current, {
      scaleX: 1,
      ease: "none",
      scrollTrigger: {
        start: 0,
        end: "max",
        scrub: true,
      },
    });
  });

  return (
    <div
      ref={progressRef}
      className="fixed top-14 left-0 h-[2px] w-full bg-lime-400 origin-left z-[9999] "
    />
  );
}