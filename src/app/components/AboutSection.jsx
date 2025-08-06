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
      <ul className="list-disc pl-4 text-black text-sm sm:text-base">
        <li>Node.js</li>
        <li>Express</li>
        <li>PostgreSQL</li>
        <li>Sequelize</li>
        <li>JavaScript</li>
        <li>React</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <div className="relative flex flex-col items-center text-black w-full">
        <div className="absolute left-1/2 top-0 h-full w-1 bg-orange-300 transform -translate-x-1/2"></div>

        {/* Entry 1 – Right */}
        <div className="mb-10 flex w-full flex-col md:flex-row md:justify-start md:items-center">
          <div className="md:w-1/2 md:pr-6 text-center md:text-right">
            <h3 className="text-lg font-bold">2024 – Present</h3>
            <p className="text-sm">
              Master of Science in Computer Science<br />
              <span className="text-gray-600">Illinois Institute of Technology</span>
            </p>
          </div>
          <div className="my-2 md:my-0 md:mx-2 w-4 h-4 bg-orange-500 rounded-full border-2 border-white z-10 self-center"></div>
          <div className="hidden md:block md:w-1/2" />
        </div>

        {/* Entry 2 – Left */}
        <div className="mb-10 flex w-full flex-col md:flex-row md:justify-end md:items-center">
          <div className="hidden md:block md:w-1/2" />
          <div className="my-2 md:my-0 md:mx-2 w-4 h-4 bg-orange-500 rounded-full border-2 border-white z-10 self-center"></div>
          <div className="md:w-1/2 md:pl-6 text-center md:text-left">
            <h3 className="text-lg font-bold">2019 – 2023</h3>
            <p className="text-sm">
              Bachelor of Engineering in Computer Engineering<br />
              <span className="text-gray-600">University of Mumbai</span>
            </p>
          </div>
        </div>

        {/* Entry 3 – Right */}
        <div className="mb-10 flex w-full flex-col md:flex-row md:justify-start md:items-center">
          <div className="md:w-1/2 md:pr-6 text-center md:text-right">
            <h3 className="text-lg font-bold">2016 – 2019</h3>
            <p className="text-sm">
              Diploma in Computer Engineering<br />
              <span>Thakur Polytechnic</span>
            </p>
          </div>
          <div className="my-2 md:my-0 md:mx-2 w-4 h-4 bg-orange-500 rounded-full border-2 border-white z-10 self-center"></div>
          <div className="hidden md:block md:w-1/2" />
        </div>
      </div>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-4 space-y-2 text-sm text-black sm:text-base">
        <li><a href="https://your-link.com/ui-ux" target="_blank" rel="noopener noreferrer" className="hover:underline">UI/UX</a></li>
        <li><a href="https://your-link.com/web-dev" target="_blank" rel="noopener noreferrer" className="hover:underline">Web Development</a></li>
        <li><a href="https://your-link.com/android" target="_blank" rel="noopener noreferrer" className="hover:underline">Android Programming</a></li>
        <li><a href="https://your-link.com/mysql" target="_blank" rel="noopener noreferrer" className="hover:underline">MySQL with PL/SQL</a></li>
        <li><a href="https://your-link.com/java14" target="_blank" rel="noopener noreferrer" className="hover:underline">Core and Advanced Java 14</a></li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section id="about" className="flex flex-col bg-transparent text-black min-h-[700px] px-4 sm:px-6 lg:px-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-10">
        {/* Image container with responsive flipping */}
        <div className="relative w-full h-[350px] sm:h-[400px] md:h-[450px] perspective mx-auto">
          <div className="relative w-full h-full transition-transform duration-700 transform-style preserve-3d hover:rotate-y-180">
            {/* Front Side */}
            <div className="absolute w-full h-full backface-hidden">
              <Image
                src="/images/about-image.png"
                alt="Profile"
                width={1200}
                height={700}
                className="rounded-lg object-cover w-full h-full"
              />
            </div>

            {/* Back Side */}
            <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-clip-text bg-gradient-to-r from-[#FF6F3C] to-[#FFD93D] rounded-lg flex flex-col items-center justify-center text-black p-6">
              <h3 className="text-xl sm:text-2xl font-semibold mb-4">Achievements</h3>
              <ul className="text-base sm:text-lg space-y-2 text-center">
                <li>Projects: <span className="font-bold">10+</span></li>
                <li>Publications: <span className="font-bold">2</span></li>
                <li>Hackathons: <span className="font-bold">2</span></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Text Content */}
        <motion.div
          className="mt-10 md:mt-0 text-left flex flex-col h-full"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
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
            className="text-base lg:text-lg mb-6 leading-relaxed text-black"
            repeat={Infinity}
          />

         <div className="flex flex-wrap gap-3 sm:gap-0 mt-4 justify-center sm:justify-start sm:px-0">
  <TabButton
    selectTab={() => handleTabChange("skills")}
    active={tab === "skills"}
    className="transition transform hover:scale-105 duration-300 text-black hover:text-orange-500 px-3 py-2 rounded-md"
  >
    <FaTools className="inline mr-2" /> Skills
  </TabButton>
  <TabButton
    selectTab={() => handleTabChange("education")}
    active={tab === "education"}
    className="transition transform hover:scale-105 duration-300 text-black hover:text-orange-500 px-3 py-2 rounded-md"
  >
    <FaGraduationCap className="inline mr-2" /> Education
  </TabButton>
  <TabButton
    selectTab={() => handleTabChange("certifications")}
    active={tab === "certifications"}
    className="transition transform hover:scale-105 duration-300 text-black hover:text-orange-500 px-3 py-2 rounded-md "
  >
    <FaCertificate className="inline mr-2" /> Certifications
  </TabButton>
</div>


          <motion.div
            key={tab}
            className="mt-6 p-4 rounded-lg shadow-lg border border-gray-300 bg-gradient-to-tr from-yellow-100 via-white to-orange-100 text-black"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {TAB_DATA.find((t) => t.id === tab).content}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
