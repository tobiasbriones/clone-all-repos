# Clone All Repos

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
