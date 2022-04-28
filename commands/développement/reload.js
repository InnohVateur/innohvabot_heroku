module.exports = {
    name : 'reload',
    description: 'Redémarre le bot.',
    permissions:['ADMINISTRATOR'],
    category:'développement',
    ownerOnly:true,
    usage:'reload',
    examples:['reload'],
    hasPermissions:true,
    async run(client, message, member, args){
        // const currentGuild = await client.guilds.cache.get('962013773823082546');
        // currentGuild.commands.set([]);
        await message.channel.send("Bot relancé avec succès !")
        return process.exit();
    },
    async runInteraction(client, interaction){
        // const currentGuild = await client.guilds.cache.get('962013773823082546');
        // currentGuild.commands.set([]);
        await interaction.reply("Bot relancé avec succès !")
        return process.exit();
    }
}