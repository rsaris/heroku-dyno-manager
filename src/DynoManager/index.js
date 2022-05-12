import React, { useEffect, useState } from 'react';

import {
  Button,
  ScrollView,
  View,
} from 'react-native';

import { getApps } from '../AppService';
import { getWebDynos, restartDyno } from '../DynoService';

import { HEROKU_APP_NAME } from '../config';

const listApps = async () => {
  const apps = await getApps();
  console.log(apps[0]);
};

const restartWebDyno = (dynoName) => () => {
  restartDyno(
    HEROKU_APP_NAME,
    dynoName,
  );
};

export default function DynoManager() {
  const [webDynos, setWebDynos] = useState([]);
  useEffect(async () => {
    setWebDynos(await getWebDynos(HEROKU_APP_NAME));
  }, []);

  return (
    <ScrollView style={{ paddingTop: 30, paddingBottom: 30 }}>
      {
        webDynos.sort((dynoA, dynoB) => { return dynoA.name > dynoB.name; }).map(dyno => (
          <View key={dyno.name} style={{ marginBottom: 20, marginTop: 20 }}>
            <Button
              title={`Restart ${dyno.name}`}
              onPress={restartWebDyno(dyno.name)}
            />
          </View>
        ))
      }
    </ScrollView>
  );
};
