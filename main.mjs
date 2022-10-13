// SPDX-License-Identifier: Unlicense
// This file is part of https://github.com/tobiasbriones/clone-all-repos

import https from 'https';
import { cloneAll } from './clone.mjs';
import { getArgs } from './validation.mjs';

const CLONE_DIR = 'clone';
const HOSTNAME = 'api.github.com';
const DEF_CONFIG = { limit: 1000 };
const args = getArgs();
const username = args[0];
const path = requestPath(username).value();
const options = {
  hostname: HOSTNAME,
  path: path,
  method: 'GET',
  headers: {
    'User-Agent': 'request'
  }
};
const req = https.request(options, handleResponse);

req.on('error', onError);
req.end();

function requestPath(username) {
  const path = `/users/${ username }/repos`;
  return {
    value(params) {
      const { limit } = params || DEF_CONFIG;
      return path + `?per_page=${ limit }`;
    }
  };
}

function handleResponse(res) {
  const status = res.statusCode;

  console.log('Status code: ', status);

  if (status === 200) {
    handleResponseOk(res)
  }
  else if (status === 404) {
    console.log('User not found');
  }
  else {
    console.log('Could not proceed');
  }
}

function handleResponseOk(res) {
  let dataChunks = '';
  res.on('data', d => (dataChunks += d));
  res.on('end', async () => await onParseResponseData(JSON.parse(dataChunks)));
  res.on('error', onError);
}

async function onParseResponseData(data) {
  const filterObj = obj => !obj.fork;
  const mapObj = obj => ({
    clone_url: obj.clone_url
  });
  const repos = data.filter(filterObj).map(mapObj);

  await cloneAll(repos, { dir: CLONE_DIR });
}

function onError(err) {
  console.log(err);
}
