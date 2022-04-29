module.exports = {
    name : 'interactionCreate',
    once : false,
    async execute(client, interaction) {
        let guildSettings = await client.getGuild(interaction.guild);

        if(!guildSettings){
            await client.createGuild(interaction.guild);
            guildSettings = await client.getGuild(interaction.guild);
            return interaction.reply({content:"Le bot a mis à jour la base de données à cause d'une erreur interne, veuillez retaper la commande.", ephemeral:true});
        }

        if(interaction.isCommand() || interaction.isContextMenu()){
            const cmd = client.commands.get(interaction.commandName);
            if(!cmd) return interation.reply({content:'Cette commande n\'existe pas !', ephemeral:true});

            if(!interaction.member.permissions.has([cmd.permissions]) && cmd.hasPermissions) return interaction.reply({content:"Vous n'avez pas la/les permissions requises pour effectuer cette action.", ephemeral:true})

            cmd.runInteraction(client, interaction, guildSettings);
        }else if(interaction.isButton()){
            const btn = client.buttons.get(interaction.customId);
            if(!btn) return interaction.reply({content:'Ce bouton n\'existe pas !', ephemeral:true});
            btn.runInteraction(client, interaction, guildSettings);
        }else if(interaction.isSelectMenu()){
            const selectMenu = client.selects.get(interaction.customId);
            if(!selectMenu) return interaction.reply({content:'Ce menu n\'existe pas !', ephemeral:true});
            selectMenu.runInteraction(client, interaction, guildSettings);
        }
    }
}