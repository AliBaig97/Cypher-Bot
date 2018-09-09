exports.run = (client, message, args) => {
    let listStr = "";
    
    if(!args[0]){
        for(var i = 0; i < client.cypherList.length; i++) {
            if(client.cypherList[i] === message.author.username){
                message.channel.send("`Removed " + client.cypherList[i] + " from the cypher...`");
                client.cypherList.splice(i, 1);
                if(i == 0){
                    client.time = 0;
                }
            }
        }
    } else {
        for(var i = 0; i < client.cypherList.length; i++){
            if(client.cypherList[i] === message.mentions.users.first().username){
                message.channel.send("`Removed " + client.cypherList[i] + " from the cypher...`");
                client.cypherList.splice(i, 1);
                if(i == 0){
                    client.time = 0;
                }
            }
        }
    }
    
    if(!client.cypherList[0]){
        clearInterval(client.interval);
        client.isRunning = false;
    }
}
