import React from "react";
import Dashboard from "./Dashboard";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';

it("renders Dashboard component without crashing", () => {
  const div = document.createElement("div");
  let animation = {id: 1}
  ReactDOM.render(<BrowserRouter> <Dashboard animation={animation} /></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
