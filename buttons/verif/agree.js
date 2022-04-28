module.exports = {
    name : 'agree',
    async runInteraction(client, interaction){
        if(interaction.member.roles.cache.get('962404007140290661')) return interaction.reply({content:"Il me semble que vous avez déjà accepté les règles...", ephemeral:true});
        interaction.member.roles.add('962404007140290661');
        interaction.reply({content:"Merci à vous ! Passez un bon séjour à InnohvaCorp ;)", ephemeral:true});
    }
}