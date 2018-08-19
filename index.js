const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const stringify = require('json-stringify-safe');

const config = require("./config.json");
const msgDb = JSON.parse(fs.readFileSync("./msgdb.json", "utf8"));
const adminDb = JSON.parse(fs.readFileSync("./admins.json", "utf8"));
const welcomeDb = JSON.parse(fs.readFileSync("./welmsg.json", "utf8"));
client.config = config;
client.msgDb = msgDb;
client.adminDb = adminDb;
client.welcomeDb = welcomeDb;

//Read the events folder
fs.readdir("./events/", (err, files) => {
    if(err) return console.error(err);
    
    files.forEach(file => {
        //Slick way to get the event's name and function name
        let eventFunction = require(`./events/${file}`);
        let eventName = file.split(".")[0];
      
        //call the event and and put in params as needed
        client.on(eventName, (...args) => {
            eventFunction.run(client, ...args); //need ..args for events like 'voiceStatusUpdate'
        });
    });
});

client.on("message", message => {

    if(message.author.bot) return;
    if(message.content.indexOf(config.prefix) !== 0) return;
    
    let guild = client.guilds.find("name", client.config.serverName);
    
    //security stuff
    if(!client.adminDb.admins.includes(guild.owner.id)) {
        client.adminDb.admins.push(guild.owner.id);
        fs.writeFile("./admins.json", stringify(client.adminDb), (err) => {
           if(err) console.log(err);
        });
    }
    
    if(!client.adminDb.admins.includes(message.author.id)) return;
    
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    
    try {
        let path = `./commands/${command}.js`;
        
        //Checks to see if the command exists
        if(fs.existsSync(path)){
            let commandFile = require(path);
            commandFile.run(client, message, args);
        } else {
            console.log(`The command ${command} does not exist`);
        }
    } catch (err) {
        console.log(err);
    }
});

client.login(config.token);
