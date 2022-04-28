const chalk = require('chalk');
const dayjs = require('dayjs');

const format = '{tstamp} {tag} {txt} \n';

function error(content) {
    write(content, 'black', 'bgRed', 'ERROR', true);
}
function warn(content) {
    write(content, 'black', 'bgYellow', 'WARN', true);
}
function typo(content) {
    write(content, 'black', 'bgCyan', 'TYPO', true);
}
function cmd(content) {
    write(content, 'black', 'bgMagenta', 'CMD', false);
}
function client(content) {
    write(content, 'black', 'bgBlue', 'CLIENT', false);
}
function event(content) {
    write(content, 'black', 'bgGreen', 'EVT', false);
}
function guild(content) {
    write(content, 'black', 'bgWhite', 'GUILD', false);
}

function write(content, tagColor, bgTagColor, tag, error = false) {
    const timestamp = `[${dayjs().format('DD/MM - HH:mm:ss')}]`;
    const logTag = `[${tag}]`;
    const stream = error ? process.stderr:process.stdout;

    const item = format
        .replace('{tstamp}', chalk.gray(timestamp))
        .replace('{tag}', chalk[bgTagColor][tagColor](logTag))
        .replace('{txt}', chalk.white(content));

    stream.write(item);
}

module.exports = { error, typo, warn, cmd, client, event, guild };