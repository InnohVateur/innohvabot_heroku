const { MessageActionRow, MessageEmbed, MessageButton } = require('discord.js');


module.exports = {
    name : 'rolereact',
    description: 'Envoie l\'embed de roles optionnels du serveur',
    permissions:['ADMINISTRATOR'],
    ownerOnly:true,
    usage:'rolereact',
    hasPermissions:true,
    examples:['verif'],
    category:'modération',
    async run(client, message, args){
        const selects = new MessageActionRow()
        .addComponents(
            new MessageButton()
                .setCustomId('annonces')
                .setLabel('Annonces')
                .setEmoji('📖')
                .setStyle(message.member.roles.cache.get('967469365580693544')?'PRIMARY':'SECONDARY'),
            new MessageButton()
                .setCustomId('pubs')
                .setLabel('Publicités')
                .setEmoji('💸')
                .setStyle(message.member.roles.cache.get('967469365580693544')?'PRIMARY':'SECONDARY'),
            new MessageButton()
                .setCustomId('giveaways')
                .setLabel('Jeux-concours')
                .setEmoji('🎉')
                .setStyle(message.member.roles.cache.get('967469365580693544')?'PRIMARY':'SECONDARY'),
        )

        const embed = new MessageEmbed()
            .setTitle('Rôles additionnels')
            .setDescription("Afin d'éviter le plus possible la mention `@everyone`, nous mettons en place un système de rôles de notifications. A ce jour, trois rôles sont disponibles : @Notifs-annonces, pour recevoir toutes les annonces, @Notifs-pubs, pour être tenus au courant des offres intéressantes des joueurs de NationsGlory et @Notifs-giveaways, pour ne manquer aucun des jeux-concours organisés par l'équipe d'InnohvaCorp !")
            .setColor('#1F4629')
            .setFooter({text:"Cordialement, l'équipe de modération", iconURL:message.guild.iconURL()});
        await message.channel.send({embeds: [embed], components: [selects]});
    },
    async runInteraction(client, interaction){
        const selects = new MessageActionRow()
        .addComponents(
            new MessageButton()
                .setCustomId('annonces')
                .setLabel('Annonces')
                .setEmoji('📖')
                .setStyle(interaction.member.roles.cache.get('967469365580693544')?'PRIMARY':'SECONDARY'),
            new MessageButton()
                .setCustomId('pubs')
                .setLabel('Publicités')
                .setEmoji('💸')
                .setStyle(interaction.member.roles.cache.get('967469498875658240')?'PRIMARY':'SECONDARY'),
            new MessageButton()
                .setCustomId('giveaways')
                .setLabel('Jeux-concours')
                .setEmoji('🎉')
                .setStyle(interaction.member.roles.cache.get('967469559839862784')?'PRIMARY':'SECONDARY'),
        )
        const embed = new MessageEmbed()
            .setTitle('Rôles additionnels')
            .setDescription("Afin d'éviter le plus possible la mention `@everyone`, nous mettons en place un système de rôles de notifications. A ce jour, trois rôles sont disponibles : @Notifs-annonces, pour recevoir toutes les annonces, @Notifs-pubs, pour être tenus au courant des offres intéressantes des joueurs de NationsGlory et @Notifs-giveaways, pour ne manquer aucun des jeux-concours organisés par l'équipe d'InnohvaCorp !")
            .setColor('#1F4629')
            .setFooter({text:"Cordialement, l'équipe de modération", iconURL:interaction.guild.iconURL()});
        await interaction.send({embeds: [embed], components: [selects]});
    }
}