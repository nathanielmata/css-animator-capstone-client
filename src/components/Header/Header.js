import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-service';
import IdleService from '../../services/idle-service';
import UserContext from '../../context/UserContext';
import Menu from '../Menu/Menu';
import './Header.css';

export default class Header extends Component {
	static contextType = UserContext;

	static defaultProps = {
		location: {},
		history: {
			push: () => {},
		},
	};
	handleLogoutClick = () => {
    TokenService.clearAuthToken();
    TokenService.clearCallbackBeforeExpiry()
    IdleService.unRegisterIdleResets()
		this.context.setUser(null);
	};
	handleProfilePage = () => {
		const { location, history } = this.props;
		const destination = (location.state || {}).from || '/profile';
		history.push(destination);
	};
	renderLogoutLink() {
		return (
			<div className='header__container'>
				<div className='Header__logged-in'>
					<Link
						id='user__name'
						to='/profile'
					>{`${this.context.user_name}`}</Link>
					<Link id='logout_button' onClick={this.handleLogoutClick} to='/'>
						Logout
					</Link>
				</div>
			</div>
		);
	}

	renderLoginLink() {
		return (
			<div className='header__container'>
				<div className='Header__not-logged-in'>
					<Link id='login__Button' to='/login'>
						Log in
					</Link>
					<Link id='register__button' to='/registration' >
						Register
					</Link>
					
				</div>
			</div>
		);
	}

	render() {
		return (
			<>
				<Menu />
				<div className='Header'>
					<div className='main__header_options'>
						<div style={{ paddingTop: 10, paddingLeft: 20 }}>
							<h1>
								<Link to='/profile'>
									<img src='/header_logo.svg' alt='logo' style={{ height: 60 }} />
								</Link>
							</h1>
						</div>
						<div className='header__links'>
							<div>
								<Link to='/'>Home</Link>
							</div>
							<div>
								<Link to='/contact'>Contact</Link>
							</div>
							<Link id='how-to__button' to='/how-to-use' >
						How to Use
					</Link>
						</div>
					</div>
					{this.context.user ? this.renderLogoutLink() : this.renderLoginLink()}
					<span className='Header__tagline--narrow'>
						Let's be creative, make some animation.
					</span>
				</div>
			</>
		);
	}
}
