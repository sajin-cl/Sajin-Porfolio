import { useState, useEffect } from 'react';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // 600px is the approximate height of a standard Hero section
      // You can also change this to window.innerHeight for full-screen hero
      if (window.scrollY > 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-5 right-5 cursor-pointer bg-lime-400 text-stone-950 px-4 py-2 skew-x-[-8deg] shadow-lg hover:bg-lime-300 transform hover:-translate-y-2 z-50 transition-all duration-300 ${
        isVisible ? 'opacity-80 scale-100 pointer-events-auto' : 'opacity-0 scale-75 pointer-events-none'
      }`}
      aria-label="Back to Top"
    >
      <span className="inline-block skew-x-[8deg] font-extrabold">↑</span>
    </button>
  );
}
