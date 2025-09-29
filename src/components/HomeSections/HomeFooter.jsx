import React from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineMailOutline } from "react-icons/md";
import { FiLinkedin } from "react-icons/fi";

const HomeFooter = () => {
  return (
    <section className="bg-black text-white">
      <div className="flex flex-col md:py-16 py- px-6 md:max-w-6xl mx-auto">
        
        <div className="flex flex-col md:flex-row md:justify-between gap-10 md:gap-20">
          
          
          <div className="flex-1 max-w-sm">
            <p className="playfair-text-semantic-heading3 text-2xl leading-8 mb-4 text-center md:text-left">
              Ugochi Nwokonko
            </p>
            <p className="text-inter-regular text-sm leading-6 text-[#D9D9D9] text-center md:text-left">
              Product Manager passionate about building digital solutions that
              create meaningful impact and drive business success.
            </p>
          </div>

          
          <div className="flex-1 flex flex-col items-center md:items-start">
            <p className="Text-playfair-display-semiBold text-lg leading-7 mb-4">
              Quick Links
            </p>
            <div className="flex flex-col gap-1 text-[#D9D9D9] text-center md:text-left">
              <Link to="/" className="text-inter-regular text-sm leading-6">Home</Link>
              <Link to="/about" className="text-inter-regular text-sm leading-6">About</Link>
              <Link to="/projects" className="text-inter-regular text-sm leading-6">Projects</Link>
              <Link to="/skills" className="text-inter-regular text-sm leading-6">Skills</Link>
              <Link to="/contact" className="text-inter-regular text-sm leading-6">Contact</Link>
            </div>
          </div>

          
          <div className="flex-1 flex flex-col items-center md:items-start">
            <p className="Text-playfair-display-semiBold text-lg leading-7 mb-4">
              Let's Connect
            </p>
            <div className="flex flex-row items-center gap-2 mb-2">
              <MdOutlineMailOutline />
              <a
                href="mailto:nwokonkougo@gmail.com"
                className="text-inter-regular text-sm leading-6 text-[#D9D9D9]"
              >
                nwokonkougo@gmail.com
              </a>
            </div>
            <div className="flex flex-row items-center gap-2">
              <FiLinkedin />
              <a
                href="https://www.linkedin.com/in/ugochi-nwokonko/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-inter-regular text-sm leading-6 text-[#D9D9D9]"
              >
                LinkedIn Profile
              </a>
            </div>
          </div>
        </div>

       
        <p className="text-inter-regular text-xs md:text-sm leading-5 text-[#A3A3A3] text-center md:text-left mt-8">
          © 2025 Ugochi Nwokonko. Designed with intention and purpose.
        </p>
      </div>
    </section>
  );
};

export default HomeFooter;
