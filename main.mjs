/*
 * SPDX-License-Identifier: Unlicense
 *
 * This file is part of Clone All Repos.
 *
 * This source code is licensed under the Unlicense License found in the
 * LICENSE file in the root directory of this source tree or at
 * https://opensource.org/licenses/unlicense.
 */

import https from 'https';
import { getArgs } from './validation.mjs';

const HOSTNAME = 'api.github.com';
const args = getArgs();
const username = args[0];
const path = getPath(username);
const options = {
  hostname: HOSTNAME,
  path: path,
  method: 'GET',
  headers: {
    'User-Agent': 'request',
  },
};
const req = https.request(options, handleResponse);

req.on('error', onError);
req.end();

function getPath(username) {
  return `/users/${username}/repos`;
}

function handleResponse(res) {
  const status = res.statusCode;
  let dataChunks = '';

  console.log('Status code: ', status);
  res.on('data', d => (dataChunks += d));
  res.on('end', () => onParseResponseData(JSON.parse(dataChunks)));
  res.on('error', onError);
}

function onParseResponseData(data) {
  const filterObj = obj => !obj.fork;
  const mapObj = obj => ({
    clone_url: obj.clone_url,
  });
  const repos = data.filter(filterObj).map(mapObj);

  console.log(repos);
}

function onError(err) {
  console.log(err);
}
