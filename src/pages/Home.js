import React from "react";
import Header from "../components/Header/Header";
import HeroSection from "../components/HeroSection/HeroSection";

const Home = () => {
  return (
    <div className='bg-hero-bg bg-cover h-screen'>
      <Header></Header>
      <HeroSection></HeroSection>
    </div>
  );
};

export default Home;
