exports.run = (client, message, args) => {
    message.channel.send("`Sending messages...` (this could take a few mins.)");
    let roleName = message.content.split(',')[0].substring(5, message.content.split(',')[0].length);
    let body = message.content.substring(7 + roleName.length, message.content.length);
    
    let guild = client.guilds.find("name", client.config.serverName); //keep in mind about modularizing
    guild.members.forEach((member) => {
        if(member.roles.find("id", message.mentions.roles.first().id)){
            member.user.send(body);
        }
    })
}
