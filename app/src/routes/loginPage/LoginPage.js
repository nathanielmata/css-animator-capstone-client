import React from "react";
import "./loginPage.css";
import LoginComponent from "../../components/LoginComponent/LoginComponent";
import RegisterComponent from "../../components/registerComponent/RegisterComponent";
// import LoginForm from '../../components/LoginForm/LoginFrom'

const LoginPage = (props) => {
  return (
    <section id='login-page'>
      <LoginComponent />
    </section>
  );
};

export default LoginPage;
