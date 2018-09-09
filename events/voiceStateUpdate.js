exports.run = (client, oldMember, newMember) => {
    var oldUserChannel = oldMember.voiceChannel;
    var newUserChannel = newMember.voiceChannel;
    
    if(oldUserChannel === undefined && newUserChannel !== undefined) {

     // User Joins a voice channel

  } else if(newUserChannel === undefined){
    
    // User leaves a voice channel
    
    if(oldUserChannel.id === "469729898433478677"){
        var channel = client.channels.get("470683626862936085");
        for(var i = 0; i < client.cypherList.length; i++) {
            if(client.cypherList[i] === oldMember.user.username){
                channel.sendMessage("`Removed " + client.cypherList[i] + " from the cypher...`");
                client.cypherList.splice(i, 1);
                if(i == 0){
                    client.time = 0;
                }
            }
        }
    }
    
    if(!client.cypherList[0]){
        clearInterval(client.interval);
        client.time = 0;
        client.isRunning = false;
    }

  }
}
