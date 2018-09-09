exports.run = (client, message, args) => {
    var user;
    var id = message.author.id;
    
    
    for(var j = 0; j < client.cypherList.length; j++){
        if(client.cypherList[j].id === id){
            return;
        }
    }
    
    if(!args[0]) {
        user = {
            name: message.author.username,
            id: message.author.id
        }
        client.cypherList.push(user);
    }
    
    message.channel.send("`Added " + user.name + " to the cypher...`\n`Cypher List`");
    
    let listStr = "";
    
    if(client.cypherList[0])
    for(var i = 0; i < client.cypherList.length; i++) {
        listStr += `[${i+1}]  ${client.cypherList[i].name}\n`;
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
