import React from "react";
import Header from "./Header";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

it("renders Header component without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
