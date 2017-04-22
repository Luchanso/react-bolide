import React from 'react';
import PropTypes from 'prop-types';

import reactLogo from 'images/react-logo.svg';
import styles from './test.css';

const Test = props => (
  <div className={styles.TestWrapper}>
    <h1 className={styles.Title}>{props.text}</h1>
    <img alt="react-logo" className={styles.Image} src={reactLogo} />
  </div>
);

const { string } = PropTypes;

Test.propTypes = {
  text: string.isRequired,
};

export default Test;
