module.exports = {
    name : 'giveaways',
    async runInteraction(client, interaction){
        if(!interaction.member.roles.cache.get('967469559839862784')){
            interaction.member.roles.add('967469559839862784');
            interaction.reply({content:"Rôle ajouté !", ephemeral:true});
        }else{
            interaction.member.roles.remove('967469559839862784');
            interaction.reply({content:"Rôle retiré !", ephemeral:true});
        }
    }
}