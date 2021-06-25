import HerokuClient from '../HerokuClient';

export const restartDyno = (app_id_or_name, dyno_id_or_name) => {
  const herokuClient = new HerokuClient();
  return herokuClient.callDelete(`apps/${app_id_or_name}/dynos/${dyno_id_or_name}`);
};
