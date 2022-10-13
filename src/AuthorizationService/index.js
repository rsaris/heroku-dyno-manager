import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY_AUTH_TOKEN = 'authToken';

async function loadAuthToken() {
  return await AsyncStorage.getItem(STORAGE_KEY_AUTH_TOKEN);
}

async function storeAuthToken(authToken) {
  return await AsyncStorage.setItem(STORAGE_KEY_AUTH_TOKEN, authToken);
}

export {
  loadAuthToken,
  storeAuthToken,
};
