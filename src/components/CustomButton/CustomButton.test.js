import React from 'react';
import CustomButton from './CustomButton';
import ReactDOM from 'react-dom';

it('renders CustomButton component without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CustomButton />, div);
    ReactDOM.unmountComponentAtNode(div);
  });