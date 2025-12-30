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
        <li>Node.js</li>
        <li>Express</li>
        <li>PostgreSQL</li>
        <li>Sequelize</li>
        <li>JavaScript</li>
        <li>React</li>
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
        className="relative w-full max-w-3xl mx-auto px-2 border-l-2 border-orange-300"
      >
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
          className="relative w-full h-[350px] sm:h-[400px] md:h-[450px] perspective mx-auto"
        >
          <div className="relative w-full h-full transition-transform duration-700 transform-style preserve-3d hover:rotate-y-180">
            <div className="absolute w-full h-full backface-hidden">
              <Image
                src="/images/about-image.png"
                alt="Profile"
                width={1200}
                height={600}
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
            <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-gradient-to-r from-[#FF6F3C] to-[#FFD93D] rounded-lg flex flex-col items-center justify-center text-black p-6">
              <h3 className="text-xl font-semibold mb-2">Achievements</h3>
              <ul className="text-base space-y-2 text-center">
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
          className="mt-10 mb-1 md:mt-0 text-left flex flex-col h-full"
        >
          <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#FF6F3C] to-[#FFD93D]">
            About Me
          </h2>

          <TypeAnimation
            sequence={[
              "I am a full stack web developer with a passion for creating interactive and responsive web applications. I have experience working with JavaScript, React, Redux, Node.js, Express, PostgreSQL, Sequelize, HTML, CSS, and Git. I am a quick learner and I am always looking to expand my knowledge and skill set. I am a team player and I am excited to work with others to create amazing applications.",
              20000,
            ]}
            wrapper="p"
            speed={90}
            className="text-sm sm:text-base lg:text-[15px] mb-6 leading-relaxed text-black text-justify"
            repeat={Infinity}
          />

          <div className="flex flex-wrap gap-3 mt-4 justify-center sm:justify-start">
            <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>
              <FaTools className="inline mr-2" /> Skills
            </TabButton>
            <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>
              <FaGraduationCap className="inline mr-2" /> Education
            </TabButton>
            <TabButton selectTab={() => handleTabChange("certifications")} active={tab === "certifications"}>
              <FaCertificate className="inline mr-2" /> Certifications
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
