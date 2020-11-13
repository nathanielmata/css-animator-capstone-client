import React from "react";
import { Link } from "react-router-dom";
import CustomButton from "../../components/CustomButton/CustomButton";
import colors from "../../constants/colors";
import "./LandingPage.css";

const LandingPage = (props) => {
  return (
    <section>
      <div className="landing">
        {/* <h1>Animation Station</h1> */}
        <h4>
          Lets be creative..... Create and save CSS animatons right in your
          browser
        </h4>
        <CustomButton onClickDo={() => {}} color={colors.yellow}>
          <Link style={{ textDecoration: "none", color: "black", padding: 0 }} to="/login">
            {" "}
            Try for free
          </Link>
        </CustomButton>
      </div>
    </section>
  );
};

export default LandingPage;
