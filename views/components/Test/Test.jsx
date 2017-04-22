import React from 'react';
import PropTypes from 'prop-types';

import styles from './test.css';

const Test = props => (
  <div className={styles.TestWrapper}>
    <h1 className={styles.Title}>{props.text}</h1>
  </div>
);

const { string } = PropTypes;

Test.propTypes = {
  text: string.isRequired,
};

export default Test;
