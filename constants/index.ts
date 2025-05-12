


import carhubImg from "@/public/carhub.svg";  // Importing images for projects
import realtorImg from "@/public/realtor.png";

// Navigation links
export const LINKS = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

// External links
export const EXTRA_LINKS = {
  linkedin: "https://www.instagram.com/stayrahul/",
  github: "https://github.com/stayrahul",
  resume: "/resume.pdf",
  source_code: "https://github.com/stayrahul/portfolio",
  email: "rahul7926963@gmail.com",
} as const;

// Data for education
export const EDUCATION_DATA = [
  {
    id: 1,
    degree: 'Class 11 — Science',
    school: 'Capital College and Research Centre, Kathmandu',
    year: '(2024 - Present)',
    link: 'https://ccrc.edu.np' // Link to your college
  },
  {
    id: 2,
    degree: 'Class 9 to Class 10',
    school: 'Adhunik Rastriya Secondary School, Hetauda',
    year: '(Completed in 2024)',
    link: 'https://schooladhunik.edu.np' // Link to your school
  }
];

// Data for projects
export const PROJECTS_DATA = [
  {
    title: "Rabindra Kushwaha - Portfolio",
    description:
      "A portfolio website showcasing my work and skills, built with HTML, CSS, JavaScript, and PHP.",
    tags: ["HTML", "CSS", "JavaScript", "PHP"],
    imageUrl: carhubImg,
    projectUrl: "https://www.rabindrakushwaha.com.np/",
  },
  {
    title: "ChatBot",
    description:
      "A conversational AI chatbot using natural language understanding. Built with modern web tools and deployed for real-time interaction.",
    tags: ["React", "Github", "Next.js", "Vercel"],
    imageUrl: realtorImg,
    projectUrl: "https://my-awesome-chatbot-two-xi.vercel.app/",
  },

] as const;



// Owner name
export const OWNER_NAME = "Rahul Kushwaha";
