import React, { useState } from 'react';
import {
  Linking,
  Text,
  TextInput,
  View,
} from 'react-native';
import propTypes from 'prop-types';

import { Button } from '../Button';

import { styles } from '../styles';

const HEROKU_AUTH_URL = 'https://dashboard.heroku.com/account/applications';

const AuthorizeView = ({ onAuthorize }) => {
  const [authToken, setAuthToken] = useState();
  const [loading, setLoading] = useState(false);

  async function handleButtonPress() {
    setLoading(true);
    await onAuthorize(authToken);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Please provide your authorization token.
        You can create one of these
        {' '}
        <Text
          style={styles.link}
          onPress={() => { Linking.openURL(HEROKU_AUTH_URL); }}
        >
          here
        </Text>
        . Click "Create authorization", enter a name, leave expiration empty,
        and copy the token value.
      </Text>
      <TextInput disabled={loading} style={styles.textInput} value={authToken} onChangeText={setAuthToken} />
      <View style={styles.buttonContainer}>
        <Button disabled={loading} title="Authorize me" onPress={handleButtonPress} />
      </View>
    </View>
  );
};

AuthorizeView.propTypes = {
  onAuthorize: propTypes.func.isRequired,
};

export { AuthorizeView };
