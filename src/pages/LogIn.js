import React from "react";
import Footer from "../components/Footer/Footer";
import LoginForm from "../components/form/LoginForm";
import Header from "../components/Header/Header";

const login = () => {
  return (
    <div>
      <Header></Header>
      <LoginForm></LoginForm>
      <Footer></Footer>
    </div>
  );
};

export default login;
