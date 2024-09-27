import React from 'react';
import { FaGithub, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa'; // Importing social media icons

const Footer = () => {
  return (
    <footer className="mt-16 text-center py-6 bg-indigo-700 text-white">
      <p className="mb-2">&copy; 2024 UrlShort. All rights reserved.</p>
      <a href="/privacy" className="text-indigo-300 hover:underline mb-4 block">
        Privacy Policy
      </a>
      <div className="flex justify-center space-x-4 mt-4">
        <a
          href="https://github.com/jaisinghrajput" // Replace with your actual link
          className="text-indigo-300 hover:text-white transition-colors duration-300"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://twitter.com/jai820" // Replace with your actual link
          className="text-indigo-300 hover:text-white transition-colors duration-300"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
        >
          <FaTwitter size={24} />
        </a>
        <a
          href="https://in.linkedin.com/in/jaisinghr"
          className="text-indigo-300 hover:text-white transition-colors duration-300"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="https://instagram.com/jaisingh._.rajput" // Replace with your actual link
          className="text-indigo-300 hover:text-white transition-colors duration-300"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaInstagram  size={24} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
