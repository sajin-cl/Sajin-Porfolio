import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import {
  SiLeetcode, SiPostman, SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiExpress, SiTailwindcss, SiBootstrap, SiFigma, SiVercel, SiMongodb, SiGithub, SiHandlebarsdotjs, SiSubstack
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { VscVscode } from "react-icons/vsc";
import { FaNodeJs } from "react-icons/fa6";
import { TbBrandVite } from "react-icons/tb";
import { MdAttachEmail, MdOutlineWifiCalling3 } from "react-icons/md";



export const NAV_LINKS = [
  { name: "HOME", href: "/#hero" },
  { name: "ABOUT", href: "#about" },
  { name: "SKILLS", href: "#skills" },
  { name: "PROJECTS", href: "#projects" },
  { name: "BLOG", href: "/blog" },
  { name: "CONTACT", href: "#contact" },
];


/* --------------------------------------------------Social Links------------------------------------------------------------------- */
export const SOCIAL_LINKS = [
  { icon: FaGithub, href: "https://github.com/sajin-cl", name: 'Github' },
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/sajincl/", name: 'Linkedin' },
  { icon: SiSubstack, href: "https://sajincl.substack.com/p/looking-for-a-freelance-web-developer", name: 'Substack Blog' },
  { icon: SiLeetcode, href: "https://leetcode.com/u/sajin-cl/", name: 'Leetcode' },
  { icon: FaWhatsapp, href: "https://wa.me/918056825814", name: 'WhatsApp' },
  {
    icon: MdAttachEmail,
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=sajincl222@gmail.com&su=Hiring%20Inquiry&body=Hi%20Sajin,%0A%0AI%20would%20like%20to%20discuss%20a%20job%20opportunity%20with%20you.",
    name: 'sajincl222@gmail.com'
  },
  { icon: MdOutlineWifiCalling3, href: "tel:+918056825814", name: '+91 8056 8258 14' }
];

/* --------------------------------------------------Contact Details------------------------------------------------------------------- */
export const CONTACT_DETAILS_DATA = [
  { label: 'EMAIL', href: 'sajincl222@gmail.com', icon: MdAttachEmail },
  { label: 'MOBILE NO', href: '+91 8056 8258 14', icon: MdOutlineWifiCalling3 },
  { label: 'GITHUB', href: 'github.com/sajin-cl', icon: FaGithub },
  { label: 'LINKEDIN', href: 'linkedin.com/in/sajincl', icon: FaLinkedin },
];


/* --------------------------------------------------Counting Details------------------------------------------------------------------- */
export const PROJECT_COUNT = 10;
export const LEETCODE_PORBLEMS_COUNT = 90;
export const FREELANCE_PROJECT_COUNT = 3;

export const CODING_PROFILE_DATA = [
  { title: 'LINKEDIN CONNECTIONS', count: 1000 },
  { title: 'GITHUB REPO', count: 20 },
  { title: 'LEETCODE PROBLEMS', count: LEETCODE_PORBLEMS_COUNT },
  { title: 'FREELANCE PROJECT', count: FREELANCE_PROJECT_COUNT },
  { title: 'TOTAL PROJECTS', count: PROJECT_COUNT },
];


/* --------------------------------------------------Tech Stack------------------------------------------------------------------- */
export const SKILLS_DATA = {
  tools: [
    { name: "VS Code", color: "#007ACC", icon: VscVscode, isVisible: true },
    { name: "Postman", color: "#FF6C37", icon: SiPostman, isVisible: true },
    { name: "Vite", color: "#FFFF00", icon: TbBrandVite, isVisible: true },
    { name: "GitHub", color: "#FFFFFF", icon: SiGithub, isVisible: true },
    { name: "Figma", color: "#FF007F", icon: SiFigma, isVisible: true },
    { name: "Vercel", color: "#FFFFFF", icon: SiVercel, isVisible: true },
    { name: "Antigravity IDE", color: null, icon: null, isVisible: false },
  ],
  techStack: [
    { name: "HTML", color: "#FF5733", type: 'Frontend', icon: SiHtml5, isVisible: true },
    { name: "CSS", color: "#2965F1", type: 'Frontend', icon: SiCss3, isVisible: true },
    { name: "Bootstrap", color: "#7952B3", type: 'Frontend', icon: SiBootstrap, isVisible: true },
    { name: "Tailwind CSS", color: "#06B6D4", type: 'Frontend', icon: SiTailwindcss, isVisible: true },
    { name: "JavaScript", color: "#F7DF1E", type: 'Frontend', icon: SiJavascript, isVisible: true },
    { name: "TypeScript", color: "#2965F1", type: 'Frontend', icon: SiTypescript, isVisible: true },
    { name: "React.js", color: "#61DAFB", type: 'Frontend', icon: SiReact, isVisible: true },
    { name: "Next.js", color: "#FFF", type: 'Frontend', icon: SiNextdotjs, isVisible: true },
    { name: "Redux", color: null, type: 'Frontend', icon: null, isVisible: false },
    { name: "Node.js", color: "#00FF00", type: 'Backend', icon: FaNodeJs, isVisible: true },
    { name: "Express.js", color: "#FFF", type: 'Backend', icon: SiExpress, isVisible: true },
    { name: "MySQL", color: "#00758F", type: 'Backend', icon: GrMysql, isVisible: true },
    { name: "MongoDB", color: "#47A248", type: 'Backend', icon: SiMongodb, isVisible: true },
    { name: "Mongoose", color: null, type: 'Backend', icon: null, isVisible: false },
  ]
};


export const PROFICIENCY_DATA = [
  { name: 'React.js', percentage: 82 },
  { name: 'Next.js', percentage: 77 },
  { name: 'Node.js / Express.js', percentage: 80 },
  { name: 'MongoDB / Mongoose ODM', percentage: 85 },
  { name: 'Tailwind CSS', percentage: 83 },
  { name: 'TypeScript', percentage: 25 },
];

export const SERVICE_INTEGRATIONS_DATA = [
  { id: 1, name: 'Bcrypt ( Hashing )' },
  { id: 2, name: 'JWT Auth' },
  { id: 3, name: 'Session Auth' },
  { id: 4, name: 'Restful APIs' },
  { id: 5, name: 'Cloudinary ( Image Storage )' },
  { id: 6, name: 'Cashfree ( Payment )' },
  { id: 7, name: 'Hostinger ( Domain )' },
  { id: 8, name: 'Vercel ( Hosting )' },
];


/* --------------------------------------------------Project  Details------------------------------------------------------------------- */
export const PROJECTS_DATA = [
  {
    no: "01",
    bannerName: "Cherrys Honey",
    name: "Cherrys Honey E-commerce",
    category: "Freelance Project",
    timeline: "May 2026 - May 2026",
    description: "Premium honey e-commerce platform with secure payment integration, product catalog management, and responsive user experience.",
    hashtags: [
      "https://cherryshoney.com",
    ],
    image: "https://res.cloudinary.com/dpc9p1npw/image/upload/f_auto,q_auto/Thumbnail_xvg9zq.web",
    skills: [
      { name: "Next.js", color: "#FFF", icon: SiNextdotjs },
      { name: "Tailwind CSS", color: "#06B6D4", icon: SiTailwindcss },
      { name: "MongoDB", color: "#47A248", icon: SiMongodb },
    ],
    github: null,
    live: "https://www.cherryshoney.com",
  },
  {
    no: "02",
    bannerName: "Portfolio",
    name: "PORTFOLIO WEBSITE",
    category: "Freelance Project",
    timeline: "Apr 2026 - Apr 2026",
    description: "Modern portfolio website designed for a UX/UI designer, showcasing projects, services, and contact information with a responsive layout.",
    hashtags: [
      "https://sanjeev-kumar-portfolio.vercel.app",
    ],
    image: "https://res.cloudinary.com/dpc9p1npw/image/upload/f_auto,q_auto/Thumbnail_1_glhjbu.webp",
    skills: [
      { name: "React", color: "#61DAFB", icon: SiReact },
      { name: "Tailwind CSS", color: "#06B6D4", icon: SiTailwindcss },
      { name: "Vite", color: "#FFFF00", icon: TbBrandVite }
    ],
    github: null,
    live: "https://sanjeev-kumar-portfolio.vercel.app/",
  },
  {
    no: "03",
    bannerName: "Power House",
    name: "MULTI VENDOR GROCERY ECOMMERCE",
    category: "MERN Stack Project",
    timeline: "Jan 2026 - jan 2026",
    description: "Multi-vendor grocery marketplace with vendor management, JWT authentication, shopping cart functionality, and order processing.",
    hashtags: [
      "https://power-house-ecommerce.vercel.app",
    ],
    image: "https://res.cloudinary.com/dpc9p1npw/image/upload/f_auto,q_auto/project2_pmfqti.webp",
    skills: [
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
    no: "04",
    bannerName: "Instagram",
    name: "INSTAGRAM CLONE UI",
    category: "Frontend Project",
    timeline: "Mar 2026 - Mar 2026",
    description: "Instagram-inspired social media interface featuring stories, post feeds, likes, and a fully responsive design.",
    hashtags: [
      "https://social-media-clone-with-vite-react.vercel.app",
    ],
    image: "https://res.cloudinary.com/dpc9p1npw/image/upload/f_auto,q_auto/project3_hzbt7d.webp",
    skills: [
      { name: "React", color: "#61DAFB", icon: SiReact },
      { name: "Tailwind CSS", color: "#06B6D4", icon: SiTailwindcss },
      { name: "Typescript", color: "#2965F1", icon: SiTypescript },
      { name: "Vite", color: "#FFFF00", icon: TbBrandVite },

    ],
    github: "https://github.com/sajin-cl/Social_Media_Clone_with_VITE_React_and_TypeScript",
    live: "https://social-media-clone-with-vite-react.vercel.app/",
  },
  {
    no: "05",
    bannerName: "AK Decoration",
    name: "AK DECORATION SERVICE",
    category: "Freelance Project",
    timeline: "Mar 2026 - Mar 2026",
    description: "Business website for event decoration services featuring service showcases, gallery sections, and customer inquiry options.",
    hashtags: [
      "https://ak-decoration.vercel.app",
    ],
    image: "https://res.cloudinary.com/dpc9p1npw/image/upload/f_auto,q_auto/project5_faz4ak.webp",
    skills: [
      { name: "React", color: "#61DAFB", icon: SiReact },
      { name: "Tailwind CSS", color: "#06B6D4", icon: SiTailwindcss },
      { name: "Vite", color: "#FFFF00", icon: TbBrandVite },

    ],
    github: "https://github.com/sajin-cl/AK-Decoration-React-Vite-TailwindCSS",
    live: "https://ak-decoration.vercel.app/",
  },
  {
    no: "06",
    bannerName: "E-commerce",
    name: "ECOMMERCE WEBSITE",
    category: "full stack project",
    timeline: "Oct 2025 - Oct 2025",
    description: "Role-based e-commerce application with admin and user dashboards, session authentication, password hashing, and product management.",
    hashtags: [
      "",
    ],
    image: "https://res.cloudinary.com/dpc9p1npw/image/upload/f_auto,q_auto/project4_kiebyu.webp",
    skills: [
      { name: "Bootstrap", color: "#7952B3", icon: SiBootstrap },
      { name: "Node", color: "#00FF00", icon: FaNodeJs },
      { name: "Express", color: "#FFF", icon: SiExpress },
      { name: "Handlebars", color: "#FF5733", icon: SiHandlebarsdotjs },
      { name: "MongoDB", color: "#47A248", icon: SiMongodb },
    ],
    github: "https://github.com/sajin-cl/Admin_and_User-based-Ecommerce",
    live: null,
  },

];



/* --------------------------------------------------Certification Details------------------------------------------------------------------- */
export const CERTIFICATIONS_DATA = [
  {
    name: "MERN STACK INTERN",
    issuer: "Logipromt Techno solutions (Kerala)",
    description: "Developed RESTful APIs using Nodejs and Express following MVC architecture. Developed responsive single-page applications using React with reusable components and efficient state management",
    image: "/mern_stack_intern_certificate.webp",
    credential: "https://www.logipromptproacademy.com/certificate/LPA112100813",
  },
  {
    name: "UI/UX 30-Days Webinar",
    issuer: "NoviTech R&D Pvt Ltd",
    description: "Mastered end-to-end design workflows: User Research, Wireframing, and High-Fidelity Prototyping.Learn about Figma fundamentals",
    image: "/ui-ux-certificate.webp",
    credential: null,
  },
  {
    name: "React Skill Test",
    issuer: "ARC 360 Jobs",
    description: "Completed the React Intermediate Certification as part of the Full Stack Developer Skill Competency Test",
    image: "/React-Arc-Intermediate-Certificate.webp",
    credential: null,
  },
  {
    name: "HTML Skill Test",
    issuer: "ARC 360 Jobs",
    description: "Completed the HTML Expert Certification as part of the Full Stack Developer Skill Competency Test",
    image: "/HTML-Arc-Expert-Certificate.webp",
    credential: null,
  },
  {
    name: "CSS Skill Test",
    issuer: "ARC 360 Jobs",
    description: "Completed the CSS Expert Certification as part of the Full Stack Developer Skill Competency Test",
    image: "/CSS-Arc-Expert-Certificate.webp",
    credential: null,
  },
  {
    name: "Digital Marketting",
    issuer: "First Success Technologies",
    description: "Completed a 2-day Online Digital Marketing Workshop conducted by Santhosh Kumar A, CEO of First Success Technologies.",
    image: "/Digital-marketting-certificate.webp",
    credential: null,
  },
];


export const TESTIMONIALS_DATA = [
  {
    quote: "The website you made for me is really useful. Now my clients can easily contact me, and I can clearly showcase my wedding decoration works. It has made things much easier for my business.",
    name: "Ajith Kumar",
    title: "AK Decoration Services",
  },
  {
    quote: "The portfolio you built for me is really impressive. It helps highlight my skills and projects clearly, and makes it easy for others to explore my work. Thanks a lot, Sajin.",
    name: "Sanjeev Kumar",
    title: "UX/UI Designer",
  },
  {
    quote: "The Cherry's Honey eCommerce website looks modern and smooth. The CRM and order management system were done really well, making it easy to manage customers and sales.",
    name: "Sajin.D",
    title: "Cherrys Honey Ecommerce Owner",
  },

];