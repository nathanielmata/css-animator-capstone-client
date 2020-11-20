import React from 'react';
import AnimationContainer from './AnimationContainer';
import ReactDOM from 'react-dom';

it('renders AnimationContainer component without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AnimationContainer />, div);
    ReactDOM.unmountComponentAtNode(div);
  });