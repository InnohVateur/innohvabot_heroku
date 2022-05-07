const dayjs = require("dayjs");
const { MessageEmbed, Formatters } = require("discord.js");

module.exports = {
    name : 'guildMemberAdd',
    once : false,
    async execute(client, member) {
        const creationTimestamp = Formatters.time(dayjs(member.user.createdTimestamp).unix(), Formatters.TimestampStyles.ShortDateTime);
        const relativeCreationTimestamp = Formatters.time(dayjs(member.user.createdTimestamp).unix(), Formatters.TimestampStyles.RelativeTime);
        const joinTimestamp = Formatters.time(dayjs(member.user.joinedTimestamp).unix(), Formatters.TimestampStyles.ShortDateTime);
        const relativeJoinTimestamp = Formatters.time(dayjs(member.user.joinedTimestamp).unix(), Formatters.TimestampStyles.RelativeTime);

        const fetchGuild = await client.getGuild(member.guild);
        const embed = new MessageEmbed()
            .setTitle(`Nouveau membre sur le serveur \`${member.guild.name}\` (\`${member.guild.id}\`)`)
            .setColor('LIGHT_GREY')
            .setTimestamp()
            .setFooter({text:`Nouveau membre sur le serveur ${member.guild.name}`, iconURL:member.guild.iconURL()})
            .setDescription(`± Nom d'utilisateur : ${member} avec ID \`${member.id}\`
            ± Créé le : ${creationTimestamp} (${relativeCreationTimestamp})
            ± Rejoint le : ${joinTimestamp} (${relativeJoinTimestamp})
            `)
            .setThumbnail(member.user.displayAvatarURL())
            .setAuthor({name:`${member.user.tag} (${member.id})`, iconURL:member.user.displayAvatarURL()});
        const logChannel = client.channels.cache.get(fetchGuild.logChannel);
        logChannel.send({embeds: [embed]});

        const publicEmbed = new MessageEmbed()
            .setTitle(":tada:Nouveau membre sur le serveur !:tada:")
            .setDescription(`Bienvenue à toi, ${member} sur le serveur ${member.guild.name} !`)
            .setColor('DARK_GREEN')
            .setThumbnail(member.user.displayAvatarURL())
            .setFooter({text:`Nouveau membre sur le serveur ${member.guild.name} !`, iconURL:member.guild.iconURL()})
            .setTimestamp();
        const airportChannel = client.channels.cache.get(fetchGuild.airportChannel);
        airportChannel.send({embeds: [publicEmbed]});
        console.log("Fonction executée");
    }
}