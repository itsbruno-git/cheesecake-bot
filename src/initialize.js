const { Collection } = require('discord.js');
const fs = require('fs');
const path = require('path');
const { BOT } = require('./config');
const { Client } = require('pg')
const {initialize} = require('./database/database')
const queries = require('./database/queries')


exports.initConfiguration = (client, database) => {

    return new Promise((resolve, reject) => {
        let configurationPromises = []

   

        let databaseClient = initDatabaseAccess(database)

        configurationPromises.push({ name: 'Database', promise: databaseClient.connect() , errorMsg: 'Database connection failed.' })
        configurationPromises.push({ name: 'Discord Login', promise: client.login(BOT.token), errorMsg: 'Login to Discord failed.' })

        let promises = configurationPromises.map(configProm => {
            return {
                prom: new Promise((resolve, reject) => {
                    configProm.promise
                        .then(() => {
                            resolve(configProm.name)
                        })
                        .catch((configPromError) => reject({ reason: `Initialization error: ${configProm.errorMsg}`, trace: configPromError }))
                })
            }
        })

        Promise.all(promises.map(config => config.prom))
            .then((fulfilled) => {
                console.log(`The configuration steps (${fulfilled.join(', ')}) concluded successfully.`)
                initialize(databaseClient) 
                initBotConfiguration(client)
                resolve()
            }).catch(error =>
                reject(error))

    })

}

function initBotConfiguration(client) {

    client.command = new Collection();

    let commands = fs.readdirSync(path.join(__dirname, 'commands/cmd'));

    for (let file of commands) {
        let cmd = require(path.join(__dirname, 'commands/cmd', file));
        client.command.set(cmd.name, cmd);
    }


         let statusMessages = queries.getStatusMessages()
         statusMessages.then((messages) => triggerBannerMessageMotion(client.user, messages, 7000))
        
    


    client.on("messageCreate", (message) => {

        if (message.author.bot) return;

        if (!message.content.startsWith(BOT.prefix)) return;

        let [cmdname, ...cmdargs] = message.content.slice(BOT.prefix.length).trim().split(/\s+/);
        const cmd = client.command.get(cmdname);

        if (!cmd) return;

        cmd.run(client, message, cmdargs);
    });

}

function initDatabaseAccess(databaseQueryString) {

    const client = new Client({
        connectionString: databaseQueryString,
        ssl: {
            rejectUnauthorized: false
        }

    })
    return client
}


function setBannerMessage(user, status) {
    user.setActivity(status);
}

function triggerBannerMessageMotion(user, messages, timeframe) {
    let index = 0;

    setInterval(() => {
        if (index === messages.length) index = 0;
        const status = messages[index];
        setBannerMessage(user, status)
        index++;
    }, timeframe);
}