import React from 'react';
import Main from './Main';
import ReactDOM from 'react-dom';

it('renders Main component without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Main />, div);
    ReactDOM.unmountComponentAtNode(div);
  });