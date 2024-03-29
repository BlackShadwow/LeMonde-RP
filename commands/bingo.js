const Discord = require("discord.js");
const botconfig = require("../botconfig.json");

module.exports.run = async (bot, message) => {
  if (!message.content.startsWith(botconfig.prefix)) return;

  var nombre = getRandomInt(1, 1000);

  const collector = message.channel.createMessageCollector(
    (m) => m.author.id === message.author.id,
    { max: 50, maxProcessed: 50, time: 120000 }
  );
  collector.on("collect", async (msg) => {
    const resultat = msg.content;

    if (nombre === resultat) {
      message.channel.send("Bravo");
      collector.stop();
    }
    if (nombre < resultat) {
      message.channel.send("Plus petit");
    }
    if (nombre > resultat) {
      message.channel.send("Plus grand");
    }
  });
};
module.exports.help = {
  name: "bingo",
};

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
