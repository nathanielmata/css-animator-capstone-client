import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

  handlePlay = (e) => {
    document.querySelector('.App-logo').classList.remove('slide-top');
    void document.querySelector('.App-logo').offsetWidth;

    document.querySelector('.App-logo').classList.add('slide-top');
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <button onClick={(e) => this.handlePlay(e)}>play</button>
  
          <img src={logo} className="App-logo slide-top" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          
        </header>
      </div>
    );
  }
}

export default App;
