import React from 'react';
import AnimationContainer from './AnimationContainer';
import { AnimationKeyframes } from '../AnimationControls/AnimationControls.keyframes';
import ReactDOM from 'react-dom';

it('renders AnimationContainer component without crashing', () => {
    const div = document.createElement('div');
    const animation = {
      title: 'Untitled',
      delay: '100',
      duration: '1000',
      iteration: '1',
      direction: 'normal',
      timing: 'ease',
      fill: 'forwards',
      keyframe: { 'rotate-center': AnimationKeyframes['rotate-center'] },
      target: 'hotdog',
    };

    ReactDOM.render(<AnimationContainer animation={animation} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });