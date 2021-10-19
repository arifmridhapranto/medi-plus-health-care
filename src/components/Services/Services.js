import React from "react";
import { Link } from "react-router-dom";
import useServicesData from "../../hooks/useServicesData";
import Service from "../Service/Service";

const Services = () => {
  const { services } = useServicesData();
  return (
    <div className='mt-20 '>
      <h1 className='text-center text-4xl font-bold mb-10'>
        Health Services We Provided
      </h1>
      <div className='container mx-auto grid grid-cols-3 gap-10'>
        {services.slice(0, 6).map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
      <div className='text-center'>
        <Link to='/services'>
          <button className='w-80 px-4 my-6 mx-1 text-xl font-semibold border border-gray-900 text-center text-white rounded-lg py-1 bg-btnHover hover:bg-btnColor'>
            All Services
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Services;
