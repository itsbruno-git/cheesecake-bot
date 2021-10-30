module.exports = {
  name: "pumpkin",
  description:
    "postea una calabaza de forma random, disponible solo por evento de halloween",
  usage: "pumpkin",
  aliases: [],
  isPrivate: false,
  guildonly: false,
  category: "pumpkin",
  isOwner: true,
  run: pumpkin,
};

function pumpkin(client, message, args) {

    //si tenemos ganas y nos sobra tiempo, podemos hacer que reconozca cuando ya dio una calabaza a un usuario y no le permita cambiarla (probable por base de datos)

  const calabazas = [
    'https://cdn.discordapp.com/attachments/884892638426308669/902928977046405180/Calabaza1.png', //01
    'https://cdn.discordapp.com/attachments/884892638426308669/902928982473846815/Calabaza2.png', //02
    'https://cdn.discordapp.com/attachments/884892638426308669/902928991885877278/Calabaza3.png', //03
    'https://cdn.discordapp.com/attachments/884892638426308669/902928998139559946/Calabaza5.png', //04
    'https://cdn.discordapp.com/attachments/884892638426308669/902929002019295283/Calabaza6.png', //05
    'https://cdn.discordapp.com/attachments/884892638426308669/902929005823541278/Calabaza7.png', //06
    'https://cdn.discordapp.com/attachments/884892638426308669/902929072684941342/Calabaza8.png', //07
    'https://cdn.discordapp.com/attachments/884892638426308669/902929075163766814/Calabaza9.png', //08
    'https://cdn.discordapp.com/attachments/884892638426308669/902929077449674803/Calabaza10.png', //09
    'https://cdn.discordapp.com/attachments/884892638426308669/902929080024969338/Calabaza11.png', //10
    'https://cdn.discordapp.com/attachments/884892638426308669/902929082721898536/Calabaza12.png', //11
    'https://cdn.discordapp.com/attachments/884892638426308669/902929086337409034/Calabaza13.png', //12
    'https://cdn.discordapp.com/attachments/884892638426308669/902929087276933170/Calabaza14.png', //13
    'https://cdn.discordapp.com/attachments/884892638426308669/902929119644381215/Calabaza15.png', //14
    'https://cdn.discordapp.com/attachments/884892638426308669/902929269586558976/Calabaza4_Shiny.png' //15
  ];
  random = Math.round(Math.random() * (calabazas.length - 1)); 

  message.channel.send('Here ur calabaza... no la pierdas');  
  message.channel.send(calabazas[random]);

}
