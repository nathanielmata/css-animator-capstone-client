import React from 'react';
import PropTypes from 'prop-types';

const SvgIcon = (props) => (
  <svg 
    version="1.1"
    width={props.width}
    height={props.height}
    fill={props.fill}
    aria-labelledby={props.ariaLabel ?? ""}
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
    width="100"
    height="100"
    fill="#847A59"
    title="square"
    ariaLabel="square"
    classVariant={[classVariant]}>
      <rect width="100%" height="100%"/>
  </SvgIcon>
);

export {
  Square,
}