import React from 'react';
import {
  Text,
  TouchableOpacity,
} from 'react-native';
import propTypes from 'prop-types';

import { styles } from '../styles';

const Button = ({ title, ...props }) => (
  <TouchableOpacity
    style={styles.button}
    {...props}
  >
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);

Button.propTypes = {
  title: propTypes.string.isRequired,
};

export { Button };
