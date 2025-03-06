import React, { useState, useEffect } from 'react';
import NavLinks from './NavLinks';
import { HashLink } from 'react-router-hash-link';
import config from '../../config/config'; // Import the configuration

const NavBar = () => {
    const [top, setTop] = useState(!window.scrollY);
    const [isOpen, setisOpen] = useState(false);
    
    function handleClick() {
        setisOpen(!isOpen);
    }

    useEffect(() => {
      const scrollHandler = () => {
        window.scrollY > 10 ? setTop(false) : setTop(true);
      };
      window.addEventListener('scroll', scrollHandler);
      return () => window.removeEventListener('scroll', scrollHandler);
    }, [top]);

    return (
        <nav className={`fixed top-0 w-full z-30 transition duration-300 ease-in-out mb-16 hover:bg-${config.themeColor}/30 backdrop-blur ${top ? 'bg-transparent' : `bg-${config.themeColor}/30 backdrop-blur`}`}>
            <div className="flex justify-between items-center py-2">
                <div className="flex-grow basis-1/3 justify-center md:px-12 md:mx-12 items-center text-center font-semibold">
                    <HashLink smooth to="/#hero"><h1 className={`font-extrabold text-4xl text-${config.themeColor}-900`}>Astral Dynamic</h1></HashLink>
                </div>
                <div className="lg:hidden">
                    <button onClick={handleClick} className={`text-${config.themeColor}-900 focus:outline-none`}>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
                <div className={`flex-grow basis-2/3 lg:flex ${isOpen ? 'block' : 'hidden'} lg:block`}>
                    <NavLinks />
                </div>
            </div>
        </nav>
    );
};

export default NavBar;