const { promisify } = require('util');
const { glob } = require('glob');
const pGlob = promisify(glob);
const Logger = require('../Logger');

module.exports = async client => {
    const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

    const eventFiles = fs.readdirSync('./events/*').filter(file => file.endsWith('.js'));

    for (const file of eventFiles) {
    	const event = require(`./events/*/${file}`);
    	if (event.once) {
    		client.once(event.name, (...args) => event.execute(...args));
    	} else {
    		client.on(event.name, (...args) => event.execute(...args));
    	}
    }
}
const eventList = ['apiRequest','apiResponse','applicationCommandCreateD','applicationCommandDeleteD','applicationCommandUpdateD','channelCreate','channelDelete','channelPinsUpdate','channelUpdate','debug','emojiCreate','emojiDelete','emojiUpdate','error','guildBanAdd','guildBanRemove','guildCreate','guildDelete','guildIntegrationsUpdate','guildMemberAdd','guildMemberAvailable','guildMemberRemove','guildMembersChunk','guildMemberUpdate','guildScheduledEventCreate','guildScheduledEventDelete','guildScheduledEventUpdate','guildScheduledEventUserAdd','guildScheduledEventUserRemove','guildUnavailable','guildUpdate','interactionD','interactionCreate','invalidated','invalidRequestWarning','inviteCreate','inviteDelete','messageD','messageCreate','messageDelete','messageDeleteBulk','messageReactionAdd','messageReactionRemove','messageReactionRemoveAll','messageReactionRemoveEmoji','messageUpdate','presenceUpdate','rateLimit','ready','roleCreate','roleDelete','roleUpdate','shardDisconnect','shardError','shardReady','shardReconnecting','shardResume','stageInstanceCreate','stageInstanceDelete','stageInstanceUpdate','stickerCreate','stickerDelete','stickerUpdate','threadCreate','threadDelete','threadListSync','threadMembersUpdate','threadMemberUpdate','threadUpdate','typingStart','userUpdate','voiceStateUpdate','warn','webhookUpdate'];