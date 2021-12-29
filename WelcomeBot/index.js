// ======================================================================================================
// These selections of files are open source. We support you attempting to edit this code to your liking.
// We will not blacklist you from our API from investigating.
// You selected a Welcome Bot.
// You will be asked questions to start up the bot.
// ======================================================================================================
// Initial libaries needed
// ======================================================================================================
const { Collection } = require("discord.js")
const discord = require("discord.js")
const readlineSync = require('readline-sync');
const client = new discord.Client({ intents: "32767", ws: { properties: { $browser: "Discord iOS"} } })
// ======================================================================================================
// Getting the info needed off the user.
// ======================================================================================================
console.log("[READ ME] Make sure Presence Intent and Guild Member Intent is enabled in your bot settings.")
const token = readlineSync.question("[INPUT] Please enter your Discord.JS Bot Token: \n")
const clientid = readlineSync.question("[INPUT] Please enter your Discord.JS Bot Client ID: \n")
const guildid = readlineSync.question("[INPUT] Please enter the server id from which you are going to put the bot in: \n")
const welcomechannelid = readlineSync.question("[INPUT] Please enter the id of the welcome channel: \n")
const inviteLink = `https://discord.com/api/oauth2/authorize?client_id=${clientid}&permissions=8&scope=bot%20applications.commands`
console.log(`[API] Invite your code with this link: ${inviteLink}`)
// ======================================================================================================
// All items that will be ran when the client is ready.
// ======================================================================================================
client.on("ready", () => {
    // Set the status for your bot.
    client.user.setActivity("new arrivals!", { type: "WATCHING"})
})
// ======================================================================================================
// Welcome Code
// ======================================================================================================
client.on("guildMemberAdd", member => {
    member.guild.channels.cache.get(welcomechannelid).send({
        "embeds": [
            new discord.MessageEmbed()
            .setTitle("Welcome!")
            .setColor("YELLOW")
            .setDescription(`👋 Welcome ${member.toString()} to ${member.guild.name}! You are the **${member.guild.memberCount}** user to join! 👋`)
            .setThumbnail(member.avatarURL)
        ]
    })
    member.send({
        "embeds": [
            new discord.MessageEmbed()
            .setTitle(`Information about ${member.guild.name}`)
            .setThumbnail(member.guild.iconURL)
            .addField("Member Count:", `${member.guild.memberCount}`)
        ]
    })
})
// ======================================================================================================
// Logging in the bot 
// ======================================================================================================
client.login(token)
// ======================================================================================================
// This is the end of index.js, this is the main file. Just in case if you uninstall anything, just run 
// "npm i" to reinstall it all.
// ======================================================================================================