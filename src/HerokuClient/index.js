const HEROKU_API_BASE_URL = 'https://api.heroku.com';

const BEARER_TOKEN = 'TOKEN';

export default class HerokuClient {
  constructor() {
    this._defaultHeaders = {
      Accept: 'application/vnd.heroku+json; version=3',
      Authorization: `Bearer ${BEARER_TOKEN}`,
      'Content-Type': 'application/json',
    };
  }

  callDelete = async path => {
    const response = await fetch(
      `${HEROKU_API_BASE_URL}/${path}`,
      {
        headers: this._defaultHeaders,
        method: 'DELETE',
      },
    );
    console.log(`${response.status}: ${response.statusText}`);
    return response;
  };

  callGet = async path => {
    const response = await fetch(
      `${HEROKU_API_BASE_URL}/${path}`,
      {
        headers: this._defaultHeaders,
        method: 'GET',
      },
    );
    console.log(`${response.status}: ${response.statusText}`);
    return response;
  }
}
