import React, { useEffect } from 'react';
import { IoCloseOutline } from 'react-icons/io5';
import { Link, useLocation } from 'react-router-dom';

const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  const location = useLocation(); 

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
  }, [menuOpen]);

  const links = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/projects', label: 'Projects' },
    { to: '/skills', label: 'Skills' },
    { to: '/blog', label: 'Blog' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <div
      className={`fixed top-0 left-0 w-full bg-black z-40 flex flex-col items-center justify-center text-white transition-all duration-300 ease-in-out`}
      style={{
        height: menuOpen ? '100vh' : '0',
        opacity: menuOpen ? '1' : '0',
        pointerEvents: menuOpen ? 'auto' : 'none',
      }}
    >
     
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-3xl focus:outline-none cursor-pointer"
        aria-label="close menu"
      >
        <IoCloseOutline />
      </button>

    
      {links.map((link, idx) => {
        const isActive = location.pathname === link.to; 
        return (
          <Link
            key={idx}
            to={link.to}
            onClick={() => setMenuOpen(false)}
            className={`text-inter-medium text-sm leading-5 my-4 transform transition-all duration-300 ${
              menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
            style={{
              color: isActive ? '#00C3D0' : '#FFFFFF', 
              fontWeight: isActive ? '600' : '400',
            }}
          >
            {link.label}
          </Link>
        );
      })}
    </div>
  );
};

export default MobileMenu;
