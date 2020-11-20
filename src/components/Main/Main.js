import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import TokenService from '../../services/token-service';
import './Main.css';
export default class Main extends Component {
	state = {
		redirect: false,
		where: '',
	};

	//redirects the page clicked on
	switchPage = (link) => {
		if (link === 'login' && TokenService.hasAuthToken()) {
			link = 'profile';
		}

		this.setState({
			redirect: !this.state.redirect,
			where: link,
		});

		return;
	};

	render() {
		const { redirect, where } = this.state;

		//redirects the page to login
		if (redirect) {
			return <Redirect to={`/${where}`} />;
		}

		return (
			<div className="banner__outer">
				<section className='banner'>
					<div className='Overlay'>
						<h2>Animation Station</h2>
						<p>Create and save CSS animations right in your browser</p>
						<p>Let's be creative today...</p>
						<button onClick={() => this.switchPage('login')}>
							Get started
						</button>
					</div>
				</section>

				<footer>&#169; Animation Station {new Date().getFullYear()}</footer>
			</div>
		);
	}
}
