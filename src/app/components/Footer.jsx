import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-[#33353F] text-black bg-white z-10">
      <div className="container mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between items-center text-sm sm:text-base gap-2">
        <span className="text-center sm:text-left">Kasturi Pandurang Shinde</span>
        <p className="text-center sm:text-right text-gray-600">© {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
