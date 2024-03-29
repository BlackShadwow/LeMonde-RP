const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  const botconfig = require("../botconfig.json");
                                                    
if(!message.content.startsWith(botconfig.prefix)) return;

let botmessage = args.join(" ");
if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Tu n'a pas la permisions: Gérer les message ! \nYou haven't got the permissions: Manage the message !")
if(message.author.id !== "435104377439780866")
if (!botmessage) return message.channel.send("Ton message ! (``$say [message]``) :sweat_smile: \nYour message ! (``$say [message]``) :sweat_smile:  ")


message.channel.send(botmessage.replace("@", ""))

console.log(`Commande Say: ${botmessage} a été dit`)
message.delete().catch();  
}
module.exports.help = {
    name: "say"
}