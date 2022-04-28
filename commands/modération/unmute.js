const { MessageEmbed } = require('discord.js');
const ms = require('ms');

module.exports = {
    name : 'unmute',
    description: 'Unmute un membre',
    permissions:['MODERATE_MEMBERS'],
    category:'modération',
    ownerOnly:false,
    usage:'unmute [target]',
    examples:['unmute @DonSpiration'],
    hasPermissions:true,
    async run(client, message, args){
        if(args[0]) return message.channel.send('Spécifiez un membre à mute, merci.');
        const target = message.mentions.members.find(m => m.id);

        if(!target.isCommunicationDisabled()) return message.channel.send('Ce membre n\'est pas mute !');

        target.timeout(null);
        message.channel.send("Membre unmute avec succès !");
        
    },
    options:[
        {
            name:'target',
            description:'Choisissez un utilisateur à mute',
            type:'USER',
            required:true
        },
        {
            name:'duration',
            description:'La durée du mute en format chiffre + s/m/h/d/y',
            type:'STRING',
            required:true
        },
        {
            name:'reason',
            description:'Choisissez une raison de mute',
            type:'STRING',
            required:true
        }
    ],
    async runInteraction(client, interaction){
        const target = interaction.options.getMember('target');
        if(!target.isCommunicationDisabled()) return interaction.reply({content:'Ce membre n\'est pas mute !', ephemeral:true});

        target.timeout(null);
        interaction.reply("Membre unmute avec succès !");
    }
}