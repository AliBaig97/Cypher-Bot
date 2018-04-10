const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");

const config = require("./config.json");

client.classList = {
    rogue: {
        name: "Rogue",
        roleID: "433046029705936916"
    },
    shaman: {
        name: "Paladin",
        roleID: "433046088895692820"
    },
    priest: {
        name: "Priest",
        roleID: "433046500688527361"
    },
    warrior: {
        name: "Warrior",
        roleID: "433046604342099968"
    },
    druid: {
        name: "Druid",
        roleID: "433046731253481473"
    },
    warlock: {
        name: "Warlock",
        roleID: "433046820390830080"
    },
    mage: {
        name: "Mage",
        roleID: "433046900065959939"
    },
    hunter: {
        name: "Hunter",
        roleID: "433057461801451520"
    }
};

// client.classList = {
//   rogue: guild.roles.get("430542391427203102"),
//   shaman: guild.roles.get("430542483122946050"),
//   priest: guild.roles.get("430542578480316416"),
//   warrior: guild.roles.get("430542533077106699"),
//   druid: guild.roles.get("430542813760061451"),
//   mage: guild.roles.get("430542840053891092"),
//   warlock: guild.roles.get("430542699888771084")
// };

// console.log(client.classList.rogue);

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
