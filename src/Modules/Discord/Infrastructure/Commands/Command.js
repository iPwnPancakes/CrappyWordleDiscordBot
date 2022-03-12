const { Message } = require('discord.js');

class Command {
    /**
     * @param {Message} message
     *
     * @return void
     */
    handle(message) {
        throw new Error('Calling default Command');
    }
}

module.exports = { Command };
