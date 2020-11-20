import React from 'react';
import LoginForm from './LoginForm';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";

it('renders LoginForm component without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter>
      <LoginForm />
    </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });