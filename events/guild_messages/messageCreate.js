module.exports = {
    name : 'messageCreate',
    once : false,
    async execute(client, message) {
        let guildSettings = await client.getGuild(message.guild);

        if(!guildSettings){
            await client.createGuild(message.guild);
            guildSettings = await client.getGuild(message.guild);
            return message.channel.send("Le bot a mis à jour la base de données à cause d'une erreur interne, veuillez retaper la commande.");
        }
        const prefix = guildSettings.prefix;

        if (message.author.bot) return;
        if (!message.content.startsWith(prefix)) return;
        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const cmdName = args.shift().toLowerCase();
        if(cmdName.length == 0) return;

        let cmd = client.commands.get(cmdName);
        if(!message.member.permissions.has([cmd.permissions]) && cmd.hasPermissions) return message.reply("Vous n'avez pas la/les permissions requises pour effectuer cette action.")

        if (cmd) {cmd.run(client, message, args, guildSettings)}
        else{
            message.channel.send("/!\\Commande Inconnue/!\\");
        }
        message.delete();
    }
}