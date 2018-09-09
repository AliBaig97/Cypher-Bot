exports.run = (client, message, args) => {
    let listStr = "";
    
    if(client.cypherList[0])
    for(var i = 0; i < client.cypherList.length; i++) {
        listStr += `${i+1}.  ${client.cypherList[i]}\n`;
    }
    
    message.channel.send({embed: {
        color: 15844367,
        author: {
            name: "Cypher Queue",
            icon_url: client.user.avatarURL
        },
        description: listStr
    }});
}
