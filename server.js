const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const Canvas = require("canvas");
const snekfetch = require("snekfetch");
const bot = new Discord.Client();
const prefix = botconfig.prefix;
const client = bot;
const Enmap = require("enmap");
client.cooldownRoll = new Enmap({ name: "work" });

const express = require("express");
const app = express();

app.get("/", (request, response) => {
  console.log("Ping reçu !");
  response.sendStatus(200);
});

// listen for requests :)
const listener = app.listen(process.env.PORT, function () {
  console.log("Le bot tourne sur le port " + listener.address().port);
});

module.exports = { app };

bot.commands = new Discord.Collection();
const fs = require("fs");

function loadCmds() {
  fs.readdir("./commands/", (err, files) => {
    if (err) console.log(err);
    let jsfile = files.filter((f) => f.split(".").pop() === "js");
    if (jsfile.length <= 0) {
      console.log("Je ne trouve pas de commande !");
      return;
    }

    jsfile.forEach((f, i) => {
      delete require.cache[require.resolve(`./commands/${f}`)];
      let props = require(`./commands/${f}`);
      console.log(`${f} loaded!`);
      bot.commands.set(props.help.name, props);
    });
  });
}

loadCmds();
bot.on("message", (message) => {
  if (message.content === prefix + "reload") {
    if ((message.author.id !== "435104377439780866", "282180259615342592"))
      message.delete();

    message.channel.send(
      "Charging...\n**___Charging.Reload.exe___** \nLes commandes ont été redémarrer !"
    );
    loadCmds();
  }
});

bot.on("ready", async () => {
  console.log(`${bot.user.username} est en ligne !`);
  setInterval(changing_status, 15000);

  var serveur = bot.guilds.size;
  function changing_status() {
    let status = [
      `Il y a ${bot.users.cache.size} membres sur le serveur.`,
      "-help | V1.4.7",
    ];
    let random = status[Math.floor(Math.random() * status.length)];
    bot.user.setActivity(random, {
      type: "STREAMING",
      url: "https://www.twitch.tv",
    });
    // bot.user.setStatus("dnd")
    // bot.user.setActivity("Ne pas utiliser !")
  }
});

bot.on("message", async (message) => {
  if (message.channel.type == "dm") {
    let send_server = bot.guild.cache.get("632954061058211892");
    const send_channel = send_server.channels.cache.find(
      (ch) => ch.id === "693129364782579772"
    );
    let idbot = ["617740950533439491"];
    if (!idbot.includes(message.author.id)) {
      var texte = new Discord.MessageEmbed().addField(
        `${message.author.username} (${message.author.id})`,
        `${message.content}`
      );

      send_channel.send(texte);
    }
  }
});

bot.on("message", async (message) => {
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if (commandfile) commandfile.run(bot, message, args);
});

bot.login("///////////");
