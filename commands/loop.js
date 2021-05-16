const { canModifyQueue } = require("../util/EvobotUtil");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "tekrarla",
  aliases: ["loop"],
  description: "Oynatılan Müziği Tekrar Ettirmesini Sağlarsınız.",
  execute(message) {
    const queue = message.client.queue.get(message.guild.id);
    if (!queue) return message.channel.send(new MessageEmbed().setColor('RED').setDescription("Hey! Şuanda Herhangi Bir Müzik Oynatılmıyor.")).catch(console.error);
    if (!canModifyQueue(message.member)) return;

    // toggle from false to true and reverse
    queue.loop = !queue.loop;
    return queue.textChannel.send(new MessageEmbed().setColor('BLUE').setDescription(`BAŞARILI! Müzik Tekrar Etmesi Başarıyla ${queue.loop ? "Açıldı" : "Kapatıldı"}`)).catch(console.error);
  }
};
