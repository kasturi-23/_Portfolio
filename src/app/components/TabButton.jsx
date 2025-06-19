import React from "react";
import { motion } from "framer-motion";

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

const TabButton = ({ active, selectTab, children }) => {
  return (
    <button
      onClick={selectTab}
      className="group"
    >
      <p
        className={`mr-3 font-semibold transition-colors duration-300 
          ${active 
            ? "text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500" 
            : "text-[#ADB7BE] group-hover:text-sky-400"}`}
      >
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className={`h-1 mt-2 mr-3 ${active ? "bg-teal-500" : "bg-sky-400"}`}
      />
    </button>
  );
};

export default TabButton;
