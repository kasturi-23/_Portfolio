
"use client";
import React, { useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "A personal portfolio website built with React showcasing projects and skills.",
    image: "/images/projects/1.png",
    gitUrl: "https://github.com/kasturi-23/_Portfolio",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Non Invasive Haemoglobin Level Detection",
    description: "A machine learning-based web app for estimating haemoglobin levels from images.",
    image: "/images/projects/2.png",
    gitUrl: "https://github.com/kasturi-23/Non_Invasive_Haemoglobin",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Car Rental System",
    description: "A web-based car rental management system with booking and admin functionalities.",
    image: "/images/projects/3.png",
    gitUrl: "https://github.com/kasturi-23/Car_Rental_System",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="w-full py-10">
      <h2 className="text-center text-2xl sm:text-3xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-[#FF6F3C] to-[#FFD93D]">
        My Projects
      </h2>

      <div className="w-full max-w-screen-2xl mx-auto px-4">
        <ul ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {projectsData.map((project, index) => (
            <motion.li
              key={project.id}
              variants={cardVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.3, delay: index * 0.2 }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                imgUrl={project.image}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
              />
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProjectsSection;
