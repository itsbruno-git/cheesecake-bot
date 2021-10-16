const queries = require('./database/queries')
const Discord = require('discord.js')

exports.manageMemberAdd = (client, member) => {

    let welcomeServerID = queries.getwelcomeServerID(member.guild.id)
    welcomeServerID.then((welcomeChannel) => {
        if (welcomeChannel!=null) {
            let server = client.guilds.cache.get(member.guild.id)
            server.channels.fetch().then((channels) => {

                let channel = channels.get(welcomeChannel)
                if (channel!= undefined) {
                 //   let message = new Discord.MessageEmbed()
                    let message = {
                        title: "WELCOME",
                        description: "¡ <@256475475566657537> ha llegado a #ClubDorito! ¿Traerá comida? Bienvenid@, disfruta del servidor. Puedes ir a #🔰丨roles para elegir a qué quieres tener acceso ^^",
                        image: {url: "https://media.discordapp.net/attachments/884892638426308669/896400692359606352/Doritos_en_espacio.png?width=910&height=682"}
                        
                    }
                    channel.send({ embeds:[message]})
                }
            })
        }
    })
}