const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('ready', async() => {
var server = "503168648068726796"; // ايدي السررفر
var channel = "503168648677163029";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('**Naz Naz Naz Naz Naz Naz Naz Naz Naz Naz Naz Naz Naz Naz Naz Naz Naz Naz Naz Naz Naz Naz Naz Naz Naz Naz Naz Naz Naz Naz Naz Naz Naz Naz Naz Naz Naz Naz Naz Naz Naz Naz Naz Naz Naz Naz Naz Naz Naz Naz Naz Naz Naz Naz Naz Naz Naz Naz Naz Naz **')
    },305);
})

client.login(process.env.BOT_TOKEN);
