const { MessageEmbed } = require('discord.js');

module.exports = {
    name : 'thread',
    description: 'Gérer les fils.',
    permissions:['MANAGE_THREADS'],
    category:'thread',
    ownerOnly:false,
    usage:'thread [archive|unarchive|delete]',
    examples:['thread archive', 'thread delete'],
    hasPermissions:true,
    async run(client, message, args){
        let thread = message.channel;
        const logChannel = client.channels.cache.get('968122752454242306');
        const subcommand = args[0];
        if(subcommand == 'archive'){
            if(!thread.isThread()) return message.channel.send({content: 'Vous devez vous situer dans un thread pour effectuer cette action...', ephemeral:true});
            await message.channel.send("`Le thread a correctement été archivé`");
            await thread.setArchived(true);
        }else if(subcommand == 'unarchive'){
            if(!thread.isThread()) return message.channel.send({content: 'Vous devez vous situer dans un thread pour effectuer cette action...', ephemeral:true});
            message.channel.send("`Le thread a correctement été désarchivé`");
            await thread.setArchived(false);
        }else if(subcommand == 'delete'){
            if(!thread.isThread()) return message.channel.send({content: 'Vous devez vous situer dans un thread pour effectuer cette action...', ephemeral:true});
            const embed = new MessageEmbed()
                .setColor('DARK_VIVID_PINK')
                .setTitle('Thread supprimé')
                .setDescription(`Le thread ${thread.name} a été supprimé`)
                .setFooter({text:"Thread supprimé"})
                .setTimestamp();
            logChannel.send({embeds: [embed]});
            message.channel.send("Thread supprimé avec succès !");
            thread.delete();
        }
    },
    options:[
        {
            name:'archive',
            description:'Archiver un thread',
            type:'SUB_COMMAND'
        },
        {
            name:'unarchive',
            description:'Désarchiver un thread',
            type:'SUB_COMMAND'
        },
        {
            name:'delete',
            description:'Supprimer un thread',
            type:'SUB_COMMAND'
        },
    ],
    async runInteraction(client, interaction){
        let thread = interaction.channel;
        const logChannel = client.channels.cache.get('968122752454242306');
        const subcommand = interaction.options.getSubcommand();
        if(subcommand == 'archive'){
            if(!thread.isThread()) return interaction.reply({content: 'Vous devez vous situer dans un thread pour effectuer cette action...', ephemeral:true});
            await interaction.reply("`Le thread a correctement été archivé`");
            await thread.setArchived(true);
        }else if(subcommand == 'unarchive'){
            if(!thread.isThread()) return interaction.reply({content: 'Vous devez vous situer dans un thread pour effectuer cette action...', ephemeral:true});
            interaction.reply("`Le thread a correctement été désarchivé`");
            await thread.setArchived(false);
        }else if(subcommand == 'delete'){
            if(!thread.isThread()) return interaction.reply({content: 'Vous devez vous situer dans un thread pour effectuer cette action...', ephemeral:true});
            const embed = new MessageEmbed()
                .setColor('DARK_VIVID_PINK')
                .setTitle('Thread supprimé')
                .setDescription(`Le thread ${thread.name} a été supprimé`)
                .setFooter({text:"Thread supprimé"})
                .setTimestamp();
            logChannel.send({embeds: [embed]});
            interaction.reply("Thread supprimé avec succès !");
            thread.delete();
        }
    }
}