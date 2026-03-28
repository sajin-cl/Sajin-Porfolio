import { FaGithub, FaLinkedin } from "react-icons/fa";
import {
  SiLeetcode, SiPostman, SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, SiExpress, SiTailwindcss, SiBootstrap, SiFigma, SiVercel, SiMongodb, SiGithub, SiHandlebarsdotjs
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { VscVscode } from "react-icons/vsc";
import { FaNodeJs } from "react-icons/fa6";
import { TbBrandVite } from "react-icons/tb";
import { MdAttachEmail, MdOutlineWifiCalling3 } from "react-icons/md";



export const navLinks = [
  { name: "HOME", href: "#hero" },
  { name: "ABOUT", href: "#about" },
  { name: "SKILLS", href: "#skills" },
  { name: "PROJECTS", href: "#projects" },
  { name: "CONTACT", href: "#contact" },
];


/* --------------------------------------------------Social Links------------------------------------------------------------------- */
export const socialLinks = [
  { icon: FaGithub, href: "https://github.com/sajin-cl", name: 'sajin-cl' },
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/sajincl/", name: 'sajincl' },
  { icon: SiLeetcode, href: "https://leetcode.com/u/sajin-cl/", name: 'sajin-cl' },
  {
    icon: MdAttachEmail,
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=sajincl222@gmail.com&su=Hiring%20Inquiry&body=Hi%20Sajin,%0A%0AI%20would%20like%20to%20discuss%20a%20job%20opportunity%20with%20you.",
    name: 'sajincl222@gmail.com'
  },
  { icon: MdOutlineWifiCalling3, href: "tel:+918056825814", name: '+91 8056 8258 14' }
];

/* --------------------------------------------------Contact Details------------------------------------------------------------------- */
export const contactDetailsData = [
  { label: 'EMAIL', href: 'sajincl222@gmail.com', icon: MdAttachEmail },
  { label: 'MOBILE NO', href: '+91 8056 8258 14', icon: MdOutlineWifiCalling3 },
  { label: 'GITHUB', href: 'github.com/sajin-cl', icon: FaGithub },
  { label: 'LINKEDIN', href: 'linkedin.com/in/sajincl', icon: FaLinkedin },
];


/* --------------------------------------------------Counting Details------------------------------------------------------------------- */
export const projectCount = 9;
export const leetcodeProblemsCount = 90;

export const codingProfileData = [
  { title: 'LINKEDIN CONNECTIONS', count: 980 },
  { title: 'GITHUB REPOSITORY', count: 20 },
  { title: 'LEETCODE PROBLEMS', count: leetcodeProblemsCount },
  { title: 'TOTAL PROJECTS', count: projectCount },
];


/* --------------------------------------------------Tech Stack------------------------------------------------------------------- */
export const skillsData = {
  tools: [
    { name: "VS Code", color: "#007ACC", icon: VscVscode, isVisible: true },
    { name: "Postman", color: "#FF6C37", icon: SiPostman, isVisible: true },
    { name: "Vite", color: "#FFFF00", icon: TbBrandVite, isVisible: true },
    { name: "GitHub", color: "#FFFFFF", icon: SiGithub, isVisible: true },
    { name: "Figma", color: "#FF007F", icon: SiFigma, isVisible: true },
    { name: "Vercel", color: "#FFFFFF", icon: SiVercel, isVisible: true },
  ],
  techStack: [
    { name: "HTML", color: "#FF5733", type: 'Frontend', icon: SiHtml5, isVisible: true },
    { name: "CSS", color: "#2965F1", type: 'Frontend', icon: SiCss3, isVisible: true },
    { name: "Bootstrap", color: "#7952B3", type: 'Frontend', icon: SiBootstrap, isVisible: true },
    { name: "Tailwind CSS", color: "#06B6D4", type: 'Frontend', icon: SiTailwindcss, isVisible: true },
    { name: "JavaScript", color: "#F7DF1E", type: 'Frontend', icon: SiJavascript, isVisible: true },
    { name: "TypeScript", color: "#2965F1", type: 'Frontend', icon: SiTypescript, isVisible: true },
    { name: "React.js", color: "#61DAFB", type: 'Frontend', icon: SiReact, isVisible: true },
    { name: "Node.js", color: "#00FF00", type: 'Backend', icon: FaNodeJs, isVisible: true },
    { name: "Express.js", color: "#FFF", type: 'Backend', icon: SiExpress, isVisible: true },
    { name: "MySQL", color: "#00758F", type: 'Backend', icon: GrMysql, isVisible: true },
    { name: "MongoDB", color: "#47A248", type: 'Backend', icon: SiMongodb, isVisible: true },
    { name: "Mongoose", color: null, type: 'Backend', icon: null, isVisible: false },
    { name: "RESTful APIs", color: null, type: 'Backend', icon: null, isVisible: false },
    { name: "JWT Auth", color: null, type: 'Backend', icon: null, isVisible: false },
    { name: "Session Auth", color: null, type: 'Backend', icon: null, isVisible: false },
  ]
};


export const proficiencyData = [
  { name: 'React.js', percentage: 82 },
  { name: 'Node.js / Express.js', percentage: 80 },
  { name: 'MongoDB', percentage: 85 },
  { name: 'Tailwind CSS', percentage: 83 },
  { name: 'TypeScript', percentage: 62 },
];


/* --------------------------------------------------Project  Details------------------------------------------------------------------- */
export const projectsData = [
  {
    name: "PERSONAL WEBSITE",
    description: "A responsive developer portfolio showcasing projects, skills, and contact information, built with React, Tailwind CSS, and Vite.",
    image: "/project1.webp",
    skills: [
      { name: "HTML", color: "#FF5733", icon: SiHtml5 },
      { name: "CSS", color: "#2965F1", icon: SiCss3 },
      { name: "React", color: "#61DAFB", icon: SiReact },
      { name: "Tailwind CSS", color: "#06B6D4", icon: SiTailwindcss },
      { name: "Vite", color: "#FFFF00", icon: TbBrandVite }
    ],
    github: "https://github.com/sajin-cl/Sajin-Porfolio",
    live: null,
  },
  {
    name: "MULTI VENDOR GROCERY ECOMMERCE",
    description: "A multi-vendor grocery marketplace built with the MERN stack, allowing vendors to manage products and users to browse, add to cart, and place orders with JWT-based authentication.",
    image: "/project2.webp",
    skills: [
      { name: "HTML", color: "#FF5733", icon: SiHtml5 },
      { name: "CSS", color: "#2965F1", icon: SiCss3 },
      { name: "Bootstrap", color: "#7952B3", icon: SiBootstrap },
      { name: "React", color: "#61DAFB", icon: SiReact },
      { name: "Node", color: "#00FF00", icon: FaNodeJs },
      { name: "Express", color: "#FFF", icon: SiExpress },
      { name: "MongoDB", color: "#47A248", icon: SiMongodb },
      { name: "Vite", color: "#FFFF00", icon: TbBrandVite },
    ],
    github: "https://github.com/sajin-cl/Multi-Vendor-Grocery-Ecommerce-Vite-React",
    live: "https://power-house-ecommerce.vercel.app/",
  },
  {
    name: "INSTAGRAM CLONE UI",
    description: "A responsive Instagram clone built with React, TypeScript, and Tailwind CSS. Features include user stories, post feeds, likes & mobile-friendly UI",
    image: "/project3.webp",
    skills: [
      { name: "HTML", color: "#FF5733", icon: SiHtml5 },
      { name: "CSS", color: "#2965F1", icon: SiCss3 },
      { name: "React", color: "#61DAFB", icon: SiReact },
      { name: "Tailwind CSS", color: "#06B6D4", icon: SiTailwindcss },
      { name: "Typescript", color: "#2965F1", icon: SiTypescript },
      { name: "Vite", color: "#FFFF00", icon: TbBrandVite },

    ],
    github: "https://github.com/sajin-cl/Social_Media_Clone_with_VITE_React_and_TypeScript",
    live: "https://social-media-clone-with-vite-react.vercel.app/",
  },
  {
    name: "ECOMMERCE WEBSITE",
    description: "Role-based e-commerce platform with separate admin and user panels, session authentication, and product management.",
    image: "/project4.webp",
    skills: [
      { name: "HTML", color: "#FF5733", icon: SiHtml5 },
      { name: "CSS", color: "#2965F1", icon: SiCss3 },
      { name: "Bootstrap", color: "#7952B3", icon: SiBootstrap },
      { name: "Node", color: "#00FF00", icon: FaNodeJs },
      { name: "Express", color: "#FFF", icon: SiExpress },
      { name: "Handlebars", color: "#FF5733", icon: SiHandlebarsdotjs },
      { name: "MongoDB", color: "#47A248", icon: SiMongodb },
    ],
    github: "https://github.com/sajin-cl/Admin_and_User-based-Ecommerce",
    live: null,
  },
  {
    name: "AK DECORATION SERVICE",
    description: "This project is currently under development and not yet live",
    image: "/project5.webp",
    skills: [
      { name: "HTML", color: "#FF5733", icon: SiHtml5 },
      { name: "CSS", color: "#2965F1", icon: SiCss3 },
      { name: "React", color: "#61DAFB", icon: SiReact },
      { name: "Tailwind CSS", color: "#06B6D4", icon: SiTailwindcss },
      { name: "Vite", color: "#FFFF00", icon: TbBrandVite },

    ],
    github: "https://github.com/sajin-cl/AK-Decoration-React-Vite-TailwindCSS",
    live: null,
  },

];



/* --------------------------------------------------Certification Details------------------------------------------------------------------- */
export const certificationsData = [
  {
    name: "MERN STACK INTERN CERTIFICATE",
    issuer: "Logipromt Techno solutions (Trivandrum)",
    description: "Developed RESTful APIs using Nodejs and Express following MVC architecture. Developed responsive single-page applications using React with reusable components and efficient state management",
    image: "/mern_stack_intern_certificate.webp",
    credential: "https://www.logipromptproacademy.com/certificate/LPA112100813",
  },
  {
    name: "UI/UX 30-Days Masterclass Certificate",
    issuer: "NoviTech R&D Pvt Ltd",
    description: "Mastered end-to-end design workflows: User Research, Wireframing, and High-Fidelity Prototyping.Learn about Figma fundamentals",
    image: "/ui-ux-certificate.webp",
    credential: null,
  },
  {
    name: "React Skill Competency Test CERTIFICATE",
    issuer: "ARC 360 Jobs",
    description: "Completed the React Intermediate Certification as part of the Full Stack Developer Skill Competency Test",
    image: "/React-Arc-Intermediate-Certificate.webp",
    credential: null,
  },
  {
    name: "HTML Skill Competency Test CERTIFICATE",
    issuer: "ARC 360 Jobs",
    description: "Completed the HTML Expert Certification as part of the Full Stack Developer Skill Competency Test",
    image: "/HTML-Arc-Expert-Certificate.webp",
    credential: null,
  },
  {
    name: "CSS Skill Competency Test CERTIFICATE",
    issuer: "ARC 360 Jobs",
    description: "Completed the CSS Expert Certification as part of the Full Stack Developer Skill Competency Test",
    image: "/CSS-Arc-Expert-Certificate.webp",
    credential: null,
  },
  {
    name: "Digital Marketting Certificate",
    issuer: "First Success Technologies",
    description: "Completed a 2-day Online Digital Marketing Workshop conducted by Santhosh Kumar A, CEO of First Success Technologies.",
    image: "/Digital-marketting-certificate.webp",
    credential: null,
  },
];