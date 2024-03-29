const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
const botconfig = require("../botconfig.json");
  
  if(!message.content.startsWith(botconfig.prefix)) return;                                     
  var embed = new Discord.MessageEmbed()

  .setTitle("Bienvenue dans le panel des commandes.")
  .setDescription("Pour les membres :")
  .addField("Hors RP",`**-dog** : Affiche des images de chien, 
 **-cat** : Affiche des images de chat.`)
  .addField("Pendant RP",`**-roll** : Pour s'entraîner et gagner des niveaux.
`);
  
  message.channel.send(embed);                                       


       console.log("La commande Help a été utiliser !");                                    
}
module.exports.help = {
    name: "help"
}