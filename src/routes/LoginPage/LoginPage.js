import React, { Component } from 'react';
import './LoginPage.css';
import LoginForm from '../../components/LoginForm/LoginForm';
import Menu from '../../components/Menu/Menu';

export default class LoginPage extends Component {
	static defaultProps = {
		location: {},
		history: {
			push: () => {},
		},
	};

	handleLoginSuccess = () => {
		const { location, history } = this.props;
		const destination = (location.state || {}).from || '/editor/new';
		history.push(destination);
	};

	render() {
		return (
			<section className='LoginPage'>
				<Menu />
        <div className="login__greeting">
          <div className="login_demo-creds"><strong>demo email</strong>: demo@animate.com</div>
          <div className="login_demo-creds"><strong>demo password</strong>: Sidetrack5!</div>
        </div>
				<LoginForm onLoginSuccess={this.handleLoginSuccess} />
			</section>
		);
	}
}
