import React from "react";
import { Link } from "react-router-dom";

const Service = (props) => {
  const { name, img, description } = props.service;
  return (
    <div className='border-2 border-black rounded-xl shadow-2xl'>
      <div className=''>
        <img src={img} alt='' className='object-cover h-60 w-full rounded-xl' />
      </div>
      <div className='ml-2'>
        <h2 className='text-xl font-semibold mt-5'>{name}</h2>
        <p className='my-3'>{description}</p>
        <Link to={`/service/${name}`}>
          <button className='px-4 text-lg font-semibold border border-gray-900 rounded-lg py-1  text-white bg-btnColor hover:bg-btnHover mb-3'>
            Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Service;
