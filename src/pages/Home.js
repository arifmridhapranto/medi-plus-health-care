import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import HeroSection from "../components/HeroSection/HeroSection";
import PersonalCare from "../components/PersonalCare/PersonalCare";
import Services from "../components/Services/Services";
import SomeDetails from "../components/SomeDetails/SomeDetails";

const Home = () => {
  return (
    <div className='bg-hero-bg bg-cover h-screen'>
      <Header></Header>
      <HeroSection></HeroSection>
      <Services></Services>
      <SomeDetails></SomeDetails>
      <PersonalCare></PersonalCare>
      <Footer></Footer>
    </div>
  );
};

export default Home;
