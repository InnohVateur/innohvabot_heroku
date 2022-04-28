module.exports = {
    name : 'pubs',
    async runInteraction(client, interaction){
        if(!interaction.member.roles.cache.get('967469498875658240')){
            interaction.member.roles.add('967469498875658240');
            interaction.reply({content:"Rôle ajouté !", ephemeral:true});
        }else{
            interaction.member.roles.remove('967469498875658240');
            interaction.reply({content:"Rôle retiré !", ephemeral:true});
        }
    }
}