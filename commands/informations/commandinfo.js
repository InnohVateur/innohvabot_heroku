const { MessageEmbed } = require('discord.js');

module.exports = {
    name : 'cmdinfo',
    category:'informations',
    ownerOnly:false,
    usage:'cmdinfo',
    examples:['cmdinfo'],
    permissions:[],
    description: 'Informations utils au salon #🤖-commandes',
    run: (client, message, args) => {
        const embed = new MessageEmbed()
            .setFooter({text: `L'équipe d'InnohvaCorp`})
            .setTitle("Salon #🤖-commandes")
            .setDescription("Bienvenue sur le salon commandes ! Ici vous pouvez utiliser les commandes d'InnohvaBot ! Pour plus d'information sur les commandes proposées, veuillez taper `.help` ou `/help` !")
            .setColor('NOT_QUITE_BLACK');
        message.channel.send({ embeds: [embed] });
    },
    runInteraction: (client, interaction) => {
        const embed = new MessageEmbed()
            .setFooter({text: `L'équipe d'InnohvaCorp`})
            .setTitle("Salon #🤖-commandes")
            .setDescription("Bienvenue sur le salon commandes ! Ici vous pouvez utiliser les commandes d'InnohvaBot ! Pour plus d'information sur les commandes proposées, veuillez taper `.help` ou `/help`!")
            .setColor('NOT_QUITE_BLACK');
        interaction.reply({embeds: [embed]});
    }
}