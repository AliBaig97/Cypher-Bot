exports.run = (client, message, args) => {
    let fs = require("fs");
    var stringify = require('json-stringify-safe');
    let name = message.content.split(',')[0].substring(7, message.content.split(',')[0].length);
    
    if(client.msgDb[name] === undefined) return message.channel.send("The name you entered was incorrect.");
    
    let time = message.content.substring(9 + name.length, message.content.length);
    time = parseFloat(time).toFixed(3) * 60000;
    client.msgDb[name].time = time;
    fs.writeFile("./msgdb.json", stringify(client.msgDb), (err) => {
       if(err) console.log(err);
    });
}
