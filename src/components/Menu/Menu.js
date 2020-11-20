import React from 'react';
import TokenService from '../../services/token-service';
import IdleService from '../../services/idle-service';
import './Menu.css';

const Menu = (props) => {
	const handleLogoutClick = () => {
		TokenService.clearAuthToken();
		TokenService.clearCallbackBeforeExpiry();
		IdleService.unRegisterIdleResets();
		this.context.setUser(null);
	};
	const renderNotAuthOptions = (props) => {
		return (
			<ul>
				<li>
					<a href='/'>Home</a>
				</li>
				<li>
					<a href='/login'>Login</a>
				</li>
				<li>
					<a href='/registration'>Register</a>
				</li>
			</ul>
		);
	};

	const renderAuthOptions = () => {
		return (
			<ul>
				<li>
					<a href='/profile'>Profile</a>
				</li>
				<li>
					<a href='/editor/new'>Editor</a>
				</li>
				<li>
					<a href='/' onClick={() => handleLogoutClick()} to='/'>
						Logout
					</a>
				</li>
			</ul>
		);
	};

	return (
		<div className='menu-wrap'>
			<input type='checkbox' className='toggler' />
			<div className='hamburger'>
				<div />{' '}
			</div>
			<div className='menu'>
				<div>
					<div>
						{TokenService.hasAuthToken() ? (
							renderAuthOptions()
						) : (
							renderNotAuthOptions()
						)}
					</div>
				</div>
			</div>
		</div>
	);
};
export default Menu;
