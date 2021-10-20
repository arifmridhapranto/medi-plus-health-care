import React, { useEffect, useState } from "react";
import Doctor from "../Doctor/Doctor";

const OurSpecialist = () => {
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    fetch("./Doctors.json")
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);
  return (
    <div className='mt-16'>
      <div className='text-center'>
        <h1 className='text-center pb-5 text-4xl font-bold text-text_color lg:text-6xl'>
          Meet Our Specialist
        </h1>
        <p className=' px-5  lg:px-40 text-center text-lg lg:text-xl'>
          Today’s users expect effortless experiences. Don’t let essential
          people and processes stay stuck in the past. Speed it up, skip the
          hassles
        </p>
        <div className='flex flex-col mx-auto justify-center items-center lg:flex-row lg:justify-around mt-10'>
          {doctors.map((doctor) => (
            <Doctor key={doctor.id} doctor={doctor}></Doctor>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurSpecialist;
