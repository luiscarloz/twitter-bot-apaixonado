const client = require("../services/twitterClient");

module.exports.handler = async event => {
  
    const jsTweets = await client.v2.search('linda');
    const tweetsLinda = jsTweets._realData.data
    const reply = async () => {
        await client.v2.reply(
            'Linda é a Bia Senna <3',
            tweetsLinda[1].id.toString(),
        );
    }
    return reply()

}

// Aqui é pra responder os 10 que chegam da query com 10 frases diferentes :)


// console.log('@@@@@@@@@------------ TWEETS ------------@@@@@@@@@', jsTweets._realData.data)
// const lindaEa = [
//     'Linda é a Beatriz',
//     'Linda é a Beatriz!',
//     'Linda é a Beatriz!!!',
//     'A Beatriz que é linda',
//     'A Beatriz que é linda!!',
//     'A Beatriz que é linda!! NE ?',
//     'Nada a ver, a Beatriz que é linda',
//     'CALA A BOCA, a Beatriz que é linda',
//     'Linda é a Beatriz, o resto é resto',
//     'Linda é a Beatriz o resto é resto',
//   ]
    // for (let i = 0; i < tweetsLinda.length; i ++) {
    //     console.log(tweetsLinda[i].id, '@@@@@@@@@------------ TEST MEU PATRAO ------------@@@@@@@@@')
    //     const reply = async () => {
    //     await client.v2.reply(
    //       lindaEa[i],
    //     tweetsLinda[i].id.toString(),
    //   );
    //   return reply()
    // }
    // }