const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');
const buttons = new MessageActionRow()
    .addComponents(
        new MessageButton()
            .setCustomId("archive")
            .setLabel("Clore la discussion")
            .setStyle("SECONDARY"),
        new MessageButton()
            .setCustomId("delete")
            .setLabel("Supprimer la discussion")
            .setStyle("DANGER")
    )
module.exports = {
    name : 'report',
    permissions:[],
    category:'utilitaires',
    ownerOnly:false,
    usage:'report [problème]',
    examples:['report DonSpiration il a mangé tout mon cookie'],
    hasPermissions:false,
    description: 'Prévenir le staff d\'un problème',
    async run(client, message, args, guildSettings){
        const reportChannel = client.channels.cache.get(guildSettings.reportChannel);
        if(!args[0]) return message.channel.send("Merci de préciser la raison de votre report !");
        const embed = new MessageEmbed()
            .setTitle(`Nouveau report de la part de ${message.member}`)
            .setDescription(args.slice(0).join(' '))
            .setColor('RED')
            .setFooter({text:"Nouveau report"});
        
        message.channel.send("Report créé ! Vous pouvez désormais attendre qu'un modérateur vous contacte.")

    },
    options:[
        {
            name:"report",
            description:"Choisissez le titre de votre suggestion",
            type:'STRING',
            required:true
        }
    ],
    async runInteraction(client, interaction, guildSettings){
        const reportChannel = client.channels.cache.get(guildSettings.reportChannel);
        interaction.member.roles.add("969208672343445564");
        const report = interaction.options.getString("report");
        const embed = new MessageEmbed()
            .setTitle(`Nouveau report de la part de ${interaction.member}`)
            .setDescription(report)
            .setColor('RED')
            .setFooter({text:"Nouveau report"});
        interaction.reply({content:"Report créé ! Vous pouvez désormais attendre qu'un modérateur vous contacte.", ephemeral:true})
    }
}