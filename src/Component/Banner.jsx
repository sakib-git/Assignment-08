import React from 'react';
import Playstor from '../assets/Playstor.png';
import applogo from '../assets/appLogo.png';
import herologo from '../assets/hero.png';

const Banner = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center text-center gap-5 py-8 px-8 max-w-[1440px] mx-auto ">
        <h1 className="text-[clamp(1.5rem,0.3462rem+4.6154vw,4.5rem)] font-bold">
          We Build <br className="max-md:hidden" />
          <span className="text-[#632EE3]">Productive</span> Apps
        </h1>
        <p className="md:text-2xl text-gray-500 max-w-[1100px]">At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
        <div className="flex justify-center gap-5 items-center max-sm:flex-col w-full">
          <a href="" className="px-6 py-2 rounded-md border flex items-center gap-2 max-sm:w-full border-gray-400  justify-center">
            <img src={Playstor} alt="" />
            <p className="font-bold text-[17px]">Google Play</p>
          </a>
          <a href="" className="px-6 py-2 rounded-md border flex items-center gap-2 max-sm:w-full border-gray-400  justify-center">
            <img src={applogo} alt="" />
            <p className="font-bold text-[17px]">App Store</p>
          </a>
        </div>
      </div>
      <div className="flex justify-center px-8">
        <img src={herologo} alt="" />
      </div>
      <div className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white p-10">
        <div className="max-w-[1440px] mx-auto p-4 flex flex-col justify-center gap-8 ">
          <span className="text-[clamp(1.5rem,0.75rem+3vw,3rem)] font-bold text-center">Trusted by Millions, Built for You</span>
          <div className="flex justify-around items-center max-md:flex-col">
            <div className="flex gap-4 flex-col text-center">
              <p className="text-[#ffffffdc]">Total Downloads</p>
              <p className="font-bold text-2xl md:text-4xl">29.6M</p>
              <p className="text-[#ffffffdc]">21% more than last month</p>
            </div>
            <div className="flex gap-4 flex-col text-center ">
              <p className="text-[#ffffffdc]">Total Reviews</p>
              <p className="font-bold text-2xl md:text-4xl ">906K</p>
              <p className="text-[#ffffffdc]">46% more than last month</p>
            </div>
            <div className="flex gap-4 flex-col text-center">
              <p className="text-[#ffffffdc]">Active Apps</p>
              <p className="font-bold text-2xl md:text-4xl ">132+</p>
              <p className="text-[#ffffffdc]">31 more will Launch</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
