import React from 'react';
import AnimationContainer from './AnimationContainer';
import ReactDOM from 'react-dom';

it('renders AnimationContainer component without crashing', () => {
    const div = document.createElement('div');
    const animation = {id: 1, target : 'square' }
    ReactDOM.render(<AnimationContainer animation={animation} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });