const HEROKU_API_BASE_URL = 'https://api.heroku.com';

export const UNAUTHORIZED_RESPONSE = Symbol();

function logResponse(response) {
  console.log(`RESPONSE: Status -- ${response.status}`);
}

export default class HerokuClient {
  constructor(authToken) {
    this._defaultHeaders = {
      Accept: 'application/vnd.heroku+json; version=3',
      Authorization: `Bearer ${authToken}`,
      'Content-Type': 'application/json',
    };
  }

  callDelete = async path => {
    const response = await fetch(`${HEROKU_API_BASE_URL}/${path}`, {
      headers: this._defaultHeaders,
      method: 'DELETE',
    });
    logResponse(response);

    if (response.status === 401) { return UNAUTHORIZED_RESPONSE; }
    return response;
  };

  callGet = async path => {
    const response = await fetch(`${HEROKU_API_BASE_URL}/${path}`, {
      headers: this._defaultHeaders,
      method: 'GET',
    });
    logResponse(response);

    if (response.status === 401) { return UNAUTHORIZED_RESPONSE; }
    if (!response.ok) { return null; }

    return await response.json();
  };
}
