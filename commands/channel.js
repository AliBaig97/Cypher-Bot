exports.run = (client, message, args) => {
    let fs = require("fs");
    var stringify = require('json-stringify-safe');
    let name = message.content.split(',')[0].substring(9, message.content.split(',')[0].length);
    let channelID = message.mentions.channels.first().id;
    
    //error handling
    if(client.msgDb[name] === undefined) return message.channel.send('The name you entered was incorrect.');
    
    if(channelID.length !== 18) return message.channel.send('The channel ID you entered was incorrect.');
    
    client.msgDb[name].channelID = channelID;
    fs.writeFile("./msgdb.json", stringify(client.msgDb), (err) => {
       if(err) console.log(err);
    });
}
