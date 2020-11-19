import React from "react";
import TokenService from "../../services/token-service";
import "./Menu.css";

const Menu = (props) => {

  const renderNotAuthOptions = (props) => {
    return (
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/login">Login</a>
        </li>
        <li>
          <a href="/registration">Register</a>
        </li>
      </ul>
    );
  };

  const renderAuthOptions = () => {
    return (
      <ul>
        <li>
          <a href="/profile">Dashboard</a>
        </li>
        <li>
          <a href="/editor">Editor</a>
        </li>
      </ul>
    );
  };

  return (
    <div className="menu-wrap">
      <input type="checkbox" className="toggler" />
      <div className="hamburger">
        <div></div>{" "}
      </div>
      <div className="menu">
        <div>
          <div>
            {TokenService.hasAuthToken()
              ? renderAuthOptions()
              : renderNotAuthOptions()}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Menu;
