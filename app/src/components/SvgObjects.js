import React from 'react';
import PropTypes from 'prop-types';

const SvgIcon = (props) => (
  <svg 
    version="1.1"
    viewBox={props.viewBox}
    aria-labelledby={props.ariaLabel ?? "empty"}
    fill="none"
    className={props.classVariant.filter(cv => cv && cv).join(" ")}
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
    viewBox="0 0 20 20"
    classVariant={[classVariant]}>
    <rect fill="#000000" width="20" height="20"/>
  </SvgIcon>
);

export {
  Square,
}