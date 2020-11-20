import React from 'react';
import Menu from './Menu';
import ReactDOM from 'react-dom';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Menu />, div);
    ReactDOM.unmountComponentAtNode(div);
  });