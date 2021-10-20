import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import OurSpecialist from "../components/OurSpecialist/OurSpecialist";
import PersonalCare from "../components/PersonalCare/PersonalCare";
import SomeDetails from "../components/SomeDetails/SomeDetails";

const About = () => {
  return (
    <div>
      <div className='bg-header-bg lg:h-72 header'>
        <Header></Header>
        <div className='text-center pt-20 pb-5'>
          <h1 className='text-lg text-white'>About Us</h1>
          <h2 className='text-3xl text-white'>About Us</h2>
        </div>
      </div>
      <PersonalCare></PersonalCare>
      <OurSpecialist></OurSpecialist>
      <SomeDetails></SomeDetails>
      <Footer></Footer>
    </div>
  );
};

export default About;
