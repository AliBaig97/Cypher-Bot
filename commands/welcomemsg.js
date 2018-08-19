exports.run = (client, message, args) => {
    let fs = require("fs");
    var stringify = require('json-stringify-safe');
    console.log(message.content.substring(12, message.content.length));
    client.welcomeDb.welcomeMsg = message.content.substring(12, message.content.length);
    fs.writeFile("./welmsg.json", stringify(client.welcomeDb), (err) => {
       if(err) console.log(err);
    });
}
