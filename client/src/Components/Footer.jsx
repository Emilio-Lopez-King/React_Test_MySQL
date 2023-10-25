import React from "react";

const Footer = () => {
  return (
    <footer className="bg-neutral-800 text-center dark:bg-footer-color lg:text-left">
      <div className="p-2 text-center text-neutral-700 dark:text-neutral-400 border-t border-gray-200">
        © 2023 Copyright:
        <a
          className="text-neutral-800 dark:text-red-300"
          href="https://tailwind-elements.com/"
        >
          {" "}
          Tailwind Elements
        </a>
      </div>
    </footer>
  );
};

export default Footer;
