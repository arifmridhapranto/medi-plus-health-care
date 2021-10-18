import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className='w-4/5 mx-auto grid grid-cols-3 justify-between pt-5'>
      <div className='col-start-1 col-end-2'>
        <NavLink to='/' className='text-3xl font-bold'>
          Medi+ Health Care
        </NavLink>
      </div>
      <div className='menu mx-auto col-start-2 col-end-4'>
        <NavLink to='/home' className='px-4 text-lg font-semibold  '>
          Home
        </NavLink>
        <NavLink to='/about' className='px-4 text-lg font-semibold'>
          About
        </NavLink>
        <NavLink to='/services' className='px-4 text-lg font-semibold'>
          Services
        </NavLink>
        <NavLink to='/contact' className='px-4 text-lg font-semibold'>
          Contact
        </NavLink>
        <NavLink
          to='/login'
          className='px-4 mx-1 text-lg font-semibold border border-gray-900 rounded-lg py-1 text-white bg-btnHover hover:bg-btnColor'>
          Log In
        </NavLink>
        <NavLink
          to='/signin'
          className='px-4 text-lg font-semibold border border-gray-900 rounded-lg py-1  text-white bg-btnColor hover:bg-btnHover '>
          Sign In
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
