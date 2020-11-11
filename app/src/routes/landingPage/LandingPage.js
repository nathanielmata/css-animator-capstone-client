import React from 'react';
import CustomButton from '../../components/CustomButton/CustomButton';
import colors from '../../constants/colors';
import './LandingPage.css';

const LandingPage = (props) => {
	return (
		<section>
			<CustomButton onClickDo={() => {}} color={colors.primaryColor}>
				Animate
			</CustomButton>
			<div className='landing'>
				<h1>Animation Station</h1>
				<h4>
					Lets be creative..... Create and save CSS animatons right in your
					browser
				</h4>
				<button onClick={() => this.props.history.push('/login')}>
					Try for free
				</button>
			</div>
		</section>
	);
};

export default LandingPage;
