const { MessageEmbed } = require('discord.js');

module.exports = {
    name : 'suggest',
    permissions:[],
    category:'utilitaires',
    ownerOnly:false,
    usage:'suggest [suggestion]',
    examples:['suggest Pourquoi ne pas ajouter de joli chiens sur la photo de profil du serveur ?'],
    hasPermissions:false,
    description: 'Faire une suggestion',
    async run(client, message, args){
        if(!args[0]) return message.channel.send('Erreur : Merci de précise une description pour votre suggestion !');
        const suggestChannel = client.channels.cache.get('968151238908715128');
        const embed = new MessageEmbed()
            .setAuthor({name:`Nouvelle sugegstion de la part de ${message.author.username} !`, iconURL:message.author.displayAvatarURL()})
            .setTitle('Sondage')
            .setDescription(args.slice(0).join(' '))
            .setColor('#000000')
            .setFooter({text:`Suggestion générée par ${message.author.username}`})
            .setTimestamp();
        message.channel.send("Votre suggestion a bien été envoyée !")
        const suggestion = await suggestChannel.send({embeds: [embed]});
        suggestion.react('✅');
        suggestion.react('❔');
        suggestion.react('❌');
    },
    options:[
        {
            name:"title",
            description:"Choisissez le titre de votre suggestion",
            type:'STRING',
            required:true
        },
        {
            name:'description',
            description:"Décrivez votre idée",
            type:'STRING',
            required:true
        }
    ],
    async runInteraction(client, interaction){
        const suggestTitle = interaction.options.getString("title");
        const suggestContent = interaction.options.getString('description');
        const suggestChannel = client.channels.cache.get('968151238908715128');

        const embed = new MessageEmbed()
            .setAuthor({name:`Nouvelle suggestion de la part de ${interaction.user.tag} !`, iconURL:interaction.user.displayAvatarURL()})
            .setTitle(suggestTitle)
            .setDescription(suggestContent)
            .setColor('#000000')
            .setFooter({text:`Suggestion générée par ${interaction.user.tag}`})
            .setTimestamp();
        interaction.reply('Votre suggestion a bien été envoyée !');
        const suggestion = await suggestChannel.send({embeds: [embed], fetchReply:true});
        suggestion.react('✅');
        suggestion.react('❔');
        suggestion.react('❌');
    }
}