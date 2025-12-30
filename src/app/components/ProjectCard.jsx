import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { motion } from "framer-motion";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="w-full sm:w-full md:w-full lg:w-[88%] xl:w-[82%] mx-auto"
    >
      {/* Image Container */}
      <div
        className="
          h-44 sm:h-56 md:h-64 lg:h-72
          rounded-t-xl relative group
          bg-cover bg-center overflow-hidden
        "
        style={{ backgroundImage: `url(${imgUrl})` }}
      >
        {/* Overlay Icons */}
        <div
          className="
            overlay flex items-center justify-center
            absolute top-0 left-0 w-full h-full
            bg-[#181818]/0
            group-hover:bg-[#181818]/80
            transition-all duration-500
          "
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="flex"
          >
            <Link
              href={gitUrl}
              className="
                h-12 w-12 mr-3
                border-2 rounded-full
                border-[#ADB7BE] hover:border-white
                relative group/link
              "
            >
              <CodeBracketIcon
                className="
                  h-7 w-7 text-[#ADB7BE]
                  absolute top-1/2 left-1/2
                  -translate-x-1/2 -translate-y-1/2
                  group-hover/link:text-white
                  transition-colors
                "
              />
            </Link>

            <Link
              href={previewUrl}
              className="
                h-12 w-12
                border-2 rounded-full
                border-[#ADB7BE] hover:border-white
                relative group/link
              "
            >
              <EyeIcon
                className="
                  h-7 w-7 text-[#ADB7BE]
                  absolute top-1/2 left-1/2
                  -translate-x-1/2 -translate-y-1/2
                  group-hover/link:text-white
                  transition-colors
                "
              />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Text Content */}
      <div className="text-black bg-[#f3f3f3] rounded-b-xl py-4 px-4">
        <h5 className="text-base sm:text-lg font-semibold mb-1">
          {title}
        </h5>
        <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
