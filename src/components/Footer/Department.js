import React from "react";
import { Link } from "react-router-dom";

const department = () => {
  return (
    <div className='mx-auto flex flex-col'>
      <h1 className='text-3xl text-textColor2 mb-3'>Department</h1>
      <Link to='/services'>Surgury</Link>
      <Link to='/services'>Wome's Health</Link>
      <Link to='/services'>Radiology</Link>
      <Link to='/services'>Cardioc</Link>
      <Link to='/services'>Medicine</Link>
    </div>
  );
};

export default department;
