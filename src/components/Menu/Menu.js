import React from "react";
import { Link } from "react-router-dom";
import TokenService from "../../services/token-service";
import "./Menu.css";

const Menu = (props) => {
  const handleLogoutClick = () => {
    TokenService.clearAuthToken();
  };

  const renderNotAuthOptions = (props) => {
    return (
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/registration">Register</Link>
        </li>
      </ul>
    );
  };

  const renderAuthOptions = () => {
    return (
      <ul>
        <li>
          <Link to="/login">Dashboard</Link>
        </li>
        <li>
          <Link to="/register">Editor</Link>
        </li>
        <li>
          <Link onClick={() => handleLogoutClick()} to="/">
            Logout
          </Link>
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
