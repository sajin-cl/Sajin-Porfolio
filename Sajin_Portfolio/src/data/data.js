import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

import {
  SiHtml5, SiCss3, SiJavascript, SiReact,SiExpress , SiTailwindcss, SiBootstrap, SiFigma, SiVercel, SiMongodb, SiGithub
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FaNodeJs } from "react-icons/fa6";


export const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];


export const socialLinks = [
  { icon: FaGithub, href: "https://github.com/sajin-cl" },
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/sajincl/" },
  { icon: FaInstagram, href: "https://www.instagram.com/sajin_cl/" },
  { icon: SiLeetcode, href: "https://leetcode.com/u/sajin-cl/" },
];


export const skillsData = {
  tools: [
    { name: "VS Code", color: "#007ACC", icon: VscVscode },
    { name: "Postman", color: "#F24E1E", icon: SiFigma },
    { name: "MongoDB", color: "#47A248", icon: SiMongodb },
    { name: "GitHub", color: "#FFFFFF", icon: SiGithub },
    { name: "Figma", color: "#FF007F", icon: SiFigma },
    { name: "Vercel", color: "#FFFFFF", icon: SiVercel },
  ],
  languages: [
    { name: "HTML", color: "#FF5733", icon: SiHtml5 },
    { name: "CSS", color: "#2965F1", icon: SiCss3 },
    { name: "Bootstrap", color: "#7952B3", icon: SiBootstrap },
    { name: "Tailwind CSS", color: "#06B6D4", icon: SiTailwindcss },
    { name: "JavaScript", color: "#F7DF1E", icon: SiJavascript },
    { name: "React", color: "#61DAFB", icon: SiReact },
    { name: "Node", color: "#00FF00", icon: FaNodeJs },
    { name: "Express", color: "#61DAFB", icon: SiExpress },
  ]
};