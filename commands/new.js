exports.run = (client, message, args) => {
    var stringify = require('json-stringify-safe');
    //clear all intervals before making new one, just incase
    let fs = require("fs");
    
    //string formatting for input
    let name = message.content.split(',')[0].substring(5, message.content.split(',')[0].length);
    
    //error handling
    if(client.msgDb[name]) return message.channel.send("This name already exists!");
    //if(message.content.split(',')[1].replace(/\s/g, '').length !== 18) return message.channel.send("The channel ID you entered was incorrect.");
    if(isNaN(parseFloat(message.content.split(',')[2].replace(/\s/g, '')).toFixed(3) * 60000)) return message.channel.send("The time you gave was incorrect.");
    
    console.log(parseFloat(message.content.split(',')[2].replace(/\s/g, '')).toFixed(3) * 60000);
    
    console.log(message.mentions.channels.first().id);
    
    let msgSchema = {
        name: message.content.split(',')[0].substring(5, message.content.split(',')[0].length),
        channelID: message.mentions.channels.first().id,
        time: parseFloat(message.content.split(',')[2].replace(/\s/g, '')).toFixed(3) * 60000, //convert mins to millisec
        isRunning: false,
        body: ''
    };
    
    console.log(msgSchema);
    client.msgDb[name] = msgSchema;
    
    fs.writeFile("./msgdb.json", stringify(client.msgDb), (err) => {
        if(err) console.log(err); 
    });
    
    
}
