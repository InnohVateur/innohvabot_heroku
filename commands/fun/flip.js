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
        const number = Math.round(Math.random());
        let image;
        if(number == 0){
            image = 'https://www.de-en-ligne.fr/img/pile-ou-face/pile.png?ezimgfmt=ng%3Awebp%2Fngcb1%2Frs%3Adevice%2Frscb1-2'
        }else if(number == 1){
            image = 'https://img2.freepng.fr/20180411/tse/kisspng-united-states-penny-lincoln-cent-coin-nickel-coin-stack-5acde8de7ea9a5.5191343215234439345188.jpg'
        }
        const embed = new MessageEmbed()
            .setTitle(`Le résultat est ${number==0?'pile':'face'} !`)
            .setDescription(`Le lancer est terminé, la pièce est tombée sur ${number==0?'pile':'face'} !`)
            .setColor('RED')
            .setFooter({text:`Lancer généré par ${message.author.username}`, iconURL: message.author.displayAvatarURL()})
            .setThumbnail(image);
        message.channel.send({embeds: [embed]});   
    },
    async runInteraction(client, interaction){
        const number = Math.round(Math.random());
        let image;
        if(number == 0){
            image = 'https://www.de-en-ligne.fr/img/pile-ou-face/pile.png?ezimgfmt=ng%3Awebp%2Fngcb1%2Frs%3Adevice%2Frscb1-2'
        }else if(number == 1){
            image = 'https://img2.freepng.fr/20180411/tse/kisspng-united-states-penny-lincoln-cent-coin-nickel-coin-stack-5acde8de7ea9a5.5191343215234439345188.jpg'
        }
        const embed = new MessageEmbed()
            .setTitle(`Le résultat est ${number==0?'pile':'face'} !`)
            .setDescription(`Le lancer est terminé, la pièce est tombée sur ${number} !`)
            .setColor('RED')
            .setFooter({text:`Lancer généré par ${interaction.user.username}`, iconURL: interaction.user.displayAvatarURL()})
            .setThumbnail(image);
        interaction.reply({embeds: [embed]});
    }
}