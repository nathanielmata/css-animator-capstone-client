import React from 'react';
import UserInfo from '../../components/UserInfo';
import TokenService from '../../services/token-service';
import AnimationService from '../../services/animation-api-service';
import AnimationList from '../../components/AnimationList';
import CustomButton from '../../components/CustomButton/CustomButton';
import colors from '../../constants/colors';
import UserContext from '../../context/UserContext';
import './ProfilePage.css';
import Menu from '../../components/Menu/Menu';
import { Link } from 'react-router-dom'

class ProfilePage extends React.Component {
	static contextType = UserContext;
	state = {
		user: {
			fullname: '',
			user_name: '',
			id: null,
		},
	};
	componentDidMount() {
		AnimationService.getProfile().then((resJSON) => {
			this.setState({
				user: resJSON,
			});
			TokenService.saveUserId(this.state.user.id);
			this.setCards();
		});
	}
	setCards = () => {
		AnimationService.getAnimations().then((resJSON) => {
			// eslint-disable-next-line eqeqeq
			const userAnimations = resJSON.filter((animation) => {
				if (animation.owner === this.state.user.id) {
					return animation;
				}

				// eslint-disable-next-line array-callback-return
				return;
			});
			this.setState({
				userPost: userAnimations,
			});
		});
	};


	render() {
		return (
			<section id='profile-page'>
				<Menu />
				<Link style={{backgroundColor: "white"}} to="/editor">New Animation</Link>
				<UserInfo
					username={`${this.context.user_name}`}
					fullname={`${this.context.full_name}`}
				/>
				<div className='buttons-container'>
					<CustomButton
						styles={{ width: 140, fontSize: 17 }}
						color={colors.yellow}>
						Invite
					</CustomButton>
					<CustomButton
					onClickDo={() => {}}
						styles={{ width: 140, fontSize: 17 }}
						color={colors.yellow}>
						<Link to="/editor">New Animation</Link>
					</CustomButton>
				</div>
				<div
					className='animation-container'
					style={{ backgroundColor: colors.yellow }}>
					<div className='animation-title'>
						<p>Animation Title</p>
					</div>
				</div>
				{/* <AnimationList></AnimationList> */}
			</section>
		);
	}
}
export default ProfilePage;
