const { Guild } = require('../models');
const { Giveaway } = require('../models');
const Logger = require('./Logger');

module.exports = client => {
    client.getGuild = async guild=> {
        const guilData = await Guild.findOne({ id: guild.id });
        return guilData;
    };
    client.createGuild = async guild => {
        const createGuild = await new Guild({ id: guild.id });
        createGuild.save().then(g => Logger.guild(`Le bot a été ajouté sur le serveur ${g.name} (${g.id})`));   
    };
    client.updateGuild = async (guild, settings) => {
        let guildData = await client.getGuild(guild);
        if(typeof guildData != 'object') guildData = {};
        for (const key in settings) {
            if(guildData[key] != settings[key]) guildData[key] = settings[key];
        }
        return guildData.updateOne(settings);
    }
}