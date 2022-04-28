const dayjs = require("dayjs");
const { MessageEmbed, Formatters } = require("discord.js");

module.exports = {
    name : 'guildMemberRemove',
    once : false,
    async execute(client, member) {
        const fetchKickLog = await member.guild.fetchAuditLogs({
            limit:1,
            type:'MEMBER_KICK'
        });

        const kickLog = fetchKickLog.entries.first();
        const {target, reason} = kickLog;
        let isMemberKick = false;

        if(target.id == member.id) isMemberKick = true;



        const fetchBanLog = await member.guild.fetchAuditLogs({
            limit:1,
            type:'MEMBER_BAN'
        });

        const banLog = fetchBanLog.entries.first();
        targetBan = banLog.target;
        reasonBan = banLog.reason;
        let isMemberBan = false;

        if(targetBan.id == member.id) isMemberBan = true;


        const creationTimestamp = Formatters.time(dayjs(member.user.createdTimestamp).unix(), Formatters.TimestampStyles.ShortDateTime);
        const relativeCreationTimestamp = Formatters.time(dayjs(member.user.createdTimestamp).unix(), Formatters.TimestampStyles.RelativeTime);
        const joinTimestamp = Formatters.time(dayjs(member.user.joinedTimestamp).unix(), Formatters.TimestampStyles.ShortDateTime);
        const relativeJoinTimestamp = Formatters.time(dayjs(member.user.joinedTimestamp).unix(), Formatters.TimestampStyles.RelativeTime);
        const exitTimestamp = Formatters.time(dayjs().unix(), Formatters.TimestampStyles.ShortDateTime);
        const relativeExitTimestamp = Formatters.time(dayjs().unix(), Formatters.TimestampStyles.RelativeTime);

        const currentGuild = await client.guilds.cache.get('962013773823082546');
        const embed = new MessageEmbed()
            .setTitle(`Un membre a quitté le serveur \`${currentGuild.name}\` (\`${currentGuild.id}\`)`)
            .setColor('LIGHT_GREY')
            .setTimestamp()
            .setFooter({text:`Un membre a quitté le serveur ${currentGuild.name}`, iconURL:currentGuild.iconURL()})
            .setDescription(`± Nom d'utilisateur : ${member.displayName} avec l'ID \`${member.id}\`
            ± Créé le : ${creationTimestamp} (${relativeCreationTimestamp})
            ± Rejoint le : ${joinTimestamp} (${relativeJoinTimestamp})
            ± Quitté le : ${exitTimestamp} (${relativeExitTimestamp})
            ± Expulsé ? ${isMemberKick?`🟢 (${reason?reason:'no reason'})`:`🔴`}
            ± Bannis ? ${isMemberBan?`🟢 (${reason?reason:'no reason'})`:`🔴`}
            `)
            .setThumbnail(member.user.displayAvatarURL())
            .setAuthor({name:`${member.user.tag} (${member.id})`, iconURL:member.user.displayAvatarURL()});
        const logChannel = client.channels.cache.get("968122752454242306");
        logChannel.send({embeds: [embed]});

        const publicEmbed = new MessageEmbed()
            .setTitle(":sob:Un membre vient de quittter le serveur...:sob:")
            .setDescription(`Bonne continuation à toi, ${member.displayName}, nous espérons te revoir au plus vite !`)
            .setColor('DARK_RED')
            .setThumbnail(member.user.displayAvatarURL())
            .setFooter({text:`Un membre a quitté le serveur ${currentGuild.name}...`, iconURL:currentGuild.iconURL()})
            .setTimestamp();
        const airportChannel = client.channels.cache.get('967736090192654397');
        airportChannel.send({embeds: [publicEmbed]});
    }
}