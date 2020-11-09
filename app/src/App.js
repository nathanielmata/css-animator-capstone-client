import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import Header from './components/Header/Header';
import Dashboard from './components/Dashboard';
import NotFound from './components/NotFound';
import RegistrationPage from './routes/RegistrationPage/RegistrationPage';
import Menu from './components/menu/Menu';
import LandingPage from './routes/LandingPage/LandingPage';
import LoginPage from './routes/LoginPage/LoginPage';
import ProfilePage from './routes/ProfilePage/ProfilePage';
import UserContext from './context/UserContext';
import TokenService from './services/token-service';
import './App.css';

class App extends React.Component {
	static contextType = UserContext;

	state = {
		hasError: false,
		loggedIn: false,
	};

	static getDerivedStateFromError(error) {
		console.error(error);
		return { hasError: true };
	}
	componentDidMount() {
		const jwt = TokenService.getAuthToken();
		if (jwt) {
			let base64Url = jwt.split('.')[1];
			let decodedValue = JSON.parse(window.atob(base64Url));
			let user_name = decodedValue.sub;
			let user_email = decodedValue.sub;

			this.context.setUserName(user_name);
			this.context.setUserId(decodedValue.user_id);
			this.context.setUserEmail(user_email);
			this.context.setUser(user_name, decodedValue.user_id, user_email);
		}
	}
	render() {
		return (
			<div className='App'>
				<header className='App_header'>
					<Header />
				</header>
				{/* <Menu/> */}
				<main id='main__container' className='main__container'>
					{this.state.hasError && (
						<p className='red'>There was an error! Oh no!</p>
					)}
					<Switch>
						<PublicRoute exact path={'/login'} component={LoginPage} />
						<PublicRoute
							exact
							path={'/register'}
							component={RegistrationPage}
						/>
						<Route exact path={'/'} component={LandingPage} />
						{/* <Route
              exact
              path="/"
              render={(props) => (
                <PublicRoute {...props} component={LandingPage} />
              )} /> */}

						<Route
							exact
							path='/dashboard'
							render={(props) => (
								<PrivateRoute {...props} component={ProfilePage} />
							)}
						/>
            {/* <PrivateRoute
							exact
							path={'/:user_name/animationss'}
							component={UserAnimationsPage}
						/>
						<PrivateRoute
							path={'/:user_name/animations/:animation_id'}
							component={EditorPage}
            /> */}

						<Route component={NotFound} />
						<Menu />
					</Switch>
				</main>
        {/*  <footer>&#169; animation-station 2020</footer>  */}
			</div>
		);
	}
}

export default App;
