module.exports = {
    name : 'clear',
    description: 'Supprimer un nombre de messages spécifié sur un salon ou sur un utilisateur.',
    permissions:['MANAGE_MESSAGES'],
    category:'modération',
    ownerOnly:false,
    usage:'clear [nombre de message] <@Utilisateur visé>',
    examples:['clear 3', 'clear 6 @DonSpiration'],
    hasPermissions:true,
    async run(client, message, args){
        const amountToDelete = args[0];
        if(!args[0] || isNaN(amountToDelete)) return message.channel.send('Veuillez choisir un nombre de messages à supprimer.');
        if(amountToDelete>=100 || amountToDelete<=0) return message.channel.send({content:'Veuillez spécifier un nombre entre 1 et 99.', ephemeral:true});
        const target = message.mentions.users.find(u => u.id);

        const messageToDelete = await message.channel.messages.fetch();

        if(target){
            let i = 0;
            const filteredtargetMessages = [];
            (await messageToDelete).filter(msg => {
                if(msg.author.id == target.id && amountToDelete>i){
                    filteredtargetMessages.push(msg); i++;
                }
            });

            await message.channel.bulkDelete(filteredtargetMessages, true).then(msg => {
                message.channel.send(`\`${msg.size} messages supprimés depuis \`${target}\`.\``)
            });
        }else {
            await message.channel.bulkDelete(amountToDelete, true).then(msg => {
                message.channel.send(`\`${msg.size} messages supprimés.\``)
            });
        }
    },
    options:[
        {
            name:'message',
            description:'Choisissez un nombre de messages à supprimer',
            type:'NUMBER',
            required:true
        },
        {
            name:'target',
            description:'Choisissez un utilisateur visé (optionnel)',
            type:'USER',
            required:false
        }
    ],
    async runInteraction(client, interaction){
        const amountToDelete = interaction.options.getNumber('message');
        if(amountToDelete>=100 || amountToDelete<=0) return interaction.reply({content:'Veuillez spécifier un nombre entre 1 et 99', ephemeral:true});
        const target = interaction.options.getMember('target');

        const messageToDelete = await interaction.channel.messages.fetch();

        if(target){
            let i = 0;
            const filteredtargetMessages = [];
            (await messageToDelete).filter(msg => {
                if(msg.author.id == target.id && amountToDelete>i){
                    filteredtargetMessages.push(msg); i++;
                }
            });

            await interaction.channel.bulkDelete(filteredtargetMessages, true).then(msg => {
                interaction.reply(`\`${msg.size} messages supprimés depuis \`${target}\`.\``)
            });
        }else {
            await interaction.channel.bulkDelete(amountToDelete, true).then(msg => {
                interaction.reply(`\`${msg.size} messages supprimés.\``)
            });
        }
    }
}