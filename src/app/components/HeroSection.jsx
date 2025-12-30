"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="
         relative overflow-hidden
    bg-gradient-to-b from-[#FFF8E1] via-[#FFFFFF] to-[#FFE5B4]
    pt-28 sm:pt-32
    pb-16
    px-1 sm:px-6 md:px-12
    w-full
    min-h-screen
      "
    >
      {/* Background Glow */}
      <div className="absolute -z-10 inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-200/20 via-pink-200/10 to-orange-200/20 blur-2xl" />

      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-10 items-center">

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="
              col-span-12 sm:col-span-7
              text-center sm:text-left
              flex flex-col items-center sm:items-start
            "
          >
            <h1 className="mb-4 font-extrabold text-2xl sm:text-4xl md:text-5xl lg:text-6xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6F3C] to-[#FFD93D]">
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
                className="
                  block mt-2
                  text-gray-800
                  text-xl sm:text-2xl md:text-3xl lg:text-4xl
                "
              />
            </h1>

            <p className="text-gray-600 mb-6 max-w-xl text-sm sm:text-base md:text-lg">
              Building beautiful and performant web & mobile apps with modern technologies.
            </p>

            {/* Social Icons */}
            <div className="flex gap-5 text-2xl sm:text-3xl text-gray-700">
              <Link href="https://www.linkedin.com/in/kasturi-p-shinde/" target="_blank">
                <FaLinkedin className="hover:text-red-500 transition-colors" />
              </Link>
              <Link href="https://github.com/kasturi-23" target="_blank">
                <FaGithub className="hover:text-red-500 transition-colors" />
              </Link>
              <Link href="mailto:kshinde3@hawk.illinoistech.edu">
                <FaEnvelope className="hover:text-red-500 transition-colors" />
              </Link>
            </div>
          </motion.div>

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="
              col-span-12 sm:col-span-5
              flex justify-center
              mt-10 sm:mt-0
            "
          >
            <div
              className="
                relative rounded-full p-1
                bg-gradient-to-tr from-yellow-300 via-pink-400 to-orange-500

                w-[220px] h-[220px]
                sm:w-[300px] sm:h-[300px]
                md:w-[380px] md:h-[380px]

                shadow-xl
              "
            >
              <Image
                src="/images/Screenshot_20250617_200712_WhatsApp.jpg"
                alt="Kasturi"
                fill
                priority
                className="rounded-full object-cover"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
