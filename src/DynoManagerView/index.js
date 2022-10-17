import React from 'react';
import {
  ScrollView,
  View,
} from 'react-native';
import propTypes from 'prop-types';

import { Button } from '../Button';

import { styles } from '../styles';

const  DynoManagerView = ({ webDynos, onRestartPress }) => (
  <ScrollView contentContainerStyle={styles.scrollContainer}>
    {
      webDynos.sort((dynoA, dynoB) => { return dynoA.name > dynoB.name; }).map(dyno => (
        <View key={dyno.name} style={styles.buttonContainer}>
          <Button
            title={`Restart ${dyno.name}`}
            onPress={() => onRestartPress(dyno.name)}
          />
        </View>
      ))
    }
  </ScrollView>
);

DynoManagerView.propTypes = {
  webDynos: propTypes.array.isRequired,
  onRestartPress: propTypes.func.isRequired,
};

export { DynoManagerView };
