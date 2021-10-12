const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const { BOT } = require('./config');
const { initConfiguration } = require('./initialize')

initConfiguration(client).then(() => {
    let token_promise = client.login(BOT.token);
    token_promise.then(() => { console.log("cheescakeON"); }, (error) => { console.log(error); });
}, (error) => console.log(error))