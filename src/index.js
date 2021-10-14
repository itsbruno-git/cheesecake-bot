const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const { BOT } = require('./config');
const { initConfiguration } = require('./initialize')

initConfiguration(client, BOT.database)
    .catch((error) => {
        console.error(error.reason)
        console.error(error.trace)
    })