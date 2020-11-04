import React, { Component } from 'react';
import AuthApiService from '../../services/auth-api-service';

export default class LoginForm extends Component {
	static defaultProps = {
		onLoginSuccess: () => {}
	};

	state = { error: null };

	/* handleSubmitBasicAuth = ev => {
        ev.preventDefault()
        const { email, password } = ev.target

       
        TokenService.saveAuthToken(
            TokenService.makeBasicAuthToken(email.value, password.value)
        )

        email.value = ''
        password.value = ''
        this.props.onLoginSuccess()
    } */
	handleSubmitJwtAuth = (ev) => {
		ev.preventDefault();
		this.setState({ error: null });
		const { email, password } = ev.target;

		AuthApiService.postLogin({
			email: email.value,
			password: password.value
		})
			.then((res) => {
				email.value = '';
				password.value = '';
				/* TokenService.saveAuthToken(res.authToken); */
				this.props.onLoginSuccess();
			})
			.catch((res) => {
				this.setState({ error: res.error });
			});
	};

	render() {
		const { error } = this.state;
		return (
			<form
                className="form__login"
				//onSubmit={this.handleSubmitBasicAuth}
				onSubmit={this.handleSubmitJwtAuth}
			>
				<div role="alert">{error && <p className="red">{error}</p>}</div>
				<div className="email">
					<label htmlFor="LoginForm__email">Email</label>
					<input required name="email" id="LoginForm__email" />
				</div>
				<div className="password">
					<label htmlFor="LoginForm__password">Password</label>
					<input required name="password" type="password" id="LoginForm__password" />
				</div>
				<button type="submit">Login</button>
			</form>
		);
	}
}
