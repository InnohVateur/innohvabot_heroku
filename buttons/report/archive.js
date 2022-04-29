module.exports = {
    name : 'archive',
    async runInteraction(client, interaction){
        if(!interaction.member.permissions.has('MANAGE_THREADS')) return interaction.reply({content:"Vous n'avez pas la permission requise pour effectuer cette action !", ephemeral:true});
        interaction.channel.setArchived(true);
        const members = interaction.channel.guildMembers
        members.forEach(x => {
            if(members[x].roles.cache.get('969208672343445564')){
                members[x].roles.remove('969208672343445564');
            }else return;
        });
        interaction.reply("La discussion a bien été archivée et close !");
    }
}