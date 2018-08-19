exports.run = (client, message, args) => {
    //string formatting stuff
    let roleName = message.content.split(',')[0].substring(9, message.content.split(',')[0].length);
    let time = message.content.split(',')[1];
    time = time.substring(1, time.length);
    let body = message.content.substring(13 + roleName.length + time.length, message.content.length);
    console.log(body);
    console.log(time);
    console.log(roleName);
    message.channel.send("`Sending messages in approx.` " + time + " minutes.");
    
    let guild = client.guilds.find("name", client.config.serverName); //keep in mind about modularizing
    time = parseFloat(time).toFixed(3) * 60000;
    let dmInterval = setInterval(() => {
        guild.members.forEach((member) => {
            if(member.roles.find("id", message.mentions.roles.first().id)){
                member.user.send(body);
            }
        });
        //should just happen once
        clearInterval(dmInterval);
    }, time);
}
