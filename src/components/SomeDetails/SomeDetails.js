import React, { useState, useEffect } from "react";
import SomeDetail from "../SomeDetail/SomeDetail";

const SomeDetails = () => {
  const [detail, setDetail] = useState([]);

  useEffect(() => {
    fetch("./SomeDetails.json")
      .then((res) => res.json())
      .then((data) => setDetail(data));
  }, []);

  return (
    <div className='h-auto p-4 lg:h-32 mx-10 grid grid-cols-2 gap-5 lg:flex lg:justify-around bg-btnHover text-center items-center mt-20 text-white'>
      {detail.map((dtl) => (
        <SomeDetail dtl={dtl} key={dtl.id}></SomeDetail>
      ))}
    </div>
  );
};

export default SomeDetails;
