import React from "react";
import "./customButton.css";

const CustomButton = (props) => {
  return (
    <>
      <button
        onClick={() => props.onClickDo()}
        style={{ ...props.styles, backgroundColor: props.color }}
        className="custom-button"
      >
        {props.children}
      </button>
    </>
  );
};

export default CustomButton;
