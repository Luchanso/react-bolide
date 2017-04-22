import React from 'react';
import PropTypes from 'prop-types';

const A = (props) => {
  const {
    children,
    ...options
  } = {
    props,
    rel: 'noopener noreferrer',
  };

  return (
    <a {...options}>{ children }</a>
  );
};

const { node } = PropTypes;

A.propTypes = {
  children: node,
};

A.defaultProps = {
  children: null,
};

export default A;
