const { MessageEmbed } = require('discord.js');

module.exports = {
    name : 'unban',
    description: 'Débannir un membre du serveur.',
    permissions:['BAN_MEMBERS'],
    category:'modération',
    ownerOnly:false,
    usage:'unban [userid]',
    examples:['unban 805467284118175804'],
    hasPermissions:true,
    async run(client, message, args, guildSettings){
        const userid = args[0];
        message.guild.members.unban(userid).then((user) => {
            message.channel.send({content:`Membre ${user.tag} débannis avec succès !`, ephemeral:true});
            const logChannel = client.channels.cache.get(guildSettings.logChannel);
            const logEmbed = new MessageEmbed()
                .setTitle('Un membre c\'est fait débannir du serveur')
                .setDescription(`Le membre ${user.tag} (${userid}) s'est fait débannir de ce serveur`)
                .setColor('YELLOW')
                .setFooter({text:'Un membre s\'est fait débannir du serveur'})
                .setTimestamp();
            logChannel.send({embeds: [logEmbed]});
        }).catch(() => {
            return message.channel.send({content: "Erreur : Merci de choisir un id valide de membre bannis.", ephemeral:true});
        });
    },
    options:[
        {
            name:'userid',
            description:'Choisissez un id d\'utilisateur à expulser',
            type:'STRING',
            required:true
        }
    ],
    async runInteraction(client, interaction, guildSettings){
        const userid = interaction.options.getString('userid');
        interaction.guild.members.unban(userid).then((user) => {
            interaction.followUp({content:`Membre ${user.tag} débannis avec succès !`, ephemeral:true});
            const logChannel = client.channels.cache.get(guildSettings.logChannel);
            const logEmbed = new MessageEmbed()
                .setTitle('Un membre c\'est fait débannir du serveur')
                .setDescription(`Le membre ${user.tag} (${userid}) s'est fait débannir de ce serveur`)
                .setColor('YELLOW')
                .setFooter({text:'Un membre s\'est fait débannir du serveur'})
                .setTimestamp();
            logChannel.send({embeds: [logEmbed]});
        }).catch(() => {
            return interaction.followUp({content: "Erreur : Merci de choisir un id valide de membre bannis.", ephemeral:true});
        });
    }
}