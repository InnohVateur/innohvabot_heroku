const prefix = '.';

module.exports = {
    name : 'messageReactionAdd',
    once : false,
    async execute(client, messageReaction, user) {
        const message = messageReaction.message;

        if(messageReaction.partial){
            try {
                await messageReaction.fetch()
            } catch (error) {
                console.log("Impossible de récupérer les messages !")
            }
        }

        const emojiName = messageReaction.emoji.name;
        const member = message.guild.members.cache.get(user.id);
        if(member.user.bot) return;
        if(emojiName == '🐸') message.reply("Croâ Croâ");
        if(emojiName == '🐷') message.reply("Cron Cron");
        if(emojiName == '🐶') message.reply("Ouaf Ouaf");
        if(emojiName == '🐑') message.reply("Bêê Bêê");
        if(emojiName == '🐵') message.reply("Ouga Ouga");
        if(emojiName == '🐺') message.reply("Aouh Aouh");
        if(emojiName == '🐱') message.reply("Miaou Miaou");
        if(emojiName == '🦁') message.reply("Groar Groar");
        if(emojiName == '🐮') message.reply("Meuh Meuh");
        if(emojiName == '🐴') message.reply("Hue Hue");
    }
}