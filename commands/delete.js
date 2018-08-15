exports.run = (client, message, args) => {
    let fs = require("fs");
    var stringify = require('json-stringify-safe');
    let name = message.content.split(',')[0].substring(8, message.content.split(',')[0].length);
    
    if(client.msgDb[name] === undefined) return message.channel.send('The name you entered was incorrect.');
    
    delete client.msgDb[name];
    
    fs.writeFile("./msgdb.json", stringify(client.msgDb), (err) => {
       if(err) console.log(err);
    });
}
