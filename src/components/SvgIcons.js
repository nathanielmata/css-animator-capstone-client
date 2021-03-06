import React from 'react';
import SvgElement from './SvgElement';

const CssIcon = ({classVariant}) => (
  <SvgElement
    viewBox="0 0 46 24"
    width="46"
    height="24"
    fill="#45274a"
    title="CSS"
    ariaLabel="CSS"
    classVariant={[classVariant]}>
    <polygon points="7.5,22.9 3.6,22.9 3.6,14.9 0.8,12 3.6,9.1 3.6,1.1 7.5,1.1 7.5,2.9 5.4,2.9 5.4,9.8 3.2,12 5.4,14.2 
      5.4,21.1 7.5,21.1 "/>
    <polygon points="42.4,22.9 38.5,22.9 38.5,21.1 40.6,21.1 40.6,14.2 42.8,12 40.6,9.8 40.6,2.9 38.5,2.9 38.5,1.1 
      42.4,1.1 42.4,9.1 45.2,12 42.4,14.9 "/>
    <path d="M10,7.8c0.8-0.9,1.9-1.3,3.2-1.3c1.8,0,3,0.6,3.8,1.7c0.4,0.7,0.7,1.3,0.7,2h-2.2c-0.1-0.5-0.3-0.9-0.5-1.1
      c-0.4-0.5-1-0.7-1.7-0.7c-0.8,0-1.4,0.3-1.9,1c-0.5,0.6-0.7,1.6-0.7,2.7s0.2,2.1,0.7,2.7c0.5,0.6,1.1,0.9,1.8,0.9
      c0.8,0,1.3-0.3,1.7-0.8c0.2-0.3,0.4-0.7,0.5-1.2h2.2c-0.2,1.1-0.7,2.1-1.4,2.8c-0.8,0.7-1.8,1.1-3,1.1c-1.5,0-2.7-0.5-3.5-1.5
      c-0.9-1-1.3-2.3-1.3-4C8.5,10.3,9,8.8,10,7.8z"/>
    <path d="M21.1,14c0.1,0.5,0.2,0.8,0.4,1.1c0.4,0.4,1,0.7,1.9,0.7c0.5,0,1-0.1,1.3-0.2c0.6-0.2,0.9-0.6,0.9-1.2
      c0-0.3-0.2-0.6-0.5-0.8c-0.3-0.2-0.8-0.4-1.5-0.5l-1.1-0.3c-1.1-0.2-1.9-0.5-2.3-0.8c-0.7-0.5-1.1-1.2-1.1-2.3c0-0.9,0.3-1.7,1-2.4
      c0.7-0.6,1.7-0.9,3.1-0.9c1.1,0,2.1,0.3,2.9,0.9c0.8,0.6,1.2,1.4,1.2,2.6h-2.1c0-0.6-0.3-1.1-0.8-1.4c-0.4-0.2-0.8-0.3-1.3-0.3
      c-0.6,0-1,0.1-1.4,0.3c-0.3,0.2-0.5,0.5-0.5,1c0,0.4,0.2,0.7,0.5,0.8c0.2,0.1,0.7,0.3,1.4,0.4l1.8,0.4c0.8,0.2,1.4,0.4,1.8,0.8
      c0.6,0.5,0.9,1.2,0.9,2.2c0,1-0.4,1.8-1.1,2.4c-0.7,0.6-1.8,1-3.2,1c-1.4,0-2.5-0.3-3.3-0.9C19.4,16,19,15.1,19,14H21.1z"/>
    <path d="M30.9,14c0.1,0.5,0.2,0.8,0.4,1.1c0.4,0.4,1,0.7,1.9,0.7c0.5,0,1-0.1,1.3-0.2c0.6-0.2,0.9-0.6,0.9-1.2
      c0-0.3-0.2-0.6-0.5-0.8c-0.3-0.2-0.8-0.4-1.5-0.5l-1.1-0.3c-1.1-0.2-1.9-0.5-2.3-0.8c-0.7-0.5-1.1-1.2-1.1-2.3c0-0.9,0.3-1.7,1-2.4
      s1.7-0.9,3.1-0.9c1.1,0,2.1,0.3,2.9,0.9c0.8,0.6,1.2,1.4,1.2,2.6H35c0-0.6-0.3-1.1-0.8-1.4c-0.4-0.2-0.8-0.3-1.3-0.3
      c-0.6,0-1,0.1-1.4,0.3c-0.3,0.2-0.5,0.5-0.5,1c0,0.4,0.2,0.7,0.5,0.8c0.2,0.1,0.7,0.3,1.4,0.4l1.8,0.4c0.8,0.2,1.4,0.4,1.8,0.8
      c0.6,0.5,0.9,1.2,0.9,2.2c0,1-0.4,1.8-1.1,2.4c-0.7,0.6-1.8,1-3.2,1c-1.4,0-2.5-0.3-3.3-0.9c-0.8-0.6-1.2-1.5-1.2-2.6H30.9z"/>

  </SvgElement>
);

const CloseIcon = ({classVariant}) => (
  <SvgElement 
    viewBox="0 0 20 20"
    width="20"
    height="20"
    fill="#fdb06a "
    title="close"
    ariaLabel="close"
    classVariant={[classVariant]}>
    <line x1="2" x2="18" y1="2" y2="18" stroke="#fdb06a" strokeWidth="5" />
    <line x1="18" x2="2" y1="2" y2="18" stroke="#fdb06a" strokeWidth="5" />
  </SvgElement>
);

const svgIcons = {
  css: {icon: CssIcon},
  close: {icon: CloseIcon}
}

export default svgIcons;