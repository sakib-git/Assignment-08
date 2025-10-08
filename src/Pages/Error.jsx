import React from 'react';
import error from '../assets/error-404.png';
import { Link } from 'react-router';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';

const Error = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="h-screen flex flex-col justify-center items-center gap-6 bg-gray-50">
        <img src={error} alt="Error" className="w-72 h-72 object-contain " />
        <h2 className="text-3xl font-extrabold text-gray-800">Oops! Something went wrong</h2>
        <p className="text-gray-600 text-center max-w-sm">The page you are looking for does not exist or an error occurred. Please go back to the homepage.</p>
        <Link className="text-lg font-semibold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] px-6 py-3 rounded-lg text-white shadow-lg hover:scale-105 transform transition-all duration-300" to="/">
          Back Home
        </Link>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Error;
