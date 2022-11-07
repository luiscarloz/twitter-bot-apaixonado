const client = require("../services/twitterClient");

module.exports.handler = async () => {
  const declaracaoDeAmor = [
    "Eu te amo Beatriz Senna",
    "A Bia é a mulher mais gata do mundo!",
    "QUE SAUDADE",
    "Beatriz Senna sua cheirosa",
    "Beatriz Senna sua gata",
  ]
    const random = Math.floor(Math.random() * declaracaoDeAmor.length)
    const tweet = async () => {
        await client.v2.tweet(declaracaoDeAmor[random])
    }
    return tweet()
}

