const { MessageEmbed } = require('discord.js');
const ms = require('ms');

module.exports = {
    name : 'mute',
    description: 'Réduits temporairement un membre du serveur au silence',
    permissions:['MODERATE_MEMBERS'],
    category:'modération',
    ownerOnly:false,
    usage:'mute [target] [duration] [reason]',
    examples:['mute @DonSpiration 1y SI les lasagnes c\'est bon !', 'mute @InnohVateur 3h I\'ll be back !'],
    hasPermissions:true,
    async run(client, message, args, guildSettings){
        if(args[0]) return message.channel.send('Spécifiez un membre à mute, merci.');
        if(args[1]) return message.channel.send('Spécifiez la durée du mute ou "perm" pour bannir définitivement, merci.');
        if(args[2]) return message.channel.send('Spécifiez la raison du mute, merci.');
        const target = message.mentions.members.find(m => m.id);
        const duration = args[1];
        const reason = args.slice(2).join(' ');
        const convertedDuration = ms(duration);
        if(!convertedDuration) return message.channel.send('Veuillez rentrer une durée valide (nombre + s/m/h/d/y)')

        if(!target.moderatable) return message.channel.send('Vous ne pouvez pas réduire au silence ce membre...');

        target.timeout(convertedDuration, reason);
        message.channel.send(`Le membre ${target} a bien été mute !`);
        const logChannel = client.channels.cache.get(guildSettings.logChannel);
        const logEmbed = new MessageEmbed()
            .setTitle('Un membre c\'est fait mute sur le serveur')
            .setDescription(`Le membre ${target} (${target.id}) s'est fait mute pendant ${convertedDuration} avec la raison ${reason}`)
            .setColor('YELLOW')
            .setFooter({text:'Un membre s\'est fait mute sur le serveur'})
            .setTimestamp();
        logChannel.send({embeds: [logEmbed]});
        
    },
    options:[
        {
            name:'target',
            description:'Choisissez un utilisateur à mute',
            type:'USER',
            required:true
        },
        {
            name:'duration',
            description:'La durée du mute en format chiffre + s/m/h/d/y',
            type:'STRING',
            required:true
        },
        {
            name:'reason',
            description:'Choisissez une raison de mute',
            type:'STRING',
            required:true
        }
    ],
    async runInteraction(client, interaction, guildSettings){
        const target = interaction.options.getMember('target');
        const duration = interaction.options.getString('duration');
        const reason = interaction.options.getString('reason');
        const convertedDuration = ms(duration);
        if(!convertedDuration) return interaction.reply({content:'Veuillez rentrer une durée valide (nombre + s/m/h/d/y)', ephemeral:true})

        if(!target.moderatable) return interaction.reply({content:'Vous ne pouvez pas réduire au silence ce membre...', ephemeral:true});

        target.timeout(convertedDuration, reason);
        interaction.reply(`Le membre ${target} a bien été mute !`);
        const logChannel = client.channels.cache.get(guildSettings.logChannel);
        const logEmbed = new MessageEmbed()
            .setTitle('Un membre c\'est fait mute sur le serveur')
            .setDescription(`Le membre ${target} (${target.id}) s'est fait mute pendant ${convertedDuration} avec la raison ${reason}`)
            .setColor('YELLOW')
            .setFooter({text:'Un membre s\'est fait mute sur le serveur'})
            .setTimestamp();
        logChannel.send({embeds: [logEmbed]});
    }
}