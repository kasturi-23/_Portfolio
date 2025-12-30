"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "A personal portfolio website built with React showcasing projects and skills.",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/kasturi-23/_Portfolio",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Non Invasive Haemoglobin Level Detection",
    description: "A machine learning-based web app for estimating haemoglobin levels from images.",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/kasturi-23/Non_Invasive_Haemoglobin",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Car Rental System",
    description: "A web-based car rental management system with booking and admin functionalities.",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/kasturi-23/Car_Rental_System",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Food Ordering Application",
    description: "A cross-platform mobile app for ordering food with real-time order tracking.",
    image: "/images/projects/4.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/kasturi-23/Food_Ordering_App",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Virtual Office Web App",
    description: "An interactive web app for remote office collaboration with authentication features.",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/kasturi-23/Virtual_office_Web_App",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Chicago Public School Web App",
    description: "A Flask-based web application managing public school data with CRUD operations.",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/kasturi-23/Chicago_Public_School_using_Flask",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="w-full py-10">
      <h2 className="text-center text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#FF6F3C] to-[#FFD93D] mt-2 mb-4 md:mb-5">
        My Projects
      </h2>

      {/* Tag filter buttons */}
      <div className="text-black flex flex-row justify-center items-center gap-2 py-4">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>

      {/* Grid container */}
      <div className="w-full max-w-screen-2xl mx-auto px-4">
        <ul ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {filteredProjects.map((project, index) => (
            <motion.li
              key={project.id}
              variants={cardVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.3, delay: index * 0.4 }}
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
