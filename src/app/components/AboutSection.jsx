"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { FaTools, FaGraduationCap, FaCertificate } from "react-icons/fa";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <motion.ul
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="list-disc pl-4 text-black text-sm sm:text-base lg:text-[15px]"
      >
        <ul className="list-disc pl-5 space-y-2">
  <li>
    <strong>Programming Languages:</strong> Python, JavaScript, C, C++, Java, Data Structures & Algorithms, Object-Oriented Programming
  </li>
  <li>
    <strong>Frontend Development:</strong> React, HTML5, CSS3, Material-UI
  </li>
  <li>
    <strong>Backend Development:</strong> FastAPI, Flask, RESTful APIs, Node.js
  </li>
  <li>
    <strong>Databases & Storage:</strong> MongoDB, MySQL, SQLite, Firebase Firestore
  </li>
</ul>

      </motion.ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
  className="relative w-full max-w-3xl mx-auto px-2"
>
  {/* Center line (only visible on md and above) */}
  <div className="hidden md:block absolute left-1/2 top-0 h-full w-1 bg-orange-300 transform -translate-x-1/2"></div>

  <div className="flex flex-col md:flex-row items-center mb-10 w-full">
    <div className="md:w-1/2 md:pr-8 text-center md:text-right">
      <h3 className="text-lg font-bold">2024 – Present</h3>
      <p className="text-sm lg:text-[15px] text-justify">
        Master of Science in Computer Science<br />
        <span className="text-gray-600">Illinois Institute of Technology</span>
      </p>
    </div>
    <div className="hidden md:block md:w-1/2"></div>
  </div>

  <div className="flex flex-col md:flex-row items-center mb-10 w-full">
    <div className="hidden md:block md:w-1/2"></div>
    <div className="md:w-1/2 md:pl-8 text-center md:text-left mt-4 md:mt-0">
      <h3 className="text-lg font-bold">2019 – 2023</h3>
      <p className="text-sm lg:text-[15px] text-justify">
        Bachelor of Engineering in Computer Engineering<br />
        <span className="text-gray-600">University of Mumbai</span>
      </p>
    </div>
  </div>

  <div className="flex flex-col md:flex-row items-center mb-10 w-full">
    <div className="md:w-1/2 md:pr-8 text-center md:text-right">
      <h3 className="text-lg font-bold">2016 – 2019</h3>
      <p className="text-sm lg:text-[15px] text-justify">
        Diploma in Computer Engineering<br />
        <span className="text-gray-600">Thakur Polytechnic</span>
      </p>
    </div>
    <div className="hidden md:block md:w-1/2"></div>
  </div>
</motion.div>

    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <motion.ul
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="list-disc pl-4 space-y-2 text-sm sm:text-base lg:text-[15px] text-black"
      >
        <li><a href="#" className="hover:underline">UI/UX</a></li>
        <li><a href="#" className="hover:underline">Web Development</a></li>
        <li><a href="#" className="hover:underline">Android Programming</a></li>
        <li><a href="#" className="hover:underline">MySQL with PL/SQL</a></li>
        <li><a href="#" className="hover:underline">Core and Advanced Java 14</a></li>
      </motion.ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section
      id="about"
      className="flex flex-col bg-transparent text-black min-h-[700px] px-4 py-1 sm:px-6 lg:px-16"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center pt-10 pb-1">
        
        {/* Image */}
        <motion.div
  initial={{ opacity: 0, rotateY: 15 }}
  animate={{ opacity: 1, rotateY: 0 }}
  transition={{ duration: 0.8 }}
  className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] perspective mx-auto"
>
  <div className="relative w-full h-full transition-transform duration-700 transform-style preserve-3d hover:rotate-y-180">
    <div className="absolute w-full h-full backface-hidden">
      <Image
        src="/images/about-image.png"
        alt="Profile"
        width={600}   // reduced width
        height={300}  // reduced height
        className="rounded-lg object-cover w-full h-full"
      />
    </div>
    <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-gradient-to-r from-[#FF6F3C] to-[#FFD93D] rounded-lg flex flex-col items-center justify-center text-black p-4">
      <h3 className="text-lg font-semibold mb-2">Achievements</h3>
      <ul className="text-sm space-y-1 text-center">
        <li>Projects: <span className="font-bold">10+</span></li>
        <li>Publications: <span className="font-bold">2</span></li>
        <li>Hackathons: <span className="font-bold">2</span></li>
      </ul>
    </div>
  </div>
</motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-9 md:mt-0 text-left flex flex-col h-full"
        >
          <h2 className="text-center text-2xl sm:text-3xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-[#FF6F3C] to-[#FFD93D]">
        About Me
      </h2>

          <p className="text-sm sm:text-base lg:text-[15px] mb-6 leading-relaxed text-black text-justify">
  My journey into coding began with curiosity—how a few lines of logic could bring complex systems to life. What started as simple experimentation grew into a passion for problem-solving, pushing me to learn C early to understand how things work beneath the surface. This interest led me to pursue a Bachelor’s in Computer Science, where I discovered my love for competitive coding and hackathons.  

  My full-time internship at StaticInt introduced me to real-world engineering, workplace culture, and opportunities to lead teams across multiple projects. Currently, I am pursuing a Master’s in Computer Science at the Illinois Institute of Technology. Alongside my studies, I worked as a Full-Stack Developer Intern at Spree, building intuitive frontends with React, scalable backend services using FastAPI, managing data with MongoDB, and integrating Gemini APIs for AI-powered assessment generation and automated communication.
</p>


         <div className="flex flex-wrap gap-3 mt-4 justify-center sm:justify-start">
  <TabButton
    selectTab={() => handleTabChange("skills")}
    active={tab === "skills"}
    className="px-2 py-1 text-sm"
  >
    <FaTools className="inline mr-1" /> Skills
  </TabButton>
  <TabButton
    selectTab={() => handleTabChange("education")}
    active={tab === "education"}
    className="px-2 py-1 text-sm"
  >
    <FaGraduationCap className="inline mr-1" /> Education
  </TabButton>
  <TabButton
    selectTab={() => handleTabChange("certifications")}
    active={tab === "certifications"}
    className="px-2 py-1 text-sm"
  >
    <FaCertificate className="inline mr-1" /> Certifications
  </TabButton>
</div>


          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mt-6 p-4 rounded-lg shadow-lg border border-gray-300 bg-gradient-to-tr from-yellow-100 via-white to-orange-100"
          >
            {TAB_DATA.find((t) => t.id === tab).content}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
