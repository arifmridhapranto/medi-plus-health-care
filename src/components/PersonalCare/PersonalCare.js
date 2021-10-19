import React from "react";
import { Link } from "react-router-dom";
import img3 from "../../images/about/img-3.jpg";

const PersonalCare = () => {
  return (
    <div className='flex mt-20 w-full h-auto justify-center items-center'>
      <div className='w-1/2 text-center'>
        <img src={img3} alt='' className='inline object-cover h-5/6' />
      </div>
      <div className='w-1/2 align-middle align-center'>
        <h1 className='text-6xl font-bold text-textColor2 p-4'>
          Personal care & healthy living
        </h1>
        <p className='mb-3'>
          We provide best leading medicle service Nulla perferendis veniam
          deleniti ipsum officia dolores repellat laudantium obcaecati neque.
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
