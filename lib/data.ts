import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaGoogle, FaLinux, FaPython, FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import { link } from "fs";

export const links = [
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
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Data Science Intern",
    location: "IIT Madras, Chennai",
    description:
    "Currently working on research projects focusing on data science and machine learning applications.",
    icon: React.createElement(FaPython),
    date: "2024 - present",
  },
  {
    title: "AI Development Intern",
    location: "Remote",
    description:
      "Gaining practical experience in AI development through an internship.",
    icon: React.createElement(FaPython),
    date: "Aug-2024 - Dec-2024",
  },
  {
    title: "First Year Student",
    location: "IIT Madras, Chennai",
    description:
    "Currently pursuing a BS in Data Science and Applications at IIT Madras.",
    icon: React.createElement(LuGraduationCap),
    date: "2023 - present",
  },
  {
    title: "Lead: Linux Community",
    location: "GDG IIT Madras, Chennai",
    description:
    "Leading the Linux Community in Google Developer Student Clubs (GDSC) at IIT Madras.",
    icon: React.createElement(FaLinux),
    date: "Jan-2024 - Jan-2025",
  },
  ] as const;

  export const projectsData = [
    {
      title: "BhashaSarthi",
      description:
        "A comprehensive translation tool leveraging Flask and googletrans library. It enables real-time language translation and understanding, breaking down language barriers for global communication.",
      tags: ["Python", "Flask", "googletrans", "FastAPI", "NextJS"],
      link: "https://github.com/redxdager/BhashaSarthi",
    },
    {
      title: "Promotify",
      description:
        "A sophisticated marketing platform built with Flask and SQLite3. Features campaign management, audience targeting, and analytics dashboard for data-driven promotional strategies.",
      tags: ["Python", "Flask", "SQLite3"],
      link: "https://github.com/redxdager/",
    },
    {
      title: "Chatwallah",
      description:
        "A feature-rich real-time chat application with instant messaging capabilities. Implements Socket.IO for seamless communication and includes user authentication, message history, and responsive design.",
      tags: ["Python", "Flask", "Socket.IO", "JavaScript", "HTML", "CSS"],
      link: "https://github.com/redxdager/Chatwallah",
    },
    {
      title: "Data Analysis on Zomato Dataset",
      description:
        "Comprehensive data analysis project utilizing advanced Python libraries to extract meaningful insights from Zomato's restaurant data. Includes interactive visualizations and predictive modeling.",
      tags: ["Python", "Pandas", "Matplotlib", "Seaborn"],
      link: "https://github.com/redxdager/Zomato-Data-Analysis",
    },
    {
      title: "Emotion Detection with YOLOv5",
      description:
        "State-of-the-art emotion recognition system using custom-trained YOLOv5 architecture. Achieves high accuracy in real-time facial expression analysis with optimized performance.",
      tags: ["Python", "YOLOv5", "Computer Vision", "Machine Learning"],
      link: "https://github.com/redxdager/Face-Expression-Recognition"
    },
    {
      title: "Boo Discord Bot",
      description:
        "Advanced Discord bot featuring image analysis, natural language processing, and automated task management. Includes moderation tools, custom commands, and integration with external APIs.",
      tags: ["Python", "Discord.py", "Machine Learning", "API Integration"],
      link: "https://github.com/VVIP-Kitchen/boo"
    }
  ] as const;

export const skillsData = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "AWS",
  "Azure",
  "Git",
  "Docker",
  "Bash",
  "Tailwind",
  "Express",
  "SQLite",
  "Python",
  "FastAPI",
  "Flask",
  "Linux",
  "SQL",
  "MongoDB",
  
] as const;
