import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import {
  SiLeetcode, SiHtml5, SiCss3, SiJavascript, SiReact, SiExpress, SiTailwindcss, SiBootstrap, SiFigma, SiVercel, SiMongodb, SiGithub
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FaNodeJs } from "react-icons/fa6";
import { TbBrandVite } from "react-icons/tb";
import { MdAttachEmail, MdOutlineWifiCalling3 } from "react-icons/md";



export const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];


export const socialLinks = [
  { icon: FaGithub, href: "https://github.com/sajin-cl", name: 'sajin-cl' },
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/sajincl/", name: 'sajincl' },
  { icon: FaInstagram, href: "https://www.instagram.com/sajin_cl/", name: '@sajin_cl' },
  { icon: SiLeetcode, href: "https://leetcode.com/u/sajin-cl/", name: 'sajin-cl' },
  {
    icon: MdAttachEmail,
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=sajincl222@gmail.com&su=Hiring%20Inquiry&body=Hi%20Sajin,%0A%0AI%20would%20like%20to%20discuss%20a%20job%20opportunity%20with%20you.",
    name: 'sajincl222@gmail.com'
  },
  { icon: MdOutlineWifiCalling3, href: "tel:+918056825814", name: 'call me' }
];


export const skillsData = {
  tools: [
    { name: "VS Code", color: "#007ACC", icon: VscVscode },
    { name: "Postman", color: "#F24E1E", icon: SiFigma },
    { name: "MongoDB", color: "#47A248", icon: SiMongodb },
    { name: "Vite", color: "#FFFF00", icon: TbBrandVite },
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


export const projectsData = [
  {
    name: "Personal Website",
    description: "A personal portfolio built with React, Tailwind CSS, and Vite.",
    image: "/project1.png",
    github: "https://github.com/sajin-cl/Sajin-Porfolio",
    live: "#",
  },
  {
    name: "Multi Vendor Grocerry Ecommerce",
    description: "Full-stack e-commerce app using MERN stack with JWT auth.",
    image: "/project2.png",
    github: "https://github.com/sajin-cl/Multi-Vendor-Grocery-Ecommerce-Vite-React",
    live: "https://power-house-ecommerce.vercel.app/",
  },
  {
    name: "Ecommerce Website",
    description: "Admin & Users--Session--Express--Bcrypt--cors--Bootstrap--Hbs",
    image: "/project3.png",
    github: "https://github.com/sajin-cl/Admin_and_User-based-Ecommerce",
    live: "#",
  },
];

export const certificationsData = [
  {
    name: "MERN Stack Intern Certificate",
    issuer:"Logipromt Techno solutions  (Trivandrum)",
    description: "Developed RESTful APIs using Nodejs and Express following MVC architecture.Developed responsive single-page applications using React with reusable components and efficient state management",
    image: "/mern_stack_intern_certificate.jpg",
    credential: "https://www.logipromptproacademy.com/certificate/LPA112100813",
  },
  {
    name: "UI UX 30Days Masterclass Certificate",
     issuer:"NoviTech R&D Pvt Ltd",
    description: "Mastered end-to-end design workflows: User Research, Wireframing, and High-Fidelity Prototyping.",
    image: "/ui-ux-certificate.jpg",
    credential: "#",
  },
  {
    name: "Digital-marketting-certificate",
     issuer:"First Success Technologies",
    description: "Completed a 2-day Online Digital Marketing Workshop conducted by Santhosh Kumar A, CEO of First Success Technologies.",
    image: "/Digital-marketting-certificate.jpg",
    credential: "#",
  },
];