exports.run = (client, message, args) => {
    //error handling
    if(!args[0]) return message.channel.send("Input was not given correctly.");
    //format search term for lookup in json
    let name = '';
    for(let i = 0; i < args.length; i++){
        if(i !== args.length - 1) name += args[i] + ' ';
        else name += args[i];
    }
    
    if(client.msgDb[name] === undefined) return message.channel.send("The name you entered was incorrect.");

    let fs = require("fs");
    var stringify = require('json-stringify-safe');
    let guild = client.guilds.find("name", client.config.serverName);
    guild.channels.forEach((channel) => {
        if(channel.id == client.msgDb[name].channelID){
            client.msgDb[name].isRunning = true;
            fs.writeFile("./msgdb.json", stringify(client.msgDb), (err) => {
                if(err) console.log(err);
            });
            
            channel.sendMessage(client.msgDb[name].body);
            client.msgDb[name].interval = setInterval(function(){
                channel.sendMessage(client.msgDb[name].body);
            }, client.msgDb[name].time);
        }
    });
}
