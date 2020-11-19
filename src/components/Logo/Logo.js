import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/log2.PNG";

export default function Logo(props) {
  return (
    <>
      <img src={logo} alt='logo' height="50" style={{ paddingTop: 5 }} />
      <Link to="/"> Animation Station</Link>
    </>
  );
}
