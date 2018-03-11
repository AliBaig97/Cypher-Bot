const Discord = require("discord.js");
const client = new Discord.Client();
const token = 'NDIyMTYxODQ2ODE3MjU5NTMz.DYXwYw.BwlXotStX--56gu7NkFXLb_7RpM';
const prefix = 'lil';
var nickname = 'nicetrylilone';

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if (msg.author.bot) return;
    if (!msg.content.startsWith(prefix)) return;
    
    let command = msg.content.toLowerCase().split(" ")[0];
    let args = msg.content.split(" ").slice(1);
    var jase = msg.guild.members.get('380140612025974795');
    
    if(msg.channel.id === '422162527426969606'){
        if(args[0] == 'change'){
            nickname = '';
            for(var i = 1; i < args.length; i++){
                console.log(args[i]);
                nickname += args[i] + ' ';
            }
            jase.setNickname(nickname);
        }
        
        if(args[0] == 'help'){
            console.log(msg.channel.id);    
        }
    }
});

client.on('guildMemberUpdate', (oldMember, newMember) => {
   console.log(oldMember.nickname);
   if(newMember.id === '380140612025974795') 
    newMember.setNickname(nickname).then().catch(console.error);
});

client.login(process.env.BOT_TOKEN);
