import React from 'react';

const ProductIntro = ({ children, reverse, img }) => {
    return (
        <>
            <div className="m-auto max-w-6xl h-5/6 px-0 mx-auto bg-white" id='about'>
                <div className={`flex ${reverse ? 'flex-col lg:flex-row-reverse' : 'flex-col-reverse lg:flex-row'} justify-between lg:text-left`} data-aos="fade-up">
                    <div className="lg:w-1/2 flex flex-col justify-center overflow-hidden">
                        <img alt="card img" className="rounded-t float-right hover:scale-105 ease-in duration-500" src={img} />
                    </div>
                    <div className="flex flex-col my-4 text-center lg:text-left lg:my-0 lg:justify-center w-full lg:w-1/2 px-8" data-aos="zoom-in" data-aos-delay="500">
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductIntro;