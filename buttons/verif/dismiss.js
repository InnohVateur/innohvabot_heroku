module.exports = {
    name : 'dismiss',
    async runInteraction(client, interaction){
        interaction.reply({content:"Excusez-moi, je ne suis pas sûr d'avoir bien compris... Vous avez bien dis accepter n'est-ce pas ?", ephemeral:true});
    }
}