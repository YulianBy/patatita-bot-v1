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
        message.channel.send(':ping_pong: `'+ping+' ms.` desde mi portal de desarrollo.'); 

    }

});

client.on('message', message => {
    if (message.content.startsWith(prefix+"help")) {
        let ping = Math.floor(message.client.ws.ping);
        message.channel.send('𝐀𝐂𝐓𝐔𝐀𝐋𝐌𝐄𝐍𝐓𝐄 𝐌𝐄 𝐄𝐍𝐂𝐔𝐄𝐍𝐓𝐑𝐎 𝐄𝐍 𝐃𝐄𝐒𝐀𝐑𝐑𝐎𝐋𝐋𝐎'); 

    }

});

client.on('message', message => {
    if (message.content.startsWith(prefix+"tiktok")) {
        let ping = Math.floor(message.client.ws.ping);
        message.channel.send('El tik tok de Melany lo puedes encontrar acá: https://www.tiktok.com/@mel_any05?lang=es'); 

    }

});


client.login(process.env.TOKEN);  
