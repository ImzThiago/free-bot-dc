const Discord = require('discord.js');
const config = require('./config.json')
const bot = new Discord.Client();



bot.on('ready', message => {
console.log("Olá Mundo!")
})

bot.on("message", async message => {
  
  let args = message.content.split(" ");
  let prefix = config.prefix;
  
  
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
