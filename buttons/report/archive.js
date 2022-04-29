module.exports = {
    name : 'archive',
    async runInteraction(client, interaction){
        if(!interaction.member.permissions.has('MANAGE_THREADS')) return interaction.reply({content:"Vous n'avez pas la permission requise pour effectuer cette action !", ephemeral:true});
        interaction.channel.setArchived(true);
        interaction.reply("La discussion a bien été archivée et close !");
    }
}