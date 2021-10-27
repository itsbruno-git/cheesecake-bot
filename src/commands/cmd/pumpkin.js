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
    'https://cdn.discordapp.com/attachments/456989457342660610/902912252020150333/122426480-calabaza-de-dibujos-animados-sobre-un-fondo-blanco-ilustraciC3B3n-vectorial-.png' //prueba
  ];
  random = Math.round(Math.random() * (calabazas.length - 1)); 

  message.channel.send(calabazas[random]);
}
