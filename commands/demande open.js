const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {
  const botconfig = require("../botconfig.json");

  if (!message.content.startsWith(botconfig.prefix)) return;
  let Chan = ["632967174792806427", "632967067234205696", "648206012792176661"];
  if (Chan.includes(message.channel.id)) {
    let Staff = ["384029056145948673", "435104377439780866"];
    if (Staff.includes(message.author.id)) {
      message.channel.setName("🕰》demande—✅").catch(console.error);

      message.channel.send(
        "Salon demande ouvert avec succès. :white_check_mark:"
      );
      setTimeout(function () {
        message.delete().catch();
      }, 3000);

      console.log(`Un salon demande a été ouvert. ID : ${message.channel.id}.`);
    }
  } else {
    message.channel.send(
      "Vous n'avez aucune permissions d'éxecuter cette commande"
    );
  }
  setTimeout(function () {
    message.delete().catch();
  }, 500);

  function del() {
    message.delete();
  }
};
module.exports.help = {
  name: "open",
};
