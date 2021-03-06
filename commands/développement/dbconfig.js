module.exports = {
    name : 'dbconfig',
    description: 'Configurer les données de la base de données.',
    permissions:['ADMINISTRATOR'],
    category:'développement',
    ownerOnly:true,
    usage:'dbconfig [key] <value>',
    examples:['dbconfig', 'dbconfig prefix ?', 'dbconfig prefix'],
    hasPermissions:true,
    //guildSettings
    async run(client, message, args, guildSettings){
        if(!args[0] || !args[0].match(/^(prefix|logChannel|airportChannel|pollChannel|reportChannel)$/)) return message.channel.send('/!\\Merci d\'entrer une clé valide/!\\');
        if(args[0] == 'prefix'){
            if(args[1]){
                await client.updateGuild(message.guild, {prefix:args[1]});
                return message.channel.send(`Nouvelle valeur de prefix : ${args[1]}`);
            }
            message.channel.send(`Valeur de prefix : ${guildSettings.prefix}`);
        }else if (args[0] == 'logChannel'){
            if(args[1]){
                await client.updateGuild(interaction.guild, {logChannel:args[1]});
                return message.channel.send(`Nouvelle valeur de logChannel : ${args[1]}`);
            }
            message.channel.send(`Valeur de logChannel : ${guildSettings.logChannel}`);
        }else if (args[0] == 'airportChannel'){
            if(args[1]){
                await client.updateGuild(interaction.guild, {airportChannel:args[1]});
                return message.channel.send(`Nouvelle valeur de airportChannel : ${args[1]}`);
            }
            message.channel.send(`Valeur de airportChannel : ${guildSettings.airportChannel}`);
        }else if (args[0] == 'pollChannel'){
            if(args[1]){
                await client.updateGuild(interaction.guild, {pollChannel:args[1]});
                return message.channel.send(`Nouvelle valeur de pollChannel : ${args[1]}`);
            }
            message.channel.send(`Valeur de pollChannel : ${guildSettings.pollChannel}`);
        }else if (args[0] == 'reportChannel'){
            if(args[1]){
                await client.updateGuild(interaction.guild, {reportChannel:args[1]});
                return message.channel.send(`Nouvelle valeur de reportChannel : ${args[1]}`);
            }
            message.channel.send(`Valeur de reportChannel : ${guildSettings.reportChannel}`);
        }else if (args[0] == 'suggestChannel'){
            if(args[1]){
                await client.updateGuild(interaction.guild, {suggestChannel:args[1]});
                return message.channel.send(`Nouvelle valeur de suggestChannel : ${args[1]}`);
            }
            message.channel.send(`Valeur de suggestChannel : ${guildSettings.suggestChannel}`);
        }
    },
    options:[
        {
            name:'key',
            description:'Choisir une clé a modifier/afficher.',
            type:'STRING',
            required:true,
            choices:[
                {
                    name:'prefix',
                    value:'prefix'
                },
                {
                    name:'logChannel',
                    value:'logChannel'
                },
                {
                    name:'airportChannel',
                    value:'airportChannel'
                },
                {
                    name:'pollChannel',
                    value:'pollChannel'
                },
                {
                    name:'reportChannel',
                    value:'reportChannel'
                },
                {
                    name:'suggestChannel',
                    value:'suggestChannel'
                }
            ]
        },
        {
            name: 'value',
            description:'La nouvelle valeur pour votre clé.',
            type:'STRING'
        }
    ],
    async runInteraction(client, interaction, guildSettings){
        const key = interaction.options.getString("key");
        const value = interaction.options.getString("value")
        if(key == 'prefix'){
            if(value){
                await client.updateGuild(interaction.guild, {prefix:value});
                return interaction.reply(`Nouvelle valeur de prefix : ${value}`);
            }
            interaction.reply(`Valeur de prefix : ${guildSettings.prefix}`);
        }else if(key == 'logChannel'){
            if(value){
                await client.updateGuild(interaction.guild, {logChannel:value});
                return interaction.reply(`Nouvelle valeur de logChannel : ${value}`);
            }
            interaction.reply(`Valeur de logChannel : ${guildSettings.logChannel}`);
        }else if(key == 'airportChannel'){
            if(value){
                await client.updateGuild(interaction.guild, {airportChannel:value});
                return interaction.reply(`Nouvelle valeur de airportChannel : ${value}`);
            }
            interaction.reply(`Valeur de airportChannel : ${guildSettings.airportChannel}`);
        }else if(key == 'pollChannel'){
            if(value){
                await client.updateGuild(interaction.guild, {pollChannel:value});
                return interaction.reply(`Nouvelle valeur de pollChannel : ${value}`);
            }
            interaction.reply(`Valeur de pollChannel : ${guildSettings.pollChannel}`);
        }else if(key == 'reportChannel'){
            if(value){
                await client.updateGuild(interaction.guild, {reportChannel:value});
                return interaction.reply(`Nouvelle valeur de reportChannel : ${value}`);
            }
            interaction.reply(`Valeur de reportChannel : ${guildSettings.reportChannel}`);
        }else if(key == 'suggestChannel'){
            if(value){
                await client.updateGuild(interaction.guild, {suggestChannel:value});
                return interaction.reply(`Nouvelle valeur de suggestChannel : ${value}`);
            }
            interaction.reply(`Valeur de suggestChannel : ${guildSettings.suggestChannel}`);
        }
    }
}