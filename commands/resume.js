exports.run = (client, message, args) => {
    
    if(client.isRunning){
        return;
    }
    
    if(!client.cypherList[0]) return message.channel.send("Do `~>add` before the cypher starts");
    
    client.isRunning = true;
    
    message.channel.send("`Cypher Resuming...`");
    
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
    
    message.channel.send("`" + client.cypherList[0] + "'s turn!`\n" + "`" + client.time + " seconds` remaining!");
    
    client.interval = setInterval( () => {
        
        if(client.time != 0)
            client.time -= 5;
        
        if(client.time == 5){
            message.channel.send("@" + client.cypherList[1] + ", get ready for your turn!");
        }
        
        // Next persons turn
        if(client.time == 0 || client.time < 0){
            let temp = client.cypherList.shift();
            client.cypherList.push(temp);
            client.time = 45;
            message.channel.send("`" + client.cypherList[0] + "'s turn`\n" + "`" + client.time + " seconds` remaining!");
        } else {
            message.channel.send("`" + client.time + " seconds` remaining!");
        }
        
    }, 5000)
    
}
