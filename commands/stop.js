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
    
    let fs = require("fs");
    var stringify = require('json-stringify-safe');
    clearInterval(client.msgDb[name].interval);
    client.msgDb[name].isRunning = false;
    fs.writeFile("./msgdb.json", stringify(client.msgDb), (err) => {
        if(err) console.log(err);
    });
    message.channel.send('Broadcast timer has stopped for ' + name + '.\n');
}
