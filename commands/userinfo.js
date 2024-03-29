const Discord = require("discord.js");
const moment = require("moment");
let fs = require("fs");

module.exports.run = async (bot, message, args) => {
  const botconfig = require("../botconfig.json");
  if (!message.content.startsWith(botconfig.prefix)) return;

  var membre = message.member;
  var contenu = args[0];

  var user_info_non_rp = new Discord.MessageEmbed()

    .setTitle(`Statistique de l'utilisateur **${membre.user.username}** :`)
    .setThumbnail(membre.user.displayAvatarURL({ dynamic: true, size: 512 }))
    .addField("ID de l'utilisateur :", membre.id, true)
    .addField(
      "Compte utilisateur crée le :",
      moment.utc(membre.user.createdAt).format("LLLL"),
      true
    )
    .addField(
      "L'utilisateur joue à :",
      membre.user.presence.game ? membre.user.presence.game.name : "Aucun jeu",
      true
    )
    .addField(
      "L'utilisateur à rejoint le serveur le :",
      moment.utc(membre.joinedAt).format("LLLL"),
      true
    )
    .setColor("0xe43333")
    .setFooter("Pour avoir vos informations RP faites -user-info rp.");

  if (contenu === "rp") {
    message.channel
      .send("Recherche de la base de donnée.")
      .then(function (recup) {
        const data = JSON.parse(fs.readFileSync("./userinfo.json"));
        recup.edit(`Vérification des permissions de ${membre.username}..`);
        if (!data[message.author.id]) {
          recup.delete();
          message.channel.send(
            "Vous ne posséder pas de profil RP.",
            user_info_non_rp
          );
        }
        recup.edit(
          `Création des variables de l'utilisateur... Ce processus peut durer quelque secondes.`
        );

        var uCoins = data[membre.id].coins;
        var uPouvoir = data[membre.id].pouvoir;
        var uTravail = data[membre.id].travail;
        var uRapidité = data[membre.id].rapidité;
        var uPuissance = data[membre.id].puissance;
        var uSexe = data[membre.id].sexe;
        var uNom = data[membre.id].nom;
        var uAge = data[membre.id].age;

        var user_info_rp = new Discord.MessageEmbed()

          .setTitle(`Information de ${uNom}.`)
          .addField(
            "**Pouvoir** :",
            `Catégorie : ${uPouvoir} \nRapidité : ${uRapidité} \nPuissance : ${uPuissance}`,
            true
          )
          .addField(
            "**Physique** :",
            `Nom : ${uNom} \nSexe : ${uSexe} \nÂge : ${uAge}`,
            true
          )
          .addField(
            "**Profession** :",
            `Travail : ${uTravail} \nArgent : ${uCoins}`,
            true
          )
          .setColor("#01FEDC");

        recup.edit("Voici votre profil RP :", user_info_rp);
      });
  } else {
    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.channel.send(
        "Vous n'avez pas la permission d'utiliser cette commande."
      );

    message.channel.send(user_info_non_rp);

    console.log(
      "La commande info-user a été utilisé par " +
        message.author.username +
        " dans le salon " +
        message.channel.name +
        " !"
    );
  }
};
module.exports.help = {
  name: "user-info",
};
