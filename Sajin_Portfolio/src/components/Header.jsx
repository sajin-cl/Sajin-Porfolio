import { RiMenu3Fill } from "react-icons/ri";
import { GiCrossedSwords, GiBarbedCoil } from "react-icons/gi";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
   <header className="fixed top-0 w-full bg-black/10 backdrop-blur-sm  z-50">

      <nav className="container mx-auto px-4 h-14 flex items-center justify-between">

        <div className="text-xl font-bold text-lime-400 tracking-widest flex items-center gap-2 cursor-pointer ">
          <GiBarbedCoil size={26} />
          <span className="drop-shadow-[0_0_25px_#0aff47] animate-pulse">SAJIN</span>
        </div>

        {/* Desktop Navbar */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-gray-400 nav-glow font-medium transition "
              tabIndex={0}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-lime-400 "
          >
            {isOpen ? (
              <GiCrossedSwords size={26} className=" drop-shadow-[0_0_10px_#0aff47]" />
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
