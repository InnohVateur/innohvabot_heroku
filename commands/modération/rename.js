module.exports = {
    name : 'rename',
    description: 'Renomme un utilisateur',
    permissions:['MANAGE_NICKNAMES'],
    ownerOnly:false,
    usage:'rename [@membre] [Nouveau pseudo] <raison(slash commands uniquement)>',
    hasPermissions:true,
    examples:['nick @DonSpiration caca méchant'],
    category:'modération',
    async run(client, message, args){
        if(args[0]) return message.channel.send('Merci de préciser une cible.');
        const target = message.mentions.members.find(m => m.id);
        const nickname = target.nickname;
        const newNickname = args.slice(1).join(' ');
        target.setNickname(newNickname);
        message.channel.send(`Le membre ${nickname} a bien été renommé en \`${newNickname}\` !`);
    },
    options:[
        {
            name:'target',
            description:'Choisissez la cible',
            type:'USER',
            required:true
        },
        {
            name:'nickname',
            description:'Choisissez le surnom',
            type:'STRING',
            required:true
        },
        {
            name:'reason',
            description:'Choisissez la raison',
            type:'STRING',
            required:false
        }
    ],
    async runInteraction(client, interaction){
        const target = interaction.options.getMember('target');
        const newNickname = interaction.options.getString('nickname');
        const reason = interaction.options.getString('reason');
        const nickname = target.nickname;
        if(reason){
            target.setNickname(newNickname, reason);
            interaction.reply({content:`Le membre ${nickname} a bien été renommé en \`${newNickname}\` avec la raison ${reason}!`, ephemeral:true});
        }else {
            target.setNickname(newNickname);
            interaction.reply({content:`Le membre ${nickname} a bien été renommé en \`${newNickname}\` !`, ephemeral:true});
        }
    }
}