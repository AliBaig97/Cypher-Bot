exports.run = (client, message, args) => {
    let fs = require("fs");
    var stringify = require('json-stringify-safe');
    client.msgDb = {};
    
    fs.writeFile("./msgdb.json", stringify(client.msgDb), (err) => {
        if(err) console.log(err); 
    });
    
    message.channel.sendMessage('Clearing the database of all data');
}
