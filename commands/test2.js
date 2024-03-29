const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
  const botconfig = require("../botconfig.json");
                                                    
if(!message.content.startsWith(botconfig.prefix)) return;

  const filter = reaction => reaction.emoji.name === "🌟";
  const collector = message.createReactionCollector(filter, { time: 10000 });
  
  collector.on("end", collected => {
    message.channel.send(`${collected.size} réactions collectés`)
  });
  
  
  
  
  
  
  
  
  
       console.log ("La commande Test a été utiliser !");                                    
}
module.exports.help = {
    name: "test1"
}