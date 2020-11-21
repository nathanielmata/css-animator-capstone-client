import React from 'react';
import UserInfo from '../../components/UserInfo';
import AnimationApiService from '../../services/animation-api-service';
import AnimationContainer from '../../components/AnimationContainer/AnimationContainer';
import CustomButton from '../../components/CustomButton/CustomButton';
import colors from '../../constants/colors';
import UserContext from '../../context/UserContext';
import './ProfilePage.css';
import { Link } from 'react-router-dom';

class ProfilePage extends React.Component {
	static contextType = UserContext;
	state = {
		user: {
			fullname: '',
			user_name: '',
			id: '',
		},
		userAnimation: [],
	};
	componentDidMount() {
		this.setCards();
	}

	setCards = () => {
		AnimationApiService.getAnimations().then((res) => {
			this.setState({
				userAnimation: res,
			});
		});
	};

	render() {
		return (
			<section id='profile-page' className='profile-page'>
				<UserInfo
					username={`${this.context.user_name}`}
					fullname={`${this.context.full_name}`}
				/>
				<div className='buttons-container'>
					<CustomButton
						onClickDo={() => {}}
						styles={{ width: 140, fontSize: 17 }}
						color={colors.yellow}>
						<Link to='/editor/new'>New Animation</Link>
					</CustomButton>
				</div>
				<div className='profile__animation--container'>
					{this.state.userAnimation.map((animation, idx) => {
						return (
							<Link to={`editor/${animation.id}`} key={idx}>
								<AnimationContainer animation={animation} />
							</Link>
						);
					})}
				</div>
			</section>
		);
	}
}
export default ProfilePage;
