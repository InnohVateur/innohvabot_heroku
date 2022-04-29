const copy = require('copy-to-clipboard-ultralight');
module.exports = {
    name : 'copy-discord-link',
    async runInteraction(client, interaction){
        copy('https://discord.gg/Nq4wNCsZ2W')
        interaction.reply({content:"Lien d'invitation du discord correctement copié !", ephemeral:true});
    }
}