exports.run = (client, message, args) => {
    message.channel.send({embed: {
    color: 3447003,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    description: "This bot repeatedly sends messages in specified channels after a certain amount of time has passed. Please read and follow the instructions carefully!\n\n"
               + "\t***COMMANDS***",
    fields: [{
        name: "`>new {Name}, {#Channel}, {Time}`",
        value: "Creates a new msg with a unique name, the name of the channel you want the message to be sent in, and the timer in minutes.\n"
             + "***Ex***: `>new Title, #general, 60`"
      },
      {
        name: "`>msg {Name}, {Message}`",
        value: "Sets the msg that's attached to that name you specified. This bot can send any message that you can put on discord so go crazy!\n"
             + "***Ex***: `>msg Title, What's up, @members?`"
      },
      {
        name: "`>start {Name}`",
        value: "Sends the message that's attached to that name and continues to send it once the time resets.\n"
             + "***Ex***: `>start Title`"
      },
      {
        name: "`>stop {Name}`",
        value: "Stops sending the message that's attached to that name and resets the time.\n"
             + "***Ex***: `>stop Title`"
      },
      {
        name: "`>stopall`",
        value: "Stops all of the messages and resets their time."
      },
      {
        name: "`>list`",
        value: "Shows a list of all the messages and its info."
      },
      {
        name: "`>show {Name}`",
        value: "Shows more information about that specific message.\n"
             + "***Ex***: `>show Title`"
      },
      {
        name: "`>channel {Name}, {#Channel}`",
        value: "Changes the channel of the message that's attached to that name.\n"
             + "***Ex***: `>channel Title, #lobby`"
      },
      {
        name: "`>timer {Name}, {Time}`",
        value: "Changes the time of the message that's attached to that name. Remember to specify it in minutes!\n"
             + "***Ex***: `>timer Title, 120`"
      },
      {
        name: "`>delete {Name}`",
        value: "Deletes the message that's attached to that name.\n"
             + "***Ex***: `>delete Title`"
      },
      {
        name: ">dm {@Role}, {Message}",
        value: "Sends a DM to users with that role. This command can take a few mins. to execute depending on server size.\n"
             + "***Ex***: `>dm @Members, Wassup members?`"
      },
      {
        name: ">timerdm {@Role}, {Time}, {Message}",
        value: "Sends a DM to users with that role in t-minus however much time in minutes you put.\n"
             + "***Ex***: `>timerdm @Members, 60, Wassup members from the future!`"
      },
      {
        name: ">welcomemsg {Message}",
        value: "Sets the DM message that new users would see upon joining the server"
      },
      {
        name: "`>adduser {@User}`",
        value: "Adds a user to the list of people who can use this bot.\n"
             + "***Ex***: `>adduser @Mamamoosa#6680`"
      }
    ],
    footer: {
      icon_url: client.user.avatarURL,
      text: "If you have any questions or need help, contact me on discord @ mamamoosa#6680"
    }
  }
});
}
