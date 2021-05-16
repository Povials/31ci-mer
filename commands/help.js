const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "yardım",
  aliases: ["help"],
  description: "Botun yardım menüsünü atar.",
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
      .setTitle(`Fyodor Müzik Botunun Yardım Menüsü`)
      .setColor("RANDOM")
    
    commands.forEach((cmd) => {helpEmbed.addField(`**${message.client.prefix}${cmd.name}  ${cmd.aliases ? `(${cmd.aliases})` : ""}**`,`${cmd.description}`,true);
    });

    helpEmbed.setTimestamp();

    return message.channel.send(helpEmbed).catch(console.error);
  }
};