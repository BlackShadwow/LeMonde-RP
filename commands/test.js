const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
  const botconfig = require("../botconfig.json");
                                                    
if(!message.content.startsWith(botconfig.prefix)) return;
 
         const filter = msg => msg.content.includes (args[0]);
         //const collector = message.channel.createMessageCollector(filter, { time: 10000});
  
  message.channel.send(`Tapez ${args[0]}`)
  .then(() => {
    message.channel.awaitMessages(filter, { time:10000})
    .then(collected => message.channel.send(`${collected.size} messages collectés`))
  })
  
  
  
  /*collector.on('end', collected =>
              message.channel.send(`${collected.size - 1} messages collectés`)
              )*/

       console.log ("La commande Test a été utiliser !");                                    
}
module.exports.help = {
    name: "test"
}