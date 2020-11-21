import React from "react";
import UserInfo from "./UserInfo";
import ReactDOM from "react-dom";

it("renders UserInfo component without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<UserInfo />, div);
  ReactDOM.unmountComponentAtNode(div);
});
