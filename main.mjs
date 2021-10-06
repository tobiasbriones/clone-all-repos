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
import { cloneAll } from './clone.mjs';
import { getArgs } from './validation.mjs';

const CLONE_DIR = 'clone';
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
  res.on('end', async () => await onParseResponseData(JSON.parse(dataChunks)));
  res.on('error', onError);
}

async function onParseResponseData(data) {
  const filterObj = obj => !obj.fork;
  const mapObj = obj => ({
    clone_url: obj.clone_url,
  });
  const repos = data.filter(filterObj).map(mapObj);

  await cloneAll(repos, { dir: CLONE_DIR });
}

function onError(err) {
  console.log(err);
}
