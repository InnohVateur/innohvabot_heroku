module.exports = {
    name : 'delete',
    async runInteraction(client, interaction){
        if(!interaction.member.permissions.has('MANAGE_THREADS')) return interaction.reply({content:"Vous n'avez pas la permission requise pour effectuer cette action !", ephemeral:true});
        interaction.channel.delete();
        interaction.reply("La discussion va être supprimée !");
    }
}