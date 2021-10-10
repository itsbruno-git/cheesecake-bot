const { createChat, deleteImage } = require("../../create_img/create_img");

module.exports = {
  name: "chat",
  description: "Genera chats randoms entre usuarios",
  usage: "chat",
  aliases: [],
  isPrivate: false,
  guildonly: false,
  category: "chat",
  isOwner: true,
  run: chatgenerate,
};

function chatgenerate(client, message, args) {
  const chats = [
    //solo de 2 integrantes --- usuario1 y usuario2
    [
      {
        author: "me",
        content: "Hola soy barno y este es mi canal de twitch :)",
      },
      {
        author: "me",
        content: "capobeira",
      },
      {
        author: "another",
        content: "Adiós :)",
      },
      {
        author: "me",
        content: "Adiós",
      },
      {
        author: "me",
        content: "botón",
      },
    ],
    [
      {
        author: "me",
        content: "Tengo hambre",
      },
      {
        author: "another",
        content: "yo también",
      },
    ],
    // ["1...Y por eso el color amarillo es el mas amarillo", "2perdona de que estabamamos hablando?"],
    // ["1Estoy en clases", "2y que haces aquí capullo"],
    // ["1Pan", "1leche", "1huevos", "1café", "2que haces?!", "1la lista de la compra duh", "2...", "1miel","2no te olvides de las galletas de dinosaurio"]
  ];

  let arrobado = message.mentions.users.first();
  let file;
  random = Math.round(Math.random() * (chats.length - 1)); //random()*(max-min)+min

  if (!arrobado || arrobado.bot)
    return message.channel.send("mencione a un usuario para generar el chat");
  let chat = chats[random];

  chat = chat.map((value) => {
    let sender = message.author;
    let result = {
      author: message.author.username,
      content: value.content,
      displayColor: message.member.displayHexColor,
    };
    if (value.author != "me") {
      sender = arrobado;
      result.displayColor = message.mentions.members.first().displayHexColor;
      result.author = arrobado.username;
    }
    result.authorAvatar = sender.displayAvatarURL({
      format: "png",
      size: 64,
    });
    return result;
  });
  createChat(chat).then((file) => {
    let messagePromise = message.channel.send({
      files: [
        {
          attachment: file.path,
          name: file.name,
        },
      ],
    });
    messagePromise.then(
      () => deleteImage(file.path),
      (error) => console.log(error)
    );
  });
}

