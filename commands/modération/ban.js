const { MessageEmbed } = require('discord.js');

module.exports = {
    name : 'ban',
    description: 'Bannir définitivement/temporairement un membre du serveur',
    permissions:['KICK_MEMBERS','BAN_MEMBERS'],
    category:'modération',
    ownerOnly:false,
    usage:'ban [@Utilisateur visé] ["perm"/nombre de jours] [raison]',
    examples:['ban @DonSpiration 365 DETESTE LA RACLETTE', 'ban @InnohVateur perm REBELLION DES ROBOTS !'],
    hasPermissions:true,
    async run(client, message, args, guildSettings){
        if(args[0]) return message.channel.send('Spécifiez un membre à bannir, merci.');
        if(args[1]) return message.channel.send('Spécifiez la durée du bannissement ou "perm" pour bannir définitivement, merci.');
        if(args[2]) return message.channel.send('Spécifiez la raison du bannissement, merci.');
        const target = message.mentions.members.find(m => m.id);
        const duration = parseInt(args[1]);
        const reason = args.slice(2).join(' ');
        if(duration == 'perm'){
            if(!target.bannable) return message.channel.send({content:'Vous ne pouvez pas bannir ce membre...', ephemeral:true});
            target.ban({reason});
            message.channel.send({content:'Membre bannis avec succès !', ephemeral:true});
            const logChannel = client.channels.cache.get(guildSettings.logChannel);
            const logEmbed = new MessageEmbed()
                .setTitle('Un membre c\'est fait bannir du serveur')
                .setDescription(`Le membre ${target.user.tag} (${target.id}) s'est fait bannir définitivement avec la raison ${reason}`)
                .setColor('YELLOW')
                .setFooter({text:'Un membre s\'est fait bannir du serveur'})
                .setTimestamp();
            logChannel.send({embeds: [logEmbed]});
        }else if(parseInt(duration)){
            if(!target.bannable) return message.channel.send({content:'Vous ne pouvez pas bannir ce membre...', ephemeral:true});
            if(convertedDuration<=0 || convertedDuration>7) return message.channel.send('Vous devez choisir un nombre entre 1 et 7');
            target.ban({days:convertedDuration, reason:reason});
            message.channel.send({content:'Membre bannis avec succès !', ephemeral:true});
            const logChannel = client.channels.cache.get(guildSettings.logChannel);
            const logEmbed = new MessageEmbed()
                .setTitle('Un membre c\'est fait bannir du serveur')
                .setDescription(`Le membre ${target.user.tag} (${target.id}) s'est fait bannir pendant ${duration} jours avec la raison ${reason}`)
                .setColor('YELLOW')
                .setFooter({text:'Un membre s\'est fait bannir du serveur'})
                .setTimestamp();
            logChannel.send({embeds: [logEmbed]});
        }else{
            message.channel.send('Argument inconnu !')
        }
    },
    options:[
        {
            name:'target',
            description:'Choisissez un utilisateur à bannir',
            type:'USER',
            required:true
        },
        {
            name:'duration',
            description:'La durée du bannissement en jours (\'perm\' pour bannissement définitif)',
            type:'STRING',
            required:true
        },
        {
            name:'reason',
            description:'Choisissez une raison de bannissement',
            type:'STRING',
            required:true
        }
    ],
    async runInteraction(client, interaction, guildSettings){
        const target = interaction.options.getMember('target');
        const duration = interaction.options.getString('duration');
        const reason = interaction.options.getString('reason');
        if(duration == 'perm'){
            if(!target.bannable) return interaction.reply({content:'Vous ne pouvez pas bannir ce membre...', ephemeral:true});
        target.ban({reason});
        interaction.reply({content:'Membre bannis avec succès !', ephemeral:true});
        const logChannel = client.channels.cache.get(guildSettings.logChannel);
        const logEmbed = new MessageEmbed()
            .setTitle('Un membre c\'est fait bannir du serveur')
            .setDescription(`Le membre ${target.user.tag} (${target.id}) s'est fait bannir définitivement avec la raison ${reason}`)
            .setColor('YELLOW')
            .setFooter({text:'Un membre s\'est fait bannir du serveur'})
            .setTimestamp();
        logChannel.send({embeds: [logEmbed]});
        }else if(parseInt(duration)){
            const convertedDuration = parseInt(duration);
            if(!target.bannable) return interaction.reply({content:'Vous ne pouvez pas bannir ce membre...', ephemeral:true});
            if(convertedDuration<=0 || convertedDuration>7) return interaction.reply({content:'Vous devez choisir un nombre entre 1 et 7', ephemeral:true});
            target.ban({days:convertedDuration, reason:reason});
            interaction.reply({content:'Membre bannis avec succès !', ephemeral:true});
            const logChannel = client.channels.cache.get(guildSettings.logChannel);
            const logEmbed = new MessageEmbed()
                .setTitle('Un membre c\'est fait bannir du serveur')
                .setDescription(`Le membre ${target.user.tag} (${target.id}) s'est fait bannir pendant ${duration} jours avec la raison ${reason}`)
                .setColor('YELLOW')
                .setFooter({text:'Un membre s\'est fait bannir du serveur'})
                .setTimestamp();
            logChannel.send({embeds: [logEmbed]});
        }else{
            interaction.reply({content:'Argument inconnu !', ephemeral:true});
        }
    }
}