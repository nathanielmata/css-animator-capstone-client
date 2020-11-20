import React from 'react';
import Logo from './Logo';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

it('renders Logo component without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><Logo /></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });