const { MessageActionRow, MessageButton } = require('discord.js');

const buttons = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setCustomId('primary-button')
                    .setLabel('Primary')
                    .setStyle('PRIMARY'),

                new MessageButton()
                    .setCustomId('secondary-button')
                    .setLabel('Secondary')
                    .setStyle('SECONDARY'),

                new MessageButton()
                    .setLabel('Link')
                    .setURL('https://nationsglory.fr')
                    .setStyle('LINK'),

                new MessageButton()
                    .setCustomId('success-button')
                    .setLabel('Success')
                    .setStyle('SUCCESS'),

                new MessageButton()
                    .setCustomId('danger-button')
                    .setLabel('Danger')
                    .setStyle('DANGER')
            )

module.exports = {
    name : 'buttoninfo',
    description: 'Affiche les différents types de boutons',
    permissions:['ADMINISTRATOR'],
    ownerOnly:true,
    usage:'buttoninfo',
    hasPermissions:true,
    examples:['buttoninfo'],
    category:'développement',
    async run(client, message, args){
        await message.channel.send({content:'Cliquez sur les boutons !', components: [buttons]})
    },
    async runInteraction(client, interaction){
        await interaction.reply({content:'Cliquez sur les boutons !', components: [buttons]})
    }
}