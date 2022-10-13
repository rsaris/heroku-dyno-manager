import React, {
  useCallback,
  useEffect,
  useState,
 } from 'react';

import { AuthorizeView } from './src/AuthorizeView';
import { DynoManagerView } from './src/DynoManagerView';
import { LoadingView } from './src/LoadingView';

import { loadAuthToken, storeAuthToken } from './src/AuthorizationService';
import { getWebDynos, restartDyno } from './src/DynoService';
import HerokuClient, { UNAUTHORIZED_RESPONSE } from './src/HerokuClient';

import { HEROKU_APP_NAME } from './src/config';

const App = () => {
  const [authToken, setAuthToken] = useState();
  const [initialized, setInitialized] = useState(false);
  const [webDynos, setWebDynos] = useState([]);

  const resetAuthToken = useCallback(async () => {
    await storeAuthToken('');
    setAuthToken('');
  }, []);

  useEffect(() => {
    async function initialize() {
      const loadedAuthToken = await loadAuthToken();
      setAuthToken(loadedAuthToken);
      setInitialized(true);
    }

    initialize();
  }, []);

  useEffect(() => {
    async function loadDynos() {
      if (!authToken) { return; }

      const herokuClient = new HerokuClient(authToken);
      const response = await getWebDynos(herokuClient, HEROKU_APP_NAME);
      if (response === UNAUTHORIZED_RESPONSE) {
        resetAuthToken();
      } else {
        setWebDynos(response);
      }
    }

    loadDynos();
  }, [authToken, resetAuthToken]);

  const handleAuthorize = useCallback(async (inputAuthToken) => {
    await storeAuthToken(inputAuthToken);
    setAuthToken(inputAuthToken);
  }, []);

  const handleRestartPress = useCallback(async (dynoName) => {
    const herokuClient = new HerokuClient(authToken);
    const response = await restartDyno(
      herokuClient,
      HEROKU_APP_NAME,
      dynoName,
    );
    if (response === UNAUTHORIZED_RESPONSE) {
      resetAuthToken();
    }
  }, [authToken, resetAuthToken]);

  if (!initialized) {
    return <LoadingView />;
  }

  if (authToken) {
    return <DynoManagerView webDynos={webDynos} onRestartPress={handleRestartPress} />;
  }

  return <AuthorizeView onAuthorize={handleAuthorize} />;
};

export default App;
