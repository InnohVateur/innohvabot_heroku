const { MessageEmbed } = require('discord.js');

module.exports = {
    name : 'kick',
    description: 'Expulser un membre du serveur.',
    permissions:['KICK_MEMBERS'],
    category:'modération',
    ownerOnly:false,
    usage:'kick [@Utilisateur visé] [raison]',
    examples:['kick @DonSpiration n\'aime pas les frites'],
    hasPermissions:true,
    async run(client, message, args, guildSettings){
        if(args[0]) return message.channel.send('Spécifiez un membre à expulser, merci.');
        if(args[1]) return message.channel.send('Spécifiez la raison de l\'expulsion, merci.');

        const target = message.mentions.members.find(m => m.id);
        const reason = args.slice(1).join(' ');

        if(!target.kickable) return message.channel.send('Vous ne pouvez pas expulser ce membre...');
        target.kick(reason);
        const logChannel = client.channels.cache.get(guildSettings.logChannel);
        const logEmbed = new MessageEmbed()
            .setTitle('Un membre c\'est fait expulser du serveur')
            .setDescription(`Le membre ${target.user.tag} (${target.id}) s'est fait expulsé avec la raison ${reason}`)
            .setColor('YELLOW')
            .setFooter({text:'Un membre s\'est fait expulsé du serveur'})
            .setTimestamp();
        logChannel.send({embeds: [logEmbed]});
    },
    options:[
        {
            name:'target',
            description:'Choisissez un utilisateur à expulser',
            type:'USER',
            required:true
        },
        {
            name:'reason',
            description:'Choisissez une raison d\'expulsion',
            type:'STRING',
            required:true
        }
    ],
    async runInteraction(client, interaction, guildSettings){
        const target = interaction.options.getMember('target');
        const reason = interaction.options.getString('reason');
        if(!target.kickable) return interaction.reply({content:'Vous ne pouvez pas expulser ce membre...', ephemeral:true});
        target.kick(reason);
        interaction.reply({content:'Membre expulsé avec succès !', ephemeral:true});
        const logChannel = client.channels.cache.get(guildSettings.logChannel);
        const logEmbed = new MessageEmbed()
            .setTitle('Un membre c\'est fait expulsé du serveur')
            .setDescription(`Le membre ${target.user.tag} (${target.id}) s'est fait expulsé avec la raison ${reason}`)
            .setColor('YELLOW')
            .setFooter({text:'Un membre s\'est fait expulsé du serveur'})
            .setTimestamp();
        logChannel.send({embeds: [logEmbed]});
    }
}