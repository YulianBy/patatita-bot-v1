const Discord = require('discord.js');
const client = new Discord.Client();

let prefix = process.env.PREFIX;

client.on('ready', () => {
    client.user.setActivity('Viendo Tik Tok de Melany | https://discord.gg/Q252kR6Jvf', {type: 'WATCHING'});
    console.log('Listo!');

});

client.on('message', message => {
    if (message.content.startsWith(prefix+"ping")) {
        let ping = Math.floor(message.client.ws.ping);
        message.channel.send(':ping_pong: `'+ping+' ms.` desde heroku.'); 

    }

});

client.on('message', message => {
    if (message.content.startsWith(prefix+"help")) {
        let ping = Math.floor(message.client.ws.ping);
        message.channel.send('**AÚN ESTOY EN DESARROLLO, PROGRAMADORES TRABAJANDO EN MI**'); 

    }

});

client.login(process.env.TOKEN);  
