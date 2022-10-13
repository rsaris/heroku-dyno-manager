import React from 'react';
import { Text, View } from 'react-native';

import { styles } from '../styles';

export const LoadingView = () => (
  <View style={styles.container}>
    <Text style={styles.text}>
      One second please... figuring out if you've done this before
    </Text>
  </View>
);
