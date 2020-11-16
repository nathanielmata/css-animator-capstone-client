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
    document.querySelector("#animation__target").style.animation = "";
    void document.querySelector("#animation__target").offsetWidth;
  };

  const setCss = () => {
    document.querySelector("#animation__target").style.animation =
      "2000ms ease 500ms 1 normal forwards target-spin";
  };

  const handleClick = (e) => {
    e.preventDefault();
    clearCss();
    setCss();
  };

  return (
    <div className="editor__container">
      <div className="editor__controls">
        <form
          id="editor__form"
          className="editor__form"
          onSubmit={(e) => handleClick(e)}
        >
          <p>{title}</p>

          <div className="editor__form--buttons">
            <button onClick={() => history.push("/editor")}>EDIT</button>
            <button type="submit" className="editor__form--submit">
              PLAY
            </button>
          </div>
        </form>
      </div>

      <div
        id="editor__preview"
        className="editor__preview"
        style={{ backgroundColor: animationTarget.bg }}
      >
        <div id="animation__target" className="animation__target">
          {/* This is the svg component to be animated passed in from state */}
          {<animationTarget.target />}
        </div>
      </div>
    </div>
  );
}

export default AnimationContainer;
