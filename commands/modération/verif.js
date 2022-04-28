const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');




module.exports = {
    name : 'verif',
    description: 'Envoie l\'embed de vérification du règlement',
    permissions:['ADMINISTRATOR'],
    ownerOnly:true,
    usage:'verif <lang (fr/en)>',
    hasPermissions:true,
    examples:['verif', 'verif en'],
    category:'modération',
    async run(client, message, args){
        if(!args[0] || args[0] == 'fr'){
            const buttons = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setCustomId('agree')
                    .setLabel('Accepter')
                    .setEmoji('✔')
                    .setStyle('SUCCESS'),

                new MessageButton()
                    .setCustomId('dismiss')
                    .setLabel('Refuser')
                    .setEmoji('✖')
                    .setStyle('DANGER'),
            )
            const embed = new MessageEmbed()
                .setTitle('Vérification')
                .setDescription('Pour accéder au reste du serveur, vous devez accepter le règlement de ce dernier. Pour se faire, veuillez cliquer sur le bouton "Accepter". Nous vous remercions de votre compréhension.')
                .setFooter({text:"Cordialement, l'équipe de modération", iconURL:message.guild.iconURL()})
                .setColor('#1F4629');
                await message.channel.send({embeds: [embed], components: [buttons]});
        }else if(args[0] == 'en'){
            const buttonsEn = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setCustomId('agree')
                    .setLabel('Agree')
                    .setEmoji('✔')
                    .setStyle('SUCCESS'),

                new MessageButton()
                    .setCustomId('dismiss')
                    .setLabel('Dismiss')
                    .setEmoji('✖')
                    .setStyle('DANGER'),
            )
            const embedEn = new MessageEmbed()
                .setTitle('Verification')
                .setDescription('To access to the server, you have to agree his regulation. To agree this regulation, you can click on the button accept. Have a good day on InnohvaCorp\'s server !')
                .setFooter({text:"Moderation team", iconURL:message.guild.iconURL()})
                .setColor('#1F4629');
                await message.channel.send({embeds: [embedEn], components: [buttonsEn]});
        }else{
            const embedErr = new MessageEmbed()
                .setTitle('Erreur | Argument Inconnu')
                .setDescription('Oups ! On dirait que cet argument n\'existe pas...')
                .setFooter({text:"Cordialement, l'équipe de modération", iconURL:message.guild.iconURL()})
                .setColor('DARK_RED');
                await message.channel.send({embeds: [embedErr]});
        }
    },
    options:[
        {
            name:'lang',
            description:'Choisissez la langue de la vérification',
            type:'STRING',
            required:false
        }
    ],
    async runInteraction(client, interaction){
        const lang = interaction.options.getString('lang');
        if(!lang || lang == 'fr'){
            const buttons = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setCustomId('agree')
                    .setLabel('Accepter')
                    .setEmoji('✔')
                    .setStyle('SUCCESS'),

                new MessageButton()
                    .setCustomId('dismiss')
                    .setLabel('Refuser')
                    .setEmoji('✖')
                    .setStyle('DANGER'),
            )
            const embed = new MessageEmbed()
                .setTitle('Vérification')
                .setDescription('Pour accéder au reste du serveur, vous devez accepter le règlement de ce dernier. Pour se faire, veuillez cliquer sur le bouton "Accepter". Nous vous remercions de votre compréhension.')
                .setFooter({text:"Cordialement, l'équipe de modération", iconURL:interaction.guild.iconURL()})
                .setColor('#1F4629');
                await interaction.send({embeds: [embed], components: [buttons]});
        }else if(lang == 'en'){
            const buttonsEn = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setCustomId('agree')
                    .setLabel('Agree')
                    .setEmoji('✔')
                    .setStyle('SUCCESS'),

                new MessageButton()
                    .setCustomId('dismiss')
                    .setLabel('Dismiss')
                    .setEmoji('✖')
                    .setStyle('DANGER'),
            )
            const embedEn = new MessageEmbed()
                .setTitle('Verification')
                .setDescription('To access to the server, you have to agree his regulation. To agree this regulation, you can click on the button accept. Have a good day on InnohvaCorp\'s server !')
                .setFooter({text:"Moderation team", iconURL:interaction.guild.iconURL()})
                .setColor('#1F4629');
                await interaction.send({embeds: [embedEn], components: [buttonsEn]});
        }else{
            const embedErr = new MessageEmbed()
                .setTitle('Erreur | Argument Inconnu')
                .setDescription('Oups ! On dirait que cet argument n\'existe pas...')
                .setFooter({text:"Cordialement, l'équipe de modération", iconURL:interaction.guild.iconURL()})
                .setColor('DARK_RED');
                await interaction.send({embeds: [embedErr]});
        }
    }
}