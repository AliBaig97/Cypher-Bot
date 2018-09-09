exports.run = (client, message, args) => {
    var name = message.author.username;
    
    
    for(var j = 0; j < client.cypherList.length; j++){
        if(client.cypherList[j] === name){
            return;
        }
    }
    
    if(!args[0]) {
        client.cypherList.push(name);
    }
    
    message.channel.send("`Added " + name + " to the cypher...`\n`Cypher List`");
    
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
