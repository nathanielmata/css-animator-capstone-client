import React from "react";
import LandingPage from "./LandingPage";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';

it("renders LandingPage component without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<BrowserRouter> <LandingPage /> </BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
