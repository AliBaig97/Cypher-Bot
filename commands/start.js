exports.run = (client, message, args) => {
    
    if(client.isRunning){
        return;
    }
    
    if(!client.cypherList[0]) return message.channel.send("Do `~>add` before the cypher starts");
    message.channel.send("`Cypher Starting...` \nEach person has 45 seconds to spit!");
    client.isRunning = true;
    client.time = 45;
    
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
        
        if(client.time == 5 && client.cypherList[1]){
            message.channel.send("@" + client.cypherList[1] + ", get ready for your turn!");
        }
            
        // Next persons turn
        if(client.time == 0 || client.time < 0){
            var temp = client.cypherList.shift();
            client.cypherList.push(temp);
            client.time = 45;
            message.channel.send("`" + client.cypherList[0] + "'s turn`\n" + "`" + client.time + " seconds` remaining!");
        } else {
            message.channel.send("`" + client.time + " seconds` remaining!");
        }
        
    }, 5000)
    
}
