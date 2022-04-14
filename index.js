// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');
require('dotenv').config()

const prefix = "$"

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
});

client.on("messageCreate", message => {
    console.log("captei a mensagem")
    if (message.content.startsWith(prefix)) {
        if (message.content.includes("akainu")) {
            message.reply("<:akainucb:783767470157856789>")
        }
    }
})

// Login to Discord with your client's token
client.login(process.env.TOKEN);