// SPDX-License-Identifier: Unlicense
// This file is part of https://github.com/tobiasbriones/clone-all-repos

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
