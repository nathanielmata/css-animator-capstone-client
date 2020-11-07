import React from "react";
import "./App.css";

import Menu from "./components/menu/Menu";
import LandingPage from "./routes/landingPage/LandingPage";
import LoginPage from "./routes/loginPage/LoginPage"
import ProfilePage from './routes/ProfilePage/ProfilePage'

class App extends React.Component {
  // handlePlay = (e) => {
  //   document.querySelector('.App-logo').classList.remove('slide-top');
  //   void document.querySelector('.App-logo').offsetWidth;

  //   document.querySelector('.App-logo').classList.add('slide-top');
  // }

  render() {
    return (
      <div className="App">
        <Menu />
        <ProfilePage></ProfilePage>
      </div>
    );
  }
}

export default App;
