const { TwitterApi } = require("twitter-api-v2") 

const client = new TwitterApi({
    appKey: "VDs8hDaCpiXN6fNYjwox44v6y",
    appSecret: "Q6beWiSZHTSrFBfNWmuYSj7rmh4DB7cTjBifp03sp3QYX9zf6Q",
    accessToken:"1583988275764666369-s8a0H6sYjPzo29ROKxDjveqaR2jHnl",
    accessSecret: "G5hchDyzNutlKQaernDn05R9H9fs0jvTnzLwaRS1IkQH6"
})

const rwClient = client.readWrite
module.exports = rwClient
