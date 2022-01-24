import React from 'react';

import {
  Button,
  View,
} from 'react-native';

import { getApps } from '../AppService';
import { restartDyno } from '../DynoService';

const HEROKU_APP = 'HEROKU APP';

const listApps = async () => {
  const apps = await getApps();
  console.log(apps[0]);
};

const restartWebDyno = (dynoName) => () => {
  restartDyno(
    HEROKU_APP,
    dynoName,
  );
};

const dynoIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const DynoManager = () => {
  return (
    <View>
      {
        dynoIds.map(id => (
          <View key={id} style={{ marginBottom: 20, marginTop: 20 }}>
            <Button
              title={`Restart web.${id}`}
              onPress={restartWebDyno(`web.${id}`)}
            />
          </View>
        ))
      }
    </View>
  );
};

export default DynoManager;
