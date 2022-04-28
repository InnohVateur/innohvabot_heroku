module.exports = {
    name : 'emit',
    description: 'Emmet une fonction.',
    permissions:['ADMINISTRATOR'],
    category:'développement',
    ownerOnly:true,
    usage:'emit [fonction à émettre]',
    examples:['emit guildMemberAdd', 'emit guildCreate'],
    hasPermissions:true,
    run: (client, message, member, args) => {
        if(!member)
        if(!args[0] || !args[0].match(/^(guildMemberAdd|guildMemberRemove|guildCreate)$/)) return message.reply('/!\\Merci d\'entrer un événement valide/!\\');
        if(args[0] == 'guildMemberAdd'){
            client.emit('guildMemberAdd', message.member);
            message.reply('Evénement guildMemberAdd émis avec succès !');
        }else if (args[0] == 'guildMemberRemove'){
            client.emit('guildMemberRemove', message.member);
            message.reply('Evénement guildMemberRemove émis avec succès !');
        }else if (args[0] == 'guildCreate'){
            client.emit('guildCreate', message.guild);
            message.reply('Evénement guildCreate émis avec succès !')
        }
    },
    options:[
        {
            name:'event',
            description:'Choisir un évènement à émettre.',
            type:'STRING',
            required:true,
            choices:[
                {
                    name:'guildMemberAdd',
                    value:'guildMemberAdd'
                },
                {
                    name:'guildMemberRemove',
                    value:'guildMemberRemove'
                },
                {
                    name:'guildCreate',
                    value:'guildCreate'
                }
            ]
        }
    ],
    runInteraction: (client, interaction) => {
        if(!interaction.memberPermissions.has('ADMINISTRATOR', true)) return interaction.reply('Désolé, mais vous devez être administrateur pour utiliser cette commande...');
        const evtChoices = interaction.options.getString('event');
        if(evtChoices == 'guildMemberAdd'){
            client.emit('guildMemberAdd', interaction.member);
            interaction.reply({content: 'Evénement guildMemberAdd émis avec succès !', ephemeral:true});
        }else if(evtChoices == 'guildMemberRemove'){
            client.emit('guildMemberRemove', interaction.member);
            interaction.reply({content: 'Evénement guildMemberRemove émis avec succès !', ephemeral:true});
        }else if(evtChoices == 'guildCreate'){
            client.emit('guildCreate', interaction.guild);
            interaction.reply({content: 'Evénement guildCreate émis avec succès !', ephemeral:true});
        }
    }
}