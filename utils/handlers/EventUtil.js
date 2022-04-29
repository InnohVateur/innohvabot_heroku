const { promisify } = require('util');
const { glob } = require('glob');
const pGlob = promisify(glob);
const Logger = require('../Logger');

module.exports = async client => {
    (await pGlob(`${process.cwd()}/events/*/*.js`)).map(async eventFile => {
        const event = require(eventFile);
        if(!event.name) return Logger.warn('Events must have a name')
        if(!eventList.includes(event.name)) {
            return Logger.typo(`ERR => unknown event [${eventFile}]`)
        }

        Logger.event(`- ${event.name}...`);
        if (event.once) {
            client.once(event.name, (...args) => event.execute(client, ...args));
        } else {
            client.on(event.name, (...args) => event.execute(client, ...args));
        }
    })
}
const eventList = ['apiRequest','apiResponse','applicationCommandCreateD','applicationCommandDeleteD','applicationCommandUpdateD','channelCreate','channelDelete','channelPinsUpdate','channelUpdate','debug','emojiCreate','emojiDelete','emojiUpdate','error','guildBanAdd','guildBanRemove','guildCreate','guildDelete','guildIntegrationsUpdate','guildMemberAdd','guildMemberAvailable','guildMemberRemove','guildMembersChunk','guildMemberUpdate','guildScheduledEventCreate','guildScheduledEventDelete','guildScheduledEventUpdate','guildScheduledEventUserAdd','guildScheduledEventUserRemove','guildUnavailable','guildUpdate','interactionD','interactionCreate','invalidated','invalidRequestWarning','inviteCreate','inviteDelete','messageD','messageCreate','messageDelete','messageDeleteBulk','messageReactionAdd','messageReactionRemove','messageReactionRemoveAll','messageReactionRemoveEmoji','messageUpdate','presenceUpdate','rateLimit','ready','roleCreate','roleDelete','roleUpdate','shardDisconnect','shardError','shardReady','shardReconnecting','shardResume','stageInstanceCreate','stageInstanceDelete','stageInstanceUpdate','stickerCreate','stickerDelete','stickerUpdate','threadCreate','threadDelete','threadListSync','threadMembersUpdate','threadMemberUpdate','threadUpdate','typingStart','userUpdate','voiceStateUpdate','warn','webhookUpdate']