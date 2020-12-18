#!/usr/bin/env node

const redcord = require('../lib/redcord')
const chalk = require('chalk')
const Eris = require('eris')

// setup text colors for different statuses

const ok = chalk.bold.cyan

const bad = chalk.bold.red

const link = chalk.underline.green

// get discord bot token from environmental variable

const token = process.env.DISCORD_TOKEN

if (token == null) {
  console.log(bad('no discord token found as an environmental variable. please set it as DISCORD_TOKEN.'))
}

// this is the prefix used for commands. you can replace it with any non-alphanumeric character.

const prefix = '-'

const bot = new Eris(token)

let i = 0

bot.on('ready', async () => {
  console.log(ok('connected to discord!'))
})

bot.on('messageCreate', async (msg) => {
  // random command
  if (msg.content.startsWith(prefix + 'random')) {
    const subreddit = msg.content.replace(prefix + 'random ', '')
    const received = 'got a random api request for /r/' + subreddit
    const author = msg.author.username
    console.log(ok(received))
    redcord.random(subreddit)
      .then((post) => {
        console.log(ok('success! ') + 'got this for ' + author + ': ' + link(post.url))
        bot.createMessage(msg.channel.id, post.url)
      })
  }

  // spam command
  if (msg.content.startsWith(prefix + 'spam')) {
    const subreddit = msg.content.replace(prefix + 'spam ', '')
    const received = 'got a spam api request for /r/' + subreddit
    const author = msg.author.username
    console.log(ok(received))
    for (i = 0; i < 10; i++) {
      redcord.random(subreddit)
        .then((post) => {
          console.log(ok('success! ') + 'got this for ' + author + ': ' + link(post.url))
          bot.createMessage(msg.channel.id, post.url)
        })
    }
  }
})

bot.connect()
