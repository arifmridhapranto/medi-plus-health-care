import React from "react";
import Department from "./Department";
import GetInTouch from "./GetInTouch";
import ShortDetails from "./ShortDetails";

const Footer = () => {
  return (
    <div className='mt-10 bg-gray-400 pt-5 lg:h-80'>
      <div className='flex flex-col lg:flex-row lg:justify-around '>
        <ShortDetails></ShortDetails>
        <Department></Department>
        <GetInTouch></GetInTouch>
      </div>
      <h1 className='text-sm text-center lg:text-xl font-bold'>
        © Copyright Reserved to | Pranto Mridha
      </h1>
    </div>
  );
};

export default Footer;
