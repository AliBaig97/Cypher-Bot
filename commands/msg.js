exports.run = (client, message, args) => {
    let fs = require("fs");
    var stringify = require('json-stringify-safe');
    let name = message.content.split(',')[0].substring(5, message.content.split(',')[0].length);
    
    if(client.msgDb[name] === undefined) return message.channel.send("The name you entered was incorrect.");
    
    let body = message.content.substring(7 + name.length, message.content.length);
    console.log(body);
    console.log(client.msgDb[name]);
    client.msgDb[name].body = body;
    fs.writeFile("./msgdb.json", stringify(client.msgDb), (err) => {
       if(err) console.log(err);
    });
}
