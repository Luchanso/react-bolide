import React from 'react';
import PropTypes from 'prop-types';

import styles from './test.css';
import reactLogo from '../../../assets/images/react-logo.svg';

const Test = props => (
  <div className={styles.TestWrapper}>
    <h1 className={styles.Title}>{props.text}</h1>
    <img alt="react-logo" src={reactLogo} />
  </div>
);

const { string } = PropTypes;

Test.propTypes = {
  text: string.isRequired,
};

export default Test;
