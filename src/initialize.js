const { Collection } = require('discord.js');
const fs = require('fs');
const path = require('path');

const arrayOfStatus = [
    "Usa el prefijo '-' para llamarme",
    "bot en desarrollo, estado ALPHA"
]

exports.initConfiguration = (client) => {

    return new Promise((resolve, reject) => {
        initBotConfiguration(client)
        resolve()
    })

}

function initBotConfiguration(client) {

    client.command = new Collection();

    let commands = fs.readdirSync(path.join(__dirname, 'commands/cmd'));

    for (let file of commands) {
        let cmd = require(path.join(__dirname, 'commands/cmd', file));
        client.command.set(cmd.name, cmd);
    }

    client.on("ready", () => {

        triggerBannerMessageMotion(arrayOfStatus, 7000)
        console.log(`${client.user.username} se inició correctamente: CheesecakeON`);
    });


    client.on("messageCreate", (message) => {

        if (message.author.bot) return;

        if (!message.content.startsWith(BOT.prefix)) return;

        let [cmdname, ...cmdargs] = message.content.slice(BOT.prefix.length).trim().split(/\s+/);
        const cmd = client.command.get(cmdname);

        if (!cmd) return;

        cmd.run(client, message, cmdargs);
    });

}

function setBannerMessage(user, status) {
    user.setActivity(status);
}

function triggerBannerMessageMotion(messages, timeframe) {
    let index = 0;

    setInterval(() => {
        if (index === messages.length) index = 0;
        const status = messages[index];
        setBannerMessage(client.user, status)
        index++;
    }, timeframe);
}