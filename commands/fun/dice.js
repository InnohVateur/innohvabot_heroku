const { MessageEmbed } = require('discord.js');

module.exports = {
    name : 'dice',
    description: 'Renvoie un résultat de dé aléatoire',
    permissions:[],
    ownerOnly:false,
    usage:'dice',
    hasPermissions:false,
    examples:['dice'],
    category:'fun',
    async run(client, message, args){
        const number = Math.round(Math.random * (6-1) + 1);
        let image;
        if(number == 1){
            image = 'https://img1.freepng.fr/20171220/zte/number-1-png-5a3ab53c779c24.4291118215137969244899.jpg'
        }else if(number == 2){
            image = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/NYCS-bull-trans-2.svg/2048px-NYCS-bull-trans-2.svg.png'
        }else if(number == 3){
            image = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/NYCS-bull-trans-3.svg/1200px-NYCS-bull-trans-3.svg.png'
        }else if(number == 4){
            image = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/NYCS-bull-trans-4-red.svg/2048px-NYCS-bull-trans-4-red.svg.png'
        }else if(number == 5){
            image = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/NYCS-bull-trans-5-red.svg/2048px-NYCS-bull-trans-5-red.svg.png'
        }else if(number == 6){
            image = 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/NYCS-bull-trans-6-red.svg/1200px-NYCS-bull-trans-6-red.svg.png'
        }
        const embed = new MessageEmbed()
            .setTitle(`Le résultat est ${number} !`)
            .setDescription(`Le lancer est terminé, le dé est tombé sur la face numéro ${number} !`)
            .setColor('RED')
            .setFooter({text:`Lancer généré par ${message.author.username}`, iconURL: message.author.displayAvatarURL()})
            .setThumbnail(image);
        message.channel.send({embeds: [embed]});   
    },
    async runInteraction(client, interaction){
        const number = Math.round(Math.random * (6-1) + 1);
        let image;
        if(number == 1){
            image = 'https://img1.freepng.fr/20171220/zte/number-1-png-5a3ab53c779c24.4291118215137969244899.jpg'
        }else if(number == 2){
            image = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/NYCS-bull-trans-2.svg/2048px-NYCS-bull-trans-2.svg.png'
        }else if(number == 3){
            image = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/NYCS-bull-trans-3.svg/1200px-NYCS-bull-trans-3.svg.png'
        }else if(number == 4){
            image = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/NYCS-bull-trans-4-red.svg/2048px-NYCS-bull-trans-4-red.svg.png'
        }else if(number == 5){
            image = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/NYCS-bull-trans-5-red.svg/2048px-NYCS-bull-trans-5-red.svg.png'
        }else if(number == 6){
            image = 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/NYCS-bull-trans-6-red.svg/1200px-NYCS-bull-trans-6-red.svg.png'
        }
        const embed = new MessageEmbed()
            .setTitle(`Le résultat est ${number} !`)
            .setDescription(`Le lancer est terminé, le dé est tombé sur la face numéro ${number} !`)
            .setColor('RED')
            .setFooter({text:`Lancer généré par ${interaction.user.username}`, iconURL: interaction.user.displayAvatarURL()})
            .setThumbnail(image);
        interaction.reply({embeds: [embed]});
    }
}