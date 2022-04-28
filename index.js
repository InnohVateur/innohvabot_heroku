const { Client, Collection } = require('discord.js');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const client = new Client({intents: 98045, partials: ['USER', 'CHANNEL', 'GUILD_MEMBER', 'MESSAGE', 'REACTION', 'GUILD_SCHEDULED_EVENT']});
const Logger = require('./utils/Logger');
//const disbut = require('discord-buttons');
//disbut(client);

['commands', 'buttons', 'selects'].forEach(x => client[x] = new Collection());
['CommandUtil', 'EventUtil', 'ButtonUtil', 'SelectUtil'].forEach(handler => { require(`./utils/handlers/${handler}`)(client) });
require("./utils/Functions")(client);

process.on('exit', code => { Logger.error(`InnohvaBot logged out with the code ${code}`) });
process.on('uncaughtException', (err, origin) => { Logger.error(`UNCAUGHT_EXCEPTION: ${err} at ${origin}`) });
process.on('unhandledRejection', (reason, promise) => { Logger.error(`UNHANDLED_REJECTION at ${promise} with the reason ${reason}`) });
process.on('warning', (...args) => Logger.error(...args));

mongoose.connect(process.env.DATABASE_URI, {
    autoIndex:false,
    maxPoolSize:10,
    serverSelectionTimeoutMS:5000,
    socketTimeoutMS:45000,
    family:4
}).then(() => {Logger.client("Client connected to the database.");}).catch(err => {console.log(err);});

client.login(process.env.DISCORD_TOKEN);