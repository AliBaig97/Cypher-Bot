exports.run = (client, member) => {
    member.user.sendMessage(client.welcomeDb.welcomeMsg);
}
