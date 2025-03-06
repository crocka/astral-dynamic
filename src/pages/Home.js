import React from 'react';
import Clients from '../components/Clients';
import Cta from '../components/Cta';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Intro from '../components/Intro';
import Portfolio from '../components/Portfolio';
import Services from '../components/Services';
import LineBreak from '../components/LineBreak';
import productImg from '../images/product_img.jpg';
import config from '../config/config';
import TimeLine from '../components/Timeline';

const Home = () => {
    return (
        <div className="bg-gray-100">
            <Hero />
            <LineBreak />
            <TimeLine />
            <Intro reverse={true} img={productImg} >
                <div className="flex flex-col gap-4 font-sans">
                    <h2 className={`text-2xl font-bold ${config.textColor}`}>高效的结构设计</h2>
                    <p className="text-base text-gray-700">
                        Freedom外观沿用初代仿生设计语言,进一步优化全身比例。
                        整机内走线设计提升整体美观度,精简设计与模块化适配。
                        全串联结构优化控制策略和性能,便于部署,维护控制算法。
                    </p>
                    <div className="grid grid-cols-3 gap-4">
                        <div>
                            <p className="text-sm text-gray-600">身高</p>
                            <p className={`text-lg ${config.textColor}`}>175公分</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-600">体重</p>
                            <p className={`text-lg ${config.textColor}`}>63公斤</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-600">电池续航</p>
                            <p className={`text-lg ${config.textColor}`}>2小时</p>
                        </div>
                    </div>
                </div>
            </Intro>
            {/* <Services />
            <Portfolio /> */}
            <Clients />
            <Cta />
            <Footer />
        </div>

    )
}

export default Home;

