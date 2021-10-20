import React from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./header.css";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <div className='flex flex-col lg:w-5/6 lg:mx-auto lg:justify-between lg:flex-row  lg:pt-5'>
      <div className='text-center lg:text-left'>
        <NavLink to='/' className='text-3xl font-bold'>
          Medi+ Health Care
        </NavLink>
      </div>
      <div className='flex flex-col text-center lg:flex-row lg:text-right'>
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
        <div className='flex flex-row justify-center'>
          {user?.email ? (
            <div className='flex'>
              <h1>{user.displayName}</h1>
              <button
                onClick={logOut}
                className=' mx-1 text-lg font-semibold border border-gray-900 rounded-lg py-1 text-white bg-btnHover hover:bg-btnColor'>
                Log Out
              </button>
            </div>
          ) : (
            <div className=''>
              <NavLink
                to='/login'
                className='px-4 mx-1 text-lg font-semibold border border-gray-900 rounded-lg py-1 text-white bg-btnHover hover:bg-btnColor'>
                Log In
              </NavLink>
              <NavLink
                to='/signup'
                className='px-4 text-lg font-semibold border border-gray-900 rounded-lg py-1  text-white bg-btnColor hover:bg-btnHover '>
                Sign Up
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
