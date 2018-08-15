exports.run = (client, message, args) => {
        //error handling
    if(!args[0]) return message.channel.send("Input was not given correctly");
    //format search term for lookup in json
    let name = '';
    for(let i = 0; i < args.length; i++){
        if(i !== args.length - 1) name += args[i] + ' ';
        else name += args[i];
    }
    
    if(client.msgDb[name] === undefined) return message.channel.send("The name you entered was incorrect.");
    
    let running, str = '';
        
    if(client.msgDb[name].isRunning) running = 'Yes';
    else running = 'No';
    
    let channelName = client.channels.get(client.msgDb[name].channelID.toString()).name;
    
    str += '__**Name**__: `' + client.msgDb[name].name + '`\n'
        +  '__**Channel ID**__: `' + client.msgDb[name].channelID + '`\n'
        +  '__**Channel Name**__: `#' + channelName + '`\n'
        +  '__**Timer**__: `' + (client.msgDb[name].time/60000).toFixed(0) + ' minutes`\n'
        +  '__**Running?**__: `' + running + '`\n\n'
        +  '__**Message**__:\n' + client.msgDb[name].body;
        
    message.channel.send(str);
}
