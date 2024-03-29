const Discord = require("discord.js");
const superagent = require("superagent")
module.exports.run = async (bot, message, args) => {
 
  {
        const { body } = await superagent.get(`http://aws.random.cat/meow`);
    
      
        let embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
         .setTitle(`:cat: Image de chat ${message.author.username} :`)
          .setImage(body.file)
       
    
        message.channel.send(embed).catch((err) => {
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
    name: "cat"
} 