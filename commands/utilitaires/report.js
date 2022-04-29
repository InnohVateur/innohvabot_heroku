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
    async run(client, message, args){
        const reportChannel = client.channels.cache.get("967728422329679892");
        if(!args[0]) return message.channel.send("Merci de préciser la raison de votre report !");
        interaction.member.roles.add("969208672343445564");
        const embed = new MessageEmbed()
            .setTitle(`Nouveau report de la part de ${message.member}`)
            .setDescription(args.slice(0).join(' '))
            .setColor('RED')
            .setFooter({text:"Nouveau report"});
        reportChannel.threads.create({name:`Report de ${message.author.username}`}).then(thread => {
            thread.members.add(message.author);
            thread.send({embeds: [embed], components: [buttons]});
        });
        message.channel.send("Fil créé ! Vous pouvez désormais attendre qu'un modérateur vous contacte.")

    },
    options:[
        {
            name:"report",
            description:"Choisissez le titre de votre suggestion",
            type:'STRING',
            required:true
        }
    ],
    async runInteraction(client, interaction){
        const reportChannel = client.channels.cache.get("967728422329679892");
        interaction.member.roles.add("969208672343445564");
        const report = interaction.options.getString("report");
        const embed = new MessageEmbed()
            .setTitle(`Nouveau report de la part de ${interaction.member}`)
            .setDescription(report)
            .setColor('RED')
            .setFooter({text:"Nouveau report"});
        reportChannel.threads.create({name:`Report de ${interaction.user.username}`}).then(thread => {
            thread.members.add(interaction.user);
            thread.send({embeds: [embed], components: [buttons]});
        });
        interaction.reply({content:"Fil créé ! Vous pouvez désormais attendre qu'un modérateur vous contacte.", ephemeral:true})
    }
}