module.exports={
    name: 'ping',
    description: 'ping del bot',
    usage: 'ping',
    aliases: [],
    isPrivate: false,
    guildonly: false,
    category: 'test',
    isOwner: true,
    run: (client, message, args) => {
        message.channel.send('pong');
    }
}