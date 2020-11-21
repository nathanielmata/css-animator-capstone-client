import React from "react";
import PrivateRoute from "./PrivateRoute";
import Menu from './Menu/Menu'
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

it("renders PrivateRoute component without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <PrivateRoute>
        <Menu />
      </PrivateRoute>
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
