import React from "react";
import ProfilePage from "./ProfilePage";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';

it("renders ProfilePage component without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<BrowserRouter> <ProfilePage /> </BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
