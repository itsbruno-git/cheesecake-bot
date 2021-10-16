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
    [
      {
        author: "me",
        content: "...Y por eso el color amarillo es el mas amarillo"
      },
      {
        author: "another",
        content: "perdona de que estabamamos hablando?"
      }
    ],
    [
      {
        author: "me",
        content: "¿Cómo se queda un mago después de comer?"
      },
      {
        author:"another",
        content: "no porfavor, no otra vez..."
      },
      {
        author:"me",
        content:"MAGORDITO :D"
      }      
    ],
    [
      {
        author: "me",
        content: "Que"
      },
      {
        author:"another",
        content:"So"
      },
      {
        author: "me",
        content:"¿Por qué las rosas se llaman así si son rojas?"
      },
      {
        author: "another",
        content:"..."
      },
      {
        author:"another",
        content:"Por favor no empie-"
      },
      {
        author:"me",
        content:"¿Qué cuentan las ovejas para poder dormir?"
      }
    ],
    [
      {
        author:"me",
        content:"Como odio este juego..."
      },
      {
        author:"another",
        content:"Pero si tienes más de cie-"
      },
      {
        author:"me",
        content:"Es un buen juego, ese es su problema."
      },
    ],
    [
      {
        author: "me",
        content: "Nunca entendí como se hacía eso de los mensajes en blanco",
      },
      {
        author: "another",
        content: "",
      },
      {
        author: "me",
        content: "Capullo"
      }
    ],
    [
      {
          author: "me",
          content: "Pan",
      },
      {
        author: "me",
        content: "leche",
      },
      {
        author:"me",
        content: "huevos",
      },
      {
        author:"me",
        content: "café",
      },
      {
        author:"another",
        content: "que haces?!",
      },
      {
        author:"me",
        content:"la lista de la compra duh",
      },
      {
        author:"another",
        content:"...",
      },
      {
        author:"me",
        content:"miel",
      },
      {
        author:"another",
        content:"no te olvides de las galletas de dinosaurio",
      },
    ]
  ];

  let arrobado = message.mentions.users.first();
  let file;
  random = Math.round(Math.random() * (chats.length - 1) + 1); //random()*(max-min)+min

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

