import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/Navbar/NavBar';
import config from '../config/config';
import '../styles/hero.css'; // Import the CSS file

const Hero = () => {
    return (
        <>
            <div className="hero flex justify-center" id='hero'>
                <NavBar />
                <div className="flex flex-col justify-center m-auto overflow-hidden mx-4 mt-8 lg:mt-4 p-2 md:p-12 h-5/6" data-aos="zoom-in">
                    <div id='hero' className="flex flex-row justify-end lg:flex-row py-10 text-center lg:text-left">
                        <div className="justify-items-end flex flex-col my-4 text-center lg:text-left lg:my-0 lg:justify-center w-full lg:w-1/2 px-8" data-aos="zoom-in" data-aos-delay="200">
                            <h1 className={`mb-5 md:text-5xl text-3xl font-bold text-${config.themeColor}-900`}>
                                Astral Dynamic Freedom
                            </h1>
                            <div className="text-xl font-semibold tracking-tight mb-5 text-gray-500">开启通用人形机器人新征程</div>
                            <div className="mb-4 space-x-0 md:space-x-2 md:mb-8">
                                <Link to="/contact" className={`text-white bg-${config.themeColor}-900 hover:bg-${config.themeColor}-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-full sm:w-auto sm:mb-0`}>
                                    公司概况
                                    <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                </Link>
                                <Link to="/contact" className={`text-white bg-${config.themeColor}-900 hover:bg-${config.themeColor}-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-full sm:w-auto sm:mb-0`}>
                                    关于我们
                                    <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;