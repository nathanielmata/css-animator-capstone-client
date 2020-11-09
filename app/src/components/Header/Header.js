import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-service';
import './Header.css';
import UserContext from '../../context/UserContext';

export default class Header extends Component {
	static contextType = UserContext;
	handleLogoutClick = () => {
		TokenService.clearAuthToken();
		this.context.setUserName(null);
		this.context.setUserId(null);
		this.context.setUserEmail(null);
	};

	renderLogoutLink() {
		return (
			<div className='Header__logged-in'>
				<Link to={`/${this.context.user_name}`}>User Name</Link>
				<Link onClick={this.handleLogoutClick} to='/'>
					Logout
				</Link>
			</div>
		);
	}

	renderLoginLink() {
		return (
			<div className='Header__not-logged-in'>
				<Link to='/login'>Log in</Link>
				<Link to='/register'>Register</Link>
			</div>
		);
	}

	render() {
		return (
			<nav className='Header'>
				<h1>
					<Link to='/'> Animation Station</Link>
				</h1>
				{/*  <span className="Header__tagline--wide">Animation Station.</span> */}
				<Link to='/editor'>New Animation</Link>
				{TokenService.hasAuthToken() ? (
					this.renderLogoutLink()
				) : (
					this.renderLoginLink()
				)}

				<span className='Header__tagline--narrow'>
					Lets be creative, make some animation.
				</span>
			</nav>
		);
	}
}
