import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <>
      <div className='pt-10 h-full px-10 text-center lg:h-5/6 lg:w-1/2 flex flex-col lg:justify-center lg:text-left lg:pl-8'>
        <h4 className='text-sm text-text_color lg:text-xs font-light '>
          TOTAL HEALTH CARE SOLUTION
        </h4>
        <h1 className=' text-lg lg:text-6xl lg:font-extrabold lg:py-5'>
          Your Most Trusted Health Partner
        </h1>
        <p className='font-normal lg:text-base lg:font-semibold'>
          Anyone who can open up to his admirers from the hard work of rejecting
          too much joy, escapes from the greater, accepts and abandons the
          things that make him happy.
        </p>
        <Link
          to='/login'
          className='mx-auto w-40 px-4 my-6 lg:mx-1 text-xl font-semibold border border-gray-900 text-white rounded-lg py-1 bg-btnHover hover:bg-btnColor'>
          Services <i className='fas fa-chevron-right'></i>
        </Link>
      </div>
    </>
  );
};

export default HeroSection;
