import React from 'react';
import AnimationContainer from '../AnimationContainer/AnimationContainer';
import ReactDOM from 'react-dom';

it('renders AnimationControls component without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AnimationContainer />, div);
    ReactDOM.unmountComponentAtNode(div);
  });