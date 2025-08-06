"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FFF8E1] via-[#FFFFFF] to-[#FFE5B4] py-10 px-6 sm:px-12 w-full max-w-[3000px] mx-auto h-auto sm:h-[700px]">
      {/* Animated background effect */}
      <div className="absolute -z-10 top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-200/20 via-pink-200/10 to-orange-200/20 blur-2xl" />

      <div className="grid grid-cols-1 sm:grid-cols-12 w-full">
        {/* Left Text Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-12 sm:col-span-8 place-self-center text-center sm:text-left justify-self-start px-2"
        >
          <h1 className="mb-4 text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6F3C] to-[#FFD93D]">
              Hello, I&apos;m Kasturi
            </span>
            <br />
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
              className="text-gray-800 text-sm sm:text-base md:text-lg lg:text-xl"
            />
          </h1>

          <p className="text-gray-600 mb-6 text-sm sm:text-base md:text-lg max-w-xl mx-auto sm:mx-0">
            Building beautiful and performant web & mobile apps with modern technologies.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 sm:gap-6 justify-center sm:justify-start text-2xl sm:text-3xl text-gray-700 mb-8">
            <Link href="https://www.linkedin.com/in/kasturi-p-shinde/" target="_blank" aria-label="LinkedIn">
              <FaLinkedin className="hover:text-red-500 transition-colors duration-300" />
            </Link>
            <Link href="https://github.com/kasturi-23" target="_blank" aria-label="GitHub">
              <FaGithub className="hover:text-red-500 transition-colors duration-300" />
            </Link>
            <Link href="mailto:kshinde3@hawk.illinoistech.edu" aria-label="Email">
              <FaEnvelope className="hover:text-red-500 transition-colors duration-300" />
            </Link>
          </div>
        </motion.div>

        {/* Right Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-12 sm:col-span-4 place-self-center mt-6 sm:mt-10"
        >
          <div className="rounded-full p-1 bg-gradient-to-tr from-yellow-300 via-pink-400 to-orange-500
                          w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] relative shadow-lg shadow-orange-300/30">
            <Image
              src="/images/Screenshot_20250617_200712_WhatsApp.jpg"
              alt="hero image"
              className="rounded-full object-cover w-full h-full"
              fill
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
