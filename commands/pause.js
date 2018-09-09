exports.run = (client, message, args) => {
    if(!client.isRunning) return;
    client.isRunning = false;
    clearInterval(client.interval);
    message.channel.send("`Cypher has been paused...`");
}
