const queries = require("./database/queries");
const Discord = require("discord.js");

exports.manageMemberAdd = (client, member) => {
  let welcomeServerID = queries.getwelcomeServerID(member.guild.id);

  welcomeServerID.then((WelcomeChannel) => {
    let channel = getChannelByID(client, member.guild.id, WelcomeChannel);
    
    if (channel != null) {
      channel.then((chn) => {
        if (chn != undefined) {
        let message = {
          title: "WELCOME",
          description: `¡ <@${member.id}> ha llegado a #ClubDorito! ¿Traerá comida? Bienvenid@, disfruta del servidor. Puedes ir a #🔰丨roles para elegir a qué quieres tener acceso ^^`,
          image: {
            url: "https://media.discordapp.net/attachments/884892638426308669/896400692359606352/Doritos_en_espacio.png?width=910&height=682",
          },
        };
        chn.send({ embeds: [message] }).catch((err) => {console.log(err);});
      }});
    }
  }).catch((err) => {console.log(err);});
};

exports.manageMemberdelete = (client, member) => {
  let exitServerID = queries.getexitServerID(member.guild.id);

  exitServerID.then((exitChannel) => {
    let channel = getChannelByID(client, member.guild.id, exitChannel);

    if (channel != undefined) {
      channel.then((chn) => {
        let message = {
          title: "GU BAI",
          description: `¡ <${member.user.username}> se fue :c!`,
          image: {
            url: "https://media.discordapp.net/attachments/884892638426308669/896400692359606352/Doritos_en_espacio.png?width=910&height=682",
          },
        };
        chn.send({ embeds: [message] });
      });
    }
  });
};

function getChannelByID(client, guild_id, channel_id) {
  if (channel_id != null) {
    return new Promise((resolve, reject) => {
      let server = client.guilds.cache.get(guild_id);
      server.channels
        .fetch()
        .then((channels) => {
          resolve(channels.get(channel_id));
        })
        .catch((err) => reject(err));
    });
  }
  return channel_id;
}
