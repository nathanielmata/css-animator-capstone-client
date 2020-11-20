import React from 'react';
import RegistrationForm from './RegistrationForm';
import ReactDOM from 'react-dom';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<RegistrationForm />, div);
    ReactDOM.unmountComponentAtNode(div);
  });