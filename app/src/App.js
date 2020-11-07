import React from 'react';
import { Route, Switch } from 'react-router-dom'
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import LandingPage from "./routes/LandingPage";
import Header from "./components/Header/Header";
import LoginPage from "./routes/LoginPage";
import Dashboard from "./components/Dashboard";
import NotFound from "./components/NotFound";
import Registration from './components/RegistrationPage/RegistrationPage'
import './App.css';

class App extends React.Component {
  state = { hasError: false }



  render() {
    return (
      <div className="App">
        <Header />
        <main id="main__container" className="main__container">
          <Switch>

            <Route exact path="/" render={(props) =>
              <PublicRoute
                {...props}
                component={LandingPage} />
            } />

            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={Registration} />

            <Route exact path="/dashboard" render={(props) =>
              <PrivateRoute
                {...props}
                component={Dashboard} />
            } />
            <Route component={NotFound} />

          </Switch>
        </main>
        {/* <footer>Contact details</footer> */}
      </div>
    );
  }
}


export default App;
