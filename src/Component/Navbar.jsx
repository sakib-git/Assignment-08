import React from 'react';
import { NavLink } from 'react-router';
import logo from '../assets/logo.png';
import gitlogo from '../assets/git_logo.png';

const Navbar = () => {
  return (
    <div className="white shadow">
      <div className="flex w-full justify-between items-center  p-4 max-w-[1440px] mx-auto max-md:flex-col gap-3 px-4">
        <div className="flex items-center gap-2">
          <img className="w-6  h-6" src={logo} alt="" />
          <NavLink to="/">
            <div className="text-2xl font-bold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text">HERO.IO</div>
          </NavLink>
        </div>
        <div className="flex gap-5 font-semibold">
          <NavLink to="/" className={({ isActive }) => ` ${isActive ? 'text-[#632EE3] underline underline-offset-4' : 'text-black'}`}>
            Home
          </NavLink>
          <NavLink to="/apps" className={({ isActive }) => `${isActive ? 'text-[#632EE3] underline underline-offset-4' : 'text-black'}`}>
            Apps
          </NavLink>
          <NavLink to="/install" className={({ isActive }) => `${isActive ? 'text-[#632EE3] underline underline-offset-4' : 'text-black'}`}>
            Installation
          </NavLink>
        </div>
        <div className="flex gap-3 items-center bg-gradient-to-br  from-[#632EE3] to-[#9F62F2] text-white  px-4 py-2 rounded-md">
          <img className="w-5 h-5" src={gitlogo} alt="" />
          <a href="https://github.com/sakib-git">Contribute</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
