import React from "react";
import { Link } from "react-router-dom";
import errorImg from "../images/erroePage.png";

const NotFound = () => {
  return (
    <div className='w-full mx-auto text-center'>
      <div className=' object-cover'>
        <img src={errorImg} alt='' className='inline ' />
      </div>

      <Link to='/'>
        <button className='px-4 mx-1 my-4 text-lg font-semibold border border-gray-900 rounded-lg py-1 text-white bg-btnHover hover:bg-btnColor'>
          Back To Home Page
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
