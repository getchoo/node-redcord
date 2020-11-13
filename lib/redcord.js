const redditFetch = require('reddit-fetch')

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
