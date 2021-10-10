const {Client, Intents, Collection} = require('discord.js');
const client = new Client({intents: [Intents.FLAGS.GUILDS,Intents.FLAGS.GUILD_MESSAGES]});
/*const fs = require('fs');
const path = require('path');

const {BOT} = require('./config');



//let prefix = BOT.prefix;

//no me gustaaa :c
const arrayOfStatus = [
    "Usa el prefijo '-' para llamarme",
    "bot en desarrollo, estado ALPHA"
]

client.command= new Collection();
client.on("ready", () => {
    console.log(`${client.user.username} se inició correctamente: CheesecakeON`);
 // welcome(client);


    let index = 0;
    setInterval(() => {

        if (index === arrayOfStatus.length) index = 0;
        const status = arrayOfStatus[index];
        client.user.setActivity(status);
        index++;
    }, 7000);


});


client.on("messageCreate", (message) => {
    //COMANDOS

if (message.author.bot)return;
if (!message.content.startsWith(BOT.prefix))return;

let[cmdname, ...cmdargs] = message.content.slice(BOT.prefix.length).trim().split(/\s+/);


const cmd = client.command.get(cmdname);
if(!cmd)return;
cmd.run(client,message,cmdargs);
});


const commands = fs.readdirSync(path.join(__dirname, 'commands/cmd'));
    for(const file of commands){
        const cmd = require(path.join(__dirname, 'commands/cmd',file));
        client.command.set(cmd.name, cmd);
    }

    */
let token_promise=client.login(BOT.token);
token_promise.then(()=>{
console.log("cheescakeON");
},(error, response)=>{console.log(error);});

