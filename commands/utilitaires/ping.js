const { MessageEmbed } = require('discord.js');

module.exports = {
    name : 'ping',
    description: 'Renvoie la latence',
    permissions:[],
    ownerOnly:false,
    usage:'ping',
    hasPermissions:false,
    examples:['ping'],
    category:'utilitaires',
    async run(client, message, args){
        const tryPing = await message.channel.send('Ping en cours...')
        var color;
        var text;
        if (tryPing.createdTimestamp-message.createdTimestamp<250){
            color = "#005D09";
            text = `La latence du BOT est de ${tryPing.createdTimestamp - message.createdTimestamp}ms tandis que celle de l'API est de ${client.ws.ping}ms. Votre ordinateur est rapide, dites moi !`;
        }else {
            color = "#780000";
            text=`La latence du BOT est de ${tryPing.createdTimestamp - message.createdTimestamp}ms tandis que celle de l'API est de ${client.ws.ping}ms. On dirait que votre ordinateur a besoin d'un petit coup de boost !`
        }
        const embed = new MessageEmbed()
            .setFooter({text: `Commande par ${message.author.username}`, iconURL: message.author.displayAvatarURL()})
            .setTitle("🏓 Pong !")
            .setDescription(text)
            .setTimestamp()
            .setColor(color);
        
        tryPing.edit({content:' ', embeds: [embed] });
    },
    async runInteraction(client, interaction){
        const tryPing = await interaction.reply({content:'Ping en cours...', fetchReply:true})
        var color;
        var text;
        if (tryPing.createdTimestamp-interaction.createdTimestamp<350){
            color = "#005D09";
            text = `La latence du BOT est de \`\`\`________________________${tryPing.createdTimestamp - interaction.createdTimestamp}ms________________________\`\`\` tandis que celle de l'API est de \`\`\`________________________${client.ws.ping}ms________________________\`\`\` Votre ordinateur est rapide, dites moi !`;
        }else {
            color = "#780000";
            text=`La latence du BOT est de \`\`\`________________________${tryPing.createdTimestamp - interaction.createdTimestamp}ms________________________\`\`\` tandis que celle de l'API est de \`\`\`________________________${client.ws.ping}ms________________________\`\`\` On dirait que votre ordinateur a besoin d'un petit coup de boost !`
        }
        const embed = new MessageEmbed()
            .setFooter({text: `Commande par ${interaction.user.username}`, iconURL: interaction.user.displayAvatarURL()})
            .setTitle("🏓 Pong !")
            .setDescription(text)
            .setTimestamp()
            .setColor(color);
        
        interaction.editReply({content: ' ', embeds: [embed]})
    }
}