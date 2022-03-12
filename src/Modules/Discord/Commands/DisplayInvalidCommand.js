const { Command } = require('../Infrastructure/Commands/Command');

class DisplayInvalidCommand extends Command {
    handle(message) {
        message.reply('Invalid command');
    }
}

module.exports = { DisplayInvalidCommand };
