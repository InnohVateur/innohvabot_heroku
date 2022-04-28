module.exports = {
    name : 'nick',
    description: 'Permet de changer son pseudo',
    permissions:['CHANGE_NICKNAME'],
    ownerOnly:false,
    usage:'nick [Nouveau pseudo]',
    hasPermissions:true,
    examples:['nick caca'],
    category:'utilitaires',
    async run(client, message, args){
        if(!args) return message.channel.send('Merci de préciser votre nouveau surnom !');
        const nickname = args.slice(0).join(' ');
        message.member.setNickname(nickname);
        message.channel.send(`Le surnom \`${nickname}\` vous a été appliqué avec succès !`)
    },
    options:[
        {
            name:'nickname',
            description:'Saisissez votre nouveau surnom.',
            type:'STRING',
            required:true
        }
    ],
    async runInteraction(client, interaction){
        const nickname = interaction.options.getString('nickname');
        interaction.member.setNickname(nickname);
        interaction.reply(`Le surnom \`${nickname}\` vous a été appliqué avec succès !`);
    }
}