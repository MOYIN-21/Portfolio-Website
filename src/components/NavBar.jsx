import React, { useEffect } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useLocation } from "react-router-dom";

const NavBar = ({ menuOpen, setMenuOpen }) => {
  const location = useLocation(); 

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);


  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/projects", label: "Projects" },
    { path: "/skills", label: "Skills" },
    { path: "/blog", label: "Blog" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <div className="fixed top-0 bg-[#141414] w-full z-40 px-4">
      <div className="max-w-5xl mx-auto py-4">
        <div className="flex justify-between items-center h-16 text-[#FAFAFA]">
          <Link 
            to="/home" 
            className="flex flex-row gap-2 text-2xl leading-8 md:leading-tight tracking-normal align-middle text-semantic-heading1"
          >
            Ugochi <span className='hidden lg:block'>Nwokonko</span>
          </Link>

        
          <div 
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen(prev => !prev)}
          >
            <GiHamburgerMenu />
          </div>

      
          <div className="hidden md:flex items-center space-x-10 text-inter-medium text-sm leading-5">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                className={`transition-colors duration-300 ${
                  location.pathname === link.path
                    ? "text-[#00C3D0]" 
                    : "text-[#FAFAFA] hover:text-[#00C3D0]" 
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
