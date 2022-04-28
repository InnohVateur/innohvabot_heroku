const { MessageEmbed } = require('discord.js');

module.exports = {
    name : 'rule',
    permissions:[],
    category:'informations',
    ownerOnly:false,
    usage:'rules [all / numeroDeLArticle] <fr/en>',
    examples:['rules all en', 'rules 3'],
    hasPermissions:false,
    description: 'Affiche le règlement du serveur',
    run: (client, message, args) => {
        if(args[0] == 'all'){
            const embedNoArgs = new MessageEmbed()
                .setTitle('Règlement du serveur')
                .setDescription('Voici le règlement du serveur discord d\'InnohvaCorp.')
                .addFields([{
                    name:'Article 1 : Présentation',
                    value:"Ce serveur représente la communauté de l'entreprise fictive de NationsGlory InnohvaCorp, créée par `@InnohVateur` le 8 avril 2022. Toute tentative d'arnaque, de fraude, d'extorsion de monnaie ainsi que tout non-respect à l'être humain est punis d'un bannissement permanent de ce serveur.",
                    inline:false
                },
                {
                    name:'Article 2 : Droits et devoirs du staff',
                    value:'------------------------------*------------------------------',
                    inline:false
                },
                {
                    name:'2.1 => Définition du staff',
                    value:"Le Staff représente l'ensemble des personnes dotées d'un droit supplémentaire sur le serveur et ayant un pouvoir judiciaire sur les autres membres. Le but d'un membre du staff est de veiller à la bonne entente et à une stabilité morale du serveur. Le staff représente pour être plus précis les personnes dotées des rôles `@Modérateur` , `@Super-Modérateur` , `@Responsable` et `@Administrateur` .",
                    inline:false
                },
                {
                    name:'2.2 => Droits du staff',
                    value:"Le staff est libre, dans le cadre de ce règlement d'user des permissions qui lui sont données (bannissement, expulsion, mise en silence ou encore rétrogradation. Un membre du staff ne peut exercer de pression ou ne peut user de son pouvoir sur un autre membre du staff ayant un grade égal ou supérieur à lui ( les grades du staff respectivement du moins important au plus important : `@Modérateur` , `@Super-Modérateur` , `@Responsable` , `@Administrateur` ). En cas de problème avec un `@Administrateur` , le staff peut se réunir et voter la rétrogradation de ce dernier. Aucun membre du staff ne peut être viré sans raison valable. Les responsables et administrateurs se réservent le droit de punir un membre d'une peine supérieure à celle inscrite ici, sous condition de réflexion morale.",
                    inline:false
                },
                {
                    name:'2.3 => Devoirs du staff',
                    value:"Le staff se doit d'être impartiale dans ses actions et de respecter à son tour le règlement du serveur. Il ne doit ni insulter, ni de quelques façons que ce soit humilier un membre du serveur en général. Une rétrogradation est envisageable (que ce soit vers un rôle de membre ou vers un grade inférieur à son grade actuel.",
                    inline:false
                },
                {
                    name:'Article 3 : Les salons Textuels',
                    value:'------------------------------*------------------------------',
                    inline:false
                },
                {
                    name:'3.1 => Respect primaire',
                    value:"L'utilisateur d'un salon textuel est tenu de respecter son interlocuteur et de ne lui manquer de respect en aucun cas. Les insultes, marques de violences et l'humiliation sont proscrites et sévèrement punies.",
                    inline:false
                },
                {
                    name:'3.2 => Gestion du contenu',
                    value:"Les contenus à caractère sexuellement explicite voir pornographique sont strictement interdits et sont punis. La publicité (ne rentrant pas dans le cadre du règlement) est également punie car non-autorisée. De plus, les incitations à la violence et au terrorisme sont interdits. Les actions illicites, comme la publicité promouvant des cigarettes, drogues ou autres ainsi que le partage de vidéos de mutilation, de torture, de violences sexuelles ou autres sont punies aussi bien dans le cadre de la modération Discord que pénalement. Les modérateurs sont pour cela ouverts au membres du serveur et peuvent être mentionnés pour cette raison (à noter que le spam d'un modérateur pour toutes ces raisons est tout de même punissable).",
                    inline:false
                },
                {
                    name:'3.3 => Lisibilité du salon',
                    value:"Les utilisateurs d'un salon textuel sont tenus d'écrire dans un français/anglais correct et de ne pas user de spam ni de flood pour arriver à ses fins. L'écriture en majuscule ou un trop grand nombre d'émoticônes entraîneront la suppression immédiate et sans délibération du message.",
                    inline:false
                },
                {
                    name:'Article 4 : Les salons Vocaux',
                    value:"------------------------------*------------------------------",
                    inline:false
                },
                {
                    name:'4.1 => Respect primaire',
                    value:"L'utilisateur d'un salon vocal est tenu de respecter son interlocuteur et de ne lui manquer de respect en aucun cas. Les insultes, marques de violences et l'humiliation sont proscrites et sévèrement punies.",
                    inline:false
                },
                {
                    name:'4.2 => Gestion du contenu',
                    value:"Les contenus à caractère sexuellement explicite voir pornographique sont strictement interdits et sont punis. La publicité (ne rentrant pas dans le cadre du règlement) est également punie car non-autorisée. De plus, les incitations à la violence et au terrorisme sont interdits. Les actions illicites, comme la publicité promouvant des cigarettes, drogues ou autres ainsi que le partage de vidéos de mutilation, de torture, de violences sexuelles ou autres sont punies aussi bien dans le cadre de la modération Discord que pénalement. Les modérateurs sont pour cela ouverts au membres du serveur et peuvent être mentionnés pour cette raison (à noter que le spam d'un modérateur pour toutes ces raisons est tout de même punissable).",
                    inline:false
                },
                {
                    name:'4.3 => Bon-entente du salon',
                    value:"Les utilisateurs d'un salon vocal sont tenus de parler dans un français/anglais correct et de ne pas exagérer le volume de leur micro pour éviter une mauvaise compréhension voir de la gêne dans la compréhension d'une discussion.",
                    inline:false
                },
                {
                    name:'Article 5 : Gestion du contenu publicitaire',
                    value:"La publicité sur les salons textuels ou vocaux est strictement interdites par ce présent règlement. Pour promouvoir un bien, un service ou autre (dans la limite légale), l'utilisateur doit contacter un `@Responsable publicitaire` , chargés d'envoyer un message de publicité sur le salon <#962400979507114054> . Les responsables publicitaires sont tenus d'être ouvert aux messages privés au moins pour les membres du serveur, afin de faciliter la communication entre le responsable et le client. Il est à noter que les personnes promouvant un bien ou service reçoivent le rôle `@Publicitaire`.",
                    inline:false
                },
                {
                    name:'Article 6 : Clause de non-exhaustivité',
                    value:"Le staff se réserve le droit de jurisprudence en cas peine non-punissable par ce règlement. De plus, le staff se réserve le droit de modifier à tout moment le règlement sous réserve d'une annonce mentionnant une modification. Le règlement reste malgré tout non-exhaustif et les règles du serveur ne s'y limitent pas.",
                    inline:true
                }])
                .setFooter({text:"Cordialement, l'équipe de modération d'InnohvaCorp", iconURL:message.author.displayAvatarURL()})
                .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_France_%281794–1815%2C_1830–1974%2C_2020–present%29.svg/langfr-225px-Flag_of_France_%281794–1815%2C_1830–1974%2C_2020–present%29.svg.png')
                .setColor('DARK_GREEN');
            message.channel.send({embeds: [embedNoArgs]});
        }
        else if(args[0] == 'a1' || args[0] == '1'){
            const embed1 = new MessageEmbed()
                .setTitle('Article 1 : Présentation')
                .setDescription("Ce serveur représente la communauté de l'entreprise fictive de NationsGlory InnohvaCorp, créée par `@InnohVateur` le 8 avril 2022. Toute tentative d'arnaque, de fraude, d'extorsion de monnaie ainsi que tout non-respect à l'être humain est punis d'un bannissement permanent de ce serveur.")
                .setFooter({text:`Article généré par ${message.author.username}`, iconURL:message.author.displayAvatarURL()})
                .setColor('DARK_GREEN')
                .setTimestamp()
                .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_France_%281794–1815%2C_1830–1974%2C_2020–present%29.svg/langfr-225px-Flag_of_France_%281794–1815%2C_1830–1974%2C_2020–present%29.svg.png');
            message.channel.send({embeds: [embed1]});
        }
        else if(args[0] == 'a2' || args[0] == '2'){
            const embed2 = new MessageEmbed()
                .setTitle('Article 2 : Droits et devoirs du staff')
                .addFields([
                    {
                        name:'2.1 => Définition du staff',
                        value:"Le Staff représente l'ensemble des personnes dotées d'un droit supplémentaire sur le serveur et ayant un pouvoir judiciaire sur les autres membres. Le but d'un membre du staff est de veiller à la bonne entente et à une stabilité morale du serveur. Le staff représente pour être plus précis les personnes dotées des rôles `@Modérateur` , `@Super-Modérateur` , `@Responsable` et `@Administrateur` .",
                        inline:false
                    },
                    {
                        name:'2.2 => Droits du staff',
                        value:"Le staff est libre, dans le cadre de ce règlement d'user des permissions qui lui sont données (bannissement, expulsion, mise en silence ou encore rétrogradation. Un membre du staff ne peut exercer de pression ou ne peut user de son pouvoir sur un autre membre du staff ayant un grade égal ou supérieur à lui ( les grades du staff respectivement du moins important au plus important : `@Modérateur` , `@Super-Modérateur` , `@Responsable` , `@Administrateur` ). En cas de problème avec un `@Administrateur` , le staff peut se réunir et voter la rétrogradation de ce dernier. Aucun membre du staff ne peut être viré sans raison valable. Les responsables et administrateurs se réservent le droit de punir un membre d'une peine supérieure à celle inscrite ici, sous condition de réflexion morale.",
                        inline:false
                    },
                    {
                        name:'2.3 => Devoirs du staff',
                        value:"Le staff se doit d'être impartiale dans ses actions et de respecter à son tour le règlement du serveur. Il ne doit ni insulter, ni de quelques façons que ce soit humilier un membre du serveur en général. Une rétrogradation est envisageable (que ce soit vers un rôle de membre ou vers un grade inférieur à son grade actuel.",
                        inline:false
                    }
                ])
                .setFooter({text:`Article généré par ${message.author.username}`, iconURL:message.author.displayAvatarURL()})
                .setColor('DARK_GREEN')
                .setTimestamp()
                .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_France_%281794–1815%2C_1830–1974%2C_2020–present%29.svg/langfr-225px-Flag_of_France_%281794–1815%2C_1830–1974%2C_2020–present%29.svg.png');
            message.channel.send({embeds: [embed2]});
        }
        else if(args[0] == 'a3' || args[0] == '3'){
            const embed3 = new MessageEmbed()
                .setTitle('Article 3 : Les salons Textuels')
                .addFields([
                    {
                        name:'3.1 => Respect primaire',
                        value:"L'utilisateur d'un salon textuel est tenu de respecter son interlocuteur et de ne lui manquer de respect en aucun cas. Les insultes, marques de violences et l'humiliation sont proscrites et sévèrement punies.",
                        inline:false
                    },
                    {
                        name:'3.2 => Gestion du contenu',
                        value:"Les contenus à caractère sexuellement explicite voir pornographique sont strictement interdits et sont punis. La publicité (ne rentrant pas dans le cadre du règlement) est également punie car non-autorisée. De plus, les incitations à la violence et au terrorisme sont interdits. Les actions illicites, comme la publicité promouvant des cigarettes, drogues ou autres ainsi que le partage de vidéos de mutilation, de torture, de violences sexuelles ou autres sont punies aussi bien dans le cadre de la modération Discord que pénalement. Les modérateurs sont pour cela ouverts au membres du serveur et peuvent être mentionnés pour cette raison (à noter que le spam d'un modérateur pour toutes ces raisons est tout de même punissable).",
                        inline:false
                    },
                    {
                        name:'3.3 => Lisibilité du salon',
                        value:"Les utilisateurs d'un salon textuel sont tenus d'écrire dans un français/anglais correct et de ne pas user de spam ni de flood pour arriver à ses fins. L'écriture en majuscule ou un trop grand nombre d'émoticônes entraîneront la suppression immédiate et sans délibération du message.",
                        inline:false
                    }
                ])
                .setFooter({text:`Article généré par ${message.author.username}`, iconURL:message.author.displayAvatarURL()})
                .setColor('DARK_GREEN')
                .setTimestamp()
                .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_France_%281794–1815%2C_1830–1974%2C_2020–present%29.svg/langfr-225px-Flag_of_France_%281794–1815%2C_1830–1974%2C_2020–present%29.svg.png');
            message.channel.send({embeds: [embed3]});
        }
        else if (args[0] == 'a4' || args[0] == '4'){
            const embed4 = new MessageEmbed()
                .setTitle('Article 4 : Les salons Vocaux')
                .addFields([
                    {
                        name:'4.1 => Respect primaire',
                        value:"L'utilisateur d'un salon vocal est tenu de respecter son interlocuteur et de ne lui manquer de respect en aucun cas. Les insultes, marques de violences et l'humiliation sont proscrites et sévèrement punies.",
                        inline:false
                    },
                    {
                        name:'4.2 => Gestion du contenu',
                        value:"Les contenus à caractère sexuellement explicite voir pornographique sont strictement interdits et sont punis. La publicité (ne rentrant pas dans le cadre du règlement) est également punie car non-autorisée. De plus, les incitations à la violence et au terrorisme sont interdits. Les actions illicites, comme la publicité promouvant des cigarettes, drogues ou autres ainsi que le partage de vidéos de mutilation, de torture, de violences sexuelles ou autres sont punies aussi bien dans le cadre de la modération Discord que pénalement. Les modérateurs sont pour cela ouverts au membres du serveur et peuvent être mentionnés pour cette raison (à noter que le spam d'un modérateur pour toutes ces raisons est tout de même punissable).",
                        inline:false
                    },
                    {
                        name:'4.3 => Bon-entente du salon',
                        value:"Les utilisateurs d'un salon vocal sont tenus de parler dans un français/anglais correct et de ne pas exagérer le volume de leur micro pour éviter une mauvaise compréhension voir de la gêne dans la compréhension d'une discussion.",
                        inline:false
                    }
                ])
                .setFooter({text:`Article généré par ${message.author.username}`, iconURL:message.author.displayAvatarURL()})
                .setColor('DARK_GREEN')
                .setTimestamp()
                .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_France_%281794–1815%2C_1830–1974%2C_2020–present%29.svg/langfr-225px-Flag_of_France_%281794–1815%2C_1830–1974%2C_2020–present%29.svg.png');
            message.channel.send({embeds: [embed4]});
        }
        else if (args[0] == 'a5' || args[0] == '5'){
            const embed5 = new MessageEmbed()
                .setTitle('Article 5 : La gestion de contenu publicitaire')
                .setDescription("La publicité sur les salons textuels ou vocaux est strictement interdites par ce présent règlement. Pour promouvoir un bien, un service ou autre (dans la limite légale), l'utilisateur doit contacter un `@Responsable publicitaire` , chargés d'envoyer un message de publicité sur le salon <#962400979507114054> . Les responsables publicitaires sont tenus d'être ouvert aux messages privés au moins pour les membres du serveur, afin de faciliter la communication entre le responsable et le client. Il est à noter que les personnes promouvant un bien ou service reçoivent le rôle `@Publicitaire`.")
                .setFooter({text:`Article généré par ${message.author.username}`, iconURL:message.author.displayAvatarURL()})
                .setColor('DARK_GREEN')
                .setTimestamp()
                .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_France_%281794–1815%2C_1830–1974%2C_2020–present%29.svg/langfr-225px-Flag_of_France_%281794–1815%2C_1830–1974%2C_2020–present%29.svg.png');
            message.channel.send({embeds: [embed5]});
        }
        else if (args[0] == 'a6' || args[0] == '6'){
            const embed6 = new MessageEmbed()
                .setTitle('Article 6 : Clause de non-exhaustivité')
                .setDescription("Le staff se réserve le droit de jurisprudence en cas peine non-punissable par ce règlement. De plus, le staff se réserve le droit de modifier à tout moment le règlement sous réserve d'une annonce mentionnant une modification. Le règlement reste malgré tout non-exhaustif et les règles du serveur ne s'y limitent pas.")
                .setFooter({text:`Article généré par ${message.author.username}`, iconURL:message.author.displayAvatarURL()})
                .setColor('DARK_GREEN')
                .setTimestamp()
                .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_France_%281794–1815%2C_1830–1974%2C_2020–present%29.svg/langfr-225px-Flag_of_France_%281794–1815%2C_1830–1974%2C_2020–present%29.svg.png');
            message.channel.send({embeds: [embed6]});
        }
        else{
            const embedError = new MessageEmbed()
                .setTitle('Erreur : Argument Inconnu...')
                .setDescription(`Oups ! On dirait que l'argument est incorrect/manquant... Veuillez réessayer avec un argument valide.`)
                .setColor('DARK_RED')
                .setFooter({text:`Commande générée par ${message.author.username}`, iconURL:message.author.displayAvatarURL()})
                .setTimestamp();
            message.channel.send({embeds: [embedError]});
        }
    },
    options:[
        {
            name:'type',
            description:'Choisissez le type de règlement que vous voulez afficher.',
            required:true,
            type:'STRING',
            choices:[
                {
                    name:'all',
                    value:'all'
                },
                {
                    name:'1',
                    value:'1'
                },
                {
                    name:'2',
                    value:'2'
                },
                {
                    name:'3',
                    value:'3'
                },
                {
                    name:'4',
                    value:'4'
                },
                {
                    name:'5',
                    value:'5'
                },
                {
                    name:'6',
                    value:'6'
                }
            ]
        },
        {
            name:'lang',
            description:'Choisissez la langue du règlement / Choose the language of the rules',
            required:false,
            type:'STRING',
            choices:[
                {
                    name:'fr',
                    value:'fr'
                },
                {
                    name:'en',
                    value:'en'
                }
            ]
        }
    ],
    runInteraction: (client, interaction) => {
        ruleChoice1 = interaction.options.getString('type');
        ruleLanguage = interaction.options.getString('lang');
        if(!ruleLanguage || ruleLanguage == 'fr'){
        if(ruleChoice1 == 'all'){
            const embedAll = new MessageEmbed()
                .setTitle('Règlement du serveur')
                .setDescription('Voici le règlement du serveur discord d\'InnohvaCorp.')
                .addFields([{
                    name:'Article 1 : Présentation',
                    value:"Ce serveur représente la communauté de l'entreprise fictive de NationsGlory InnohvaCorp, créée par `@InnohVateur` le 8 avril 2022. Toute tentative d'arnaque, de fraude, d'extorsion de monnaie ainsi que tout non-respect à l'être humain est punis d'un bannissement permanent de ce serveur.",
                    inline:false
                },
                {
                    name:'Article 2 : Droits et devoirs du staff',
                    value:'------------------------------*------------------------------',
                    inline:false
                },
                {
                    name:'2.1 => Définition du staff',
                    value:"Le Staff représente l'ensemble des personnes dotées d'un droit supplémentaire sur le serveur et ayant un pouvoir judiciaire sur les autres membres. Le but d'un membre du staff est de veiller à la bonne entente et à une stabilité morale du serveur. Le staff représente pour être plus précis les personnes dotées des rôles `@Modérateur` , `@Super-Modérateur` , `@Responsable` et `@Administrateur` .",
                    inline:false
                },
                {
                    name:'2.2 => Droits du staff',
                    value:"Le staff est libre, dans le cadre de ce règlement d'user des permissions qui lui sont données (bannissement, expulsion, mise en silence ou encore rétrogradation. Un membre du staff ne peut exercer de pression ou ne peut user de son pouvoir sur un autre membre du staff ayant un grade égal ou supérieur à lui ( les grades du staff respectivement du moins important au plus important : `@Modérateur` , `@Super-Modérateur` , `@Responsable` , `@Administrateur` ). En cas de problème avec un `@Administrateur` , le staff peut se réunir et voter la rétrogradation de ce dernier. Aucun membre du staff ne peut être viré sans raison valable. Les responsables et administrateurs se réservent le droit de punir un membre d'une peine supérieure à celle inscrite ici, sous condition de réflexion morale.",
                    inline:false
                },
                {
                    name:'2.3 => Devoirs du staff',
                    value:"Le staff se doit d'être impartiale dans ses actions et de respecter à son tour le règlement du serveur. Il ne doit ni insulter, ni de quelques façons que ce soit humilier un membre du serveur en général. Une rétrogradation est envisageable (que ce soit vers un rôle de membre ou vers un grade inférieur à son grade actuel.",
                    inline:false
                },
                {
                    name:'Article 3 : Les salons Textuels',
                    value:'------------------------------*------------------------------',
                    inline:false
                },
                {
                    name:'3.1 => Respect primaire',
                    value:"L'utilisateur d'un salon textuel est tenu de respecter son interlocuteur et de ne lui manquer de respect en aucun cas. Les insultes, marques de violences et l'humiliation sont proscrites et sévèrement punies.",
                    inline:false
                },
                {
                    name:'3.2 => Gestion du contenu',
                    value:"Les contenus à caractère sexuellement explicite voir pornographique sont strictement interdits et sont punis. La publicité (ne rentrant pas dans le cadre du règlement) est également punie car non-autorisée. De plus, les incitations à la violence et au terrorisme sont interdits. Les actions illicites, comme la publicité promouvant des cigarettes, drogues ou autres ainsi que le partage de vidéos de mutilation, de torture, de violences sexuelles ou autres sont punies aussi bien dans le cadre de la modération Discord que pénalement. Les modérateurs sont pour cela ouverts au membres du serveur et peuvent être mentionnés pour cette raison (à noter que le spam d'un modérateur pour toutes ces raisons est tout de même punissable).",
                    inline:false
                },
                {
                    name:'3.3 => Lisibilité du salon',
                    value:"Les utilisateurs d'un salon textuel sont tenus d'écrire dans un français/anglais correct et de ne pas user de spam ni de flood pour arriver à ses fins. L'écriture en majuscule ou un trop grand nombre d'émoticônes entraîneront la suppression immédiate et sans délibération du message.",
                    inline:false
                },
                {
                    name:'Article 4 : Les salons Vocaux',
                    value:"------------------------------*------------------------------",
                    inline:false
                },
                {
                    name:'4.1 => Respect primaire',
                    value:"L'utilisateur d'un salon vocal est tenu de respecter son interlocuteur et de ne lui manquer de respect en aucun cas. Les insultes, marques de violences et l'humiliation sont proscrites et sévèrement punies.",
                    inline:false
                },
                {
                    name:'4.2 => Gestion du contenu',
                    value:"Les contenus à caractère sexuellement explicite voir pornographique sont strictement interdits et sont punis. La publicité (ne rentrant pas dans le cadre du règlement) est également punie car non-autorisée. De plus, les incitations à la violence et au terrorisme sont interdits. Les actions illicites, comme la publicité promouvant des cigarettes, drogues ou autres ainsi que le partage de vidéos de mutilation, de torture, de violences sexuelles ou autres sont punies aussi bien dans le cadre de la modération Discord que pénalement. Les modérateurs sont pour cela ouverts au membres du serveur et peuvent être mentionnés pour cette raison (à noter que le spam d'un modérateur pour toutes ces raisons est tout de même punissable).",
                    inline:false
                },
                {
                    name:'4.3 => Bon-entente du salon',
                    value:"Les utilisateurs d'un salon vocal sont tenus de parler dans un français/anglais correct et de ne pas exagérer le volume de leur micro pour éviter une mauvaise compréhension voir de la gêne dans la compréhension d'une discussion.",
                    inline:false
                },
                {
                    name:'Article 5 : Gestion du contenu publicitaire',
                    value:"La publicité sur les salons textuels ou vocaux est strictement interdites par ce présent règlement. Pour promouvoir un bien, un service ou autre (dans la limite légale), l'utilisateur doit contacter un `@Responsable publicitaire` , chargés d'envoyer un message de publicité sur le salon <#962400979507114054> . Les responsables publicitaires sont tenus d'être ouvert aux messages privés au moins pour les membres du serveur, afin de faciliter la communication entre le responsable et le client. Il est à noter que les personnes promouvant un bien ou service reçoivent le rôle `@Publicitaire`.",
                    inline:false
                },
                {
                    name:'Article 6 : Clause de non-exhaustivité',
                    value:"Le staff se réserve le droit de jurisprudence en cas peine non-punissable par ce règlement. De plus, le staff se réserve le droit de modifier à tout moment le règlement sous réserve d'une annonce mentionnant une modification. Le règlement reste malgré tout non-exhaustif et les règles du serveur ne s'y limitent pas.",
                    inline:true
                }])
                .setFooter({text:"Cordialement, l'équipe de modération d'InnohvaCorp", iconURL:interaction.user.displayAvatarURL()})
                .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_France_%281794–1815%2C_1830–1974%2C_2020–present%29.svg/langfr-225px-Flag_of_France_%281794–1815%2C_1830–1974%2C_2020–present%29.svg.png')
                .setColor('DARK_GREEN');
            interaction.reply({embeds: [embedAll]});
        }
        else if(ruleChoice1 == '1'){
            const embed1 = new MessageEmbed()
                .setTitle('Article 1 : Présentation')
                .setDescription("Ce serveur représente la communauté de l'entreprise fictive de NationsGlory InnohvaCorp, créée par `@InnohVateur` le 8 avril 2022. Toute tentative d'arnaque, de fraude, d'extorsion de monnaie ainsi que tout non-respect à l'être humain est punis d'un bannissement permanent de ce serveur.")
                .setFooter({text:`Article généré par ${interaction.user.username}`, iconURL:interaction.user.displayAvatarURL()})
                .setColor('DARK_GREEN')
                .setTimestamp()
                .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_France_%281794–1815%2C_1830–1974%2C_2020–present%29.svg/langfr-225px-Flag_of_France_%281794–1815%2C_1830–1974%2C_2020–present%29.svg.png');
            interaction.reply({embeds: [embed1]});
        }
        else if(ruleChoice1 == '2'){
            const embed2 = new MessageEmbed()
                .setTitle('Article 2 : Droits et devoirs du staff')
                .addFields([
                    {
                        name:'2.1 => Définition du staff',
                        value:"Le Staff représente l'ensemble des personnes dotées d'un droit supplémentaire sur le serveur et ayant un pouvoir judiciaire sur les autres membres. Le but d'un membre du staff est de veiller à la bonne entente et à une stabilité morale du serveur. Le staff représente pour être plus précis les personnes dotées des rôles `@Modérateur` , `@Super-Modérateur` , `@Responsable` et `@Administrateur` .",
                        inline:false
                    },
                    {
                        name:'2.2 => Droits du staff',
                        value:"Le staff est libre, dans le cadre de ce règlement d'user des permissions qui lui sont données (bannissement, expulsion, mise en silence ou encore rétrogradation. Un membre du staff ne peut exercer de pression ou ne peut user de son pouvoir sur un autre membre du staff ayant un grade égal ou supérieur à lui ( les grades du staff respectivement du moins important au plus important : `@Modérateur` , `@Super-Modérateur` , `@Responsable` , `@Administrateur` ). En cas de problème avec un `@Administrateur` , le staff peut se réunir et voter la rétrogradation de ce dernier. Aucun membre du staff ne peut être viré sans raison valable. Les responsables et administrateurs se réservent le droit de punir un membre d'une peine supérieure à celle inscrite ici, sous condition de réflexion morale.",
                        inline:false
                    },
                    {
                        name:'2.3 => Devoirs du staff',
                        value:"Le staff se doit d'être impartiale dans ses actions et de respecter à son tour le règlement du serveur. Il ne doit ni insulter, ni de quelques façons que ce soit humilier un membre du serveur en général. Une rétrogradation est envisageable (que ce soit vers un rôle de membre ou vers un grade inférieur à son grade actuel.",
                        inline:false
                    }
                ])
                .setFooter({text:`Article généré par ${interaction.user.username}`, iconURL:interaction.user.displayAvatarURL()})
                .setColor('DARK_GREEN')
                .setTimestamp()
                .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_France_%281794–1815%2C_1830–1974%2C_2020–present%29.svg/langfr-225px-Flag_of_France_%281794–1815%2C_1830–1974%2C_2020–present%29.svg.png');
            interaction.reply({embeds: [embed2]});
        }
        else if(ruleChoice1 == '3'){
            const embed3 = new MessageEmbed()
                .setTitle('Article 3 : Les salons Textuels')
                .addFields([
                    {
                        name:'3.1 => Respect primaire',
                        value:"L'utilisateur d'un salon textuel est tenu de respecter son interlocuteur et de ne lui manquer de respect en aucun cas. Les insultes, marques de violences et l'humiliation sont proscrites et sévèrement punies.",
                        inline:false
                    },
                    {
                        name:'3.2 => Gestion du contenu',
                        value:"Les contenus à caractère sexuellement explicite voir pornographique sont strictement interdits et sont punis. La publicité (ne rentrant pas dans le cadre du règlement) est également punie car non-autorisée. De plus, les incitations à la violence et au terrorisme sont interdits. Les actions illicites, comme la publicité promouvant des cigarettes, drogues ou autres ainsi que le partage de vidéos de mutilation, de torture, de violences sexuelles ou autres sont punies aussi bien dans le cadre de la modération Discord que pénalement. Les modérateurs sont pour cela ouverts au membres du serveur et peuvent être mentionnés pour cette raison (à noter que le spam d'un modérateur pour toutes ces raisons est tout de même punissable).",
                        inline:false
                    },
                    {
                        name:'3.3 => Lisibilité du salon',
                        value:"Les utilisateurs d'un salon textuel sont tenus d'écrire dans un français/anglais correct et de ne pas user de spam ni de flood pour arriver à ses fins. L'écriture en majuscule ou un trop grand nombre d'émoticônes entraîneront la suppression immédiate et sans délibération du message.",
                        inline:false
                    }
                ])
                .setFooter({text:`Article généré par ${interaction.user.username}`, iconURL:interaction.user.displayAvatarURL()})
                .setColor('DARK_GREEN')
                .setTimestamp()
                .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_France_%281794–1815%2C_1830–1974%2C_2020–present%29.svg/langfr-225px-Flag_of_France_%281794–1815%2C_1830–1974%2C_2020–present%29.svg.png');
            interaction.reply({embeds: [embed3]});
        }
        else if(ruleChoice1 == '4'){
            const embed4 = new MessageEmbed()
                .setTitle('Article 4 : Les salons Vocaux')
                .addFields([
                    {
                        name:'4.1 => Respect primaire',
                        value:"L'utilisateur d'un salon vocal est tenu de respecter son interlocuteur et de ne lui manquer de respect en aucun cas. Les insultes, marques de violences et l'humiliation sont proscrites et sévèrement punies.",
                        inline:false
                    },
                    {
                        name:'4.2 => Gestion du contenu',
                        value:"Les contenus à caractère sexuellement explicite voir pornographique sont strictement interdits et sont punis. La publicité (ne rentrant pas dans le cadre du règlement) est également punie car non-autorisée. De plus, les incitations à la violence et au terrorisme sont interdits. Les actions illicites, comme la publicité promouvant des cigarettes, drogues ou autres ainsi que le partage de vidéos de mutilation, de torture, de violences sexuelles ou autres sont punies aussi bien dans le cadre de la modération Discord que pénalement. Les modérateurs sont pour cela ouverts au membres du serveur et peuvent être mentionnés pour cette raison (à noter que le spam d'un modérateur pour toutes ces raisons est tout de même punissable).",
                        inline:false
                    },
                    {
                        name:'4.3 => Bon-entente du salon',
                        value:"Les utilisateurs d'un salon vocal sont tenus de parler dans un français/anglais correct et de ne pas exagérer le volume de leur micro pour éviter une mauvaise compréhension voir de la gêne dans la compréhension d'une discussion.",
                        inline:false
                    }
                ])
                .setFooter({text:`Article généré par ${interaction.user.username}`, iconURL:interaction.user.displayAvatarURL()})
                .setColor('DARK_GREEN')
                .setTimestamp()
                .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_France_%281794–1815%2C_1830–1974%2C_2020–present%29.svg/langfr-225px-Flag_of_France_%281794–1815%2C_1830–1974%2C_2020–present%29.svg.png');
            interaction.reply({embeds: [embed4]});
        }
        else if(ruleChoice1 == '5'){
            const embed5 = new MessageEmbed()
                .setTitle('Article 5 : La gestion de contenu publicitaire')
                .setDescription("La publicité sur les salons textuels ou vocaux est strictement interdites par ce présent règlement. Pour promouvoir un bien, un service ou autre (dans la limite légale), l'utilisateur doit contacter un `@Responsable publicitaire` , chargés d'envoyer un message de publicité sur le salon <#962400979507114054> . Les responsables publicitaires sont tenus d'être ouvert aux messages privés au moins pour les membres du serveur, afin de faciliter la communication entre le responsable et le client. Il est à noter que les personnes promouvant un bien ou service reçoivent le rôle `@Publicitaire`.")
                .setFooter({text:`Article généré par ${interaction.user.username}`, iconURL:interaction.user.displayAvatarURL()})
                .setColor('DARK_GREEN')
                .setTimestamp()
                .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_France_%281794–1815%2C_1830–1974%2C_2020–present%29.svg/langfr-225px-Flag_of_France_%281794–1815%2C_1830–1974%2C_2020–present%29.svg.png');
            interaction.reply({embeds: [embed5]});
        }
        else if(ruleChoice1 == '6'){
            const embed6 = new MessageEmbed()
                .setTitle('Article 6 : Clause de non-exhaustivité')
                .setDescription("Le staff se réserve le droit de jurisprudence en cas peine non-punissable par ce règlement. De plus, le staff se réserve le droit de modifier à tout moment le règlement sous réserve d'une annonce mentionnant une modification. Le règlement reste malgré tout non-exhaustif et les règles du serveur ne s'y limitent pas.")
                .setFooter({text:`Article généré par ${interaction.user.username}`, iconURL:interaction.user.displayAvatarURL()})
                .setColor('DARK_GREEN')
                .setTimestamp()
                .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_France_%281794–1815%2C_1830–1974%2C_2020–present%29.svg/langfr-225px-Flag_of_France_%281794–1815%2C_1830–1974%2C_2020–present%29.svg.png');
            interaction.reply({embeds: [embed6]});
        }
        else{
            interaction.reply('Erreur : L\'argument est manquant/incorrect !');
        }
    }else{
        if(ruleChoice1 == 'all'){
            const embedAll = new MessageEmbed()
                .setTitle('Server rules')
                .setDescription('This is the server rules of InnohvaCorp discord community ! Have a good time...')
                .addFields([{
                    name:'First article : Presentation',
                    value:"This server is the community of the fictive NationsGlory's enterprise InnohvaCorp, created by `@InnohVateur`. Any attempt at scam, fraud, extortion of currency as well as any non-respect to the human being is punished by a permanent ban from this server.",
                    inline:false
                },
                {
                    name:'Second article : Staff\'s rights and duties',
                    value:'------------------------------*------------------------------',
                    inline:false
                },
                {
                    name:'2.1 => Staff definition',
                    value:"The staff represents all people who have additional rights on the server and all peaople who have a legislative power on other members. The aim of the staff is to ensure the right atmosphere and the social stability of the server. Precisely, the staff is made of people with roles `@Modérateur` (Moderator), `@Super-Modérateur` (Super-Moderator), `@Responsable` (Sub-Admin) et `@Administrateur`(Administrator) .",
                    inline:false
                },
                {
                    name:'2.2 => Staff\'s rights',
                    value:"The staff can, under this regulation, use the permissions granted to him (ban, kick, mute or for example retrogradation). A staff member cannot make pressure on an other server member and he can't puniish a staff member who have an equal or a higher position than him. ( The staff roles from the less important to the most important : `@Modérateur` , `@Super-Modérateur` , `@Responsable` , `@Administrateur` ). In case of problem with an `@Administrateur` , staff members can organize a gathering se réunir to vote the retrogradation of this last. No staff members can be fired without a valid reason(s). Sub-admins and Administrators can punish a staff member with a higher sanction than the sanctions wrote in this regulations.",
                    inline:false
                },
                {
                    name:'2.3 => Staff\'s duties',
                    value:"The staff, in his actions, have to be impartial and respect the regulation like every members. He don't have to insult, and in any way humiliate a server member globally. A retrogradation is possible (To a less important staff role of to a simple member role) when the staff member doesn't respect the terms of this regulation and this article.",
                    inline:false
                },
                {
                    name:'Third article : Text channels',
                    value:'------------------------------*------------------------------',
                    inline:false
                },
                {
                    name:'3.1 => Primary respect',
                    value:"The text channel's user have to respect his interlocutor. Insults, vioent speeches and humiliation are prohibited severely punished.",
                    inline:false
                },
                {
                    name:'3.2 => Content management',
                    value:"Content of a sexually explicit or even pornographic nature are strictly prohibited and are punished. Advertising (not falling within the framework of the regulations) is also punished because it is not authorized. Moreover, calls to violence and terrorism are prohibited. Illicit actions, such as advertising promoting cigarettes, drugs or others as well as the sharing of videos of mutilation, torture, sexual violence or others are punished both under Discord moderation and criminally. Moderators are therefore open to members of the server and can be mentioned for this reason (note that spamming a moderator for all these reasons is still punishable).",
                    inline:false
                },
                {
                    name:'3.3 => Channel readability',
                    value:"The text channel's users have to write in a correct english/french and to don't use spam/flood to get this way. Uppercase texts and message with a very high emoji's amount will be immediately deleted without deliberation.",
                    inline:false
                },
                {
                    name:'Fourth article : Audio channels',
                    value:"------------------------------*------------------------------",
                    inline:false
                },
                {
                    name:'4.1 => Primary respect',
                    value:"The audio channel's user have to respect his interlocutor. Insults, violent speeches and humiliation are prohibited and severely punished.",
                    inline:false
                },
                {
                    name:'4.2 => Content management',
                    value:"Content of a sexually explicit or even pornographic nature are strictly prohibited and are punished. Advertising (not falling within the framework of the regulations) is also punished because it is not authorized. Moreover, calls to violence and terrorism are prohibited. Illicit actions, such as advertising promoting cigarettes, drugs or others as well as the sharing of videos of mutilation, torture, sexual violence or others are punished both under Discord moderation and criminally. Moderators are therefore open to members of the server and can be mentioned for this reason (note that spamming a moderator for all these reasons is still punishable).",
                    inline:false
                },
                {
                    name:'4.3 => Right atmosphere of the channel',
                    value:"Audio channel's users have to speak in a correct english/french and to don't exaggerate the volume of their microphone to avoid misunderstanding or even embarrassment during a discussion.",
                    inline:false
                },
                {
                    name:'Fifth article : Advertising content management',
                    value:"Advertising on text or voice channels is strictly prohibited by these rules. To promote a good, a service or other (within the legal limit), the user must contact an `@Responsable publicitaire` (Advertising manager), in charge of sending an advertising message on the channel <#962400979507114054> (Ads). Advertising managers are required to be open to private messages at least to members of the server, in order to facilitate communication between the manager and the client. It should be noted that people promoting a good or service receive the `@Publicitaire` (Advertiser) role.",
                    inline:false
                },
                {
                    name:'Sixth article : Non-exhaustiveness clause',
                    value:"The staff reserves the right of case law in the event of a non-punishable penalty by this regulation. In addition, the staff reserves the right to modify the rules at any time subject to an announcement mentioning a modification. However, The regulation remain non-exhaustive and the rules of the server are not limited to him.",
                    inline:true
                }])
                .setFooter({text:"Cordialement, l'équipe de modération d'InnohvaCorp", iconURL:interaction.user.displayAvatarURL()})
                .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg/langfr-225px-Flag_of_the_United_Kingdom_%283-5%29.svg.png')
                .setColor('DARK_GREEN');
            interaction.reply({embeds: [embedAll]});
        }
        else if(ruleChoice1 == '1'){
            const embed1 = new MessageEmbed()
                .setTitle('First article : Presentation')
                .setDescription("This server is the community of the fictive NationsGlory's enterprise InnohvaCorp, created by `@InnohVateur`. Any attempt at scam, fraud, extortion of currency as well as any non-respect to the human being is punished by a permanent ban from this server.")
                .setFooter({text:`Article généré par ${interaction.user.username}`, iconURL:interaction.user.displayAvatarURL()})
                .setColor('DARK_GREEN')
                .setTimestamp()
                .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg/langfr-225px-Flag_of_the_United_Kingdom_%283-5%29.svg.png');
            interaction.reply({embeds: [embed1]});
        }
        else if(ruleChoice1 == '2'){
            const embed2 = new MessageEmbed()
                .setTitle('Second article : Staff\'s rights and duties')
                .addFields([
                    {
                        name:'2.1 => Staff definition',
                        value:"The staff represents all people who have additional rights on the server and all peaople who have a legislative power on other members. The aim of the staff is to ensure the right atmosphere and the social stability of the server. Precisely, the staff is made of people with roles `@Modérateur` (Moderator), `@Super-Modérateur` (Super-Moderator), `@Responsable` (Sub-Admin) et `@Administrateur`(Administrator) .",
                        inline:false
                    },
                    {
                        name:'2.2 => Staff\'s rights',
                        value:"The staff can, under this regulation, use the permissions granted to him (ban, kick, mute or for example retrogradation). A staff member cannot make pressure on an other server member and he can't puniish a staff member who have an equal or a higher position than him. ( The staff roles from the less important to the most important : `@Modérateur` , `@Super-Modérateur` , `@Responsable` , `@Administrateur` ). In case of problem with an `@Administrateur` , staff members can organize a gathering se réunir to vote the retrogradation of this last. No staff members can be fired without a valid reason(s). Sub-admins and Administrators can punish a staff member with a higher sanction than the sanctions wrote in this regulations.",
                        inline:false
                    },
                    {
                        name:'2.3 => Staff\'s duties',
                        value:"The staff, in his actions, have to be impartial and respect the regulation like every members. He don't have to insult, and in any way humiliate a server member globally. A retrogradation is possible (To a less important staff role of to a simple member role) when the staff member doesn't respect the terms of this regulation and this article.",
                        inline:false
                    }
                ])
                .setFooter({text:`Article généré par ${interaction.user.username}`, iconURL:interaction.user.displayAvatarURL()})
                .setColor('DARK_GREEN')
                .setTimestamp()
                .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg/langfr-225px-Flag_of_the_United_Kingdom_%283-5%29.svg.png');
            interaction.reply({embeds: [embed2]});
        }
        else if(ruleChoice1 == '3'){
            const embed3 = new MessageEmbed()
                .setTitle('Third article : Text channels')
                .addFields([
                    {
                        name:'3.1 => Primary respect',
                        value:"The text channel's user have to respect his interlocutor. Insults, vioent speeches and humiliation are prohibited severely punished.",
                        inline:false
                    },
                    {
                        name:'3.2 => Content management',
                        value:"Content of a sexually explicit or even pornographic nature are strictly prohibited and are punished. Advertising (not falling within the framework of the regulations) is also punished because it is not authorized. Moreover, calls to violence and terrorism are prohibited. Illicit actions, such as advertising promoting cigarettes, drugs or others as well as the sharing of videos of mutilation, torture, sexual violence or others are punished both under Discord moderation and criminally. Moderators are therefore open to members of the server and can be mentioned for this reason (note that spamming a moderator for all these reasons is still punishable).",
                        inline:false
                    },
                    {
                        name:'3.3 => Channel readability',
                        value:"The text channel's users have to write in a correct english/french and to don't use spam/flood to get this way. Uppercase texts and message with a very high emoji's amount will be immediately deleted without deliberation.",
                        inline:false
                    }
                ])
                .setFooter({text:`Article généré par ${interaction.user.username}`, iconURL:interaction.user.displayAvatarURL()})
                .setColor('DARK_GREEN')
                .setTimestamp()
                .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg/langfr-225px-Flag_of_the_United_Kingdom_%283-5%29.svg.png');
            interaction.reply({embeds: [embed3]});
        }
        else if(ruleChoice1 == '4'){
            const embed4 = new MessageEmbed()
                .setTitle('Fourth article : Audio channels')
                .addFields([
                    {
                        name:'4.1 => Primary respect',
                        value:"The audio channel's user have to respect his interlocutor. Insults, violent speeches and humiliation are prohibited and severely punished.",
                        inline:false
                    },
                    {
                        name:'4.2 => Content management',
                        value:"Content of a sexually explicit or even pornographic nature are strictly prohibited and are punished. Advertising (not falling within the framework of the regulations) is also punished because it is not authorized. Moreover, calls to violence and terrorism are prohibited. Illicit actions, such as advertising promoting cigarettes, drugs or others as well as the sharing of videos of mutilation, torture, sexual violence or others are punished both under Discord moderation and criminally. Moderators are therefore open to members of the server and can be mentioned for this reason (note that spamming a moderator for all these reasons is still punishable).",
                        inline:false
                    },
                    {
                        name:'4.3 => Right atmosphere of the channel',
                        value:"Audio channel's users have to speak in a correct english/french and to don't exaggerate the volume of their microphone to avoid misunderstanding or even embarrassment during a discussion.",
                        inline:false
                    }
                ])
                .setFooter({text:`Article généré par ${interaction.user.username}`, iconURL:interaction.user.displayAvatarURL()})
                .setColor('DARK_GREEN')
                .setTimestamp()
                .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg/langfr-225px-Flag_of_the_United_Kingdom_%283-5%29.svg.png');
            interaction.reply({embeds: [embed4]});
        }
        else if(ruleChoice1 == '5'){
            const embed5 = new MessageEmbed()
                .setTitle('Fifth article : Advertising content management')
                .setDescription("Advertising on text or voice channels is strictly prohibited by these rules. To promote a good, a service or other (within the legal limit), the user must contact an `@Responsable publicitaire` (Advertising manager), in charge of sending an advertising message on the channel <#962400979507114054> (Ads). Advertising managers are required to be open to private messages at least to members of the server, in order to facilitate communication between the manager and the client. It should be noted that people promoting a good or service receive the `@Publicitaire` (Advertiser) role.")
                .setFooter({text:`Article généré par ${interaction.user.username}`, iconURL:interaction.user.displayAvatarURL()})
                .setColor('DARK_GREEN')
                .setTimestamp()
                .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg/langfr-225px-Flag_of_the_United_Kingdom_%283-5%29.svg.png');
            interaction.reply({embeds: [embed5]});
        }
        else if(ruleChoice1 == '6'){
            const embed6 = new MessageEmbed()
                .setTitle('Sixth article : Non-exhaustiveness clause')
                .setDescription("The staff reserves the right of case law in the event of a non-punishable penalty by this regulation. In addition, the staff reserves the right to modify the rules at any time subject to an announcement mentioning a modification. However, The regulation remain non-exhaustive and the rules of the server are not limited to him.")
                .setFooter({text:`Article généré par ${interaction.user.username}`, iconURL:interaction.user.displayAvatarURL()})
                .setColor('DARK_GREEN')
                .setTimestamp()
                .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg/langfr-225px-Flag_of_the_United_Kingdom_%283-5%29.svg.png');
            interaction.reply({embeds: [embed6]});
        }
        else{
            interaction.reply('Error : Argument uncorrect/missing !');
        }
    }
}
}