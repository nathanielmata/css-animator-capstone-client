import React from 'react';
import ContactPage from './ContactPage';
import ReactDOM from 'react-dom';

it('renders ContactPage component without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ContactPage />, div);
    ReactDOM.unmountComponentAtNode(div);
  });