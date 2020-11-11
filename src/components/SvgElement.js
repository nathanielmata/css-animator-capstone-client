import React from 'react';
import PropTypes from 'prop-types';

const SvgElement = (props) => (
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

SvgElement.propTypes = {
  classVariant: PropTypes.arrayOf(PropTypes.string)
};

export default SvgElement;