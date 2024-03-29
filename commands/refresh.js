const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let Dev = ["282180259615342592", "435104377439780866"]
      if (Dev.includes(message.author.id)) {

      console.log(`Reloading Glitch project...`);
      require('child_process').exec('refresh');
    message.delete().catch();
  console.log(`Refresh demandée par ${message.author.id} !`)

      }
}
module.exports.help = {
    name: "reedem"
    }