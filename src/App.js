import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import Header from './components/Header/Header';
import Dashboard from './components/Dashboard';
import NotFound from './components/NotFound';
import RegistrationPage from './routes/RegistrationPage/RegistrationPage';
import Menu from './components/Menu/Menu';
import LandingPage from './routes/LandingPage/LandingPage';
import LoginPage from './routes/LoginPage/LoginPage';
import ProfilePage from './routes/ProfilePage/ProfilePage';
import AnimationControls from './components/AnimationControls/AnimationControls'
import UserContext, { UserProvider } from './context/UserContext';
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

	render() {
		return (
			<UserProvider>
				<div className='App'>
					<header className='App_header'>
						<Header />
					</header>
					<main id='main__container' className='main__container'>
						{this.state.hasError && (
							<p className='red'>There was an error! Oh no!</p>
						)}
						<Switch>
						<Route exact path={'/'} component={LandingPage} /> 
							<PublicRoute exact path={'/login'} component={LoginPage} />
							<PublicRoute
								exact
								path={'/register'}
								component={RegistrationPage}
							/>
							 <Route
              exact
              path="/dashboard"
              render={(props) => (
                <PrivateRoute {...props} component={Dashboard} />
              )} /> 

							<Route
								exact
								path='/editor'
								render={(props) => (
									<PrivateRoute {...props} component={AnimationControls} />
								)}
							/>
							<Route
								exact
								path='/profile'
								render={(props) => (
									<PrivateRoute {...props} component={ProfilePage} />
								)}
							/>
							{/* 	<Route
								exact
								path='/editor/new'
								render={(props) => (
									<PrivateRoute {...props} component={AnimationControls} />
								)}
							/>
							<Route
								exact
								path='/editor/:id'
								render={(props) => (
									<PrivateRoute {...props} component={AnimationControls} />
								)}
								/> */}
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
			</UserProvider>
		);
	}
}

export default App;
