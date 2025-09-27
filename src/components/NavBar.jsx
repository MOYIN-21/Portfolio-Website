import React, { useEffect } from 'react'
import { GiHamburgerMenu } from "react-icons/gi"
import { Link } from "react-router-dom"

const NavBar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <div className="fixed top-0 bg-[#141414] w-full z-40 px-4">
      <div className="max-w-5xl mx-auto py-4">
        <div className="flex justify-between items-center h-16 text-[#FAFAFA]">
          <Link 
            to="/home" 
            className="flex flex-row gap-2 text-2xl leading-8 md:leading-tight tracking-normal align-middle text-semantic-heading1"
          >
            Ugochi <span className='hidden lg:block'>Nwokonko </span> 
          </Link>

          <div 
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen(prev => !prev)}
          >
            <GiHamburgerMenu />
          </div>

          <div className="hidden md:flex items-center space-x-10 text-inter-medium text-sm leading-5">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/skills">Skills</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar
