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

        const currentGuild = await client.guilds.cache.get('962013773823082546');
        const embed = new MessageEmbed()
            .setTitle(`Nouveau membre sur le serveur \`${currentGuild.name}\` (\`${currentGuild.id}\`)`)
            .setColor('LIGHT_GREY')
            .setTimestamp()
            .setFooter({text:`Nouveau membre sur le serveur ${currentGuild.name}`, iconURL:currentGuild.iconURL()})
            .setDescription(`± Nom d'utilisateur : ${member} avec ID \`${member.id}\`
            ± Créé le : ${creationTimestamp} (${relativeCreationTimestamp})
            ± Rejoint le : ${joinTimestamp} (${relativeJoinTimestamp})
            `)
            .setThumbnail(member.user.displayAvatarURL())
            .setAuthor({name:`${member.user.tag} (${member.id})`, iconURL:member.user.displayAvatarURL()});
        const logChannel = client.channels.cache.get("968122752454242306");
        logChannel.send({embeds: [embed]});

        const publicEmbed = new MessageEmbed()
            .setTitle(":tada:Nouveau membre sur le serveur !:tada:")
            .setDescription(`Bienvenue à toi, ${member} sur le serveur ${currentGuild.name} !`)
            .setColor('DARK_GREEN')
            .setThumbnail(member.user.displayAvatarURL())
            .setFooter({text:`Nouveau membre sur le serveur ${currentGuild.name} !`, iconURL:currentGuild.iconURL()})
            .setTimestamp();
        const airportChannel = client.channels.cache.get('967736090192654397');
        airportChannel.send({embeds: [publicEmbed]});
    }
}