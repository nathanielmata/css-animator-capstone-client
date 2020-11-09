import React from "react";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import Header from "./components/Header/Header";
import Dashboard from "./components/Dashboard";
import NotFound from "./components/NotFound";
import RegistrationPage from "./routes/RegistrationPage/RegistrationPage";
import Menu from "./components/menu/Menu";
import LandingPage from "./routes/landingPage/LandingPage";
import LoginPage from "./routes/loginPage/LoginPage";
import ProfilePage from "./routes/ProfilePage/ProfilePage"
import "./App.css";

class App extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    console.error(error);
    return { hasError: true };
  }
  render() {
    return (
      <div className="App">
        {/* <header className='App_header'>
          <Header />
        </header> */}
        {/* <Menu/> */}
        <main id="main__container" className="main__container">
          {this.state.hasError && (
            <p className="red">There was an error! Oh no!</p>
          )}
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => (
                <PublicRoute {...props} component={LandingPage} />
              )}
            />

            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegistrationPage} />

            <Route
              exact
              path="/dashboard"
              render={(props) => (
                <PrivateRoute {...props} component={ProfilePage} />
              )}
            />
            <Route component={NotFound} />
            <Menu />
          </Switch>
        </main>
        {/* <footer>Contact details</footer> */}
      </div>
    );
  }
}

export default App;
