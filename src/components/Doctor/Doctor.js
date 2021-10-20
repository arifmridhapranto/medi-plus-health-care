import React from "react";

const Doctor = (props) => {
  const { img, name, specialist } = props.doctor;
  return (
    <div className='sm:mx-auto'>
      <img src={img} alt='' />
      <h1 className='text-left font-bold'>{name}</h1>
      <h3 className='text-left font-semibold'>{specialist}</h3>
    </div>
  );
};

export default Doctor;
