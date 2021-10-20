import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
// import useServicesData from "../hooks/useServicesData";

const Service = () => {
  const [serviceDetails, setServiceDetails] = useState([]);
  const [singleService, setSingleService] = useState([]);

  const { serviceId } = useParams();

  useEffect(() => {
    fetch("/Services.json")
      .then((res) => res.json())
      .then((data) => {
        setServiceDetails(data);
      });
  }, []);
  useEffect(() => {
    const service = serviceDetails.find((el) => el.id == serviceId);
    setSingleService(service);
  }, [serviceDetails]);
  return (
    <div>
      <div className='bg-header-bg h-72 header '>
        <Header></Header>
        <div className='text-center pt-10 '>
          <h2 className='text-3xl text-white pb-20'>{singleService?.name}</h2>
        </div>
        <div className='mt-24 mx-5'>
          <h1 className='text-2xl text-center lg:text-6xl font-extrabold'>
            {singleService?.name}
          </h1>
          <img
            src={singleService?.img}
            alt=''
            className='lg:w-screen lg:mt-5 lg:border-2'
          />
          <p className='text-lg lg:text-2xl mt-5'>
            Description:
            <br />
            <span className='text-sm lg:text-lg'>
              {singleService?.description}
            </span>
          </p>
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
};

export default Service;
