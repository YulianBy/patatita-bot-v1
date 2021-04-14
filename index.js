const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");


client.on('ready', () => {
    client.user.setActivity('Tik Tok de Melany | https://discord.gg/Q252kR6Jvf', {type: 'WATCHING'});
    console.log('Listo!');

});

client.on('ready', () => {
    var generalChannel = client.channels.cache.get("823606155657871390")
    generalChannel.send("Patata Bot Actualizado Correctamente!")
  
  });

var prefix = config.prefix;

client.on('message', message => {
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    let texto = args.join(" ");
        if(command === 'decir'){
        if(!texto) return message.channel.send(`Escribe un contenido pára decir.`);
        message.channel.send(texto);
    
    }

    if(command === 'kick' ){

        let user = message.mentions.users.first();
        let razon = args.slice(1).join(' ');
        
        if (message.mentions.users.size < 1) return message.reply('Debes mencionar a alguien.').catch(console.error);
        if (!razon) return message.channel.send('Escriba una razón, `-kick @username [razón]`');
        if (!message.guild.member(user).kickable) return message.reply('No puedo kickear al usuario mencionado.');
         
        message.guild.member(user).kick(razon);
        message.channel.send(`**${user.username}**, fue pateado del servidor, razón: ${razon}.`);
    
    }

    if(command === '8ball'){
        var rpts = ["Sí", "No", "¿Por qué?", "Por favor", "Tal vez", "No sé", "Definitivamente", " ¡Claro! "," Sí ", " Por supuesto! "," Por supuesto que no "];
        if (!texto) return message.reply(`Escribe una pregunta.`);
        message.channel.send('Tu Pregunta es: `'+texto+'` \nMi respuesta es: `'+ rpts[Math.floor(Math.random() * rpts.length)]+'`');
    
    }

    if (message.content.startsWith(prefix+"ping")) {
        let ping = Math.floor(message.client.ws.ping);
        message.channel.send(':ping_pong: `'+ping+' ms.` desde heroku.'); 

    } else if (message.content.startsWith(prefix+"help")) {
        message.channel.send('Actualmente Me Encuentro en Desarrollo\nPor el momento puedes usar: p!comandos');
    
    } else if (message.content.startsWith(prefix+"servidor")) {
        message.channel.send(`Nombre del Servidor: ${message.guild.name}\nEl Numero de Miembros es: ${message.guild.memberCount}`);

    }  else if (message.content.startsWith(prefix+"tiktok")) {
        message.channel.send("Puedes encontrar a Mel en tiktok acá: https://www.tiktok.com/@mel_any05?lang=es%22");
    
    } else if (message.content.startsWith(prefix+"comandos")) {
        message.channel.send({embed: {
            color: 3447003,
            title: "Mis comandos:",
            description: "Hola! Estos son mis comandos actuales:\n 1. help \n 2. ping \n 3. tiktok \n 4. mi-info \n 5. servidor\n 6. status\n 7. owners\n 8. 8ball\n 9. server",
            footer: {
                text: 'Recuerda que mi prefix es: **p!**',
            },
        }})
    
    } else if (message.content.startsWith(prefix+"owners")) {
        message.channel.send({embed: {
            color: 3447003,
            title: "Owners",
            description: "Estos son mis creadores:\n@! YulianTRB#2608\n@TheDangerousGT#3206"
        }})
    
    } else if (message.content.startsWith(prefix+"status")) {
        message.channel.send({embed: {
            color: 3447003,
            title: "Bot Status",
            description: `Hola!\n**Actualmente me encuentro en:** ${client.guilds.cache.size} **Servers**\n**Viendo** ${client.channels.cache.size} **Canales**\n**Con** ${client.users.cache.size} **Personas**\n*Bot en Fase Beta*`,
        }})
    
    } 
    
});

client.login(config.token); 
