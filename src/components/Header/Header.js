import React, { Component } from "react";
import { Link } from "react-router-dom";
import TokenService from "../../services/token-service";
import "./Header.css";
import UserContext from "../../context/UserContext";
import Logo from "../Logo/Logo";

export default class Header extends Component {
  static contextType = UserContext;

  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  };
  handleLogoutClick = () => {
    TokenService.clearAuthToken();
    this.context.setUser(null);
  };
  handleProfilePage = () => {
    const { location, history } = this.props;
    const destination = (location.state || {}).from || "/profile";
    history.push(destination);
  };
  renderLogoutLink() {
    return (
      <div className="Header__logged-in">
        <Link to="/profile">{`${this.context.user_name}`}</Link>
        <Link onClick={this.handleLogoutClick} to="/">
          Logout
        </Link>
      </div>
    );
  }

  renderLoginLink() {
    return (
      <div className='header__container'>
        <div className="Home__not-logged-in">
          <Link  to="/">Home</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>
      </div>
    );
  }

  render() {
    return (
      <nav className="Header">
      <h1>
      <Logo />
        { /*  <Link to="/dashboard"> Animation Station</Link> */}
        </h1>
    
        {this.context.user ? this.renderLogoutLink() : this.renderLoginLink()}  
      </nav>
    );
  }
}
