"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const experiences = [
  {
    date: "May 2025 – Jul 2025",
    title: "Research Assistant",
    organization: "Illinois Institute of Technology",
    location: "Chicago, IL",
    details: [
      "Processed and analyzed RNA-seq and microbiome data from 98 IBD patients using PCA.",
      "Developed ML models to predict effects of gut bacteria on drug metabolism genes (↑ accuracy by 25%).",
      "Implemented Python scripts for preprocessing and achieved 85% classification accuracy.",
    ],
  },
  {
    date: "Aug 2023 – Feb 2024",
    title: "Software Developer Intern",
    organization: "Static Int",
    location: "Mumbai, India",
    details: [
      "Built responsive web app using React.js + TailwindCSS; increased user engagement by 15%.",
      "Created RESTful APIs with Node.js/Express, improving response times.",
      "Deployed on AWS S3 with 99.9% uptime using caching and performance tuning.",
    ],
  },
  {
    date: "Jan 2023 – Jul 2023",
    title: "Python Developer Intern",
    organization: "Trivia Softwares",
    location: "Mumbai, India",
    details: [
      "Integrated ML model into Flask-based system for dynamic responses.",
      "Worked with MongoDB for storing dynamic content from users.",
      "Enhanced system throughput by optimizing back-end logic.",
    ],
  },
];

const ExperienceSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleDetails = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <h2 className="text-center text-3xl sm:text-4xl font-bold mb-16 text-transparent bg-clip-text bg-gradient-to-r from-[#FF6F3C] to-[#FFD93D]">
        Experience
      </h2>

      <div className="relative max-w-6xl mx-auto">
        {/* Timeline line (hidden on mobile) */}
        <div className="hidden sm:block absolute left-1/2 top-0 w-1 h-full bg-orange-400 transform -translate-x-1/2 z-0" />

        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`relative mb-16 flex flex-col sm:flex-row ${
              index % 2 === 0 ? "sm:flex-row-reverse" : ""
            } items-center sm:items-start`}
          >
            {/* Timeline dot */}
            <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 z-10">
              <div className="w-5 h-5 bg-orange-500 rounded-full border-4 border-white shadow-md" />
            </div>

            {/* Experience card */}
            <motion.div
              onClick={() => toggleDetails(index)}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="w-full sm:w-1/2 px-4 cursor-pointer"
            >
              <div className="bg-white border-l-4 border-orange-400 p-6 rounded-xl shadow-md hover:shadow-orange-200 transition-shadow duration-300">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-1">{exp.title}</h3>
                <p className="text-sm sm:text-base text-orange-600 font-medium">{exp.organization}</p>
                <p className="text-sm text-gray-500 italic">{exp.location}</p>
                <p className="text-xs text-gray-400 mt-2">{exp.date}</p>

                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.ul
                      className="mt-4 list-disc list-inside text-sm text-gray-700 space-y-2"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {exp.details.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Spacer to align on larger screens */}
            <div className="hidden sm:block sm:w-1/2" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
