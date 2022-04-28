module.exports = {
    name : 'rename',
    description: 'Renvoie la latence',
    permissions:['MANAGE_NICKNAMES'],
    ownerOnly:false,
    usage:'rename [@membre] [Nouveau pseudo] <raison(slash commands uniquement)>',
    hasPermissions:true,
    examples:['nick @DonSpiration caca méchant'],
    category:'modération',
    async run(client, message, args){
        if(args[0]) return message.channel.send('Merci de préciser une cible.');
        const target = message.mentions.members.find(m => m.id);
        const nickname = args.slice(1).join(' ');
        target.setNickname(nickname);
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
        const nickname = interaction.options.getString('nickname');
        const reason = interaction.options.getString('reason');
        if(reason){
            target.setNickname(nickname, reason);
        }else {
            target.setNickname(nickname);
        }
    }
}