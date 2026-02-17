import { navLinks, socialLinks } from "../data/data";
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer 
     initial={{ y: 100, opacity: 0 }} whileInView={{ y: 0, opacity: 1, transition: { duration: 0.6 } }} viewport={{ once: true }}
    className="w-full bg-stone-950 border-t border-lime-300/40 relative ">

      <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center gap-6">

        {/* Logo */}
        <div className="text-white text-sm tracking-widest w-1/4">
          <img src="/logo.png" alt="" className="h-10" />
          Sajin
        </div>

        {/* Links */}
        <div className="text-white flex flex-wrap justify-center items-center gap-6 ">
          {navLinks.map((link, idx) => (
            <a key={idx} href={link.href} className="hover:text-lime-300 transition">
              {link.name}
            </a>
          ))}
        </div>

        {/* Social */}
        <div className="text-white text-xl flex gap-3 ">
          {socialLinks.map((social, idx) => {
            const Icon = social.icon;
            return (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-white/10 hover:text-lime-300 transition"
              >
                <Icon />
              </a>
            );
          })}
        </div>
      </div>

      {/* Copyright */}
      <div className="text-white/70 text-xs md:text-sm text-center py-4 border-t border-white/10">
        © {new Date().getFullYear()} Sajin-cl. All rights reserved.
      </div>
    </motion.footer>
  );
};

export default Footer;
