exports.run = (client, message, args) => {
    
    let staffPing = message.guild.roles.find("name", "[💎Staff-Ping💎]");
    
    if(!client.isRunning){
        return;
    }
    
    if(!message.member.roles.has(staffPing.id)){
        return;
    }
    
    client.isRunning = false;
    clearInterval(client.interval);
    client.cypherList = [];
    client.time = 45;
    message.channel.send("`Cypher is ending...`");
}
