import React from "react";
import { Link } from "react-router-dom";
import CustomButton from "../../components/CustomButton/CustomButton";
import colors from "../../constants/colors";
import "./LandingPage.css";



const LandingPage = (props) => {
  return (
    <section>
      <div className="landing">
        <CustomButton onClickDo={() => {}} color={colors.yellow}>
          <Link
            style={{ textDecoration: "none", color: "black", padding: 0 }}
            to="/login"
          >
            {" "}
            Try for free
          </Link>
        </CustomButton>
      </div>
    </section>
  );
};

export default LandingPage;
