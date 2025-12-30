"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description:
      "A personal portfolio website built with React showcasing projects and skills.",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/kasturi-23/_Portfolio",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Non Invasive Haemoglobin Level Detection",
    description:
      "A machine learning-based web app for estimating haemoglobin levels from images.",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/kasturi-23/Non_Invasive_Haemoglobin",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Car Rental System",
    description:
      "A web-based car rental management system with booking and admin functionalities.",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/kasturi-23/Car_Rental_System",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Food Ordering Application",
    description:
      "A cross-platform mobile app for ordering food with real-time order tracking.",
    image: "/images/projects/4.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/kasturi-23/Food_Ordering_App",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Virtual Office Web App",
    description:
      "An interactive web app for remote office collaboration with authentication features.",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/kasturi-23/Virtual_office_Web_App",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Chicago Public School Web App",
    description:
      "A Flask-based web application managing public school data with CRUD operations.",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl:
      "https://github.com/kasturi-23/Chicago_Public_School_using_Flask",
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
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="projects"
      className="w-full py-10 overflow-x-hidden"
    >
      {/* Section wrapper to prevent width doubling */}
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-center text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6F3C] to-[#FFD93D] mb-6">
          My Projects
        </h2>

        {/* Tag filters */}
        <div className="flex justify-center items-center gap-2 mb-4">
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

        {/* Projects grid */}
        <ul
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center"
        >
          {filteredProjects.map((project, index) => (
            <motion.li
              key={project.id}
              variants={cardVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.4, delay: index * 0.15 }}
              whileHover={{ scale: 1.03 }}
              className="w-full flex justify-center"
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
