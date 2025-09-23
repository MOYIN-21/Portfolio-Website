import React, {useEffect} from 'react'
import {GiHamburgerMenu} from "react-icons/gi";
import {Link} from "react-router-dom";


const NavBar = ({menuOpen, setMenuOpen}) => {

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "auto";
    }, [menuOpen]);

    return (
        <div className='fixed top-0 w-full z-40'>
            <div className='max-w-5xl mx-auto px-4'>
                <div className='flex justify-between items-center h-16'>
                    <Link to='/' className='text-xl font-bold text-white'>
                        Ugochi Nwokonko
                    </Link>

                    <div className='w-7 h-5 relative cursoe-pointer z-40 md:hidden'
                         onClick={() => setMenuOpen((prev) => !prev)}>
                        <GiHamburgerMenu/>
                    </div>

                    <div className='hidden md:flex items-center space-x-8'>
                        <Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
                        <Link to="/about" className="text-gray-300 hover:text-white transition-colors">About</Link>
                        <Link to="/projects"
                              className="text-gray-300 hover:text-white transition-colors">Projects</Link>
                        <Link to="/skills" className="text-gray-300 hover:text-white transition-colors">Skills</Link>
                        <Link to="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link>
                        <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default NavBar
