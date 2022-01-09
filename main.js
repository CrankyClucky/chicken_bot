const Discord = require("discord.js");
require("dotenv").config()

const TOKEN = "OTI5NjU1Njc5NjgwMTMxMDkz.YdqfUg.JzN6dgHn_ZXTtGqN9EVO4QDu0lI"

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log('Logged in as ${client.user.tag}')
})

client.login(process.env.TOKEN)