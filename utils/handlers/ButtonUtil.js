const { promisify } = require('util');
const { glob } = require('glob');
const pGlob = promisify(glob);
const Logger = require('../Logger');

module.exports = async client => {
    (await pGlob(`${process.cwd()}/buttons/*/*.js`)).map(async btnFile => {
        const btn = require(btnFile);

        if(!btn.name) return Logger.warn(`Button not loaded : There is no name on this button (at ${btnFile})`);
        client.buttons.set(btn.name, btn);
    });
};