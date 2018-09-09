exports.run = (client, message, args) => {
    let listStr = "";
    
    if(!args[0]){
        for(var i = 0; i < client.cypherList.length; i++) {
            if(client.cypherList[i].id === message.author.id){
                message.channel.send("`Removed " + client.cypherList[i].name + " from the cypher...`");
                client.cypherList.splice(i, 1);
                if(i == 0){
                    client.time = 0;
                }
            }
        }
    } else {
        for(var i = 0; i < client.cypherList.length; i++){
            if(client.cypherList[i].id === message.mentions.users.first().id){
                message.channel.send("`Removed " + client.cypherList[i].name + " from the cypher...`");
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
