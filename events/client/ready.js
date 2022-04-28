const Logger = require('../../utils/Logger')

module.exports = {
    name : 'ready',
    once : true,
    async execute(client) {
        client.user.setPresence({ activities: [{ name: '50 nuances de Tiber', type:'WATCHING' }], status: 'dnd' });
        Logger.client("The bot is successfully logged in_");
        const currentGuild = await client.guilds.cache.get('962013773823082546');
        currentGuild.commands.set(client.commands.map(cmd => cmd));
    }
}