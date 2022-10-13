import React from 'react';
import {
  Button,
  ScrollView,
  View,
} from 'react-native';
import propTypes from 'prop-types';

function DynoManagerView({ webDynos, onRestartPress }) {
  return (
    <ScrollView style={{ paddingTop: 30, paddingBottom: 30 }}>
      {
        webDynos.sort((dynoA, dynoB) => { return dynoA.name > dynoB.name; }).map(dyno => (
          <View key={dyno.name} style={{ marginBottom: 20, marginTop: 20 }}>
            <Button title={`Restart ${dyno.name}`} onPress={() => onRestartPress(dyno.name)} />
          </View>
        ))
      }
    </ScrollView>
  );
};

DynoManagerView.propTypes = {
  webDynos: propTypes.array.isRequired,
  onRestartPress: propTypes.func.isRequired,
};

export { DynoManagerView };
