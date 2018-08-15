exports.run = (client, message, args) => {
    let running = '';
    let str = '-----------------------------\n`List of ALL messages`\n-----------------------------\n';
    for(var key in client.msgDb) {
        
        if(client.msgDb[key].isRunning) running = 'Yes';
        else running = 'No';
        
        let channelName = client.channels.get(client.msgDb[key].channelID.toString()).name;
        
        str += '__**Name**__: `' + client.msgDb[key].name + '`\n'
            +  '__**Channel ID**__: `' + client.msgDb[key].channelID + '`\n'
            +  '__**Channel Name**__: `#' + channelName + '`\n'
            +  '__**Timer**__: `' + (client.msgDb[key].time/60000).toFixed(0) + ' minutes`\n'
            +  '__**Running?**__: `' + running + '`\n\n';
    }
    message.channel.send(str);
}
