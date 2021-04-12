const Discord = require('discord.js');
const client = new Discord.Client();

let prefix = process.env.PREFIX;

client.on('ready', () => {
    client.user.setActivity('Tik Tok de Melany | https://discord.gg/Q252kR6Jvf', {type: 'WATCHING'});
    console.log('Listo!');

});

client.on('message', message => {
    if (message.content.startsWith(prefix+"ping")) {
        let ping = Math.floor(message.client.ws.ping);
        message.channel.send(':ping_pong: `'+ping+' ms.` desde heroku.'); 

    } else if (message.content.startsWith(prefix+"help")) {
        message.channel.send('Actualmente Me Encuentro en Desarrollo\nPor el momento puedes usar: p!comandos');
    
    } else if (message.content.startsWith(prefix+"servidor")) {
        message.channel.send(`Nombre del Servidor: ${message.guild.name}\nEl Numero de Miembros es: ${message.guild.memberCount}`);

    } else if (message.content.startsWith(prefix+"mi-info")) {
        message.channel.send(`Tu Nombre de Usuario es: ${message.author.username}\nTu ID Es: ${message.author.id}`);

    } else if (message.content.startsWith(prefix+"tiktok")) {
        message.channel.send("Puedes encontrar a Mel en tiktok acá: https://www.tiktok.com/@mel_any05?lang=es%22");
    
    } else if (message.content.startsWith(prefix+"comandos")) {
        message.channel.send({embed: {
            color: 3447003,
            title: "Mis comandos:",
            description: "Hola! Estos son mis comandos actuales:\n 1. help \n 2. ping \n 3. tiktok \n 4. mi-info \n 5. servidor",
            footer: {
                text: 'Recuerda que mi prefix es: **p!**',
            },
        }})
    } 
});

client.login(process.env.TOKEN);  
