// bot.js
const Discord = require('discord.js');
const client = new Discord.Client();

const { handleTestCommand } = require('./commands');

const prefix = '/'; // Prefix dla komend

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'test') {
        handleTestCommand(message);
    }
});

client.login('MTIzMzY4MTUxNjcyMzQ0MTcwNQ.GliC5k.DnyyiLGgIjlSO1xV6nUQQrmTlhnI0godik9aR8'); // Zastąp TOKEN_BOTA_DISCORD tokenem Twojego bota
