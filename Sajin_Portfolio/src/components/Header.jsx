import { RiMenu3Fill } from "react-icons/ri";
import { GiCrossedSwords } from "react-icons/gi";
import { useState } from "react";
import { navLinks } from '@/config/data';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-black/10 backdrop-blur-sm z-50">
      <nav className="container mx-auto px-4 h-14 flex items-center justify-between">
        <a
          className="text-xl font-bold text-lime-400 tracking-widest flex items-center gap-2 cursor-pointer"
          href="#hero"
        >
          {"<"}
          <span className="drop-shadow-[0_0_25px_#0aff47] animate-pulse">{"< SAJIN >"}</span>
          {">"}
        </a>

        {/* Desktop Navbar */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-gray-400 hover:text-lime-400 font-mono font-medium transition"
              tabIndex={0}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-lime-400 font-semibold  px-5 py-2 inline-block transform skew-x-[-20deg] hover:bg-lime-300 transition"
          >
            <span className="block skew-x-[20deg] text-xs  -tracking-tight">
              HIRE ME ↗
            </span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-lime-400"
          >
            {isOpen ? (
              <GiCrossedSwords size={26} className="drop-shadow-[0_0_10px_#0aff47]" />
            ) : (
              <RiMenu3Fill size={26} className="drop-shadow-[0_0_10px_#0aff47]" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-stone-950 border-t border-stone-800">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-6 py-3 text-gray-400 nav-glow transition"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
