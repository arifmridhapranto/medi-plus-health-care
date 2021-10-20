import React from "react";
import { Link } from "react-router-dom";
import img3 from "../../images/about/img-3.jpg";

const PersonalCare = () => {
  return (
    <div className='flex flex-col mx-8 mt-20 w-4/5 h-5/6 lg:flex-row lg:justify-between lg:items-center'>
      <div className='w-4/5 object-center lg:w-1/2 '>
        <img
          src={img3}
          alt=''
          className='w-full lg:inline lg:object-cover lg:h-4/6'
        />
      </div>
      <div className=' lg:w-1/2 align-middle lg:text-center px-10'>
        <h1 className='text-4xl  lg:text-6xl font-bold text-textColor2 p-4'>
          Personal care & healthy living
        </h1>
        <p className='mb-3 text-sm '>
          We provide best leading medicle service and also we have best doctors
          team in the world. we are always ready to care you.because we care
          about your health and body.
        </p>
        <Link
          to='/login'
          className='w-40 px-4 my-6 mx-1 text-xl font-semibold border border-gray-900 text-center text-white rounded-lg py-1 bg-btnHover hover:bg-btnColor'>
          Services <i className='fas fa-chevron-right'></i>
        </Link>
      </div>
    </div>
  );
};

export default PersonalCare;
