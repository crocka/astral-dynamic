import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';

const NavLinks = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleMouseEnter = () => {
        setDropdownOpen(true);
    };

    const handleMouseLeave = () => {
        setDropdownOpen(false);
    };

    return (
        <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <HashLink className="nav-link px-4 font-extrabold text-gray-500 hover:text-blue-900" smooth to="/#about">
                公司概况
            </HashLink>
            {dropdownOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg">
                    <HashLink className="nav-link block px-4 py-2 text-gray-700 hover:bg-gray-100" smooth to="/#team">
                        关于我们
                    </HashLink>
                    <HashLink className="nav-link block px-4 py-2 text-gray-700 hover:bg-gray-100" smooth to="/#history">
                        技术积累
                    </HashLink>
                </div>
            )}
            <HashLink className="nav-link px-4 font-extrabold text-gray-500 hover:text-blue-900" smooth to="/#services">
                机器人产品
            </HashLink>
            <HashLink className="nav-link px-4 font-extrabold text-gray-500 hover:text-blue-900" to="/contact#contact">
                联系我们
            </HashLink>
            <HashLink className="nav-link text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-auto px-6 py-3 shadow-xl rounded-xl" smooth to="/get-demo#demo">
                Demo our products
            </HashLink>
        </div>
    );
};

export default NavLinks;