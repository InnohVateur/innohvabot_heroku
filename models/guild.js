const mongoose = require('mongoose');

const guildSchema = mongoose.Schema({
    id: String,
    prefix: { 'type':String, 'default':'.' },
    logChannel: {'type':String, 'default':'968122752454242306'},
    airportChannel: {'type':String, 'default': '967736090192654397'}
});

module.exports = mongoose.model('Guild', guildSchema);