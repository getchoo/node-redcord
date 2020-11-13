const redcord = require('./features/commands')
const chalk = require('chalk')
const Eris = require('eris')

const token = process.env.DISCORD_TOKEN

const prefix = '-'

const bot = new Eris(token)

const ok = chalk.bold.cyan

const link = chalk.underline.green

let i = 0

bot.on('ready', async () => {
  console.log(chalk.bold.cyan('connected to discord!'))
})

bot.on('messageCreate', async (msg) => {
  if (msg.content.startsWith(prefix + 'random')) {
    const subreddit = msg.content.replace(prefix + 'random ', '')
    const recieved = 'got a random api request for /r/' + subreddit
    const author = msg.author.username
    console.log(ok(recieved))
    redcord.random(subreddit)
      .then((post) => {
        console.log(ok('success! ') + 'got this for ' + author + ': ' + link(post.url))
        bot.createMessage(msg.channel.id, post.url)
      })
  }

  if (msg.content.startsWith(prefix + 'spam')) {
    const subreddit = msg.content.replace(prefix + 'spam ', '')
    const recieved = 'got a spam api request for /r/' + subreddit
    const author = msg.author.username
    console.log(ok(recieved))
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