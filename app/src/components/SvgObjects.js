import React from 'react';
import PropTypes from 'prop-types';

const SvgIcon = (props) => (
  <svg 
    version="1.1"
    viewBox={props.viewBox}
    width={props.width}
    height={props.height}
    fill={props.fill}
    aria-labelledby={props.ariaLabel ?? ""}
    className={
      props.classVariant[0]
      ? props.classVariant.filter(cv => cv && cv).join(" ").concat(" svg__obj")
      : "svg__obj"
      }
    role="img"
  >
    <title id={props.ariaLabel}>{props.title}</title>
    {props.children}
  </svg>
);

SvgIcon.propTypes = {
  classVariant: PropTypes.arrayOf(PropTypes.string)
};

const Square = ({classVariant}) => (
  <SvgIcon 
    viewBox="0 0 100 100"
    width="240"
    height="240"
    fill="#847A59"
    title="square"
    ariaLabel="square"
    classVariant={[classVariant]}>
      <rect width="100%" height="100%"/>
  </SvgIcon>
);

const HotDog = ({classVariant}) => (
  <SvgIcon 
    viewBox="0 0 400 128.8"
    width="240"
    height="77.3"
    fill="none"
    title="hot dog"
    ariaLabel="hot dog"
    classVariant={[classVariant]}>
    <path fill="#D8BD65" d="M197.1,13.7C127.3,12.7,84.7,4.9,58.6,1C40.7-1.7,15,12,16,33.7c0.4,9.9,3.8,24.4,17.1,34.7
      c19.9,16.8,148.3,19.5,164.2,19c15.9-0.5,145.4-5.1,161-14.4C400.1,49.4,379.8-6,344.6,0.5C313.8,6.3,266.8,14.7,197.1,13.7z"/>
    <path fill="#A70A28" d="M198.1,30.3c-76.3-1-125.6-8.8-154.2-12.7C24.3,14.9-1,28.6,0,50.3C0.5,60.2,4.2,74.7,18.7,85
      c21.8,16.8,162.2,19.5,179.6,19c17.4-0.5,159-5.1,176.1-14.4c45.7-23.6,23.5-79.1-15-72.5C325.7,22.9,274.4,31.2,198.1,30.3z"/>
    <path fill="#D8BD65" d="M197.3,62.2c-65.9-0.9-110.7-9.4-135.3-13C45,46.7,25.4,59.3,26.3,79.3c0.4,9.2,3.6,22.5,16.1,32
      c18.8,15.5,140,17.9,155.1,17.5c15-0.4,136.2-5.8,151-14.3c39.4-21.7,20.4-71-8.7-66.1C310.6,53.2,263.1,63.1,197.3,62.2z"/>
    <path fill="#F1E737" d="M178.1,58c-10.1,0-18.7-6.5-27.7-13.4c-9.9-7.5-20.1-15.3-33.3-15.3c-25.4,0-41,7.8-41.1,7.9
      c-2,1-4.5,0.2-5.6-1.8c-1-2-0.3-4.5,1.8-5.6c0.7-0.4,17.3-8.8,44.9-8.8c16,0,27.8,9,38.3,17c8.2,6.3,15.3,11.7,22.7,11.7
      c8.1,0,16.6-5.7,25.7-11.7c10.3-6.9,20.9-14,32.9-14c12.5,0,22.4,7.2,31.2,13.6c6.9,5,13.4,9.7,19.6,9.7c11.1,0,23.1-18.7,26.8-25.8
      c1-2,3.5-2.8,5.6-1.8c2,1,2.8,3.5,1.8,5.6c-1.6,3.1-16,30.3-34.2,30.3c-8.9,0-16.5-5.5-24.5-11.3c-8.1-5.9-16.5-12-26.3-12
      c-9.4,0-19,6.4-28.3,12.6C198.7,51.3,188.7,58,178.1,58z"/>
  </SvgIcon>
);

const svgObjs = {
  square: {obj: Square, bg: "#fdb06a"},
  hotdog: {obj: HotDog, bg: "#d752a8"}
}

export default svgObjs;