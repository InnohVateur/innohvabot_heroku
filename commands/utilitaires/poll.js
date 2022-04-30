const { MessageEmbed } = require('discord.js');

module.exports = {
    name : 'poll',
    permissions:[],
    category:'utilitaires',
    ownerOnly:false,
    usage:'poll',
    examples:['poll'],
    hasPermissions:false,
    description: 'Crée un sondage',
    async run(client, message, args, guildSettings){
        const filter = msg => msg.author.id == message.author.id;
        const collectEmbed1 = new MessageEmbed()
            .setTitle('Choisissez un titre')
            .setDescription('Veuillez entrer ci-dessous le titre de votre sondage (`Ce message sera supprimé sous 60 secondes`)')
            .setColor('GREEN');
        message.channel.send({embeds: [collectEmbed1]});

        const collector1 = message.channel.createMessageCollector({filter, time:60000});
        collector1.on('collect', collected => {
            const title = collected;
            collector1.stop();
            message.channel.bulkDelete(2);

            const collectEmbed2 = new MessageEmbed()
            .setTitle('Choisissez un question')
            .setDescription('Veuillez entrer ci-dessous la question de votre sondage (`Ce message sera supprimé sous 60 secondes`)')
            .setColor('GREEN');
            message.channel.send({embeds: [collectEmbed2]});

            const collector2 = message.channel.createMessageCollector({filter, time:60000});
            const pollChannel = client.channels.cache.get(guildSettings.pollChannel);

            collector2.on('collect', collected => {
                const question = collected;
                collector2.stop();
                message.channel.bulkDelete(2);

                const embed = new MessageEmbed()
                    .setAuthor({name:`Nouveau sondage de la part de ${message.author.username} !`, iconURL:message.author.displayAvatarURL()})
                    .setTitle(`${title}`)
                    .setDescription(`${question}`)
                    .setColor('DARK_VIVID_PINK')
                    .setFooter({text:`Sondage généré par ${message.author.username}`})
                    .setTimestamp();
                const poll = pollChannel.send({embeds: [embed], fetchReply:true});
            });
            collector2.on('end', collected => {
                if(collected.size == 0) return message.channel.send("Commande annulée.");
            });
        });
        collector1.on('end', collected =>{
            if(collected.size == 0) return message.channel.send("Commande annulée.");
        });
    },
    options:[
        {
            name:"title",
            description:"Choisissez le titre de votre sondage",
            type:'STRING',
            required:true
        },
        {
            name:'question',
            description:"Choisissez votre question",
            type:'STRING',
            required:true
        }
    ],
    async runInteraction(client, interaction, guildSettings){
        const pollTitle = interaction.options.getString("title");
        const pollContent = interaction.options.getString('question');
        const pollChannel = client.channels.cache.get(guildSettings.pollChannel);

        const embed = new MessageEmbed()
            .setAuthor({name:`Nouveau sondage de la part de ${interaction.user.tag} !`, iconURL:interaction.user.displayAvatarURL()})
            .setTitle(pollTitle)
            .setDescription(pollContent)
            .setColor('#000000')
            .setFooter({text:`Sondage généré par ${interaction.user.tag}`})
            .setTimestamp();
        const poll = await interaction.send({embeds: [embed], fetchReply:true});
        poll.react('✅');
        poll.react('❔');
        poll.react('❌');
    }
}