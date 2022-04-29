module.exports = {
    name : 'copy-discord-link',
    async runInteraction(client, interaction){
        interaction.reply({content:"Veuillez copier le lien suivant : 'https://discord.gg/Nq4wNCsZ2W'", ephemeral:true});
    }
}