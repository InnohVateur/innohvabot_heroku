const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');
const buttons = new MessageActionRow()
    .addComponents(
        new MessageButton()
            .setCustomId('copy-discord-link')
            .setLabel('Copier le lien d\'invitation')
            .setStyle('SECONARY'),
        new MessageButton()
            .setLabel('Nous soutenir')
            .setURL('https://nationsglory.fr/from/InnohVateur')
            .setStyle('LINK')
    )

module.exports = {
    name : 'infos',
    category:'informations',
    ownerOnly:false,
    usage:'infos',
    examples:['infos'],
    permissions:[],
    description: 'Renvoie les informations du serveur',
    run: (client, message, args) => {
        const embed = new MessageEmbed()
            .setFooter({text: `Cordialement, l'équipe d'InnohvaCorp`})
            .setTitle("Informations relatives au serveur")
            .setDescription("Salut ! Ici tu trouveras toutes les informations utiles autour de NationsGlory et autour de l'InnohvaCorp en général. Bonne lecture !")
            .addFields([
                {
                    name:'Site officiel de NationsGlory',
                    value:'https://nationsglory.fr'
                },
                {
                    name:'Discord de NationsGlory',
                    value:'https://discord.gg/nationsglory'
                },
                {
                    name:'Discord du serveur Lime',
                    value:'https://www.discord.gg/QsaHcNSkua'
                }
            ])
            .setColor('#1F4629');
        message.channel.send({ embeds: [embed], components: [buttons] });
    },
    runInteraction: (client, interaction) => {
        const embed = new MessageEmbed()
            .setFooter({text: `L'équipe d'InnohvaCorp`})
            .setTitle("Informations relatives au serveur")
            .setDescription("Salut ! Ici tu trouveras toutes les informations utiles autour de NationsGlory et autour de l'InnohvaCorp en général. Bonne lecture !")
            .addFields([
                {
                    name:'Site officiel de NationsGlory',
                    value:'https://nationsglory.fr'
                },
                {
                    name:'Discord de NationsGlory',
                    value:'https://discord.gg/nationsglory'
                },
                {
                    name:'Discord du serveur Lime',
                    value:'https://www.discord.gg/QsaHcNSkua'
                }
            ])
            .setColor('1F4629');
        interaction.reply({ embeds: [embed], components: [buttons] });
    }
}