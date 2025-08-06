"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    const response = await fetch("/api/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (response.status === 200) {
      setEmailSubmitted(true);
    }
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center text-center my-12 py-24 px-4 relative"
    >
      {/* Radial Background Glow */}
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-100 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />

      <div className="w-full max-w-3xl z-10">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6F3C] to-[#FFD93D] mb-4">
          Let&apos;s Connect!
        </h2>
        <p className="text-[#111] mb-6 max-w-xl mx-auto">
          I&apos;m currently looking for new opportunities. Whether you have a
          question or just want to say hi, I’ll try my best to get back to you!
        </p>

<div className="flex gap-6 justify-center text-4xl text-gray-700 mb-8 text-center">
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


        {/* Form */}
        <div className="w-full">
          {emailSubmitted ? (
            <p className="text-orange-500 text-sm mt-4">
              Email sent successfully!
            </p>
          ) : (
            <form className="flex flex-col text-left" onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="email" className="text-black block mb-2 text-sm font-medium">
                  Your email
                </label>
                <input
                  name="email"
                  type="email"
                  id="email"
                  required
                  className="bg-[#f4f4f4] border border-gray-300 placeholder-gray-500 text-black text-sm rounded-lg block w-full p-2.5"
                  placeholder="you@example.com"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="text-black block text-sm mb-2 font-medium">
                  Subject
                </label>
                <input
                  name="subject"
                  type="text"
                  id="subject"
                  required
                  className="bg-[#f4f4f4] border border-gray-300 placeholder-gray-500 text-black text-sm rounded-lg block w-full p-2.5"
                  placeholder="Just saying hi"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="text-black block text-sm mb-2 font-medium">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  required
                  className="bg-[#f4f4f4] border border-gray-300 placeholder-gray-500 text-black text-sm rounded-lg block w-full p-2.5"
                  placeholder="Let's talk about..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default EmailSection;
