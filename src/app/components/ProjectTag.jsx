import React from "react";
import { motion } from "framer-motion";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-black border-orange-500 bg-orange-100"
    : "text-black border-black hover:border-orange-500";

  return (
    <motion.button
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
      className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer whitespace-nowrap`}
      onClick={() => onClick(name)}
    >
      {name}
    </motion.button>
  );
};

export default ProjectTag;
