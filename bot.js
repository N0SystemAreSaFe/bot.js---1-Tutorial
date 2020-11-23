const Discord = require('discord.js');

const events = require('events').EventEmitter.defaultMaxListeners = 0;

const client = new Discord.Client();

client.on('ready', () => {
    console.log('Created by BerrV'); // if you want you can change this Если хотите меняете 
});

client.on("guildMemberAdd", (member) => { 
    let guild = member.guild; 
    let memberid = member.user.id; 
    const channel = client.channels.cache.get(''); // CopyID of the welcome channel ИД для Приветствие
        channel.send(new Discord.MessageEmbed() 
        .setTitle("Welcome!")
        .setColor('#00c09a')
        .setImage('https://media.discordapp.net/attachments/704377716530741249/762344069174919208/customerguarantee.png?width=352&height=259')
        .setDescription("<@" + memberid + "> Joined!") 
        .setThumbnail(member.user.avatarURL())
        .addField("Members:", member.guild.memberCount) 
        .setTimestamp()
        );
     }
     );

client.on('message', message => {
    if (message.content === '!testjoin') {
        client.emit('guildMemberAdd', message.member);
    }
});

client.on('message', message => {
    if (message.content === '!testremove') {
        client.emit('guildMemberRemove', message.member);
    }
});


client.on("guildMemberRemove", (member) => { 
    let guild = member.guild; 
    let memberid = member.user.id; 
    const channel = client.channels.cache.get(''); // CopyID of the goodbye channel ИД для прошание
        channel.send(new Discord.MessageEmbed() 
        .setTitle("Goodbye!")
        .setColor('#00c09a')
        .setImage('https://media.discordapp.net/attachments/704377716530741249/762344069174919208/customerguarantee.png?width=352&height=259')
        .setDescription("<@" + memberid + "> присоединился") 
        .setThumbnail(member.user.avatarURL())
        .addField("Members:", member.guild.memberCount) 
        .setTimestamp()
        );
     }
     );


client.login(''); // Put your token here Ваш токен сюда 
