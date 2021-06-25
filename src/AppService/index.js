import HerokuClient from '../HerokuClient';

export const getApps = async () => {
  const client = new HerokuClient();
  const response = await client.callGet('apps');
  if (response.ok) {
    return await response.json();
  }
};
