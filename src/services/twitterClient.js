const { TwitterApi } = require("twitter-api-v2") 

const client = new TwitterApi({
    appKey: ACCESS_TOKEN,
    appSecret: APP_SECRET,
    accessToken: ACCESS_TOKEN,
    accessSecret: ACCESS_SECRET
})

const rwClient = client.readWrite
module.exports = rwClient
