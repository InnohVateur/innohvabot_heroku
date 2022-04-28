module.exports = {
    name : 'annonces',
    async runInteraction(client, interaction){
        if(!interaction.member.roles.cache.get('967469365580693544')){
            interaction.member.roles.add('967469365580693544');
            interaction.reply({content:"Rôle ajouté !", ephemeral:true});
        }else{
            interaction.member.roles.remove('967469365580693544');
            interaction.reply({content:"Rôle retiré !", ephemeral:true});
        }
    }
}