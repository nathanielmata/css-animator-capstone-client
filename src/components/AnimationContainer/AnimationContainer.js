import React, { useState } from "react";
import svgTargets from "../SvgTargets";
import svgIcons from "../SvgIcons";
import { useHistory } from "react-router-dom";
import "./AnimationContainer.css";
import AnimationService from "../../services/animation-api-service";
function AnimationContainer() {
  const history = useHistory();
  const [title, setTitle] = useState("Spinning HotDog");
  const [animationTarget, setAnimationTarget] = useState({
    target: svgTargets.hotdog.target,
    bg: svgTargets.hotdog.bg,
  });

  const clearCss = () => {
    document.querySelector("#dashboard__animation--target").style.animation = "";
    void document.querySelector("#dashboard__animation--target").offsetWidth;
  };

  const setCss = () => {
    document.querySelector("#dashboard__animation--target").style.animation =
      "2000ms ease 500ms 1 normal forwards target-spin";
  };

  const handleClick = (e) => {
    e.preventDefault();
    clearCss();
    setCss();
  };

  return (
    <div className="dashboard__container">
      <div className="dashboard__controls">
        <form
          id="dashboard__form"
          className="dashboard__form"
          onSubmit={(e) => handleClick(e)}
        >
          <p>{title}</p>

          <div className="dashboard__form--buttons">
            <button onClick={() => history.push("/editor")}>EDIT</button>
            <button type="submit" className="dashboard__form--submit">
              PLAY
            </button>
          </div>
        </form>
      </div>

      <div
        id="dashboard__preview"
        className="dashboard__preview"
        style={{ backgroundColor: animationTarget.bg }}
      >
        <div id="dashboard__animation--target" className="dashboard__animation--target">
          {/* This is the svg component to be animated passed in from state */}
          {<animationTarget.target />}
        </div>
      </div>
    </div>
  );
}

export default AnimationContainer;
