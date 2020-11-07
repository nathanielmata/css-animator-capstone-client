import React from "react";
import "./registerComponent.css";
import CustomButton from "../src/components/customButton/CustomButton";
import colors from "../src/constants/colors";

const RegisterComponent = (props) => {
  return (
    <div className="header-form-container">
      <h2 className="welcome">Create an account.</h2>
      <h3
        style={{ padding: 20, paddingLeft: 0, paddingTop: 0, marginBottom: 30 }}
      >
        Get Started for free today.
      </h3>
      <form id="login-form">
        <label className="login-input-label">Full Name</label>
        <input className="user-input" />
        <label className="login-input-label">Username</label>
        <input className="user-input" />
        <label className="login-input-label">Email</label>
        <input className="user-input" />
        <label className="login-input-label">Password</label>
        <input className="user-input" />
        <CustomButton color={colors.primaryColor} styles={{ marginTop: 50 }}>
          Login
        </CustomButton>
      </form>
    </div>
  );
};

export default RegisterComponent;