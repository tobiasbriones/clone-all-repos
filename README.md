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

There's a limit (`per_page` param) in the API request which is set to 30 repos
by default, see
[Repositores \| GitHub Docs](https://docs.github.com/en/rest/repos/repos).

The maximum value can be up to 100 repos per page so the script default
config is set to that value to allow cloning all repos provided they're less
than 100 (most cases).

#### Fun Facts

I made this script a year ago and noticed it didn't clone all my repos back in
the time since they were always about ~45 and the default limit is 30. I've had
to consume the GitHub API other times, and so I had in mind to fix this issue 
in this project too.

I don't care about forked repos here because they're not my intellectual 
property, so that's why I filter them out.

This script might be useful for some kind of backup to all your 
public repositories.

I made this project to use the Unlicense license for first time since I'm 
into open source and have a lot of intellectual property knowledge that I've 
acquired over my experience as a software engineer. Notice that IP skills are 
super important to be an engineer.

### License

This project is licensed under the [Unlicense License](LICENSE).
