"use client";
import React from "react";
import { motion } from "framer-motion";

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

const TabButton = ({ active, selectTab, children, className = "" }) => {
  return (
    <button
      type="button"
      onClick={selectTab ? selectTab : () => {}}
      className={`group focus:outline-none ${className}`}
    >
      <p
        className={`mr-3 font-semibold transition-colors duration-300 ${
          active
            ? "text-transparent bg-clip-text bg-gradient-to-r from-[#FF6F3C] to-[#FFD93D]"
            : "text-black group-hover:text-orange-500"
        }`}
      >
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        transition={{ duration: 0.3 }}
        className={`h-1 mt-2 mr-3 rounded-full ${
          active ? "bg-orange-400" : "bg-orange-300"
        }`}
      />
    </button>
  );
};

export default TabButton;
