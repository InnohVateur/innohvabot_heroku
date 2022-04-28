module.exports = {
    name : 'threadCreate',
    once : false,
    execute(client, thread) {
        thread.join();
    }
}