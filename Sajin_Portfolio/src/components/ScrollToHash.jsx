import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToHash() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) return;

    const scrollToElement = () => {
      const el = document.querySelector(hash);
      if (!el) return false;
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      return true;
    };

    if (scrollToElement()) return;

    const intervalId = window.setInterval(() => {
      if (scrollToElement()) {
        window.clearInterval(intervalId);
      }
    }, 150);

    const timeoutId = window.setTimeout(() => {
      window.clearInterval(intervalId);
    }, 2500);

    return () => {
      window.clearInterval(intervalId);
      window.clearTimeout(timeoutId);
    };
  }, [pathname, hash]);

  return null;
}
