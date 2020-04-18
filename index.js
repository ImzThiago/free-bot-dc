const Discord = require('discord.js');
const config = require('./config.json')
const bot = new Discord.Client();
const moment = require('moment')
moment.locale('pt-BR')

//Qualquer duvida fale comigo no meu Discord: Anjo Dos Pandas#2020

bot.on('ready', message => {
console.log("Olá Mundo!")
bot.user.setPresence("Estou online!", type: "PLAYING")
})

bot.on("message", async message => {
  
  let args = message.content.split(" ");
  let prefix = config.prefix;
  
  //Anti-Invite DISCORD
  if(message.content.includes('discord.gg/')){
  message.delete()
    message.channel.send( + " Hey! você não pode divulgar convites de outros servidores.")
}
 
  
  
  if(message.content.startsWith(prefix + "botinfo")){
  message.channel.send({embed:
  color: 0x00ff00,
  author: {
  name: bot.user.username,
  icon_url: bot.user.avatarURL
},
  title: "Informações do Bot",
  description: `Criador: <@SeuID>\nPrefix: ${prefix}\nUsuarios: ${bot.users.size}\nServidores: ${bot.guilds.size}\nCanais: ${bot.channels.size}`,
  timestamp: new Date.now();
  footer: {
  icon_url: bot.user.avatarURL,
  text: 'BotInfo'
}
})

if(message.content.startsWith(prefix + "kick")){
if(!message.member.hasPermission(["KICK_MEMBERS"])) return message.channel.send(message.author + " você precisar ter a permissão de kickar membros.");
  let usuario = message.mentions.members.first();
  if(!usuario) return message.channel.send("Esse usuario não está disponivel.");
   
  let motivo = args.slice(1).join(" ");
  if(!motivo) motivo = "Não Informado";
  let msgkick = new Discord.RichEmbed()
  .setTitle(usuario.user.username + " | Expulso")
  .setThumbnail(usuario.user.avatarURL)
  .addField("Autor:", message.author, true)
  .addField("Motivo:", motivo, true)
  .addField("Quando:", moment(message.createdAt).format("LLLL"), true)
  .setFooter("Nome do seu bot - Kick")
  .setTimestamp()
  let canal = message.guild.channels.find("name", "[nome do canal de punições ou o que você achar melhor]");
  if(!canal) return message.channel.send("Não foi possivel encontrar o canal onde será enviado a mensagem de punição.")
  canal.send(msgkick)
  usuario.kick("Usuario expulso pelo motivo: " + motivo)
  message.channel.send("O usuario foi expulso com sucesso!")
}

}
  
})
bot.login(config.token)
