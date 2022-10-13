# Clone All Repos

[![GitHub Repository](https://img.shields.io/static/v1?label=GITHUB&message=REPOSITORY&labelColor=555&color=0277bd&style=for-the-badge&logo=GITHUB)](https://github.com/tobiasbriones/clone-all-repos)

[![GitHub Project License](https://img.shields.io/github/license/tobiasbriones/clone-all-repos.svg?style=flat-square)](https://github.com/tobiasbriones/clone-all-repos/blob/main/LICENSE)

Command line tool to clone all user GitHub public repositories.

This script clones all public non-forked user's GitHub repositories.

## Usage

Run

`node main.mjs { username }`

Where:

- `username`: GitHub username to clone their public repos.

The program will clone the repositories into the `clone` directory. If
the `clone` directory does not exist then it is created. If a project is
already into the `clone` directory then it is skipped and not cloned.

### Caveats

There's a limit (`per_page` param) in the API request which is set to 1,000
by default, so it must be enough for any user.

### License

This project is licensed under the [Unlicense License](LICENSE).
