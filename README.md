# node-redcord

[![CodeFactor](https://www.codefactor.io/repository/github/sethfl/node-redcord/badge/main)](https://www.codefactor.io/repository/github/sethfl/node-redcord/overview/main)

This is a rewrite of [redcord](https://github.com/sethfl/redcord) in NodeJS - it's mainly for my own amusement and learning. However, with that said, it could be the primary version of redcord in the future as I believe the [`eris`](https://github.com/abalabahaha/eris) library is much more efficient to use from a development standpoint, but also in speed.

## Commands:

#### `-random [subreddit]`
This command, when sent into a sever with `redcord` present, triggers the bot to send a media URL from a random post on the subreddit entered with the command. The only other outputs are either a link to a comment (which is the case when the random post received does not contain a media URL), or `null` when the subreddit requested does not exist.

#### `-spam [subreddit]`
This command uses the same function as `-random` on the backend, with it being repeated 10 times, sending 10 pieces of media to the server at once from the subreddit given.

## Installation:
After installing NodeJS and it's packagaer manager `npm`, run this to install redcord:

`npm install -g redcord`

You can now run it directly from the terminal with the `redcord` command.


## How to Use

The only setup required for this is to create a Discord Bot (instructions [here](https://discordpy.readthedocs.io/en/latest/discord.html)) and then setting the Bot's token as an environmental variable called `DISCORD_TOKEN` (this is done on Linux with the command `export DISCORD_TOKEN=[BOT_TOKEN_HERE]`).

From there, just run `redcord` from the command line.

### Troubleshooting

The only problems I have really come across with this is setting the environmental variable correctly. Try to confirm that your Bot Token is set as a variable called `DISCORD_TOKEN`. If there are any issues you come across, please contact me at sethaflynn@gmail.com

## For Developers:

### Getting the Source Code
You can clone the repository using the following command:

`git clone https://github.com/sethfl/node-redcord.git`

or, you can just download a tarball/zip from the [releases](https://github.com/sethfl/node-redcord/releases) page. 

### Setup
In order to run the current codebase - as well as any modifications you make - you first need to run this command to install dependencies:

`npm install`

### Code Cleanup
Before attempting to create a pull request, please run `npm run fix`. This script will run the [standards](https://standardjs.com/) linter/formatter. I like to keep my codebases neat and compliant with standards such as these and expect contributors to do the same.

### Run the Project
You can run the project with the following command:

`npm start`

## Thanks
Here are a list of projects and developers that make node-redcord possible:

* [@abalabahaha](https://github.com/abalabahaha) for creating [`eris`](https://github.com/abalabahaha/eris), the library that powers the Discord part of `node-redcord`.
* [@maikdevries](https://github.com/maikdevries) and his [`lunar`](https://github.com/maikdevries/Lunar) bot for giving me an idea as to how I should structure the source code of the project.
* The [Pancake](https://pancake.gg/) Discord bot that introduced me to the `eris` library and inspired me to attempt writing one in NodeJS.
