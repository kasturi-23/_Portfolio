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
      className="relative flex flex-col items-center justify-center text-center my-6 py-8 px-3 sm:px-4 lg:px-8"
    >
      {/* Radial Background Glow */}
      <div className="absolute top-3/4 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-100 to-transparent h-56 w-56 blur-lg z-0" />

      <div className="w-full max-w-3xl z-10">
        <h2 className="mb-2 text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#FF6F3C] to-[#FFD93D]">
          Let&apos;s Connect!
        </h2>

        <p className="mb-4 max-w-xl mx-auto text-[#111] text-sm sm:text-base">
          I&apos;m currently looking for new opportunities. Whether you have a
          question or just want to say hi, I’ll try my best to get back to you!
        </p>

        <div className="flex gap-4 justify-center text-2xl text-gray-700 mb-4">
          <Link
            href="https://www.linkedin.com/in/kasturi-p-shinde/"
            target="_blank"
          >
            <FaLinkedin className="hover:text-red-500 transition-colors" />
          </Link>
          <Link href="https://github.com/kasturi-23" target="_blank">
            <FaGithub className="hover:text-red-500 transition-colors" />
          </Link>
          <Link href="mailto:kshinde3@hawk.illinoistech.edu">
            <FaEnvelope className="hover:text-red-500 transition-colors" />
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
              className="flex flex-col gap-3 text-left"
              onSubmit={handleSubmit}
            >
              <div>
                <label className="block mb-1 text-sm font-medium text-black">
                  Your email
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full rounded-lg border border-gray-300 bg-[#f4f4f4] p-2 text-sm focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                />
              </div>

              <div>
                <label className="block mb-1 text-sm font-medium text-black">
                  Subject
                </label>
                <input
                  name="subject"
                  type="text"
                  required
                  placeholder="Just saying hi"
                  className="w-full rounded-lg border border-gray-300 bg-[#f4f4f4] p-2 text-sm focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                />
              </div>

              <div>
                <label className="block mb-1 text-sm font-medium text-black">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  placeholder="Let's talk about..."
                  className="w-full rounded-lg border border-gray-300 bg-[#f4f4f4] p-2 text-sm resize-y focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                />
              </div>

              <button
                type="submit"
                className="rounded-lg bg-orange-500 py-2 font-medium text-white hover:bg-orange-600 transition"
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
