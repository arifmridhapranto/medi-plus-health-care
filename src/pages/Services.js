import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Service from "../components/Service/Service";
import useServicesData from "../hooks/useServicesData";

const Services = () => {
  const { services } = useServicesData();
  return (
    <div>
      <div className='bg-header-bg h-72 header'>
        <Header></Header>
        <div className='text-center pt-20'>
          <h1 className='text-lg text-white'>Our Services</h1>
          <h2 className='text-3xl text-white'>What we do</h2>
        </div>
      </div>
      <div className='container mx-auto grid grid-cols-3 gap-10 mt-16'>
        {services.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Services;
