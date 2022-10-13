// SPDX-License-Identifier: Unlicense
// This file is part of https://github.com/tobiasbriones/clone-all-repos

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
