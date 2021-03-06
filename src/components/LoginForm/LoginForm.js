import React, { Component } from 'react';
import AuthApiService from '../../services/auth-api-service';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-service';
import UserContext from '../../context/UserContext';
import './LoginForm.css';

export default class LoginForm extends Component {
	static contextType = UserContext;

	static defaultProps = {
		onLoginSuccess: () => {},
	};

	state = { error: null };

	handleSubmitBasicAuth = (ev) => {
		ev.preventDefault();
		const { email, password } = ev.target;

		TokenService.saveAuthToken(
			TokenService.makeBasicAuthToken(email.value, password.value)
		);

		email.value = '';
		password.value = '';
		this.props.onLoginSuccess();
	};
	handleSubmitJwtAuth = (ev) => {
		ev.preventDefault();
		this.setState({ error: null });
		const { email, password } = ev.target;

		AuthApiService.postLogin({
			email: email.value,
			password: password.value,
		})
			.then((res) => {
				email.value = '';
				password.value = '';
				this.context.setUser(res.authToken);
				const user = TokenService.readJwtToken();
        localStorage.user_name = user.user_name;
				this.context.setUserName(user.user_name);
				this.context.setUserFullName(user.full_name);
				this.props.onLoginSuccess();
			})
			.catch((res) => {
				this.setState({ error: res.error });
			});
	};

	render() {
		const { error } = this.state;
		return (
			<div>
				<h1> Login</h1>
				<form
					className='form__login'
					onSubmit={this.handleSubmitJwtAuth}>
					<div role='alert'>{error && <p className='login_error'>{error}</p>}</div>
					<div className='email'>
						<label className='login-input-label' htmlFor='LoginForm__email'>
							Email
						</label>
						<br />
						<input
							className='user-input'
							required
							name='email'
							id='LoginForm__email'
              autoComplete="email"
						/>
					</div>
					<div className='password'>
						<label className='login-input-label' htmlFor='LoginForm__password'>
							Password
						</label>
						<br />
						<input
							type='password'
							id='LoginForm__password'
							className='user-input'
							name='password'
              autoComplete="current-password"
							required
						/>
					</div>
					<button className='btn' type='submit'>
						Login
					</button>
				</form>
				<div className='link-to-register'>
					<p>Don't have an account yet?</p>
					<span>
						<Link to='/registration'>Register</Link>
					</span>
				</div>
			</div>
		);
	}
}
