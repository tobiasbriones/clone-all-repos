/*
 * SPDX-License-Identifier: Unlicense
 *
 * This file is part of Clone All Repos.
 *
 * This source code is licensed under the Unlicense License found in the
 * LICENSE file in the root directory of this source tree or at
 * https://opensource.org/licenses/unlicense.
 */

export function getArgs() {
  const args = process.argv.slice(2);

  checkArgs(args);
  return args;
}

function checkArgs(args) {
  if (!args[0]) {
    const msg = `
      Check the documentation for usage:
      https://github.com/tobiasbriones/clone-all-repos#readme
    `;

    console.log(msg);
    process.exit(1);
  }
}
