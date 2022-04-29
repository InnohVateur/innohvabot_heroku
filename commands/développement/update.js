const { Guild } = require('../../models/index');

module.exports = {
    name : 'update',
    description: 'Met à jour les données.',
    permissions:['ADMINISTRATOR'],
    category:'développement',
    ownerOnly:true,
    usage:'update',
    examples:['update'],
    hasPermissions:true,
    run(client, message, args, guildSettings){
        await Guild.updateMany({}, {"$set":{"airportChannel":"967736090192654397"}, upsert:true});
        message.channel.send("Nouvelles données ajoutées !");
    },
    runInteraction(client, interaction, guildSettings){
        await Guild.updateMany({}, {"$set":{"airportChannel":"967736090192654397"}, upsert:true});
        interaction.reply("Nouvelles données ajoutées !");
    }
}