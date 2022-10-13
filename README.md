# Clone All Repos

Command line tool to clone all user GitHub repositories.

This program clones all public non-forked user's GitHub repositories.

## Usage

Run

`node main.mjs { username }`

Where:

- username: GitHub username.

The program will clone the repositories into the `clone` directory. If
the `clone` directory does not exist then it is created. If a project is
already into the `clone` directory then it is skipped and not cloned.

### License

This project is licensed under the [Unlicense License](LICENSE).
