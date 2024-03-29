// SPDX-License-Identifier: Unlicense
// This file is part of https://github.com/tobiasbriones/clone-all-repos

import util from 'util';
import { exec as ex } from 'child_process';
import { checkCloneDir } from './file.mjs';

const exec = util.promisify(ex);

export async function cloneAll(repos, { dir }) {
  checkCloneDir(dir);
  let clonedCount = 0;

  for (const repo of repos) {
    try {
      await clone(repo, dir);
      clonedCount++;
    }
    catch (e) {
      console.log(e);
    }
  }
  console.log(`
    Cloned ${ clonedCount } repositories into directory ${ dir }.
  `);

  if (clonedCount !== repos.length) {
    console.log(`
    Failed to clone ${ repos.length - clonedCount } repositories.
    `);
  }
}

async function clone(repo, dir) {
  const { stdout, stderr } = await exec(`git clone ${ repo.clone_url }`, {
    cwd: dir
  });

  if (stderr) {
    console.log(stderr);
    return;
  }
  console.log(`stdout: ${ stdout }`);
}
