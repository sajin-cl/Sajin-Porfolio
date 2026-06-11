import { RiMenu3Fill } from "react-icons/ri";
import { GiCrossedSwords } from "react-icons/gi";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { NAV_LINKS } from '@/config/data';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isHashLink = (href) => href.startsWith("/#") || href.startsWith("#");

  const handleNavClick = (href) => {
    if (isHashLink(href)) {
      const targetHref = href.startsWith("/") ? href : `/${href}`;
      window.location.href = targetHref;
    }
  };

  const getLinkClasses = (href) => {
    if (isHashLink(href)) {
      return "text-gray-400 hover:text-lime-400 font-mono font-medium transition";
    }

    return location.pathname === href
      ? "text-lime-400 font-mono font-medium transition"
      : "text-gray-400 hover:text-lime-400 font-mono font-medium transition";
  };

  return (
    <header className="fixed top-0 w-full bg-black/10 backdrop-blur-sm z-50">
      <nav className="container mx-auto px-2 h-14 flex items-center justify-between">
        <a
          className="text-xl font-bold text-lime-400 tracking-widest flex items-center gap-2 cursor-pointer"
          href="/#hero"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("/#hero");
          }}
        >
          {"<"}
          <span className="drop-shadow-[0_0_25px_#0aff47] animate-pulse">{"< SAJIN >"}</span>
          {">"}
        </a>

        {/* Desktop Navbar */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link, index) => (
            isHashLink(link.href) ? (
              <a
                key={index}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={getLinkClasses(link.href)}
                tabIndex={0}
              >
                {link.name}
              </a>
            ) : (
              <Link
                key={index}
                to={link.href}
                className={getLinkClasses(link.href)}
              >
                {link.name}
              </Link>
            )
          ))}
          <a
            href="/#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("/#contact");
            }}
            className="bg-lime-400 font-semibold  px-5 py-2 inline-block transform skew-x-[-20deg] hover:bg-lime-300 transition"
          >
            <span className="block skew-x-20 text-xs  -tracking-tight">
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
          {NAV_LINKS.map((link, index) => (
            isHashLink(link.href) ? (
              <a
                key={index}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                  setIsOpen(false);
                }}
                className="block px-6 py-3 text-gray-400 nav-glow transition"
              >
                {link.name}
              </a>
            ) : (
              <Link
                key={index}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={getLinkClasses(link.href) + " block px-6 py-3 nav-glow transition"}
              >
                {link.name}
              </Link>
            )
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
