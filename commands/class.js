exports.run = (client, message, args) => {
    //let myRole = message.guild.roles.find("name", "rogue");
    //console.log('Your class is ' + args);
    let list = client.classList;
    for(let data in list){
        if(list[data].name.toLowerCase() === args[0].toLowerCase()){
            let role = message.guild.roles.find("name", list[data].name);
            let membersWithRole = message.guild.roles.get(list[data].roleID).members;
            console.log(membersWithRole.find(val => val.id === message.member.id));
            message.member.addRole(role).catch(console.error);
            console.log(list[data].name);
        }
    }
}
