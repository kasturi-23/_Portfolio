"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    const form = e.target;
    const data = {
      email: form.email.value,
      subject: form.subject.value,
      message: form.message.value,
    };

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setEmailSubmitted(true);
        form.reset();

        // ⏱️ Hide success message after 10 seconds
        setTimeout(() => {
          setEmailSubmitted(false);
        }, 10000);
      }
    } catch (err) {
      console.error("Error sending email:", err);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative flex flex-col items-center justify-center text-center my-6 py-8 px-3 sm:px-4 lg:px-6"
    >
      {/* Radial Background Glow */}
      <div className="absolute top-3/4 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-100 to-transparent h-48 w-48 blur-lg z-0" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="w-full max-w-3xl z-10"
      >
        <h2 className="text-center text-2xl sm:text-3xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-[#FF6F3C] to-[#FFD93D]">
          Let&apos;s Connect!
        </h2>

        <p className="mb-4 max-w-xl mx-auto text-[#111] text-sm sm:text-base">
          I&apos;m currently looking for new opportunities. Whether you have a
          question or just want to say hi, I’ll try my best to get back to you!
        </p>

        {/* Social Icons */}
        <div className="flex gap-5 justify-center text-2xl text-gray-700 mb-4">
          {[
            {
              href: "https://www.linkedin.com/in/kasturi-p-shinde/",
              icon: <FaLinkedin />,
            },
            {
              href: "https://github.com/kasturi-23",
              icon: <FaGithub />,
            },
            {
              href: "mailto:kshinde3@hawk.illinoistech.edu",
              icon: <FaEnvelope />,
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.15 }}
              transition={{ duration: 0.2 }}
            >
              <Link href={item.href} target="_blank" rel="noopener noreferrer">
                {item.icon}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="w-full">
          <AnimatePresence>
            {emailSubmitted && (
              <motion.p
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mb-4 text-sm text-orange-500 text-center"
              >
                ✅ Email sent successfully!
              </motion.p>
            )}
          </AnimatePresence>

          <form
            className="flex flex-col gap-3 text-left"
            onSubmit={handleSubmit}
          >
            <div>
              <label className="block mb-1 text-sm font-medium text-black">
                Your email
              </label>
              <input
                suppressHydrationWarning
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
                suppressHydrationWarning
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
                suppressHydrationWarning
                name="message"
                rows={4}
                required
                placeholder="Let's talk about..."
                className="w-full rounded-lg border border-gray-300 bg-[#f4f4f4] p-2 text-sm resize-y focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={isSending}
              className={`rounded-lg py-2 font-medium text-white transition ${
                isSending
                  ? "bg-orange-300 cursor-not-allowed"
                  : "bg-orange-500 hover:bg-orange-600"
              }`}
            >
              {isSending ? "Sending..." : "Send Message"}
            </motion.button>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default EmailSection;
