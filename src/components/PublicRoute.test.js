import React from "react";
import PublicRoute from "./PublicRoute";
import Main from './Main/Main'
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

it("renders PublicRoute component without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<BrowserRouter> <PublicRoute><Main></Main></PublicRoute></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
