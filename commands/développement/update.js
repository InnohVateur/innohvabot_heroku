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
    async run(client, message, args, guildSettings){
        await Guild.updateMany({}, {"$set":{"pollChannel":"968151238908715128"}, upsert:true});
        message.channel.send("Nouvelles données ajoutées !");
    },
    async runInteraction(client, interaction, guildSettings){
        await Guild.updateMany({}, {"$set":{"pollChannel":"968151238908715128"}, upsert:true});
        interaction.reply("Nouvelles données ajoutées !");
    }
}