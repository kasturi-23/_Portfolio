"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import {
  Bars3Icon,
  XMarkIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  { title: "About", path: "#about" },
  { title: "Experience", path: "#experience" },
  { title: "Projects", path: "#projects" },
  { title: "Contact", path: "#contact" },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FF6F3C] shadow-md border-b border-[#FF6F3C]">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-white">
          <CodeBracketIcon className="h-7 w-7 md:h-8 md:w-8" />
          <span className="text-xl md:text-2xl font-bold whitespace-nowrap">
            Kasturi P Shinde
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.path}
              className="text-white font-medium text-lg hover:text-yellow-300 transition"
            >
              {link.title}
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setNavbarOpen(!navbarOpen)}
          className="md:hidden text-white p-2 rounded-lg hover:bg-white/20 transition"
          aria-label="Toggle Navigation Menu"
        >
          {navbarOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {navbarOpen && <MenuOverlay links={navLinks} />}
    </nav>
  );
};

export default Navbar;
