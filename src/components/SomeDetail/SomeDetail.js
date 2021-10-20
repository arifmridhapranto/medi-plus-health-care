import React from "react";

const SomeDetail = (props) => {
  const { name, amount } = props.dtl;
  return (
    <div className='border-2 border-white p-2 rounded-xl'>
      <p className='text-6xl font-bold'>{amount}</p>
      <h1 className='text-2xl font-medium'>{name}</h1>
    </div>
  );
};

export default SomeDetail;
