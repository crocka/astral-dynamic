import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import config from '../../config/config';

const NavLinks = ({ mobile = false, closeMenu }) => {
    const [openSubmenus, setOpenSubmenus] = useState({});

    const handleToggleSubmenu = (menu) => {
        if (mobile) {
            setOpenSubmenus((prev) => ({ ...prev, [menu]: !prev[menu] }));
        }
    };

    const handleMouseEnter = (menu) => {
        if (!mobile) {
            setOpenSubmenus((prev) => ({ ...prev, [menu]: true }));
        }
    };

    const handleMouseLeave = (menu) => {
        if (!mobile) {
            setOpenSubmenus((prev) => ({ ...prev, [menu]: false }));
        }
    };

    const handleLinkClick = () => {
        if (mobile && closeMenu) {
            closeMenu();
        }
    };

    const renderSubmenu = (menu, items) => (
        <div className={`${mobile ? 'pl-4' : 'absolute'} bg-white bg-opacity-30 shadow-lg rounded-lg transition-all duration-500 ${openSubmenus[menu] ? 'max-h-96 opacity-100' : 'max-h-0 overflow-hidden opacity-0'}`}>
            {items.map((item, index) => (
                <HashLink key={index} className="block nav-link rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-100" smooth to={item.to} onClick={handleLinkClick}>
                    {item.text}
                </HashLink>
            ))}
        </div>
    );

    return (
        <div className={`${mobile ? 'flex flex-col' : 'flex flex-row items-center'} w-full`}>
            <div className={`${mobile ? 'flex flex-col' : 'relative flex flex-grow lg:basis-2/3 justify-center items-center'}`}>
                <div className={`${mobile ? '' : 'relative'}`} onMouseEnter={() => handleMouseEnter('about')} onMouseLeave={() => handleMouseLeave('about')}>
                    <button onClick={() => handleToggleSubmenu('about')} className={`nav-link px-4 py-2 font-extrabold text-gray-500 hover:text-${config.themeColor}-900`}>
                        公司概况
                    </button>
                    {renderSubmenu('about', [
                        { to: "/#team", text: "关于我们" },
                        { to: "/#history", text: "技术积累" }
                    ])}
                </div>
                <div className={`${mobile ? '' : 'relative'}`} onMouseEnter={() => handleMouseEnter('services')} onMouseLeave={() => handleMouseLeave('services')}>
                    <button onClick={() => handleToggleSubmenu('services')} className={`nav-link px-4 py-2 font-extrabold text-gray-500 hover:text-${config.themeColor}-900`}>
                        机器人产品
                    </button>
                    {renderSubmenu('services', [
                        { to: "/#freedom", text: "Freedom" }
                    ])}
                </div>
                <HashLink className={`nav-link px-4 py-2 font-extrabold text-gray-500 hover:text-${config.themeColor}-900`} to="/contact#contact" onClick={handleLinkClick}>
                    联系我们
                </HashLink>
            </div>
            {!mobile && <HashLink className={`text-white border border-white-900 bg-transparent hover:bg-${config.themeColor}-900 hover:text-white inline-flex items-center justify-center w-auto px-6 py-3 shadow-xl rounded-full ${mobile ? 'mt-4' : 'mx-4'}`} smooth to="/get-demo#demo" onClick={handleLinkClick}>
                联系我们
            </HashLink>}
        </div>
    );
};

export default NavLinks;
