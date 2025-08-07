"use client";
import React, { useState } from "react";
import Link from "next/link";
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
      className="relative flex flex-col items-center justify-center text-center my-12 py-24 px-4 sm:px-6 lg:px-16"
    >
      {/* Radial Background Glow */}
      <div className="absolute top-3/4 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-100 to-transparent h-80 w-80 blur-lg z-0" />

      <div className="w-full max-w-3xl z-10">
        <h2 className="mb-4 text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#FF6F3C] to-[#FFD93D]">
          Let&apos;s Connect!
        </h2>
        <p className="mb-6 max-w-xl mx-auto text-[#111] text-base sm:text-lg">
          I&apos;m currently looking for new opportunities. Whether you have a
          question or just want to say hi, I’ll try my best to get back to you!
        </p>

        <div className="flex gap-8 justify-center text-4xl text-gray-700 mb-8 text-center">
          <Link
            href="https://www.linkedin.com/in/kasturi-p-shinde/"
            target="_blank"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="hover:text-red-500 transition-colors duration-300" />
          </Link>
          <Link
            href="https://github.com/kasturi-23"
            target="_blank"
            aria-label="GitHub"
          >
            <FaGithub className="hover:text-red-500 transition-colors duration-300" />
          </Link>
          <Link href="mailto:kshinde3@hawk.illinoistech.edu" aria-label="Email">
            <FaEnvelope className="hover:text-red-500 transition-colors duration-300" />
          </Link>
        </div>

        {/* Form */}
        <div className="w-full">
          {emailSubmitted ? (
            <p className="mt-4 text-sm text-orange-500">
              Email sent successfully!
            </p>
          ) : (
            <form
              className="flex flex-col gap-6 text-left"
              onSubmit={handleSubmit}
            >
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-black"
                >
                  Your email
                </label>
                <input
                  name="email"
                  type="email"
                  id="email"
                  required
                  placeholder="you@example.com"
                  className="block w-full rounded-lg border border-gray-300 bg-[#f4f4f4] p-2.5 placeholder-gray-500 text-black text-sm focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block mb-2 text-sm font-medium text-black"
                >
                  Subject
                </label>
                <input
                  name="subject"
                  type="text"
                  id="subject"
                  required
                  placeholder="Just saying hi"
                  className="block w-full rounded-lg border border-gray-300 bg-[#f4f4f4] p-2.5 placeholder-gray-500 text-black text-sm focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-black"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  required
                  placeholder="Let's talk about..."
                  rows={5}
                  className="block w-full rounded-lg border border-gray-300 bg-[#f4f4f4] p-2.5 placeholder-gray-500 text-black text-sm resize-y focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-orange-500 py-2.5 px-5 font-medium text-white hover:bg-orange-600 transition-colors duration-300"
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
