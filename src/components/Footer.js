import React from 'react';
import { Link } from 'react-router-dom';
import config from '../config/config';

const Footer = () => {
  return (
    <footer className="bg-gray-100">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-8 gap-8">
          {/* Left Section - Logo and Subscription */}
          <div className="md:col-span-4">
            <div className="flex items-center mb-4">
              {/* Replace with your logo */}
              {/* <img src="YOUR_LOGO_URL_HERE" alt="Logo" className="h-8 mr-2" /> */}
              <span className="text-xl font-bold text-gray-800">Astral Dynamic</span>
            </div>
            <div className="mb-4">
              <h6 className="text-sm font-semibold text-gray-700 uppercase">
                订阅我们
              </h6>
              <p className="text-sm text-gray-600">
                实时获取最新动态
              </p>
            </div>
            <div className="flex">
              <input
                type="email"
                placeholder="邮箱地址"
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-full mr-2"
              />
              <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline">
                提交
              </button>
            </div>
            <div className="mt-4 flex space-x-4">
              {/* Social Media Icons - Replace with your actual links */}
              <Link to="#" className="text-gray-500 hover:text-gray-700">
                {/* Replace with your icon */}
                WeChat
              </Link>
              <Link to="#" className="text-gray-500 hover:text-gray-700">
                {/* Replace with your icon */}
                Weibo
              </Link>
              <Link to="#" className="text-gray-500 hover:text-gray-700">
                {/* Replace with your icon */}
                Zhihu
              </Link>
              <Link to="#" className="text-gray-500 hover:text-gray-700">
                {/* Replace with your icon */}
                XiaoHongShu
              </Link>
            </div>
          </div>

          <div className="hidden md:block border-l border-gray-300 w-0" />

          {/* Middle Sections - Links */}
          <div className="md:col-span-3 grid grid-cols-3 gap-4">
            <div>
              <h6 className="text-sm font-semibold text-gray-700 uppercase mb-2">
                公司概况
              </h6>
              <ul>
                <li className="mb-1">
                  <Link to="#" className="text-gray-500 hover:text-gray-700 text-sm">
                    关于我们
                  </Link>
                </li>
                <li className="mb-1">
                  <Link to="#" className="text-gray-500 hover:text-gray-700 text-sm">
                    技术积累
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h6 className="text-sm font-semibold text-gray-700 uppercase mb-2">
                机器人产品
              </h6>
              <ul>
                <li className="mb-1">
                  <Link to="#" className="text-gray-500 hover:text-gray-700 text-sm">
                    FREEDOM
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h6 className="text-sm font-semibold text-gray-700 uppercase mb-2">
                其他
              </h6>
              <ul>
                <li className="mb-1">
                  <Link to="#" className="text-gray-500 hover:text-gray-700 text-sm">
                    联系我们
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section - Copyright */}
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-center text-sm text-gray-500">
            Copyright © {new Date().getFullYear()} Astral Dynamic. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
