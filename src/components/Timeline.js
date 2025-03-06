import React, { useState, useRef } from 'react';
import config from '../config/config'; // Import the configuration

const Timeline = () => {
    const [selectedYear, setSelectedYear] = useState(2017);
    const timelineRef = useRef(null);

    const handleYearClick = (year) => {
        setSelectedYear(year);
        const element = document.getElementById(`year-${year}`);
        if (element && timelineRef.current) {
            const containerWidth = timelineRef.current.offsetWidth;
            const elementWidth = element.offsetWidth;
            const elementLeft = element.offsetLeft + elementWidth / 2;
            const scrollPosition = elementLeft - containerWidth / 2;
            timelineRef.current.scrollTo({
                left: scrollPosition,
                behavior: 'smooth'
            });
        }
    };

    const years = [
        { year: 2017, description: '国内首款商业化下肢外骨骼机器人X1发布' },
        { year: 2018, description: 'Astral Dynamic新加坡办公室设立,开启全球化进程' },
        { year: 2019, description: '人形机器人项目立项' },
        { year: 2020, description: '人形机器人项目立项' },
        { year: 2021, description: '人形机器人项目立项' },
        { year: 2022, description: '人形机器人项目立项' },
    ];

    return (
        <div className="relative my-10 py-10 overflow-x-hidden">
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-300 z-0 transform -translate-y-1/2"></div> {/* Full-width partition line */}
            <div className="timeline-wrapper overflow-x-auto">
                <div className="timeline-container flex scroll-snap-x mandatory py-4 z-10" ref={timelineRef}>
                    {years.map(({ year, description }) => (
                        <div
                            key={year}
                            id={`year-${year}`}
                            className={`timeline-item relative flex-shrink-0 w-96 mx-4 cursor-pointer scroll-snap-align-center ${selectedYear === year ? `text-${config.themeColor}-600 font-bold` : 'text-gray-500'}`}
                            onClick={() => handleYearClick(year)}
                            style={{ '--theme-color': config.themeColor }}
                        >
                            <div className="relative mb-2 -mt-4"> {/* Adjusted margin-top */}
                                <span className="text-lg">{year}</span>
                            </div>
                            <div className={`absolute left-0 w-full h-1 ${selectedYear === year ? `bg-${config.themeColor}-600` : 'transparent'} my-2 z-20 transform -translate-y-2.5`}></div>
                            <p className="text-sm text-gray-700">{description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Timeline;