const Discord = require("discord.js");
const superagent = require("superagent")
module.exports.run = async (bot, message, args) => {
 
  {
        const { body } = await superagent.get(`https://random.dog/woof.json`);
    
      
        let DogEmbed = new Discord.MessageEmbed()
        .setColor("RANDOM")
         .setTitle(`:dog: Image de chien ${message.author.username} :`)
        .setImage(body.url)
       
    
        message.channel.send(DogEmbed).catch((err) => {
                if(err) {
                 console.log(err) 
             var error = new Discord.MessageEmbed()
      .setDescription("Une erreur est survenue ! Nous vous prions de nous excuser !")
                  message.channel.send(error)
    }
   })
    }
}
module.exports.help = {
    name: "dog"
}