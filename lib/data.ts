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
    title: "First Year Student",
    location: "IIT Madras, Chennai",
    description:
      "Currently pursuing a BS in Data Science and Applications at IIT Madras.",
    icon: React.createElement(LuGraduationCap),
    date: "2023 - present",
  },
  {
    title: "Lead: Linux Community",
    location: "GDSC IIT Madras, Chennai",
    description:
      "Leading the Linux Community in Google Developer Student Clubs (GDSC) at IIT Madras.",
    icon: React.createElement(FaLinux),
    date: "2024 - present",
  },
  {
    title: "AI Development Intern",
    location: "Remote",
    description:
      "Gaining practical experience in AI development through an internship.",
    icon: React.createElement(FaPython),
    date: "2024 - present",
  },
] as const;

export const projectsData = [
  {
    title: "BhashaSarthi",
    description:
      "A translation tool built using Flask and googletrans library. It facilitates seamless translation and language understanding, making content accessible to a wider audience.",
    tags: ["Python", "Flask", "googletrans" ,"FastAPI" , "NextJS"],
    link : "https://github.com/redxdager/BhashaSarthi",
    // imageUrl: bhashaSarthiImg, // You'll need to provide this image
  },
  {
    title: "Promotify",
    description:
      "A platform for promoting content or services, built with Flask and SQLite3. It helps organize promotional campaigns and engage with target audiences through effective data management.",
    tags: ["Python", "Flask", "SQLite3"],
    link : "https://github.com/redxdager/",
    // imageUrl: promotifyImg, // You'll need to provide this image
  },
  {
    title: "Chatwallah",
    description:
      "A real-time chat application . It enhances user interaction by providing a platform for instant messaging with a responsive interface.",
    tags: ["Python", "Flask", "Socket.IO", "JavaScript", "HTML", "CSS"],
    link:"https://github.com/redxdager/Chatwallah",
    // imageUrl: chatwallahImg, // You'll need to provide this image
  },
  {
    title: "Data Analysis on Zomato Dataset",
    description:
      "An analysis project using Pandas, Matplotlib, and Seaborn to uncover insights into customer preferences, popular cuisines, and restaurant ratings from Zomato data.",
    tags: ["Python", "Pandas", "Matplotlib", "Seaborn"],
    link : "https://github.com/redxdager/Zomato-Data-Analysis",
    // imageUrl: zomatoAnalysisImg, // You'll need to provide this image
  },
  {
    title: "Emotion Detection with YOLOv5",
    description:
      "A custom-trained YOLOv5 model for detecting faces and identifying emotions in images or real-time video streams. Useful for security systems, customer feedback analysis, and interactive marketing.",
    tags: ["Python", "YOLOv5", "Computer Vision", "Machine Learning"],
    link : "https://github.com/redxdager/Face-Expression-Recognition"
    // imageUrl: emotionDetectionImg, // You'll need to provide this image
  },
] as const;

export const skillsData = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
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
