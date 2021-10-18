const{MessageEmbed}=require('discord.js');

module.exports={
    name: 'help',
    description: 'menu de comandos',
    usage: 'help',
    aliases: [],
    isPrivate: false,
    guildonly: false,
    category: 'help',
    isOwner: true,
    run: help,  
}

function help(client, message, args) {
    const embedCommands = new MessageEmbed()
    .setTitle("Lista de comandos")
    .setColor(0x5865F2)
    .setDescription("El bot se encuentra en estado **BETA** y en constante desarrollo. Con el tiempo se irán agregando nuevos comandos a la lista.")
    .addField("Cheesecake", "este comando nos brinda cheescake.", false)
    .addField("Curiosidad", "Sabías que, si usas este comando te enteraras de datos curiosos?", false)
    .addField("Chat", "con este comando se genera un chat aleatorio, entre vos y la persona etiquetada")
    .setFooter("recuerda que para usar estos comandos tienes que usar el prefijo para llamarme.");

    message.channel.send({ embeds: [embedCommands] });

}