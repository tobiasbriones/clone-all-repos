/*
 * SPDX-License-Identifier: Unlicense
 *
 * This file is part of Clone All Repos.
 *
 * This source code is licensed under the Unlicense License found in the
 * LICENSE file in the root directory of this source tree or at
 * https://opensource.org/licenses/unlicense.
 */

import fs from 'fs';
import path from 'path';

export function checkCloneDir(relDir) {
  const absPath = path.resolve(relDir);

  mkdirIfNotExists(absPath);
}

function mkdirIfNotExists(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
}
