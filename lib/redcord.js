// this is the library that contains the backend functions that power ./bin/bot.js

const redditFetch = require('reddit-fetch')

// random/spam function
async function random (sub) {
  const redditOps = {
    subreddit: '',
    sort: 'hot',
    allowNSFW: true,
    allowVideo: true
  }

  redditOps.subreddit = sub

  return await redditFetch(redditOps)
}

module.exports = { random }
