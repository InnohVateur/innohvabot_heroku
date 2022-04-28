const { MessageEmbed } = require('discord.js');

module.exports = {
    name : 'pollinfo',
    permissions:[],
    category:'informations',
    ownerOnly:false,
    usage:'pollinfo',
    examples:['pollinfo'],
    hasPermissions:false,
    description: 'Informations utils au salon #uservoice',
    run: (client, message, args) => {
        const embed = new MessageEmbed()
            .setFooter({text: `L'équipe d'InnohvaCorp`})
            .setTitle("Salon #😶-uservoice")
            .setDescription("Bienvenue sur le salon uservoice ! Ici vous pouvez utiliser envoyer vos sondages à l'aide de la commande `/poll` ou `.poll`.")
            .setColor('NOT_QUITE_BLACK');
        message.channel.send({ embeds: [embed] });
    },
    runInteraction: (client, interaction) => {
        const embed = new MessageEmbed()
            .setFooter({text: `L'équipe d'InnohvaCorp`})
            .setTitle("Salon #😶-uservoice")
            .setDescription("Bienvenue sur le salon uservoice ! Ici vous pouvez utiliser envoyer vos sondages à l'aide de la commande `/poll` ou `.poll`.")
            .setColor('NOT_QUITE_BLACK');
        interaction.reply({embeds: [embed]});
    }
}