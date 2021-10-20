import React from "react";
import ContactDescription from "../components/Contact/ContactDescription";
import ContactForm from "../components/Contact/ContactForm";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const Contact = () => {
  return (
    <div>
      <div className='bg-header-bg lg:h-72 header'>
        <Header></Header>
        <div className='text-center pt-20 pb-5'>
          <h1 className='text-lg text-white'>Contact Us</h1>
          <h2 className='text-3xl text-white'>Get In Touch</h2>
        </div>
      </div>
      <ContactDescription></ContactDescription>
      <ContactForm></ContactForm>
      <Footer></Footer>
    </div>
  );
};

export default Contact;
