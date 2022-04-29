const clipboardy = require('clipboardy')

module.exports = {
    name : 'copy-discord-link',
    async runInteraction(client, interaction){
        clipboardy.writeSync('https://discord.gg/Nq4wNCsZ2W');
        interaction.reply({content:"Lien d'invitation du discord correctement copié !", ephemeral:true});
    }
}