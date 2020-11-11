<<<<<<< HEAD
import React, { Component } from 'react'
import Menu from '../../components/Menu/Menu'
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm'
=======
import React, { Component } from "react";
import Menu from "../../components/menu/Menu";
import { useHistory } from "react-router-dom";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
>>>>>>> animation-station-auth

const RegistrationPage = () => {
  const history = useHistory();

  const handleRegistrationSuccess = (user) => {
    history.push("/login");
  };

  return (
    <section className="RegistrationPage">
      <Menu />
      <h2>Get started for free.</h2>
      <RegistrationForm
        onRegistrationSuccess={handleRegistrationSuccess}
      />
    </section>
  );
};

export default RegistrationPage;
