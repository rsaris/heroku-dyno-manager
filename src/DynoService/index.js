import { UNAUTHORIZED_RESPONSE } from "../HerokuClient";

export const getWebDynos = async (herokuClient, appIdOrName) => {
  const response = await herokuClient.callGet(`apps/${appIdOrName}/dynos`);
  if (response === UNAUTHORIZED_RESPONSE) { return UNAUTHORIZED_RESPONSE; };

  if (response) {
    return response.filter(dyno => dyno.type === 'web');
  }

  return [];
};

export const restartDyno = (herokuClient, appIdOrName, dynoIdOrName) => {
  return herokuClient.callDelete(
    `apps/${appIdOrName}/dynos/${dynoIdOrName}`,
  );
};
