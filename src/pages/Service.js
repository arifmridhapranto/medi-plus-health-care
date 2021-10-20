import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const Service = () => {
  const [diseases, setDiseases] = useState([]);
  const { serviceId } = useParams();
  useEffect(() => {
    fetch("/Services.json")
      .then((res) => res.json())
      .then((data) => {
        setDiseases(data);
      });
  }, []);
  const disease = diseases.find((el) => el.id === serviceId);
  console.log(disease);

  return (
    <div>
      <div className='bg-header-bg h-72 header'>
        <Header></Header>
        <div className='text-center pt-20'>
          <h2 className='text-3xl text-white'>{serviceId}</h2>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Service;
