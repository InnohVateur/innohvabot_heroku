const { MessageEmbed } = require('discord.js');

module.exports = {
    name : 'userinfo',
    type:'USER',
    category:'informations',
    ownerOnly:false,
    usage:'`Faire un clic droit sur un utilisateur puis Applications>userinfo`',
    examples:['Clic droit sur InnohVateur>Applications>userinfo'],
    helpDescription:'Renvoie les informations d\'un utilisateur',
    permissions:[],
    hasPermissions:false,
    async runInteraction(client, interaction){
        const member = await interaction.guild.members.fetch(interaction.targetId);
        const embed = new MessageEmbed()
            .setAuthor({name:`Informations relatives à @${member.user.username} :`, iconURL:member.user.displayAvatarURL()})
            .setDescription(`Voici les informations relatives à ${member.user.tag} (\`${member.id}\`) avec le surnom ${member.nickname ? `${member.nickname}`:`${member.displayName}`}`)
            .addFields([
                { name:'Nom', value:`${member.displayName}`, inline:true },
                { name:'Modérateur', value:`${member.kickable ? '🔴':'🟢'}`, inline:true },
                { name:'Bot', value:`${member.user.bot ? '🟢':'🔴'}`, inline:true },
                { name:'Roles', value:`${member.roles.cache.map(role => role).join(', ').replace(', @everyone', ' ')}`, inline:true },
                { name:'A créé son compte le', value:`<t:${parseInt(member.user.createdTimestamp/1000)}:f> (<t:${parseInt(member.user.createdTimestamp/1000)}:R>)`, inline:true },
                { name:'A rejoint le serveur le', value:`<t:${parseInt(member.joinedTimestamp/1000)}:f> (<t:${parseInt(member.joinedTimestamp/1000)}:R>)`, inline:true }
            ])
            .setThumbnail(member.user.displayAvatarURL())
            .setColor('NAVY');
            interaction.reply({embeds: [embed], ephemeral:true});
    }
}