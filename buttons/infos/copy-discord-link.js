const util = require("util");

module.exports = {
    name : 'copy-discord-link',
    async runInteraction(client, interaction){
        require('child_process').spawn('clip').stdin.end(util.inspect("content_for_the_clipboard"));
        interaction.reply({content:"Lien d'invitation du discord correctement copié !", ephemeral:true});
    }
}