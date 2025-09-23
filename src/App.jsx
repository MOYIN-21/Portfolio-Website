import React, {useState} from "react";
import {Routes, Route} from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/HomeSections/Home";
import About from "./components/Sections/About";
import Projects from "./components/Sections/Projects";
import Skills from "./components/Sections/Skills";
import Blog from "./components/Sections/Blog";
import Contact from "./components/Sections/Contact";
import MobileMenu from "./components/MobileMenu";

function App() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
            <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/projects" element={<Projects/>}/>
                <Route path="/skills" element={<Skills/>}/>
                <Route path="/blog" element={<Blog/>}/>
                <Route path="/contact" element={<Contact/>}/>
            </Routes>
        </>
    );
}

export default App;
