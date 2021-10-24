//cremos que no lo llama nada

module.exports = (client) => {
    const channelId = "882354045292003339";

    client.on("guildMemberAdd", (member) => {

        console.log(member);

       const message = `welcome <@${
            member.id
        }> a casita`;

        const channel = member.guild.channels.cache.get(channelId);
        channel.send(message);
    });
};