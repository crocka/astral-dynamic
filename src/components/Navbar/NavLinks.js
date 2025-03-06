import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import config from '../../config/config'; // Import the configuration

const NavLinks = () => {
    const [openSubmenus, setOpenSubmenus] = useState({});

    const handleMouseEnter = (menu) => {
        setOpenSubmenus((prev) => ({ ...prev, [menu]: true }));
    };

    const handleMouseLeave = (menu) => {
        setOpenSubmenus((prev) => ({ ...prev, [menu]: false }));
    };

    return (
        <div className="flex flex-col lg:flex-row items-center w-full">
            <div className="relative flex flex-grow lg:basis-2/3 justify-center items-center">
                <div className="relative" onMouseEnter={() => handleMouseEnter('about')} onMouseLeave={() => handleMouseLeave('about')}>
                    <HashLink className={`nav-link px-4 py-2 font-extrabold text-gray-500 hover:text-${config.themeColor}-900`} smooth to="/#about">
                        公司概况
                    </HashLink>
                    <div className={`absolute flex flex-col mt-2 bg-white bg-opacity-30 shadow-lg rounded-lg transition-all duration-500 ${openSubmenus.about ? 'max-h-96 opacity-100' : 'max-h-0 overflow-hidden'}`}>
                        <HashLink className="nav-link rounded-lg px-4 py-2 text-white hover:bg-gray-100" smooth to="/#team">
                            关于我们
                        </HashLink>
                        <HashLink className="nav-link rounded-lg px-4 py-2 text-white hover:bg-gray-100" smooth to="/#history">
                            技术积累
                        </HashLink>
                    </div>
                </div>
                <div className="relative" onMouseEnter={() => handleMouseEnter('services')} onMouseLeave={() => handleMouseLeave('services')}>
                    <HashLink className={`nav-link px-4 py-2 font-extrabold text-gray-500 hover:text-${config.themeColor}-900`} smooth to="/#services">
                        机器人产品
                    </HashLink>
                    <div className={`absolute left-1/2 transform -translate-x-1/2 mt-2 bg-white bg-opacity-30 shadow-lg rounded-lg transition-all duration-500 ${openSubmenus.services ? 'max-h-96 opacity-100' : 'max-h-0 overflow-hidden'}`}>
                        <HashLink className="nav-link rounded-lg px-4 py-2 text-white hover:bg-gray-100" smooth to="/#freedom">
                            Freedom
                        </HashLink>
                    </div>
                </div>
                <HashLink className={`nav-link px-4 py-2 font-extrabold text-gray-500 hover:text-${config.themeColor}-900`} to="/contact#contact">
                    联系我们
                </HashLink>
            </div>
            <HashLink className={`nav-link text-white border border-white-900 bg-transparent hover:bg-${config.themeColor}-900 hover:text-white inline-flex items-center justify-center w-auto px-6 py-3 shadow-xl rounded-full mx-4 transition duration-300 ease-in-out`} smooth to="/get-demo#demo">
                联系我们
            </HashLink>
        </div>
    );
};

export default NavLinks;