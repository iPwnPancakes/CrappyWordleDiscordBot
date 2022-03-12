const { Command } = require('../Infrastructure/Commands/Command');

class HelpCommand extends Command {
    handle(message) {
        message.reply('Asked for help');
    }
}

module.exports = { HelpCommand };
