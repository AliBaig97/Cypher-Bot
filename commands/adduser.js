exports.run = (client, message, args) => {
    let fs = require("fs");
    var stringify = require('json-stringify-safe');
    
    if(!args[0]) return message.channel.send("Please specify the users name.");
    
    let userID = message.mentions.users.first().id;
    
    console.log(userID);
    
    if(!client.adminDb.admins.includes(userID)) client.adminDb.admins.push(userID);
    else return message.channel.send("That user is already an admin.");
    
    fs.writeFile("./admins.json", stringify(client.adminDb), (err) => {
      if(err) console.log(err);
    });
    
};
