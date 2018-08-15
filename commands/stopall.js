exports.run = (client, message, args) => {
    let fs = require("fs");
    var stringify = require('json-stringify-safe');
    
    for(var key in client.msgDb){
        clearInterval(client.msgDb[key].interval);
        client.msgDb[key].isRunning = false;
    }
    
    fs.writeFile("./msgdb.json", stringify(client.msgDb), (err) => {
        if(err) console.log(err);
    });
    
    message.channel.send('Broadcast timers have stopped for everything.');
}
