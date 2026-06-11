import React, { useEffect, useRef } from "react";
import styles from "@/styles/CustomCursor.module.css"; 

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  const pos = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const isMobile =
      window.matchMedia("(hover: none)").matches ||
      window.matchMedia("(pointer: coarse)").matches;
      
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (isMobile || prefersReducedMotion) return;

    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };

      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`;
        dotRef.current.style.top = `${e.clientY}px`;
      }
    };

    const lerp = (a, b, t) => a + (b - a) * t;
    let rafId;

    const loop = () => {
      ring.current.x = lerp(ring.current.x, pos.current.x, 0.12);
      ring.current.y = lerp(ring.current.y, pos.current.y, 0.12);

      if (ringRef.current) {
        ringRef.current.style.left = `${ring.current.x}px`;
        ringRef.current.style.top = `${ring.current.y}px`;
      }

      rafId = requestAnimationFrame(loop);
    };
    rafId = requestAnimationFrame(loop);

    // 2. Use the exact generated hashed name from the module mapping
    const onEnter = (e) => {
      if (e.target.closest("a, button, [data-hover]")) {
        ringRef.current?.classList.add(styles.big);
      }
    };

    const onLeave = (e) => {
      if (e.target.closest("a, button, [data-hover]")) {
        ringRef.current?.classList.remove(styles.big);
      }
    };

    document.addEventListener("mousemove", onMove, { passive: true });
    document.body.addEventListener("mouseenter", onEnter, true);
    document.body.addEventListener("mouseleave", onLeave, true);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("mousemove", onMove);
      document.body.removeEventListener("mouseenter", onEnter, true);
      document.body.removeEventListener("mouseleave", onLeave, true);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className={styles.curDot} />
      <div ref={ringRef} className={styles.curRing} />
    </>
  );
}
