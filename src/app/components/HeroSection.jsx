"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FFF8E1] via-[#FFFFFF] to-[#FFE5B4] py-16 px-6 sm:px-12 max-w-[1440px] mx-auto">
      
      {/* Animated background blur */}
      <div className="absolute -z-10 inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-200/20 via-pink-200/10 to-orange-200/20 blur-2xl" />

      <div className="grid grid-cols-1 sm:grid-cols-12 items-center gap-12">
        
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="col-span-12 sm:col-span-7 text-center sm:text-left"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#FF6F3C] to-[#FFD93D]">
              Hello, I&apos;m Kasturi
            </span>
            <TypeAnimation
              sequence={[
                "A Passionate Engineer",
                1500,
                "A Creative Developer",
                1500,
                "A UI/UX Enthusiast",
                1500,
                "An Avid Reader",
                1500,
                "A Problem Solver",
                1500,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="block text-gray-800 text-2xl sm:text-3xl md:text-4xl mt-2"
            />
          </h1>

          <p className="text-gray-600 text-lg sm:text-xl md:text-2xl mb-8 max-w-xl mx-auto sm:mx-0">
            Building beautiful and performant web & mobile apps with modern technologies.
          </p>

          <div className="flex justify-center sm:justify-start space-x-6 text-2xl text-gray-700">
            <Link
              href="https://www.linkedin.com/in/kasturi-p-shinde/"
              target="_blank"
              aria-label="LinkedIn"
              className="hover:text-red-500 transition-colors"
            >
              <FaLinkedin />
            </Link>
            <Link
              href="https://github.com/kasturi-23"
              target="_blank"
              aria-label="GitHub"
              className="hover:text-red-500 transition-colors"
            >
              <FaGithub />
            </Link>
            <Link
              href="mailto:kshinde3@hawk.illinoistech.edu"
              aria-label="Email"
              className="hover:text-red-500 transition-colors"
            >
              <FaEnvelope />
            </Link>
          </div>
        </motion.div>

        {/* Right Section - Image */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="col-span-12 sm:col-span-5 flex justify-center"
        >
          <div className="relative rounded-full bg-gradient-to-tr from-yellow-300 via-pink-400 to-orange-500 p-1 w-[220px] h-[220px] sm:w-[300px] sm:h-[300px] md:w-[360px] md:h-[360px] lg:w-[420px] lg:h-[420px] shadow-xl shadow-orange-300/30">
            <Image
              src="/images/Screenshot_20250617_200712_WhatsApp.jpg"
              alt="Kasturi's portrait"
              fill
              className="rounded-full object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
