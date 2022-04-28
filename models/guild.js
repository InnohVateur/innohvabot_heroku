const mongoose = require('mongoose');

const guildSchema = mongoose.Schema({
    id: String,
    prefix: { 'type':String, 'default':'.' },
    logChannel: {'type':String, 'default':'968122752454242306'}
});

module.exports = mongoose.model('Guild', guildSchema);