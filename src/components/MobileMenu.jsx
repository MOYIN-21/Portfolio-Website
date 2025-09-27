import React, {useEffect} from 'react'
import {IoCloseOutline} from "react-icons/io5";
import {Link} from "react-router-dom";


const MobileMenu = ({menuOpen, setMenuOpen}) => {

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "auto";
    }, [menuOpen]);

    return (
        <div className='fixed text-inter-medium text-sm leading-5 top-0 left-0 w-full bg-black z-40 flex flex-col items-center justify-center transition-all
        duration-300 ease-in-out' style={{
            height: menuOpen ? '100vh' : '0',
            opacity: menuOpen ? '1' : '0',
            pointerEvents: menuOpen ? 'auto' : 'none'
        }}>
            <button onClick={() => setMenuOpen(false)}
                    className='absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer'
                    aria-label='close menu'>
                <IoCloseOutline/>
            </button>

            <Link to='/' onClick={() => setMenuOpen(false)} className='text-inter-medium text-sm leading-5  text-white my-4 transform transition-transform duration-300
                ${menuOpen ? "opacity-1 translate-0" : "opacity-0 translate-y-5'>Home</Link>
            <Link to='/about' onClick={() => setMenuOpen(false)} className='text-inter-medium text-sm leading-5  text-white my-4 transform transition-transform duration-300
                ${menuOpen ? "opacity-1 translate-0" : "opacity-0 translate-y-5'>About</Link>
            <Link to='/projects' onClick={() => setMenuOpen(false)} className='text-inter-medium text-sm leading-5 text-white my-4 transform transition-transform duration-300
                ${menuOpen ? "opacity-1 translate-0" : "opacity-0 translate-y-5'>Projects</Link>
            <Link to='/skills' onClick={() => setMenuOpen(false)} className='text-inter-medium text-sm leading-5 text-white my-4 transform transition-transform duration-300
                ${menuOpen ? "opacity-1 translate-0" : "opacity-0 translate-y-5'>Skills</Link>
            <Link to='/blog' onClick={() => setMenuOpen(false)} className='text-inter-medium text-sm leading-5 text-white my-4 transform transition-transform duration-300
                ${menuOpen ? "opacity-1 translate-0" : "opacity-0 translate-y-5'>Blog</Link>
            <Link to='/contact' onClick={() => setMenuOpen(false)} className='text-inter-medium text-sm leading-5 text-white my-4 transform transition-transform duration-300
                ${menuOpen ? "opacity-1 translate-0" : "opacity-0 translate-y-5'>Contact</Link>
        </div>
    )
}

export default MobileMenu
