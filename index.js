const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");

const config = require("./config.json");

//let words = JSON.parse(fs.readFileSync("./words.json", "utf8"));

//Example 2 for how we can group objects and globally use them in other files GG
client.cypherList = [];
client.interval;
client.isRunning = false;
client.position = 0;
client.time = 45;

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
    
    if(message.channel.id !== "470683626862936085"){
        return;
    }
    
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

client.login(process.env.BOT_TOKEN);
