const Logger = require('../../utils/Logger')

module.exports = {
    name : 'ready',
    once : true,
    async execute(client) {
        let guildsCount = await client.guilds.fetch();
        let usersCount = client.guilds.cache.reduce((a, g) => a + g.memberCount, 0);

        client.user.setPresence({ activities: [{ name: '50 nuances de Tiber', type:'WATCHING' }], status: 'dnd' });

        Logger.client(`InnohvaBot is ready to be used by ${usersCount} users on ${guildsCount.size} servers_`);
        client.application.commands.set(client.commands.map(cmd => cmd));
    }
}