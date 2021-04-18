const fs = require('fs');
const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	
    client.commands.set(command.name, command);
}


client.on('ready', () => {
    client.user.setActivity('Tik Tok de Melany | https://discord.gg/Q252kR6Jvf', {type: 'WATCHING'});
    console.log('Estoy Listo Bro!');

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
        message.channel.send({embed: {
            color: 3447003,
            title: "Ayuda!",
            fields: [
                {
                name: "Comandos",
                value: "Usa: p!commands para ver todos mis comandos disponibles",
                },
            ],
        }})
    
    } else if (message.content.startsWith(prefix+"servidor")) {
        message.channel.send(`Nombre del Servidor: ${message.guild.name}\nEl Numero de Miembros es: ${message.guild.memberCount}`);

    }  else if (message.content.startsWith(prefix+"tiktok")) {
        message.channel.send("Puedes encontrar a Mel en tiktok acá: https://www.tiktok.com/@mel_any05?lang=es%22");
    
    }  else if (message.content.startsWith(prefix+"owners")) {
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
    
    } else if (message.content.startsWith(prefix+"invite")) {
        message.channel.send({embed: {
            color: 3447003,
            title: "Invitame a tu Server:",
            description: "https://discord.com/oauth2/authorize?client_id=821390039409885184&scope=bot&permissions=2147483647",
        }})

    }  else if (message.content.startsWith(prefix+"commands")) {
        message.channel.send({embed: {
            color: 3557003,
            title: "Comandos",
            description: "Estos son mis comandos actuales:",
            thumbnail: {
                url: 'https://st.depositphotos.com/1734074/4225/v/600/depositphotos_42256725-stock-illustration-vector-command-line-icon.jpg',
            },
            fields: [
                {
                    name: 'Diversión',
                    value: '1. 8ball\n2. tiktok',
                },
                {
                    name: 'Interezantes',
                    value: '1. mi-info\n2. servidor\n3. status\n4. botinfo',
                },
                {
                    name: 'Invite',
                    value: '1. invite',
                },
                {
                    name: 'Extras',
                    value: '1. owners\n2. afk\n3. support\n4. help',
                },
            ],
            footer: {
                text: 'Recuerda que mi prefix es: p! / Pronto habran mas comandos!'
            },
        }})

    } else if (message.content.startsWith(prefix +"support")){
        message.channel.send({embed: {
          color: 3447003,
          tittle: "Support Server",
          description: "Te puedes unir a nuestro servidor de soporte y comunidad acá:\nhttps://discord.gg/q3PVPmaZ6c",
        }})
    
    } else if (message.content.startsWith(prefix+"botinfo")) {
        message.channel.send({embed: {
            color: 16580352,
            title: "Bot Info!",
            description: "Aquí esta mi información mas interesante owo:",
            fields: [
                {
                    name: 'Developers',
                    value: '@『𝐓𝐡𝐞𝐃𝐚𝐧𝐠𝐞𝐫𝐨𝐮𝐬𝐆𝐓』❌#3206 & @! YulianTRB#2608',
                },
                {
                    name: 'Ayudantes',
                    value: 'NONE',
                },
                {
                    name: 'Servers',
                    value: `${client.guilds.cache.size}`
                },
                {
                    name: 'Usuarios',
                    value: `${client.users.cache.size}`,
                },
                {
                    name: 'Ram',
                    value: `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`,
                },
                {
                    name: 'Lenguaje',
                    value: 'JavaScript',
                },
                {
                    name: 'Librería',
                    value: 'Discord.js v12.2.0',
                },
            ],
        }})
    
    } 
    
});

client.login(config.token); 
