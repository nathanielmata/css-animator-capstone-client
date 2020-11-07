import React from "react";
import "./menu.css";

const Menu = (props) => {
  return (
    <div className="menu-wrap">
      <input type="checkbox" className="toggler" />
      <div className="hamburger">
        <div></div>{" "}
      </div>
      <div className="menu">
        <div>
          <div>
            <ul>
              <li>Home</li>
              <li>Editor</li>
              <li>Profile</li>
              <li>Login</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Menu;
