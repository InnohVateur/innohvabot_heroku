const { MessageEmbed } = require('discord.js');
const { readdirSync } = require('fs');
const commandFolder = readdirSync('./commands');
const prefix = '.'

module.exports = {
    name : 'help',
    category:'informations',
    ownerOnly:false,
    usage:'help <commande>',
    examples:['help help', 'help ping'],
    permissions:[],
    hasPermissions:false,
    description: 'Commande d\'aide',
    async run(client, message, args){
        if(!args.length){
            const noArgsEmbed = new MessageEmbed()
                .setColor('#f54ea7')
                .setTitle('Liste des commandes')
                .setDescription(`Une liste de toutes les catégories disponibles et de leurs commandes. Pour plus d'informations sur une commande, tapez \`${prefix}help <commande>\``)
            for (const category of commandFolder){
                noArgsEmbed.addField(
                    `${category.replace(/(^\w|\s\w)/g, firstLetter => firstLetter.toUpperCase())}`,
                    `\`${client.commands.filter(cmd => cmd.category == category.toLowerCase()).map(cmd => cmd.name).join(', ')}\``
                );
            }
            return message.channel.send({embeds: [noArgsEmbed]});
        }
        const cmd = client.commands.get(args[0]);
        if(!cmd) return message.channel.send({content:'/!\\Cette commande n\'existe pas/!\\', ephemeral:true});

        const argEmbed = new MessageEmbed()
            .setColor('#f54ea7')
            .setTitle(`\`${cmd.name}\` ${cmd.ownerOnly ? '/!\\Commande réservée au administrateurs/!\\':''}`)
            .setDescription(cmd.description ? cmd.description:cmd.helpDescription)
            .addFields([
                {
                    name:'Syntaxe',
                    value:`${prefix}${cmd.usage}`,
                    inline:true
                },
                {
                    name:'Examples',
                    value:`${prefix}${cmd.examples.join(` | ${prefix}`)}`,
                    inline:true
                }
            ])
            .setFooter({text:`Permissions requises : ${cmd.hasPermissions ? `${cmd.permissions.join(', ')}`:`Aucunes`}`, iconURL:message.guild.iconURL()})

            return message.channel.send({embeds: [argEmbed]});
    },
    options:[
        {
            name:"command",
            description:"Choisissez la commande a décrire",
            type:'STRING',
            required:false
        }
    ],
    async runInteraction(client, interaction){
        const cmdName = interaction.options.getString('command');
        if(!cmdName){
            const noArgsEmbed = new MessageEmbed()
                .setColor('#f54ea7')
                .setTitle('Liste des commandes')
                .setDescription(`Une liste de toutes les catégories disponibles et leurs commandes. Pour plus d'informations sur une commande, tapez \`${prefix}help <commande>\``)
            for (const category of commandFolder){
                noArgsEmbed.addField(
                    `${category.replace(/(^\w|\s\w)/g, firstLetter => firstLetter.toUpperCase())}`,
                    `\`${client.commands.filter(cmd => cmd.category == category.toLowerCase()).map(cmd => cmd.name).join(', ')}\``
                );
            }
            return interaction.reply({embeds: [noArgsEmbed]});
        }
        const cmd = client.commands.get(cmdName);
        if(!cmd) return interaction.reply({content:'/!\\Cette commande n\'existe pas/!\\', ephemeral:true});

        const argEmbed = new MessageEmbed()
            .setColor('#f54ea7')
            .setTitle(`\`${cmd.name}\` ${cmd.ownerOnly ? '/!\\Commande réservée au administrateurs/!\\':''}`)
            .setDescription(cmd.description ? cmd.description:cmd.helpDescription)
            .addFields([
                {
                    name:'Syntaxe',
                    value:`${prefix}${cmd.usage}`,
                    inline:true
                },
                {
                    name:'Examples',
                    value:`${prefix}${cmd.examples.join(` | ${prefix}`)}`,
                    inline:true
                }
            ])
            .setFooter({text:`Permissions requises : ${cmd.hasPermissions ? `${cmd.permissions.join(', ')}`:`Aucunes`}`, iconURL:interaction.guild.iconURL()})

            return interaction.reply({embeds: [argEmbed]});
    }
}