import React from "react";
import RegistrationPage from "./RegistrationPage";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

it("renders RegistrationPage component without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <RegistrationPage />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
