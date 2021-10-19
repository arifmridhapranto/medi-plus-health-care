import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <>
      <div className='h-5/6 w-1/2 flex flex-col justify-center pl-8'>
        <h4 className='text-text_color text-xs font-light'>
          TOTAL HEALTH CARE SOLUTION
        </h4>
        <h1 className='text-6xl font-extrabold py-5'>
          Your Most Trusted Health Partner
        </h1>
        <p className='text-base font-semibold'>
          Anyone who can open up to his admirers from the hard work of rejecting
          too much joy, escapes from the greater, accepts and abandons the
          things that make him happy.
        </p>
        <Link
          to='/login'
          className='w-40 px-4 my-6 mx-1 text-xl font-semibold border border-gray-900 text-center text-white rounded-lg py-1 bg-btnHover hover:bg-btnColor'>
          Services <i className='fas fa-chevron-right'></i>
        </Link>
      </div>
    </>
  );
};

export default HeroSection;
