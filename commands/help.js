exports.run = (client, message, args) => {
    message.channel.send({embed: {
    color: 15844367,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    description: "Everyone has 45 seconds to spit. Add yourself to the queue and start it up!",
    fields: [{
        name: "~>add",
        value: "Adds you to the Cypher Queue."
      },
      {
        name: "~>remove",
        value: "Removes you from the Cypher Queue."
      },
      {
        name: "~>remove {user}",
        value: "Removes the user from the Cypher Queue."
      },
      {
        name: "~>list",
        value: "Shows a list of people in the Cypher Queue."
      },
      {
        name: "~>start",
        value: "Starts the cypher. Everyone has 45 seconds to spit."
      },
      {
        name: "~>pause",
        value: "Pauses the Cypher."
      },
      {
        name: "~>resume",
        value: "Resumes the Cypher."
      },
      {
        name: "~>stop",
        value: "Stops and clears the cypher.. Only Staff-Ping role can use this command."
      }
    ],
    footer: {
      icon_url: client.user.avatarURL,
      text: "If you have any questions or need any help, contact me @ Mamamoosa#6680"
    }
  }
});
}
