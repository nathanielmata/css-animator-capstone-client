import React from "react";
import LoginPage from "./LoginPage";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';


it("renders LoginPage component without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<BrowserRouter><LoginPage /></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
