const Discord = require('discord.js');
const config = require('./config.json')
const bot = new Discord.Client();

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



}
  
})
bot.login(config.token)
