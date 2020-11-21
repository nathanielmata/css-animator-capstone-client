import React from "react";
import NotFound from "./NotFound";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

it("renders NotFound component without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<BrowserRouter><NotFound /></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
