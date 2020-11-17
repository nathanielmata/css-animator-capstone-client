import React from "react";
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom'
import Menu from "../../components/Menu/Menu";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";

const RegistrationPage = () => {
  const history = useHistory();

  const handleRegistrationSuccess = (user) => {
    history.push("/login");
  };

  return (
    <section className="RegistrationPage">
      <Menu />
      <h2>Get started for free.</h2>
      <RegistrationForm
        onRegistrationSuccess={handleRegistrationSuccess}
      />
      <div className='link-to-register'>
					<p>Already have an account?</p>
					<span>
						<Link to='/login'>Login</Link>
					</span>
				</div>
    </section>
  );
};

export default RegistrationPage;
