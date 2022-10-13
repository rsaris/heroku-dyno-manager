import HerokuClient from '../HerokuClient';

export const getWebDynos = async app_id_or_name => {
  const herokuClient = new HerokuClient();
  const response = await herokuClient.callGet(`apps/${app_id_or_name}/dynos`);
  if (response) {
    return response.filter(dyno => dyno.type === 'web');
  }

  return [];
};

export const restartDyno = (app_id_or_name, dyno_id_or_name) => {
  const herokuClient = new HerokuClient();
  return herokuClient.callDelete(
    `apps/${app_id_or_name}/dynos/${dyno_id_or_name}`,
  );
};
