import React from "react";
import Department from "./Department";
import GetInTouch from "./GetInTouch";
import ShortDetails from "./ShortDetails";

const Footer = () => {
  return (
    <div className='mt-10 bg-gray-400 pt-5 h-80'>
      <div className='flex justify-around mx-auto'>
        <ShortDetails></ShortDetails>
        <Department></Department>
        <GetInTouch></GetInTouch>
      </div>

      <h1 className='text-center text-xl font-bold'>
        © Copyright Reserved to |
        <a href='https://www.facebook.com/pranto.mridha.7' target='_blank'>
          Pranto Mridha
        </a>
      </h1>
    </div>
  );
};

export default Footer;
