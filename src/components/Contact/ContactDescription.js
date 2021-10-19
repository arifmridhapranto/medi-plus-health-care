import React, { useEffect, useState } from "react";

const ContactDescription = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("./ContactDescription.json")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  return (
    <div className='flex justify-around'>
      {items.map((item) => (
        <div key={item.id} className='text-center mt-20'>
          <p className='text-5xl'>
            <i className={item.icon}></i>
          </p>
          <h1 className='text-2xl'>{item.name}</h1>
          <p className='text-lg'>{item.details}</p>
        </div>
      ))}
    </div>
  );
};

export default ContactDescription;
