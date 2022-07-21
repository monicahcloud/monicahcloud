import React from "react";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import oldPort from "./../images/oldPortfolio.png";
import design from "./../images/web_design.png";

export const designProjects = [
  {
    title: "Monicah Portfolio",
    subtitle: "Redesign of portfolio",
    description: "Redesign of Monicah Cloud's portfolio.",
    image: { design },
    link: "https://monicahcloud.github.io",
  },
  {
    title: "FreshDaily",
    subtitle: "React Hooks",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: "./project-4.gif",
    link: "https://www.figma.com/proto/HIeOye3xnWOCIrxq4kJKbw/Food-App-Mockup?node-id=2%3A9&starting-point-node-id=2%3A9",
  },
  {
    title: "Throne Room Ministries",
    subtitle: "Redesign of portfolio",
    description: "Redesign of Monicah Cloud's portfolio.",
    image: { oldPort },
    link: "https://monicahcloud.github.io",
  },
  {
    title: "Monicah Portfolio",
    subtitle: "Redesign of portfolio",
    description: "Redesign of Monicah Cloud's portfolio.",
    image: { oldPort },
    link: "https://monicahcloud.github.io",
  },
];

export const developerProjects = [
  {
    title: "Monicah Portfolio",
    subtitle: "Redesign of portfolio",
    description: "Redesign of Monicah Cloud's portfolio.",
    image: { oldPort },
    link: "https://monicahcloud.github.io",
  },
  {
    title: "FreshDaily",
    subtitle: "React Hooks",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: "./project-4.gif",
    link: "https://pythonbootcamp.com",
  },
  {
    title: "Monicah Portfolio",
    subtitle: "Redesign of portfolio",
    description: "Redesign of Monicah Cloud's portfolio.",
    image: { oldPort },
    link: "https://monicahcloud.github.io",
  },
  {
    title: "Monicah Portfolio",
    subtitle: "Redesign of portfolio",
    description: "Redesign of Monicah Cloud's portfolio.",
    image: { oldPort },
    link: "https://monicahcloud.github.io",
  },
];

export const social = [
  {
    id: 1,
    title: "Facebook",
    url: "https://www.facebook.com/monicah.cloud",
    icon: <FaFacebook />,
  },
  {
    id: 2,
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/cloudmonicah/",
    icon: <FaLinkedin />,
  },
  {
    id: 3,
    title: "Github",
    url: "https://github.com/monicahcloud",
    icon: <FaGithub />,
  },
];

export const techskills = [
  "JavaScript",
  "HTML",
  "CSS",
  "ReactJS",
  "Bootstrap",
  "Object-Oriented Programming (OOP)",
  "NodeJS",
  "Figma",
  "Protyping",
  "Wireframing",
  "Sketching and Ideating",
  "Adobe XD",
  "Conducting Usability Studies",
];
