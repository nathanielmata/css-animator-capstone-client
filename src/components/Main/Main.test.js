import React from 'react';
import MainPage from './MainPage';
import ReactDOM from 'react-dom';

it('renders MainPage component without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MainPage />, div);
    ReactDOM.unmountComponentAtNode(div);
  });